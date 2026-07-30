import { createSelectorMemoized } from '@mui/x-internals/store';
import {
  isBandScaleConfig,
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

export const selectorTooltipItemPosition: TooltipItemPositionSelector<'heatmap'> =
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
