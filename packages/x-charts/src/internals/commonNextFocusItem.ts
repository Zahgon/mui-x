import { getPreviousNonEmptySeries } from './plugins/featurePlugins/useChartKeyboardNavigation/utils/getPreviousNonEmptySeries';
import { getMaxSeriesLength } from './plugins/featurePlugins/useChartKeyboardNavigation/utils/getMaxSeriesLength';
import type { UseChartKeyboardNavigationSignature } from './plugins/featurePlugins/useChartKeyboardNavigation';
import { getNextNonEmptySeries } from './plugins/featurePlugins/useChartKeyboardNavigation/utils/getNextNonEmptySeries';
import { findVisibleDataIndex } from './plugins/featurePlugins/useChartKeyboardNavigation/utils/findVisibleDataIndex';
import type { ChartState } from './plugins/models/chart';
import { seriesHasData } from './seriesHasData';
import type { ChartSeriesType } from '../models/seriesType/config';
import type { SeriesId } from '../models/seriesType';
import type { ProcessedSeries } from './plugins/corePlugins/useChartSeries/useChartSeries.types';
import { selectorChartSeriesProcessed } from './plugins/corePlugins/useChartSeries/useChartSeries.selectors';

type ReturnedItem<OutSeriesType extends ChartSeriesType> = {
  type: OutSeriesType;
  seriesId: SeriesId;
  dataIndex: number;
} | null;

/**
 * The item the navigators work on. Decoupled from the public `FocusedItemIdentifier` because
 * navigation is position-based: series keyed differently (e.g. `mapShape`, keyed by `name`)
 * reuse these helpers by translating to a `dataIndex` at their boundary.
 */
type WorkingItem = {
  type: Exclude<ChartSeriesType, 'sankey' | 'heatmap'>;
  seriesId: SeriesId;
  dataIndex?: number;
};

type StateParameters<SeriesType extends ChartSeriesType> = Pick<
  ChartState<[UseChartKeyboardNavigationSignature], [], SeriesType>,
  'series'
>;

function isSeriesHidden(
  processedSeries: ProcessedSeries<ChartSeriesType>,
  type: ChartSeriesType,
  seriesId: SeriesId,
): boolean {
  const seriesItem = processedSeries[type]?.series[seriesId];
  return Boolean(seriesItem && 'hidden' in seriesItem && seriesItem.hidden);
}

export function createGetNextIndexFocusedItem<
  InSeriesType extends Exclude<ChartSeriesType, 'sankey' | 'heatmap'>,
  OutSeriesType extends Exclude<ChartSeriesType, 'sankey' | 'heatmap'> = InSeriesType,
>(
  /**
   * The set of series types compatible with this navigation action.
   */
  compatibleSeriesTypes: Set<OutSeriesType>,
  /**
   * If true, allows cycling from the last item to the first one.
   */
  allowCycles: boolean = false,
  /**
   * If true (default), series max index is defined by the current series length and not all series.
   */
  useCurrentSeriesMaxLength: boolean = true,
) {
  return function getNextIndexFocusedItem(
    currentItem: WorkingItem | null,
    state: StateParameters<InSeriesType>,
  ): ReturnedItem<OutSeriesType> {
      throw new Error("STUB");
  };
}

export function createGetPreviousIndexFocusedItem<
  InSeriesType extends Exclude<ChartSeriesType, 'sankey' | 'heatmap'>,
  OutSeriesType extends Exclude<ChartSeriesType, 'sankey' | 'heatmap'> = InSeriesType,
>(
  /**
   * The set of series types compatible with this navigation action.
   */
  compatibleSeriesTypes: Set<OutSeriesType>,
  /**
   * If true, allows cycling from the last item to the first one.
   */
  allowCycles: boolean = false,
  /**
   * If true (default), series max index is defined by the current series length and not all series.
   */
  useCurrentSeriesMaxLength: boolean = true,
) {
  return function getPreviousIndexFocusedItem(
    currentItem: WorkingItem | null,
    state: StateParameters<InSeriesType>,
  ): ReturnedItem<OutSeriesType> {
      throw new Error("STUB");
  };
}

export function createGetNextSeriesFocusedItem<
  InSeriesType extends Exclude<ChartSeriesType, 'sankey' | 'heatmap'>,
  OutSeriesType extends Exclude<ChartSeriesType, 'sankey' | 'heatmap'> = InSeriesType,
>(
  /**
   * The set of series types compatible with this navigation action.
   */
  compatibleSeriesTypes: Set<OutSeriesType>,
) {
  return function getNextSeriesFocusedItem(
    currentItem: WorkingItem | null,
    state: StateParameters<InSeriesType>,
  ): ReturnedItem<OutSeriesType> {
      throw new Error("STUB");
  };
}

export function createGetPreviousSeriesFocusedItem<
  InSeriesType extends Exclude<ChartSeriesType, 'sankey' | 'heatmap'>,
  OutSeriesType extends Exclude<ChartSeriesType, 'sankey' | 'heatmap'> = InSeriesType,
>(
  /**
   * The set of series types compatible with this navigation action.
   */
  compatibleSeriesTypes: Set<OutSeriesType>,
) {
  return function getPreviousSeriesFocusedItem(
    currentItem: WorkingItem | null,
    state: StateParameters<InSeriesType>,
  ): ReturnedItem<OutSeriesType> {
      throw new Error("STUB");
  };
}
