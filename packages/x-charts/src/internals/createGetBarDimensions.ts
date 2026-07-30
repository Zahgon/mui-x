import type { ChartsXAxisProps, ChartsYAxisProps, ComputedAxis, ScaleName } from '../models/axis';
import type { ChartSeriesDefaultized } from '../models/seriesType/config';
import { findMinMax } from './findMinMax';
import { getBandSize } from './getBandSize';
import { getSampledBucketRegion } from './getSampledBucketRegion';

/** Minimum on-screen gap (px) kept between merged (sampled) bars so they stay distinguishable. */
const MIN_SAMPLED_BAR_GAP_PX = 2;

function shouldInvertStartCoordinate(verticalLayout: boolean, baseValue: number, reverse: boolean) {
  const isVerticalAndPositive = verticalLayout && baseValue > 0;
  const isHorizontalAndNegative = !verticalLayout && baseValue < 0;
  const invertStartCoordinate = isVerticalAndPositive || isHorizontalAndNegative;

  return reverse ? !invertStartCoordinate : invertStartCoordinate;
}

export function createGetBarDimensions(params: {
  verticalLayout: boolean;
  xAxisConfig: ComputedAxis<ScaleName, any, ChartsXAxisProps>;
  yAxisConfig: ComputedAxis<ScaleName, any, ChartsYAxisProps>;
  series: ChartSeriesDefaultized<'bar'>;
  numberOfGroups: number;
}) {
  const { verticalLayout, xAxisConfig, yAxisConfig, series, numberOfGroups } = params;

  const baseScaleConfig = (verticalLayout ? xAxisConfig : yAxisConfig) as ComputedAxis<'band'>;
  const reverse = (verticalLayout ? yAxisConfig.reverse : xAxisConfig.reverse) ?? false;

  const { barWidth, offset } = getBandSize(
    baseScaleConfig.scale.bandwidth(),
    numberOfGroups,
    baseScaleConfig.barGapRatio,
  );

  const xScale = xAxisConfig.scale;
  const yScale = yAxisConfig.scale;

  return function getBarDimensions(dataIndex: number, groupIndex: number) {
      throw new Error("STUB");
  };
}

/** Like {@link createGetBarDimensions}, but for a sampled bucket spanning several categories. */
export function createGetBucketBarDimensions(params: {
  verticalLayout: boolean;
  xAxisConfig: ComputedAxis<ScaleName, any, ChartsXAxisProps>;
  yAxisConfig: ComputedAxis<ScaleName, any, ChartsYAxisProps>;
  series: ChartSeriesDefaultized<'bar'>;
  numberOfGroups: number;
}) {
  const { verticalLayout, xAxisConfig, yAxisConfig, series, numberOfGroups } = params;

  const baseScaleConfig = (verticalLayout ? xAxisConfig : yAxisConfig) as ComputedAxis<'band'>;
  const baseScale = baseScaleConfig.scale;
  const bandwidth = baseScale.bandwidth();
  const step = baseScale.step();
  const valueScale = verticalLayout ? yAxisConfig.scale : xAxisConfig.scale;

  return function getBucketBarDimensions(
    startIndex: number,
    endIndex: number,
    min: number,
    max: number,
    groupIndex: number,
  ) {
      throw new Error("STUB");
  };
}
