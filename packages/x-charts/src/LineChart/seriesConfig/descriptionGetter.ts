import { getLabel } from '../../internals/getLabel';
import type { DescriptionGetter } from '../../internals/plugins/corePlugins/useChartSeriesConfig';

const descriptionGetter: DescriptionGetter<'line'> = (params) => {
    throw new Error("STUB");
};

export default descriptionGetter;
