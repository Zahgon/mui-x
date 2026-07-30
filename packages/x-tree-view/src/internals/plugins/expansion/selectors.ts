import { createSelector, createSelectorMemoized } from '@mui/x-internals/store';
import type { TreeViewItemId } from '../../../models';
import type { MinimalTreeViewState } from '../../MinimalTreeViewStore';
import { itemsSelectors } from '../items/selectors';
import { TREE_VIEW_ROOT_PARENT_ID } from '../items';

const expandedItemMapSelector = createSelectorMemoized(
  (state: MinimalTreeViewState<any, any>) => { throw new Error("STUB"); },
  (expandedItems) => {
      throw new Error("STUB");
  },
);

export const expansionSelectors = {
  /**
   * Gets the expanded items as provided to the component.
   */
  expandedItemsRaw: createSelector((state: MinimalTreeViewState<any, any>) => { throw new Error("STUB"); }),
  /**
   * Gets the expanded items as a Map.
   */
  expandedItemsMap: expandedItemMapSelector,
  /**
   * Gets the items to render as a flat list (the descendants of an expanded item are listed as siblings of the item).
   */
  flatList: createSelectorMemoized(
    itemsSelectors.itemOrderedChildrenIdsLookup,
    expandedItemMapSelector,
    (itemOrderedChildrenIds, expandedItemsMap) => {
        throw new Error("STUB");
    },
  ),
  /**
   * Gets the slot that triggers the item's expansion when clicked.
   */
  triggerSlot: createSelector((state: MinimalTreeViewState<any, any>) => { throw new Error("STUB"); }),
  /**
   * Checks whether an item is expanded.
   */
  isItemExpanded: createSelector(
    expandedItemMapSelector,
    (expandedItemsMap, itemId: TreeViewItemId) => { throw new Error("STUB"); },
  ),
  /**
   * Checks whether an item is expandable.
   */
  isItemExpandable: createSelector(
    itemsSelectors.itemMeta,
    (itemMeta, _itemId: TreeViewItemId) => { throw new Error("STUB"); },
  ),
};
