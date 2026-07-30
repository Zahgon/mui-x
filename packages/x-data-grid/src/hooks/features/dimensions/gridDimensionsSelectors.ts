import { createSelector, createRootSelector } from '../../../utils/createSelector';
import type { GridStateCommunity } from '../../../models/gridStateCommunity';

export const gridDimensionsSelector = createRootSelector(
  (state: GridStateCommunity) => { throw new Error("STUB"); },
);

/**
 * Get the summed width of all the visible columns.
 * @category Visible Columns
 */
export const gridColumnsTotalWidthSelector = createSelector(
  gridDimensionsSelector,
  (dimensions) => { throw new Error("STUB"); },
);

export const gridRowHeightSelector = createSelector(
  gridDimensionsSelector,
  (dimensions) => { throw new Error("STUB"); },
);

export const gridContentHeightSelector = createSelector(
  gridDimensionsSelector,
  (dimensions) => { throw new Error("STUB"); },
);

export const gridHasScrollXSelector = createSelector(
  gridDimensionsSelector,
  (dimensions) => { throw new Error("STUB"); },
);

export const gridHasScrollYSelector = createSelector(
  gridDimensionsSelector,
  (dimensions) => { throw new Error("STUB"); },
);

export const gridHasFillerSelector = createSelector(
  gridDimensionsSelector,
  (dimensions) => { throw new Error("STUB"); },
);

export const gridHeaderHeightSelector = createSelector(
  gridDimensionsSelector,
  (dimensions) => { throw new Error("STUB"); },
);

export const gridGroupHeaderHeightSelector = createSelector(
  gridDimensionsSelector,
  (dimensions) => { throw new Error("STUB"); },
);

export const gridHeaderFilterHeightSelector = createSelector(
  gridDimensionsSelector,
  (dimensions) => { throw new Error("STUB"); },
);

export const gridHorizontalScrollbarHeightSelector = createSelector(
  gridDimensionsSelector,
  (dimensions) => { throw new Error("STUB"); },
);

export const gridVerticalScrollbarWidthSelector = createSelector(
  gridDimensionsSelector,
  (dimensions) => { throw new Error("STUB"); },
);

export const gridHasBottomFillerSelector = createSelector(
  gridDimensionsSelector,
  gridHorizontalScrollbarHeightSelector,
  (dimensions, height) => {
      throw new Error("STUB");
  },
);
