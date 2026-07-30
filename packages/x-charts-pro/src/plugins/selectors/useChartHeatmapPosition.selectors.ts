import { createSelector } from '@mui/x-internals/store';
import {
  getDataIndexForOrdinalScaleValue,
  isBandScale,
  selectorChartSeriesProcessed,
  selectorChartXAxis,
  selectorChartYAxis,
} from '@mui/x-charts/internals';
import type { HeatmapItemIdentifierWithData } from '../../models';

export const selectorHeatmapItemAtPosition = createSelector(
  selectorChartXAxis,
  selectorChartYAxis,
  selectorChartSeriesProcessed,
  function selectorHeatmapItemAtPosition(
    { axis: xAxes, axisIds: xAxisIds },
    { axis: yAxes, axisIds: yAxisIds },
    processedSeries,
    svgPoint: Pick<DOMPoint, 'x' | 'y'>,
  ): HeatmapItemIdentifierWithData | undefined {
      throw new Error("STUB");
  },
);
