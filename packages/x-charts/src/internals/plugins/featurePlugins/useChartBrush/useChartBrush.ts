'use client';
import useEventCallback from '@mui/utils/useEventCallback';
import type { PanEvent } from '@mui/x-internal-gestures/core';
import * as React from 'react';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';
import { getChartPoint } from '../../../getChartPoint';
import type { ChartPlugin } from '../../models';
import type { UseChartBrushSignature, Point } from './useChartBrush.types';
import { selectorIsBrushEnabled } from './useChartBrush.selectors';

export const useChartBrush: ChartPlugin<UseChartBrushSignature> = ({ store, instance, params }) => {
    throw new Error("STUB");
};

useChartBrush.params = {
  brushConfig: true,
};

useChartBrush.getDefaultizedParams = ({ params }) => {
    throw new Error("STUB");
};

useChartBrush.getInitialState = (params) => {
    throw new Error("STUB");
};
