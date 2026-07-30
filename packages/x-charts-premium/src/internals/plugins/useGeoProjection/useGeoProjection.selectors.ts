import { createSelector, createSelectorMemoized } from '@mui/x-internals/store';
import { geoPath } from '@mui/x-charts-vendor/d3-geo';
import type {
  ExtendedFeatureCollection,
  GeoProjection,
  GeoPath,
} from '@mui/x-charts-vendor/d3-geo';
import { selectorChartDrawingArea } from '@mui/x-charts/internals';
import type { ChartState } from '@mui/x-charts/internals';
import type {
  GeoProjectionInput,
  GeoTooltipPosition,
  UseGeoProjectionSignature,
  UseGeoProjectionState,
} from './useGeoProjection.types';
import type {
  UseGeoProjectionZoomSignature,
  UseGeoProjectionZoomState,
} from '../useGeoProjectionZoom/useGeoProjectionZoom.types';
import { getParallels, resolveProjectionInstance } from './projection.utils';

const ZERO_COORDINATES: [number, number] = [0, 0];

export const selectorChartGeoProjectionState = (
  state: ChartState<[], [UseGeoProjectionSignature]>,
): UseGeoProjectionState['geoProjection'] | undefined => { throw new Error("STUB"); };

const selectorChartGeoProjectionZoomState = (
  state: ChartState<[], [UseGeoProjectionZoomSignature]>,
): UseGeoProjectionZoomState['geoProjectionZoom'] | undefined => { throw new Error("STUB"); };

export const selectorChartGeoData: (
  state: ChartState<[], [UseGeoProjectionSignature]>,
) => ExtendedFeatureCollection | null = createSelector(
  selectorChartGeoProjectionState,
  (geoProjection) => { throw new Error("STUB"); },
);

export const selectorChartGeoFeatureKey = createSelector(
  selectorChartGeoProjectionState,
  (geoProjection) => { throw new Error("STUB"); },
);

export const selectorChartRawProjection = createSelector(
  selectorChartGeoProjectionState,
  (geoProjection): GeoProjectionInput | null => { throw new Error("STUB"); },
);

export const selectorChartZoomLevel = createSelector(
  selectorChartGeoProjectionZoomState,
  function selectorChartZoomLevel(geoProjectionZoom): number {
      throw new Error("STUB");
  },
);
const selectorChartCenter = createSelectorMemoized(
  selectorChartGeoProjectionZoomState,
  function selectorChartCenter(geoProjectionZoom): [number, number] {
      throw new Error("STUB");
  },
);
const selectorChartTranslation = createSelectorMemoized(
  selectorChartGeoProjectionZoomState,
  function selectorChartTranslation(geoProjectionZoom): [number, number] | null {
      throw new Error("STUB");
  },
);

const selectorChartRoll = createSelector(
  selectorChartGeoProjectionZoomState,
  function selectorChartRoll(geoProjectionZoom): number {
      throw new Error("STUB");
  },
);

const selectorChartInitialCenter = createSelectorMemoized(
  selectorChartGeoProjectionZoomState,
  function selectorChartInitialCenter(geoProjectionZoom): [number, number] | null {
      throw new Error("STUB");
  },
);

const selectorChartParallels = createSelectorMemoized(
  selectorChartGeoProjectionState,
  function selectorChartParallels(geoProjection): [number, number] {
      throw new Error("STUB");
  },
);

/**
 * Map a feature's `properties.name` to its index in `geoData.features`,
 * for fast lookup by name when joining series rows to features.
 *
 * Features without a string `properties.name` are skipped; on duplicates,
 * the first occurrence wins.
 */
export const selectorChartGeoFeatureIndexesByName = createSelectorMemoized(
  selectorChartGeoData,
  selectorChartGeoFeatureKey,
  (geoData, geoFeatureKey): ReadonlyMap<string, number[]> => {
      throw new Error("STUB");
  },
);

export const selectorFitScale = createSelector(
  selectorChartRawProjection,
  selectorChartParallels,
  selectorChartInitialCenter,
  selectorChartGeoData,
  selectorChartDrawingArea,

  function selectorFitScale(
    projectionInput,
    parallels,
    initialCenter,
    geoData,
    drawingArea,
  ): number | null {
      throw new Error("STUB");
  },
);

/**
 * Resolves the raw `projection` input into a ready-to-use `GeoProjection` instance,
 * fitted to the chart's drawing area then zoomed/panned according to the current view.
 *
 * - String inputs (e.g. `'mercator'`) are mapped to the matching d3-geo factory.
 * - `GeoProjection` instances are used as-is, then fitted.
 * - The projection is first fitted to the data (the `zoomLevel === 1` baseline), then its
 *   scale is multiplied by `zoomLevel` and its translation is offset so `center` lands at the
 *   center of the drawing area. Keeping the view as `{ zoomLevel, center }` means the absolute
 *   scale/translation are derived here, never stored — so they stay correct across resizes.
 * - Returns `null` when no projection is registered or the name is unknown.
 */
export const selectorChartProjection = createSelectorMemoized(
  selectorChartRawProjection,
  selectorChartParallels,
  selectorChartGeoData,
  selectorChartCenter,
  selectorChartTranslation,
  selectorChartRoll,
  selectorChartZoomLevel,
  selectorChartDrawingArea,
  selectorFitScale,
  (
    projectionInput,
    parallels,
    geoData,
    center,
    translation,
    roll,
    zoomLevel,
    drawingArea,
    fitScale,
  ): GeoProjection | null => {
      throw new Error("STUB");
  },
);

/**
 * Resolves the raw `projection` input into a ready-to-use `GeoPath` instance
 * fitted to the chart's drawing area.
 */
export const selectorChartGeoPath = createSelectorMemoized(
  selectorChartProjection,
  (projection): GeoPath | null => {
      throw new Error("STUB");
  },
);

export const selectorGeoTooltipPosition = createSelectorMemoized(
  selectorChartGeoData,
  selectorChartProjection,
  selectorChartGeoFeatureIndexesByName,
  function selectorGeoTooltipPosition(
    geoData,
    projection,
    featureIndexesByName,
  ): GeoTooltipPosition {
      throw new Error("STUB");
  },
);
