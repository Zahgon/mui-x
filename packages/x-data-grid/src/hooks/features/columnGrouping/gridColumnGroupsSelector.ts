import {
  createSelector,
  createRootSelector,
  createSelectorMemoized,
} from '../../../utils/createSelector';
import type { GridStateCommunity } from '../../../models/gridStateCommunity';

/**
 * @category ColumnGrouping
 * @ignore - do not document.
 */
export const gridColumnGroupingSelector = createRootSelector(
  (state: GridStateCommunity) => { throw new Error("STUB"); },
);

export const gridColumnGroupsUnwrappedModelSelector = createSelectorMemoized(
  gridColumnGroupingSelector,
  (columnGrouping) => { throw new Error("STUB"); },
);

export const gridColumnGroupsLookupSelector = createSelectorMemoized(
  gridColumnGroupingSelector,
  (columnGrouping) => { throw new Error("STUB"); },
);

export const gridColumnGroupsHeaderStructureSelector = createSelectorMemoized(
  gridColumnGroupingSelector,
  (columnGrouping) => { throw new Error("STUB"); },
);

export const gridColumnGroupsHeaderMaxDepthSelector = createSelector(
  gridColumnGroupingSelector,
  (columnGrouping) => { throw new Error("STUB"); },
);
