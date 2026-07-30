import { createSelector, createRootSelector } from '@mui/x-data-grid/internals';
import type { GridStatePro } from '../../../models/gridStatePro';

export const gridColumnReorderSelector = createRootSelector(
  (state: GridStatePro) => { throw new Error("STUB"); },
);

export const gridColumnReorderDragColSelector = createSelector(
  gridColumnReorderSelector,
  (columnReorder) => { throw new Error("STUB"); },
);
