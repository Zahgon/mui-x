import { incompleteDatasetKeysError } from '@mui/x-charts/internals';
import type { SeriesProcessor, SeriesId, ChartSeriesDefaultized } from '@mui/x-charts/internals';
import type { MapShapeValueType } from '../../models/seriesType/mapShape';

const defaultValueFormatter = ((v) =>
  { throw new Error("STUB"); }) as ChartSeriesDefaultized<'mapShape'>['valueFormatter'];

const seriesProcessor: SeriesProcessor<'mapShape'> = (
  { series, seriesOrder },
  dataset,
  isItemVisible,
) => {
  const defaultizedSeries: Record<SeriesId, ChartSeriesDefaultized<'mapShape'>> = {};

  seriesOrder.forEach((seriesId) => {
      throw new Error("STUB");
  });

  return {
    series: defaultizedSeries,
    seriesOrder,
  };
};

export default seriesProcessor;
