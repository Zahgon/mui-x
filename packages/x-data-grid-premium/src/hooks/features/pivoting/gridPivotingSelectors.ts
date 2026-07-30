import { createSelector, createRootSelector } from '@mui/x-data-grid-pro/internals';
import type { GridStatePremium } from '../../../models/gridStatePremium';
import { gridSidebarStateSelector, GridSidebarValue } from '../sidebar';

const gridPivotingStateSelector = createRootSelector((state: GridStatePremium) => { throw new Error("STUB"); });

export const gridPivotPanelOpenSelector = createSelector(
  gridSidebarStateSelector,
  (sidebar) => { throw new Error("STUB"); },
);

export const gridPivotModelSelector = createSelector(
  gridPivotingStateSelector,
  (pivoting) => { throw new Error("STUB"); },
);

export const gridPivotPropsOverridesSelector = createSelector(
  gridPivotingStateSelector,
  (pivoting) => { throw new Error("STUB"); },
);

export {
  gridPivotActiveSelector,
  gridPivotInitialColumnsSelector,
} from '@mui/x-data-grid/internals';
