import type * as React from 'react';
import { createSelector, useStore } from '@mui/x-internals/store';
import type {
  TreeViewItemId,
  TreeViewCancellableEvent,
  TreeViewCancellableEventHandler,
} from '../../../models';
import { useTreeViewContext } from '../../TreeViewProvider';
import type { TreeViewAnyStore, TreeViewItemPlugin } from '../../models';
import { itemsSelectors } from '../items/selectors';
import { selectionSelectors } from './selectors';
import type { MinimalTreeViewState } from '../../MinimalTreeViewStore';

const selectorCheckboxSelectionStatus = createSelector(
  (state: MinimalTreeViewState<any, any>, itemId: TreeViewItemId) => {
        throw new Error("STUB");
    },
);

export const useSelectionItemPlugin: TreeViewItemPlugin = ({ props }) => {
    throw new Error("STUB");
};

interface UseTreeItemRootSlotPropsFromSelection {
  'aria-checked': React.AriaAttributes['aria-checked'];
}

interface UseTreeItemCheckboxSlotPropsFromSelection {
  visible?: boolean;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  tabIndex?: -1;
  onChange?: TreeViewCancellableEventHandler<React.ChangeEvent<HTMLInputElement>>;
}

declare module '@mui/x-tree-view/useTreeItem' {
  interface UseTreeItemRootSlotOwnProps extends UseTreeItemRootSlotPropsFromSelection {}

  interface UseTreeItemCheckboxSlotOwnProps extends UseTreeItemCheckboxSlotPropsFromSelection {}
}
