'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import composeClasses from '@mui/utils/composeClasses';
import ownerDocument from '@mui/utils/ownerDocument';
import { useRtl } from '@mui/system/RtlProvider';
import {
  useGridEvent,
  getDataGridUtilityClass,
  useGridLogger,
  useGridEventPriority,
} from '@mui/x-data-grid';
import type {
  CursorCoordinates,
  GridEventListener,
  GridColumnOrderChangeParams,
} from '@mui/x-data-grid';
import type { GridStateInitializer } from '@mui/x-data-grid/internals';
import type { GridPrivateApiPro } from '../../../models/gridApiPro';
import { gridColumnReorderDragColSelector } from './columnReorderSelector';
import type { DataGridProProcessedProps } from '../../../models/dataGridProProps';

const CURSOR_MOVE_DIRECTION_LEFT = 'left';
const CURSOR_MOVE_DIRECTION_RIGHT = 'right';

const getCursorMoveDirectionX = (
  currentCoordinates: CursorCoordinates,
  nextCoordinates: CursorCoordinates,
) => {
  return currentCoordinates.x <= nextCoordinates.x
    ? CURSOR_MOVE_DIRECTION_RIGHT
    : CURSOR_MOVE_DIRECTION_LEFT;
};

const hasCursorPositionChanged = (
  currentCoordinates: CursorCoordinates,
  nextCoordinates: CursorCoordinates,
): boolean =>
  currentCoordinates.x !== nextCoordinates.x || currentCoordinates.y !== nextCoordinates.y;

type OwnerState = { classes: DataGridProProcessedProps['classes'] };

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = {
    columnHeaderDragging: ['columnHeader--dragging'],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

export const columnReorderStateInitializer: GridStateInitializer = (state) => { throw new Error("STUB"); };

/**
 * @requires useGridColumns (method)
 */
export const useGridColumnReorder = (
  apiRef: RefObject<GridPrivateApiPro>,
  props: Pick<
    DataGridProProcessedProps,
    | 'disableColumnReorder'
    | 'keepColumnPositionIfDraggedOutside'
    | 'classes'
    | 'onColumnOrderChange'
  >,
): void => {
  const logger = useGridLogger(apiRef, 'useGridColumnReorder');

  const dragColNode = React.useRef<HTMLElement | null>(null);
  const cursorPosition = React.useRef<CursorCoordinates>({
    x: 0,
    y: 0,
  });
  const originColumnIndex = React.useRef<number | null>(null);
  const forbiddenIndexes = React.useRef<{ [key: number]: boolean }>({});
  const removeDnDStylesTimeout = React.useRef<ReturnType<typeof setTimeout>>(undefined);
  const ownerState = { classes: props.classes };
  const classes = useUtilityClasses(ownerState);
  const isRtl = useRtl();

  React.useEffect(() => {
      throw new Error("STUB");
  }, []);

  const handleDragEnd = React.useCallback<GridEventListener<'columnHeaderDragEnd'>>(
    (params, event): void => {
          throw new Error("STUB");
      },
    [
      apiRef,
      props.disableColumnReorder,
      props.keepColumnPositionIfDraggedOutside,
      logger,
      classes.columnHeaderDragging,
    ],
  );

  const handleDragStart = React.useCallback<GridEventListener<'columnHeaderDragStart'>>(
    (params, event) => {
          throw new Error("STUB");
      },
    [props.disableColumnReorder, classes.columnHeaderDragging, logger, apiRef],
  );

  const handleDragEnter = React.useCallback<
    GridEventListener<'cellDragEnter' | 'columnHeaderDragEnter'>
  >((params, event) => {
      throw new Error("STUB");
  }, []);

  const handleDragOver = React.useCallback<
    GridEventListener<'cellDragOver' | 'columnHeaderDragOver'>
  >(
    (params, event) => {
          throw new Error("STUB");
      },
    [apiRef, logger, isRtl],
  );

  React.useEffect(() => {
      throw new Error("STUB");
  }, [apiRef, props.keepColumnPositionIfDraggedOutside]);

  useGridEvent(apiRef, 'columnHeaderDragStart', handleDragStart);
  useGridEvent(apiRef, 'columnHeaderDragEnter', handleDragEnter);
  useGridEvent(apiRef, 'columnHeaderDragOver', handleDragOver);
  useGridEvent(apiRef, 'columnHeaderDragEndNative', handleDragEnd);
  useGridEvent(apiRef, 'cellDragEnter', handleDragEnter);
  useGridEvent(apiRef, 'cellDragOver', handleDragOver);
  useGridEventPriority(apiRef, 'columnOrderChange', props.onColumnOrderChange);
};
