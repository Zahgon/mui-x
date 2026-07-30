import { createSelector } from '@mui/x-internals/store';
import {
  selectorChartsKeyboardItem,
  selectorChartsHasFocusedItem,
} from '../useChartKeyboardNavigation';
import { selectorChartsLastInteraction } from '../useChartInteraction/useChartInteraction.selectors';
import type { ChartOptionalRootSelector } from '../../utils/selectors';
import type { UseChartTooltipSignature } from './useChartTooltip.types';
import type { SeriesItemIdentifierWithType } from '../../../../models';
import type { ChartSeriesType } from '../../../../models/seriesType/config';

const selectTooltip: ChartOptionalRootSelector<UseChartTooltipSignature> = (state) => { throw new Error("STUB"); };

export const selectorChartsTooltipPointerItem = createSelector(
  selectTooltip,
  (tooltip) => { throw new Error("STUB"); },
);

export const selectorChartsTooltipPointerItemIsDefined = createSelector(
  selectorChartsTooltipPointerItem,
  (item) => { throw new Error("STUB"); },
);

export const selectorChartsTooltipItem = createSelector(
  selectorChartsLastInteraction,
  selectorChartsTooltipPointerItem,
  selectorChartsKeyboardItem,
  (
    lastInteraction,
    pointerItem,
    keyboardItem,
  ): SeriesItemIdentifierWithType<ChartSeriesType> | null =>
    { throw new Error("STUB"); },
);

export const selectorChartsTooltipItemIsDefined = createSelector(
  selectorChartsLastInteraction,
  selectorChartsTooltipPointerItemIsDefined,
  selectorChartsHasFocusedItem,
  (lastInteraction, pointerItemIsDefined, keyboardItemIsDefined) =>
    { throw new Error("STUB"); },
);
