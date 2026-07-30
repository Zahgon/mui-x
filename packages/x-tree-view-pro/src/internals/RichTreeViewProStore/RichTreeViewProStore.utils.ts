import type { TreeViewParametersToStateMapper } from '@mui/x-tree-view/internals';
import { ExtendableRichTreeViewStore } from '@mui/x-tree-view/internals';
import type {
  RichTreeViewProStoreParameters,
  RichTreeViewProState,
} from './RichTreeViewProStore.types';
import { TREE_VIEW_LAZY_LOADED_ITEMS_INITIAL_STATE } from '../plugins/lazyLoading';

const DEFAULT_IS_ITEM_REORDERABLE_WHEN_ENABLED = () => { throw new Error("STUB"); };
const DEFAULT_IS_ITEM_REORDERABLE_WHEN_DISABLED = () => { throw new Error("STUB"); };
const DEFAULT_ITEM_HEIGHT = 32;

const deriveStateFromParameters = (parameters: RichTreeViewProStoreParameters<any, any>) => ({
  currentReorder: null,
  isItemReorderable: parameters.itemsReordering
    ? (parameters.isItemReorderable ?? DEFAULT_IS_ITEM_REORDERABLE_WHEN_ENABLED)
    : DEFAULT_IS_ITEM_REORDERABLE_WHEN_DISABLED,
  domStructure: parameters.domStructure ?? 'flat',
  virtualization: !(parameters.disableVirtualization ?? false),
  itemHeight: parameters.itemHeight === undefined ? DEFAULT_ITEM_HEIGHT : parameters.itemHeight,
});

export const parametersToStateMapper: TreeViewParametersToStateMapper<
  any,
  any,
  RichTreeViewProState<any, any>,
  RichTreeViewProStoreParameters<any, any>
> = {
  getInitialState: (minimalInitialState, parameters) => { throw new Error("STUB"); },
  updateStateFromParameters: (newMinimalState, parameters, updateModel) => {
      throw new Error("STUB");
  },
  shouldIgnoreItemsStateUpdate: (parameters) => { throw new Error("STUB"); },
};
