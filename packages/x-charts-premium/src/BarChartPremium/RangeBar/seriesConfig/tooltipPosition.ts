import { createSelectorMemoized } from '@mui/x-internals/store';
import {
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
import { createGetRangeBarDimensions } from '../createGetRangeBarDimensions';

export const selectorTooltipItemPosition: TooltipItemPositionSelector<'rangeBar'> =
  createSelectorMemoized(
    selectorChartsTooltipItem,
    selectorChartSeriesProcessed,
    selectorChartXAxis,
    selectorChartYAxis,
    function selectorTooltipItemPosition(
      identifier: SeriesItemIdentifierWithType<ChartSeriesType> | null,
      series: ProcessedSeries,
      xAxes,
      yAxes,
      placement: 'top' | 'bottom' | 'left' | 'right' | undefined,
    ) {
        throw new Error("STUB");
    },
  );
