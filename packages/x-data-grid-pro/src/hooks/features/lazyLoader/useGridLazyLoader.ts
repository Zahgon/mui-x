'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import {
  useGridEvent,
  useGridSelector,
  gridSortModelSelector,
  gridFilterModelSelector,
  gridRenderContextSelector,
  useGridEventPriority,
} from '@mui/x-data-grid';
import type { GridEventListener } from '@mui/x-data-grid';
import { getVisibleRows } from '@mui/x-data-grid/internals';
import type { GridPrivateApiPro } from '../../../models/gridApiPro';
import type { DataGridProProcessedProps } from '../../../models/dataGridProProps';
import type { GridFetchRowsParams } from '../../../models/gridFetchRowsParams';
import { findSkeletonRowsSection } from './utils';

/**
 * @requires useGridRows (state)
 * @requires useGridPagination (state)
 * @requires useGridDimensions (method) - can be after
 * @requires useGridScroll (method
 */
export const useGridLazyLoader = (
  privateApiRef: RefObject<GridPrivateApiPro>,
  props: Pick<
    DataGridProProcessedProps,
    'onFetchRows' | 'rowsLoadingMode' | 'pagination' | 'paginationMode'
  >,
): void => {
  const sortModel = useGridSelector(privateApiRef, gridSortModelSelector);
  const filterModel = useGridSelector(privateApiRef, gridFilterModelSelector);
  const renderedRowsIntervalCache = React.useRef({
    firstRowToRender: 0,
    lastRowToRender: 0,
  });
  const isDisabled = props.rowsLoadingMode !== 'server';

  const handleRenderedRowsIntervalChange = React.useCallback<
    GridEventListener<'renderedRowsIntervalChange'>
  >(
    (params) => {
          throw new Error("STUB");
      },
    [privateApiRef, isDisabled, props.pagination, props.paginationMode, sortModel, filterModel],
  );

  const handleGridSortModelChange = React.useCallback<GridEventListener<'sortModelChange'>>(
    (newSortModel) => {
          throw new Error("STUB");
      },
    [privateApiRef, isDisabled, filterModel],
  );

  const handleGridFilterModelChange = React.useCallback<GridEventListener<'filterModelChange'>>(
    (newFilterModel) => {
          throw new Error("STUB");
      },
    [privateApiRef, isDisabled, sortModel],
  );

  useGridEvent(privateApiRef, 'renderedRowsIntervalChange', handleRenderedRowsIntervalChange);
  useGridEvent(privateApiRef, 'sortModelChange', handleGridSortModelChange);
  useGridEvent(privateApiRef, 'filterModelChange', handleGridFilterModelChange);
  useGridEventPriority(privateApiRef, 'fetchRows', props.onFetchRows);
};
