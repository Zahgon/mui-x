import { getLabel } from '../../internals/getLabel';
import type { DescriptionGetter } from '../../internals/plugins/corePlugins/useChartSeriesConfig';

const descriptionGetter: DescriptionGetter<'pie'> = (params) => {
    throw new Error("STUB");
};

export default descriptionGetter;
