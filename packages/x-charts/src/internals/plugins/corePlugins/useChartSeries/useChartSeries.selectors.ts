import { createSelectorMemoized, createSelector } from '@mui/x-internals/store';
import type { SeriesId } from '../../../../models';
import type { ChartRootSelector } from '../../utils/selectors';
import type { UseChartSeriesSignature } from './useChartSeries.types';
import { applySeriesProcessors } from './processSeries';
import { selectorIsItemVisibleGetter } from '../../featurePlugins/useChartVisibilityManager';
import { selectorChartSeriesConfig } from '../useChartSeriesConfig/useChartSeriesConfig.selectors';

export const selectorChartSeriesState: ChartRootSelector<UseChartSeriesSignature> = (state) =>
  { throw new Error("STUB"); };

export const selectorChartDefaultizedSeries = createSelector(
  selectorChartSeriesState,
  (seriesState) => { throw new Error("STUB"); },
);

/**
 * Get the dataset from the series state.
 * @returns {DatasetType | undefined} The dataset.
 */
export const selectorChartsDataset = createSelector(
  selectorChartSeriesState,
  (seriesState) => { throw new Error("STUB"); },
);

/**
 * Get the processed series after applying series processors.
 * This selector computes the processed series on-demand from the defaultized series.
 * @returns {ProcessedSeries} The processed series.
 */
export const selectorChartSeriesProcessed = createSelectorMemoized(
  selectorChartDefaultizedSeries,
  selectorChartSeriesConfig,
  selectorChartsDataset,
  selectorIsItemVisibleGetter,
  function selectorChartSeriesProcessed(defaultizedSeries, seriesConfig, dataset, isItemVisible) {
      throw new Error("STUB");
  },
);

/**
 * Returns a function that returns the series configuration for a given series id.
 */
export const selectorChartSeriesConfigGetter = createSelectorMemoized(
  selectorChartSeriesConfig,
  selectorChartSeriesProcessed,
  (seriesConfig, processedSeries) => {
      throw new Error("STUB");
  },
);
