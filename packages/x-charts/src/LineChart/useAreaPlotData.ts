import * as React from 'react';
import { area as d3Area } from '@mui/x-charts-vendor/d3-shape';
import { useChartGradientIdBuilder } from '../hooks/useChartGradientId';
import { isOrdinalScale } from '../internals/scaleGuards';
import type { ComputedAxisConfig } from '../internals/plugins/featurePlugins/useChartCartesianAxis';
import { getCurveFactory } from '../internals/getCurve';
import type { ChartsXAxisProps, ChartsYAxisProps } from '../models';
import { getValueToPositionMapper, useLineSeriesContext, useXAxes, useYAxes } from '../hooks';
import { DEFAULT_X_AXIS_KEY } from '../constants';
import type { SeriesId } from '../models/seriesType/common';

interface AreaPlotDataPoint {
  d: string;
  seriesId: SeriesId;
  color: string;
  area?: boolean;
  gradientId?: string;
}

export function useAreaPlotData(
  xAxes: ComputedAxisConfig<ChartsXAxisProps>,
  yAxes: ComputedAxisConfig<ChartsYAxisProps>,
) {
  const seriesData = useLineSeriesContext();
  const defaultXAxisId = useXAxes().xAxisIds[0];
  const defaultYAxisId = useYAxes().yAxisIds[0];
  const getGradientId = useChartGradientIdBuilder();

  // This memo prevents odd line chart behavior when hydrating.
  const allData = React.useMemo(() => {
      throw new Error("STUB");
  }, [seriesData, defaultXAxisId, defaultYAxisId, xAxes, yAxes, getGradientId]);

  return allData;
}
