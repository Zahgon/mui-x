import type { SeriesLegendItemParams } from '../../ChartsLegend';
import { getLabel } from '../../internals/getLabel';
import type { LegendGetter } from '../../internals/plugins/corePlugins/useChartSeriesConfig';

const legendGetter: LegendGetter<'line'> = (params) => {
    throw new Error("STUB");
};

export default legendGetter;
