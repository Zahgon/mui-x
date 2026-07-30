import { createSelector } from '@mui/x-internals/store';
import { selectorChartXAxis, selectorChartYAxis } from './useChartCartesianAxisRendering.selectors';
import { selectorChartSeriesProcessed } from '../../corePlugins/useChartSeries';
import { getBandSize } from '../../../../internals/getBandSize';
import { isBandScale } from '../../../../internals/scaleGuards';
import { getDataIndexForOrdinalScaleValue } from '../../../../internals/invertScale';
import type {
  ChartsRadialAxisProps,
  ChartsCartesianAxisProps,
  ComputedAxis,
} from '../../../../models/axis';
import type { ScaleName, BarItemIdentifier, SeriesId } from '../../../../models';

export function getBandIndex(
  bandAxis: ComputedAxis<ScaleName, any, ChartsCartesianAxisProps | ChartsRadialAxisProps>,
  stackConfig: { groupNumber: number; groupIndex: number },
  coordinate: number,
): number {
  if (!isBandScale(bandAxis.scale)) {
    return -1;
  }
  const dataIndex = getDataIndexForOrdinalScaleValue(bandAxis.scale, coordinate);

  const { barWidth, offset } = getBandSize(
    bandAxis.scale.bandwidth(),
    stackConfig.groupNumber,
    (bandAxis as ComputedAxis<'band', any, ChartsCartesianAxisProps | ChartsRadialAxisProps>)
      .barGapRatio,
  );

  const barOffset = stackConfig.groupIndex * (barWidth + offset);
  const bandValue = bandAxis.data?.[dataIndex];

  if (bandValue == null) {
    return -1;
  }

  const bandStart = bandAxis.scale(bandValue);

  if (bandStart == null) {
    return -1;
  }

  const bandBarStart = bandStart + barOffset;
  const bandBarEnd = bandBarStart + barWidth;
  const bandBarMin = Math.min(bandBarStart, bandBarEnd);
  const bandBarMax = Math.max(bandBarStart, bandBarEnd);

  if (coordinate >= bandBarMin && coordinate <= bandBarMax) {
    return dataIndex;
  }
  return -1;
}

export const selectorBarItemAtPosition = createSelector(
  selectorChartXAxis,
  selectorChartYAxis,
  selectorChartSeriesProcessed,
  function selectorBarItemAtPosition(
    { axis: xAxes, axisIds: xAxisIds },
    { axis: yAxes, axisIds: yAxisIds },
    processedSeries,
    svgPoint: Pick<DOMPoint, 'x' | 'y'>,
  ): BarItemIdentifier | undefined {
      throw new Error("STUB");
  },
);
