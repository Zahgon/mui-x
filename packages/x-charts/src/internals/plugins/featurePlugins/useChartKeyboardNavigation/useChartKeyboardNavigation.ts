'use client';
import * as React from 'react';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';
import { selectorChartDefaultizedSeries } from '../../corePlugins/useChartSeries/useChartSeries.selectors';
import { selectorChartSeriesConfig } from '../../corePlugins/useChartSeriesConfig';
import type { ChartPlugin } from '../../models';
import type { UseChartKeyboardNavigationSignature } from './useChartKeyboardNavigation.types';
import type { ChartSeriesType } from '../../../../models/seriesType/config';
import type { FocusedItemUpdater } from './keyboardFocusHandler.types';

export const useChartKeyboardNavigation: ChartPlugin<UseChartKeyboardNavigationSignature> = ({
  params,
  store,
  instance,
}) => {
    throw new Error("STUB");
};

useChartKeyboardNavigation.getInitialState = (params) => { throw new Error("STUB"); };

useChartKeyboardNavigation.params = {
  disableKeyboardNavigation: true,
};
