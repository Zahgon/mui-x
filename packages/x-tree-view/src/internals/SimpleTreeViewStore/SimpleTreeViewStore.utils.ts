import type { TreeViewParametersToStateMapper } from '../MinimalTreeViewStore';
import type {
  InnerSimpleTreeViewParameters,
  SimpleTreeViewState,
} from './SimpleTreeViewStore.types';

export const parametersToStateMapper: TreeViewParametersToStateMapper<
  any,
  any,
  SimpleTreeViewState<any>,
  InnerSimpleTreeViewParameters<any>
> = {
  getInitialState: (minimalInitialState) => { throw new Error("STUB"); },
  updateStateFromParameters: (newMinimalState) => { throw new Error("STUB"); },
  shouldIgnoreItemsStateUpdate: () => { throw new Error("STUB"); },
};
