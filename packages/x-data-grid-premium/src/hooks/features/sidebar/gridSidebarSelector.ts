import { createRootSelector, createSelector } from '@mui/x-data-grid-pro/internals';
import type { GridStatePremium } from '../../../models/gridStatePremium';

export const gridSidebarStateSelector = createRootSelector(
  (state: GridStatePremium) => { throw new Error("STUB"); },
);

export const gridSidebarOpenSelector = createSelector(
  gridSidebarStateSelector,
  (state) => { throw new Error("STUB"); },
);

export const gridSidebarContentSelector = createSelector(
  gridSidebarStateSelector,
  ({ sidebarId, labelId, value }) => { throw new Error("STUB"); },
);
