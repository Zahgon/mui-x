import { createSelector, createSelectorMemoized } from '@mui/x-internals/store';
import { itemsSelectors, labelSelectors } from '@mui/x-tree-view/internals';
import type { TreeViewItemId } from '@mui/x-tree-view/models';
import type { RichTreeViewProState } from '../../RichTreeViewProStore';

export const itemsReorderingSelectors = {
  /**
   * Gets the properties of the current reordering.
   */
  currentReorder: createSelector((state: RichTreeViewProState<any, any>) => { throw new Error("STUB"); }),
  /**
   * Gets the properties of the dragged item.
   */
  draggedItemProperties: createSelectorMemoized(
    (state: RichTreeViewProState<any, any>) => { throw new Error("STUB"); },
    itemsSelectors.itemMetaLookup,
    (currentReorder, itemMetaLookup, itemId: TreeViewItemId) => {
        throw new Error("STUB");
    },
  ),
  /**
   * Checks whether an item is being dragged.
   */
  isDragging: createSelector(
    (state: RichTreeViewProState<any, any>) => { throw new Error("STUB"); },
  ),
  /**
   * Checks whether an item can be reordered.
   */
  canItemBeReordered: createSelector(
    (state: RichTreeViewProState<any, any>) => { throw new Error("STUB"); },
    labelSelectors.isAnyItemBeingEdited,
    (isItemReorderable, isEditing, itemId: TreeViewItemId) =>
      { throw new Error("STUB"); },
  ),
};
