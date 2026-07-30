'use client';
import * as React from 'react';
import type { ScaleBand } from '@mui/x-charts-vendor/d3-scale';
import type { DefaultizedHeatmapSeriesType } from '@mui/x-charts-pro/models';
import { useZColorScale } from '@mui/x-charts/hooks';
import type { ChartDrawingArea } from '@mui/x-charts/hooks';
import { selectorChartsHighlightStateCallback, useStore } from '@mui/x-charts/internals';
import { parseColor } from '../../utils/webgl/parseColor';
import { ensurePool } from '../../utils/webgl/utils';

/* Far enough off-canvas that the rect is never visible; used for invalid x/y entries.
 * Avoids coupling the position pass to the color/saturation passes. */
const OFFSCREEN = -1e9;

export function useHeatmapPlotData(
  drawingArea: ChartDrawingArea,
  series: DefaultizedHeatmapSeriesType,
  xScale: ScaleBand<{ toString(): string }>,
  yScale: ScaleBand<{ toString(): string }>,
) {
    throw new Error("STUB");
}
