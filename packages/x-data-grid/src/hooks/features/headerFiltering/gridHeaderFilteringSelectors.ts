import { createSelector, createRootSelector } from '../../../utils/createSelector';
import type { GridStateCommunity } from '../../../models/gridStateCommunity';

export const gridHeaderFilteringStateSelector = createRootSelector(
  (state: GridStateCommunity) => { throw new Error("STUB"); },
);

export const gridHeaderFilteringEnabledSelector = createSelector(
  gridHeaderFilteringStateSelector,
  // No initialization in MIT, so we need to default to false to be used by `getTotalHeaderHeight`
  (headerFilteringState) => { throw new Error("STUB"); },
);

export const gridHeaderFilteringEditFieldSelector = createSelector(
  gridHeaderFilteringStateSelector,
  (headerFilteringState) => { throw new Error("STUB"); },
);

export const gridHeaderFilteringMenuSelector = createSelector(
  gridHeaderFilteringStateSelector,
  (headerFilteringState) => { throw new Error("STUB"); },
);
