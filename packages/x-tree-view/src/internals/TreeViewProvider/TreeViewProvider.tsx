import * as React from 'react';
import { EMPTY_OBJECT } from '@base-ui/utils/empty';
import type { TreeViewProviderProps } from './TreeViewProvider.types';
import { TreeViewContext } from './TreeViewContext';
import type { TreeViewSlotProps, TreeViewSlots } from './TreeViewStyleContext';
import { TreeViewStyleContext } from './TreeViewStyleContext';
import { useTreeViewBuildContext } from './useTreeViewBuildContext';
import type { TreeViewAnyStore } from '../models';

/**
 * Sets up the contexts for the underlying Tree Item components.
 *
 * @ignore - do not document.
 */
export function TreeViewProvider<TStore extends TreeViewAnyStore>(
  props: TreeViewProviderProps<TStore>,
) {
    throw new Error("STUB");
}
