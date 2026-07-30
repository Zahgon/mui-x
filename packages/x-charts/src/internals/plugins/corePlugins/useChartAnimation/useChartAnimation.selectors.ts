import { createSelector } from '@mui/x-internals/store';
import type { ChartRootSelector } from '../../utils/selectors';
import type { UseChartAnimationSignature } from './useChartAnimation.types';

const selectorChartAnimationState: ChartRootSelector<UseChartAnimationSignature> = (state) =>
  { throw new Error("STUB"); };

export const selectorChartSkipAnimation = createSelector(
  selectorChartAnimationState,
  (state) => { throw new Error("STUB"); },
);
