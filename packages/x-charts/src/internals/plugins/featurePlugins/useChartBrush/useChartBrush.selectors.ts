import { createSelector, createSelectorMemoized } from '@mui/x-internals/store';
import type { ChartOptionalRootSelector } from '../../utils/selectors';
import { selectorChartZoomOptionsLookup } from '../useChartCartesianAxis/useChartCartesianAxisRendering.selectors';
import type { UseChartBrushSignature } from './useChartBrush.types';
import { selectorChartSeriesProcessed } from '../../corePlugins/useChartSeries';

export const selectorBrush: ChartOptionalRootSelector<UseChartBrushSignature> = (state) =>
  { throw new Error("STUB"); };

export const selectorBrushStart = createSelector(selectorBrush, (brush) => { throw new Error("STUB"); });

export const selectorBrushCurrent = createSelector(selectorBrush, (brush) => { throw new Error("STUB"); });

export const selectorBrushStartX = createSelector(
  selectorBrush,
  (brush) => { throw new Error("STUB"); },
);

export const selectorBrushStartY = createSelector(
  selectorBrush,
  (brush) => { throw new Error("STUB"); },
);

export const selectorBrushCurrentX = createSelector(
  selectorBrush,
  (brush) => { throw new Error("STUB"); },
);

export const selectorBrushCurrentY = createSelector(
  selectorBrush,
  (brush) => { throw new Error("STUB"); },
);

export const selectorBrushState = createSelectorMemoized(
  selectorBrushStartX,
  selectorBrushStartY,
  selectorBrushCurrentX,
  selectorBrushCurrentY,
  (startX, startY, currentX, currentY) => {
      throw new Error("STUB");
  },
);

export const selectorBrushConfigNoZoom = createSelector(selectorChartSeriesProcessed, (series) => {
    throw new Error("STUB");
});

export const selectorBrushConfigZoom = createSelector(
  selectorChartZoomOptionsLookup,
  function selectorBrushConfigZoom(optionsLookup) {
      throw new Error("STUB");
  },
);

export const selectorBrushConfig = createSelector(
  selectorBrushConfigNoZoom,
  selectorBrushConfigZoom,
  (configNoZoom, configZoom) => { throw new Error("STUB"); },
);

export const selectorIsBrushEnabled = createSelector(
  selectorBrush,
  (brush) => { throw new Error("STUB"); },
);

export const selectorIsBrushSelectionActive = createSelector(
  selectorIsBrushEnabled,
  selectorBrush,
  (isBrushEnabled, brush) => {
      throw new Error("STUB");
  },
);

export const selectorBrushShouldPreventAxisHighlight = createSelector(
  selectorBrush,
  selectorIsBrushSelectionActive,
  (brush, isBrushSelectionActive) => { throw new Error("STUB"); },
);

export const selectorBrushShouldPreventTooltip = createSelector(
  selectorBrush,
  selectorIsBrushSelectionActive,
  (brush, isBrushSelectionActive) => { throw new Error("STUB"); },
);
