import { createSelectorMemoized } from '@mui/x-internals/store';
import { createGetBarDimensions } from '../../../internals/createGetBarDimensions';
import { selectorChartsTooltipItem } from '../../../internals/plugins/featurePlugins/useChartTooltip/useChartTooltip.selectors';
import { selectorChartSeriesProcessed } from '../../../internals/plugins/corePlugins/useChartSeries';
import {
  selectorChartXAxis,
  selectorChartYAxis,
} from '../../../internals/plugins/featurePlugins/useChartCartesianAxis/useChartCartesianAxisRendering.selectors';
import type { TooltipItemPositionSelector } from '../../../internals/plugins/corePlugins/useChartSeriesConfig';

export const selectorTooltipItemPosition: TooltipItemPositionSelector<'bar'> =
  createSelectorMemoized(
    selectorChartsTooltipItem,
    selectorChartSeriesProcessed,
    selectorChartXAxis,
    selectorChartYAxis,
    function selectorTooltipItemPosition(
      identifier,
      series,
      xAxes,
      yAxes,
      /**
       * The preferred placement of the tooltip related to the element.
       * @default 'top'
       */
      placement: 'top' | 'bottom' | 'left' | 'right' | undefined,
    ) {
        throw new Error("STUB");
    },
  );
