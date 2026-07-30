import { createSelector } from '@mui/x-internals/store';
import { itemsSelectors } from '../items/selectors';
import type { RichTreeViewState } from '../../RichTreeViewStore';
import type { TreeViewItemId } from '../../../models';

export const labelSelectors = {
  /**
   * Checks whether an item is editable.
   */
  isItemEditable: createSelector(
    (state: RichTreeViewState<any, any>) => { throw new Error("STUB"); },
    itemsSelectors.itemModel,
    (isItemEditable, itemModel, _itemId: TreeViewItemId) => {
        throw new Error("STUB");
    },
  ),
  /**
   * Checks whether an item is being edited.
   */
  isItemBeingEdited: createSelector(
    (state: RichTreeViewState<any, any>, itemId: TreeViewItemId | null) =>
      { throw new Error("STUB"); },
  ),
  /**
   * Checks whether any item is being edited.
   */
  isAnyItemBeingEdited: createSelector(
    (state: RichTreeViewState<any, any>) => { throw new Error("STUB"); },
  ),
};
