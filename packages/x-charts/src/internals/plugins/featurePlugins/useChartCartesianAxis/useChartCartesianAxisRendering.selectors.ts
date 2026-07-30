import type { NumberValue } from '@mui/x-charts-vendor/d3-scale';
import { createSelector, createSelectorMemoized } from '@mui/x-internals/store';
import { selectorChartDrawingArea } from '../../corePlugins/useChartDimensions';
import { selectorChartSeriesProcessed } from '../../corePlugins/useChartSeries';
import { computeAxisValue } from './computeAxisValue';
import type { ExtremumFilter, UseChartCartesianAxisSignature } from './useChartCartesianAxis.types';
import type { ChartState } from '../../models/chart';
import {
  createContinuousScaleGetAxisFilter,
  createDiscreteScaleGetAxisFilter,
  createGetAxisFilters,
} from './createAxisFilterMapper';
import type { ZoomData } from './zoom.types';
import { createZoomLookup } from './createZoomLookup';
import { isBandScaleConfig, isPointScaleConfig } from '../../../../models/axis';
import type {
  AxisId,
  ChartsAxisProps,
  ContinuousScaleName,
  D3Scale,
  DefaultedAxis,
  ScaleName,
} from '../../../../models/axis';
import {
  selectorChartRawXAxis,
  selectorChartRawYAxis,
  selectorChartCartesianAxesGap,
} from './useChartCartesianAxisLayout.selectors';
import {
  selectorChartXAxisAutoSizes,
  selectorChartYAxisAutoSizes,
} from './useChartAxisAutoSize.selectors';
import { getDefaultTickNumber } from '../../../ticks';
import { getNormalizedAxisScale, getRange } from './getAxisScale';
import { isOrdinalScale } from '../../../scaleGuards';
import { zoomScaleRange } from './zoom';
import { getAxisExtrema } from './getAxisExtrema';
import type { CartesianChartSeriesType } from '../../../../models/seriesType/config';
import { calculateFinalDomain, computeAxisDomainsMap } from './domain';
import type { SeriesId } from '../../../../models/seriesType/common';
import { Flatbush } from '../../../Flatbush';
import { selectorChartSeriesConfig } from '../../corePlugins/useChartSeriesConfig';
import type { ChartSeriesConfig } from '../../corePlugins/useChartSeriesConfig';
import {
  selectorChartXAxisExtrema,
  selectorChartYAxisExtrema,
} from './useChartAxisExtrema.selectors';
import { selectorChartZAxis } from '../useChartZAxis';
import getMarkerSize from '../../../../ScatterChart/seriesConfig/getMarkerSize';
import type { ScatterSizeGetter } from '../../../../ScatterChart/seriesConfig/getMarkerSize';

export const createZoomMap = (zoom: readonly ZoomData[]) => {
  const zoomItemMap = new Map<AxisId, ZoomData>();
  zoom.forEach((zoomItem) => {
      throw new Error("STUB");
  });
  return zoomItemMap;
};

const selectorChartZoomState = (state: ChartState<[], [UseChartCartesianAxisSignature]>) =>
  { throw new Error("STUB"); };

/**
 * Following selectors are not exported because they exist in the MIT chart only to ba able to reuse the Zoom state from the pro.
 */

export const selectorChartZoomIsInteracting = createSelector(
  selectorChartZoomState,
  (zoom) => { throw new Error("STUB"); },
);

export const selectorChartZoomMap = createSelectorMemoized(
  selectorChartZoomState,
  function selectorChartZoomMap(zoom) {
      throw new Error("STUB");
  },
);

export const selectorChartAxisZoomData = createSelector(
  selectorChartZoomMap,
  (zoomMap, axisId: AxisId) => { throw new Error("STUB"); },
);

export const selectorChartZoomOptionsLookup = createSelectorMemoized(
  selectorChartRawXAxis,
  selectorChartRawYAxis,
  function selectorChartZoomOptionsLookup(xAxis, yAxis) {
      throw new Error("STUB");
  },
);

export const selectorChartAxisZoomOptionsLookup = createSelector(
  selectorChartZoomOptionsLookup,
  (axisLookup, axisId: AxisId) => { throw new Error("STUB"); },
);

export const selectorDefaultXAxisTickNumber = createSelector(
  selectorChartDrawingArea,
  function selectorDefaultXAxisTickNumber(drawingArea) {
      throw new Error("STUB");
  },
);

export const selectorDefaultYAxisTickNumber = createSelector(
  selectorChartDrawingArea,
  function selectorDefaultYAxisTickNumber(drawingArea) {
      throw new Error("STUB");
  },
);

export const selectorChartXAxisWithDomains = createSelectorMemoized(
  selectorChartRawXAxis,
  selectorChartSeriesProcessed,
  selectorDefaultXAxisTickNumber,
  selectorChartXAxisExtrema,
  function selectorChartXAxisWithDomains(axes, formattedSeries, defaultTickNumber, extremaMap) {
      throw new Error("STUB");
  },
);

export const selectorChartYAxisWithDomains = createSelectorMemoized(
  selectorChartRawYAxis,
  selectorChartSeriesProcessed,
  selectorDefaultYAxisTickNumber,
  selectorChartYAxisExtrema,
  function selectorChartYAxisWithDomains(axes, formattedSeries, defaultTickNumber, extremaMap) {
      throw new Error("STUB");
  },
);

export const selectorChartZoomAxisFilters = createSelectorMemoized(
  selectorChartZoomMap,
  selectorChartZoomOptionsLookup,
  selectorChartXAxisWithDomains,
  selectorChartYAxisWithDomains,

  function selectorChartZoomAxisFilters(
    zoomMap,
    zoomOptions,
    { axes: xAxis, domains: xDomains },
    { axes: yAxis, domains: yDomains },
  ) {
      throw new Error("STUB");
  },
);

export const selectorChartFilteredXDomains = createSelectorMemoized(
  selectorChartSeriesProcessed,
  selectorChartSeriesConfig,
  selectorChartZoomMap,
  selectorChartZoomOptionsLookup,
  selectorChartZoomAxisFilters,
  selectorChartXAxisWithDomains,

  function selectorChartFilteredXDomains(
    formattedSeries,
    seriesConfig,
    zoomMap,
    zoomOptions,
    getFilters,
    { axes, domains },
  ) {
      throw new Error("STUB");
  },
);

export const selectorChartFilteredYDomains = createSelectorMemoized(
  selectorChartSeriesProcessed,
  selectorChartSeriesConfig,
  selectorChartZoomMap,
  selectorChartZoomOptionsLookup,
  selectorChartZoomAxisFilters,
  selectorChartYAxisWithDomains,
  function selectorChartFilteredYDomains(
    formattedSeries,
    seriesConfig,
    zoomMap,
    zoomOptions,
    getFilters,
    { axes, domains },
  ) {
      throw new Error("STUB");
  },
);

export const selectorChartNormalizedXScales = createSelectorMemoized(
  selectorChartRawXAxis,
  selectorChartFilteredXDomains,
  function selectorChartNormalizedXScales(axes, filteredDomains) {
      throw new Error("STUB");
  },
);

export const selectorChartNormalizedYScales = createSelectorMemoized(
  selectorChartRawYAxis,
  selectorChartFilteredYDomains,
  function selectorChartNormalizedYScales(axes, filteredDomains) {
      throw new Error("STUB");
  },
);

export const selectorChartXScales = createSelectorMemoized(
  selectorChartRawXAxis,
  selectorChartNormalizedXScales,
  selectorChartDrawingArea,
  selectorChartZoomMap,
  function selectorChartXScales(axes, normalizedScales, drawingArea, zoomMap) {
      throw new Error("STUB");
  },
);

export const selectorChartYScales = createSelectorMemoized(
  selectorChartRawYAxis,
  selectorChartNormalizedYScales,
  selectorChartDrawingArea,
  selectorChartZoomMap,
  function selectorChartYScales(axes, normalizedScales, drawingArea, zoomMap) {
      throw new Error("STUB");
  },
);

/**
 * The only interesting selectors that merge axis data and zoom if provided.
 */

export const selectorChartXAxis = createSelectorMemoized(
  selectorChartDrawingArea,
  selectorChartSeriesProcessed,
  selectorChartSeriesConfig,
  selectorChartZoomMap,
  selectorChartXAxisWithDomains,
  selectorChartXScales,
  selectorChartXAxisAutoSizes,
  selectorChartCartesianAxesGap,

  function selectorChartXAxis(
    drawingArea,
    formattedSeries,
    seriesConfig,
    zoomMap,
    { axes, domains },
    scales,
    autoSizes,
    axesGap,
  ) {
      throw new Error("STUB");
  },
);

export const selectorChartYAxis = createSelectorMemoized(
  selectorChartDrawingArea,
  selectorChartSeriesProcessed,
  selectorChartSeriesConfig,
  selectorChartZoomMap,
  selectorChartYAxisWithDomains,
  selectorChartYScales,
  selectorChartYAxisAutoSizes,
  selectorChartCartesianAxesGap,

  function selectorChartYAxis(
    drawingArea,
    formattedSeries,
    seriesConfig,
    zoomMap,
    { axes, domains },
    scales,
    autoSizes,
    axesGap,
  ) {
      throw new Error("STUB");
  },
);

export const selectorChartAxis = createSelector(
  selectorChartXAxis,
  selectorChartYAxis,
  (xAxes, yAxes, axisId: AxisId) => { throw new Error("STUB"); },
);

export const selectorChartRawAxis = createSelector(
  selectorChartRawXAxis,
  selectorChartRawYAxis,
  (xAxes, yAxes, axisId: AxisId) => {
      throw new Error("STUB");
  },
);

export const selectorChartDefaultXAxisId = createSelector(
  selectorChartRawXAxis,
  (xAxes) => { throw new Error("STUB"); },
);

export const selectorChartDefaultYAxisId = createSelector(
  selectorChartRawYAxis,
  (yAxes) => { throw new Error("STUB"); },
);

export type ScatterFlatbushEntry = {
  flatbush: Flatbush;
  /** Per-point marker radius, in pixels. */
  getItemRadius: number | ((dataIndex: number) => number);
  /** Largest radius across all points in this series, in pixels. */
  maxItemRadius: number;
};

const EMPTY_MAP = new Map<SeriesId, ScatterFlatbushEntry>();
export const selectorChartSeriesEmptyFlatbushMap = () => { throw new Error("STUB"); };

export const selectorChartSeriesFlatbushMap = createSelectorMemoized(
  selectorChartSeriesProcessed,
  selectorChartNormalizedXScales,
  selectorChartNormalizedYScales,
  selectorChartDefaultXAxisId,
  selectorChartDefaultYAxisId,
  selectorChartZAxis,
  function selectChartSeriesFlatbushMap(
    allSeries,
    xAxesScaleMap,
    yAxesScaleMap,
    defaultXAxisId,
    defaultYAxisId,
    zAxisState,
  ) {
      throw new Error("STUB");
  },
);
