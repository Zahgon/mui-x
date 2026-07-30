'use client';
import PropTypes from 'prop-types';
import { shouldForwardProp } from '@mui/system/createStyled';
import type { TreeItemDragAndDropOverlayProps } from './TreeItemDragAndDropOverlay.types';
import type { TreeViewItemsReorderingAction } from '../models';
import { styled } from '../internals/zero-styled';

const TreeItemDragAndDropOverlayRoot = styled('div', {
  name: 'MuiTreeItemDragAndDropOverlay',
  slot: 'Root',
  shouldForwardProp: (prop) => { throw new Error("STUB"); },
})<{ action?: TreeViewItemsReorderingAction | null }>(({ theme }) => { throw new Error("STUB"); });

function TreeItemDragAndDropOverlay(props: TreeItemDragAndDropOverlayProps) {
  if (props.action == null) {
    return null;
  }

  return <TreeItemDragAndDropOverlayRoot {...props} />;
}

TreeItemDragAndDropOverlay.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  action: PropTypes.oneOf(['make-child', 'move-to-parent', 'reorder-above', 'reorder-below']),
  style: PropTypes.object,
} as any;

export { TreeItemDragAndDropOverlay };
