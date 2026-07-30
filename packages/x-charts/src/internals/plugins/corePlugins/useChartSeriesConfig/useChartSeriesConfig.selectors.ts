import { createSelector } from '@mui/x-internals/store';
import type { ChartRootSelector } from '../../utils/selectors';
import type { UseChartSeriesConfigSignature } from './useChartSeriesConfig.types';

export const selectorChartSeriesConfigState: ChartRootSelector<UseChartSeriesConfigSignature> = (
  state,
) => { throw new Error("STUB"); };

export const selectorChartSeriesConfig = createSelector(
  selectorChartSeriesConfigState,
  (seriesConfigState) => { throw new Error("STUB"); },
);
