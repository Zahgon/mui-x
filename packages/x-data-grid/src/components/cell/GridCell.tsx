'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import type { ClassValue } from 'clsx';
import useForkRef from '@mui/utils/useForkRef';
import composeClasses from '@mui/utils/composeClasses';
import ownerDocument from '@mui/utils/ownerDocument';
import capitalize from '@mui/utils/capitalize';
import { fastMemo } from '@mui/x-internals/fastMemo';
import { useRtl } from '@mui/system/RtlProvider';
import { forwardRef } from '@mui/x-internals/forwardRef';
import { useStore } from '@mui/x-internals/store';
import { Rowspan } from '@mui/x-virtualizer';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';
import { focusElement } from '../../utils/focusElement';
import { getDataGridUtilityClass, gridClasses } from '../../constants/gridClasses';
import { GridCellModes } from '../../models';
import type { GridCellEventLookup, GridEvents, GridRowId, GridEditCellProps } from '../../models';
import type { GridRenderEditCellParams, GridCellParams } from '../../models/params/gridCellParams';
import type { GridAlignment, GridStateColDef } from '../../models/colDef/gridColDef';
import type { GridRowModel, GridTreeNode, GridTreeNodeWithRender } from '../../models/gridRows';
import { useGridSelector } from '../../hooks/utils/useGridSelector';
import { useGridRootProps } from '../../hooks/utils/useGridRootProps';
import {
  gridFocusCellSelector,
  gridTabIndexCellSelector,
} from '../../hooks/features/focus/gridFocusStateSelector';
import type { DataGridProcessedProps } from '../../models/props/DataGridProps';
import { PinnedColumnPosition } from '../../internals/constants';
import { useGridPrivateApiContext } from '../../hooks/utils/useGridPrivateApiContext';
import { usePinnedScrollOffset } from '../../hooks/utils/usePinnedScrollOffset';
import { gridEditCellStateSelector } from '../../hooks/features/editing/gridEditingSelectors';
import { attachPinnedStyle } from '../../internals/utils';
import { useGridConfiguration } from '../../hooks/utils/useGridConfiguration';

export type GridCellProps = React.HTMLAttributes<HTMLDivElement> & {
  align: GridAlignment;
  className?: string;
  colIndex: number;
  column: GridStateColDef;
  row: GridRowModel;
  rowId: GridRowId;
  rowNode: GridTreeNode;
  width: number;
  colSpan?: number;
  disableDragEvents?: boolean;
  isNotVisible: boolean;
  pinnedOffset?: number;
  pinnedPosition: PinnedColumnPosition;
  showRightBorder: boolean;
  showLeftBorder: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onDoubleClick?: React.MouseEventHandler<HTMLDivElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseDown?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  onMouseUp?: React.MouseEventHandler<HTMLDivElement>;
  onMouseOver?: React.MouseEventHandler<HTMLDivElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLDivElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
  onDragEnter?: React.DragEventHandler<HTMLDivElement>;
  onDragOver?: React.DragEventHandler<HTMLDivElement>;
  onFocus?: React.FocusEventHandler<Element>;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  [x: `data-${string}`]: string;
};

type OwnerState = Pick<GridCellProps, 'align' | 'pinnedPosition'> & {
  showLeftBorder: boolean;
  showRightBorder: boolean;
  isEditable: boolean;
  isSelected: boolean;
  isSelectionMode: boolean;
  classes: DataGridProcessedProps['classes'];
};

const useUtilityClasses = (ownerState: OwnerState) => {
  const {
    align,
    showLeftBorder,
    showRightBorder,
    pinnedPosition,
    isEditable,
    isSelected,
    isSelectionMode,
    classes,
  } = ownerState;

  const slots = {
    root: [
      'cell',
      `cell--text${capitalize(align)}`,
      isSelected && 'selected',
      isEditable && 'cell--editable',
      showLeftBorder && 'cell--withLeftBorder',
      showRightBorder && 'cell--withRightBorder',
      pinnedPosition === PinnedColumnPosition.LEFT && 'cell--pinnedLeft',
      pinnedPosition === PinnedColumnPosition.RIGHT && 'cell--pinnedRight',
      isSelectionMode && !isEditable && 'cell--selectionMode',
    ],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

let warnedOnce = false;

// TODO(v7): Removing the wrapper will break the docs performance visualization demo.

const GridCell = forwardRef<HTMLDivElement, GridCellProps>(function GridCell(props, ref) {
    throw new Error("STUB");
});

GridCell.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  align: PropTypes.oneOf(['center', 'left', 'right']).isRequired,
  colIndex: PropTypes.number.isRequired,
  colSpan: PropTypes.number,
  column: PropTypes.object.isRequired,
  disableDragEvents: PropTypes.bool,
  isNotVisible: PropTypes.bool.isRequired,
  pinnedOffset: PropTypes.number,
  pinnedPosition: PropTypes.oneOf([0, 1, 2, 3]).isRequired,
  row: PropTypes.object.isRequired,
  rowId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  rowNode: PropTypes.object.isRequired,
  showLeftBorder: PropTypes.bool.isRequired,
  showRightBorder: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired,
} as any;

const MemoizedGridCell = fastMemo(GridCell);

export { MemoizedGridCell as GridCell };
