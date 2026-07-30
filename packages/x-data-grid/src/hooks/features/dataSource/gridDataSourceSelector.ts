import { gridFilterModelSelector } from '../filter/gridFilterSelector';
import { gridSortModelSelector } from '../sorting/gridSortingSelector';
import { gridPaginationModelSelector } from '../pagination/gridPaginationSelector';
import { createSelector } from '../../../utils/createSelector';

export const gridGetRowsParamsSelector = createSelector(
  gridFilterModelSelector,
  gridSortModelSelector,
  gridPaginationModelSelector,
  (filterModel, sortModel, paginationModel) => { throw new Error("STUB"); },
);
