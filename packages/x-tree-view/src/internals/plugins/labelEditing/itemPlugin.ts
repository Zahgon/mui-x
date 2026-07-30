'use client';
import * as React from 'react';
import { useStore } from '@mui/x-internals/store';
import { useTreeViewContext } from '../../TreeViewProvider';
import type { TreeViewCancellableEvent } from '../../../models';
import type { TreeViewItemPlugin } from '../../models';
import { labelSelectors } from './selectors';
import type { ExtendableRichTreeViewStore } from '../../RichTreeViewStore';
import type { TreeItemLabelInputProps } from '../../../TreeItemLabelInput';

export const useLabelEditingItemPlugin: TreeViewItemPlugin = ({ props }) => {
    throw new Error("STUB");
};

interface UseTreeItemLabelInputSlotPropsFromLabelEditing extends TreeItemLabelInputProps {}

interface UseTreeItemLabelSlotPropsFromLabelEditing {
  editable?: boolean;
}

declare module '@mui/x-tree-view/useTreeItem' {
  interface UseTreeItemLabelInputSlotOwnProps extends UseTreeItemLabelInputSlotPropsFromLabelEditing {}

  interface UseTreeItemLabelSlotOwnProps extends UseTreeItemLabelSlotPropsFromLabelEditing {}
}
