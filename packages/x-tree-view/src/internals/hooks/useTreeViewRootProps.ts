'use client';
import type * as React from 'react';
import { useStore } from '@mui/x-internals/store';
import type { EventHandlers } from '@mui/utils/types';
import type { TreeViewCancellableEvent } from '../../models';
import { idSelectors } from '../plugins/id';
import { selectionSelectors } from '../plugins/selection';
import { itemsSelectors } from '../plugins/items';
import type { TreeViewAnyStore } from '../models';
import type { TreeViewStoreInContext } from '../TreeViewProvider';

export function useTreeViewRootProps<TStore extends TreeViewAnyStore>(
  store: TreeViewStoreInContext<TStore>,
  forwardedProps: React.HTMLAttributes<HTMLUListElement>,
  ref: React.Ref<HTMLUListElement | null> | undefined,
) {
  const treeId = useStore(store, idSelectors.treeId);
  const itemChildrenIndentation = useStore(store, itemsSelectors.itemChildrenIndentation);
  const isMultiSelectEnabled = useStore(store, selectionSelectors.isMultiSelectEnabled);

  return (otherHandlers: EventHandlers) => { throw new Error("STUB"); };
}
