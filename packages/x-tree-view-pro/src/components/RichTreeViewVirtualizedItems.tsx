'use client';
import * as React from 'react';
import { useRefWithInit } from '@base-ui/utils/useRefWithInit';
import type { Virtualizer } from '@mui/x-virtualizer';
import { LayoutList, useVirtualizer } from '@mui/x-virtualizer';
import { createSelectorMemoized, useStore } from '@mui/x-internals/store';
import { EMPTY_OBJECT } from '@base-ui/utils/empty';
import type { TreeItemProps } from '@mui/x-tree-view/TreeItem';
import type { RichTreeViewItemsProps } from '@mui/x-tree-view/internals';
import {
  expansionSelectors,
  itemsSelectors,
  RichTreeViewItem,
  useTreeViewContext,
  useTreeViewRootProps,
  useTreeViewStyleContext,
} from '@mui/x-tree-view/internals';
import useSlotProps from '@mui/utils/useSlotProps';
import type { RichTreeViewProStore } from '../internals/RichTreeViewProStore';

const VirtualizerContext = React.createContext<Virtualizer | null>(null);

const expandedItemsIdSelectors = createSelectorMemoized(expansionSelectors.flatList, (items) =>
  { throw new Error("STUB"); },
);

const ListContent = React.memo(() => {
    throw new Error("STUB");
});

export function RichTreeViewVirtualizedItems<TProps extends object>(
  props: RichTreeViewItemsProps<TProps>,
) {
    throw new Error("STUB");
}
