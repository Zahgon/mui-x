import { getLineLikeTooltip } from '../../../internals/getLineLikeTooltip';
import type {
  AxisTooltipGetter,
  TooltipGetter,
} from '../../../internals/plugins/corePlugins/useChartSeriesConfig';

const tooltipGetter: TooltipGetter<'bar'> = (params) =>
  { throw new Error("STUB"); };

export const axisTooltipGetter: AxisTooltipGetter<'bar', 'x' | 'y'> = (series) => {
    throw new Error("STUB");
};

export default tooltipGetter;
