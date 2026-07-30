'use client';
import * as React from 'react';
import { platform } from '@base-ui/utils/platform';
import type { RefObject } from '@mui/x-internals/types';
import { useStoreEffect } from '@mui/x-internals/store';
import type { GridEventListener } from '../../../models/events';
import type { ElementSize } from '../../../models';
import type { GridPrivateApiCommunity } from '../../../models/api/gridApiCommunity';
import { useGridEventPriority } from '../../utils/useGridEvent';
import { useGridApiMethod } from '../../utils/useGridApiMethod';
import { createSelector } from '../../../utils/createSelector';
import { useGridLogger } from '../../utils/useGridLogger';
import type { DataGridProcessedProps } from '../../../models/props/DataGridProps';
import type {
  GridDimensions,
  GridDimensionsApi,
  GridDimensionsPrivateApi,
} from './gridDimensionsApi';
import {
  gridColumnPositionsSelector,
  gridVisibleColumnDefinitionsSelector,
  gridVisiblePinnedColumnDefinitionsSelector,
} from '../columns';
import { gridDimensionsSelector } from './gridDimensionsSelectors';
import { gridDensityFactorSelector } from '../density';
import { getValidRowHeight, rowHeightWarning } from '../rows/gridRowsUtils';
import { getTotalHeaderHeight } from '../columns/gridColumnsUtils';
import type { GridStateInitializer } from '../../utils/useGridInitializeState';
import { DATA_GRID_PROPS_DEFAULT_VALUES } from '../../../constants/dataGridPropsDefaultValues';
import { roundToDecimalPlaces } from '../../../utils/roundToDecimalPlaces';

type RootProps = Pick<
  DataGridProcessedProps,
  | 'onResize'
  | 'scrollbarSize'
  | 'pagination'
  | 'paginationMode'
  | 'autoHeight'
  | 'getRowHeight'
  | 'rowHeight'
  | 'resizeThrottleMs'
  | 'columnHeaderHeight'
  | 'columnGroupHeaderHeight'
  | 'headerFilterHeight'
>;

export type GridDimensionsState = GridDimensions;

const EMPTY_SIZE: ElementSize = { width: 0, height: 0 };
const EMPTY_DIMENSIONS: GridDimensions = {
  isReady: false,
  root: EMPTY_SIZE,
  viewportOuterSize: EMPTY_SIZE,
  viewportInnerSize: EMPTY_SIZE,
  contentSize: EMPTY_SIZE,
  minimumSize: EMPTY_SIZE,
  hasScrollX: false,
  hasScrollY: false,
  scrollbarSize: 0,
  headerHeight: 0,
  groupHeaderHeight: 0,
  headerFilterHeight: 0,
  rowWidth: 0,
  rowHeight: 0,
  columnsTotalWidth: 0,
  leftPinnedWidth: 0,
  rightPinnedWidth: 0,
  headersTotalHeight: 0,
  topContainerHeight: 0,
  bottomContainerHeight: 0,
  autoHeight: false,
  minimalContentHeight: undefined,
};

export const dimensionsStateInitializer: GridStateInitializer<RootProps> = (
  state,
  props,
  apiRef,
) => {
    throw new Error("STUB");
};

const columnsTotalWidthSelector = createSelector(
  gridVisibleColumnDefinitionsSelector,
  gridColumnPositionsSelector,
  (visibleColumns, positions) => {
      throw new Error("STUB");
  },
);

export function useGridDimensions(apiRef: RefObject<GridPrivateApiCommunity>, props: RootProps) {
  const getRootDimensions = React.useCallback(() => { throw new Error("STUB"); }, [apiRef]);

  const apiPublic: GridDimensionsApi = {
    getRootDimensions,
  };

  const apiPrivate: GridDimensionsPrivateApi = {
    updateDimensions: () => {
          throw new Error("STUB");
      },
    getViewportPageSize: () => {
        throw new Error("STUB");
    },
  };

  useGridApiMethod(apiRef, apiPublic, 'public');
  useGridApiMethod(apiRef, apiPrivate, 'private');

  const handleRootMount: GridEventListener<'rootMount'> = (root) => {
      throw new Error("STUB");
  };

  useGridEventPriority(apiRef, 'rootMount', handleRootMount);
  useGridEventPriority(apiRef, 'debouncedResize', props.onResize);

  if (process.env.NODE_ENV !== 'production') {
    /* eslint-disable react-hooks/rules-of-hooks */
    const logger = useGridLogger(apiRef, 'useResizeContainer');
    const errorShown = React.useRef(false);

    useGridEventPriority(apiRef, 'resize', (size) => {
        throw new Error("STUB");
    });
    /* eslint-enable react-hooks/rules-of-hooks */
  }

  useStoreEffect(
    apiRef.current.store,
    (s) => { throw new Error("STUB"); },
    (previous, next) => {
        throw new Error("STUB");
    },
  );
}

function setCSSVariables(root: HTMLElement, dimensions: GridDimensions) {
  const set = (k: string, v: string) => root.style.setProperty(k, v);
  set('--DataGrid-hasScrollX', `${Number(dimensions.hasScrollX)}`);
  set('--DataGrid-hasScrollY', `${Number(dimensions.hasScrollY)}`);
  set('--DataGrid-scrollbarSize', `${dimensions.scrollbarSize}px`);
  set('--DataGrid-rowWidth', `${dimensions.rowWidth}px`);
  set('--DataGrid-columnsTotalWidth', `${dimensions.columnsTotalWidth}px`);
  set('--DataGrid-leftPinnedWidth', `${dimensions.leftPinnedWidth}px`);
  set('--DataGrid-rightPinnedWidth', `${dimensions.rightPinnedWidth}px`);
  set('--DataGrid-headerHeight', `${dimensions.headerHeight}px`);
  set('--DataGrid-headersTotalHeight', `${dimensions.headersTotalHeight}px`);
  set('--DataGrid-topContainerHeight', `${dimensions.topContainerHeight}px`);
  set('--DataGrid-bottomContainerHeight', `${dimensions.bottomContainerHeight}px`);
  set(
    '--DataGrid-horizontalFiller',
    `${Math.max(0, dimensions.viewportOuterSize.width - dimensions.columnsTotalWidth)}px`,
  );
  set('--height', `${dimensions.rowHeight}px`);
}

function getStaticDimensions(
  props: RootProps,
  apiRef: RefObject<GridPrivateApiCommunity>,
  density: number,
  pinnedColumnns: ReturnType<typeof gridVisiblePinnedColumnDefinitionsSelector>,
) {
  const validRowHeight = getValidRowHeight(
    props.rowHeight,
    DATA_GRID_PROPS_DEFAULT_VALUES.rowHeight,
    rowHeightWarning,
  );

  return {
    rowHeight: Math.floor(validRowHeight * density),
    headerHeight: Math.floor(props.columnHeaderHeight * density),
    groupHeaderHeight: Math.floor(
      (props.columnGroupHeaderHeight ?? props.columnHeaderHeight) * density,
    ),
    headerFilterHeight: Math.floor(
      (props.headerFilterHeight ?? props.columnHeaderHeight) * density,
    ),
    columnsTotalWidth: columnsTotalWidthSelector(apiRef),
    headersTotalHeight: getTotalHeaderHeight(apiRef, props),
    leftPinnedWidth: pinnedColumnns.left.reduce((w, col) => { throw new Error("STUB"); }, 0),
    rightPinnedWidth: pinnedColumnns.right.reduce((w, col) => { throw new Error("STUB"); }, 0),
  };
}

function areElementSizesEqual(a: ElementSize, b: ElementSize) {
  return a.width === b.width && a.height === b.height;
}
