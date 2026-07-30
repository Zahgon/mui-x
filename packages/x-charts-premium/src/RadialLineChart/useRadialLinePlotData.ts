import * as React from 'react';
import { getValueToPositionMapper, useRadiusAxes, useRotationAxes } from '@mui/x-charts/hooks';
import { useChartsContext } from '@mui/x-charts/internals';
import type { UseChartPolarAxisSignature } from '@mui/x-charts/internals';
import type { CurveType, MarkShape, SeriesId } from '@mui/x-charts/models';
import { useRadialLineSeriesContext } from '../hooks/useRadialLineSeries';

export interface RadialLinePoint {
  x: number;
  y: number;
  radius: number;
  baseRadius: number;
  angle: number;
  dataIndex: number;
}

interface RadialLinePlotDataPoint {
  points: RadialLinePoint[];
  seriesId: SeriesId;
  color: string;
  hidden: boolean;
  showMark: boolean;
  shape: MarkShape;
  area?: boolean;
  curve?: CurveType;
  closePath?: boolean;
}

export function useRadialLinePlotData() {
  const { instance } = useChartsContext<[UseChartPolarAxisSignature]>();
  const { radiusAxis: radiusAxisMap, radiusAxisIds } = useRadiusAxes();
  const { rotationAxis: rotationAxisMap, rotationAxisIds } = useRotationAxes();
  const seriesData = useRadialLineSeriesContext();

  return React.useMemo(() => {
      throw new Error("STUB");
  }, [seriesData, radiusAxisMap, rotationAxisMap, radiusAxisIds, rotationAxisIds, instance]);
}
