import * as React from 'react';
import type { AxisId, ChartsXAxisProps, ChartsYAxisProps, ComputedAxis } from '../models/axis';
import getColor from './seriesConfig/bar/getColor';
import { useXAxes, useYAxes } from '../hooks/useAxis';
import type { MaskData, ProcessedBarData, ProcessedBarSeriesData } from './types';
import { checkBarChartScaleErrors } from './checkBarChartScaleErrors';
import { useBarSeriesContext } from '../hooks/useBarSeries';
import type { SeriesProcessorResult } from '../internals/plugins/corePlugins/useChartSeriesConfig';
import type { ComputedAxisConfig } from '../internals/plugins/featurePlugins/useChartCartesianAxis/useChartCartesianAxis.types';
import {
  createGetBarDimensions,
  createGetBucketBarDimensions,
} from '../internals/createGetBarDimensions';
import type { ChartDrawingArea } from '../hooks/useDrawingArea';
import { useChartId } from '../hooks/useChartId';
import { useStore } from '../internals/store/useStore';
import {
  selectorChartSamplingPyramids,
  getFullRangeZoom,
} from '../internals/plugins/featurePlugins/useChartCartesianAxis/sampling.selectors';
import type {
  SampledSeriesLookup,
  SamplingStrategy,
} from '../internals/plugins/featurePlugins/useChartCartesianAxis/sampling.types';
import { selectorChartSeriesConfig } from '../internals/plugins/corePlugins/useChartSeriesConfig';
import {
  selectorChartZoomMap,
  selectorChartZoomOptionsLookup,
} from '../internals/plugins/featurePlugins/useChartCartesianAxis/useChartCartesianAxisRendering.selectors';
import type { ZoomData } from '../internals/plugins/featurePlugins/useChartCartesianAxis/zoom.types';
import type { ChartSeriesDefaultized } from '../models/seriesType/config';
import type { StackingGroupsType } from '../internals/stacking';
import type { SeriesId } from '../models/seriesType';

export function useBarPlotData(
  drawingArea: ChartDrawingArea,
  xAxes: ComputedAxisConfig<ChartsXAxisProps>,
  yAxes: ComputedAxisConfig<ChartsYAxisProps>,
): {
  completedData: ProcessedBarSeriesData[];
  masksData: MaskData[];
} {
  const seriesData =
    useBarSeriesContext() ??
    ({ series: {}, stackingGroups: [], seriesOrder: [] } as SeriesProcessorResult<'bar'>);
  const defaultXAxisId = useXAxes().xAxisIds[0];
  const defaultYAxisId = useYAxes().yAxisIds[0];

  const chartId = useChartId();

  const store = useStore();
  const samplingPyramids = store.use(selectorChartSamplingPyramids);
  const zoomMap = store.use(selectorChartZoomMap);
  const zoomOptions = store.use(selectorChartZoomOptionsLookup);
  const sampler = store.use(selectorChartSeriesConfig).bar?.sampler;

  return React.useMemo(
    () =>
      { throw new Error("STUB"); },
    [
      drawingArea,
      chartId,
      seriesData.stackingGroups,
      seriesData.series,
      xAxes,
      yAxes,
      defaultXAxisId,
      defaultYAxisId,
      samplingPyramids,
      zoomMap,
      sampler,
      zoomOptions,
    ],
  );
}

export function processBarDataForPlot(
  drawingArea: ChartDrawingArea,
  chartId: string | undefined,
  stackingGroups: StackingGroupsType,
  series: Record<SeriesId, ChartSeriesDefaultized<'bar'>>,
  xAxes: ComputedAxisConfig<ChartsXAxisProps>,
  yAxes: ComputedAxisConfig<ChartsYAxisProps>,
  defaultXAxisId: AxisId,
  defaultYAxisId: AxisId,
  samplingPyramids: SampledSeriesLookup = {},
  zoomMap?: Map<AxisId, ZoomData>,
  sampler?: SamplingStrategy<'bar'>,
  zoomOptions?: Record<AxisId, { minSpan: number }>,
) {
  const masks: Record<string, MaskData> = {};

  const data = stackingGroups.flatMap(({ ids: seriesIds }, groupIndex) => {
      throw new Error("STUB");
  });

  return {
    completedData: data,
    masksData: Object.values(masks),
  };
}
