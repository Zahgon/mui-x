'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import CircularProgress from '@mui/material/CircularProgress';
import unsupportedProp from '@mui/utils/unsupportedProp';
import Collapse from '@mui/material/Collapse';
import type { CheckboxProps } from '@mui/material/Checkbox';
import MuiCheckbox from '@mui/material/Checkbox';
import useSlotProps from '@mui/utils/useSlotProps';
import { shouldForwardProp } from '@mui/system/createStyled';
import composeClasses from '@mui/utils/composeClasses';
import { styled, createUseThemeProps } from '../internals/zero-styled';
import type { TreeItemProps } from './TreeItem.types';
import type { UseTreeItemLabelSlotOwnProps, UseTreeItemStatus } from '../useTreeItem';
import { useTreeItem } from '../useTreeItem';
import type { TreeItemClasses } from './treeItemClasses';
import { getTreeItemUtilityClass } from './treeItemClasses';
import { TreeItemIcon } from '../TreeItemIcon';
import { TreeItemDragAndDropOverlay } from '../TreeItemDragAndDropOverlay';
import { TreeItemProvider } from '../TreeItemProvider';
import { TreeItemLabelInput } from '../TreeItemLabelInput';
import { useTreeViewStyleContext } from '../internals/TreeViewProvider';

const useThemeProps = createUseThemeProps('MuiTreeItem');

export const TreeItemRoot = styled('li', {
  name: 'MuiTreeItem',
  slot: 'Root',
})({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  outline: 0,
});

export const TreeItemContent = styled('div', {
  name: 'MuiTreeItem',
  slot: 'Content',
  shouldForwardProp: (prop) => { throw new Error("STUB"); },
})<{ status: UseTreeItemStatus }>(({ theme }) => { throw new Error("STUB"); });

export const TreeItemLabel = styled('div', {
  name: 'MuiTreeItem',
  slot: 'Label',
  shouldForwardProp: (prop) => { throw new Error("STUB"); },
})<{ editable?: boolean }>(({ theme }) => { throw new Error("STUB"); });

export const TreeItemIconContainer = styled('div', {
  name: 'MuiTreeItem',
  slot: 'IconContainer',
})({
  width: 16,
  display: 'flex',
  flexShrink: 0,
  justifyContent: 'center',
  position: 'relative',
  cursor: 'inherit',
  '& svg': {
    fontSize: 18,
  },
});

export const TreeItemGroupTransition = styled(Collapse, {
  name: 'MuiTreeItem',
  slot: 'GroupTransition',
  overridesResolver: (props, styles) => { throw new Error("STUB"); },
})({
  margin: 0,
  padding: 0,
});

export const TreeItemErrorContainer = styled('div', {
  name: 'MuiTreeItem',
  slot: 'ErrorIcon',
})({
  position: 'absolute',
  right: -3,
  width: 7,
  height: 7,
  borderRadius: '50%',
  backgroundColor: 'red',
});

export const TreeItemLoadingContainer = styled(CircularProgress, {
  name: 'MuiTreeItem',
  slot: 'LoadingIcon',
})({
  color: 'text.primary',
});

export const TreeItemCheckbox = styled(
  React.forwardRef(
    (props: CheckboxProps & { visible?: boolean }, ref: React.Ref<HTMLButtonElement>) => {
          throw new Error("STUB");
      },
  ),
  {
    name: 'MuiTreeItem',
    slot: 'Checkbox',
  },
)({
  padding: 0,
});

const useUtilityClasses = (classesProp: Partial<TreeItemClasses> | undefined) => {
  const { classes: classesFromTreeView } = useTreeViewStyleContext();

  const classes = {
    ...classesProp,
    root: clsx(classesProp?.root, classesFromTreeView.root),
    content: clsx(classesProp?.content, classesFromTreeView.itemContent),
    iconContainer: clsx(classesProp?.iconContainer, classesFromTreeView.itemIconContainer),
    checkbox: clsx(classesProp?.checkbox, classesFromTreeView.itemCheckbox),
    label: clsx(classesProp?.label, classesFromTreeView.itemLabel),
    groupTransition: clsx(classesProp?.groupTransition, classesFromTreeView.itemGroupTransition),
    labelInput: clsx(classesProp?.labelInput, classesFromTreeView.itemLabelInput),
    dragAndDropOverlay: clsx(
      classesProp?.dragAndDropOverlay,
      classesFromTreeView.itemDragAndDropOverlay,
    ),
    errorIcon: clsx(classesProp?.errorIcon, classesFromTreeView.itemErrorIcon),
    loadingIcon: clsx(classesProp?.loadingIcon, classesFromTreeView.itemLoadingIcon),
  };

  const slots = {
    root: ['root'],
    content: ['content'],
    iconContainer: ['iconContainer'],
    checkbox: ['checkbox'],
    label: ['label'],
    groupTransition: ['groupTransition'],
    labelInput: ['labelInput'],
    dragAndDropOverlay: ['dragAndDropOverlay'],
    errorIcon: ['errorIcon'],
    loadingIcon: ['loadingIcon'],
  };

  return composeClasses(slots, getTreeItemUtilityClass, classes);
};

type TreeItemComponent = ((
  props: TreeItemProps & React.RefAttributes<HTMLLIElement>,
) => React.JSX.Element) & { propTypes?: any };

/**
 *
 * Demos:
 *
 * - [Tree View](https://mui.com/x/react-tree-view/)
 *
 * API:
 *
 * - [TreeItem API](https://mui.com/x/api/tree-view/tree-item-2/)
 */
export const TreeItem = React.forwardRef(function TreeItem(
  inProps: TreeItemProps,
  forwardedRef: React.Ref<HTMLLIElement>,
) {
    throw new Error("STUB");
}) as TreeItemComponent;

TreeItem.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: PropTypes /* @typescript-to-proptypes-ignore */.any,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  className: PropTypes.string,
  /**
   * If `true`, the item is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the item cannot be selected.
   * @default false
   */
  disableSelection: PropTypes.bool,
  /**
   * The id attribute of the item. If not provided, it will be generated.
   */
  id: PropTypes.string,
  /**
   * The id of the item.
   * Must be unique.
   */
  itemId: PropTypes.string.isRequired,
  /**
   * The label of the item.
   */
  label: PropTypes.node,
  /**
   * Callback fired when the item root is blurred.
   */
  onBlur: PropTypes.func,
  /**
   * This prop isn't supported.
   * Use the `onItemFocus` callback on the tree if you need to monitor an item's focus.
   */
  onFocus: unsupportedProp,
  /**
   * Callback fired when a key is pressed on the keyboard and the tree is in focus.
   */
  onKeyDown: PropTypes.func,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
} as any;
