import { createSelector, createSelectorMemoized } from '@mui/x-internals/store';
import { selectorChartDrawingArea } from '../../corePlugins/useChartDimensions';
import { selectorChartSeriesProcessed } from '../../corePlugins/useChartSeries';
import type { UseChartPolarAxisSignature } from './useChartPolarAxis.types';
import type { ChartState } from '../../models/chart';
import { computeAxisValue } from './computeAxisValue';
import type { ChartDrawingArea } from '../../../../hooks/useDrawingArea';
import { selectorChartSeriesConfig } from '../../corePlugins/useChartSeriesConfig';

export const selectorChartPolarAxisState = (state: ChartState<[], [UseChartPolarAxisSignature]>) =>
  { throw new Error("STUB"); };

export const selectorChartRawRotationAxis = createSelector(
  selectorChartPolarAxisState,
  (axis) => { throw new Error("STUB"); },
);

export const selectorChartRawRadiusAxis = createSelector(
  selectorChartPolarAxisState,
  (axis) => { throw new Error("STUB"); },
);

/**
 * The only interesting selectors that merge axis data and zoom if provided.
 */

export const selectorChartRotationAxis = createSelectorMemoized(
  selectorChartRawRotationAxis,
  selectorChartDrawingArea,
  selectorChartSeriesProcessed,
  selectorChartSeriesConfig,
  (axis, drawingArea, formattedSeries, seriesConfig) =>
    { throw new Error("STUB"); },
);

export const selectorChartRadiusAxis = createSelectorMemoized(
  selectorChartRawRadiusAxis,
  selectorChartDrawingArea,
  selectorChartSeriesProcessed,
  selectorChartSeriesConfig,
  (axis, drawingArea, formattedSeries, seriesConfig) =>
    { throw new Error("STUB"); },
);

export function getDrawingAreaCenter(drawingArea: ChartDrawingArea) {
  return {
    cx: drawingArea.left + drawingArea.width / 2,
    cy: drawingArea.top + drawingArea.height / 2,
  };
}
export const selectorChartPolarCenter = createSelectorMemoized(
  selectorChartDrawingArea,
  getDrawingAreaCenter,
);
