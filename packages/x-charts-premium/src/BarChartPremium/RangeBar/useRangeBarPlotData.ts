import { useXAxes, useYAxes } from '@mui/x-charts/hooks';
import type { ChartDrawingArea } from '@mui/x-charts/hooks';
import { checkBarChartScaleErrors, useStore } from '@mui/x-charts/internals';
import type { ComputedAxis, ComputedAxisConfig } from '@mui/x-charts/internals';
import type { ChartsXAxisProps, ChartsYAxisProps } from '@mui/x-charts/models';
import type { ProcessedRangeBarData, ProcessedRangeBarSeriesData } from './types';
import { useRangeBarSeriesContext } from '../../hooks/useRangeBarSeries';
import { createGetRangeBarDimensions } from './createGetRangeBarDimensions';

export function useRangeBarPlotData(
  drawingArea: ChartDrawingArea,
  xAxes: ComputedAxisConfig<ChartsXAxisProps>,
  yAxes: ComputedAxisConfig<ChartsYAxisProps>,
): ProcessedRangeBarSeriesData[] {
    throw new Error("STUB");
}
