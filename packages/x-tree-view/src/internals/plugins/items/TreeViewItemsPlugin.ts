import type { TreeViewItemId, TreeViewValidItem } from '../../../models';
import { idSelectors } from '../id';
import { itemsSelectors } from './selectors';
import {
  buildItemsLookups,
  buildItemsLookupsRecursively,
  buildSiblingIndexes,
  TREE_VIEW_ROOT_PARENT_ID,
} from './utils';
import type { MinimalTreeViewStore } from '../../MinimalTreeViewStore/MinimalTreeViewStore';
import type { MinimalTreeViewParameters } from '../../MinimalTreeViewStore/MinimalTreeViewStore.types';

export class TreeViewItemsPlugin<R extends TreeViewValidItem<R>> {
  private store: MinimalTreeViewStore<R, any>;

  // We can't type `store`, otherwise we get the following TS error:
  // 'items' implicitly has type 'any' because it does not have a type annotation and is referenced directly or indirectly in its own initializer.
  constructor(store: any) {
    this.store = store;
  }

  /**
   * Determines if the items state should be rebuilt based on the new and previous parameters.
   */
  public static shouldRebuildItemsState = <R2 extends TreeViewValidItem<R2>>(
    newParameters: MinimalTreeViewParameters<R2, any>,
    previousParameters: MinimalTreeViewParameters<R2, any>,
  ): boolean => {
      throw new Error("STUB");
  };

  /**
   * Builds the state properties derived from the `items` prop.
   */
  public static buildItemsStateIfNeeded = <R2 extends TreeViewValidItem<R2>>(
    parameters: Pick<
      MinimalTreeViewParameters<R2, any>,
      // When adding new parameters here, please also update the `shouldRebuildItemsState` method accordingly.
      | 'items'
      | 'isItemDisabled'
      | 'isItemSelectionDisabled'
      | 'getItemId'
      | 'getItemLabel'
      | 'getItemChildren'
    >,
  ) => {
      throw new Error("STUB");
  };

  /**
   * Get the item with the given id.
   * When used in the Simple Tree View, it returns an object with the `id` and `label` properties.
   * @param {TreeViewItemId} itemId The id of the item to retrieve.
   * @returns {R} The item with the given id.
   */
  private getItem = (itemId: TreeViewItemId): R =>
    itemsSelectors.itemModel(this.store.state, itemId);

  /**
   * Get all the items in the same format as provided by `props.items`.
   * @returns {R[]} The items in the tree.
   */
  private getItemTree = (): R[] => {
      throw new Error("STUB");
  };

  /**
   * Get the ids of a given item's children.
   * Those ids are returned in the order they should be rendered.
   * To get the root items, pass `null` as the `itemId`.
   * @param {TreeViewItemId | null} itemId The id of the item to get the children of.
   * @returns {TreeViewItemId[]} The ids of the item's children.
   */
  private getItemOrderedChildrenIds = (itemId: TreeViewItemId | null): TreeViewItemId[] =>
    itemsSelectors.itemOrderedChildrenIds(this.store.state, itemId);

  /** * Get the id of the parent item.
   * @param {TreeViewItemId} itemId The id of the item to whose parentId we want to retrieve.
   * @returns {TreeViewItemId | null} The id of the parent item.
   */
  private getParentId = (itemId: TreeViewItemId): TreeViewItemId | null => {
      throw new Error("STUB");
  };

  /**
   * Toggle the disabled state of the item with the given id.
   * @param {object} parameters The params of the method.
   * @param {TreeViewItemId } parameters.itemId The id of the item to get the children of.
   * @param {boolean } parameters.shouldBeDisabled true if the item should be disabled.
   */
  private setIsItemDisabled = ({
    itemId,
    shouldBeDisabled,
  }: {
    itemId: TreeViewItemId;
    shouldBeDisabled?: boolean;
  }) => {
    if (!this.store.state.itemMetaLookup[itemId]) {
      return;
    }

    const itemMetaLookup = { ...this.store.state.itemMetaLookup };
    itemMetaLookup[itemId] = {
      ...itemMetaLookup[itemId],
      disabled: shouldBeDisabled ?? !itemMetaLookup[itemId].disabled,
    };

    this.store.set('itemMetaLookup', itemMetaLookup);
  };

  /**
   * Add items to the tree.
   * The items are added as children of the item with the given `parentId`, or at the root level if `parentId` is `null` or not defined.
   * @param {AddItemsParameters<R>} parameters The items to add and their position in the tree.
   */
  public addItems = ({ items, parentId = null, index }: AddItemsParameters<R>) => {
      throw new Error("STUB");
  };

  public buildPublicAPI = () => {
    return {
      getItem: this.getItem,
      getItemDOMElement: this.getItemDOMElement,
      getItemOrderedChildrenIds: this.getItemOrderedChildrenIds,
      getItemTree: this.getItemTree,
      getParentId: this.getParentId,
      setIsItemDisabled: this.setIsItemDisabled,
    };
  };

  /**
   * Get the DOM element of the item with the given id.
   * @param {TreeViewItemId} itemId The id of the item to get the DOM element of.
   * @returns {HTMLElement | null} The DOM element of the item with the given id.
   */
  public getItemDOMElement = (itemId: TreeViewItemId): HTMLElement | null => {
    const itemMeta = itemsSelectors.itemMeta(this.store.state, itemId);
    if (itemMeta == null) {
      return null;
    }

    const idAttribute = idSelectors.treeItemIdAttribute(
      this.store.state,
      itemId,
      itemMeta.idAttribute,
    );
    return document.getElementById(idAttribute);
  };

  /**
   * Add an array of items to the tree.
   * @param {SetItemChildrenParameters<R>} args The items to add to the tree and information about their ancestors.
   */
  public setItemChildren = ({
    items,
    parentId,
    getChildrenCount,
  }: {
    items: readonly R[];
    parentId: TreeViewItemId | null;
    getChildrenCount: (item: R) => number;
  }) => {
      throw new Error("STUB");
  };

  /**
   * Remove the children of an item.
   * @param {TreeViewItemId | null} parentId The id of the item to remove the children of.
   */
  public removeChildren = (parentId: TreeViewItemId | null) => {
      throw new Error("STUB");
  };

  /**
   * Callback fired when the `content` slot of a given Tree Item is clicked.
   * @param {React.MouseEvent} event The DOM event that triggered the change.
   * @param {TreeViewItemId} itemId The id of the item being clicked.
   */
  public handleItemClick = (event: React.MouseEvent, itemId: TreeViewItemId) => {
    this.store.parameters.onItemClick?.(event, itemId);
  };
}

export interface AddItemsParameters<R extends TreeViewValidItem<R>> {
  /**
   * The items to add to the tree.
   */
  items: readonly R[];
  /**
   * The id of the item to add the items to.
   * If `null` or not defined, the items are added at the root level.
   * @default null
   */
  parentId?: TreeViewItemId | null;
  /**
   * The position in the parent's children at which the items are inserted.
   * If not defined, the items are appended after the existing children.
   */
  index?: number;
}
