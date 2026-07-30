import * as React from 'react';
import { selectorChartSeriesProcessed, useStore } from '@mui/x-charts/internals';
import type { AxisId, SeriesId } from '@mui/x-charts/internals';
import { seriesPreviewPlotMap } from './seriesPreviewPlotMap';

export interface ChartsAxisZoomSliderPreviewContentProps {
  axisId: AxisId;
  x: number;
  y: number;
  height: number;
  width: number;
  /**
   * If provided, only the series with these IDs will be shown in the preview.
   */
  seriesIds?: SeriesId[];
}

export function ChartsAxisZoomSliderPreviewContent(props: ChartsAxisZoomSliderPreviewContentProps) {
    throw new Error("STUB");
}
