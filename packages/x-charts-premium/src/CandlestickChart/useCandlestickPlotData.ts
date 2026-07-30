'use client';
import * as React from 'react';
import type { ScaleBand } from '@mui/x-charts-vendor/d3-scale';
import { selectorChartsHighlightStateCallback, useStore } from '@mui/x-charts/internals';
import type { D3ContinuousScale } from '@mui/x-charts/internals';
import type { ChartDrawingArea } from '@mui/x-charts/hooks';
import { useTheme } from '@mui/material/styles';
import type { DefaultizedOHLCSeriesType } from '../models';
import { parseColor } from '../utils/webgl/parseColor';
import getColor from './seriesConfig/getColor';

const FADE_OPACITY = 0.3;
const HIGHLIGHT_BRIGHTNESS = 1.2;

export interface CandlestickPlotData {
  candleCenters: Float32Array;
  candleHeights: Float32Array;
  /* RGBA, 1 byte per channel; shader reads normalized [0, 1] floats. Uint8Clamped lets us
   * apply the highlight brightness multiplier without manual saturation. */
  candleColors: Uint8ClampedArray;
  wickCenters: Float32Array;
  wickHeights: Float32Array;
  wickColors: Uint8ClampedArray;
}

type PositionsPool = {
  candleCenters: Float32Array;
  candleHeights: Float32Array;
  wickCenters: Float32Array;
  wickHeights: Float32Array;
};

function ensurePoolFloat32(pool: Float32Array | undefined, n: number) {
    throw new Error("STUB");
}

export function useCandlestickPlotData(
  drawingArea: ChartDrawingArea,
  series: DefaultizedOHLCSeriesType,
  xScale: ScaleBand<{ toString(): string }>,
  yScale: D3ContinuousScale,
): CandlestickPlotData {
    throw new Error("STUB");
}
