import type { TreeViewCancellableEvent, TreeViewItemId } from '../../../models';
import { expansionSelectors } from '../expansion';
import { focusSelectors } from './selectors';
import { itemsSelectors } from '../items';
import type { MinimalTreeViewStore } from '../../MinimalTreeViewStore';
import {
  getFirstNavigableItem,
  getNextNavigableItem,
  getPreviousNavigableItem,
} from '../../utils/tree';

export class TreeViewFocusPlugin {
  private store: MinimalTreeViewStore<any, any>;

  // We can't type `store`, otherwise we get the following TS error:
  // 'focus' implicitly has type 'any' because it does not have a type annotation and is referenced directly or indirectly in its own initializer.
  constructor(store: any) {
      throw new Error("STUB");
  }

  private setFocusedItemId = (itemId: TreeViewItemId | null) => {
      throw new Error("STUB");
  };

  private applyItemFocus = (event: React.SyntheticEvent | null, itemId: TreeViewItemId) => {
      throw new Error("STUB");
  };

  public buildPublicAPI = () => {
    return {
      focusItem: this.focusItem,
    };
  };

  /**
   * Focus the item with the given id.
   *
   * If the item is the child of a collapsed item, then this method will do nothing.
   * Make sure to expand the ancestors of the item before calling this method if needed.
   * @param {React.SyntheticEvent | null} event The DOM event that triggered the change.
   * @param {TreeViewItemId} itemId The id of the item to focus.
   */
  public focusItem = (event: React.SyntheticEvent | null, itemId: TreeViewItemId) => {
    // If we receive an itemId, and it is visible, the focus will be set to it
    const itemMeta = itemsSelectors.itemMeta(this.store.state, itemId);
    const isItemVisible =
      itemMeta &&
      (itemMeta.parentId == null ||
        expansionSelectors.isItemExpanded(this.store.state, itemMeta.parentId));

    if (isItemVisible) {
      this.applyItemFocus(event, itemId);
    }
  };

  /**
   * Remove the focus from the currently focused item (both from the internal state and the DOM).
   */
  public removeFocusedItem = () => {
    const focusedItemId = focusSelectors.focusedItemId(this.store.state);
    if (focusedItemId == null) {
      return;
    }

    const itemMeta = itemsSelectors.itemMeta(this.store.state, focusedItemId);
    if (itemMeta) {
      const itemElement = this.store.items.getItemDOMElement(focusedItemId);
      if (itemElement) {
        itemElement.blur();
      }
    }

    this.setFocusedItemId(null);
  };

  /**
   * Event handler to fire when the `root` slot of the Tree View is focused.
   * @param {React.MouseEvent} event The DOM event that triggered the change.
   */
  public handleRootFocus = (
    event: React.FocusEvent<HTMLUListElement> & TreeViewCancellableEvent,
  ) => {
      throw new Error("STUB");
  };

  /**
   * Event handler to fire when the `root` slot of the Tree View is blurred.
   * @param {React.MouseEvent} event The DOM event that triggered the change.
   */
  public handleRootBlur = (
    event: React.FocusEvent<HTMLUListElement> & TreeViewCancellableEvent,
  ) => {
      throw new Error("STUB");
  };
}
