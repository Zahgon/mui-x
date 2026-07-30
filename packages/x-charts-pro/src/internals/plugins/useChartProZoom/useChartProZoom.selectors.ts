import { createSelector } from '@mui/x-internals/store';
import { selectorChartZoomMap, selectorChartZoomOptionsLookup } from '@mui/x-charts/internals';
import type { AxisId, ChartRootSelector } from '@mui/x-charts/internals';
import type { UseChartProZoomSignature } from './useChartProZoom.types';

export const selectorChartZoomState: ChartRootSelector<UseChartProZoomSignature, 'zoom'> = (
  state,
) => { throw new Error("STUB"); };

export const selectorChartZoomIsInteracting = createSelector(
  selectorChartZoomState,
  (zoom) => { throw new Error("STUB"); },
);

export const selectorChartZoomIsEnabled = createSelector(
  selectorChartZoomOptionsLookup,
  (optionsLookup) => { throw new Error("STUB"); },
);

export const selectorChartAxisZoomData = createSelector(
  selectorChartZoomMap,
  (zoomMap, axisId: AxisId) => { throw new Error("STUB"); },
);

export const selectorChartCanZoomOut = createSelector(
  selectorChartZoomState,
  selectorChartZoomOptionsLookup,
  (zoomState, zoomOptions) => {
      throw new Error("STUB");
  },
);

export const selectorChartCanZoomIn = createSelector(
  selectorChartZoomState,
  selectorChartZoomOptionsLookup,
  (zoomState, zoomOptions) => {
      throw new Error("STUB");
  },
);
