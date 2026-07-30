import type { LegendGetter } from '@mui/x-charts/internals';
import { getSeriesLegendItems } from '@mui/x-charts/internals';

const legendGetter: LegendGetter<'radialBar'> = (series) =>
  { throw new Error("STUB"); };

export default legendGetter;
