'use client';
import * as React from 'react';
import { warnOnce } from '@mui/x-internals/warning';
import { line as d3Line } from '@mui/x-charts-vendor/d3-shape';
import { useChartGradientIdBuilder } from '../hooks/useChartGradientId';
import { isOrdinalScale } from '../internals/scaleGuards';
import type { ComputedAxisConfig } from '../internals/plugins/featurePlugins/useChartCartesianAxis';
import {
  selectorChartSamplingState,
  selectorChartSamplingPyramids,
  getFullRangeZoom,
} from '../internals/plugins/featurePlugins/useChartCartesianAxis/sampling.selectors';
import type { SampledBucket } from '../internals/plugins/featurePlugins/useChartCartesianAxis/sampling.types';
import type { ZoomMap } from '../internals/plugins/featurePlugins/useChartCartesianAxis/zoom.types';
import {
  selectorChartZoomMap,
  selectorChartZoomOptionsLookup,
} from '../internals/plugins/featurePlugins/useChartCartesianAxis/useChartCartesianAxisRendering.selectors';
import { selectorChartSeriesConfig } from '../internals/plugins/corePlugins/useChartSeriesConfig';
import { useStore } from '../internals/store/useStore';
import { getCurveFactory } from '../internals/getCurve';
import type { ChartsXAxisProps, ChartsYAxisProps } from '../models';
import {
  getValueToPositionMapper,
  useDrawingArea,
  useLineSeriesContext,
  useXAxes,
  useYAxes,
} from '../hooks';
import { DEFAULT_X_AXIS_KEY } from '../constants';
import type { SeriesId } from '../models/seriesType/common';

interface LinePlotDataPoint {
  d: string;
  seriesId: SeriesId;
  color: string;
  gradientId?: string;
  hidden: boolean;
  /** Skip the path animation: morphing between different sampled point counts looks wrong. */
  isSampled: boolean;
}

export function useLinePlotData(
  xAxes: ComputedAxisConfig<ChartsXAxisProps>,
  yAxes: ComputedAxisConfig<ChartsYAxisProps>,
  /**
   * Overrides the zoom span and pixel size used for sampling. The zoom-slider preview passes its
   * full-range zoom and own width so its density stays stable while the main chart zooms, instead
   * of reading the active zoom from the store.
   */
  samplingOverride?: { zoomMap: ZoomMap; availableSize: number },
) {
  const seriesData = useLineSeriesContext();
  const defaultXAxisId = useXAxes().xAxisIds[0];
  const defaultYAxisId = useYAxes().yAxisIds[0];
  const getGradientId = useChartGradientIdBuilder();

  const drawingArea = useDrawingArea();
  const store = useStore();
  const samplingState = store.use(selectorChartSamplingState);
  const sampledSeries = store.use(selectorChartSamplingPyramids);
  const activeZoomMap = store.use(selectorChartZoomMap);
  const zoomOptions = store.use(selectorChartZoomOptionsLookup);
  const sampler = store.use(selectorChartSeriesConfig).line?.sampler;

  const zoomMap = samplingOverride?.zoomMap ?? activeZoomMap;
  const samplingSize = samplingOverride?.availableSize ?? drawingArea.width;

  // Skip the line animation while sampling is on, plus the first render after it turns off: the
  // point count changes, so the path would morph.
  const lineMethod = samplingState?.methods.line;
  const samplingEnabled = lineMethod != null && lineMethod !== 'none';
  const wasSamplingEnabled = React.useRef(samplingEnabled);
  const skipSamplingAnimation = samplingEnabled || wasSamplingEnabled.current;
  React.useEffect(() => {
      throw new Error("STUB");
  }, [samplingEnabled]);

  // This memo prevents odd line chart behavior when hydrating.
  const allData = React.useMemo(() => {
      throw new Error("STUB");
  }, [
    seriesData,
    defaultXAxisId,
    defaultYAxisId,
    xAxes,
    yAxes,
    getGradientId,
    samplingEnabled,
    lineMethod,
    sampledSeries,
    zoomMap,
    samplingSize,
    zoomOptions,
    sampler,
    skipSamplingAnimation,
  ]);

  return allData;
}
