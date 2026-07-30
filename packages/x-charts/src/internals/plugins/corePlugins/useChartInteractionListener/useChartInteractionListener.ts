'use client';
import * as React from 'react';
import {
  GestureManager,
  MoveGesture,
  PanGesture,
  PressGesture,
  TapGesture,
} from '@mui/x-internal-gestures/core';
import type {
  PinchGesture,
  PressAndDragGesture,
  TapAndDragGesture,
  TurnWheelGesture,
} from '@mui/x-internal-gestures/core';
import type { ChartPlugin } from '../../models';
import type {
  RegisterGestures,
  UseChartInteractionListenerSignature,
  AddInteractionListener,
  UpdateZoomInteractionListeners,
} from './useChartInteractionListener.types';

const preventDefault = (event: Event) => event.preventDefault();

type GestureManagerTyped = GestureManager<
  string,
  | PanGesture<'pan'>
  | MoveGesture<'move'>
  | PanGesture<'zoomPan'>
  | PinchGesture<'zoomPinch'>
  | TurnWheelGesture<'zoomTurnWheel'>
  | TurnWheelGesture<'panTurnWheel'>
  | TapGesture<'tap'>
  | PressGesture<'quickPress'>
  | TapAndDragGesture<'zoomTapAndDrag'>
  | PressAndDragGesture<'zoomPressAndDrag'>
  | TapGesture<'zoomDoubleTapReset'>
  | PanGesture<'brush'>
>;

export const useChartInteractionListener: ChartPlugin<UseChartInteractionListenerSignature> = ({
  instance,
}) => {
    throw new Error("STUB");
};

useChartInteractionListener.params = {};

useChartInteractionListener.getInitialState = () => {
    throw new Error("STUB");
};
