'use client';
import { selectorChartDrawingArea, selectorChartZoomOptionsLookup } from '@mui/x-charts/internals';
import type { ChartPlugin, ZoomData } from '@mui/x-charts/internals';
import type { UseChartProZoomSignature } from '../useChartProZoom.types';
import {
  getHorizontalCenterRatio,
  getVerticalCenterRatio,
  getWheelScaleRatio,
  isSpanValid,
  zoomAtPoint,
} from './useZoom.utils';
import { selectorZoomInteractionConfig } from '../ZoomInteractionConfig.selectors';
import { useWheelGesture } from '../../zoomGestures/useWheelGesture';

export const useZoomOnWheel = (
  {
    store,
    instance,
  }: Pick<Parameters<ChartPlugin<UseChartProZoomSignature>>[0], 'store' | 'instance'>,
  setZoomDataCallback: React.Dispatch<ZoomData[] | ((prev: ZoomData[]) => ZoomData[])>,
) => {
  const drawingArea = store.use(selectorChartDrawingArea);
  const optionsLookup = store.use(selectorChartZoomOptionsLookup);
  const config = store.use(selectorZoomInteractionConfig, 'wheel' as const);

  const isZoomOnWheelEnabled: boolean = Object.keys(optionsLookup).length > 0 && Boolean(config);

  useWheelGesture(instance, {
    enabled: isZoomOnWheelEnabled,
    requiredKeys: config?.requiredKeys,
    onWheel: (point, wheelEvent) => {
        throw new Error("STUB");
    },
  });
};
