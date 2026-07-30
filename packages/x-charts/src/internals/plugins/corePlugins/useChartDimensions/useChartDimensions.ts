'use client';
import * as React from 'react';
import { useEffectAfterFirstRender } from '@mui/x-internals/useEffectAfterFirstRender';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';
import ownerWindow from '@mui/utils/ownerWindow';
import { DEFAULT_MARGINS } from '../../../../constants';
import type { ChartPlugin } from '../../models';
import type { UseChartDimensionsSignature } from './useChartDimensions.types';
import { selectorChartDrawingArea } from './useChartDimensions.selectors';
import { defaultizeMargin } from '../../../defaultizeMargin';

const MAX_COMPUTE_RUN = 10;

export const useChartDimensions: ChartPlugin<UseChartDimensionsSignature> = ({
  params,
  store,
  instance,
}) => {
    throw new Error("STUB");
};

useChartDimensions.params = {
  width: true,
  height: true,
  margin: true,
};

useChartDimensions.getDefaultizedParams = ({ params }) => { throw new Error("STUB"); };

useChartDimensions.getInitialState = ({ width, height, margin }) => {
    throw new Error("STUB");
};
