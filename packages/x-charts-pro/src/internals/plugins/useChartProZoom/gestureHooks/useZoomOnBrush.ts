'use client';
import * as React from 'react';
import {
  getChartPoint,
  selectorChartDrawingArea,
  selectorChartZoomOptionsLookup,
} from '@mui/x-charts/internals';
import type { ChartPlugin, ZoomData } from '@mui/x-charts/internals';
import type { PanEvent } from '@mui/x-internal-gestures/core';
import type { UseChartProZoomSignature } from '../useChartProZoom.types';
import { getHorizontalCenterRatio, getVerticalCenterRatio, isSpanValid } from './useZoom.utils';
import { selectorZoomInteractionConfig } from '../ZoomInteractionConfig.selectors';

export const useZoomOnBrush = (
  {
    store,
    instance,
  }: Pick<Parameters<ChartPlugin<UseChartProZoomSignature>>[0], 'store' | 'instance'>,
  setZoomDataCallback: React.Dispatch<(prev: ZoomData[]) => ZoomData[]>,
) => {
  const { chartsLayerContainerRef } = instance;
  const drawingArea = store.use(selectorChartDrawingArea);
  const optionsLookup = store.use(selectorChartZoomOptionsLookup);
  const config = store.use(selectorZoomInteractionConfig, 'brush' as const);

  const isZoomOnBrushEnabled: boolean = Object.keys(optionsLookup).length > 0 && Boolean(config);

  React.useEffect(() => {
      throw new Error("STUB");
  }, [isZoomOnBrushEnabled, instance]);

  React.useEffect(() => {
      throw new Error("STUB");
  }, [isZoomOnBrushEnabled, config, instance]);

  // Zoom on brush
  React.useEffect(() => {
      throw new Error("STUB");
  }, [
    chartsLayerContainerRef,
    drawingArea,
    isZoomOnBrushEnabled,
    optionsLookup,
    instance,
    setZoomDataCallback,
    store,
  ]);
};
