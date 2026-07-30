import { createSelector, createSelectorMemoized } from '@mui/x-internals/store';
import type { TreeViewItemId } from '../../../models';
import type { MinimalTreeViewState } from '../../MinimalTreeViewStore';
import { itemsSelectors } from '../items/selectors';

const selectedItemsSelector = createSelectorMemoized(
  (state: MinimalTreeViewState<any, any>) => { throw new Error("STUB"); },
  (selectedItemsRaw) => {
      throw new Error("STUB");
  },
);

const selectedItemsMapSelector = createSelectorMemoized(selectedItemsSelector, (selectedItems) => {
    throw new Error("STUB");
});

const isItemSelectableSelector = createSelector(
  (state: MinimalTreeViewState<any, any>, itemId: TreeViewItemId) =>
    { throw new Error("STUB"); },
);

export const selectionSelectors = {
  /**
   * Gets the selected items as provided to the component.
   */
  selectedItemsRaw: createSelector((state: MinimalTreeViewState<any, any>) => { throw new Error("STUB"); }),
  /**
   * Gets the selected items as an array.
   */
  selectedItems: selectedItemsSelector,
  /**
   * Gets the selected items as a Map.
   */
  selectedItemsMap: selectedItemsMapSelector,
  /**
   * Checks whether selection is enabled.
   */
  enabled: createSelector((state: MinimalTreeViewState<any, any>) => { throw new Error("STUB"); }),
  /**
   * Checks whether multi selection is enabled.
   */
  isMultiSelectEnabled: createSelector(
    (state: MinimalTreeViewState<any, any>) => { throw new Error("STUB"); },
  ),
  /**
   * Checks whether checkbox selection is enabled.
   */
  isCheckboxSelectionEnabled: createSelector(
    (state: MinimalTreeViewState<any, any>) => { throw new Error("STUB"); },
  ),
  /**
   * Gets the selection propagation rules.
   */
  propagationRules: createSelector(
    (state: MinimalTreeViewState<any, any>) => { throw new Error("STUB"); },
  ),
  /**
   * Checks whether an item is selected.
   */
  isItemSelected: createSelector(
    selectedItemsMapSelector,
    (selectedItemsMap, itemId: TreeViewItemId) => { throw new Error("STUB"); },
  ),
  /**
   * Checks whether the selection feature is enabled for an item.
   * Returns `true` when selection is enabled on the Tree View and the item is selectable (even if the item is disabled).
   */
  isFeatureEnabledForItem: createSelector(
    isItemSelectableSelector,
    (state: MinimalTreeViewState<any, any>) => { throw new Error("STUB"); },
    (isItemSelectable, isSelectionEnabled, _itemId: TreeViewItemId) =>
      { throw new Error("STUB"); },
  ),
  /**
   * Checks whether an item can be selected (if selection is enabled, if the item is not disabled, and if the item is selectable).
   */
  canItemBeSelected: createSelector(
    itemsSelectors.isItemDisabled,
    isItemSelectableSelector,
    (state: MinimalTreeViewState<any, any>) => { throw new Error("STUB"); },
    (isItemDisabled, isItemSelectable, isSelectionEnabled, _itemId: TreeViewItemId) =>
      { throw new Error("STUB"); },
  ),
  /**
   * Checks whether an item is selectable based on the `isItemSelectionDisabled` prop.
   */
  isItemSelectable: isItemSelectableSelector,
};
