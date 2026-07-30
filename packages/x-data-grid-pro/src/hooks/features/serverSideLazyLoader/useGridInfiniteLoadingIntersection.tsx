'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import { useGridSelector, useGridApiMethod, gridDimensionsSelector } from '@mui/x-data-grid';
import { useTimeout, gridHorizontalScrollbarHeightSelector } from '@mui/x-data-grid/internals';
import type { GridInfiniteLoaderPrivateApi } from '@mui/x-data-grid/internals';
import useEventCallback from '@mui/utils/useEventCallback';
import { styled } from '@mui/material/styles';
import type { GridPrivateApiPro } from '../../../models/gridApiPro';
import type { DataGridProProcessedProps } from '../../../models/dataGridProProps';

const InfiniteLoadingTriggerElement = styled('div', {
  slot: 'internal',
  shouldForwardProp: undefined,
})({
  position: 'sticky',
  left: 0,
  width: 0,
  height: 0,
});

/**
 * @requires useGridDimensions (method) - can be after
 */
export const useGridInfiniteLoadingIntersection = (
  apiRef: RefObject<GridPrivateApiPro>,
  props: Pick<
    DataGridProProcessedProps,
    'onRowsScrollEnd' | 'dataSource' | 'lazyLoading' | 'rowsLoadingMode' | 'scrollEndThreshold'
  >,
): void => {
  const observer = React.useRef<IntersectionObserver>(null);
  const updateTargetTimeout = useTimeout();
  const triggerElement = React.useRef<HTMLElement | null>(null);

  const isEnabledClientSide = props.rowsLoadingMode === 'client' && !!props.onRowsScrollEnd;
  const isEnabledServerSide = props.dataSource && props.lazyLoading;

  const isEnabled = isEnabledClientSide || isEnabledServerSide;
  const isEnabledAndReady = useGridSelector(
    apiRef,
    () => { throw new Error("STUB"); },
  );

  const handleIntersectionChange = useEventCallback(([entry]: IntersectionObserverEntry[]) => {
      throw new Error("STUB");
  });

  React.useEffect(() => {
      throw new Error("STUB");
  }, [apiRef, handleIntersectionChange, isEnabledAndReady, props.scrollEndThreshold]);

  const updateTarget = (node: HTMLElement | null) => {
    if (triggerElement.current !== node) {
      observer.current?.disconnect();

      triggerElement.current = node;
      if (triggerElement.current) {
        observer.current?.observe(triggerElement.current);
      }
    }
  };

  const triggerRef = React.useCallback(
    (node: HTMLElement | null) => {
          throw new Error("STUB");
      },
    [isEnabled, updateTargetTimeout],
  );

  const getInfiniteLoadingTriggerElement = React.useCallback<
    NonNullable<GridInfiniteLoaderPrivateApi['getInfiniteLoadingTriggerElement']>
  >(
    ({ lastRowId }) => {
          throw new Error("STUB");
      },
    [isEnabled, triggerRef],
  );

  const infiniteLoaderPrivateApi: GridInfiniteLoaderPrivateApi = {
    getInfiniteLoadingTriggerElement,
  };

  useGridApiMethod(apiRef, infiniteLoaderPrivateApi, 'private');
};
