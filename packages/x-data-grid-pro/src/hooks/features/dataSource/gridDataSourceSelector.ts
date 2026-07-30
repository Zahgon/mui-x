import { createSelector, createRootSelector } from '@mui/x-data-grid/internals';
import type { GridRowId } from '@mui/x-data-grid';
import type { GridStatePro } from '../../../models/gridStatePro';

export const gridDataSourceStateSelector = createRootSelector(
  (state: GridStatePro) => { throw new Error("STUB"); },
);

export const gridDataSourceLoadingSelector = createSelector(
  gridDataSourceStateSelector,
  (dataSource) => { throw new Error("STUB"); },
);

export const gridDataSourceLoadingIdSelector = createSelector(
  gridDataSourceStateSelector,
  (dataSource, id: GridRowId) => { throw new Error("STUB"); },
);

export const gridDataSourceErrorsSelector = createSelector(
  gridDataSourceStateSelector,
  (dataSource) => { throw new Error("STUB"); },
);

export const gridDataSourceErrorSelector = createSelector(
  gridDataSourceStateSelector,
  (dataSource, id: GridRowId) => { throw new Error("STUB"); },
);
