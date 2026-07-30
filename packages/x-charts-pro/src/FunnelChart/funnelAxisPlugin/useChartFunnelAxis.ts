'use client';
import * as React from 'react';
import { warnOnce } from '@mui/x-internals/warning';
import {
  getChartPoint,
  getCartesianAxisIndex,
  selectorChartDrawingArea,
  selectorChartSeriesProcessed,
  selectorChartsInteractionIsInitialized,
  defaultizeXAxis,
  defaultizeYAxis,
} from '@mui/x-charts/internals';
import type { ChartPlugin } from '@mui/x-charts/internals';
import type { PointerGestureEventData } from '@mui/x-internal-gestures/core';
import type { UseChartFunnelAxisSignature } from './useChartFunnelAxis.types';
import { selectorChartXAxis, selectorChartYAxis } from './useChartFunnelAxisRendering.selectors';

export const useChartFunnelAxis: ChartPlugin<UseChartFunnelAxisSignature> = ({
  params,
  store,
  instance,
}) => {
    throw new Error("STUB");
};

useChartFunnelAxis.params = {
  xAxis: true,
  yAxis: true,
  gap: true,
  dataset: true,
  onAxisClick: true,
  disableAxisListener: true,
};

useChartFunnelAxis.getDefaultizedParams = ({ params }) => {
    throw new Error("STUB");
};

useChartFunnelAxis.getInitialState = (params) => {
    throw new Error("STUB");
};
