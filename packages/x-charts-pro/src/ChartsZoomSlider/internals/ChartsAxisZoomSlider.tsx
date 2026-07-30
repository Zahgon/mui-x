'use client';
import * as React from 'react';
import {
  DEFAULT_ZOOM_SLIDER_SHOW_TOOLTIP,
  selectorChartAxisZoomOptionsLookup,
  useDrawingArea,
  useStore,
  ZOOM_SLIDER_MARGIN,
  ZOOM_SLIDER_PREVIEW_SIZE,
} from '@mui/x-charts/internals';
import type { AxisId, ZoomSliderShowTooltip } from '@mui/x-charts/internals';
import { useChartsLayerContainerRef, useXAxes, useYAxes } from '@mui/x-charts/hooks';
import { ChartsAxisZoomSliderPreview } from './ChartsAxisZoomSliderPreview';
import {
  ZOOM_SLIDER_ACTIVE_TRACK_SIZE,
  ZOOM_SLIDER_SIZE,
  ZOOM_SLIDER_TRACK_SIZE,
} from './constants';
import { selectorChartAxisZoomData } from '../../internals/plugins/useChartProZoom';
import { ChartsAxisZoomSliderTrack } from './ChartsAxisZoomSliderTrack';
import { ChartsAxisZoomSliderActiveTrack } from './ChartsAxisZoomSliderActiveTrack';

interface ChartsZoomSliderProps {
  /**
   * The ID of the axis this overview refers to.
   */
  axisId: AxisId;
  /**
   * The direction of the axis.
   */
  axisDirection: 'x' | 'y';
}

/**
 * Renders the zoom slider for a specific axis.
 * @internal
 */
export function ChartsAxisZoomSlider({ axisDirection, axisId }: ChartsZoomSliderProps) {
    throw new Error("STUB");
}
