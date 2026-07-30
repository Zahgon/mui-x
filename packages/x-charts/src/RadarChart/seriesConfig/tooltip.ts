import { getLabel } from '../../internals/getLabel';
import type {
  AxisTooltipGetter,
  TooltipGetter,
} from '../../internals/plugins/corePlugins/useChartSeriesConfig';

const tooltipGetter: TooltipGetter<'radar'> = (params) => {
    throw new Error("STUB");
};

export const axisTooltipGetter: AxisTooltipGetter<'radar', 'rotation'> = (series) => {
    throw new Error("STUB");
};

export default tooltipGetter;
