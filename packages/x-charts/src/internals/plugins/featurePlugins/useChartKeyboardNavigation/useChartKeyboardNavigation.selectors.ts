import { createSelector, createSelectorMemoized } from '@mui/x-internals/store';
import { fastObjectShallowCompare } from '@mui/x-internals/fastObjectShallowCompare';
import type { ChartOptionalRootSelector } from '../../utils/selectors';
import type { UseChartKeyboardNavigationSignature } from './useChartKeyboardNavigation.types';
import { selectorChartSeriesProcessed } from '../../corePlugins/useChartSeries';
import type { ProcessedSeries } from '../../corePlugins/useChartSeries';
import {
  selectorChartXAxis,
  selectorChartYAxis,
} from '../useChartCartesianAxis/useChartCartesianAxisRendering.selectors';
import type { ComputeResult } from '../useChartCartesianAxis/computeAxisValue';
import type { ChartSeriesType } from '../../../../models/seriesType/config';
import type { FocusedItemIdentifier } from '../../../../models/seriesType';
import type { AxisId, AxisItemIdentifier, ChartsAxisProps } from '../../../../models/axis';

const selectKeyboardNavigation: ChartOptionalRootSelector<UseChartKeyboardNavigationSignature> = (
  state,
) => { throw new Error("STUB"); };

export const selectorChartsItemIsFocused = createSelector(
  selectKeyboardNavigation,
  (keyboardNavigationState, item: FocusedItemIdentifier<ChartSeriesType>) =>
    { throw new Error("STUB"); },
);

export const selectorChartsHasFocusedItem = createSelector(
  selectKeyboardNavigation,
  (keyboardNavigationState) =>
    { throw new Error("STUB"); },
);

export const selectorChartsFocusedItem = createSelector(
  selectKeyboardNavigation,
  (keyboardNavigationState) =>
    { throw new Error("STUB"); },
);

/**
 * The item that is either
 * - currently focused
 * - will be focused when user focuses the chart
 */
export const selectorChartsFocusedOrToFocusedItem = createSelector(
  selectKeyboardNavigation,
  (keyboardNavigationState) => { throw new Error("STUB"); },
);

export const selectorChartsIsKeyboardNavigationEnabled = createSelector(
  selectKeyboardNavigation,
  (keyboardNavigationState) => { throw new Error("STUB"); },
);

/**
 * Selectors to override highlight behavior.
 */

const createSelectAxisHighlight =
  (direction: 'x' | 'y') =>
  <SeriesType extends ChartSeriesType>(
    item: FocusedItemIdentifier<SeriesType> | null,
    axis: ComputeResult<ChartsAxisProps>,
    series: ProcessedSeries<SeriesType>,
  ): AxisItemIdentifier | undefined => {
      throw new Error("STUB");
  };

export const selectorChartsKeyboardXAxisIndex = createSelector(
  selectorChartsFocusedItem,
  selectorChartXAxis,
  selectorChartSeriesProcessed,
  createSelectAxisHighlight('x'),
);

export const selectorChartsKeyboardYAxisIndex = createSelector(
  selectorChartsFocusedItem,
  selectorChartYAxis,
  selectorChartSeriesProcessed,
  createSelectAxisHighlight('y'),
);

export const selectorChartsKeyboardItem = createSelectorMemoized(
  selectKeyboardNavigation,
  function selectorChartsKeyboardItem(keyboardState) {
      throw new Error("STUB");
  },
);
