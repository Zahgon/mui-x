'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import useForkRef from '@mui/utils/useForkRef';
import { fastMemo } from '@mui/x-internals/fastMemo';
import { forwardRef } from '@mui/x-internals/forwardRef';
import { isObjectEmpty } from '@mui/x-internals/isObjectEmpty';
import { vars } from '../constants/cssVariables';
import type { GridRowEventLookup } from '../models/events';
import type { GridRowId, GridRowModel } from '../models/gridRows';
import { GridEditModes, GridCellModes } from '../models/gridEditRowModel';
import { gridClasses } from '../constants/gridClasses';
import { composeGridClasses } from '../utils/composeGridClasses';
import { useGridRootProps } from '../hooks/utils/useGridRootProps';
import type { GridPinnedColumns } from '../hooks/features/columns';
import type { GridStateColDef } from '../models/colDef/gridColDef';
import { shouldCellShowLeftBorder, shouldCellShowRightBorder } from '../utils/cellBorderUtils';
import { gridColumnPositionsSelector } from '../hooks/features/columns/gridColumnsSelector';
import { useGridSelector, objectShallowCompare } from '../hooks/utils/useGridSelector';
import type { GridRowClassNameParams } from '../models/params/gridRowParams';
import { useGridVisibleRows } from '../hooks/utils/useGridVisibleRows';
import { findParentElementFromClassName, isEventTargetInPortal } from '../utils/domUtils';
import { GRID_CHECKBOX_SELECTION_COL_DEF } from '../colDef/gridCheckboxSelectionColDef';
import { GRID_ACTIONS_COLUMN_TYPE } from '../colDef/gridActionsColDef';
import { GRID_DETAIL_PANEL_TOGGLE_FIELD, PinnedColumnPosition } from '../internals/constants';
import { gridSortModelSelector } from '../hooks/features/sorting/gridSortingSelector';
import { gridRowNodeSelector } from '../hooks/features/rows/gridRowsSelector';
import {
  gridEditRowsStateSelector,
  gridRowIsEditingSelector,
} from '../hooks/features/editing/gridEditingSelectors';
import { gridIsRowDragActiveSelector } from '../hooks/features/rowReorder/gridRowReorderSelector';
import { GridRowDragAndDropOverlay } from './GridRowDragAndDropOverlay';
import { getPinnedCellOffset } from '../internals/utils/getPinnedCellOffset';
import { useGridConfiguration } from '../hooks/utils/useGridConfiguration';
import { useGridPrivateApiContext } from '../hooks/utils/useGridPrivateApiContext';
import { createSelector } from '../utils/createSelector';

const isRowReorderingEnabledSelector = createSelector(
  gridEditRowsStateSelector,
  (editRows, { rowReordering, treeData }: { rowReordering: boolean; treeData: boolean }) => {
      throw new Error("STUB");
  },
);

export interface GridRowProps extends React.HTMLAttributes<HTMLDivElement> {
  row: GridRowModel;
  rowId: GridRowId;
  selected: boolean;
  /**
   * Index of the row in the whole sorted and filtered dataset.
   * If some rows above have expanded children, this index also take those children into account.
   */
  index: number;
  rowHeight: number | 'auto';
  offsetLeft: number;
  columnsTotalWidth: number;
  firstColumnIndex: number;
  lastColumnIndex: number;
  visibleColumns: GridStateColDef[];
  pinnedColumns: GridPinnedColumns;
  /**
   * Determines which cell has focus.
   * If `null`, no cell in this row has focus.
   */
  focusedColumnIndex: number | undefined;
  isFirstVisible: boolean;
  isLastVisible: boolean;
  isNotVisible: boolean;
  showBottomBorder: boolean;
  scrollbarWidth: number;
  gridHasFiller: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onDoubleClick?: React.MouseEventHandler<HTMLDivElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  [x: `data-${string}`]: string;
}

const GridRow = forwardRef<HTMLDivElement, GridRowProps>(function GridRow(props, refProp) {
    throw new Error("STUB");
});

GridRow.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  columnsTotalWidth: PropTypes.number.isRequired,
  firstColumnIndex: PropTypes.number.isRequired,
  /**
   * Determines which cell has focus.
   * If `null`, no cell in this row has focus.
   */
  focusedColumnIndex: PropTypes.number,
  gridHasFiller: PropTypes.bool.isRequired,
  /**
   * Index of the row in the whole sorted and filtered dataset.
   * If some rows above have expanded children, this index also take those children into account.
   */
  index: PropTypes.number.isRequired,
  isFirstVisible: PropTypes.bool.isRequired,
  isLastVisible: PropTypes.bool.isRequired,
  isNotVisible: PropTypes.bool.isRequired,
  lastColumnIndex: PropTypes.number.isRequired,
  offsetLeft: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  onDoubleClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  pinnedColumns: PropTypes.object.isRequired,
  row: PropTypes.object.isRequired,
  rowHeight: PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.number]).isRequired,
  rowId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  scrollbarWidth: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  showBottomBorder: PropTypes.bool.isRequired,
  visibleColumns: PropTypes.arrayOf(PropTypes.object).isRequired,
} as any;

const MemoizedGridRow = fastMemo(GridRow);

export { MemoizedGridRow as GridRow };
