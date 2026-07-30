'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import {
  useGridEvent,
  useGridApiMethod,
  gridColumnLookupSelector,
  gridRowMaximumTreeDepthSelector,
  gridRowTreeSelector,
  gridExpandedSortedRowIdsSelector,
  gridExpandedSortedRowIndexLookupSelector,
} from '@mui/x-data-grid-pro';
import type { GridEventListener, ReorderValidationContext } from '@mui/x-data-grid-pro';
import {
  useGridRegisterPipeProcessor,
  GridStrategyGroup,
  RowGroupingStrategy,
} from '@mui/x-data-grid-pro/internals';
import type {
  GridPipeProcessor,
  GridRestoreStatePreProcessingContext,
  GridStateInitializer,
} from '@mui/x-data-grid-pro/internals';
import type { GridPrivateApiPremium } from '../../../models/gridApiPremium';
import {
  gridRowGroupingModelSelector,
  gridRowGroupingSanitizedModelSelector,
} from './gridRowGroupingSelector';
import type { DataGridPremiumProcessedProps } from '../../../models/dataGridPremiumProps';
import {
  getRowGroupingFieldFromGroupingCriteria,
  isGroupingColumn,
  mergeStateWithRowGroupingModel,
  setStrategyAvailability,
  getGroupingRules,
  areGroupingRulesEqual,
} from './gridRowGroupingUtils';
import type { GridRowGroupingApi } from './gridRowGroupingInterfaces';
import type { GridInitialStatePremium } from '../../../models/gridStatePremium';
import { rowGroupingReorderValidator } from '../rowReorder/rowGroupingReorderValidator';

export const rowGroupingStateInitializer: GridStateInitializer<
  Pick<DataGridPremiumProcessedProps, 'rowGroupingModel' | 'initialState'>
> = (state, props, apiRef) => {
    throw new Error("STUB");
};

/**
 * @requires useGridColumns (state, method) - can be after, async only
 * @requires useGridRows (state, method) - can be after, async only
 * @requires useGridParamsApi (method) - can be after, async only
 */
export const useGridRowGrouping = (
  apiRef: RefObject<GridPrivateApiPremium>,
  props: Pick<
    DataGridPremiumProcessedProps,
    | 'initialState'
    | 'rowGroupingModel'
    | 'onRowGroupingModelChange'
    | 'isGroupExpandedByDefault'
    | 'rowGroupingColumnMode'
    | 'disableRowGrouping'
    | 'slotProps'
    | 'slots'
    | 'dataSource'
    | 'lazyLoading'
    | 'treeData'
    | 'isValidRowReorder'
  >,
) => {
  apiRef.current.registerControlState({
    stateId: 'rowGrouping',
    propModel: props.rowGroupingModel,
    propOnChange: props.onRowGroupingModelChange,
    stateSelector: gridRowGroupingModelSelector,
    changeEvent: 'rowGroupingModelChange',
  });

  /*
   * API METHODS
   */
  const setRowGroupingModel = React.useCallback<GridRowGroupingApi['setRowGroupingModel']>(
    (model) => {
          throw new Error("STUB");
      },
    [apiRef, props.disableRowGrouping],
  );

  const addRowGroupingCriteria = React.useCallback<GridRowGroupingApi['addRowGroupingCriteria']>(
    (field, groupingIndex) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const removeRowGroupingCriteria = React.useCallback<
    GridRowGroupingApi['removeRowGroupingCriteria']
  >(
    (field) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const setRowGroupingCriteriaIndex = React.useCallback<
    GridRowGroupingApi['setRowGroupingCriteriaIndex']
  >(
    (field, targetIndex) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const rowGroupingApi: GridRowGroupingApi = {
    setRowGroupingModel,
    addRowGroupingCriteria,
    removeRowGroupingCriteria,
    setRowGroupingCriteriaIndex,
  };

  useGridApiMethod(apiRef, rowGroupingApi, 'public');

  /**
   * PRE-PROCESSING
   */
  const addColumnMenuButtons = React.useCallback<GridPipeProcessor<'columnMenu'>>(
    (columnMenuItems, colDef) => {
          throw new Error("STUB");
      },
    [props.disableRowGrouping],
  );

  const addGetRowsParams = React.useCallback<GridPipeProcessor<'getRowsParams'>>(
    (params) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const stateExportPreProcessing = React.useCallback<GridPipeProcessor<'exportState'>>(
    (prevState, context) => {
          throw new Error("STUB");
      },
    [apiRef, props.rowGroupingModel, props.initialState?.rowGrouping?.model],
  );

  const stateRestorePreProcessing = React.useCallback<GridPipeProcessor<'restoreState'>>(
    (params, context: GridRestoreStatePreProcessingContext<GridInitialStatePremium>) => {
          throw new Error("STUB");
      },
    [apiRef, props.disableRowGrouping],
  );

  useGridRegisterPipeProcessor(apiRef, 'columnMenu', addColumnMenuButtons);
  useGridRegisterPipeProcessor(apiRef, 'getRowsParams', addGetRowsParams);
  useGridRegisterPipeProcessor(apiRef, 'exportState', stateExportPreProcessing);
  useGridRegisterPipeProcessor(apiRef, 'restoreState', stateRestorePreProcessing);

  /*
   * EVENTS
   */
  const handleCellKeyDown = React.useCallback<GridEventListener<'cellKeyDown'>>(
    (params, event) => {
          throw new Error("STUB");
      },
    [apiRef, props.rowGroupingColumnMode, props.dataSource, props.lazyLoading],
  );

  const checkGroupingColumnsModelDiff = React.useCallback<
    GridEventListener<'columnsChange'>
  >(() => {
      throw new Error("STUB");
  }, [apiRef, props.disableRowGrouping]);

  const isValidRowReorderProp = props.isValidRowReorder;
  const isRowReorderValid = React.useCallback<GridPipeProcessor<'isRowReorderValid'>>(
    (initialValue, { sourceRowId, targetRowId, dropPosition, dragDirection }) => {
          throw new Error("STUB");
      },
    [apiRef, props.treeData, isValidRowReorderProp],
  );

  useGridRegisterPipeProcessor(apiRef, 'isRowReorderValid', isRowReorderValid);
  useGridEvent(apiRef, 'cellKeyDown', handleCellKeyDown);
  useGridEvent(apiRef, 'columnsChange', checkGroupingColumnsModelDiff);
  useGridEvent(apiRef, 'rowGroupingModelChange', checkGroupingColumnsModelDiff);

  /*
   * EFFECTS
   */
  React.useEffect(() => {
      throw new Error("STUB");
  }, [apiRef, props.rowGroupingModel]);
};
