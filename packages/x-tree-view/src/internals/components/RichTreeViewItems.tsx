'use client';
import * as React from 'react';
import { EMPTY_ARRAY } from '@base-ui/utils/empty';
import { useStore } from '@mui/x-internals/store';
import useSlotProps from '@mui/utils/useSlotProps';
import type { SlotComponentProps } from '@mui/utils/types';
import { fastObjectShallowCompare } from '@mui/x-internals/fastObjectShallowCompare';
import type { TreeItemProps } from '../../TreeItem';
import { TreeItem } from '../../TreeItem';
import type { TreeViewItemId } from '../../models';
import { itemsSelectors } from '../plugins/items';
import { useTreeViewContext, useTreeViewStyleContext } from '../TreeViewProvider';
import { expansionSelectors } from '../plugins/expansion';
import type { RichTreeViewStore } from '../RichTreeViewStore';
import type { MinimalTreeViewState } from '../MinimalTreeViewStore';
import { useTreeViewRootProps } from '../hooks/useTreeViewRootProps';

const RichTreeViewItemsContext = React.createContext<
  ((itemId: TreeViewItemId) => React.ReactNode) | null
>(null);

const selectorNoChildren = () => { throw new Error("STUB"); };
const selectorChildrenIdsNull = (state: MinimalTreeViewState<any, any>) =>
  { throw new Error("STUB"); };

export const RichTreeViewItem = React.memo(function RichTreeViewItem({
  itemSlot,
  itemSlotProps,
  itemId,
  skipChildren,
}: RichTreeViewItemProps) {
    throw new Error("STUB");
}, fastObjectShallowCompare);

export function RichTreeViewItems<TProps extends object>(props: RichTreeViewItemsProps<TProps>) {
    throw new Error("STUB");
}

interface RichTreeViewItemsOwnerState {
  itemId: TreeViewItemId;
  label: string;
}

export interface RichTreeViewItemsSlots {
  /**
   * Element rendered at the root.
   * @default RichTreeViewProRoot
   */
  root: React.ElementType;
  /**
   * Custom component to render a Tree Item.
   * @default TreeItem.
   */
  item?: React.JSXElementConstructor<TreeItemProps>;
}

export interface RichTreeViewItemsSlotProps<TProps extends object> {
  item?: SlotComponentProps<typeof TreeItem, {}, RichTreeViewItemsOwnerState>;
  root?: SlotComponentProps<'ul', {}, TProps>;
}

export interface RichTreeViewItemsProps<TProps extends object> {
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: RichTreeViewItemsSlots;
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps?: RichTreeViewItemsSlotProps<TProps>;
  /**
   * Owner state applied to the root slot component.
   */
  ownerState: TProps;
  /**
   * Props provided to the component and applied to the root element.
   */
  forwardedProps: React.HTMLAttributes<HTMLUListElement>;
  /**
   * Ref forwarded to the root element.
   */
  rootRef: React.Ref<HTMLUListElement>;
}

interface RichTreeViewItemProps extends Pick<TreeItemProps, 'id' | 'itemId' | 'children'> {
  itemSlot: React.JSXElementConstructor<TreeItemProps> | undefined;
  itemSlotProps: SlotComponentProps<typeof TreeItem, {}, RichTreeViewItemsOwnerState> | undefined;
  skipChildren: boolean;
}
