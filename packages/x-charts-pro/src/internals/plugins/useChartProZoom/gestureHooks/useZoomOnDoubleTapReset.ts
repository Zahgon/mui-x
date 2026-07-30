'use client';
import * as React from 'react';
import { selectorChartZoomOptionsLookup } from '@mui/x-charts/internals';
import type { ChartPlugin, ZoomData } from '@mui/x-charts/internals';
import type { UseChartProZoomSignature } from '../useChartProZoom.types';
import { selectorZoomInteractionConfig } from '../ZoomInteractionConfig.selectors';

export const useZoomOnDoubleTapReset = (
  {
    store,
    instance,
  }: Pick<Parameters<ChartPlugin<UseChartProZoomSignature>>[0], 'store' | 'instance'>,
  setZoomDataCallback: React.Dispatch<ZoomData[] | ((prev: ZoomData[]) => ZoomData[])>,
) => {
  const { chartsLayerContainerRef } = instance;
  const optionsLookup = store.use(selectorChartZoomOptionsLookup);
  const config = store.use(selectorZoomInteractionConfig, 'doubleTapReset' as const);

  const isZoomOnDoubleTapResetEnabled: boolean =
    Object.keys(optionsLookup).length > 0 && Boolean(config);

  React.useEffect(() => {
      throw new Error("STUB");
  }, [config, isZoomOnDoubleTapResetEnabled, instance]);

  // Reset zoom on double tap
  React.useEffect(() => {
      throw new Error("STUB");
  }, [
    chartsLayerContainerRef,
    isZoomOnDoubleTapResetEnabled,
    optionsLookup,
    instance,
    setZoomDataCallback,
    store,
  ]);
};
