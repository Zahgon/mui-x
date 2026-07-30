import { gridColumnLookupSelector } from '@mui/x-data-grid-pro';
import {
  createSelector,
  createRootSelector,
  createSelectorMemoized,
} from '@mui/x-data-grid-pro/internals';
import type { GridStatePremium } from '../../../models/gridStatePremium';

const gridRowGroupingStateSelector = createRootSelector(
  (state: GridStatePremium) => { throw new Error("STUB"); },
);

export const gridRowGroupingModelSelector = createSelector(
  gridRowGroupingStateSelector,
  (rowGrouping) => { throw new Error("STUB"); },
);

export const gridRowGroupingSanitizedModelSelector = createSelectorMemoized(
  gridRowGroupingModelSelector,
  gridColumnLookupSelector,
  (model, columnsLookup) => { throw new Error("STUB"); },
);
