import { createSelector } from '@mui/x-internals/store';
import type { ChartOptionalRootSelector } from '../../utils/selectors';
import type { UseChartInteractionSignature } from './useChartInteraction.types';

const selectInteraction: ChartOptionalRootSelector<UseChartInteractionSignature> = (state) =>
  { throw new Error("STUB"); };

export const selectorChartsInteractionIsInitialized = createSelector(
  selectInteraction,
  (interaction) => { throw new Error("STUB"); },
);

export const selectorChartsInteractionPointer = createSelector(
  selectInteraction,
  (interaction) => { throw new Error("STUB"); },
);

export const selectorChartsInteractionPointerX = createSelector(
  selectorChartsInteractionPointer,
  (pointer) => { throw new Error("STUB"); },
);

export const selectorChartsInteractionPointerY = createSelector(
  selectorChartsInteractionPointer,
  (pointer) => { throw new Error("STUB"); },
);

export const selectorChartsLastInteraction = createSelector(
  selectInteraction,
  (interaction) => { throw new Error("STUB"); },
);

export const selectorChartsPointerType = createSelector(
  selectInteraction,
  (interaction) => { throw new Error("STUB"); },
);
