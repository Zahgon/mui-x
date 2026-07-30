'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import {
  gridColumnLookupSelector,
  gridRowTreeSelector,
  useFirstRender,
} from '@mui/x-data-grid-pro';
import type { GridRowId } from '@mui/x-data-grid-pro';
import {
  useGridRegisterPipeProcessor,
  useGridRegisterStrategyProcessor,
  sortRowTree,
  createRowTree,
  updateRowTree,
  getVisibleRowsLookup,
  RowGroupingStrategy,
} from '@mui/x-data-grid-pro/internals';
import type {
  GridColumnRawLookup,
  GridPipeProcessor,
  GridHydrateColumnsValue,
  GridStrategyProcessor,
  RowTreeBuilderGroupingCriterion,
} from '@mui/x-data-grid-pro/internals';
import type { DataGridPremiumProcessedProps } from '../../../models/dataGridPremiumProps';
import {
  gridRowGroupingModelSelector,
  gridRowGroupingSanitizedModelSelector,
} from './gridRowGroupingSelector';
import {
  createGroupingColDefForAllGroupingCriteria,
  createGroupingColDefForOneGroupingCriteria,
} from './createGroupingColDef';
import {
  filterRowTreeFromGroupingColumns,
  getColDefOverrides,
  isGroupingColumn,
  setStrategyAvailability,
  getCellGroupingCriteria,
  getGroupingRules,
} from './gridRowGroupingUtils';
import type { GridPrivateApiPremium } from '../../../models/gridApiPremium';

export const useGridRowGroupingPreProcessors = (
  apiRef: RefObject<GridPrivateApiPremium>,
  props: Pick<
    DataGridPremiumProcessedProps,
    | 'disableRowGrouping'
    | 'groupingColDef'
    | 'rowGroupingColumnMode'
    | 'defaultGroupingExpansionDepth'
    | 'isGroupExpandedByDefault'
    | 'dataSource'
  >,
) => {
  const getGroupingColDefs = React.useCallback(
    (columnsState: GridHydrateColumnsValue) => {
          throw new Error("STUB");
      },
    [
      apiRef,
      props.groupingColDef,
      props.rowGroupingColumnMode,
      props.disableRowGrouping,
      props.dataSource,
    ],
  );

  const updateGroupingColumn = React.useCallback<GridPipeProcessor<'hydrateColumns'>>(
    (columnsState) => {
          throw new Error("STUB");
      },
    [getGroupingColDefs],
  );

  const createRowTreeForRowGrouping = React.useCallback<GridStrategyProcessor<'rowTreeCreation'>>(
    (params) => {
          throw new Error("STUB");
      },
    [apiRef, props.defaultGroupingExpansionDepth, props.isGroupExpandedByDefault],
  );

  const filterRows = React.useCallback<GridStrategyProcessor<'filtering'>>(
    (params) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const sortRows = React.useCallback<GridStrategyProcessor<'sorting'>>(
    (params) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  useGridRegisterPipeProcessor(apiRef, 'hydrateColumns', updateGroupingColumn);
  useGridRegisterStrategyProcessor(
    apiRef,
    RowGroupingStrategy.Default,
    'rowTreeCreation',
    createRowTreeForRowGrouping,
  );
  useGridRegisterStrategyProcessor(apiRef, RowGroupingStrategy.Default, 'filtering', filterRows);
  useGridRegisterStrategyProcessor(apiRef, RowGroupingStrategy.Default, 'sorting', sortRows);
  useGridRegisterStrategyProcessor(
    apiRef,
    RowGroupingStrategy.Default,
    'visibleRowsLookupCreation',
    getVisibleRowsLookup,
  );

  useFirstRender(() => {
      throw new Error("STUB");
  });

  const isFirstRender = React.useRef(true);
  React.useEffect(() => {
      throw new Error("STUB");
  }, [apiRef, props.disableRowGrouping, props.dataSource]);
};
