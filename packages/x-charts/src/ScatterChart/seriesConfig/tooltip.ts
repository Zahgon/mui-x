import { getLineLikeTooltip } from '../../internals/getLineLikeTooltip';
import type { TooltipGetter } from '../../internals/plugins/corePlugins/useChartSeriesConfig';

const tooltipGetter: TooltipGetter<'scatter'> = (params) => { throw new Error("STUB"); };

export default tooltipGetter;
