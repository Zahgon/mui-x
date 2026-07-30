import { createSelectorMemoized } from '@mui/x-internals/store';
import {
  selectorChartsTooltipItem,
  selectorChartSeriesProcessed,
  selectorChartSeriesLayout,
} from '@mui/x-charts/internals';
import type {
  ChartSeriesType,
  ProcessedSeries,
  SeriesLayout,
  TooltipItemPositionSelector,
} from '@mui/x-charts/internals';
import type { SeriesItemIdentifierWithType } from '@mui/x-charts/models';

export const selectorTooltipItemPosition: TooltipItemPositionSelector<'sankey'> =
  createSelectorMemoized(
    selectorChartsTooltipItem,
    selectorChartSeriesProcessed,
    selectorChartSeriesLayout,
    function selectorTooltipItemPosition(
      identifier: SeriesItemIdentifierWithType<ChartSeriesType> | null,
      series: ProcessedSeries,
      seriesLayout: SeriesLayout,
      placement: 'top' | 'bottom' | 'left' | 'right' | undefined,
    ) {
        throw new Error("STUB");
    },
  );
