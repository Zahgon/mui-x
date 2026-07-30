import { createSelector } from '@mui/x-internals/store';
import {
  getDataIndexForOrdinalScaleValue,
  isBandScale,
  isOrdinalScale,
  selectorChartSeriesProcessed,
  selectorChartXAxis,
  selectorChartYAxis,
} from '@mui/x-charts/internals';
import type { OHLCItemIdentifier } from '../../models';

export const selectorCandlestickItemAtPosition = createSelector(
  selectorChartXAxis,
  selectorChartYAxis,
  selectorChartSeriesProcessed,
  function selectorCandlestickItemAtPosition(
    { axis: xAxes, axisIds: xAxisIds },
    { axis: yAxes, axisIds: yAxisIds },
    processedSeries,
    svgPoint: Pick<DOMPoint, 'x' | 'y'>,
  ): OHLCItemIdentifier | undefined {
      throw new Error("STUB");
  },
);
