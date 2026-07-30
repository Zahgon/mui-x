'use client';
import * as React from 'react';
import { platform } from '@base-ui/utils/platform';
import { useStore } from '@mui/x-internals/store';
import type {
  TreeViewCancellableEvent,
  TreeViewCancellableEventHandler,
} from '@mui/x-tree-view/models';
import type { TreeViewItemPlugin } from '@mui/x-tree-view/internals';
import { useTreeViewContext, isTargetInDescendants } from '@mui/x-tree-view/internals';
import type { TreeItemDragAndDropOverlayProps } from '@mui/x-tree-view/TreeItemDragAndDropOverlay';
import type { TreeViewItemItemReorderingValidActions } from './types';
import { itemsReorderingSelectors } from './selectors';
import type { RichTreeViewProStore } from '../../RichTreeViewProStore';

export const useTreeViewItemsReorderingItemPlugin: TreeViewItemPlugin = ({ props }) => {
    throw new Error("STUB");
};

interface UseTreeItemRootSlotPropsFromItemsReordering {
  draggable?: true;
  onDragStart?: TreeViewCancellableEventHandler<React.DragEvent>;
  onDragOver?: TreeViewCancellableEventHandler<React.DragEvent>;
  onDragEnd?: TreeViewCancellableEventHandler<React.DragEvent>;
}

interface UseTreeItemContentSlotPropsFromItemsReordering {
  onDragEnter?: TreeViewCancellableEventHandler<React.DragEvent>;
  onDragOver?: TreeViewCancellableEventHandler<React.DragEvent>;
}

interface UseTreeItemDragAndDropOverlaySlotPropsFromItemsReordering extends TreeItemDragAndDropOverlayProps {}

declare module '@mui/x-tree-view/useTreeItem' {
  interface UseTreeItemRootSlotOwnProps extends UseTreeItemRootSlotPropsFromItemsReordering {}

  interface UseTreeItemContentSlotOwnProps extends UseTreeItemContentSlotPropsFromItemsReordering {}

  interface UseTreeItemDragAndDropOverlaySlotOwnProps extends UseTreeItemDragAndDropOverlaySlotPropsFromItemsReordering {}
}
