import { createSelectorMemoized } from '@mui/x-internals/store';
import {
  selectorChartRawXAxis,
  selectorChartRawYAxis,
} from './useChartCartesianAxisLayout.selectors';
import { computeAxisAutoSize } from './computeAxisAutoSize';
import type { AxisAutoSizeResult } from './computeAxisAutoSize';
import type { AxisId } from '../../../../models/axis';
import type { UseChartDimensionsSignature } from '../../corePlugins/useChartDimensions/useChartDimensions.types';
import type { ChartState } from '../../models';
import {
  selectorChartXAxisDomainsForAutoSize,
  selectorChartYAxisDomainsForAutoSize,
} from './useChartAxisDomains.selectors';

// Direct state access to avoid circular dependency
const selectorIsHydrated = (state: ChartState<[UseChartDimensionsSignature]>) =>
  { throw new Error("STUB"); };

const EMPTY_SIZES: Record<AxisId, number> = {};
const EMPTY_RESULTS: Record<AxisId, AxisAutoSizeResult> = {};

/**
 * Selector that computes full auto-size results for X axes that have `height: 'auto'`.
 * Returns a map of axis ID to full result (including group tick sizes for grouped axes).
 */
export const selectorChartXAxisAutoSizeResults = createSelectorMemoized(
  selectorChartRawXAxis,
  selectorIsHydrated,
  selectorChartXAxisDomainsForAutoSize,
  function selectorChartXAxisAutoSizeResults(xAxes, isHydrated, domainsMap) {
      throw new Error("STUB");
  },
);

/**
 * Selector that computes auto-sizes for X axes that have `height: 'auto'`.
 * Returns a map of axis ID to computed height (just the size, not group tick sizes).
 */
export const selectorChartXAxisAutoSizes = createSelectorMemoized(
  selectorChartXAxisAutoSizeResults,
  function selectorChartXAxisAutoSizes(results) {
      throw new Error("STUB");
  },
);

/**
 * Selector that computes full auto-size results for Y axes that have `width: 'auto'`.
 * Returns a map of axis ID to full result (including group tick sizes for grouped axes).
 */
export const selectorChartYAxisAutoSizeResults = createSelectorMemoized(
  selectorChartRawYAxis,
  selectorIsHydrated,
  selectorChartYAxisDomainsForAutoSize,
  function selectorChartYAxisAutoSizeResults(yAxes, isHydrated, domainsMap) {
      throw new Error("STUB");
  },
);

/**
 * Selector that computes auto-sizes for Y axes that have `width: 'auto'`.
 * Returns a map of axis ID to computed width (just the size, not group tick sizes).
 */
export const selectorChartYAxisAutoSizes = createSelectorMemoized(
  selectorChartYAxisAutoSizeResults,
  function selectorChartYAxisAutoSizes(results) {
      throw new Error("STUB");
  },
);
