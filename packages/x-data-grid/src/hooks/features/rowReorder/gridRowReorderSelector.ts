import { createRootSelector, createSelector } from '../../../utils/createSelector';
import type { GridStateCommunity } from '../../../models/gridStateCommunity';
import type { GridRowId } from '../../../models/gridRows';

export const gridRowReorderStateSelector = createRootSelector(
  (state: GridStateCommunity) => { throw new Error("STUB"); },
);

export const gridIsRowDragActiveSelector = createSelector(
  gridRowReorderStateSelector,
  (rowReorder) => { throw new Error("STUB"); },
);

// Selector for the entire drop target state
export const gridRowDropTargetSelector = createSelector(
  gridRowReorderStateSelector,
  (rowReorder) => { throw new Error("STUB"); },
);

export const gridRowDropTargetRowIdSelector = createSelector(
  gridRowDropTargetSelector,
  (dropTarget) => { throw new Error("STUB"); },
);

// Selector for a specific row's drop position
export const gridRowDropPositionSelector = createSelector(
  gridRowDropTargetSelector,
  (dropTarget, rowId: GridRowId) => {
      throw new Error("STUB");
  },
);

// Selector for the dragged row ID
export const gridDraggedRowIdSelector = createSelector(
  gridRowReorderStateSelector,
  (rowReorder) => { throw new Error("STUB"); },
);
