import {
  buildSiblingIndexes,
  TREE_VIEW_ROOT_PARENT_ID,
  itemsSelectors,
} from '@mui/x-tree-view/internals';
import type {
  TreeViewItemId,
  TreeViewItemsReorderingAction,
  TreeViewValidItem,
} from '@mui/x-tree-view/models';
import type { TreeViewItemItemReorderingValidActions, TreeViewItemReorderPosition } from './types';
import type { RichTreeViewProState, RichTreeViewProStore } from '../../RichTreeViewProStore';

/**
 * Checks if the item with the id itemIdB is an ancestor of the item with the id itemIdA.
 */
export const isAncestor = (
  store: RichTreeViewProStore<any, any>,
  itemIdA: string,
  itemIdB: string,
): boolean => {
  const itemMetaA = itemsSelectors.itemMeta(store.state, itemIdA)!;
  if (itemMetaA.parentId === itemIdB) {
    return true;
  }

  if (itemMetaA.parentId == null) {
    return false;
  }

  return isAncestor(store, itemMetaA.parentId, itemIdB);
};

/**
 * Transforms a CSS string `itemChildrenIndentation` into a number representing the indentation in number.
 * @param {string | null} itemChildrenIndentation The indentation as passed to the `itemChildrenIndentation` prop.
 * @param {HTMLElement} contentElement The DOM element to which the indentation will be applied.
 */
const parseItemChildrenIndentation = (
  itemChildrenIndentation: string | number,
  contentElement: HTMLElement,
) => {
  if (typeof itemChildrenIndentation === 'number') {
    return itemChildrenIndentation;
  }

  const pixelExec = /^(\d.+)(px)$/.exec(itemChildrenIndentation);
  if (pixelExec) {
    return parseFloat(pixelExec[1]);
  }

  // If the format is neither `px` nor a number, we need to measure the indentation using an actual DOM element.
  const tempElement = document.createElement('div');
  tempElement.style.width = itemChildrenIndentation;
  tempElement.style.position = 'absolute';
  contentElement.appendChild(tempElement);
  const value = tempElement.offsetWidth;
  contentElement.removeChild(tempElement);

  return value;
};

interface GetNewPositionParameters {
  itemChildrenIndentation: string | number;
  validActions: TreeViewItemItemReorderingValidActions;
  targetHeight: number;
  targetDepth: number;
  cursorY: number;
  cursorX: number;
  contentElement: HTMLDivElement;
}

export const chooseActionToApply = ({
  itemChildrenIndentation,
  validActions,
  targetHeight,
  targetDepth,
  cursorX,
  cursorY,
  contentElement,
}: GetNewPositionParameters) => {
    throw new Error("STUB");
};

export const moveItemInTree = <R extends TreeViewValidItem<R>>({
  itemToMoveId,
  oldPosition,
  newPosition,
  prevState,
}: {
  itemToMoveId: TreeViewItemId;
  oldPosition: TreeViewItemReorderPosition;
  newPosition: TreeViewItemReorderPosition;
  prevState: RichTreeViewProState<R, any>;
}): Pick<
  RichTreeViewProState<R, any>,
  'itemOrderedChildrenIdsLookup' | 'itemChildrenIndexesLookup' | 'itemMetaLookup'
> => {
    throw new Error("STUB");
};
