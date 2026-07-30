import type { TreeViewParametersToStateMapper } from '../MinimalTreeViewStore';
import type { RichTreeViewStoreParameters, RichTreeViewState } from './RichTreeViewStore.types';

const deriveStateFromParameters = (parameters: RichTreeViewStoreParameters<any, any>) => ({
  isItemEditable: parameters.isItemEditable ?? false,
});

export const parametersToStateMapper: TreeViewParametersToStateMapper<
  any,
  any,
  RichTreeViewState<any, any>,
  RichTreeViewStoreParameters<any, any>
> = {
  getInitialState: (minimalInitialState, parameters) => { throw new Error("STUB"); },
  updateStateFromParameters: (newMinimalState, parameters) => {
      throw new Error("STUB");
  },
  shouldIgnoreItemsStateUpdate: () => { throw new Error("STUB"); },
};
