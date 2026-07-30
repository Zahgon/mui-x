import type { LegendGetter } from '../../internals/plugins/corePlugins/useChartSeriesConfig';
import { getSeriesLegendItems } from '../../internals/legendUtils';

const legendGetter: LegendGetter<'scatter'> = (series) => { throw new Error("STUB"); };

export default legendGetter;
