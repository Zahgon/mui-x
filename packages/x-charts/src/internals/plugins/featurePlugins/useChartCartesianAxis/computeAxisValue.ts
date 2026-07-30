import type { ScaleBand, NumberValue } from '@mui/x-charts-vendor/d3-scale';
import { createScalarFormatter } from '../../../defaultValueFormatters';
import type { ContinuousScaleName, ScaleName } from '../../../../models';
import { isBandScaleConfig, isPointScaleConfig } from '../../../../models/axis';
import type {
  ChartsXAxisProps,
  ChartsAxisProps,
  ChartsYAxisProps,
  AxisId,
  DefaultedXAxis,
  DefaultedYAxis,
  DefaultedAxis,
  AxisValueFormatterContext,
  ComputedAxis,
  D3Scale,
} from '../../../../models/axis';
import type {
  CartesianChartSeriesType,
  ChartSeriesType,
} from '../../../../models/seriesType/config';
import { getColorScale, getOrdinalColorScale, getSequentialColorScale } from '../../../colorScale';
import { scaleTickNumberByRange } from '../../../ticks';
import { getScale } from '../../../getScale';
import { isDateData, createDateFormatter } from '../../../dateHelpers';
import type { ChartDrawingArea } from '../../../../hooks';
import type { ChartSeriesConfig } from '../../corePlugins/useChartSeriesConfig';
import type { ComputedAxisConfig } from './useChartCartesianAxis.types';
import type { ProcessedSeries } from '../../corePlugins/useChartSeries/useChartSeries.types';
import type { ZoomData } from './zoom.types';
import { getAxisTriggerTooltip } from './getAxisTriggerTooltip';
import { isBandScale, isOrdinalScale } from '../../../scaleGuards';
import {
  DEFAULT_AXIS_SIZE_HEIGHT,
  DEFAULT_AXIS_SIZE_WIDTH,
  AXIS_LABEL_DEFAULT_HEIGHT,
} from '../../../../constants';

function getRange(
  drawingArea: ChartDrawingArea,
  axisDirection: 'x' | 'y', // | 'rotation' | 'radius',
  reverse: boolean,
): [number, number] {
  const range: [number, number] =
    axisDirection === 'x'
      ? [drawingArea.left, drawingArea.left + drawingArea.width]
      : [drawingArea.top + drawingArea.height, drawingArea.top];

  return reverse ? [range[1], range[0]] : range;
}

function shouldIgnoreGapRatios(scale: ScaleBand<{ toString(): string }>, categoryGapRatio: number) {
  const step = scale.step();

  const paddingPx = step * categoryGapRatio;

  /* If the padding is less than 0.1px, we consider it negligible and ignore it.
   * This prevents issues where very small gaps cause rendering artifacts or unexpected layouts.
   * A threshold of 0.1px is chosen as it's generally below the perceptible limit for most displays.
   */
  return paddingPx < 0.1;
}

export function resolveAxisSize(
  axis: DefaultedAxis<ScaleName, any, Readonly<ChartsAxisProps>>,
  autoSizes: Record<AxisId, number> | undefined,
  direction: 'x' | 'y',
): number {
  const size = direction === 'x' ? (axis as DefaultedXAxis).height : (axis as DefaultedYAxis).width;
  if (size === 'auto') {
    const autoSize = autoSizes?.[axis.id];
    if (autoSize !== undefined) {
      return autoSize;
    }
    const defaultSize = direction === 'x' ? DEFAULT_AXIS_SIZE_HEIGHT : DEFAULT_AXIS_SIZE_WIDTH;
    return defaultSize + (axis.label ? AXIS_LABEL_DEFAULT_HEIGHT : 0);
  }
  return size ?? 0;
}

const DEFAULT_CATEGORY_GAP_RATIO = 0.2;
const DEFAULT_BAR_GAP_RATIO = 0.1;

export type ComputeResult<T extends ChartsAxisProps> = {
  axis: ComputedAxisConfig<T>;
  axisIds: AxisId[];
};

type ComputeCommonParams<SeriesType extends ChartSeriesType = ChartSeriesType> = {
  scales: Record<AxisId, D3Scale>;
  drawingArea: ChartDrawingArea;
  formattedSeries: ProcessedSeries<SeriesType>;
  seriesConfig: ChartSeriesConfig<SeriesType>;
  zoomMap?: Map<AxisId, ZoomData>;
  domains: Record<
    AxisId,
    {
      domain: ReadonlyArray<string | NumberValue>;
      tickNumber?: number;
    }
  >;
  autoSizes?: Record<AxisId, number>;
  axesGap?: number;
};

/**
 * Recalculates axis offsets using actual resolved sizes (including auto-sizes).
 * This is needed because offsets from defaultizeAxis use placeholder values for auto-sized axes.
 */
function recalculateOffsets(
  allAxis: readonly DefaultedAxis[],
  autoSizes: Record<AxisId, number> | undefined,
  axisDirection: 'x' | 'y',
  axesGap: number,
): Record<AxisId, number> {
  const offsets: Record<string, number> = {};
  const result: Record<AxisId, number> = {};

  for (const axis of allAxis) {
    const position = axis.position;
    if (!position) {
      continue;
    }

    offsets[position] ??= 0;
    result[axis.id] = offsets[position];

    if (position !== 'none') {
      const size = resolveAxisSize(
        axis as DefaultedAxis<ScaleName, any, Readonly<ChartsAxisProps>>,
        autoSizes,
        axisDirection,
      );
      offsets[position] += size + axesGap;

      const zoom = (axis as DefaultedXAxis | DefaultedYAxis).zoom;
      if (zoom?.slider.enabled) {
        offsets[position] += zoom.slider.size;
      }
    }
  }

  return result;
}

export function computeAxisValue<SeriesType extends ChartSeriesType>(
  options: ComputeCommonParams<SeriesType> & {
    axis?: DefaultedYAxis[];
    axisDirection: 'y';
  },
): ComputeResult<ChartsYAxisProps>;
export function computeAxisValue<SeriesType extends ChartSeriesType>(
  options: ComputeCommonParams<SeriesType> & {
    axis?: DefaultedXAxis[];
    axisDirection: 'x';
  },
): ComputeResult<ChartsXAxisProps>;
export function computeAxisValue<SeriesType extends ChartSeriesType>({
  scales,
  drawingArea,
  formattedSeries,
  axis: allAxis,
  seriesConfig,
  axisDirection,
  zoomMap,
  domains,
  autoSizes,
  axesGap = 0,
}: ComputeCommonParams<SeriesType> & {
  axis?: DefaultedAxis[];
  axisDirection: 'x' | 'y';
}) {
  if (allAxis === undefined) {
    return {
      axis: {},
      axisIds: [],
    };
  }

  const axisIdsTriggeringTooltip = getAxisTriggerTooltip(
    axisDirection,
    seriesConfig as ChartSeriesConfig<CartesianChartSeriesType>,
    formattedSeries,
    allAxis[0].id,
  );

  const resolvedOffsets = recalculateOffsets(allAxis, autoSizes, axisDirection, axesGap);

  const completeAxis: ComputedAxisConfig<ChartsAxisProps> = {};
  allAxis.forEach((eachAxis) => {
      throw new Error("STUB");
  });

  return {
    axis: completeAxis,
    axisIds: allAxis.map(({ id }) => { throw new Error("STUB"); }),
  };
}
