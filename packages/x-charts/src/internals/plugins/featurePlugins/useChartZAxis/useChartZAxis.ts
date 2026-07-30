'use client';
import * as React from 'react';
import type { MakeOptional } from '@mui/x-internals/types';
import type { ChartPlugin } from '../../models';
import type { DatasetType } from '../../../../models/seriesType/config';
import type { UseChartZAxisSignature } from './useChartZAxis.types';
import type { ZAxisConfig, ZAxisDefaultized } from '../../../../models/z-axis';
import { getColorScale, getOrdinalColorScale } from '../../../colorScale';
import { getSizeScale, getOrdinalSizeScale } from '../../../sizeScale';

function addDefaultId(axisConfig: MakeOptional<ZAxisConfig, 'id'>, defaultId: string): ZAxisConfig {
  if (axisConfig.id !== undefined) {
    return axisConfig as ZAxisConfig;
  }
  return {
    id: defaultId,
    ...axisConfig,
  };
}

function processColorMap(axisConfig: ZAxisConfig) {
  if (!axisConfig.colorMap) {
    return axisConfig;
  }

  return {
    ...axisConfig,
    colorScale:
      axisConfig.colorMap.type === 'ordinal' && axisConfig.data
        ? getOrdinalColorScale({ values: axisConfig.data, ...axisConfig.colorMap })
        : getColorScale(
            axisConfig.colorMap.type === 'continuous'
              ? { min: axisConfig.min, max: axisConfig.max, ...axisConfig.colorMap }
              : axisConfig.colorMap,
          ),
  };
}

function processSizeMap(axisConfig: ZAxisConfig) {
  if (!axisConfig.sizeMap) {
    return axisConfig;
  }

  return {
    ...axisConfig,
    sizeScale:
      axisConfig.sizeMap.type === 'ordinal'
        ? getOrdinalSizeScale({ values: axisConfig.data, ...axisConfig.sizeMap })
        : getSizeScale(
            axisConfig.sizeMap.type === 'continuous'
              ? { min: axisConfig.min, max: axisConfig.max, ...axisConfig.sizeMap }
              : axisConfig.sizeMap,
          ),
  };
}

function getZAxisState(
  zAxis?: readonly MakeOptional<ZAxisConfig, 'id'>[],
  dataset?: Readonly<DatasetType>,
) {
  if (!zAxis || zAxis.length === 0) {
    return { axis: {}, axisIds: [] };
  }

  const zAxisLookup: Record<string, ZAxisDefaultized> = {};
  const axisIds: string[] = [];

  zAxis.forEach((axisConfig, index) => {
      throw new Error("STUB");
  });

  return { axis: zAxisLookup, axisIds };
}

export const useChartZAxis: ChartPlugin<UseChartZAxisSignature> = ({ params, store }) => {
    throw new Error("STUB");
};

useChartZAxis.params = {
  zAxis: true,
  dataset: true,
};

useChartZAxis.getInitialState = (params) => { throw new Error("STUB"); };
