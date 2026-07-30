import type { PolarExtremumGetter } from '../../internals/plugins/corePlugins/useChartSeriesConfig';

export const radiusExtremumGetter: PolarExtremumGetter<'radar'> = ({ series, axisIndex }) => {
    throw new Error("STUB");
};

export const rotationExtremumGetter: PolarExtremumGetter<'radar'> = ({ axis }) => {
    throw new Error("STUB");
};
