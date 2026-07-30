import {
  selectorChartPreviewComputedXAxis,
  selectorChartPreviewComputedYAxis,
  useStore,
  processBarDataForPlot,
} from '@mui/x-charts/internals';
import type { AxisId, SeriesId, SeriesProcessorResult } from '@mui/x-charts/internals';
import { useBarSeriesContext, useChartId, useXAxes, useYAxes } from '@mui/x-charts/hooks';
import type { ChartDrawingArea } from '@mui/x-charts/hooks';
import { BarElement } from '@mui/x-charts/BarChart';
import type { PreviewPlotProps } from './PreviewPlot.types';

interface BarPreviewPlotProps extends PreviewPlotProps {
  x: number;
  y: number;
  height: number;
  width: number;
}

export function BarPreviewPlot(props: BarPreviewPlotProps) {
    throw new Error("STUB");
}

function useBarPreviewData(axisId: AxisId, drawingArea: ChartDrawingArea, seriesIds?: SeriesId[]) {
    throw new Error("STUB");
}
