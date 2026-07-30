import { createSelectorMemoized } from '@mui/x-internals/store';
import { selectorChartsTooltipItem } from '../../internals/plugins/featurePlugins/useChartTooltip/useChartTooltip.selectors';
import { selectorChartSeriesProcessed } from '../../internals/plugins/corePlugins/useChartSeries';
import {
  selectorChartXAxis,
  selectorChartYAxis,
} from '../../internals/plugins/featurePlugins/useChartCartesianAxis/useChartCartesianAxisRendering.selectors';
import type { TooltipItemPositionSelector } from '../../internals/plugins/corePlugins/useChartSeriesConfig';

export const selectorTooltipItemPosition: TooltipItemPositionSelector<'line'> =
  createSelectorMemoized(
    selectorChartsTooltipItem,
    selectorChartSeriesProcessed,
    selectorChartXAxis,
    selectorChartYAxis,
    function selectorTooltipItemPosition(identifier, series, xAxes, yAxes) {
        throw new Error("STUB");
    },
  );
