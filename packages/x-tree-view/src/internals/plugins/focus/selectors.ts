import { createSelector, createSelectorMemoized } from '@mui/x-internals/store';
import { selectionSelectors } from '../selection/selectors';
import { itemsSelectors } from '../items/selectors';
import { isItemDisabled } from '../items/utils';
import { expansionSelectors } from '../expansion/selectors';
import type { MinimalTreeViewState } from '../../MinimalTreeViewStore';
import type { TreeViewItemId } from '../../../models';

const defaultFocusableItemIdSelector = createSelectorMemoized(
  selectionSelectors.selectedItems,
  expansionSelectors.expandedItemsMap,
  itemsSelectors.itemMetaLookup,
  itemsSelectors.disabledItemFocusable,
  (state: MinimalTreeViewState<any, any>) => { throw new Error("STUB"); },
  (selectedItems, expandedItemsMap, itemMetaLookup, disabledItemsFocusable, orderedRootItemIds) => {
      throw new Error("STUB");
  },
);

export const focusSelectors = {
  /**
   * Gets the item that should be sequentially focusable (usually with the Tab key).
   * At any point in time, there is a single item that can be sequentially focused in the Tree View.
   * This item is the first selected item (that is both visible and navigable), if any, or the first navigable item if no item is selected.
   */
  defaultFocusableItemId: defaultFocusableItemIdSelector,
  /**
   * Checks whether an item is the default focusable item.
   */
  isItemTheDefaultFocusableItem: createSelector(
    defaultFocusableItemIdSelector,
    (defaultFocusableItemId, itemId) => { throw new Error("STUB"); },
  ),
  /**
   * Gets the id of the item that is currently focused.
   */
  focusedItemId: createSelector((state: MinimalTreeViewState<any, any>) => { throw new Error("STUB"); }),
  /**
   * Checks whether an item is focused.
   */
  isItemFocused: createSelector(
    (state: MinimalTreeViewState<any, any>, itemId: TreeViewItemId) =>
      { throw new Error("STUB"); },
  ),
};
