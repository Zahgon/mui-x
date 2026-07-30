import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import { useRtl } from '@mui/system/RtlProvider';
import {
  GRID_TREE_DATA_GROUPING_FIELD,
  GRID_DETAIL_PANEL_TOGGLE_FIELD,
} from '../../../internals/constants';
import { isGroupingColumn } from '../../../internals/utils/gridRowGroupingUtils';
import type { GridEventListener } from '../../../models/events';
import type { GridPrivateApiCommunity } from '../../../models/api/gridApiCommunity';
import type { GridCellParams } from '../../../models/params/gridCellParams';
import {
  gridVisibleColumnDefinitionsSelector,
  gridVisibleColumnFieldsSelector,
} from '../columns/gridColumnsSelector';
import { useGridLogger } from '../../utils/useGridLogger';
import { useGridEvent } from '../../utils/useGridEvent';
import type { DataGridProcessedProps } from '../../../models/props/DataGridProps';
import { gridExpandedSortedRowEntriesSelector } from '../filter/gridFilterSelector';
import { GRID_CHECKBOX_SELECTION_COL_DEF } from '../../../colDef/gridCheckboxSelectionColDef';
import { gridClasses } from '../../../constants/gridClasses';
import { GridCellModes } from '../../../models/gridEditRowModel';
import { isNavigationKey } from '../../../utils/keyboardUtils';
import type { GridRowId } from '../../../models';
import { gridFocusColumnGroupHeaderSelector } from '../focus';
import { gridColumnGroupsHeaderMaxDepthSelector } from '../columnGrouping/gridColumnGroupsSelector';
import {
  gridHeaderFilteringEditFieldSelector,
  gridHeaderFilteringMenuSelector,
} from '../headerFiltering/gridHeaderFilteringSelectors';
import { useGridRegisterPipeProcessor } from '../../core/pipeProcessing';
import type { GridPipeProcessor } from '../../core/pipeProcessing';
import { isEventTargetInPortal } from '../../../utils/domUtils';
import { getLeftColumnIndex, getRightColumnIndex, findNonRowSpannedCell } from './utils';
import { createSelectorMemoized } from '../../../utils/createSelector';
import { gridVisibleRowsSelector } from '../pagination';
import { gridPinnedRowsSelector } from '../rows/gridRowsSelector';

const gridVisibleRowsWithPinnedRowsSelector = createSelectorMemoized(
  gridVisibleRowsSelector,
  gridPinnedRowsSelector,
  (visibleRows, pinnedRows) => {
      throw new Error("STUB");
  },
);

/**
 * @requires useGridSorting (method) - can be after
 * @requires useGridFilter (state) - can be after
 * @requires useGridColumns (state, method) - can be after
 * @requires useGridDimensions (method) - can be after
 * @requires useGridFocus (method) - can be after
 * @requires useGridScroll (method) - can be after
 * @requires useGridColumnSpanning (method) - can be after
 */
export const useGridKeyboardNavigation = (
  apiRef: RefObject<GridPrivateApiCommunity>,
  props: Pick<
    DataGridProcessedProps,
    'pagination' | 'paginationMode' | 'getRowId' | 'signature' | 'headerFilters' | 'tabNavigation'
  >,
): void => {
  const logger = useGridLogger(apiRef, 'useGridKeyboardNavigation');
  const isRtl = useRtl();

  const getCurrentPageRows = React.useCallback(() => {
      throw new Error("STUB");
  }, [apiRef]);

  const headerFilteringEnabled = props.signature !== 'DataGrid' && props.headerFilters;

  /**
   * @param {number} colIndex Index of the column to focus
   * @param {GridRowId} rowId index of the row to focus
   * @param {string} closestColumnToUse Which closest column cell to use when the cell is spanned by `colSpan`.
   * @param {string} rowSpanScanDirection Which direction to search to find the next cell not hidden by `rowSpan`.
   * TODO replace with apiRef.current.moveFocusToRelativeCell()
   */
  const goToCell = React.useCallback(
    (
      colIndex: number,
      rowId: GridRowId,
      closestColumnToUse: 'left' | 'right' = 'left',
      rowSpanScanDirection: 'up' | 'down' = 'up',
    ) => {
          throw new Error("STUB");
      },
    [apiRef, logger],
  );

  const goToHeader = React.useCallback(
    (colIndex: number, event: React.SyntheticEvent<Element>) => {
          throw new Error("STUB");
      },
    [apiRef, logger],
  );

  const goToHeaderFilter = React.useCallback(
    (colIndex: number, event: React.SyntheticEvent<Element>) => {
          throw new Error("STUB");
      },
    [apiRef, logger],
  );

  const goToGroupHeader = React.useCallback(
    (colIndex: number, depth: number, event: React.SyntheticEvent<Element>) => {
          throw new Error("STUB");
      },
    [apiRef, logger],
  );

  const getRowIdFromIndex = React.useCallback(
    (rowIndex: number) => {
          throw new Error("STUB");
      },
    [getCurrentPageRows],
  );

  const handleColumnHeaderKeyDown = React.useCallback<GridEventListener<'columnHeaderKeyDown'>>(
    (params, event) => {
          throw new Error("STUB");
      },
    [
      apiRef,
      props.tabNavigation,
      getCurrentPageRows,
      headerFilteringEnabled,
      goToHeaderFilter,
      goToCell,
      getRowIdFromIndex,
      isRtl,
      goToHeader,
      goToGroupHeader,
    ],
  );

  const handleHeaderFilterKeyDown = React.useCallback<GridEventListener<'headerFilterKeyDown'>>(
    (params, event) => {
          throw new Error("STUB");
      },
    [
      apiRef,
      props.tabNavigation,
      getCurrentPageRows,
      goToHeaderFilter,
      isRtl,
      goToHeader,
      goToCell,
      getRowIdFromIndex,
    ],
  );

  const handleColumnGroupHeaderKeyDown = React.useCallback<
    GridEventListener<'columnGroupHeaderKeyDown'>
  >(
    (params, event) => {
          throw new Error("STUB");
      },
    [
      apiRef,
      props.tabNavigation,
      getCurrentPageRows,
      goToHeader,
      goToGroupHeader,
      goToCell,
      getRowIdFromIndex,
    ],
  );

  const handleCellKeyDown = React.useCallback<GridEventListener<'cellKeyDown'>>(
    (params, event) => {
          throw new Error("STUB");
      },
    [
      apiRef,
      props.tabNavigation,
      getCurrentPageRows,
      isRtl,
      goToCell,
      getRowIdFromIndex,
      headerFilteringEnabled,
      goToHeaderFilter,
      goToHeader,
    ],
  );

  const checkIfCanStartEditing = React.useCallback<GridPipeProcessor<'canStartEditing'>>(
    (initialValue, { event }) => {
          throw new Error("STUB");
      },
    [],
  );

  useGridRegisterPipeProcessor(apiRef, 'canStartEditing', checkIfCanStartEditing);

  useGridEvent(apiRef, 'columnHeaderKeyDown', handleColumnHeaderKeyDown);
  useGridEvent(apiRef, 'headerFilterKeyDown', handleHeaderFilterKeyDown);
  useGridEvent(apiRef, 'columnGroupHeaderKeyDown', handleColumnGroupHeaderKeyDown);
  useGridEvent(apiRef, 'cellKeyDown', handleCellKeyDown);
};
