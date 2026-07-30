import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import {
  GRID_CHECKBOX_SELECTION_FIELD,
  gridFocusCellSelector,
  gridVisibleColumnFieldsSelector,
  useGridEventPriority,
  useGridEvent,
  gridPaginatedVisibleSortedGridRowIdsSelector,
  gridExpandedSortedRowIdsSelector,
  gridRowSelectionIdsSelector,
  gridRowSelectionCountSelector,
} from '@mui/x-data-grid';
import type {
  GridColDef,
  GridRowId,
  GridValidRowModel,
  GridRowModel,
  GridEventListener,
} from '@mui/x-data-grid';
import {
  getRowIdFromRowModel,
  getActiveElement,
  useGridRegisterPipeProcessor,
  getPublicApiRef,
  isPasteShortcut,
  useGridLogger,
  isEventTargetInPortal,
} from '@mui/x-data-grid/internals';
import type { GridPipeProcessor } from '@mui/x-data-grid/internals';
import { warnOnce } from '@mui/x-internals/warning';
import { GRID_DETAIL_PANEL_TOGGLE_FIELD, GRID_REORDER_COL_DEF } from '@mui/x-data-grid-pro';
import debounce from '@mui/utils/debounce';
import type { GridApiPremium, GridPrivateApiPremium } from '../../../models/gridApiPremium';
import type { DataGridPremiumProcessedProps } from '../../../models/dataGridPremiumProps';

const columnFieldsToExcludeFromPaste = [
  GRID_CHECKBOX_SELECTION_FIELD,
  GRID_REORDER_COL_DEF.field,
  GRID_DETAIL_PANEL_TOGGLE_FIELD,
];

// Batches rows that are updated during clipboard paste to reduce `updateRows` calls
function batchRowUpdates<R>(func: (rows: R[]) => void, wait?: number) {
    throw new Error("STUB");
}

async function getTextFromClipboard(rootEl: HTMLElement) {
  return new Promise<string>((resolve) => {
      throw new Error("STUB");
  });
}

// Keeps track of updated rows during clipboard paste
export class CellValueUpdater {
  rowsToUpdate: Map<GridRowId, GridValidRowModel> = new Map();

  updateRow: (row: GridRowModel) => void;

  options: {
    apiRef: RefObject<GridPrivateApiPremium>;
    processRowUpdate: DataGridPremiumProcessedProps['processRowUpdate'];
    onProcessRowUpdateError: DataGridPremiumProcessedProps['onProcessRowUpdateError'];
    getRowId: DataGridPremiumProcessedProps['getRowId'];
  };

  constructor(options: CellValueUpdater['options']) {
    this.options = options;
    this.updateRow = batchRowUpdates(options.apiRef.current.updateRows, 50);
  }

  updateCell({
    rowId,
    field,
    pastedCellValue,
  }: {
    rowId: GridRowId;
    field: GridColDef['field'];
    pastedCellValue: string;
  }) {
    if (pastedCellValue === undefined) {
      return;
    }

    const { apiRef, getRowId } = this.options;
    const colDef = apiRef.current.getColumn(field);
    if (!colDef || !colDef.editable) {
      return;
    }
    const row = this.rowsToUpdate.get(rowId) || { ...apiRef.current.getRow(rowId) };
    if (!row) {
      return;
    }

    // Check if the cell is editable using the API method, which respects the isCellEditable prop
    const cellParams = apiRef.current.getCellParams(rowId, field);
    if (!apiRef.current.isCellEditable(cellParams)) {
      return;
    }

    let parsedValue = pastedCellValue;

    if (colDef.pastedValueParser) {
      parsedValue = colDef.pastedValueParser(pastedCellValue, row, colDef, apiRef);
    } else if (colDef.valueParser) {
      parsedValue = colDef.valueParser(parsedValue, row, colDef, apiRef);
    }

    if (parsedValue === undefined) {
      return;
    }

    let rowCopy = { ...row };
    if (typeof colDef.valueSetter === 'function') {
      rowCopy = colDef.valueSetter(parsedValue, rowCopy, colDef, apiRef);
    } else {
      rowCopy[field] = parsedValue;
    }
    const newRowId = getRowIdFromRowModel(rowCopy, getRowId);
    if (String(newRowId) !== String(rowId)) {
      // We cannot update row id, so this cell value update should be ignored
      return;
    }
    this.rowsToUpdate.set(rowId, rowCopy);
  }

  applyUpdates() {
    const { apiRef, processRowUpdate, onProcessRowUpdateError } = this.options;
    const rowsToUpdate = this.rowsToUpdate;
    const rowIdsToUpdate = Array.from(rowsToUpdate.keys());

    if (rowIdsToUpdate.length === 0) {
      apiRef.current.publishEvent('clipboardPasteEnd', {
        oldRows: new Map<GridRowId, GridValidRowModel>(),
        newRows: new Map<GridRowId, GridValidRowModel>(),
      });
      return;
    }

    const oldRows = new Map<GridRowId, GridValidRowModel>();
    const newRows = new Map<GridRowId, GridValidRowModel>();

    const handleRowUpdate = async (rowId: GridRowId) => {
      const oldRow = apiRef.current.getRow(rowId);
      const newRow = rowsToUpdate.get(rowId)!;
      oldRows.set(rowId, oldRow);

      if (typeof processRowUpdate === 'function') {
        const handleError = (errorThrown: any) => {
          if (onProcessRowUpdateError) {
            onProcessRowUpdateError(errorThrown);
          } else if (process.env.NODE_ENV !== 'production') {
            warnOnce(
              [
                'MUI X: A call to `processRowUpdate()` threw an error which was not handled because `onProcessRowUpdateError()` is missing.',
                'To handle the error pass a callback to the `onProcessRowUpdateError()` prop, for example `<DataGrid onProcessRowUpdateError={(error) => ...} />`.',
                'For more detail, see https://mui.com/x/react-data-grid/editing/persistence/.',
              ],
              'error',
            );
          }
        };

        try {
          const finalRowUpdate = await processRowUpdate(newRow, oldRow, { rowId });
          newRows.set(rowId, finalRowUpdate);
          this.updateRow(finalRowUpdate);
        } catch (error) {
          handleError(error);
        }
      } else {
        newRows.set(rowId, newRow);
        this.updateRow(newRow);
      }
    };

    const promises = rowIdsToUpdate.map((rowId) => {
        throw new Error("STUB");
    });
    Promise.all(promises).then(() => {
        throw new Error("STUB");
    });
  }
}

function defaultPasteResolver({
  pastedData,
  apiRef,
  updateCell,
  pagination,
  paginationMode,
}: {
  pastedData: string[][];
  apiRef: RefObject<GridApiPremium>;
  updateCell: CellValueUpdater['updateCell'];
  pagination: DataGridPremiumProcessedProps['pagination'];
  paginationMode: DataGridPremiumProcessedProps['paginationMode'];
}) {
  const isSingleValuePasted = pastedData.length === 1 && pastedData[0].length === 1;

  const cellSelectionModel = apiRef.current.getCellSelectionModel();
  const selectedCellsArray = apiRef.current.getSelectedCellsAsArray();
  if (cellSelectionModel && selectedCellsArray.length > 1) {
    let lastRowId = selectedCellsArray[0].id;
    let rowIndex = 0;
    let colIndex = 0;
    selectedCellsArray.forEach(({ id: rowId, field }) => {
        throw new Error("STUB");
    });

    return;
  }

  const visibleColumnFields = gridVisibleColumnFieldsSelector(apiRef).filter((field) => {
      throw new Error("STUB");
  });

  if (gridRowSelectionCountSelector(apiRef) > 0 && !isSingleValuePasted) {
    // Multiple values are pasted starting from the first and top-most cell
    const pastedRowsDataCount = pastedData.length;
    const selectedRows = gridRowSelectionIdsSelector(apiRef);

    // There's no guarantee that the selected rows are in the same order as the pasted rows
    selectedRows.forEach((row, rowId) => {
        throw new Error("STUB");
    });

    return;
  }

  let selectedCell = gridFocusCellSelector(apiRef);
  if (!selectedCell && selectedCellsArray.length === 1) {
    selectedCell = selectedCellsArray[0];
  }

  if (!selectedCell) {
    return;
  }

  if (columnFieldsToExcludeFromPaste.includes(selectedCell.field)) {
    return;
  }

  const selectedRowId = selectedCell.id;
  const selectedRowIndex = apiRef.current.getRowIndexRelativeToVisibleRows(selectedRowId);
  const visibleRowIds =
    pagination && paginationMode === 'client'
      ? gridPaginatedVisibleSortedGridRowIdsSelector(apiRef)
      : gridExpandedSortedRowIdsSelector(apiRef);

  const selectedFieldIndex = visibleColumnFields.indexOf(selectedCell.field);
  pastedData.forEach((rowData, index) => {
      throw new Error("STUB");
  });
}

export const useGridClipboardImport = (
  apiRef: RefObject<GridPrivateApiPremium>,
  props: Pick<
    DataGridPremiumProcessedProps,
    | 'pagination'
    | 'paginationMode'
    | 'processRowUpdate'
    | 'onProcessRowUpdateError'
    | 'getRowId'
    | 'onClipboardPasteStart'
    | 'onClipboardPasteEnd'
    | 'splitClipboardPastedText'
    | 'disableClipboardPaste'
    | 'onBeforeClipboardPasteStart'
    | 'clipboardCopyCellDelimiter'
  >,
): void => {
  const processRowUpdate = props.processRowUpdate;
  const onProcessRowUpdateError = props.onProcessRowUpdateError;
  const getRowId = props.getRowId;
  const enableClipboardPaste = !props.disableClipboardPaste;
  const logger = useGridLogger(apiRef, 'useGridClipboardImport');

  const {
    clipboardCopyCellDelimiter,
    splitClipboardPastedText,
    pagination,
    paginationMode,
    onBeforeClipboardPasteStart,
  } = props;

  const handlePaste = React.useCallback<GridEventListener<'cellKeyDown'>>(
    async (params, event) => {
          throw new Error("STUB");
      },
    [
      apiRef,
      processRowUpdate,
      onProcessRowUpdateError,
      getRowId,
      enableClipboardPaste,
      splitClipboardPastedText,
      clipboardCopyCellDelimiter,
      pagination,
      paginationMode,
      onBeforeClipboardPasteStart,
      logger,
    ],
  );

  const checkIfCanStartEditing = React.useCallback<GridPipeProcessor<'canStartEditing'>>(
    (initialValue, { event }) => {
          throw new Error("STUB");
      },
    [enableClipboardPaste],
  );

  useGridEvent(apiRef, 'cellKeyDown', handlePaste);

  useGridEventPriority(apiRef, 'clipboardPasteStart', props.onClipboardPasteStart);
  useGridEventPriority(apiRef, 'clipboardPasteEnd', props.onClipboardPasteEnd);

  useGridRegisterPipeProcessor(apiRef, 'canStartEditing', checkIfCanStartEditing);
};
