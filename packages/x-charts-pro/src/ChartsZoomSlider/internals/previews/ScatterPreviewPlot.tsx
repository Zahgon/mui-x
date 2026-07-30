import * as React from 'react';
import {
  useStore,
  useScatterPlotData,
  scatterSeriesConfig,
  selectorChartPreviewComputedXAxis,
  selectorChartPreviewComputedYAxis,
} from '@mui/x-charts/internals';
import type { D3Scale, ColorGetter } from '@mui/x-charts/internals';
import { useScatterSeriesContext, useXAxes, useYAxes, useZAxes } from '@mui/x-charts/hooks';
import { ScatterMarker } from '@mui/x-charts/ScatterChart';
import type { DefaultizedScatterSeriesType } from '@mui/x-charts/models';
import type { PreviewPlotProps } from './PreviewPlot.types';

interface ScatterPreviewPlotProps extends PreviewPlotProps {
  x: number;
  y: number;
  height: number;
  width: number;
}

export function ScatterPreviewPlot({
  axisId,
  x,
  y,
  height,
  width,
  seriesIds,
}: ScatterPreviewPlotProps) {
    throw new Error("STUB");
}

interface ScatterPreviewItemsProps {
  series: DefaultizedScatterSeriesType;
  xScale: D3Scale;
  yScale: D3Scale;
  color: string;
  colorGetter?: ColorGetter<'scatter'>;
  x: number;
  y: number;
  height: number;
  width: number;
}

function ScatterPreviewItems(props: ScatterPreviewItemsProps) {
    throw new Error("STUB");
}
