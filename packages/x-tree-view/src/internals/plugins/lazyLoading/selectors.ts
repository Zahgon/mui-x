import { createSelector } from '@mui/x-internals/store';
import type { TreeViewItemId } from '../../../models';
import { TREE_VIEW_ROOT_PARENT_ID } from '../items';
import type { RichTreeViewState } from '../../RichTreeViewStore';

export const lazyLoadingSelectors = {
  /**
   * Checks if the lazy loaded state is empty.
   */
  isEmpty: createSelector((state: RichTreeViewState<any, any>) => {
      throw new Error("STUB");
  }),
  /**
   * Checks whether an item is loading.
   */
  isItemLoading: createSelector(
    (state: RichTreeViewState<any, any>, itemId: TreeViewItemId | null) =>
      { throw new Error("STUB"); },
  ),
  /**
   * Checks whether an item has errors.
   */
  itemHasError: createSelector(
    (state: RichTreeViewState<any, any>, itemId: TreeViewItemId | null) =>
      { throw new Error("STUB"); },
  ),
  /**
   * Get an item error.
   */
  itemError: createSelector(
    (state: RichTreeViewState<any, any>, itemId: TreeViewItemId | null) =>
      { throw new Error("STUB"); },
  ),
};
