import * as React from 'react';
import { useChartId } from '../hooks/useChartId';
import { getValueToPositionMapper, useLineSeriesContext, useXAxes, useYAxes } from '../hooks';
import { cleanId } from '../internals/cleanId';
import { DEFAULT_X_AXIS_KEY } from '../constants';
import type { SeriesId } from '../models/seriesType/common';
import type {
  ComputedAxisConfig,
  UseChartCartesianAxisSignature,
} from '../internals/plugins/featurePlugins/useChartCartesianAxis';
import type { ChartsXAxisProps, ChartsYAxisProps } from '../models';
import type { AxisId } from '../models/axis';
import getColor from './seriesConfig/getColor';
import { useChartsContext } from '../context/ChartsProvider';
import type { UseChartBrushSignature } from '../internals/plugins/featurePlugins/useChartBrush';

export interface MarkPlotDataPoint {
  x: number;
  y: number;
  index: number;
  color: string;
}

export interface MarkPlotSeriesData {
  seriesId: SeriesId;
  clipId: string;
  shape: 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye';
  xAxisId: AxisId;
  marks: MarkPlotDataPoint[];
  hidden: boolean;
}

export function useMarkPlotData(
  xAxes: ComputedAxisConfig<ChartsXAxisProps>,
  yAxes: ComputedAxisConfig<ChartsYAxisProps>,
) {
  const seriesData = useLineSeriesContext();
  const defaultXAxisId = useXAxes().xAxisIds[0];
  const defaultYAxisId = useYAxes().yAxisIds[0];
  const chartId = useChartId();
  const { instance } = useChartsContext<[UseChartCartesianAxisSignature, UseChartBrushSignature]>();

  const allData = React.useMemo(() => {
      throw new Error("STUB");
  }, [seriesData, defaultXAxisId, defaultYAxisId, chartId, xAxes, yAxes, instance]);

  return allData;
}
