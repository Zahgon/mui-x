'use client';
import * as React from 'react';
import type { MuiEvent, RefObject } from '@mui/x-internals/types';
import useTimeout from '@mui/utils/useTimeout';
import composeClasses from '@mui/utils/composeClasses';
import {
  useGridLogger,
  useGridEvent,
  getDataGridUtilityClass,
  useGridSelector,
  gridSortModelSelector,
  useGridEventPriority,
  gridRowNodeSelector,
  gridRowMaximumTreeDepthSelector,
  useGridApiMethod,
  gridExpandedSortedRowIdsSelector,
  gridRowTreeSelector,
  gridExpandedSortedRowIndexLookupSelector,
  GRID_ROOT_GROUP_ID,
} from '@mui/x-data-grid';
import type { GridEventListener, GridRowId, GridGroupNode } from '@mui/x-data-grid';
import {
  gridEditRowsStateSelector,
  useGridRegisterPipeProcessor,
} from '@mui/x-data-grid/internals';
import type {
  GridPipeProcessor,
  GridStateInitializer,
  RowReorderDropPosition,
  RowReorderDragDirection,
} from '@mui/x-data-grid/internals';
import type { GridRowOrderChangeParams } from '../../../models/gridRowOrderChangeParams';
import type { GridPrivateApiPro } from '../../../models/gridApiPro';
import type { DataGridProProcessedProps } from '../../../models/dataGridProProps';
import { GRID_REORDER_COL_DEF } from './gridRowReorderColDef';
import type { ReorderValidationContext } from './models';

import { findCellElement } from './utils';

type OwnerState = { classes: DataGridProProcessedProps['classes'] };

interface ReorderStateProps {
  previousTargetId: GridRowId | null;
  dragDirection: RowReorderDragDirection | null;
  previousDropPosition: RowReorderDropPosition | null;
}

const EMPTY_REORDER_STATE: ReorderStateProps = {
  previousTargetId: null,
  dragDirection: null,
  previousDropPosition: null,
};

interface DropTarget {
  targetRowId: GridRowId | null;
  targetRowIndex: number | null;
  dropPosition: RowReorderDropPosition | null;
}

interface TimeoutInfo {
  rowId: GridRowId | null;
  clientX?: number;
  clientY?: number;
}

const TIMEOUT_CLEAR_BUFFER_PX = 5;

const EMPTY_TIMEOUT_INFO: TimeoutInfo = {
  rowId: null,
};

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = {
    rowDragging: ['row--dragging'],
    rowBeingDragged: ['row--beingDragged'],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

export const rowReorderStateInitializer: GridStateInitializer = (state) => { throw new Error("STUB"); };

/**
 * Hook for row reordering (Pro package)
 * @requires useGridRows (method)
 */
export const useGridRowReorder = (
  apiRef: RefObject<GridPrivateApiPro>,
  props: Pick<
    DataGridProProcessedProps,
    | 'rowReordering'
    | 'onRowOrderChange'
    | 'classes'
    | 'treeData'
    | 'dataSource'
    | 'isValidRowReorder'
  >,
): void => {
  const logger = useGridLogger(apiRef, 'useGridRowReorder');
  const sortModel = useGridSelector(apiRef, gridSortModelSelector);
  const dragRowNode = React.useRef<HTMLElement | null>(null);
  const originRowIndex = React.useRef<number | null>(null);
  const removeDnDStylesTimeout = React.useRef<ReturnType<typeof setTimeout>>(undefined);
  const ownerState = { classes: props.classes };
  const classes = useUtilityClasses(ownerState);
  const [dragRowId, setDragRowId] = React.useState<GridRowId>('');
  const timeoutInfoRef = React.useRef<TimeoutInfo>(EMPTY_TIMEOUT_INFO);
  const timeout = useTimeout();
  const previousReorderState = React.useRef<ReorderStateProps>(EMPTY_REORDER_STATE);
  const dropTarget = React.useRef<DropTarget>({
    targetRowId: null,
    targetRowIndex: null,
    dropPosition: null,
  });

  React.useEffect(() => {
      throw new Error("STUB");
  }, []);

  // TODO: remove sortModel check once row reorder is sorting compatible
  const isRowReorderDisabled = React.useMemo((): boolean => {
      throw new Error("STUB");
  }, [props.rowReordering, sortModel]);

  const calculateDropPosition = React.useCallback(
    (event: MuiEvent<React.DragEvent<HTMLElement>>): RowReorderDropPosition => {
          throw new Error("STUB");
      },
    [props.treeData],
  );

  const applyDraggedState = React.useCallback(
    (rowId: GridRowId | null, isDragged: boolean) => {
          throw new Error("STUB");
      },
    [apiRef, classes.rowBeingDragged],
  );

  const applyRowAnimation = React.useCallback(
    async (callback: () => void | Promise<void>) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const handleDragStart = React.useCallback<GridEventListener<'rowDragStart'>>(
    (params, event) => {
          throw new Error("STUB");
      },
    [apiRef, isRowReorderDisabled, logger, classes.rowDragging, applyDraggedState, timeout],
  );

  const handleDragOver = React.useCallback<GridEventListener<'cellDragOver' | 'rowDragOver'>>(
    (params, event) => {
          throw new Error("STUB");
      },
    [dragRowId, apiRef, logger, timeout, calculateDropPosition],
  );

  const handleDragEnd = React.useCallback<GridEventListener<'rowDragEnd'>>(
    async (_, event): Promise<void> => {
          throw new Error("STUB");
      },
    [
      apiRef,
      dragRowId,
      isRowReorderDisabled,
      logger,
      applyDraggedState,
      timeout,
      applyRowAnimation,
    ],
  );

  const isValidRowReorderProp = props.isValidRowReorder;
  const isRowReorderValid = React.useCallback<GridPipeProcessor<'isRowReorderValid'>>(
    (initialValue, { sourceRowId, targetRowId, dropPosition, dragDirection }) => {
          throw new Error("STUB");
      },
    [apiRef, isValidRowReorderProp],
  );

  useGridRegisterPipeProcessor(apiRef, 'isRowReorderValid', isRowReorderValid);
  useGridEvent(apiRef, 'rowDragStart', handleDragStart);
  useGridEvent(apiRef, 'rowDragOver', handleDragOver);
  useGridEvent(apiRef, 'rowDragEnd', handleDragEnd);
  useGridEvent(apiRef, 'cellDragOver', handleDragOver);
  useGridEventPriority(apiRef, 'rowOrderChange', props.onRowOrderChange);

  const setRowDragActive = React.useCallback(
    (isActive: boolean) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  useGridApiMethod(
    apiRef,
    {
      setRowDragActive,
    },
    'private',
  );
};
