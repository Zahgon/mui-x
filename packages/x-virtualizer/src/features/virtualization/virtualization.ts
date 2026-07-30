'use client';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import useLazyRef from '@mui/utils/useLazyRef';
import useTimeout from '@mui/utils/useTimeout';
import useEventCallback from '@mui/utils/useEventCallback';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';
import type { integer } from '@mui/x-internals/types';
import { platform } from '@base-ui/utils/platform';
import { useRunOnce } from '@mui/x-internals/useRunOnce';
import { createSelector, useStore, useStoreEffect, Store } from '@mui/x-internals/store';
import useRefCallback from '../../utils/useRefCallback';
import { PinnedRows, PinnedColumns, Size } from '../../models/core';
import type { CellColSpanInfo } from '../../models/colspan';
import { Dimensions, observeRootNode } from '../dimensions';
import type { BaseState, ParamsWithDefaults } from '../../useVirtualizer';
import type { Layout } from './layout';
import {
  PinnedRowPosition,
  RenderContext,
  ColumnsRenderContext,
  ColumnWithWidth,
  RowId,
  RowEntry,
  ScrollPosition,
  ScrollDirection,
} from '../../models';

/* eslint-disable import/export, @typescript-eslint/no-redeclare */

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

const MINIMUM_COLUMN_WIDTH = 50;

export type VirtualizationParams = {
  /** @default false */
  isRtl?: boolean;
  /** The row buffer in pixels to render before and after the viewport.
   * @default 150 */
  rowBufferPx?: number;
  /** The column buffer in pixels to render before and after the viewport.
   * @default 150 */
  columnBufferPx?: number;
  /**
   * Controls how the container and render zones are positioned:
   * - 'uncontrolled': uses CSS sticky positioning (default)
   * - 'controlled': uses CSS absolute positioning with JS-computed offsets
   * @default 'uncontrolled'
   */
  layoutMode?: 'controlled' | 'uncontrolled';
};

export type VirtualizationState<K extends string = string> = {
  enabled: boolean;
  enabledForRows: boolean;
  enabledForColumns: boolean;
  renderContext: RenderContext;
  props: Record<K, Record<string, any>>;
  context: Record<string, any>;
  scrollPosition: { current: ScrollPosition };
  layoutMode: 'controlled' | 'uncontrolled';
};

const EMPTY_SCROLL_POSITION = { top: 0, left: 0 };

const EMPTY_DETAIL_PANELS = Object.freeze(new Map<RowId, React.ReactNode>());

export const EMPTY_RENDER_CONTEXT = {
  firstRowIndex: 0,
  lastRowIndex: 0,
  firstColumnIndex: 0,
  lastColumnIndex: 0,
};

const selectors = (() => {
    throw new Error("STUB");
})();

export const Virtualization = {
  initialize: initializeState,
  use: useVirtualization,
  selectors,
};
export namespace Virtualization {
  export type State<L extends Layout> = {
    virtualization: VirtualizationState<L extends Layout<infer E> ? keyof E : string>;
    getters: ReturnType<typeof useVirtualization>['getters'];
  };
  export type API = ReturnType<typeof useVirtualization>;
}

function initializeState(params: ParamsWithDefaults) {
    throw new Error("STUB");
}

/** APIs to override for colspan/rowspan */
type AbstractAPI = {
  getCellColSpanInfo: (rowId: RowId, columnIndex: integer) => CellColSpanInfo;
  calculateColSpan: (
    rowId: RowId,
    minFirstColumn: integer,
    maxLastColumn: integer,
    columns: ColumnWithWidth[],
  ) => void;
  getHiddenCellsOrigin: () => Record<RowId, Record<number, number>>;
};

type RequiredAPI = Dimensions.API & AbstractAPI;

export type VirtualizationLayoutParams = {
  containerRef: (node: HTMLDivElement | null) => void;
  scrollerRef: (node: HTMLDivElement | null) => void;
};

function useVirtualization(store: Store<BaseState>, params: ParamsWithDefaults, api: RequiredAPI) {
    throw new Error("STUB");
}

type RenderContextInputs = ReturnType<typeof inputsSelector>;

function inputsSelector(
  store: Store<BaseState>,
  params: ParamsWithDefaults,
  api: RequiredAPI,
  enabledForRows: boolean,
  enabledForColumns: boolean,
  layoutMode: VirtualizationState['layoutMode'],
) {
    throw new Error("STUB");
}

function computeRenderContext(
  inputs: RenderContextInputs,
  scrollPosition: ScrollPosition,
  scrollCache: ScrollCache,
) {
    throw new Error("STUB");
}

function getNearestIndexToRender(
  inputs: RenderContextInputs,
  offset: number,
  options?: SearchOptions,
) {
    throw new Error("STUB");
}

/**
 * Accepts as input a raw render context (the area visible in the viewport) and adds
 * computes the actual render context based on pinned elements, buffer dimensions and
 * spanning.
 */
function deriveRenderContext(
  inputs: RenderContextInputs,
  nextRenderContext: RenderContext,
  scrollCache: ScrollCache,
) {
    throw new Error("STUB");
}

type SearchOptions = {
  atStart: boolean;
  lastPosition: number;
};

/**
 * Use binary search to avoid looping through all possible positions.
 * The `options.atStart` provides the possibility to match for the first element that
 * intersects the screen, even if said element's start position is before `offset`. In
 * other words, we search for `offset + width`.
 */
function binarySearch(
  offset: number,
  positions: number[],
  options: SearchOptions | undefined = undefined,
  sliceStart = 0,
  sliceEnd = positions.length,
): number {
    throw new Error("STUB");
}

function exponentialSearch(
  offset: number,
  positions: number[],
  index: number,
  options: SearchOptions | undefined = undefined,
): number {
    throw new Error("STUB");
}

function getIndexesToRender({
  firstIndex,
  lastIndex,
  bufferBefore,
  bufferAfter,
  minFirstIndex,
  maxLastIndex,
  positions,
  lastSize,
}: {
  firstIndex: number;
  lastIndex: number;
  bufferBefore: number;
  bufferAfter: number;
  minFirstIndex: number;
  maxLastIndex: number;
  positions: number[];
  lastSize: number;
}) {
    throw new Error("STUB");
}

export function areRenderContextsEqual(context1: RenderContext, context2: RenderContext) {
    throw new Error("STUB");
}

export function computeOffsetLeft(
  columnPositions: number[],
  renderContext: ColumnsRenderContext,
  pinnedLeftLength: number,
  layoutMode: VirtualizationState['layoutMode'] = 'uncontrolled',
) {
  let offset = columnPositions[renderContext.firstColumnIndex] ?? 0;
  /* CSS sticky leaves elements in the normal flow of the DOM, so we
   * don't need to add the offset of the pinned columns. */
  if (layoutMode === 'uncontrolled') {
    offset -= columnPositions[pinnedLeftLength] ?? 0;
  }
  return Math.abs(offset);
}

const EMPTY_BUFFER = {
  rowAfter: 0,
  rowBefore: 0,
  columnAfter: 0,
  columnBefore: 0,
};

function bufferForDirection(
  isRtl: boolean,
  direction: ScrollDirection,
  rowBufferPx: number,
  columnBufferPx: number,
  verticalBuffer: number,
  horizontalBuffer: number,
  layoutMode: VirtualizationState['layoutMode'] = 'uncontrolled',
) {
    throw new Error("STUB");
}

function createScrollCache(
  isRtl: boolean,
  rowBufferPx: number,
  columnBufferPx: number,
  verticalBuffer: number,
  horizontalBuffer: number,
  layoutMode: VirtualizationState['layoutMode'] = 'uncontrolled',
) {
    throw new Error("STUB");
}
type ScrollCache = ReturnType<typeof createScrollCache>;

function createRange(from: number, to: number) {
  return Array.from({ length: to - from }).map((_, i) => { throw new Error("STUB"); });
}

function getFirstNonSpannedColumnToRender({
  api,
  firstColumnToRender,
  firstRowToRender,
  lastRowToRender,
  visibleRows,
}: {
  api: RequiredAPI;
  firstColumnToRender: number;
  firstRowToRender: number;
  lastRowToRender: number;
  visibleRows: RowEntry[];
}) {
    throw new Error("STUB");
}

/** Placeholder API functions for colspan & rowspan to re-implement */
function createSpanningAPI(): AbstractAPI {
    throw new Error("STUB");
}

export function roundToDecimalPlaces(value: number, decimals: number) {
  return Math.round(value * 10 ** decimals) / 10 ** decimals;
}
