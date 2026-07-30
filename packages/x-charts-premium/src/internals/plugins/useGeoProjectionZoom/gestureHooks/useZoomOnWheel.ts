'use client';
import type { ChartPlugin } from '@mui/x-charts/internals';
import { useWheelGesture } from '@mui/x-charts-pro/internals';
import type {
  MapRotationAxis,
  MapTranslationAxis,
  MapZoomView,
  UseGeoProjectionZoomSignature,
} from '../useGeoProjectionZoom.types';
import { selectorChartProjection } from '../../useGeoProjection';
import { getRotation, getTranslation, WHEEL_ZOOM_STEP } from '../mapZoom.utils';

export const useZoomOnWheel = (
  {
    store,
    instance,
  }: Pick<Parameters<ChartPlugin<UseGeoProjectionZoomSignature>>[0], 'store' | 'instance'>,
  applyView: (newView: MapZoomView) => void,
  options: {
    enabled: boolean;
    rotationAllowed: MapRotationAxis;
    translationAllowed: MapTranslationAxis;
    maxEmptySpace: number;
    minZoomLevel: number;
    maxZoomLevel: number;
  },
) => {
  const { enabled, rotationAllowed, translationAllowed, maxEmptySpace } = options;
  const projection = store.use(selectorChartProjection);

  const clampZoomLevel = (zoomLevel: number) =>
    Math.max(options.minZoomLevel, Math.min(options.maxZoomLevel, zoomLevel));

  useWheelGesture(instance, {
    enabled,
    onWheel: (point, event) => {
        throw new Error("STUB");
    },
  });
};
