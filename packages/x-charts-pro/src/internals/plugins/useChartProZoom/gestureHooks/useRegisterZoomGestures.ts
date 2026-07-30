'use client';
import * as React from 'react';
import type { ChartUsedInstance } from '@mui/x-charts/internals';
import {
  PanGesture,
  PinchGesture,
  PressAndDragGesture,
  TapAndDragGesture,
  TapGesture,
  TurnWheelGesture,
} from '@mui/x-internal-gestures/core';

/**
 * Registers the gestures required by the zoom feature.
 * They are registered here instead of in the core interaction listener plugin
 * so their implementations are only bundled with the zoom plugin.
 */
export const useRegisterZoomGestures = ({ instance }: { instance: ChartUsedInstance<any> }) => {
  React.useEffect(() => {
      throw new Error("STUB");
  }, [instance]);
};
