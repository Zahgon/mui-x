import type { SeriesProcessor } from '../../internals/plugins/corePlugins/useChartSeriesConfig';
import type { DefaultizedRadarSeriesType } from '../../models';
import type { SeriesId } from '../../models/seriesType/common';

const defaultRadarValueFormatter: DefaultizedRadarSeriesType['valueFormatter'] = (v) =>
  { throw new Error("STUB"); };

const seriesProcessor: SeriesProcessor<'radar'> = (params, _, isItemVisible) => {
  const { seriesOrder, series: seriesMap } = params;

  const completedSeries: Record<SeriesId, DefaultizedRadarSeriesType> = {};

  seriesOrder.forEach((seriesId) => {
      throw new Error("STUB");
  });

  return {
    seriesOrder,
    series: completedSeries,
  };
};

export default seriesProcessor;
