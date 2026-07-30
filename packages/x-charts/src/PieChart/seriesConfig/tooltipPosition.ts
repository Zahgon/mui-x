import { createSelectorMemoized } from '@mui/x-internals/store';
import { findMinMax } from '../../internals/findMinMax';
import { selectorChartsTooltipItem } from '../../internals/plugins/featurePlugins/useChartTooltip/useChartTooltip.selectors';
import {
  selectorChartSeriesProcessed,
  selectorChartSeriesLayout,
} from '../../internals/plugins/corePlugins/useChartSeries';
import type { TooltipItemPositionSelector } from '../../internals/plugins/corePlugins/useChartSeriesConfig';

export const selectorTooltipItemPosition: TooltipItemPositionSelector<'pie'> =
  createSelectorMemoized(
    selectorChartsTooltipItem,
    selectorChartSeriesProcessed,
    selectorChartSeriesLayout,
    function selectorTooltipItemPosition(
      identifier,
      series,
      seriesLayout,
      placement: 'top' | 'bottom' | 'left' | 'right' | undefined,
    ) {
        throw new Error("STUB");
    },
  );
