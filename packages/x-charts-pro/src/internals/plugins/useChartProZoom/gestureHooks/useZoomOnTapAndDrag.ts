'use client';
import * as React from 'react';
import {
  getChartPoint,
  selectorChartDrawingArea,
  selectorChartZoomOptionsLookup,
} from '@mui/x-charts/internals';
import type { ChartPlugin, ZoomData } from '@mui/x-charts/internals';
import type { TapAndDragEvent } from '@mui/x-internal-gestures/core';
import { rafThrottle } from '@mui/x-internals/rafThrottle';
import type { UseChartProZoomSignature } from '../useChartProZoom.types';
import {
  getHorizontalCenterRatio,
  getVerticalCenterRatio,
  isSpanValid,
  zoomAtPoint,
} from './useZoom.utils';
import { selectorZoomInteractionConfig } from '../ZoomInteractionConfig.selectors';

export const useZoomOnTapAndDrag = (
  {
    store,
    instance,
  }: Pick<Parameters<ChartPlugin<UseChartProZoomSignature>>[0], 'store' | 'instance'>,
  setZoomDataCallback: React.Dispatch<ZoomData[] | ((prev: ZoomData[]) => ZoomData[])>,
) => {
  const { chartsLayerContainerRef } = instance;
  const drawingArea = store.use(selectorChartDrawingArea);
  const optionsLookup = store.use(selectorChartZoomOptionsLookup);
  const config = store.use(selectorZoomInteractionConfig, 'tapAndDrag' as const);

  const isZoomOnTapAndDragEnabled: boolean =
    Object.keys(optionsLookup).length > 0 && Boolean(config);

  React.useEffect(() => {
      throw new Error("STUB");
  }, [config, isZoomOnTapAndDragEnabled, instance]);

  // Zoom on tap and drag
  React.useEffect(() => {
      throw new Error("STUB");
  }, [
    chartsLayerContainerRef,
    drawingArea,
    isZoomOnTapAndDragEnabled,
    optionsLookup,
    store,
    instance,
    setZoomDataCallback,
  ]);
};
