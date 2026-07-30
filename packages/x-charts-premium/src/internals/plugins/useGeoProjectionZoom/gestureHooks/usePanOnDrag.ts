'use client';
import * as React from 'react';
import type { ChartPlugin } from '@mui/x-charts/internals';
import { useDragGesture } from '@mui/x-charts-pro/internals';
import type {
  MapRotationAxis,
  MapTranslationAxis,
  MapZoomView,
  UseGeoProjectionZoomSignature,
} from '../useGeoProjectionZoom.types';
import { selectorChartProjection } from '../../useGeoProjection';
import { getRotation, getTranslation } from '../mapZoom.utils';

export const usePanOnDrag = (
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
  },
) => {
  const { enabled, rotationAllowed, translationAllowed, maxEmptySpace } = options;
  const projection = store.use(selectorChartProjection);

  const geoPoint = React.useRef<[number, number] | null>(null);
  const dragStartPoint = React.useRef<[number, number] | null>(null);
  const dragCurrentPoint = React.useRef<[number, number] | null>(null);

  useDragGesture(instance, {
    enabled,
    onPanStart: (event) => {
        throw new Error("STUB");
    },
    onPanEnd: () => {
        throw new Error("STUB");
    },
    onPan: (delta) => {
        throw new Error("STUB");
    },
  });
};
