'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import { isDeepEqual } from '@mui/x-internals/isDeepEqual';
import {
  useGridEvent as addEventHandler,
  useGridApiMethod,
  GRID_ROOT_GROUP_ID,
  useGridEvent,
  gridRowTreeSelector,
} from '@mui/x-data-grid-pro';
import type {
  GridEventLookup,
  GridValidRowModel,
  GridUpdateRowParams,
  GridRowModel,
} from '@mui/x-data-grid-pro';
import {
  useGridDataSourceBasePro,
  useGridRegisterStrategyProcessor,
  useGridRegisterPipeProcessor,
  gridPivotInitialColumnsSelector,
  runIf,
  gridPivotActiveSelector,
  GridStrategyGroup,
  DataSourceRowsUpdateStrategy,
  getGroupKeys,
} from '@mui/x-data-grid-pro/internals';
import type { GridPipeProcessor } from '@mui/x-data-grid-pro/internals';
import type { GridPrivateApiPremium } from '../../../models/gridApiPremium';
import type { DataGridPremiumProcessedProps } from '../../../models/dataGridPremiumProps';
import { gridPivotModelSelector } from '../pivoting/gridPivotingSelectors';
import type {
  GridDataSourcePremiumPrivateApi,
  GridGetRowsParamsPremium,
  GridGetRowsResponsePremium,
} from './models';
import { getPropsOverrides, fetchParents } from './utils';
import { gridRowGroupingSanitizedModelSelector } from '../rowGrouping/gridRowGroupingSelector';
import { gridAggregationModelSelector } from '../aggregation/gridAggregationSelectors';

function getKeyPremium(params: GridGetRowsParamsPremium) {
    throw new Error("STUB");
}

const options = {
  cacheOptions: {
    getKey: getKeyPremium,
  },
};

const getStrategies = (
  props: Pick<DataGridPremiumProcessedProps, 'treeData' | 'lazyLoading' | 'disableRowGrouping'>,
  groupingModelSize: number,
) => {
  const previousStrategies = new Set([
    DataSourceRowsUpdateStrategy.Default,
    DataSourceRowsUpdateStrategy.GroupedData,
    DataSourceRowsUpdateStrategy.LazyLoadedGroupedData,
  ]);
  let currentStrategy = DataSourceRowsUpdateStrategy.Default;
  if (props.treeData || (!props.disableRowGrouping && groupingModelSize > 0)) {
    currentStrategy = props.lazyLoading
      ? DataSourceRowsUpdateStrategy.LazyLoadedGroupedData
      : DataSourceRowsUpdateStrategy.GroupedData;
  }
  previousStrategies.delete(currentStrategy);
  return { currentStrategy, previousStrategies: Array.from(previousStrategies) };
};

export const useGridDataSourcePremium = (
  apiRef: RefObject<GridPrivateApiPremium>,
  props: DataGridPremiumProcessedProps,
) => {
    throw new Error("STUB");
};
