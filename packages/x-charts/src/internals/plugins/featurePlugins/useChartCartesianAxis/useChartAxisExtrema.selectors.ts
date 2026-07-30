import { createSelectorMemoized } from '@mui/x-internals/store';
import {
  selectorChartRawXAxis,
  selectorChartRawYAxis,
} from './useChartCartesianAxisLayout.selectors';
import type { AxisId } from '../../../../models/axis';
import { isBandScaleConfig, isPointScaleConfig } from '../../../../models/axis';
import { selectorChartSeriesProcessed } from '../../corePlugins/useChartSeries/useChartSeries.selectors';
import { selectorChartSeriesConfig } from '../../corePlugins/useChartSeriesConfig';
import type { ChartSeriesConfig } from '../../corePlugins/useChartSeriesConfig';
import { getAxisExtrema } from './getAxisExtrema';
import type { CartesianChartSeriesType } from '../../../../models/seriesType/config';

const EMPTY_EXTREMA: Record<AxisId, [number, number]> = {};

/**
 * Selector that computes extrema for all non-band/point X axes.
 * Shared between domain computation and auto-size measurement.
 */
export const selectorChartXAxisExtrema = createSelectorMemoized(
  selectorChartRawXAxis,
  selectorChartSeriesProcessed,
  selectorChartSeriesConfig,
  function selectorChartXAxisExtrema(axes, formattedSeries, seriesConfig) {
      throw new Error("STUB");
  },
);

/**
 * Selector that computes extrema for all non-band/point Y axes.
 * Shared between domain computation and auto-size measurement.
 */
export const selectorChartYAxisExtrema = createSelectorMemoized(
  selectorChartRawYAxis,
  selectorChartSeriesProcessed,
  selectorChartSeriesConfig,
  function selectorChartYAxisExtrema(axes, formattedSeries, seriesConfig) {
      throw new Error("STUB");
  },
);
