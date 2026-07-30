'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  getChartPoint,
  invertScale,
  selectorChartAxis,
  selectorChartAxisZoomOptionsLookup,
  useChartsContext,
  useDrawingArea,
  useStore,
} from '@mui/x-charts/internals';
import type { AxisId, ComputedAxis, ZoomData } from '@mui/x-charts/internals';
import { rafThrottle } from '@mui/x-internals/rafThrottle';
import type { ChartDrawingArea } from '@mui/x-charts/hooks';
import { shouldForwardProp } from '@mui/system';
import { selectorChartAxisZoomData } from '../../internals/plugins/useChartProZoom';
import type { UseChartProZoomSignature } from '../../internals/plugins/useChartProZoom';
import { ChartsAxisZoomSliderThumb } from './ChartsAxisZoomSliderThumb';
import { ChartsTooltipZoomSliderValue } from './ChartsTooltipZoomSliderValue';
import { calculateZoomEnd, calculateZoomFromPoint, calculateZoomStart } from './zoom-utils';
import {
  ZOOM_SLIDER_THUMB_HEIGHT,
  ZOOM_SLIDER_THUMB_WIDTH,
  ZOOM_SLIDER_TOUCH_TARGET,
} from './constants';
import { useUtilityClasses } from './chartsAxisZoomSliderTrackClasses';

/**
 * Invisible touch target that is only active on coarse pointer devices (touch).
 * On fine pointer devices (mouse), it disables pointer events so it doesn't
 * interfere with precise interactions on small zoom ranges.
 */
const TouchTarget = styled('rect')({
  '@media (pointer: fine)': {
    pointerEvents: 'none',
  },
});

const ZoomSliderActiveTrackRect = styled('rect', {
  slot: 'internal',
  shouldForwardProp: (prop) => { throw new Error("STUB"); },
})<{ preview: boolean }>(({ theme }) => { throw new Error("STUB"); });

export interface ChartsAxisZoomSliderActiveTrackProps {
  axisId: AxisId;
  axisDirection: 'x' | 'y';
  axisPosition: 'top' | 'bottom' | 'left' | 'right';
  size: number;
  preview: boolean;
  zoomData: ZoomData;
  reverse?: boolean;
  showTooltip: boolean;
  onPointerEnter?: () => void;
  onPointerLeave?: () => void;
  onInteractionStart?: () => void;
  onInteractionEnd?: () => void;
}

export function ChartsAxisZoomSliderActiveTrack({
  axisId,
  axisDirection,
  axisPosition,
  size,
  preview,
  zoomData,
  reverse,
  showTooltip,
  onPointerEnter,
  onPointerLeave,
  onInteractionStart,
  onInteractionEnd,
}: ChartsAxisZoomSliderActiveTrackProps) {
    throw new Error("STUB");
}

/**
 * Returns the text for the tooltips on the thumbs of the zoom slider.
 */
function getZoomSliderTooltipsText(axis: ComputedAxis, drawingArea: ChartDrawingArea) {
    throw new Error("STUB");
}
