'use client';
import * as React from 'react';
import { platform } from '@base-ui/utils/platform';
import type { RefObject } from '@mui/x-internals/types';
import ownerDocument from '@mui/utils/ownerDocument';
import useEventCallback from '@mui/utils/useEventCallback';
import {
  getGridCellElement,
  getTotalHeaderHeight,
  getVisibleRows,
  isFillDownShortcut,
  isFillRightShortcut,
  isNavigationKey,
  serializeCellValue,
  useGridRegisterPipeProcessor,
} from '@mui/x-data-grid-pro/internals';
import type { GridPipeProcessor, GridStateInitializer } from '@mui/x-data-grid-pro/internals';
import {
  useGridEvent,
  useGridApiMethod,
  GRID_ACTIONS_COLUMN_TYPE,
  GRID_CHECKBOX_SELECTION_COL_DEF,
  GRID_DETAIL_PANEL_TOGGLE_FIELD,
  gridClasses,
  gridFocusCellSelector,
  GRID_REORDER_COL_DEF,
  gridSortedRowIdsSelector,
  gridDimensionsSelector,
  GridCellModes,
} from '@mui/x-data-grid-pro';
import type {
  GridEventListener,
  GridEventLookup,
  GridCellCoordinates,
  GridRowId,
  GridCellParams,
} from '@mui/x-data-grid-pro';
import { gridCellSelectionStateSelector } from './gridCellSelectionSelector';
import type { GridCellSelectionApi } from './gridCellSelectionInterfaces';
import type { DataGridPremiumProcessedProps } from '../../../models/dataGridPremiumProps';
import type { GridPrivateApiPremium } from '../../../models/gridApiPremium';
import { CellValueUpdater } from '../clipboard/useGridClipboardImport';

export const cellSelectionStateInitializer: GridStateInitializer<
  Pick<DataGridPremiumProcessedProps, 'cellSelectionModel' | 'initialState'>
> = (state, props) => { throw new Error("STUB"); };

function isKeyboardEvent(event: any): event is React.KeyboardEvent {
  return !!event.key;
}

const AUTO_SCROLL_SENSITIVITY = 50; // The distance from the edge to start scrolling
const AUTO_SCROLL_SPEED = 20; // The speed to scroll once the mouse enters the sensitivity area
const FILL_HANDLE_HIT_AREA = 16; // px — size of the interactive hit area for the fill handle

function getSelectedOrFocusedCells(
  apiRef: RefObject<GridPrivateApiPremium>,
): GridCellCoordinates[] {
  let selectedCells = apiRef.current.getSelectedCellsAsArray();
  if (selectedCells.length === 0) {
    const focusedCell = gridFocusCellSelector(apiRef);
    if (focusedCell) {
      selectedCells = [{ id: focusedCell.id, field: focusedCell.field }];
    }
  }
  return selectedCells;
}

interface FillSourceState {
  cells: { id: GridRowId; field: string }[];
  fields: string[];
  rowIndexRange: { start: number; end: number };
  columnIndexRange: { start: number; end: number };
  rowIdMap: Map<string, GridRowId>;
}

interface FillDragState {
  isDragging: boolean;
  direction: 'vertical' | 'horizontal' | null;
  targetRowIds: GridRowId[];
  targetFields: string[];
  decoratedElements: Set<Element>;
  moveRAF: number | null;
  doc: Document | null;
  moveHandler: ((event: MouseEvent) => void) | null;
  upHandler: (() => void) | null;
}

function createInitialFillDragState(): FillDragState {
  return {
    isDragging: false,
    direction: null,
    targetRowIds: [],
    targetFields: [],
    decoratedElements: new Set(),
    moveRAF: null,
    doc: null,
    moveHandler: null,
    upHandler: null,
  };
}

export const useGridCellSelection = (
  apiRef: RefObject<GridPrivateApiPremium>,
  props: Pick<
    DataGridPremiumProcessedProps,
    | 'cellSelection'
    | 'cellSelectionModel'
    | 'onCellSelectionModelChange'
    | 'pagination'
    | 'paginationMode'
    | 'ignoreValueFormatterDuringExport'
    | 'clipboardCopyCellDelimiter'
    | 'columnHeaderHeight'
    | 'cellSelectionFillHandle'
    | 'processRowUpdate'
    | 'onProcessRowUpdateError'
    | 'getRowId'
  >,
) => {
  const hasRootReference = apiRef.current.rootElementRef.current !== null;
  const cellWithVirtualFocus = React.useRef<GridCellCoordinates>(null);
  const lastMouseDownCell = React.useRef<GridCellCoordinates>(null);
  const mousePosition = React.useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const autoScrollRAF = React.useRef<number>(null);
  const totalHeaderHeight = getTotalHeaderHeight(apiRef, props);

  // Fill handle state — grouped by lifecycle:
  // fillSource: set on mousedown, read-only during drag, cleared on mouseup
  // fillDrag: managed during active drag, reset on mouseup
  const fillSource = React.useRef<FillSourceState | null>(null);
  const fillDrag = React.useRef<FillDragState>(createInitialFillDragState());
  const skipNextCellClick = React.useRef(false);

  const ignoreValueFormatterProp = props.ignoreValueFormatterDuringExport;
  const ignoreValueFormatter =
    (typeof ignoreValueFormatterProp === 'object'
      ? ignoreValueFormatterProp?.clipboardExport
      : ignoreValueFormatterProp) || false;
  const clipboardCopyCellDelimiter = props.clipboardCopyCellDelimiter;

  apiRef.current.registerControlState({
    stateId: 'cellSelection',
    propModel: props.cellSelectionModel,
    propOnChange: props.onCellSelectionModelChange,
    stateSelector: gridCellSelectionStateSelector,
    changeEvent: 'cellSelectionChange',
  });

  const runIfCellSelectionIsEnabled =
    <Args extends any[]>(callback: (...args: Args) => void) =>
    (...args: Args) => {
        throw new Error("STUB");
    };

  const isCellSelected = React.useCallback<GridCellSelectionApi['isCellSelected']>(
    (id, field) => {
          throw new Error("STUB");
      },
    [apiRef, props.cellSelection],
  );

  const getCellSelectionModel = React.useCallback(() => {
      throw new Error("STUB");
  }, [apiRef]);

  const setCellSelectionModel = React.useCallback<GridCellSelectionApi['setCellSelectionModel']>(
    (newModel) => {
          throw new Error("STUB");
      },
    [apiRef, props.cellSelection],
  );

  const selectCellRange = React.useCallback<GridCellSelectionApi['selectCellRange']>(
    (start, end, keepOtherSelected = false) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const getSelectedCellsAsArray = React.useCallback<
    GridCellSelectionApi['getSelectedCellsAsArray']
  >(() => {
      throw new Error("STUB");
  }, [apiRef, props]);

  const cellSelectionApi: GridCellSelectionApi = {
    isCellSelected,
    getCellSelectionModel,
    setCellSelectionModel,
    selectCellRange,
    getSelectedCellsAsArray,
  };

  useGridApiMethod(apiRef, cellSelectionApi, 'public');

  const hasClickedValidCellForRangeSelection = React.useCallback(
    (params: GridCellParams) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const handleMouseUp = useEventCallback(() => {
      throw new Error("STUB");
  });

  const handleCellMouseDown = React.useCallback<GridEventListener<'cellMouseDown'>>(
    (params, event) => {
          throw new Error("STUB");
      },
    [apiRef, handleMouseUp, hasClickedValidCellForRangeSelection],
  );

  const stopAutoScroll = React.useCallback(() => {
      throw new Error("STUB");
  }, []);

  const handleCellFocusIn = React.useCallback<GridEventListener<'cellFocusIn'>>((params) => {
      throw new Error("STUB");
  }, []);

  const startAutoScroll = React.useCallback(() => {
      throw new Error("STUB");
  }, [apiRef, totalHeaderHeight]);

  const handleCellMouseOver = React.useCallback<GridEventListener<'cellMouseOver'>>(
    (params, event) => {
          throw new Error("STUB");
      },
    [apiRef, startAutoScroll, stopAutoScroll, totalHeaderHeight],
  );

  const handleCellClick = useEventCallback<
    [GridEventLookup['cellClick']['params'], GridEventLookup['cellClick']['event']],
    void
  >((params, event) => {
      throw new Error("STUB");
  });

  const handleCellKeyDown = useEventCallback<
    [GridEventLookup['cellKeyDown']['params'], GridEventLookup['cellKeyDown']['event']],
    void
  >((params, event) => {
      throw new Error("STUB");
  });

  const serializeCellForClipboard = useEventCallback((id: GridRowId, field: string) => {
      throw new Error("STUB");
  });

  // Helper: get source values for a specific field from stored source cells
  const getSourceValuesForField = React.useCallback(
    (field: string): string[] => {
          throw new Error("STUB");
      },
    [serializeCellForClipboard],
  );

  const getFillSourceData = React.useCallback((): string[][] => {
      throw new Error("STUB");
  }, [apiRef, serializeCellForClipboard]);

  const getFillDownSourceData = React.useCallback(
    (selectedCells: { id: GridRowId; field: string }[]): string[][] => {
          throw new Error("STUB");
      },
    [apiRef, serializeCellForClipboard],
  );

  // Fill handle: apply fill using CellValueUpdater
  const applyFill = React.useCallback(() => {
      throw new Error("STUB");
  }, [
    apiRef,
    props.processRowUpdate,
    props.onProcessRowUpdateError,
    props.getRowId,
    getFillSourceData,
    getSourceValuesForField,
  ]);

  // Helper: clear fill preview classes from previously decorated elements
  const clearFillPreviewClasses = React.useCallback(() => {
      throw new Error("STUB");
  }, []);

  // Helper: clean up fill drag state (used on mouseup and unmount)
  const cleanupFillDrag = React.useCallback(() => {
      throw new Error("STUB");
  }, [apiRef, clearFillPreviewClasses]);

  // Fill handle: mousedown on the fill handle
  const handleFillHandleMouseDown = React.useCallback<GridEventListener<'cellMouseDown'>>(
    (params, event) => {
          throw new Error("STUB");
      },
    [
      apiRef,
      props.cellSelectionFillHandle,
      props.cellSelection,
      applyFill,
      cleanupFillDrag,
      startAutoScroll,
      stopAutoScroll,
      totalHeaderHeight,
    ],
  );

  // Fill handle: Ctrl+D to fill down
  const handleFillKeyDown = useEventCallback<
    [GridEventLookup['cellKeyDown']['params'], GridEventLookup['cellKeyDown']['event']],
    void
  >((_params, event) => {
      throw new Error("STUB");
  });

  // Fill handle: Ctrl+R to fill right
  const handleFillRightKeyDown = useEventCallback<
    [GridEventLookup['cellKeyDown']['params'], GridEventLookup['cellKeyDown']['event']],
    void
  >((_params, event) => {
      throw new Error("STUB");
  });

  useGridEvent(apiRef, 'cellMouseDown', runIfCellSelectionIsEnabled(handleFillHandleMouseDown));
  useGridEvent(apiRef, 'cellClick', runIfCellSelectionIsEnabled(handleCellClick));
  useGridEvent(apiRef, 'cellFocusIn', runIfCellSelectionIsEnabled(handleCellFocusIn));
  useGridEvent(apiRef, 'cellKeyDown', runIfCellSelectionIsEnabled(handleCellKeyDown));
  useGridEvent(apiRef, 'cellKeyDown', runIfCellSelectionIsEnabled(handleFillKeyDown));
  useGridEvent(apiRef, 'cellKeyDown', runIfCellSelectionIsEnabled(handleFillRightKeyDown));
  useGridEvent(apiRef, 'cellMouseDown', runIfCellSelectionIsEnabled(handleCellMouseDown));
  useGridEvent(apiRef, 'cellMouseOver', runIfCellSelectionIsEnabled(handleCellMouseOver));

  React.useEffect(() => {
      throw new Error("STUB");
  }, [apiRef, props.cellSelectionModel]);

  React.useEffect(() => {
      throw new Error("STUB");
  }, [apiRef, hasRootReference, handleMouseUp, stopAutoScroll, cleanupFillDrag]);

  const checkIfCellIsSelected = React.useCallback<GridPipeProcessor<'isCellSelected'>>(
    (isSelected, { id, field }) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const addClassesToCells = React.useCallback<GridPipeProcessor<'cellClassName'>>(
    (classes, { id, field }) => {
          throw new Error("STUB");
      },
    [apiRef, props.cellSelectionFillHandle],
  );

  const canUpdateFocus = React.useCallback<GridPipeProcessor<'canUpdateFocus'>>(
    (initialValue, { event, cell }) => {
          throw new Error("STUB");
      },
    [apiRef, props.cellSelection, hasClickedValidCellForRangeSelection],
  );

  const handleClipboardCopy = React.useCallback<GridPipeProcessor<'clipboardCopy'>>(
    (value) => {
          throw new Error("STUB");
      },
    [apiRef, ignoreValueFormatter, clipboardCopyCellDelimiter],
  );

  useGridRegisterPipeProcessor(apiRef, 'isCellSelected', checkIfCellIsSelected);
  useGridRegisterPipeProcessor(apiRef, 'cellClassName', addClassesToCells);
  useGridRegisterPipeProcessor(apiRef, 'canUpdateFocus', canUpdateFocus);
  useGridRegisterPipeProcessor(apiRef, 'clipboardCopy', handleClipboardCopy);
};
