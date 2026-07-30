import {
  gridRowNodeSelector,
  gridRowTreeSelector,
  gridRowsLookupSelector,
  gridColumnLookupSelector,
} from '@mui/x-data-grid-pro';
import type { GridRowId, GridGroupNode, GridLeafNode } from '@mui/x-data-grid-pro';
import { BaseReorderOperation, rowReorderUtils } from '@mui/x-data-grid-pro/internals';
import type { ReorderOperation, ReorderExecutionContext } from '@mui/x-data-grid-pro/internals';
import { gridRowGroupingSanitizedModelSelector } from '../rowGrouping';
import { getGroupingRules, getCellGroupingCriteria } from '../rowGrouping/gridRowGroupingUtils';
import type { GridPrivateApiPremium } from '../../../models/gridApiPremium';

type ReorderExecutionContextType = ReorderExecutionContext<GridPrivateApiPremium>;

/**
 * Handles moving leaf nodes between different parent groups.
 */
export class CrossParentLeafOperation extends BaseReorderOperation {
  readonly operationType = 'cross-parent-leaf';

  detectOperation(ctx: ReorderExecutionContext): ReorderOperation | null {
    const { sourceRowId, placeholderIndex, sortedFilteredRowIds, rowTree, apiRef } = ctx;

    const sourceNode = gridRowNodeSelector(apiRef, sourceRowId);
    if (!sourceNode || sourceNode.type === 'footer') {
      return null;
    }

    let targetNode = gridRowNodeSelector(apiRef, sortedFilteredRowIds[placeholderIndex]);
    let isLastChild = false;

    if (!targetNode) {
      if (placeholderIndex >= sortedFilteredRowIds.length && sortedFilteredRowIds.length > 0) {
        targetNode = gridRowNodeSelector(
          apiRef,
          sortedFilteredRowIds[sortedFilteredRowIds.length - 1],
        );
        isLastChild = true;
      } else {
        return null;
      }
    }

    let adjustedTargetNode = targetNode;

    // Case D adjustment
    if (
      sourceNode.type === 'leaf' &&
      targetNode.type === 'group' &&
      targetNode.depth < sourceNode.depth
    ) {
      const prevIndex = placeholderIndex - 1;
      if (prevIndex >= 0) {
        const prevRowId = sortedFilteredRowIds[prevIndex];
        const leafTargetNode = gridRowNodeSelector(apiRef, prevRowId);
        if (leafTargetNode && leafTargetNode.type === 'leaf') {
          adjustedTargetNode = leafTargetNode as GridLeafNode;
          isLastChild = true;
        }
      }
    }

    const operationType = rowReorderUtils.determineOperationType(sourceNode, adjustedTargetNode);
    if (operationType !== 'cross-parent-leaf') {
      return null;
    }

    const actualTargetIndex = rowReorderUtils.calculateTargetIndex(
      sourceNode,
      adjustedTargetNode,
      isLastChild,
      rowTree,
    );

    targetNode = adjustedTargetNode;

    // Validate depth constraints
    if (sourceNode.type === 'leaf' && targetNode.type === 'leaf') {
      if (sourceNode.depth !== targetNode.depth) {
        return null;
      }
    } else if (sourceNode.type === 'leaf' && targetNode.type === 'group') {
      if (targetNode.depth >= sourceNode.depth) {
        return null;
      }
    }

    return {
      sourceNode,
      targetNode: adjustedTargetNode,
      actualTargetIndex,
      isLastChild,
      operationType,
    };
  }

  async executeOperation(
    operation: ReorderOperation,
    ctx: ReorderExecutionContextType,
  ): Promise<void> {
    const { sourceNode, targetNode, isLastChild } = operation;
    const { apiRef, sourceRowId, processRowUpdate, onProcessRowUpdateError } = ctx;

    let target = targetNode;
    if (targetNode.type === 'group') {
      const prevIndex = ctx.placeholderIndex - 1;
      if (prevIndex >= 0) {
        const prevRowId = ctx.sortedFilteredRowIds[prevIndex];
        const prevNode = gridRowNodeSelector(apiRef, prevRowId);
        if (prevNode && prevNode.type === 'leaf') {
          target = prevNode;
        }
      }
    }

    const rowTree = gridRowTreeSelector(apiRef);
    const sourceGroup = rowTree[sourceNode.parent!] as GridGroupNode;
    const targetGroup = rowTree[target.parent!] as GridGroupNode;

    const sourceChildren = sourceGroup.children;
    const targetChildren = targetGroup.children;

    const sourceIndex = sourceChildren.findIndex((row) => { throw new Error("STUB"); });
    const targetIndex = targetChildren.findIndex((row) => { throw new Error("STUB"); });

    if (sourceIndex === -1 || targetIndex === -1) {
      return;
    }

    const dataRowIdToModelLookup = gridRowsLookupSelector(apiRef);
    const columnsLookup = gridColumnLookupSelector(apiRef);
    const sanitizedRowGroupingModel = gridRowGroupingSanitizedModelSelector(apiRef);

    const originalSourceRow = dataRowIdToModelLookup[sourceRowId];
    let updatedSourceRow = { ...originalSourceRow };
    const targetRow = dataRowIdToModelLookup[target.id];

    const groupingRules = getGroupingRules({
      sanitizedRowGroupingModel,
      columnsLookup,
    });

    for (const groupingRule of groupingRules) {
      const colDef = columnsLookup[groupingRule.field];

      if (groupingRule.groupingValueSetter && colDef) {
        const targetGroupingValue = getCellGroupingCriteria({
          row: targetRow,
          colDef,
          groupingRule,
          apiRef,
        }).key;

        updatedSourceRow = groupingRule.groupingValueSetter(
          targetGroupingValue,
          updatedSourceRow,
          colDef,
          apiRef,
        );
      } else {
        updatedSourceRow[groupingRule.field] = targetRow[groupingRule.field];
      }
    }

    const updater = new rowReorderUtils.BatchRowUpdater(
      apiRef,
      processRowUpdate,
      onProcessRowUpdateError,
    );
    updater.queueUpdate(sourceRowId, originalSourceRow, updatedSourceRow);

    const { successful, updates } = await updater.executeAll();

    if (successful.length === 0) {
      return;
    }

    const finalSourceRow = updates[0];

    apiRef.current.setState((state: any) => {
        throw new Error("STUB");
    });

    apiRef.current.updateRows([finalSourceRow]);
    apiRef.current.publishEvent('rowsSet');
  }
}

/**
 * Handles moving entire groups between different parents.
 */
export class CrossParentGroupOperation extends BaseReorderOperation {
  readonly operationType = 'cross-parent-group';

  detectOperation(ctx: ReorderExecutionContext): ReorderOperation | null {
    const { sourceRowId, placeholderIndex, sortedFilteredRowIds, rowTree, apiRef } = ctx;

    const sourceNode = gridRowNodeSelector(apiRef, sourceRowId);
    if (!sourceNode || sourceNode.type === 'footer') {
      return null;
    }

    let targetIndex = placeholderIndex;
    let targetNode = gridRowNodeSelector(apiRef, sortedFilteredRowIds[placeholderIndex]);

    let isLastChild = false;
    if (!targetNode) {
      if (placeholderIndex >= sortedFilteredRowIds.length && sortedFilteredRowIds.length > 0) {
        targetNode = gridRowNodeSelector(
          apiRef,
          sortedFilteredRowIds[sortedFilteredRowIds.length - 1],
        );
        targetIndex = sortedFilteredRowIds.length - 1;
        isLastChild = true;
      } else {
        return null;
      }
    }

    let adjustedTargetNode = targetNode;

    // Case G adjustment
    if (
      sourceNode.type === 'group' &&
      targetNode.type === 'group' &&
      sourceNode.parent !== targetNode.parent &&
      sourceNode.depth > targetNode.depth
    ) {
      let prevIndex = targetIndex - 1;
      if (prevIndex < 0) {
        return null;
      }
      let prevNode = gridRowNodeSelector(apiRef, sortedFilteredRowIds[prevIndex]);
      if (prevNode && prevNode.depth !== sourceNode.depth) {
        while (prevNode.depth > sourceNode.depth && prevIndex >= 0) {
          prevIndex -= 1;
          prevNode = gridRowNodeSelector(apiRef, sortedFilteredRowIds[prevIndex]);
        }
      }
      if (!prevNode || prevNode.type !== 'group' || prevNode.depth !== sourceNode.depth) {
        return null;
      }
      isLastChild = true;
      adjustedTargetNode = prevNode as GridGroupNode;
    }

    const operationType = rowReorderUtils.determineOperationType(sourceNode, adjustedTargetNode);
    if (operationType !== 'cross-parent-group') {
      return null;
    }

    const actualTargetIndex = rowReorderUtils.calculateTargetIndex(
      sourceNode,
      adjustedTargetNode,
      isLastChild,
      rowTree,
    );

    const operation = {
      sourceNode,
      targetNode: adjustedTargetNode,
      actualTargetIndex,
      isLastChild,
      operationType,
    };

    targetNode = adjustedTargetNode;

    if (sourceNode.depth !== targetNode.depth) {
      return null;
    }

    return operation;
  }

  async executeOperation(
    operation: ReorderOperation,
    ctx: ReorderExecutionContextType,
  ): Promise<void> {
    const { sourceNode, targetNode, isLastChild } = operation;
    const { apiRef, processRowUpdate, onProcessRowUpdateError } = ctx;

    const tree = gridRowTreeSelector(apiRef);
    const dataRowIdToModelLookup = gridRowsLookupSelector(apiRef);
    const columnsLookup = gridColumnLookupSelector(apiRef);
    const sanitizedRowGroupingModel = gridRowGroupingSanitizedModelSelector(apiRef);

    const allLeafIds = rowReorderUtils.collectAllLeafDescendants(sourceNode as GridGroupNode, tree);
    if (allLeafIds.length === 0) {
      return;
    }

    const updater = new rowReorderUtils.BatchRowUpdater(
      apiRef,
      processRowUpdate,
      onProcessRowUpdateError,
    );

    const groupingRules = getGroupingRules({
      sanitizedRowGroupingModel,
      columnsLookup,
    });

    const targetParentPath = rowReorderUtils.getNodePathInTree({ id: targetNode.parent!, tree });

    for (const leafId of allLeafIds) {
      const originalRow = dataRowIdToModelLookup[leafId];
      let updatedRow = { ...originalRow };

      for (let depth = 0; depth < targetParentPath.length; depth += 1) {
        const pathItem = targetParentPath[depth];
        if (pathItem.field) {
          const groupingRule = groupingRules.find((rule) => { throw new Error("STUB"); });
          if (groupingRule) {
            const colDef = columnsLookup[groupingRule.field];
            if (groupingRule.groupingValueSetter && colDef) {
              updatedRow = groupingRule.groupingValueSetter(
                pathItem.key,
                updatedRow,
                colDef,
                apiRef,
              );
            } else {
              updatedRow[groupingRule.field] = pathItem.key;
            }
          }
        }
      }

      updater.queueUpdate(leafId, originalRow, updatedRow);
    }

    const { successful, failed, updates } = await updater.executeAll();

    if (successful.length > 0) {
      apiRef.current.setState((state: any) => {
          throw new Error("STUB");
      });

      apiRef.current.updateRows(updates);
      apiRef.current.publishEvent('rowsSet');
    }
  }
}
