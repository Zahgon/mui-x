'use client';
import * as React from 'react';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';
import type { ChartPlugin } from '../../models';
import type { UseChartAnimationSignature } from './useChartAnimation.types';

export const useChartAnimation: ChartPlugin<UseChartAnimationSignature> = ({ params, store }) => {
    throw new Error("STUB");
};

useChartAnimation.params = {
  skipAnimation: true,
};

useChartAnimation.getDefaultizedParams = ({ params }) => { throw new Error("STUB"); };

useChartAnimation.getInitialState = ({ skipAnimation }) => {
    throw new Error("STUB");
};
