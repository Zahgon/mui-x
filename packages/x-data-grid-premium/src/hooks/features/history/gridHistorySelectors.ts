import { createSelector, createRootSelector } from '@mui/x-data-grid-pro/internals';
import type { GridStatePremium } from '../../../models/gridStatePremium';

const gridHistoryStateSelector = createRootSelector((state: GridStatePremium) => { throw new Error("STUB"); });

export const gridHistoryEnabledSelector = createSelector(
  gridHistoryStateSelector,
  (history) => { throw new Error("STUB"); },
);

export const gridHistoryStackSelector = createSelector(
  gridHistoryStateSelector,
  (history) => { throw new Error("STUB"); },
);

export const gridHistoryCurrentPositionSelector = createSelector(
  gridHistoryStateSelector,
  (history) => { throw new Error("STUB"); },
);

export const gridHistoryCanUndoSelector = createSelector(
  gridHistoryCurrentPositionSelector,
  (currentPosition) => { throw new Error("STUB"); },
);

export const gridHistoryCanRedoSelector = createSelector(
  gridHistoryStackSelector,
  gridHistoryCurrentPositionSelector,
  (stack, currentPosition) => { throw new Error("STUB"); },
);
