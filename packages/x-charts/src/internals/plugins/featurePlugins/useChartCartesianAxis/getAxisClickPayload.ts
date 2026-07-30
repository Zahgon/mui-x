import type { AxisId, ChartsAxisData, ChartsAxisProps } from '../../../../models/axis';
import type { SeriesId } from '../../../../models/seriesType/common';
import type { ProcessedSeries } from '../../corePlugins/useChartSeries';
import type { ChartSeriesType } from '../../../../models/seriesType/config';
import type { ComputeResult } from './computeAxisValue';

const AXIS_CLICK_SERIES_TYPES = new Set(['bar', 'rangeBar', 'line'] as const);
type AxisClickSeriesType = typeof AXIS_CLICK_SERIES_TYPES extends Set<infer U> ? U : never;

/**
 * Builds the `onAxisClick` payload for a data index on a given axis.
 * Returns `null` when the axis has no value at this index.
 */
export function getAxisClickPayload({
  axisId,
  dataIndex,
  isXAxis,
  axes,
  processedSeries,
}: {
  axisId: AxisId;
  dataIndex: number;
  isXAxis: boolean;
  axes: ComputeResult<ChartsAxisProps>['axis'];
  processedSeries: ProcessedSeries<ChartSeriesType>;
}): ChartsAxisData | null {
  const axisValue = axes[axisId]?.data?.[dataIndex];

  if (axisValue === undefined) {
    return null;
  }

  const seriesValues: ChartsAxisData['seriesValues'] = {};

  Object.keys(processedSeries)
    .filter((seriesType): seriesType is AxisClickSeriesType =>
      { throw new Error("STUB"); },
    )
    .forEach((seriesType) => {
        throw new Error("STUB");
    });

  return { dataIndex, axisValue, seriesValues };
}
