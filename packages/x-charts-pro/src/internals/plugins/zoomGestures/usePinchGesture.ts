'use client';
import * as React from 'react';
import { getChartPoint } from '@mui/x-charts/internals';
import { rafThrottle } from '@mui/x-internals/rafThrottle';
import type { KeyboardKey } from '@mui/x-internal-gestures/core';
import type { ChartPoint, GestureInstance } from './zoomGestures.types';

export interface UsePinchGestureOptions {
  /** Whether the gesture is active. */
  enabled: boolean;
  /** Keys that must be held for the pinch to trigger the gesture. */
  requiredKeys?: KeyboardKey[];
  /**
   * Called (rAF-throttled) on each pinch update.
   *
   * @param {ChartPoint} point The pinch centroid, in SVG coordinates.
   * @param {number} deltaScale The scale change since the last call.
   * @param {number} direction `> 0` when zooming in, `< 0` when zooming out.
   */
  onPinch: (point: ChartPoint, deltaScale: number, direction: number) => void;
}

/**
 * Generic pinch gesture binding.
 *
 * It owns the listener lifecycle, and lets you create your own interactions from the centroid and scale delta it forwards to `onPinch`.
 */
export function usePinchGesture(instance: GestureInstance, options: UsePinchGestureOptions): void {
  const { enabled, requiredKeys, onPinch } = options;
  const { chartsLayerContainerRef } = instance;
  const onPinchRef = React.useRef(onPinch);
  React.useEffect(() => {
      throw new Error("STUB");
  });

  React.useEffect(() => {
      throw new Error("STUB");
  }, [enabled, requiredKeys, instance]);

  React.useEffect(() => {
      throw new Error("STUB");
  }, [chartsLayerContainerRef, enabled, instance]);
}
