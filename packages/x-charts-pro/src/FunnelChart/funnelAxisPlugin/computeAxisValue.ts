import type { ChartsAxisProps } from '@mui/x-charts/ChartsAxis';
import type { ChartDrawingArea } from '@mui/x-charts/hooks';
import {
  getAxisExtrema,
  isBandScaleConfig,
  isPointScaleConfig,
  isContinuousScaleConfig,
  getScale,
  getColorScale,
  getOrdinalColorScale,
  getTickNumber,
  scaleTickNumberByRange,
  getCartesianAxisTriggerTooltip,
  isDateData,
  createDateFormatter,
  getDefaultTickNumber,
  scaleBand,
  resolveAxisSize,
} from '@mui/x-charts/internals';
import type {
  ComputedAxisConfig,
  ChartSeriesType,
  ProcessedSeries,
  ChartSeriesConfig,
  DefaultedYAxis,
  DefaultedXAxis,
  DefaultedAxis,
  CartesianChartSeriesType,
  AxisId,
  ComputedAxis,
} from '@mui/x-charts/internals';
import type {
  AxisConfig,
  ChartsXAxisProps,
  ChartsYAxisProps,
  ScaleName,
} from '@mui/x-charts/models';

export const xRangeGetter = (
  drawingArea: ChartDrawingArea,
  reverse?: boolean,
  removedSpace: number = 0,
): [number, number] => {
  const range: [number, number] = [
    drawingArea.left,
    drawingArea.left + drawingArea.width - removedSpace,
  ];
  return reverse ? [range[1], range[0]] : [range[0], range[1]];
};

export const yRangeGetter = (
  drawingArea: ChartDrawingArea,
  reverse?: boolean,
  removedSpace: number = 0,
): [number, number] => {
  const range: [number, number] = [
    drawingArea.top + drawingArea.height - removedSpace,
    drawingArea.top,
  ];
  return reverse ? [range[1], range[0]] : [range[0], range[1]];
};

function getRange(
  drawingArea: ChartDrawingArea,
  axisDirection: 'x' | 'y',
  axis: AxisConfig<ScaleName, any, ChartsAxisProps>,
  removedSpace: number = 0,
): [number, number] {
  return axisDirection === 'x'
    ? xRangeGetter(drawingArea, axis.reverse, removedSpace)
    : yRangeGetter(drawingArea, axis.reverse, removedSpace);
}

export type ComputeResult<T extends ChartsAxisProps> = {
  axis: ComputedAxisConfig<T>;
  axisIds: string[];
};

type ComputeCommonParams<SeriesType extends ChartSeriesType = 'funnel'> = {
  drawingArea: ChartDrawingArea;
  formattedSeries: ProcessedSeries<SeriesType>;
  seriesConfig: ChartSeriesConfig<SeriesType>;
  gap: number;
  autoSizes?: Record<AxisId, number>;
};

export function computeAxisValue(
  options: ComputeCommonParams<'funnel'> & {
    axis?: DefaultedYAxis[];
    axisDirection: 'y';
  },
): ComputeResult<ChartsYAxisProps>;
export function computeAxisValue(
  options: ComputeCommonParams<'funnel'> & {
    axis?: DefaultedXAxis[];
    axisDirection: 'x';
  },
): ComputeResult<ChartsXAxisProps>;
export function computeAxisValue({
  drawingArea,
  formattedSeries,
  axis: allAxis,
  seriesConfig,
  axisDirection,
  gap,
  autoSizes,
}: ComputeCommonParams<'funnel'> & {
  axis?: DefaultedAxis[];
  axisDirection: 'x' | 'y';
}) {
  if (allAxis === undefined) {
    return {
      axis: {},
      axisIds: [],
    };
  }

  const axisIdsTriggeringTooltip = getCartesianAxisTriggerTooltip(
    axisDirection,
    seriesConfig as ChartSeriesConfig<CartesianChartSeriesType>,
    formattedSeries,
    allAxis[0].id,
  );

  const completeAxis: ComputedAxisConfig<ChartsAxisProps> = {};
  allAxis.forEach((eachAxis, axisIndex) => {
      throw new Error("STUB");
  });
  return {
    axis: completeAxis,
    axisIds: allAxis.map(({ id }) => { throw new Error("STUB"); }),
  };
}
