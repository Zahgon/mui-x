import { createSelector, createRootSelector } from '../../../utils/createSelector';
import type { GridStateCommunity } from '../../../models/gridStateCommunity';
import type { GridFocusState, GridTabIndexState } from './gridFocusState';

export const gridFocusStateSelector = createRootSelector(
  (state: GridStateCommunity) => { throw new Error("STUB"); },
);

export const gridFocusCellSelector = createSelector(
  gridFocusStateSelector,
  (focusState: GridFocusState) => { throw new Error("STUB"); },
);

export const gridFocusColumnHeaderSelector = createSelector(
  gridFocusStateSelector,
  (focusState: GridFocusState) => { throw new Error("STUB"); },
);

export const gridFocusColumnHeaderFilterSelector = createSelector(
  gridFocusStateSelector,
  (focusState: GridFocusState) => { throw new Error("STUB"); },
);

export const gridFocusColumnGroupHeaderSelector = createSelector(
  gridFocusStateSelector,
  (focusState: GridFocusState) => { throw new Error("STUB"); },
);

export const gridTabIndexStateSelector = createRootSelector(
  (state: GridStateCommunity) => { throw new Error("STUB"); },
);

export const gridTabIndexCellSelector = createSelector(
  gridTabIndexStateSelector,
  (state: GridTabIndexState) => { throw new Error("STUB"); },
);

export const gridTabIndexColumnHeaderSelector = createSelector(
  gridTabIndexStateSelector,
  (state: GridTabIndexState) => { throw new Error("STUB"); },
);

export const gridTabIndexColumnHeaderFilterSelector = createSelector(
  gridTabIndexStateSelector,
  (state: GridTabIndexState) => { throw new Error("STUB"); },
);

export const gridTabIndexColumnGroupHeaderSelector = createSelector(
  gridTabIndexStateSelector,
  (state: GridTabIndexState) => { throw new Error("STUB"); },
);
