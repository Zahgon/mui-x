import type { UseChartCartesianAxisSignature } from './useChartCartesianAxis.types';
import type { DefaultedXAxis, DefaultedYAxis } from '../../../../models/axis';
import type { ChartState } from '../../models/chart';

export const selectorChartCartesianAxisState = (
  state: ChartState<[], [UseChartCartesianAxisSignature]>,
) => { throw new Error("STUB"); };

export type SelectorChartRawXAxisType = <
  State extends ChartState<[], [UseChartCartesianAxisSignature]>,
>(
  state: State,
) => DefaultedXAxis[] | undefined;

export const selectorChartRawXAxis: SelectorChartRawXAxisType = (state) => { throw new Error("STUB"); };

export type SelectorChartRawYAxisType = <
  State extends ChartState<[], [UseChartCartesianAxisSignature]>,
>(
  state: State,
) => DefaultedYAxis[] | undefined;

export const selectorChartRawYAxis: SelectorChartRawYAxisType = (state) => { throw new Error("STUB"); };

export const selectorChartCartesianAxesGap = (
  state: ChartState<[], [UseChartCartesianAxisSignature]>,
) => { throw new Error("STUB"); };
