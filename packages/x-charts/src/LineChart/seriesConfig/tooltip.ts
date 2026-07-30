import { getLineLikeTooltip } from '../../internals/getLineLikeTooltip';
import type {
  AxisTooltipGetter,
  TooltipGetter,
} from '../../internals/plugins/corePlugins/useChartSeriesConfig';

const tooltipGetter: TooltipGetter<'line'> = (params) =>
  { throw new Error("STUB"); };

export const axisTooltipGetter: AxisTooltipGetter<'line', 'x' | 'y'> = (series) => {
    throw new Error("STUB");
};

export default tooltipGetter;
