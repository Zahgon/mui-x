import { createSelector, createRootSelector } from '../../../utils/createSelector';
import type { GridStateCommunity } from '../../../models/gridStateCommunity';
import type { GridRowId } from '../../../models/gridRows';
import { GridEditModes } from '../../../models/gridEditRowModel';
import type { GridEditMode } from '../../../models/gridEditRowModel';

/**
 * Select the row editing state.
 */
export const gridEditRowsStateSelector = createRootSelector(
  (state: GridStateCommunity) => { throw new Error("STUB"); },
);

export const gridRowIsEditingSelector = createSelector(
  gridEditRowsStateSelector,
  (editRows, { rowId, editMode }: { rowId: GridRowId; editMode: GridEditMode }) =>
    { throw new Error("STUB"); },
);

export const gridEditCellStateSelector = createSelector(
  gridEditRowsStateSelector,
  (
    editRows,
    {
      rowId,
      field,
    }: {
      rowId: GridRowId;
      field: string;
    },
  ) => { throw new Error("STUB"); },
);
