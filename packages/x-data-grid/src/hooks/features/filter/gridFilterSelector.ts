import { isObjectEmpty } from '@mui/x-internals/isObjectEmpty';
import {
  createSelector,
  createRootSelector,
  createSelectorMemoized,
} from '../../../utils/createSelector';
import type { GridStateCommunity } from '../../../models/gridStateCommunity';
import type { GridRowEntry, GridRowId, GridValidRowModel } from '../../../models/gridRows';
import type { GridFilterItem } from '../../../models/gridFilterItem';
import { gridSortedRowEntriesSelector } from '../sorting/gridSortingSelector';
import { gridColumnLookupSelector } from '../columns/gridColumnsSelector';
import { gridRowMaximumTreeDepthSelector, gridRowTreeSelector } from '../rows/gridRowsSelector';

/**
 * @category Filtering
 */
const gridFilterStateSelector = createRootSelector((state: GridStateCommunity) => { throw new Error("STUB"); });

/**
 * Get the current filter model.
 * @category Filtering
 */
export const gridFilterModelSelector = createSelector(
  gridFilterStateSelector,
  (filterState) => { throw new Error("STUB"); },
);

/**
 * Get the current quick filter values.
 * @category Filtering
 */
export const gridQuickFilterValuesSelector = createSelector(
  gridFilterModelSelector,
  (filterModel) => { throw new Error("STUB"); },
);

/**
 * @category Visible rows
 * @ignore - do not document.
 */
export const gridVisibleRowsLookupSelector = createRootSelector(
  (state: GridStateCommunity) => { throw new Error("STUB"); },
);

/**
 * @category Filtering
 * @ignore - do not document.
 */
export const gridFilteredRowsLookupSelector = createSelector(
  gridFilterStateSelector,
  (filterState) => { throw new Error("STUB"); },
);

/**
 * @category Filtering
 * @ignore - do not document.
 */
export const gridFilteredChildrenCountLookupSelector = createSelector(
  gridFilterStateSelector,
  (filterState) => { throw new Error("STUB"); },
);

/**
 * @category Filtering
 * @ignore - do not document.
 */
export const gridFilteredDescendantCountLookupSelector = createSelector(
  gridFilterStateSelector,
  (filterState) => { throw new Error("STUB"); },
);

/**
 * Get the id and the model of the rows accessible after the filtering process.
 * Does not contain the collapsed children.
 * @category Filtering
 */
export const gridExpandedSortedRowEntriesSelector = createSelectorMemoized(
  gridVisibleRowsLookupSelector,
  gridSortedRowEntriesSelector,
  (visibleRowsLookup, sortedRows) => {
      throw new Error("STUB");
  },
);

/**
 * Get the id of the rows accessible after the filtering process.
 * Does not contain the collapsed children.
 * @category Filtering
 */
export const gridExpandedSortedRowIdsSelector = createSelectorMemoized(
  gridExpandedSortedRowEntriesSelector,
  (visibleSortedRowEntries) => { throw new Error("STUB"); },
);

/**
 * Get the id and the model of the rows accessible after the filtering process.
 * Contains the collapsed children.
 * @category Filtering
 */
export const gridFilteredSortedRowEntriesSelector = createSelectorMemoized(
  gridFilteredRowsLookupSelector,
  gridSortedRowEntriesSelector,
  (filteredRowsLookup, sortedRows) =>
    { throw new Error("STUB"); },
);

/**
 * Get the id of the rows accessible after the filtering process.
 * Contains the collapsed children.
 * @category Filtering
 */
export const gridFilteredSortedRowIdsSelector = createSelectorMemoized(
  gridFilteredSortedRowEntriesSelector,
  (filteredSortedRowEntries) => { throw new Error("STUB"); },
);

/**
 * Get the ids to position in the current tree level lookup of the rows accessible after the filtering process.
 * Does not contain the collapsed children.
 * @category Filtering
 * @ignore - do not document.
 */
export const gridExpandedSortedRowTreeLevelPositionLookupSelector = createSelectorMemoized(
  gridExpandedSortedRowIdsSelector,
  gridRowTreeSelector,
  (visibleSortedRowIds, rowTree) => {
      throw new Error("STUB");
  },
);

/**
 * Get the id and the model of the rows per depth level, accessible after the filtering process.
 * Returns an array of arrays, where each array index contains the rows for the depth level equal to the index.
 * @category Filtering
 */
export const gridFilteredSortedDepthRowEntriesSelector = createSelectorMemoized(
  gridFilteredSortedRowEntriesSelector,
  gridRowTreeSelector,
  gridRowMaximumTreeDepthSelector,
  (sortedRows, rowTree, rowTreeDepth) => {
      throw new Error("STUB");
  },
);

/**
 * Get the id and the model of the top level rows accessible after the filtering process.
 * @category Filtering
 */
export const gridFilteredSortedTopLevelRowEntriesSelector = createSelector(
  gridFilteredSortedDepthRowEntriesSelector,
  (filteredSortedDepthRows) => { throw new Error("STUB"); },
);

/**
 * Get the amount of rows accessible after the filtering process.
 * @category Filtering
 */
export const gridExpandedRowCountSelector = createSelector(
  gridExpandedSortedRowEntriesSelector,
  (visibleSortedRows) => { throw new Error("STUB"); },
);

/**
 * Get the amount of top level rows accessible after the filtering process.
 * @category Filtering
 */
export const gridFilteredTopLevelRowCountSelector = createSelector(
  gridFilteredSortedTopLevelRowEntriesSelector,
  (visibleSortedTopLevelRows) => { throw new Error("STUB"); },
);

/**
 * Get the amount of rows accessible after the filtering process.
 * Includes top level and descendant rows.
 * @category Filtering
 */
export const gridFilteredRowCountSelector = createSelector(
  gridFilteredSortedRowEntriesSelector,
  (filteredSortedRowEntries) => { throw new Error("STUB"); },
);

/**
 * Get the amount of descendant rows accessible after the filtering process.
 * @category Filtering
 */
export const gridFilteredDescendantRowCountSelector = createSelector(
  gridFilteredRowCountSelector,
  gridFilteredTopLevelRowCountSelector,
  (totalRowCount, topLevelRowCount) => { throw new Error("STUB"); },
);

/**
 * @category Filtering
 * @ignore - do not document.
 */
export const gridFilterActiveItemsSelector = createSelectorMemoized(
  gridFilterModelSelector,
  gridColumnLookupSelector,
  (filterModel, columnLookup) =>
    { throw new Error("STUB"); },
);

export type GridFilterActiveItemsLookup = { [field: string]: GridFilterItem[] };

/**
 * @category Filtering
 * @ignore - do not document.
 */
export const gridFilterActiveItemsLookupSelector = createSelectorMemoized(
  gridFilterActiveItemsSelector,
  (activeFilters) => {
      throw new Error("STUB");
  },
);

/**
 * Get the index lookup for expanded (visible) rows only.
 * Does not include collapsed children.
 * @ignore - do not document.
 */
export const gridExpandedSortedRowIndexLookupSelector = createSelectorMemoized(
  gridExpandedSortedRowIdsSelector,
  (expandedSortedIds) => {
      throw new Error("STUB");
  },
);
