import { createSelector } from '@mui/x-internals/store';
import type { ChartState } from '../../models/chart';
import type { UseChartZAxisSignature } from './useChartZAxis.types';

const selectRootState = (state: ChartState<[UseChartZAxisSignature]>) => { throw new Error("STUB"); };

export const selectorChartZAxis = createSelector(selectRootState, (state) => { throw new Error("STUB"); });
