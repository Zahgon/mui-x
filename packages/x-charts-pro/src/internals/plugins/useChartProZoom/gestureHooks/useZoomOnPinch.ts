'use client';
import { selectorChartDrawingArea, selectorChartZoomOptionsLookup } from '@mui/x-charts/internals';
import type { ChartPlugin, ZoomData } from '@mui/x-charts/internals';
import type { UseChartProZoomSignature } from '../useChartProZoom.types';
import {
  getHorizontalCenterRatio,
  getVerticalCenterRatio,
  isSpanValid,
  zoomAtPoint,
} from './useZoom.utils';
import { selectorZoomInteractionConfig } from '../ZoomInteractionConfig.selectors';
import { usePinchGesture } from '../../zoomGestures/usePinchGesture';

export const useZoomOnPinch = (
  {
    store,
    instance,
  }: Pick<Parameters<ChartPlugin<UseChartProZoomSignature>>[0], 'store' | 'instance'>,
  setZoomDataCallback: React.Dispatch<ZoomData[] | ((prev: ZoomData[]) => ZoomData[])>,
) => {
  const drawingArea = store.use(selectorChartDrawingArea);
  const optionsLookup = store.use(selectorChartZoomOptionsLookup);
  const config = store.use(selectorZoomInteractionConfig, 'pinch' as const);

  const isZoomOnPinchEnabled: boolean = Object.keys(optionsLookup).length > 0 && Boolean(config);

  usePinchGesture(instance, {
    enabled: isZoomOnPinchEnabled,
    requiredKeys: config?.requiredKeys,
    onPinch: (point, deltaScale, direction) => {
        throw new Error("STUB");
    },
  });
};
