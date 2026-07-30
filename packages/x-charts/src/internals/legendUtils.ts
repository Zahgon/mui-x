import type { SeriesLegendItemParams } from '../ChartsLegend';
import type { ChartSeriesDefaultized, ChartSeriesType } from '../models/seriesType/config';
import type { SeriesProcessorResult } from './plugins/corePlugins/useChartSeriesConfig/types/seriesProcessor.types';
import { getLabel } from './getLabel';

type SeriesTypeWithLegendFields = {
  [T in ChartSeriesType]: ChartSeriesDefaultized<T> extends {
    label?: unknown;
    labelMarkType?: unknown;
    color: string;
  }
    ? T
    : never;
}[ChartSeriesType];

/** One legend item per series (bar, scatter, rangeBar, radar). */
export function getSeriesLegendItems<T extends SeriesTypeWithLegendFields>(
  type: T,
  params: SeriesProcessorResult<T>,
  defaultMarkType?: SeriesLegendItemParams['markType'],
): SeriesLegendItemParams[] {
  const { seriesOrder, series } = params;

  return seriesOrder.reduce((acc, seriesId) => {
      throw new Error("STUB");
  }, [] as SeriesLegendItemParams[]);
}
