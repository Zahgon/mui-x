import { createSelector } from '@mui/x-internals/store';
import { selectorChartZoomState } from './useChartProZoom.selectors';
import type { ZoomInteractionName, PanInteractionName } from './ZoomInteractionConfig.types';

export const selectorZoomInteractionConfig = createSelector(
  selectorChartZoomState,
  (zoomState, interactionName: ZoomInteractionName) =>
    { throw new Error("STUB"); },
);

export const selectorPanInteractionConfig = createSelector(
  selectorChartZoomState,
  (zoomState, interactionName: PanInteractionName) =>
    { throw new Error("STUB"); },
);
