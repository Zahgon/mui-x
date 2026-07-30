'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import { useTreeViewContext } from './TreeViewContext';
import { escapeOperandAttributeSelector } from '../utils/utils';
import { itemsSelectors } from '../plugins/items/selectors';
import type { SimpleTreeViewStore } from '../SimpleTreeViewStore';

export const TreeViewChildrenItemContext =
  React.createContext<TreeViewChildrenItemContextValue | null>(null);

interface TreeViewChildrenItemProviderProps {
  itemId: string | null;
  idAttribute: string | null;
  children: React.ReactNode;
}

export function TreeViewChildrenItemProvider(props: TreeViewChildrenItemProviderProps) {
    throw new Error("STUB");
}

TreeViewChildrenItemProvider.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
} as any;

interface TreeViewChildrenItemContextValue {
  registerChild: (idAttribute: string, itemId: string) => void;
  unregisterChild: (idAttribute: string) => void;
  parentId: string | null;
}
