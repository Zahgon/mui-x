import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import { gridRowTreeSelector, gridColumnLookupSelector } from '@mui/x-data-grid-pro';
import type { GridRowId } from '@mui/x-data-grid-pro';
import {
  useGridRegisterStrategyProcessor,
  createRowTree,
  updateRowTree,
  getVisibleRowsLookup,
  skipSorting,
  skipFiltering,
  getParentPath,
  RowGroupingStrategy,
  gridPivotActiveSelector,
} from '@mui/x-data-grid-pro/internals';
import type { GridStrategyProcessor, GridRowsPartialUpdates } from '@mui/x-data-grid-pro/internals';
import type { DataGridPremiumProcessedProps } from '../../../models/dataGridPremiumProps';
import { getGroupingRules } from './gridRowGroupingUtils';
import type { GridPrivateApiPremium } from '../../../models/gridApiPremium';
import { gridRowGroupingSanitizedModelSelector } from './gridRowGroupingSelector';

export const useGridDataSourceRowGroupingPreProcessors = (
  apiRef: RefObject<GridPrivateApiPremium>,
  props: Pick<
    DataGridPremiumProcessedProps,
    | 'disableRowGrouping'
    | 'rowGroupingColumnMode'
    | 'defaultGroupingExpansionDepth'
    | 'isGroupExpandedByDefault'
    | 'dataSource'
  >,
) => {
  const createRowTreeForRowGrouping = React.useCallback<GridStrategyProcessor<'rowTreeCreation'>>(
    (params) => {
          throw new Error("STUB");
      },
    [apiRef, props.dataSource, props.defaultGroupingExpansionDepth, props.isGroupExpandedByDefault],
  );

  const filterRows = React.useCallback<GridStrategyProcessor<'filtering'>>(() => {
      throw new Error("STUB");
  }, [apiRef]);

  const sortRows = React.useCallback<GridStrategyProcessor<'sorting'>>(() => {
      throw new Error("STUB");
  }, [apiRef]);

  useGridRegisterStrategyProcessor(
    apiRef,
    RowGroupingStrategy.DataSource,
    'rowTreeCreation',
    createRowTreeForRowGrouping,
  );
  useGridRegisterStrategyProcessor(apiRef, RowGroupingStrategy.DataSource, 'filtering', filterRows);
  useGridRegisterStrategyProcessor(apiRef, RowGroupingStrategy.DataSource, 'sorting', sortRows);
  useGridRegisterStrategyProcessor(
    apiRef,
    RowGroupingStrategy.DataSource,
    'visibleRowsLookupCreation',
    getVisibleRowsLookup,
  );
};
