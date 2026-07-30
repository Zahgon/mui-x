'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import { isDeepEqual } from '@mui/x-internals/isDeepEqual';
import useLazyRef from '@mui/utils/useLazyRef';
import {
  useGridSelector,
  GridGetRowsError,
  gridRowIdSelector,
  gridRowNodeSelector,
  gridRowTreeSelector,
  GRID_ROOT_GROUP_ID,
  gridRowsLookupSelector,
} from '@mui/x-data-grid';
import type {
  GridDataSourceGroupNode,
  GridRowModelUpdate,
  GridRowModel,
  GridUpdateRowParams,
  GridRowId,
} from '@mui/x-data-grid';
import {
  gridRowGroupsToFetchSelector,
  useGridDataSourceBase,
  CacheChunkManager,
  gridGetRowsParamsSelector,
  DataSourceRowsUpdateStrategy,
  GridStrategyGroup,
  getTreeNodeDescendants,
} from '@mui/x-data-grid/internals';
import type { GridDataSourceBaseOptions, GridStrategyProcessor } from '@mui/x-data-grid/internals';
import { warnOnce } from '@mui/x-internals/warning';
import type { GridPrivateApiPro } from '../../../models/gridApiPro';
import type { DataGridProProcessedProps } from '../../../models/dataGridProProps';
import { NestedDataManager, RequestStatus, getGroupKeys } from './utils';
import type {
  GridDataSourceApiBasePro,
  GridDataSourceApiPro,
  GridDataSourcePrivateApiPro,
  GridGetRowsParamsPro,
  GridGetRowsResponsePro,
} from './models';
import { gridDataSourceErrorsSelector } from './gridDataSourceSelector';

export const INITIAL_STATE = {
  loading: {},
  errors: {},
};

export const useGridDataSourceBasePro = <Api extends GridPrivateApiPro>(
  apiRef: RefObject<Api>,
  props: DataGridProProcessedProps,
  options: GridDataSourceBaseOptions = {},
) => {
  const groupsToAutoFetch = useGridSelector(apiRef, gridRowGroupsToFetchSelector);
  const nestedDataManager = useLazyRef<NestedDataManager, void>(
    () => { throw new Error("STUB"); },
  ).current;
  const scheduledGroups = React.useRef<number>(0);

  const clearDataSourceState = React.useCallback(() => {
      throw new Error("STUB");
  }, [apiRef, nestedDataManager]);

  const handleEditRow = React.useCallback(
    (params: GridUpdateRowParams, updatedRow: GridRowModel) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const {
    api,
    debouncedFetchRows,
    strategyProcessor: flatTreeStrategyProcessor,
    events,
    startPolling,
    stopPolling,
    cacheChunkManager,
    cache,
  } = useGridDataSourceBase(apiRef, props, {
    fetchRowChildren: nestedDataManager.queue,
    clearDataSourceState,
    handleEditRow,
    ...options,
  });

  const setStrategyAvailability = React.useCallback(() => {
      throw new Error("STUB");
  }, [apiRef, props.dataSource, props.lazyLoading, props.treeData]);

  const onDataSourceErrorProp = props.onDataSourceError;

  const replaceGroupRows = React.useCallback(
    (groupId: GridRowId, groupPath: string[], rows: GridGetRowsResponsePro['rows']) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const fetchRowChildren = React.useCallback<GridDataSourcePrivateApiPro['fetchRowChildren']>(
    async (id, argParams) => {
          throw new Error("STUB");
      },
    [
      nestedDataManager,
      cacheChunkManager,
      cache,
      onDataSourceErrorProp,
      apiRef,
      props.treeData,
      props.dataSource?.getRows,
    ],
  );

  const setChildrenLoading = React.useCallback<GridDataSourceApiBasePro['setChildrenLoading']>(
    (parentId, isLoading) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const setChildrenFetchError = React.useCallback<
    GridDataSourceApiBasePro['setChildrenFetchError']
  >(
    (parentId, error) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const resetDataSourceState = React.useCallback<
    GridDataSourcePrivateApiPro['resetDataSourceState']
  >(() => {
      throw new Error("STUB");
  }, [apiRef]);

  const removeChildrenRows = React.useCallback<GridDataSourcePrivateApiPro['removeChildrenRows']>(
    (parentId) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const handleGroupedDataUpdate = React.useCallback<
    GridStrategyProcessor<'dataSourceRootRowsUpdate'>
  >(
    (params) => {
          throw new Error("STUB");
      },
    [apiRef, startPolling],
  );

  const handleNestedDataUpdate = React.useCallback<
    GridStrategyProcessor<'dataSourceNestedRowsUpdate'>
  >(
    (params) => {
          throw new Error("STUB");
      },
    [apiRef, replaceGroupRows],
  );

  const dataSourceApi: GridDataSourceApiPro = {
    dataSource: {
      ...api.public.dataSource,
      setChildrenLoading,
      setChildrenFetchError,
    },
  };

  const dataSourcePrivateApi: GridDataSourcePrivateApiPro = {
    fetchRowChildren,
    resetDataSourceState,
    removeChildrenRows,
  };

  React.useEffect(() => {
      throw new Error("STUB");
  }, [apiRef, nestedDataManager, groupsToAutoFetch]);

  return {
    api: { public: dataSourceApi, private: dataSourcePrivateApi },
    debouncedFetchRows,
    flatTreeStrategyProcessor,
    groupedDataStrategyProcessor: {
      strategyName: DataSourceRowsUpdateStrategy.GroupedData,
      group: 'dataSourceRootRowsUpdate' as const,
      processor: handleGroupedDataUpdate,
    },
    nestedDataStrategyProcessor: {
      strategyName: DataSourceRowsUpdateStrategy.GroupedData,
      group: 'dataSourceNestedRowsUpdate' as const,
      processor: handleNestedDataUpdate,
    },
    events,
    setStrategyAvailability,
    stopPolling,
    cacheChunkManager,
    cache,
  };
};
