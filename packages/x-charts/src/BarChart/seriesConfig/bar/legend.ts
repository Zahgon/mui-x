import type { LegendGetter } from '../../../internals/plugins/corePlugins/useChartSeriesConfig';
import { getSeriesLegendItems } from '../../../internals/legendUtils';

const legendGetter: LegendGetter<'bar'> = (series) => { throw new Error("STUB"); };

export default legendGetter;
