'use client';
import { useSeries } from '../hooks/useSeries';
import { useColorProcessor } from '../internals/plugins/corePlugins/useChartSeries/useColorProcessor';
import type { SeriesId } from '../models/seriesType/common';
import type {
  ChartSeriesDefaultized,
  CartesianChartSeriesType,
  ChartsSeriesConfig,
  PolarChartSeriesType,
} from '../models/seriesType/config';
import type { ComputedAxis, PolarAxisDefaultized, AxisId } from '../models/axis';
import { useStore } from '../internals/store/useStore';
import { getLabel } from '../internals/getLabel';
import { utcFormatter } from './utils';
import {
  useRadiusAxes,
  useRadiusAxis,
  useRotationAxes,
  useRotationAxis,
  useXAxes,
  useXAxis,
  useYAxes,
  useYAxis,
} from '../hooks/useAxis';
import { useZAxes } from '../hooks/useZAxis';
import {
  selectorChartsInteractionTooltipXAxes,
  selectorChartsInteractionTooltipYAxes,
} from '../internals/plugins/featurePlugins/useChartCartesianAxis';
import type { UseChartCartesianAxisSignature } from '../internals/plugins/featurePlugins/useChartCartesianAxis';
import type { ChartsLabelMarkProps } from '../ChartsLabel';
import {
  selectorChartsInteractionTooltipRadiusAxes,
  selectorChartsInteractionTooltipRotationAxes,
} from '../internals/plugins/featurePlugins/useChartPolarAxis/useChartPolarInteraction.selectors';
import { isPolarSeriesType } from '../internals/isPolar';
import { selectorIsItemVisibleGetter } from '../internals/plugins/featurePlugins/useChartVisibilityManager/useChartVisibilityManager.selectors';
import { composableCartesianSeriesTypes } from '../models/seriesType/composition';
import type { ComposableCartesianChartSeriesType } from '../models/seriesType/composition';
import type { MarkShape } from '../models/seriesType';

export interface UseAxesTooltipReturnValue<
  SeriesType extends CartesianChartSeriesType | PolarChartSeriesType =
    Exclude<CartesianChartSeriesType, 'ohlc'> | PolarChartSeriesType,
  AxisValueT extends string | number | Date = string | number | Date,
> {
  axisDirection: SeriesType extends CartesianChartSeriesType ? 'x' | 'y' : 'rotation' | 'radius';
  mainAxis: SeriesType extends CartesianChartSeriesType ? ComputedAxis : PolarAxisDefaultized;
  axisId: AxisId;
  axisValue: AxisValueT;
  axisFormattedValue: string;
  dataIndex: number;
  seriesItems: SeriesItem<SeriesType>[];
}

export interface UseAxesTooltipParams {
  /**
   * The axis directions to consider.
   * If not defined, all directions are considered
   */
  directions?: ('x' | 'y' | 'rotation' | 'radius')[];
}

export interface SeriesItem<T extends CartesianChartSeriesType | PolarChartSeriesType> {
  seriesId: SeriesId;
  color: string;
  value: T extends 'ohlc'
    ? { open: number; high: number; low: number; close: number } | null
    : ChartsSeriesConfig[T]['valueType'];
  formattedValue: T extends 'ohlc'
    ? { open: string | null; high: string | null; low: string | null; close: string | null }
    : string;
  formattedLabel: string | null;
  markType: ChartsLabelMarkProps['type'];
  markShape: ChartsLabelMarkProps['markShape'];
}

function defaultAxisTooltipConfig(
  axis: ComputedAxis | PolarAxisDefaultized,
  dataIndex: number,
  axisDirection: 'x' | 'y' | 'rotation' | 'radius',
): UseAxesTooltipReturnValue {
  const axisValue = axis.data?.[dataIndex] ?? null;

  const axisFormatter =
    axis.valueFormatter ??
    ((v: string | number | Date) =>
      { throw new Error("STUB"); });

  const axisFormattedValue = axisFormatter(axisValue, {
    location: 'tooltip',
    scale: axis.scale,
  });

  return {
    axisDirection,
    axisId: axis.id,
    mainAxis: axis,
    dataIndex,
    axisValue,
    axisFormattedValue,
    seriesItems: [],
  };
}

function getSeriesMark<SeriesType extends CartesianChartSeriesType | PolarChartSeriesType>(
  series: ChartSeriesDefaultized<SeriesType>,
): MarkShape | undefined {
  if (!('showMark' in series) || !series.showMark) {
    return undefined;
  }
  if ('shape' in series && series.shape) {
    return series.shape;
  }
  return 'circle';
}
/**
 * Returns the axes to display in the tooltip and the series item related to them.
 */
export function useAxesTooltip<
  SeriesType extends CartesianChartSeriesType | PolarChartSeriesType =
    Exclude<CartesianChartSeriesType, 'ohlc'> | PolarChartSeriesType,
>(params?: UseAxesTooltipParams): UseAxesTooltipReturnValue<SeriesType>[] | null {
  const { directions } = params ?? {};

  const defaultXAxis = useXAxis();
  const defaultYAxis = useYAxis();
  const defaultRotationAxis = useRotationAxis();
  const defaultRadiusAxis = useRadiusAxis();

  const store = useStore<[UseChartCartesianAxisSignature]>();

  const tooltipXAxes = store.use(selectorChartsInteractionTooltipXAxes);
  const tooltipYAxes = store.use(selectorChartsInteractionTooltipYAxes);

  const tooltipRotationAxes = store.use(selectorChartsInteractionTooltipRotationAxes);
  const tooltipRadiusAxes = store.use(selectorChartsInteractionTooltipRadiusAxes);

  const series = useSeries();

  const { xAxis } = useXAxes();
  const { yAxis } = useYAxes();
  const { zAxis, zAxisIds } = useZAxes();

  const { rotationAxis } = useRotationAxes();
  const { radiusAxis } = useRadiusAxes();

  const colorProcessors = useColorProcessor();

  const isItemVisible = store.use(selectorIsItemVisibleGetter);

  if (
    tooltipXAxes.length === 0 &&
    tooltipYAxes.length === 0 &&
    tooltipRotationAxes.length === 0 &&
    tooltipRadiusAxes.length === 0
  ) {
    return null;
  }

  const tooltipAxes: UseAxesTooltipReturnValue[] = [];

  if (directions === undefined || directions.includes('x')) {
    tooltipXAxes.forEach(({ axisId, dataIndex }) => {
        throw new Error("STUB");
    });
  }

  if (directions === undefined || directions.includes('y')) {
    tooltipYAxes.forEach(({ axisId, dataIndex }) => {
        throw new Error("STUB");
    });
  }

  if (directions === undefined || directions.includes('rotation')) {
    tooltipRotationAxes.forEach(({ axisId, dataIndex }) => {
        throw new Error("STUB");
    });
  }

  if (directions === undefined || directions.includes('radius')) {
    tooltipRadiusAxes.forEach(({ axisId, dataIndex }) => {
        throw new Error("STUB");
    });
  }

  Object.keys(series)
    .filter((seriesType): seriesType is ComposableCartesianChartSeriesType =>
      { throw new Error("STUB"); },
    )
    .forEach(<Type extends ComposableCartesianChartSeriesType>(seriesType: Type) => {
        throw new Error("STUB");
    });

  Object.keys(series)
    .filter(isPolarSeriesType)
    .forEach(<Type extends PolarChartSeriesType>(seriesType: Type) => {
        throw new Error("STUB");
    });

  return tooltipAxes as UseAxesTooltipReturnValue<SeriesType>[];
}
