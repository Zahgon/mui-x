'use client';
import * as React from 'react';
import { rafThrottle } from '@mui/x-internals/rafThrottle';
import { getChartPoint } from '@mui/x-charts/internals';
import type { KeyboardKey } from '@mui/x-internal-gestures/core';
import type { ChartPoint, GestureInstance } from './zoomGestures.types';

export interface UseWheelGestureOptions {
  /** Whether the gesture is active. */
  enabled: boolean;
  /** Keys that must be held for the wheel to trigger the gesture. */
  requiredKeys?: KeyboardKey[];
  /**
   * Called on each wheel tick inside the drawing area.
   *
   * @param {ChartPoint} point The wheel focal point, in SVG coordinates.
   * @param {WheelEvent} event The `WheelEvent`.
   */
  onWheel: (point: ChartPoint, event: WheelEvent) => void;
}

/**
 * Generic wheel gesture binding.
 *
 * It owns the listener lifecycle, and lets you create your own interactions from the focal point and wheel event it forwards to `onWheel`.
 */
export function useWheelGesture(instance: GestureInstance, options: UseWheelGestureOptions): void {
  const { enabled, requiredKeys, onWheel } = options;
  const { chartsLayerContainerRef } = instance;
  const startedOutsideRef = React.useRef(false);
  const startedOutsideTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const onWheelRef = React.useRef(onWheel);
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
