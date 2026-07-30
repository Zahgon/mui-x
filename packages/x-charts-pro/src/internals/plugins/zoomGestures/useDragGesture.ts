'use client';
import * as React from 'react';
import { rafThrottle } from '@mui/x-internals/rafThrottle';
import type { PanEvent } from '@mui/x-internal-gestures/core';
import type { ChartPoint, GestureInstance, PanGestureConfig } from './zoomGestures.types';

export interface UseDragGestureOptions {
  /** Whether the gesture is active. */
  enabled: boolean;
  /** Pointer and keyboard gating for the gesture. */
  config?: PanGestureConfig;
  /**
   * Called when the drag starts.
   * @param {PanEvent} event The pan start event.
   */
  onPanStart?: (event: PanEvent) => void;
  /**
   * Called (rAF-throttled) on each drag update.
   * @param {ChartPoint} delta The pixel delta since the last call.
   * @param {PanEvent} event The pan event.
   */
  onPan: (delta: ChartPoint, event: PanEvent) => void;
  /**
   * Called when the drag ends.
   * @param {PanEvent} event The pan end event.
   */
  onPanEnd?: (event: PanEvent) => void;
}

/**
 * Generic drag-to-pan gesture binding.
 *
 * It owns the listener lifecycle, and lets you create your own interactions by providing the delta change of the interaction.
 */
export function useDragGesture(instance: GestureInstance, options: UseDragGestureOptions): void {
  const { enabled, config, onPanStart, onPan, onPanEnd } = options;
  const { chartsLayerContainerRef } = instance;

  // Keep the latest handlers in a ref so changing them doesn't rebind listeners.
  const handlersRef = React.useRef({ onPanStart, onPan, onPanEnd });
  React.useEffect(() => {
      throw new Error("STUB");
  });

  React.useEffect(() => {
      throw new Error("STUB");
  }, [enabled, config, instance]);

  React.useEffect(() => {
      throw new Error("STUB");
  }, [instance, chartsLayerContainerRef, enabled]);
}
