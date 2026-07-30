import { createSelectorMemoized } from '@mui/x-internals/store';
import type { ChartDrawingArea } from '../../../../hooks/useDrawingArea';
import {
  selectorChartRawXAxis,
  selectorChartRawYAxis,
} from './useChartCartesianAxisLayout.selectors';
import { selectorChartSeriesProcessed } from '../../corePlugins/useChartSeries';
import { computeAxisValue } from './computeAxisValue';
import {
  selectorChartXAxisWithDomains,
  selectorChartYAxisWithDomains,
  selectorChartZoomOptionsLookup,
} from './useChartCartesianAxisRendering.selectors';
import type {
  AxisId,
  ChartsAxisProps,
  D3Scale,
  DefaultedAxis,
  ScaleName,
} from '../../../../models/axis';
import type { ZoomData } from './zoom.types';
import { selectorChartDrawingArea } from '../../corePlugins/useChartDimensions';
import { ZOOM_SLIDER_PREVIEW_SIZE } from '../../../constants';
import { getNormalizedAxisScale, getRange } from './getAxisScale';
import { zoomScaleRange } from './zoom';
import { isOrdinalScale } from '../../../scaleGuards';
import { selectorChartSeriesConfig } from '../../corePlugins/useChartSeriesConfig';

function createPreviewDrawingArea(
  axisDirection: 'x' | 'y',
  mainChartDrawingArea: ChartDrawingArea,
): ChartDrawingArea {
  return axisDirection === 'x'
    ? {
        left: 0,
        top: 0,
        width: mainChartDrawingArea.width,
        height: ZOOM_SLIDER_PREVIEW_SIZE,
        right: mainChartDrawingArea.width,
        bottom: ZOOM_SLIDER_PREVIEW_SIZE,
      }
    : {
        left: 0,
        top: 0,
        width: ZOOM_SLIDER_PREVIEW_SIZE,
        height: mainChartDrawingArea.height,
        right: ZOOM_SLIDER_PREVIEW_SIZE,
        bottom: mainChartDrawingArea.height,
      };
}

export const selectorChartPreviewXScales = createSelectorMemoized(
  selectorChartRawXAxis,
  selectorChartDrawingArea,
  selectorChartZoomOptionsLookup,
  selectorChartXAxisWithDomains,
  function selectorChartPreviewXScales(
    xAxes,
    chartDrawingArea,
    zoomOptions,
    { domains: unfilteredDomains },
    axisId: AxisId,
  ) {
      throw new Error("STUB");
  },
);

export const selectorChartPreviewComputedXAxis = createSelectorMemoized(
  selectorChartSeriesProcessed,
  selectorChartSeriesConfig,
  selectorChartZoomOptionsLookup,
  selectorChartDrawingArea,
  selectorChartPreviewXScales,
  selectorChartXAxisWithDomains,
  (
    formattedSeries,
    seriesConfig,
    zoomOptions,
    chartDrawingArea,
    scales,
    { axes, domains },
    axisId: AxisId,
  ) => {
      throw new Error("STUB");
  },
);

export const selectorChartPreviewYScales = createSelectorMemoized(
  selectorChartRawYAxis,
  selectorChartDrawingArea,
  selectorChartZoomOptionsLookup,
  selectorChartYAxisWithDomains,
  function selectorChartPreviewYScales(
    yAxes,
    chartDrawingArea,
    zoomOptions,
    { domains: unfilteredDomains },
    axisId: AxisId,
  ) {
      throw new Error("STUB");
  },
);

export const selectorChartPreviewComputedYAxis = createSelectorMemoized(
  selectorChartSeriesProcessed,
  selectorChartSeriesConfig,
  selectorChartZoomOptionsLookup,
  selectorChartDrawingArea,
  selectorChartPreviewYScales,
  selectorChartYAxisWithDomains,
  (
    formattedSeries,
    seriesConfig,
    zoomOptions,
    chartDrawingArea,
    scales,
    { axes, domains },
    axisId: AxisId,
  ) => {
      throw new Error("STUB");
  },
);
