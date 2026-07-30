'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import { throttle } from '@mui/x-internals/throttle';
import { isDeepEqual } from '@mui/x-internals/isDeepEqual';
import useEventCallback from '@mui/utils/useEventCallback';
import debounce from '@mui/utils/debounce';
import {
  useGridEvent,
  gridSortModelSelector,
  gridFilterModelSelector,
  GRID_ROOT_GROUP_ID,
  gridPaginationModelSelector,
  gridFilteredSortedRowIdsSelector,
  gridRowIdSelector,
  useGridSelector,
} from '@mui/x-data-grid';
import type {
  GridEventListener,
  GridGroupNode,
  GridSkeletonRowNode,
  GridRowId,
} from '@mui/x-data-grid';
import {
  getVisibleRows,
  gridRenderContextSelector,
  GridStrategyGroup,
  useGridRegisterStrategyProcessor,
  useGridRegisterPipeProcessor,
  runIf,
  DataSourceRowsUpdateStrategy,
} from '@mui/x-data-grid/internals';
import type { GridStrategyProcessor, GridPipeProcessor } from '@mui/x-data-grid/internals';
import type { GridGetRowsParamsPro as GridGetRowsParams } from '../dataSource/models';
import type { GridPrivateApiPro } from '../../../models/gridApiPro';
import type { DataGridProProcessedProps } from '../../../models/dataGridProProps';
import { findSkeletonRowsSection, adjustRowParams } from '../lazyLoader/utils';
import { GRID_SKELETON_ROW_ROOT_ID } from '../lazyLoader/useGridLazyLoaderPreProcessors';

enum LoadingTrigger {
  VIEWPORT,
  SCROLL_END,
}

const INTERVAL_CACHE_INITIAL_STATE = {
  firstRowToRender: 0,
  lastRowToRender: 0,
};

const getSkeletonRowId = (index: number) => `${GRID_SKELETON_ROW_ROOT_ID}-${index}`;

/**
 * @requires useGridRows (state)
 * @requires useGridPagination (state)
 * @requires useGridScroll (method
 */
export const useGridDataSourceLazyLoader = (
  privateApiRef: RefObject<GridPrivateApiPro>,
  props: Pick<
    DataGridProProcessedProps,
    | 'dataSource'
    | 'lazyLoading'
    | 'lazyLoadingRequestThrottleMs'
    | 'dataSourceRevalidateMs'
    | 'treeData'
  >,
): void => {
  const isNestedLazyLoadingEnabled = useGridSelector(privateApiRef, () =>
    { throw new Error("STUB"); },
  );

  const setStrategyAvailability = React.useCallback(() => {
      throw new Error("STUB");
  }, [privateApiRef, props.lazyLoading, props.dataSource, isNestedLazyLoadingEnabled]);

  const [isStrategyActive, setStrategyActive] = React.useState(false);

  const renderedRowsIntervalCache = React.useRef(INTERVAL_CACHE_INITIAL_STATE);
  const previousLastRowIndex = React.useRef(0);
  const loadingTrigger = React.useRef<LoadingTrigger | null>(null);
  const rowsStale = React.useRef<boolean>(false);
  const draggedRowId = React.useRef<GridRowId | null>(null);
  const pollingIntervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

  const fetchRows = React.useCallback(
    (params: Partial<GridGetRowsParams>) => {
          throw new Error("STUB");
      },
    [privateApiRef],
  );

  const debouncedFetchRows = React.useMemo(() => { throw new Error("STUB"); }, [fetchRows]);

  const revalidate = useEventCallback((params: Partial<GridGetRowsParams>) => {
      throw new Error("STUB");
  });

  const stopPolling = React.useCallback(() => {
      throw new Error("STUB");
  }, []);

  const startPolling = useEventCallback((params: Partial<GridGetRowsParams>) => {
      throw new Error("STUB");
  });

  const resetGrid = React.useCallback(() => {
      throw new Error("STUB");
  }, [privateApiRef, fetchRows]);

  const ensureValidRowCount = React.useCallback(
    (previousLoadingTrigger: LoadingTrigger, newLoadingTrigger: LoadingTrigger) => {
          throw new Error("STUB");
      },
    [privateApiRef, resetGrid],
  );

  const addSkeletonRows = React.useCallback(() => {
      throw new Error("STUB");
  }, [privateApiRef]);

  const updateLoadingTrigger = React.useCallback(
    (rowCount: number) => {
          throw new Error("STUB");
      },
    [ensureValidRowCount],
  );

  const handleDataUpdate = React.useCallback<GridStrategyProcessor<'dataSourceRootRowsUpdate'>>(
    (params) => {
          throw new Error("STUB");
      },
    [privateApiRef, updateLoadingTrigger, addSkeletonRows, startPolling],
  );

  const handleRowCountChange = React.useCallback(() => {
      throw new Error("STUB");
  }, [privateApiRef, updateLoadingTrigger, addSkeletonRows]);

  const handleIntersection: GridEventListener<'rowsScrollEndIntersection'> = useEventCallback(
    () => {
          throw new Error("STUB");
      },
  );

  const handleRenderedRowsIntervalChange = React.useCallback<
    GridEventListener<'renderedRowsIntervalChange'>
  >(
    (renderContext) => {
          throw new Error("STUB");
      },
    [privateApiRef, fetchRows, revalidate, startPolling],
  );

  const throttledHandleRenderedRowsIntervalChange = React.useMemo(
    () => { throw new Error("STUB"); },
    [props.lazyLoadingRequestThrottleMs, handleRenderedRowsIntervalChange],
  );

  React.useEffect(() => {
      throw new Error("STUB");
  }, [throttledHandleRenderedRowsIntervalChange, stopPolling]);

  // Stop polling when dataSourceRevalidateMs is set to 0
  React.useEffect(() => {
      throw new Error("STUB");
  }, [props.dataSourceRevalidateMs, stopPolling]);

  React.useEffect(() => { throw new Error("STUB"); }, [stopPolling]);

  const handleGridSortModelChange = React.useCallback<GridEventListener<'sortModelChange'>>(
    (newSortModel) => {
          throw new Error("STUB");
      },
    [privateApiRef, debouncedFetchRows, throttledHandleRenderedRowsIntervalChange, stopPolling],
  );

  const handleGridFilterModelChange = React.useCallback<GridEventListener<'filterModelChange'>>(
    (newFilterModel) => {
          throw new Error("STUB");
      },
    [privateApiRef, debouncedFetchRows, throttledHandleRenderedRowsIntervalChange, stopPolling],
  );

  const handleDragStart = React.useCallback<GridEventListener<'rowDragStart'>>((row) => {
      throw new Error("STUB");
  }, []);

  const handleDragEnd = React.useCallback<GridEventListener<'rowDragEnd'>>(() => {
      throw new Error("STUB");
  }, []);

  const handleStrategyActivityChange = React.useCallback<
    GridEventListener<'strategyAvailabilityChange'>
  >(() => {
      throw new Error("STUB");
  }, [privateApiRef]);

  // Provide render context based start/end for lazy loading so that
  // `apiRef.current.dataSource.fetchRows()` without params
  // re-fetches the currently visible range instead of always using the
  // pagination-model state.
  const addGetRowsParams = React.useCallback<GridPipeProcessor<'getRowsParams'>>(
    (params) => {
          throw new Error("STUB");
      },
    [privateApiRef, isStrategyActive],
  );

  useGridRegisterPipeProcessor(privateApiRef, 'getRowsParams', addGetRowsParams);

  useGridRegisterStrategyProcessor(
    privateApiRef,
    DataSourceRowsUpdateStrategy.LazyLoading,
    'dataSourceRootRowsUpdate',
    handleDataUpdate,
  );

  useGridEvent(privateApiRef, 'strategyAvailabilityChange', handleStrategyActivityChange);

  useGridEvent(privateApiRef, 'rowCountChange', runIf(isStrategyActive, handleRowCountChange));
  useGridEvent(
    privateApiRef,
    'rowsScrollEndIntersection',
    runIf(isStrategyActive, handleIntersection),
  );
  useGridEvent(
    privateApiRef,
    'renderedRowsIntervalChange',
    runIf(isStrategyActive, throttledHandleRenderedRowsIntervalChange),
  );
  useGridEvent(
    privateApiRef,
    'sortModelChange',
    runIf(isStrategyActive, handleGridSortModelChange),
  );
  useGridEvent(
    privateApiRef,
    'filterModelChange',
    runIf(isStrategyActive, handleGridFilterModelChange),
  );
  useGridEvent(privateApiRef, 'rowDragStart', runIf(isStrategyActive, handleDragStart));
  useGridEvent(privateApiRef, 'rowDragEnd', runIf(isStrategyActive, handleDragEnd));

  React.useEffect(() => {
      throw new Error("STUB");
  }, [setStrategyAvailability]);
};
