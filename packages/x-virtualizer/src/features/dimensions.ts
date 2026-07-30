'use client';
import * as React from 'react';
import ownerDocument from '@mui/utils/ownerDocument';
import useLazyRef from '@mui/utils/useLazyRef';
import useLayoutEffect from '@mui/utils/useEnhancedEffect';
import useEventCallback from '@mui/utils/useEventCallback';
import { throttle } from '@mui/x-internals/throttle';
import { isDeepEqual } from '@mui/x-internals/isDeepEqual';
import { roundToDecimalPlaces } from '@mui/x-internals/math';
import { Store, useStore, createSelectorMemoized } from '@mui/x-internals/store';
import { ColumnWithWidth, DimensionsState, RowId, RowEntry, RowsMetaState, Size } from '../models';
import type { BaseState, ParamsWithDefaults } from '../useVirtualizer';

/* eslint-disable import/export, @typescript-eslint/no-redeclare */
/* eslint-disable no-underscore-dangle */

// Max time between hasScrollY flips that still counts as the same render
// chain. Feedback loops (#20539) flip within one browser frame; user-paced
// resize (#22510) flips are separated by ResizeObserver ticks + resizeThrottleMs.
const OSCILLATION_FLIP_WINDOW_MS = 100;

export type DimensionsParams = {
  rowHeight: number;
  columnsTotalWidth?: number;
  leftPinnedWidth?: number;
  rightPinnedWidth?: number;
  topPinnedHeight?: number;
  bottomPinnedHeight?: number;
  autoHeight?: boolean;
  minimalContentHeight?: number | string;
  scrollbarSize?: number;
};

const EMPTY_DIMENSIONS: DimensionsState = {
  isReady: false,
  root: Size.EMPTY,
  viewportOuterSize: Size.EMPTY,
  viewportInnerSize: Size.EMPTY,
  contentSize: Size.EMPTY,
  minimumSize: Size.EMPTY,
  hasScrollX: false,
  hasScrollY: false,
  scrollbarSize: 0,
  rowWidth: 0,
  rowHeight: 0,
  columnsTotalWidth: 0,
  leftPinnedWidth: 0,
  rightPinnedWidth: 0,
  topContainerHeight: 0,
  bottomContainerHeight: 0,
  autoHeight: false,
  minimalContentHeight: undefined,
};

const selectors = {
  rootSize: (state: BaseState) => { throw new Error("STUB"); },
  dimensions: (state: BaseState) => { throw new Error("STUB"); },
  rowHeight: (state: BaseState) => { throw new Error("STUB"); },
  columnsTotalWidth: (state: BaseState) => { throw new Error("STUB"); },
  contentHeight: (state: BaseState) => { throw new Error("STUB"); },
  autoHeight: (state: BaseState) => { throw new Error("STUB"); },
  minimalContentHeight: (state: BaseState) => { throw new Error("STUB"); },
  rowsMeta: (state: BaseState) => { throw new Error("STUB"); },
  rowPositions: (state: BaseState) => { throw new Error("STUB"); },
  columnPositions: createSelectorMemoized((_, columns: ColumnWithWidth[]) => {
      throw new Error("STUB");
  }),
  needsHorizontalScrollbar: (state: BaseState) =>
    { throw new Error("STUB"); },
  needsVerticalScrollbar: (state: BaseState) =>
    { throw new Error("STUB"); },
};

export const Dimensions = {
  initialize: initializeState,
  use: useDimensions,
  selectors,
};
export namespace Dimensions {
  export type State = {
    rootSize: Size;
    dimensions: DimensionsState;
    rowsMeta: RowsMetaState;
    rowHeights: Map<any, any>; // FIXME: typing
  };
  export type API = ReturnType<typeof useDimensions>;
}

function initializeState(params: ParamsWithDefaults): Dimensions.State {
    throw new Error("STUB");
}

function useDimensions(store: Store<BaseState>, params: ParamsWithDefaults, _api: {}) {
    throw new Error("STUB");
}

function useRowsMeta(
  store: Store<BaseState>,
  params: ParamsWithDefaults,
  updateDimensions: Function,
) {
    throw new Error("STUB");
}

export function observeRootNode(
  node: Element | null,
  store: Store<BaseState>,
  setRootSize: (size: Size) => void,
) {
    throw new Error("STUB");
}

const scrollbarSizeCache = new WeakMap<
  Element,
  { size: number; devicePixelRatio: number; measuredDirectly: boolean }
>();
function measureScrollbarSize(element: Element | null, scrollbarSize: number | undefined) {
    throw new Error("STUB");
}

function parseCSSPixelValue(value: string | undefined) {
    throw new Error("STUB");
}

function eslintUseValue(_: any) {}
