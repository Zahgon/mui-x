'use client';
import * as React from 'react';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';
import useEventCallback from '@mui/utils/useEventCallback';
import type { PointerGestureEventData } from '@mui/x-internal-gestures/core';
import type { ChartPlugin } from '../../models';
import type { SeriesId } from '../../../../models/seriesType/common';
import type { UseChartClosestPointSignature } from './useChartClosestPoint.types';
import { getChartPoint } from '../../../getChartPoint';
import {
  selectorChartAxisZoomData,
  selectorChartSeriesEmptyFlatbushMap,
  selectorChartSeriesFlatbushMap,
  selectorChartXAxis,
  selectorChartYAxis,
  selectorChartZoomIsInteracting,
} from '../useChartCartesianAxis';
import { selectorChartSeriesProcessed } from '../../corePlugins/useChartSeries/useChartSeries.selectors';
import { findClosestPoints } from './findClosestPoints';

type ClosestPoint = { dataIndex: number; seriesId: SeriesId; edgeDistance: number; radius: number };

/**
 * Return `true` if the candidate point is closer to the pointer than the current closest point.
 * By priority we prefer:
 * 1. points that are under the pointer (negative edge distance) sorted by distance to the center.
 * 2. points that are outside the pointer (positive edge distance) by distance to the edge.
 */
function isCloser(candidatePoint: ClosestPoint, currentClosestPoint: ClosestPoint | undefined) {
  if (currentClosestPoint === undefined) {
    return true;
  }

  if (candidatePoint.edgeDistance <= 0) {
    if (currentClosestPoint.edgeDistance > 0) {
      return true;
    }
    const candidateDistance = candidatePoint.edgeDistance + candidatePoint.radius;
    const currentDistance = currentClosestPoint.edgeDistance + currentClosestPoint.radius;
    return candidateDistance < currentDistance;
  }
  if (currentClosestPoint.edgeDistance <= 0) {
    return false;
  }

  return candidatePoint.edgeDistance < currentClosestPoint.edgeDistance;
}

export const useChartClosestPoint: ChartPlugin<UseChartClosestPointSignature> = ({
  params,
  store,
  instance,
}) => {
    throw new Error("STUB");
};

useChartClosestPoint.getDefaultizedParams = ({ params }) => { throw new Error("STUB"); };

useChartClosestPoint.getInitialState = (params) => { throw new Error("STUB"); };

useChartClosestPoint.params = {
  disableHitArea: true,
  hitAreaRadius: true,
  onItemClick: true,
};
