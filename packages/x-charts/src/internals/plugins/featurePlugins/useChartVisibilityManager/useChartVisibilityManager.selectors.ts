import { createSelector, createSelectorMemoized } from '@mui/x-internals/store';
import type {
  UseChartVisibilityManagerSignature,
  VisibilityIdentifierWithType,
  VisibilityMap,
} from './useChartVisibilityManager.types';
import type { ChartOptionalRootSelector } from '../../utils/selectors';
import { selectorChartSeriesConfig } from '../../corePlugins/useChartSeriesConfig';
import type { ChartSeriesConfig } from '../../corePlugins/useChartSeriesConfig';
import { serializeIdentifier } from '../../corePlugins/useChartSeriesConfig/utils/serializeIdentifier';
import type { ChartSeriesType } from '../../../../models/seriesType/config';

/**
 * Selector to get the visibility manager state.
 */
const selectVisibilityManager: ChartOptionalRootSelector<UseChartVisibilityManagerSignature> = (
  state,
) => { throw new Error("STUB"); };

export const EMPTY_VISIBILITY_MAP = new Map();

/**
 * Selector to get the hidden identifiers from the visibility manager.
 */
export const selectorVisibilityMap = createSelector(
  selectVisibilityManager,
  (visibilityManager) => { throw new Error("STUB"); },
);

const selectorIsItemVisibleFn = <SeriesType extends ChartSeriesType>(
  visibilityMap: VisibilityMap,
  seriesConfig: ChartSeriesConfig<SeriesType>,
) => {
    throw new Error("STUB");
};

/**
 * Selector that returns a function which returns whether an item is visible.
 */
export const selectorIsItemVisibleGetter = createSelectorMemoized(
  selectorVisibilityMap,
  selectorChartSeriesConfig,
  selectorIsItemVisibleFn,
);
