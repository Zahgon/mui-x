'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import { gridRowTreeSelector, useFirstRender } from '@mui/x-data-grid';
import type {
  GridColDef,
  GridRenderCellParams,
  GridDataSourceGroupNode,
  GridRowId,
} from '@mui/x-data-grid';
import {
  GridStrategyGroup,
  useGridRegisterPipeProcessor,
  useGridRegisterStrategyProcessor,
} from '@mui/x-data-grid/internals';
import type {
  GridPipeProcessor,
  GridRowsPartialUpdates,
  GridStrategyProcessor,
} from '@mui/x-data-grid/internals';
import {
  GRID_TREE_DATA_GROUPING_COL_DEF,
  GRID_TREE_DATA_GROUPING_COL_DEF_FORCED_PROPERTIES,
} from '../treeData/gridTreeDataGroupColDef';
import type { DataGridProProcessedProps } from '../../../models/dataGridProProps';
import { getParentPath, skipFiltering, skipSorting } from './utils';
import type { GridPrivateApiPro } from '../../../models/gridApiPro';
import type {
  GridGroupingColDefOverride,
  GridGroupingColDefOverrideParams,
} from '../../../models/gridGroupingColDefOverride';
import { GridDataSourceTreeDataGroupingCell } from '../../../components/GridDataSourceTreeDataGroupingCell';
import { createRowTree } from '../../../utils/tree/createRowTree';
import type {
  GridTreePathDuplicateHandler,
  RowTreeBuilderGroupingCriterion,
} from '../../../utils/tree/models';
import { updateRowTree } from '../../../utils/tree/updateRowTree';
import { getVisibleRowsLookup } from '../../../utils/tree/utils';
import { TreeDataStrategy } from '../treeData/gridTreeDataUtils';

export const useGridDataSourceTreeDataPreProcessors = (
  privateApiRef: RefObject<GridPrivateApiPro>,
  props: Pick<
    DataGridProProcessedProps,
    | 'treeData'
    | 'groupingColDef'
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
    [props.dataSource, props.defaultGroupingExpansionDepth, props.isGroupExpandedByDefault],
  );

  const filterRows = React.useCallback<GridStrategyProcessor<'filtering'>>(() => {
      throw new Error("STUB");
  }, [privateApiRef]);

  const sortRows = React.useCallback<GridStrategyProcessor<'sorting'>>(() => {
      throw new Error("STUB");
  }, [privateApiRef]);

  useGridRegisterPipeProcessor(privateApiRef, 'hydrateColumns', updateGroupingColumn);
  useGridRegisterStrategyProcessor(
    privateApiRef,
    TreeDataStrategy.DataSource,
    'rowTreeCreation',
    createRowTreeForTreeData,
  );
  useGridRegisterStrategyProcessor(
    privateApiRef,
    TreeDataStrategy.DataSource,
    'filtering',
    filterRows,
  );
  useGridRegisterStrategyProcessor(privateApiRef, TreeDataStrategy.DataSource, 'sorting', sortRows);
  useGridRegisterStrategyProcessor(
    privateApiRef,
    TreeDataStrategy.DataSource,
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
