'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import useLazyRef from '@mui/utils/useLazyRef';
import useEventCallback from '@mui/utils/useEventCallback';
import debounce from '@mui/utils/debounce';
import { warnOnce } from '@mui/x-internals/warning';
import { isDeepEqual } from '@mui/x-internals/isDeepEqual';
import { GRID_ROOT_GROUP_ID } from '../rows/gridRowsUtils';
import type { GridGetRowsResponse, GridDataSourceCache } from '../../../models/gridDataSource';
import { runIf } from '../../../utils/utils';
import { GridStrategyGroup } from '../../core/strategyProcessing';
import { useGridSelector } from '../../utils/useGridSelector';
import {
  gridPaginationModelSelector,
  gridVisibleRowsSelector,
} from '../pagination/gridPaginationSelector';
import { gridRowTreeSelector } from '../rows/gridRowsSelector';
import { gridGetRowsParamsSelector } from './gridDataSourceSelector';
import { CacheChunkManager, DataSourceRowsUpdateStrategy } from './utils';
import { GridDataSourceCacheDefault } from './cache';
import type { GridDataSourceCacheDefaultConfig } from './cache';
import { GridGetRowsError, GridUpdateRowError } from './gridDataSourceError';

import type { GridDataSourceApi, GridDataSourceApiBase, GridDataSourceBaseOptions } from './models';
import type { GridPrivateApiCommunity } from '../../../models/api/gridApiCommunity';
import type { DataGridProcessedProps } from '../../../models/props/DataGridProps';
import type { GridStrategyProcessor } from '../../core/strategyProcessing';
import type { GridEventListener } from '../../../models/events';
import type { GridRowId } from '../../../models/gridRows';

const noopCache: GridDataSourceCache = {
  clear: () => {
        throw new Error("STUB");
    },
  get: () => { throw new Error("STUB"); },
  set: () => {
      throw new Error("STUB");
  },
};

function getCache(
  cacheProp?: GridDataSourceCache | null,
  options: GridDataSourceCacheDefaultConfig = {},
) {
  if (cacheProp === null) {
    return noopCache;
  }
  return cacheProp ?? new GridDataSourceCacheDefault(options);
}

export const useGridDataSourceBase = <Api extends GridPrivateApiCommunity>(
  apiRef: RefObject<Api>,
  props: Pick<
    DataGridProcessedProps,
    | 'dataSource'
    | 'dataSourceCache'
    | 'dataSourceKeepPreviousData'
    | 'onDataSourceError'
    | 'pageSizeOptions'
    | 'pagination'
    | 'signature'
    | 'dataSourceRevalidateMs'
  >,
  options: GridDataSourceBaseOptions = {},
) => {
  const setStrategyAvailability = React.useCallback(() => {
      throw new Error("STUB");
  }, [apiRef, props.dataSource]);

  const [currentStrategy, setCurrentStrategy] = React.useState<DataSourceRowsUpdateStrategy>(
    apiRef.current.getActiveStrategy(GridStrategyGroup.DataSource) as DataSourceRowsUpdateStrategy,
  );

  const standardRowsUpdateStrategyActive = React.useMemo(() => {
      throw new Error("STUB");
  }, [currentStrategy]);

  const paginationModel = useGridSelector(apiRef, gridPaginationModelSelector);
  const lastRequestId = React.useRef<number>(0);
  const pollingIntervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

  const onDataSourceErrorProp = props.onDataSourceError;
  const revalidateMs = props.dataSourceRevalidateMs;

  const cacheChunkManager = useLazyRef<CacheChunkManager, void>(() => {
      throw new Error("STUB");
  }).current;
  const [cache, setCache] = React.useState<GridDataSourceCache>(() =>
    { throw new Error("STUB"); },
  );

  const fetchRows = React.useCallback<GridDataSourceApiBase['fetchRows']>(
    async (parentId, params) => {
          throw new Error("STUB");
      },
    [
      cacheChunkManager,
      cache,
      apiRef,
      standardRowsUpdateStrategyActive,
      props.dataSource?.getRows,
      onDataSourceErrorProp,
      options,
      props.signature,
    ],
  );

  const handleStrategyActivityChange = React.useCallback<
    GridEventListener<'strategyAvailabilityChange'>
  >(() => {
      throw new Error("STUB");
  }, [apiRef]);

  const fetchRowChildrenOption = options.fetchRowChildren;

  const revalidate = useEventCallback(async () => {
      throw new Error("STUB");
  });

  const stopPolling = React.useCallback(() => {
      throw new Error("STUB");
  }, []);

  const startPolling = useEventCallback(() => {
      throw new Error("STUB");
  });

  const handleDataUpdate = React.useCallback<GridStrategyProcessor<'dataSourceRootRowsUpdate'>>(
    (params) => {
          throw new Error("STUB");
      },
    [apiRef, startPolling],
  );

  const dataSourceUpdateRow = props.dataSource?.updateRow;
  const handleEditRowOption = options.handleEditRow;

  const editRow = React.useCallback<GridDataSourceApiBase['editRow']>(
    async (params) => {
          throw new Error("STUB");
      },
    [apiRef, dataSourceUpdateRow, onDataSourceErrorProp, handleEditRowOption],
  );

  const dataSourceApi: GridDataSourceApi = {
    dataSource: {
      fetchRows,
      cache,
      editRow,
    },
  };

  const debouncedFetchRows = React.useMemo(() => { throw new Error("STUB"); }, [fetchRows]);
  const handleFetchRowsOnParamsChange = React.useCallback(() => {
      throw new Error("STUB");
  }, [apiRef, props.dataSourceKeepPreviousData, stopPolling, debouncedFetchRows]);

  const isFirstRender = React.useRef(true);
  React.useEffect(() => {
      throw new Error("STUB");
  }, [props.dataSourceCache, options.cacheOptions]);

  React.useEffect(() => {
      throw new Error("STUB");
  }, [standardRowsUpdateStrategyActive, stopPolling]);

  React.useEffect(() => {
      throw new Error("STUB");
  }, [revalidateMs, stopPolling]);

  React.useEffect(() => { throw new Error("STUB"); }, [stopPolling]);

  React.useEffect(() => {
      throw new Error("STUB");
  }, [apiRef, props.dataSource, props.dataSourceKeepPreviousData, currentStrategy, stopPolling]);

  React.useEffect(() => {
      throw new Error("STUB");
  }, [props.dataSourceKeepPreviousData, currentStrategy]);

  return {
    api: { public: dataSourceApi },
    debouncedFetchRows,
    strategyProcessor: {
      strategyName: DataSourceRowsUpdateStrategy.Default,
      group: 'dataSourceRootRowsUpdate' as const,
      processor: handleDataUpdate,
    },
    setStrategyAvailability,
    startPolling,
    stopPolling,
    cacheChunkManager,
    cache,
    events: {
      strategyAvailabilityChange: handleStrategyActivityChange,
      sortModelChange: runIf(standardRowsUpdateStrategyActive, handleFetchRowsOnParamsChange),
      filterModelChange: runIf(standardRowsUpdateStrategyActive, handleFetchRowsOnParamsChange),
      paginationModelChange: runIf(standardRowsUpdateStrategyActive, handleFetchRowsOnParamsChange),
    },
  };
};
