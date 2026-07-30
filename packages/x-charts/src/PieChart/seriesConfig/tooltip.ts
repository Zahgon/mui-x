import { getLabel } from '../../internals/getLabel';
import type { TooltipGetter } from '../../internals/plugins/corePlugins/useChartSeriesConfig';

const tooltipGetter: TooltipGetter<'pie'> = (params) => {
    throw new Error("STUB");
};

export default tooltipGetter;
