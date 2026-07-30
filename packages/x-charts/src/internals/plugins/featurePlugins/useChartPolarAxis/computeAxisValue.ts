import type { ContinuousScaleName, ScaleName } from '../../../../models';
import {
  isBandScaleConfig,
  isPointScaleConfig,
  isContinuousScaleConfig,
} from '../../../../models/axis';
import type {
  ChartsAxisProps,
  ChartsRotationAxisProps,
  ChartsRadiusAxisProps,
  PolarAxisConfig,
  ComputedAxis,
} from '../../../../models/axis';
import type { ChartSeriesType, PolarChartSeriesType } from '../../../../models/seriesType/config';
import { getColorScale, getOrdinalColorScale } from '../../../colorScale';
import { getDefaultTickNumber, getTickNumber } from '../../../ticks';
import { getScale } from '../../../getScale';
import { isDateData, createDateFormatter } from '../../../dateHelpers';
import { getAxisExtremum } from './getAxisExtremum';
import type { ChartDrawingArea } from '../../../../hooks';
import type { ChartSeriesConfig } from '../../corePlugins/useChartSeriesConfig';
import type { ProcessedSeries } from '../../corePlugins/useChartSeries/useChartSeries.types';
import { deg2rad } from '../../../angleConversion';
import { getAxisTriggerTooltip } from './getAxisTriggerTooltip';
import { scaleBand, scalePoint } from '../../../scales';
import { getPercentageValue } from '../../../getPercentageValue';
import type { ComputedAxisConfig } from '../useChartCartesianAxis';
import { EPSILON } from '../../../../utils/epsilon';

type RotationConfig = PolarAxisConfig<ScaleName, any, ChartsRotationAxisProps>;
type RadiusConfig = PolarAxisConfig<ScaleName, any, ChartsRadiusAxisProps>;

function getRange(
  drawingArea: ChartDrawingArea,
  axisDirection: 'rotation' | 'radius',
  axis: PolarAxisConfig<ScaleName, any>,
): { range: number[]; isFullCircle: boolean } {
  if (axisDirection === 'rotation') {
    const angles = [
      deg2rad((axis as RotationConfig).startAngle, 0),
      deg2rad((axis as RotationConfig).endAngle, 2 * Math.PI),
    ];
    const diff = angles[1] - angles[0];
    const isFullCircle = diff >= Math.PI * 2 - EPSILON;
    if (axis.scaleType === 'point' && isFullCircle) {
      // For point scale, remove a slice to avoid overlapping first and last points.
      angles[1] -= diff / axis.data!.length;
    }
    return { range: angles, isFullCircle };
  }
  const availableRadius = Math.min(drawingArea.height, drawingArea.width) / 2;
  const { minRadius, maxRadius } = axis as RadiusConfig;
  return {
    range: [
      minRadius === undefined ? 0 : getPercentageValue(minRadius, availableRadius),
      maxRadius === undefined ? availableRadius : getPercentageValue(maxRadius, availableRadius),
    ],
    isFullCircle: false,
  };
}

const DEFAULT_CATEGORY_GAP_RATIO = 0.2;
const DEFAULT_BAR_GAP_RATIO = 0.1;

export type ComputeResult<T extends ChartsAxisProps> = {
  axis: ComputedAxisConfig<T>;
  axisIds: string[];
};

type ComputeCommonParams<SeriesType extends ChartSeriesType = ChartSeriesType> = {
  drawingArea: ChartDrawingArea;
  formattedSeries: ProcessedSeries<SeriesType>;
  seriesConfig: ChartSeriesConfig<SeriesType>;
};

export function computeAxisValue<SeriesType extends ChartSeriesType>(
  options: ComputeCommonParams<SeriesType> & {
    axis?: PolarAxisConfig<ScaleName, any, ChartsRadiusAxisProps>[];
    axisDirection: 'radius';
  },
): ComputeResult<ChartsRadiusAxisProps>;
export function computeAxisValue<SeriesType extends ChartSeriesType>(
  options: ComputeCommonParams<SeriesType> & {
    axis?: PolarAxisConfig<ScaleName, any, ChartsRotationAxisProps>[];
    axisDirection: 'rotation';
  },
): ComputeResult<ChartsRotationAxisProps>;
export function computeAxisValue<SeriesType extends ChartSeriesType>({
  drawingArea,
  formattedSeries,
  axis: allAxis,
  seriesConfig,
  axisDirection,
}: ComputeCommonParams<SeriesType> & {
  axis?: PolarAxisConfig[];
  axisDirection: 'radius' | 'rotation';
}) {
  if (allAxis === undefined) {
    return {
      axis: {},
      axisIds: [],
    };
  }

  const axisIdsTriggeringTooltip = getAxisTriggerTooltip(
    axisDirection,
    seriesConfig as ChartSeriesConfig<PolarChartSeriesType>,
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
