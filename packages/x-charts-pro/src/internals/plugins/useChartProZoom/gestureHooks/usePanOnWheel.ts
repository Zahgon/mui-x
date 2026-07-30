'use client';
import * as React from 'react';
import {
  getChartPoint,
  selectorChartDrawingArea,
  selectorChartZoomOptionsLookup,
} from '@mui/x-charts/internals';
import type { ChartPlugin, ZoomData } from '@mui/x-charts/internals';
import { rafThrottle } from '@mui/x-internals/rafThrottle';
import type { UseChartProZoomSignature } from '../useChartProZoom.types';
import { translateZoom } from './useZoom.utils';
import { selectorPanInteractionConfig } from '../ZoomInteractionConfig.selectors';

export const usePanOnWheel = (
  {
    store,
    instance,
  }: Pick<Parameters<ChartPlugin<UseChartProZoomSignature>>[0], 'store' | 'instance'>,
  setZoomDataCallback: React.Dispatch<ZoomData[] | ((prev: ZoomData[]) => ZoomData[])>,
) => {
  const { chartsLayerContainerRef } = instance;
  const drawingArea = store.use(selectorChartDrawingArea);
  const optionsLookup = store.use(selectorChartZoomOptionsLookup);
  const startedOutsideRef = React.useRef(false);
  const startedOutsideTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const config = store.use(selectorPanInteractionConfig, 'wheel' as const);

  const isPanOnWheelEnabled: boolean = Object.keys(optionsLookup).length > 0 && Boolean(config);

  React.useEffect(() => {
      throw new Error("STUB");
  }, [config, isPanOnWheelEnabled, instance]);

  // Add event for chart pan on wheel
  React.useEffect(() => {
      throw new Error("STUB");
  }, [
    chartsLayerContainerRef,
    drawingArea,
    isPanOnWheelEnabled,
    optionsLookup,
    instance,
    setZoomDataCallback,
    store,
    config,
  ]);
};
