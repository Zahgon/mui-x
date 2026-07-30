'use client';
import * as React from 'react';
import { warnOnce } from '@mui/x-internals/warning';
import type { PointerGestureEventData } from '@mui/x-internal-gestures/core';
import type { ChartPlugin } from '../../models';
import type { UseChartPolarAxisSignature } from './useChartPolarAxis.types';
import { selectorChartDrawingArea } from '../../corePlugins/useChartDimensions/useChartDimensions.selectors';
import { defaultizeAxis } from './defaultizeAxis';
import { selectorChartsInteractionIsInitialized } from '../useChartInteraction';
import {
  selectorChartPolarCenter,
  selectorChartRadiusAxis,
  selectorChartRotationAxis,
} from './useChartPolarAxis.selectors';
import { getChartPoint } from '../../../getChartPoint';
import {
  generatePolar2svg,
  generateSvg2polar,
  generateSvg2radius,
  generateSvg2rotation,
} from './coordinateTransformation';
import { getRadiusAxisIndex, getRotationAxisIndex } from './getAxisIndex';
import { selectorChartSeriesProcessed } from '../../corePlugins/useChartSeries';
import { checkHasInteractionPlugin } from '../useChartInteraction/checkHasInteractionPlugin';
import { getPolarAxisClickPayload } from './getPolarAxisClickPayload';

export const useChartPolarAxis: ChartPlugin<UseChartPolarAxisSignature<any>> = ({
  params,
  store,
  instance,
}) => {
    throw new Error("STUB");
};

useChartPolarAxis.params = {
  rotationAxis: true,
  radiusAxis: true,
  dataset: true,
  disableAxisListener: true,
  onAxisClick: true,
};

useChartPolarAxis.getInitialState = (params) => { throw new Error("STUB"); };
