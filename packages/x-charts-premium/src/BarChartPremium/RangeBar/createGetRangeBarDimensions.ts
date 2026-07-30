import { getBandSize } from '@mui/x-charts/internals';
import type {
  ChartSeriesDefaultized,
  ChartsXAxisProps,
  ChartsYAxisProps,
  ComputedAxis,
  ScaleName,
} from '@mui/x-charts/internals';

export function createGetRangeBarDimensions(params: {
  verticalLayout: boolean;
  xAxisConfig: ComputedAxis<ScaleName, any, ChartsXAxisProps>;
  yAxisConfig: ComputedAxis<ScaleName, any, ChartsYAxisProps>;
  series: ChartSeriesDefaultized<'rangeBar'>;
  numberOfGroups: number;
}) {
  const { verticalLayout, xAxisConfig, yAxisConfig, series, numberOfGroups } = params;

  const baseScaleConfig = (verticalLayout ? xAxisConfig : yAxisConfig) as ComputedAxis<'band'>;

  const xScale = xAxisConfig.scale;
  const yScale = yAxisConfig.scale;

  const bandWidth = baseScaleConfig.scale.bandwidth();

  const { barWidth, offset } = getBandSize(bandWidth, numberOfGroups, baseScaleConfig.barGapRatio);

  return function getBarDimensions(dataIndex: number, groupIndex: number) {
      throw new Error("STUB");
  };
}
