import type { GridStateCommunity } from '../../../models/gridStateCommunity';
import { createRootSelector, createSelector } from '../../../utils/createSelector';

export const gridColumnResizeSelector = createRootSelector(
  (state: GridStateCommunity) => { throw new Error("STUB"); },
);

export const gridResizingColumnFieldSelector = createSelector(
  gridColumnResizeSelector,
  (columnResize) => { throw new Error("STUB"); },
);
