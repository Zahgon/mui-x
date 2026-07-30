import { createSelectorMemoized } from '@mui/x-internals/store';
import { selectorChartSeriesProcessed } from '../../corePlugins/useChartSeries';
import { selectorChartSeriesConfig } from '../../corePlugins/useChartSeriesConfig';
import { selectorChartDrawingArea } from '../../corePlugins/useChartDimensions';
import type { ChartSeriesType } from '../../../../models/seriesType/config';
import type { AxisId } from '../../../../models/axis';
import type { ChartRootSelector } from '../../utils/selectors';
import type { UseChartCartesianAxisSignature } from './useChartCartesianAxis.types';
import type { SampledSeriesLookup } from './sampling.types';
import type { ZoomData } from './zoom.types';
import {
  selectorChartXAxis,
  selectorChartYAxis,
  selectorChartZoomMap,
  selectorChartZoomOptionsLookup,
} from './useChartCartesianAxisRendering.selectors';

const EMPTY_PYRAMIDS: SampledSeriesLookup = {};
const EMPTY_BUCKET_SIZES: Map<AxisId, number> = new Map();

/**
 * Full-range zoom (span 100%) for a non-zoomable axis. Sampling gates on a zoom entry; a static axis
 * has none, so we sample it at full range — the `MAX_RENDERED_POINTS` cap still applies. Mirrors the
 * full-range zoom the zoom-slider preview uses to keep its density stable.
 */
export function getFullRangeZoom(axisId: AxisId): ZoomData {
  return { axisId, start: 0, end: 100 };
}

export const selectorChartSamplingState: ChartRootSelector<
  UseChartCartesianAxisSignature,
  'sampling'
> = (state) => { throw new Error("STUB"); };

/**
 * Built sampling structures keyed by series id. Memoized, so rebuilt only on data change. Builds
 * only for series types that are enabled and register a `sampler`; the plot hook reads them back.
 */
export const selectorChartSamplingPyramids = createSelectorMemoized(
  selectorChartSamplingState,
  selectorChartSeriesProcessed,
  selectorChartSeriesConfig,
  function selectorChartSamplingPyramids(
    samplingState,
    processedSeries,
    seriesConfig,
  ): SampledSeriesLookup {
      throw new Error("STUB");
  },
);

/**
 * Merged bucket size per band axis, to widen the axis highlight over a sampled bucket. Empty when
 * sampling is off or no sampler is registered. The math lives in pro; community reads the integers.
 */
export const selectorChartHighlightBucketSize = createSelectorMemoized(
  selectorChartSamplingState,
  selectorChartZoomMap,
  selectorChartXAxis,
  selectorChartYAxis,
  selectorChartDrawingArea,
  selectorChartZoomOptionsLookup,
  selectorChartSeriesConfig,
  function selectorChartHighlightBucketSize(
    samplingState,
    zoomMap,
    xAxis,
    yAxis,
    drawingArea,
    zoomOptions,
    seriesConfig,
  ): Map<AxisId, number> {
      throw new Error("STUB");
  },
);
