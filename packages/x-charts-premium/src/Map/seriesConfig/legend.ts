import type { SeriesLegendItemParams } from '@mui/x-charts/ChartsLegend';
import { getLabel } from '@mui/x-charts/internals';
import type { LegendGetter } from '@mui/x-charts/internals';

const legendGetter: LegendGetter<'mapShape'> = ({ seriesOrder, series }) => {
    throw new Error("STUB");
};

export default legendGetter;
