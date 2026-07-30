import {
  createSelector,
  createRootSelector,
  createSelectorMemoized,
} from '../../../utils/createSelector';
import type { GridStateCommunity } from '../../../models/gridStateCommunity';
import {
  gridExpandedSortedRowEntriesSelector,
  gridExpandedSortedRowIdsSelector,
  gridFilteredSortedTopLevelRowEntriesSelector,
} from '../filter/gridFilterSelector';
import { gridRowMaximumTreeDepthSelector, gridRowTreeSelector } from '../rows/gridRowsSelector';
import { getPageCount } from './gridPaginationUtils';
import type { GridRowId } from '../../../models/gridRows';

const ALL_RESULTS_PAGE_VALUE = -1;

/**
 * @category Pagination
 * @ignore - do not document.
 */
export const gridPaginationSelector = createRootSelector(
  (state: GridStateCommunity) => { throw new Error("STUB"); },
);

/**
 * @category Pagination
 * @ignore - do not document.
 */
export const gridPaginationEnabledClientSideSelector = createSelector(
  gridPaginationSelector,
  (pagination) => { throw new Error("STUB"); },
);

/**
 * Get the pagination model
 * @category Pagination
 */
export const gridPaginationModelSelector = createSelector(
  gridPaginationSelector,
  (pagination) => { throw new Error("STUB"); },
);

/**
 * Get the row count
 * @category Pagination
 */
export const gridPaginationRowCountSelector = createSelector(
  gridPaginationSelector,
  (pagination) => { throw new Error("STUB"); },
);

/**
 * Get the pagination meta
 * @category Pagination
 */
export const gridPaginationMetaSelector = createSelector(
  gridPaginationSelector,
  (pagination) => { throw new Error("STUB"); },
);

/**
 * Get the index of the page to render if the pagination is enabled
 * @category Pagination
 */
export const gridPageSelector = createSelector(
  gridPaginationModelSelector,
  (paginationModel) => { throw new Error("STUB"); },
);

/**
 * Get the maximum amount of rows to display on a single page if the pagination is enabled
 * @category Pagination
 */
export const gridPageSizeSelector = createSelector(
  gridPaginationModelSelector,
  (paginationModel) => { throw new Error("STUB"); },
);

/**
 * Get the amount of pages needed to display all the rows if the pagination is enabled
 * @category Pagination
 */
export const gridPageCountSelector = createSelector(
  gridPaginationModelSelector,
  gridPaginationRowCountSelector,
  (paginationModel, rowCount) =>
    { throw new Error("STUB"); },
);

/**
 * Get the index of the first and the last row to include in the current page if the pagination is enabled.
 * @category Pagination
 */
export const gridPaginationRowRangeSelector = createSelectorMemoized(
  gridPaginationEnabledClientSideSelector,
  gridPaginationModelSelector,
  gridRowTreeSelector,
  gridRowMaximumTreeDepthSelector,
  gridExpandedSortedRowEntriesSelector,
  gridFilteredSortedTopLevelRowEntriesSelector,
  (
    clientSidePaginationEnabled,
    paginationModel,
    rowTree,
    rowTreeDepth,
    visibleSortedRowEntries,
    visibleSortedTopLevelRowEntries,
  ) => {
      throw new Error("STUB");
  },
);

/**
 * Get the id and the model of each row to include in the current page if the pagination is enabled.
 * @category Pagination
 */
export const gridPaginatedVisibleSortedGridRowEntriesSelector = createSelectorMemoized(
  gridExpandedSortedRowEntriesSelector,
  gridPaginationRowRangeSelector,
  (visibleSortedRowEntries, paginationRange) => {
      throw new Error("STUB");
  },
);

/**
 * Get the id of each row to include in the current page if the pagination is enabled.
 * @category Pagination
 */
export const gridPaginatedVisibleSortedGridRowIdsSelector = createSelectorMemoized(
  gridExpandedSortedRowIdsSelector,
  gridPaginationRowRangeSelector,
  (visibleSortedRowIds, paginationRange) => {
      throw new Error("STUB");
  },
);

/**
 * Get the rows, range and rowIndex lookup map after filtering and sorting.
 * Does not contain the collapsed children.
 * @category Pagination
 */
export const gridVisibleRowsSelector = createSelectorMemoized(
  gridPaginationEnabledClientSideSelector,
  gridPaginationRowRangeSelector,
  gridPaginatedVisibleSortedGridRowEntriesSelector,
  gridExpandedSortedRowEntriesSelector,
  (clientPaginationEnabled, paginationRowRange, paginationRows, expandedSortedRowEntries) => {
      throw new Error("STUB");
  },
);
