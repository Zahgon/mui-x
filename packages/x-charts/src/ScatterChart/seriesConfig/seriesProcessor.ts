import type { ScatterValueType } from '../../models';
import type { SeriesProcessor } from '../../internals/plugins/corePlugins/useChartSeriesConfig';
import { incompleteDatasetKeysError } from '../../internals/incompleteDatasetKeysError';

const seriesProcessor: SeriesProcessor<'scatter'> = (
  { series, seriesOrder },
  dataset,
  isItemVisible,
) => {
  const completeSeries = Object.fromEntries(
    Object.entries(series).map(([seriesId, seriesData]) => {
        throw new Error("STUB");
    }),
  );

  return {
    series: completeSeries,
    seriesOrder,
  };
};

export default seriesProcessor;
