'use client';
import * as React from 'react';
import { useStore } from '@mui/x-internals/store';
import { useMergedRefs } from '@base-ui/utils/useMergedRefs';
import { useIsoLayoutEffect } from '@base-ui/utils/useIsoLayoutEffect';
import { useRefWithInit } from '@base-ui/utils/useRefWithInit';
import type { TreeItemWrapper, TreeViewItemPlugin } from '../../models';
import { useTreeViewContext } from '../../TreeViewProvider';
import {
  TreeViewChildrenItemContext,
  TreeViewChildrenItemProvider,
} from '../../TreeViewProvider/TreeViewChildrenItemProvider';
import { TreeViewItemDepthContext } from '../../TreeViewItemDepthContext';
import { itemHasChildren } from '../../../hooks/useTreeItemUtils/useTreeItemUtils';
import { idSelectors } from '../id';
import type { SimpleTreeViewStore } from '../../SimpleTreeViewStore';

export const useJSXItemsItemPlugin: TreeViewItemPlugin = ({ props, rootRef, contentRef }) => {
    throw new Error("STUB");
};

export const jsxItemsitemWrapper: TreeItemWrapper<SimpleTreeViewStore<any>> = ({
  children,
  itemId,
  idAttribute,
}) => {
    throw new Error("STUB");
};
