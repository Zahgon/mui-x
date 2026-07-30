import * as React from 'react';
import { useRadiusAxes, useRotationAxes } from '@mui/x-charts/hooks';
import { findMinMax, getBandSize, useAllSeriesOfType } from '@mui/x-charts/internals';
import type {
  AxisId,
  ChartSeriesDefaultized,
  ComputedAxis,
  ScaleName,
  SeriesProcessorResult,
  StackingGroupsType,
  ChartsRotationAxisProps,
  ChartsRadiusAxisProps,
  ChartsRadialAxisProps,
} from '@mui/x-charts/internals';
import type { SeriesId } from '@mui/x-charts/models';
import getColor from './seriesConfig/getColor';

interface ProcessedRadialBarData {
  seriesId: SeriesId;
  dataIndex: number;
  color: string;
  value: number | null;
  hidden: boolean;
  startAngle: number;
  endAngle: number;
  innerRadius: number;
  outerRadius: number;
}

interface ProcessedRadialBarSeriesData {
  seriesId: SeriesId;
  data: ProcessedRadialBarData[];
  layout: 'vertical' | 'horizontal';
  rotationOrigin: number;
  radiusOrigin: number;
}

export function useRadialBarPlotData(): {
  completedData: ProcessedRadialBarSeriesData[];
} {
  const seriesData =
    useAllSeriesOfType('radialBar') ??
    ({ series: {}, stackingGroups: [], seriesOrder: [] } as SeriesProcessorResult<'radialBar'>);

  const { rotationAxis: rotationAxes, rotationAxisIds } = useRotationAxes();
  const { radiusAxis: radiusAxes, radiusAxisIds } = useRadiusAxes();

  const defaultRotationAxisId = rotationAxisIds[0];
  const defaultRadiusAxisId = radiusAxisIds[0];

  return React.useMemo(
    () =>
      { throw new Error("STUB"); },
    [
      seriesData.stackingGroups,
      seriesData.series,
      rotationAxes,
      radiusAxes,
      defaultRotationAxisId,
      defaultRadiusAxisId,
    ],
  );
}

function processRadialBarDataForPlot(
  stackingGroups: StackingGroupsType,
  series: SeriesProcessorResult<'radialBar'>['series'],
  rotationAxes: Record<AxisId, ComputedAxis<ScaleName, any, ChartsRotationAxisProps>>,
  radiusAxes: Record<AxisId, ComputedAxis<ScaleName, any, ChartsRadiusAxisProps>>,
  defaultRotationAxisId: AxisId,
  defaultRadiusAxisId: AxisId,
) {
  const data: ProcessedRadialBarSeriesData[] = stackingGroups.flatMap(
    ({ ids: seriesIds }, groupIndex) => {
          throw new Error("STUB");
      },
  );

  return {
    completedData: data,
  };
}
