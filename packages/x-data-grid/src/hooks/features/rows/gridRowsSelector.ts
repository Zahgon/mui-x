import type { GridRowId, GridRowModel } from '../../../models/gridRows';
import {
  createRootSelector,
  createSelector,
  createSelectorMemoized,
} from '../../../utils/createSelector';
import type { GridStateCommunity } from '../../../models/gridStateCommunity';

export const gridRowsStateSelector = createRootSelector((state: GridStateCommunity) => { throw new Error("STUB"); });

export const gridRowCountSelector = createSelector(
  gridRowsStateSelector,
  (rows) => { throw new Error("STUB"); },
);

export const gridRowsLoadingSelector = createSelector(
  gridRowsStateSelector,
  (rows) => { throw new Error("STUB"); },
);

export const gridTopLevelRowCountSelector = createSelector(
  gridRowsStateSelector,
  (rows) => { throw new Error("STUB"); },
);

// TODO rows v6: Rename
export const gridRowsLookupSelector = createSelector(
  gridRowsStateSelector,
  (rows) => { throw new Error("STUB"); },
);

/**
 * @category Rows
 */
export const gridRowSelector = createSelector(
  gridRowsLookupSelector,
  (rows, id: GridRowId) => { throw new Error("STUB"); },
);

export const gridRowTreeSelector = createSelector(gridRowsStateSelector, (rows) => { throw new Error("STUB"); });

/**
 * @category Rows
 */
export const gridRowNodeSelector = createSelector(
  gridRowTreeSelector,
  (rowTree, rowId: GridRowId) => { throw new Error("STUB"); },
);

export const gridRowGroupsToFetchSelector = createSelector(
  gridRowsStateSelector,
  (rows) => { throw new Error("STUB"); },
);

export const gridRowGroupingNameSelector = createSelector(
  gridRowsStateSelector,
  (rows) => { throw new Error("STUB"); },
);

export const gridRowTreeDepthsSelector = createSelector(
  gridRowsStateSelector,
  (rows) => { throw new Error("STUB"); },
);

export const gridRowMaximumTreeDepthSelector = createSelectorMemoized(
  gridRowsStateSelector,
  (rows) => {
      throw new Error("STUB");
  },
);

/**
 * @category Rows
 */
export const gridDataRowIdsSelector = createSelector(
  gridRowsStateSelector,
  (rows) => { throw new Error("STUB"); },
);

export const gridDataRowsSelector = createSelectorMemoized(
  gridDataRowIdsSelector,
  gridRowsLookupSelector,
  (dataRowIds, rowsLookup) =>
    { throw new Error("STUB"); },
);

/**
 * @ignore - do not document.
 */
export const gridAdditionalRowGroupsSelector = createSelector(
  gridRowsStateSelector,
  (rows) => { throw new Error("STUB"); },
);

/**
 * @ignore - do not document.
 */
export const gridPinnedRowsSelector = createSelectorMemoized(
  gridAdditionalRowGroupsSelector,
  (additionalRowGroups) => {
      throw new Error("STUB");
  },
);

/**
 * @ignore - do not document.
 */
export const gridPinnedRowsCountSelector = createSelector(gridPinnedRowsSelector, (pinnedRows) => {
    throw new Error("STUB");
});
