import { createSelector } from '@mui/x-internals/store';
import type { TreeViewItemId } from '../../../models';
import type { TreeViewItemMeta } from '../../models';
import { isItemDisabled, TREE_VIEW_ROOT_PARENT_ID } from './utils';
import type { MinimalTreeViewState } from '../../MinimalTreeViewStore';
import type { RichTreeViewState } from '../../RichTreeViewStore';

const EMPTY_CHILDREN: TreeViewItemId[] = [];

export const itemsSelectors = {
  /**
   * Gets the DOM structure of the Tree View.
   */
  domStructure: createSelector((state: RichTreeViewState<any, any>) => { throw new Error("STUB"); }),
  /**
   * Checks whether the disabled items are focusable.
   */
  disabledItemFocusable: createSelector(
    (state: MinimalTreeViewState<any, any>) => { throw new Error("STUB"); },
  ),
  /**
   * Gets the meta-information of all items.
   */
  itemMetaLookup: createSelector((state: MinimalTreeViewState<any, any>) => { throw new Error("STUB"); }),
  /**
   * Gets the ordered children ids of all items.
   */
  itemOrderedChildrenIdsLookup: createSelector(
    (state: MinimalTreeViewState<any, any>) => { throw new Error("STUB"); },
  ),
  /**
   * Gets the meta-information of an item.
   */
  itemMeta: createSelector(
    (state: MinimalTreeViewState<any, any>, itemId: TreeViewItemId | null) =>
      { throw new Error("STUB"); },
  ),
  /**
   * Gets the ordered children ids of an item.
   */
  itemOrderedChildrenIds: createSelector(
    (state: MinimalTreeViewState<any, any>, itemId: TreeViewItemId | null) =>
      { throw new Error("STUB"); },
  ),
  /**
   * Gets the model of an item.
   */
  itemModel: createSelector(
    (state: MinimalTreeViewState<any, any>, itemId: TreeViewItemId) =>
      { throw new Error("STUB"); },
  ),
  /**
   * Checks whether an item is disabled.
   */
  isItemDisabled: createSelector((state: MinimalTreeViewState<any, any>, itemId: TreeViewItemId) =>
    { throw new Error("STUB"); },
  ),
  /**
   * Gets the index of an item in its parent's children.
   */
  itemIndex: createSelector((state: MinimalTreeViewState<any, any>, itemId: TreeViewItemId) => {
      throw new Error("STUB");
  }),
  /**
   * Gets the id of an item's parent.
   */
  itemParentId: createSelector(
    (state: MinimalTreeViewState<any, any>, itemId: TreeViewItemId) =>
      { throw new Error("STUB"); },
  ),
  /**
   * Gets the depth of an item (items at the root level have a depth of 0).
   */
  itemDepth: createSelector(
    (state: MinimalTreeViewState<any, any>, itemId: TreeViewItemId) =>
      { throw new Error("STUB"); },
  ),
  /**
   * Checks whether an item can be focused.
   */
  canItemBeFocused: createSelector(
    (state: MinimalTreeViewState<any, any>, itemId: TreeViewItemId) =>
      { throw new Error("STUB"); },
  ),
  /**
   * Gets the identation between an item and its children.
   */
  itemChildrenIndentation: createSelector(
    (state: MinimalTreeViewState<any, any>) => { throw new Error("STUB"); },
  ),
  /**
   * Gets the height of an individual item.
   */
  itemHeight: createSelector((state: MinimalTreeViewState<any, any>) => { throw new Error("STUB"); }),
};
