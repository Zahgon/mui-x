import { getLabel } from '@mui/x-charts/internals';
import type { LegendGetter } from '@mui/x-charts/internals';
import type { SeriesLegendItemParams } from '@mui/x-charts/ChartsLegend';

const legendGetter: LegendGetter<'ohlc'> = (params) => {
    throw new Error("STUB");
};

export default legendGetter;
