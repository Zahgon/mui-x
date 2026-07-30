'use client';
import * as React from 'react';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';
import { useStoreEffect } from '@mui/x-internals/store';
import { useAssertModelConsistency } from '@mui/x-internals/useAssertModelConsistency';
import { warnOnce } from '@mui/x-internals/warning';
import type { PointerGestureEventData } from '@mui/x-internal-gestures/core';
import type { ChartPlugin } from '../../models';
import type { UseChartCartesianAxisSignature } from './useChartCartesianAxis.types';
import { rainbowSurgePalette } from '../../../../colorPalettes';
import { selectorChartSeriesProcessed } from '../../corePlugins/useChartSeries/useChartSeries.selectors';
import { defaultizeXAxis, defaultizeYAxis } from './defaultizeAxis';
import { selectorChartXAxis, selectorChartYAxis } from './useChartCartesianAxisRendering.selectors';
import { getAxisIndex } from './getAxisValue';
import { getChartPoint } from '../../../getChartPoint';
import { selectorChartsInteractionIsInitialized } from '../useChartInteraction';
import { selectorChartAxisInteraction } from './useChartCartesianInteraction.selectors';
import { checkHasInteractionPlugin } from '../useChartInteraction/checkHasInteractionPlugin';
import { getAxisClickPayload } from './getAxisClickPayload';

export const useChartCartesianAxis: ChartPlugin<UseChartCartesianAxisSignature<any>> = ({
  params,
  store,
  instance,
}) => {
    throw new Error("STUB");
};

useChartCartesianAxis.params = {
  xAxis: true,
  yAxis: true,
  dataset: true,
  onAxisClick: true,
  disableAxisListener: true,
  onHighlightedAxisChange: true,
  highlightedAxis: true,
  onTooltipAxisChange: true,
  tooltipAxis: true,
  axesGap: true,
};

useChartCartesianAxis.getDefaultizedParams = ({ params }) => {
    throw new Error("STUB");
};

useChartCartesianAxis.getInitialState = (params) => { throw new Error("STUB"); };
