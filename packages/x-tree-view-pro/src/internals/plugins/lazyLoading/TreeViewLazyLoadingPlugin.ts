import type { TreeViewEventParameters, TreeViewEventEvent } from '@mui/x-tree-view/internals';
import {
  itemsSelectors,
  lazyLoadingSelectors,
  TREE_VIEW_ROOT_PARENT_ID,
  expansionSelectors,
  selectionSelectors,
} from '@mui/x-tree-view/internals';
import type { TreeViewItemId, TreeViewValidItem } from '@mui/x-tree-view/models';
import type { DataSourceCache } from '@mui/x-tree-view/utils';
import { DataSourceCacheDefault } from '@mui/x-tree-view/utils';
import type { RichTreeViewProStore } from '../../RichTreeViewProStore/RichTreeViewProStore';
import { NestedDataManager } from './utils';
import type { DataSource } from './types';

export const TREE_VIEW_LAZY_LOADED_ITEMS_INITIAL_STATE = {
  loading: {},
  errors: {},
};

export class TreeViewLazyLoadingPlugin<R extends TreeViewValidItem<R>> {
  private store: RichTreeViewProStore<R, any>;

  private nestedDataManager = new NestedDataManager(this);

  private cache: DataSourceCache<R>;

  private isInsideOnItemsLazyLoaded = false;

  private initStarted = false;

  constructor(store: RichTreeViewProStore<R, any>) {
      throw new Error("STUB");
  }

  /**
   * Initialize lazy loading.
   * Called from the store's disposeEffect (inside a useEffect) to avoid side effects during render.
   * Uses a flag to ensure initialization only happens once (handles React 18 StrictMode double-firing effects).
   */
  public initEffect = () => {
      throw new Error("STUB");
  };

  private init = () => {
    const store = this.store;
    // eslint-disable-next-line consistent-this
    const plugin = this;

    const fetchAllExpandedItems = async () => {
        throw new Error("STUB");
    };

    fetchAllExpandedItems();
  };

  private handleBeforeItemToggleExpansion = async (
    eventParameters: TreeViewEventParameters<'beforeItemToggleExpansion'>,
    event: TreeViewEventEvent<'beforeItemToggleExpansion'>,
  ) => {
      throw new Error("STUB");
  };

  private setItemLoading = (itemId: TreeViewItemId | null, isLoading: boolean) => {
      throw new Error("STUB");
  };

  private setItemError = (itemId: TreeViewItemId | null, error: Error | null) => {
      throw new Error("STUB");
  };

  private callOnItemsLazyLoaded(items: R[], parentId: TreeViewItemId | null, isCacheHit: boolean) {
      throw new Error("STUB");
  }

  public buildPublicAPI = () => {
    return {
      updateItemChildren: this.updateItemChildren,
    };
  };

  /**
   * Method used for fetching multiple items concurrently.
   * Only relevant for lazy-loaded tree views.
   *
   * @param {TreeViewItemId[]} parentIds The ids of the items to fetch the children of.
   * @returns {Promise<void>} The promise resolved when the items are fetched.
   */
  public fetchItems = (parentIds: TreeViewItemId[]) => { throw new Error("STUB"); };

  /**
   * Method used for updating an item's children.
   * Only relevant for lazy-loaded tree views.
   *
   * @param {TreeViewItemId | null} itemId The id of the item to update the children of. If null is passed, it will update the root's children.
   * @returns {Promise<void>} The promise resolved when the items are fetched.
   */
  public updateItemChildren = (itemId: TreeViewItemId | null) =>
    { throw new Error("STUB"); };

  /**
   * Method used for fetching an item's children.
   * Only relevant for lazy-loaded tree views.
   *
   * @param {object} parameters The parameters of the method.
   * @param {TreeViewItemId} parameters.itemId The The id of the item to fetch the children of.
   * @param {boolean} [parameters.forceRefresh] Whether to force a refresh of the children when the cache already contains some data.
   * @returns {Promise<void>} The promise resolved when the items are fetched.
   */
  private getItemId = (item: R): TreeViewItemId =>
    this.store.parameters.getItemId
      ? this.store.parameters.getItemId(item)
      : (item as unknown as { id: string }).id;

  private getInlineChildren = (item: R): R[] =>
    { throw new Error("STUB"); };

  private forEachInlineChildren = (
    items: readonly R[],
    visit: (itemId: TreeViewItemId, children: R[]) => void,
  ) => {
      throw new Error("STUB");
  };

  private cacheInlineChildren = (items: readonly R[]) => {
      throw new Error("STUB");
  };

  private processNestedItemChildren = (items: R[]) => {
      throw new Error("STUB");
  };

  public fetchItemChildren = async ({
    itemId,
    forceRefresh,
  }: {
    itemId: TreeViewItemId | null;
    forceRefresh?: boolean;
  }) => {
      throw new Error("STUB");
  };
}

function getExpandableItemsFromDataSource(
  store: RichTreeViewProStore<any, any>,
  dataSource: DataSource<any>,
): TreeViewItemId[] {
    throw new Error("STUB");
}
