import { warnOnce } from '@mui/x-internals/warning';
import { createSelector, createSelectorMemoized } from '@mui/x-internals/store';
import type { ChartSeriesDefaultized, ChartsSeriesConfig } from '../models/seriesType/config';
import type { SeriesId } from '../models/seriesType/common';
import { selectorChartSeriesProcessed } from './plugins/corePlugins/useChartSeries/useChartSeries.selectors';
import type { ProcessedSeries } from './plugins/corePlugins/useChartSeries';
import { useStore } from './store/useStore';

export const selectorAllSeriesOfType = createSelector(
  selectorChartSeriesProcessed,
  <T extends keyof ChartsSeriesConfig>(processedSeries: ProcessedSeries, seriesType: T) =>
    { throw new Error("STUB"); },
);

export const selectorSeriesOfType = createSelectorMemoized(
  selectorChartSeriesProcessed,
  <T extends keyof ChartsSeriesConfig>(
    processedSeries: ProcessedSeries,
    seriesType: T,
    ids: SeriesId | SeriesId[] | undefined,
  ) => {
      throw new Error("STUB");
  },
);

export const useAllSeriesOfType = <T extends keyof ChartsSeriesConfig>(seriesType: T) => {
  const store = useStore();
  return store.use(selectorAllSeriesOfType, seriesType) as ProcessedSeries[T];
};

export const useSeriesOfType = <T extends keyof ChartsSeriesConfig>(
  seriesType: T,
  seriesId?: SeriesId | SeriesId[],
) => {
  const store = useStore();
  return store.use(selectorSeriesOfType, seriesType, seriesId) as
    ChartSeriesDefaultized<T> | ChartSeriesDefaultized<T>[] | undefined;
};
