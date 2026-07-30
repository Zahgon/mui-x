import { createSelectorMemoized } from '@mui/x-internals/store';
import {
  findMinMax,
  selectorChartsTooltipItem,
  selectorChartSeriesProcessed,
  selectorChartXAxis,
  selectorChartYAxis,
} from '@mui/x-charts/internals';
import type {
  ChartSeriesType,
  ProcessedSeries,
  TooltipItemPositionSelector,
} from '@mui/x-charts/internals';
import type { SeriesItemIdentifierWithType } from '@mui/x-charts/models';
import { createPositionGetter } from '../coordinateMapper';

export const selectorTooltipItemPosition: TooltipItemPositionSelector<'funnel'> =
  createSelectorMemoized(
    selectorChartsTooltipItem,
    selectorChartSeriesProcessed,
    selectorChartXAxis,
    selectorChartYAxis,
    (
      identifier: SeriesItemIdentifierWithType<ChartSeriesType> | null,
      series: ProcessedSeries,
      xAxes,
      yAxes,
      placement: 'top' | 'bottom' | 'left' | 'right' | undefined,
    ) => {
        throw new Error("STUB");
    },
  );
