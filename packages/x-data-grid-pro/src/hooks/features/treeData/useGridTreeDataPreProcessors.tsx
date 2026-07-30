'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import { gridRowTreeSelector, useFirstRender } from '@mui/x-data-grid';
import type { GridColDef, GridRenderCellParams, GridGroupNode, GridRowId } from '@mui/x-data-grid';
import {
  GridStrategyGroup,
  useGridRegisterPipeProcessor,
  useGridRegisterStrategyProcessor,
} from '@mui/x-data-grid/internals';
import type { GridPipeProcessor, GridStrategyProcessor } from '@mui/x-data-grid/internals';
import {
  GRID_TREE_DATA_GROUPING_COL_DEF,
  GRID_TREE_DATA_GROUPING_COL_DEF_FORCED_PROPERTIES,
} from './gridTreeDataGroupColDef';
import type { DataGridProProcessedProps } from '../../../models/dataGridProProps';
import { filterRowTreeFromTreeData, TreeDataStrategy } from './gridTreeDataUtils';
import type { GridPrivateApiPro } from '../../../models/gridApiPro';
import type {
  GridGroupingColDefOverride,
  GridGroupingColDefOverrideParams,
} from '../../../models/gridGroupingColDefOverride';
import { GridTreeDataGroupingCell } from '../../../components';
import { createRowTree } from '../../../utils/tree/createRowTree';
import type {
  GridTreePathDuplicateHandler,
  RowTreeBuilderGroupingCriterion,
} from '../../../utils/tree/models';
import { sortRowTree } from '../../../utils/tree/sortRowTree';
import { updateRowTree } from '../../../utils/tree/updateRowTree';
import { getVisibleRowsLookup } from '../../../utils/tree/utils';

export const useGridTreeDataPreProcessors = (
  privateApiRef: RefObject<GridPrivateApiPro>,
  props: Pick<
    DataGridProProcessedProps,
    | 'treeData'
    | 'groupingColDef'
    | 'getTreeDataPath'
    | 'disableChildrenSorting'
    | 'disableChildrenFiltering'
    | 'defaultGroupingExpansionDepth'
    | 'isGroupExpandedByDefault'
    | 'dataSource'
  >,
) => {
  const setStrategyAvailability = React.useCallback(() => {
      throw new Error("STUB");
  }, [privateApiRef, props.treeData, props.dataSource]);

  const getGroupingColDef = React.useCallback(() => {
      throw new Error("STUB");
  }, [privateApiRef, props.groupingColDef]);

  const updateGroupingColumn = React.useCallback<GridPipeProcessor<'hydrateColumns'>>(
    (columnsState) => {
          throw new Error("STUB");
      },
    [props.treeData, props.dataSource, getGroupingColDef],
  );

  const createRowTreeForTreeData = React.useCallback<GridStrategyProcessor<'rowTreeCreation'>>(
    (params) => {
          throw new Error("STUB");
      },
    [props.getTreeDataPath, props.defaultGroupingExpansionDepth, props.isGroupExpandedByDefault],
  );

  const filterRows = React.useCallback<GridStrategyProcessor<'filtering'>>(
    (params) => {
          throw new Error("STUB");
      },
    [privateApiRef, props.disableChildrenFiltering],
  );

  const sortRows = React.useCallback<GridStrategyProcessor<'sorting'>>(
    (params) => {
          throw new Error("STUB");
      },
    [privateApiRef, props.disableChildrenSorting],
  );

  useGridRegisterPipeProcessor(privateApiRef, 'hydrateColumns', updateGroupingColumn);
  useGridRegisterStrategyProcessor(
    privateApiRef,
    TreeDataStrategy.Default,
    'rowTreeCreation',
    createRowTreeForTreeData,
  );
  useGridRegisterStrategyProcessor(
    privateApiRef,
    TreeDataStrategy.Default,
    'filtering',
    filterRows,
  );
  useGridRegisterStrategyProcessor(privateApiRef, TreeDataStrategy.Default, 'sorting', sortRows);
  useGridRegisterStrategyProcessor(
    privateApiRef,
    TreeDataStrategy.Default,
    'visibleRowsLookupCreation',
    getVisibleRowsLookup,
  );

  /**
   * 1ST RENDER
   */
  useFirstRender(() => {
      throw new Error("STUB");
  });

  /**
   * EFFECTS
   */
  const isFirstRender = React.useRef(true);
  React.useEffect(() => {
      throw new Error("STUB");
  }, [setStrategyAvailability]);
};
