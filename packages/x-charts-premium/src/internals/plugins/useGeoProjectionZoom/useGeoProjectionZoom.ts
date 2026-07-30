'use client';
import * as React from 'react';
import { useEffectAfterFirstRender } from '@mui/x-internals/useEffectAfterFirstRender';
import type { ChartPlugin } from '@mui/x-charts/internals';
import { useRegisterZoomGestures } from '@mui/x-charts-pro/internals';
import { selectorChartRawProjection } from '../useGeoProjection/useGeoProjection.selectors';
import type { MapZoomView, UseGeoProjectionZoomSignature } from './useGeoProjectionZoom.types';
import { BUTTON_ZOOM_STEP, getDefaultMapInteraction } from './mapZoom.utils';
import { usePanOnDrag } from './gestureHooks/usePanOnDrag';
import { useZoomOnWheel } from './gestureHooks/useZoomOnWheel';
import { useZoomOnPinch } from './gestureHooks/useZoomOnPinch';
import { getDefaultTranslation } from '../useGeoProjection/projection.utils';

export const useGeoProjectionZoom: ChartPlugin<UseGeoProjectionZoomSignature> = ({
  store,
  instance,
  params,
}) => {
    throw new Error("STUB");
};

useGeoProjectionZoom.params = {
  zoom: true,
  initialView: true,
  view: true,
  onViewChange: true,
};

useGeoProjectionZoom.getDefaultizedParams = ({ params }) => { throw new Error("STUB"); };

useGeoProjectionZoom.getInitialState = (params) => {
    throw new Error("STUB");
};
