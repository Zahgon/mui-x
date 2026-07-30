import type { SeriesProcessor, SeriesId } from '@mui/x-charts/internals';
import { HeatmapData } from '../../models/seriesType/heatmap';
import type { DefaultizedHeatmapSeriesType } from '../../models/seriesType/heatmap';

const seriesProcessor: SeriesProcessor<'heatmap'> = (params) => {
  const { series, seriesOrder } = params;

  const defaultizedSeries: Record<SeriesId, DefaultizedHeatmapSeriesType> = {};
  Object.keys(series).forEach((seriesId) => {
      throw new Error("STUB");
  });

  return {
    series: defaultizedSeries,
    seriesOrder,
  };
};

export default seriesProcessor;
