'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { checkboxClasses } from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { useStore } from '@base-ui/utils/store';
import { useStableCallback } from '@base-ui/utils/useStableCallback';
import { useEventCalendarStoreContext } from '@mui/x-scheduler-internals/use-event-calendar-store-context';
import { schedulerResourceSelectors } from '@mui/x-scheduler-internals/scheduler-selectors';
import type { SchedulerResource } from '@mui/x-scheduler-internals/models';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import type { TreeItemProps } from '@mui/x-tree-view/TreeItem';
import { TreeItem, treeItemClasses } from '@mui/x-tree-view/TreeItem';
import { useRichTreeViewApiRef } from '@mui/x-tree-view/hooks';
import clsx from 'clsx';
import type { ResourcesTreeProps } from './ResourcesTree.types';
import { getPaletteVariants } from '../../internals/utils/tokens';
import { useEventCalendarStyledContext } from '../EventCalendarStyledContext';

const ResourcesTreeRoot = styled('section', {
  name: 'MuiEventCalendar',
  slot: 'ResourcesTree',
})(({ theme }) => { throw new Error("STUB"); });

const ResourcesTreeLabel = styled(Typography, {
  name: 'MuiEventCalendar',
  slot: 'ResourcesTreeLabel',
})(({ theme }) => { throw new Error("STUB"); });

const ResourcesTreeItemRoot = styled(TreeItem, {
  name: 'MuiEventCalendar',
  slot: 'ResourcesTreeItem',
})(({ theme }) => { throw new Error("STUB"); });

const ResourcesTreeItemLabel = styled(Typography, {
  name: 'MuiEventCalendar',
  slot: 'ResourcesTreeItemLabel',
})(({ theme }) => { throw new Error("STUB"); });

const getItemLabel = (item: SchedulerResource) => item.title;

function ResourcesTreeItem(props: TreeItemProps) {
    throw new Error("STUB");
}

export const ResourcesTree = React.forwardRef(function ResourcesTree(
  props: ResourcesTreeProps,
  forwardedRef: React.ForwardedRef<HTMLElement>,
) {
    throw new Error("STUB");
});
