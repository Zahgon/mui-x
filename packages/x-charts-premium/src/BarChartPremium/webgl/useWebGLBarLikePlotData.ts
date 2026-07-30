'use client';
import * as React from 'react';
import type { ChartDrawingArea } from '@mui/x-charts/hooks';
import { selectorChartsHighlightStateCallback, useStore } from '@mui/x-charts/internals';
import type { BorderRadiusSide } from '@mui/x-charts/internals';
import type { SeriesId } from '@mui/x-charts/models';
import { parseColor } from '../../utils/webgl/parseColor';

export interface WebGLBarLikeItem {
  x: number;
  y: number;
  width: number;
  height: number;
  // Only checked against null to decide whether to draw the bar.
  value: unknown;
  hidden: boolean;
  color: string;
  dataIndex: number;
  // Only relevant for the standard bar series (stacked bars round only the
  // outer corners). Range bars don't have a side and rely on the
  // `fullRoundedCorners` option below.
  borderRadiusSide?: BorderRadiusSide;
}

export interface WebGLBarLikeSeries<T extends WebGLBarLikeItem> {
  seriesId: SeriesId;
  data: readonly T[];
  layout?: 'vertical' | 'horizontal';
}

export interface WebGLBarLikePlotData {
  centers: Float32Array;
  halfSizes: Float32Array;
  // Uint8 [0, 255]; uploaded as UNSIGNED_BYTE with normalized=true so the
  // shader reads back vec4 in [0, 1]. Matches the convention adopted by the
  // scatter / candlestick / heatmap WebGL programs.
  colors: Uint8Array;
  cornerRadii: Float32Array;
  count: number;
}

const EMPTY_FLOAT32 = new Float32Array(0);
const EMPTY_UINT8 = new Uint8Array(0);
const EMPTY_DATA: WebGLBarLikePlotData = {
  centers: EMPTY_FLOAT32,
  halfSizes: EMPTY_FLOAT32,
  colors: EMPTY_UINT8,
  cornerRadii: EMPTY_FLOAT32,
  count: 0,
};

interface ArrayPool {
  centers: Float32Array;
  halfSizes: Float32Array;
  colors: Uint8Array;
  cornerRadii: Float32Array;
}

function ensureCapacity(pool: ArrayPool | null, maxCount: number): ArrayPool {
    throw new Error("STUB");
}

// Mirrors SVG highlight styling: highlighted -> CSS `brightness(120%)`,
// faded -> opacity 0.3. Baking these into the per-bar color array means we
// don't need a separate per-instance attribute on the GPU side.
const HIGHLIGHTED_BRIGHTNESS = 1.2;
const FADED_OPACITY = 0.3;
// Gaps below this (CSS px) get filled by expanding band half-size to half the
// step, avoiding sub-pixel hairlines from the rasterizer.
const GAP_FILL_THRESHOLD_PX = 1;
// Floor to keep thin quads from falling between pixel centers and getting
// culled at extreme zoom-out.
const MIN_BAND_HALF_SIZE_PX = 0.5;

function setCornerRadii(
  radius: number,
  side: BorderRadiusSide | undefined,
  fullRounded: boolean,
  target: Float32Array,
  offset: number,
) {
    throw new Error("STUB");
}

export interface UseWebGLBarLikePlotDataOptions {
  /**
   * Series identifier passed to the highlight selector. Allows the shared
   * implementation to be used for both `'bar'` and `'rangeBar'` series.
   */
  highlightType: 'bar' | 'rangeBar';
  /**
   * When true, the border radius is applied to all four corners regardless of
   * the per-item `borderRadiusSide` value. Range bars use this since they
   * aren't stacked.
   */
  fullRoundedCorners?: boolean;
}

export function useWebGLBarLikePlotData<T extends WebGLBarLikeItem>(
  drawingArea: ChartDrawingArea,
  completedData: readonly WebGLBarLikeSeries<T>[],
  borderRadius: number,
  options: UseWebGLBarLikePlotDataOptions,
): WebGLBarLikePlotData {
    throw new Error("STUB");
}
