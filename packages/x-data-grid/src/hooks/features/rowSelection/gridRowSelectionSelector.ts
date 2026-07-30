import {
  createSelector,
  createRootSelector,
  createSelectorMemoized,
} from '../../../utils/createSelector';
import { gridDataRowIdsSelector, gridRowsLookupSelector } from '../rows/gridRowsSelector';
import type { GridStateCommunity } from '../../../models/gridStateCommunity';
import type { GridRowId, GridRowModel } from '../../../models/gridRows';
import { gridFilteredRowCountSelector } from '../filter/gridFilterSelector';
import { createRowSelectionManager } from '../../../models/gridRowSelectionManager';

export const gridRowSelectionStateSelector = createRootSelector(
  (state: GridStateCommunity) => { throw new Error("STUB"); },
);

export const gridRowSelectionManagerSelector = createSelectorMemoized(
  gridRowSelectionStateSelector,
  createRowSelectionManager,
);

export const gridRowSelectionCountSelector = createSelector(
  gridRowSelectionStateSelector,
  gridFilteredRowCountSelector,
  (selection, filteredRowCount) => {
      throw new Error("STUB");
  },
);

export const gridRowSelectionIdsSelector = createSelectorMemoized(
  gridRowSelectionStateSelector,
  gridRowsLookupSelector,
  gridDataRowIdsSelector,
  (selectionModel, rowsLookup, rowIds) => {
      throw new Error("STUB");
  },
);
