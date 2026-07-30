import type * as Excel from '@mui/x-internal-exceljs-fork';
import type { RefObject } from '@mui/x-internals/types';
import { GRID_DATE_COL_DEF, GRID_DATETIME_COL_DEF } from '@mui/x-data-grid-pro';
import type {
  GridRowId,
  GridColDef,
  GridApi,
  ValueOptions,
  GridValidRowModel,
} from '@mui/x-data-grid-pro';
import { isObject, isSingleSelectColDef, gridHasColSpanSelector } from '@mui/x-data-grid/internals';
import type { GridStateColDef, GridSingleSelectColDef } from '@mui/x-data-grid/internals';
import { warnOnce } from '@mui/x-internals/warning';
import type { ColumnsStylesInterface, GridExcelExportOptions } from '../gridExcelExportInterface';
import type { GridPrivateApiPremium } from '../../../../models/gridApiPremium';
import {
  addColumnGroupingHeaders,
  addSerializedRowToWorksheet,
  createValueOptionsSheetIfNeeded,
  getExcelJs,
} from './utils';
import type { SerializedColumns, SerializedRow, ValueOptionsData } from './utils';

export type { ExcelExportInitEvent } from './utils';

const getFormattedValueOptions = (
  colDef: GridSingleSelectColDef,
  row: GridValidRowModel,
  valueOptions: ValueOptions[],
  api: GridApi,
  callback: (value: any, index: number) => void,
) => {
  if (!colDef.valueOptions) {
    return;
  }
  const valueFormatter = colDef.valueFormatter;

  for (let i = 0; i < valueOptions.length; i += 1) {
    const option = valueOptions[i];
    let value: any;
    if (valueFormatter) {
      if (typeof option === 'object') {
        value = option.label;
      } else {
        value = String(colDef.valueFormatter!(option as never, row, colDef, { current: api }));
      }
    } else {
      value = typeof option === 'object' ? option.label : option;
    }
    callback(value, i);
  }
};

const commaRegex = /,/g;
const commaReplacement = 'CHAR(44)';

/**
 * FIXME: This function mutates the colspan info, but colspan info assumes that the columns
 * passed to it are always consistent. In this case, the exported columns may differ from the
 * actual rendered columns.
 * The caller of this function MUST call `resetColSpan()` before and after usage.
 */
export const serializeRowUnsafe = (
  id: GridRowId,
  columns: GridStateColDef[],
  apiRef: RefObject<GridPrivateApiPremium>,
  defaultValueOptionsFormulae: { [field: string]: { address: string } },
  options: Pick<BuildExcelOptions, 'escapeFormulas'>,
): SerializedRow => {
  const serializedRow: SerializedRow['row'] = {};
  const dataValidation: SerializedRow['dataValidation'] = {};
  const mergedCells: SerializedRow['mergedCells'] = [];

  const row = apiRef.current.getRow(id);
  const rowNode = apiRef.current.getRowNode(id);
  if (!row || !rowNode) {
    throw new Error(`MUI X: No row with id #${id} found`);
  }
  const outlineLevel = rowNode.depth;
  const hasColSpan = gridHasColSpanSelector(apiRef);

  if (hasColSpan) {
    // `colSpan` is only calculated for rendered rows, so we need to calculate it during export for every row
    apiRef.current.calculateColSpan(id, 0, columns.length, columns);
  }

  columns.forEach((column, colIndex) => {
      throw new Error("STUB");
  });

  return {
    row: serializedRow,
    dataValidation,
    outlineLevel,
    mergedCells,
  };
};

const defaultColumnsStyles = {
  [GRID_DATE_COL_DEF.type as string]: { numFmt: 'dd.mm.yyyy' },
  [GRID_DATETIME_COL_DEF.type as string]: { numFmt: 'dd.mm.yyyy hh:mm' },
};

export const serializeColumn = (column: GridColDef, columnsStyles: ColumnsStylesInterface) => {
  const { field, type } = column;

  return {
    key: field,
    headerText: column.headerName ?? column.field,
    // Excel width must stay between 0 and 255 (https://support.microsoft.com/en-us/office/change-the-column-width-and-row-height-72f5e3cc-994d-43e8-ae58-9774a0905f46)
    // From the example of column width behavior (https://docs.microsoft.com/en-US/office/troubleshoot/excel/determine-column-widths#example-of-column-width-behavior)
    // a value of 10 corresponds to 75px. This is an approximation, because column width depends on the font-size
    width: Math.min(255, column.width ? column.width / 7.5 : 8.43),
    style: { ...(type && defaultColumnsStyles?.[type]), ...columnsStyles?.[field] },
  };
};

export function serializeColumns(
  columns: GridStateColDef[],
  styles: ColumnsStylesInterface,
): SerializedColumns {
  return columns.map((column) => { throw new Error("STUB"); });
}

export async function getDataForValueOptionsSheet(
  columns: GridStateColDef[],
  valueOptionsSheetName: string,
  api: GridPrivateApiPremium,
): Promise<ValueOptionsData> {
  // Creates a temp worksheet to obtain the column letters
  const excelJS = await getExcelJs();
  const workbook: Excel.Workbook = new excelJS.Workbook();
  const worksheet = workbook.addWorksheet('Sheet1');

  const record: Record<string, { values: (string | number)[]; address: string }> = {};
  const worksheetColumns: typeof worksheet.columns = [];

  for (let i = 0; i < columns.length; i += 1) {
    const column = columns[i];
    const isCandidateColumn = isSingleSelectColDef(column) && Array.isArray(column.valueOptions);
    if (!isCandidateColumn) {
      continue;
    }

    worksheetColumns.push({ key: column.field });
    worksheet.columns = worksheetColumns;

    const header = column.headerName ?? column.field;
    const values: any[] = [header];
    getFormattedValueOptions(
      column,
      {},
      column.valueOptions as Array<ValueOptions>,
      api,
      (value) => {
          throw new Error("STUB");
      },
    );

    const letter = worksheet.getColumn(column.field).letter;
    const address = `${valueOptionsSheetName}!$${letter}$2:$${letter}$${values.length}`;

    record[column.field] = { values, address };
  }

  return record;
}
interface BuildExcelOptions
  extends
    Pick<GridExcelExportOptions, 'exceljsPreProcess' | 'exceljsPostProcess'>,
    Pick<
      Required<GridExcelExportOptions>,
      'valueOptionsSheetName' | 'includeHeaders' | 'includeColumnGroupsHeaders' | 'escapeFormulas'
    > {
  columns: GridStateColDef[];
  rowIds: GridRowId[];
  columnsStyles?: ColumnsStylesInterface;
}

export async function buildExcel(
  options: BuildExcelOptions,
  apiRef: RefObject<GridPrivateApiPremium>,
): Promise<Excel.Workbook> {
  const {
    columns,
    rowIds,
    includeHeaders,
    includeColumnGroupsHeaders,
    valueOptionsSheetName = 'Options',
    exceljsPreProcess,
    exceljsPostProcess,
    columnsStyles = {},
  } = options;

  const excelJS = await getExcelJs();
  const workbook: Excel.Workbook = new excelJS.Workbook();
  const worksheet = workbook.addWorksheet('Sheet1');

  const serializedColumns = serializeColumns(columns, columnsStyles);
  worksheet.columns = serializedColumns;

  if (exceljsPreProcess) {
    await exceljsPreProcess({
      workbook,
      worksheet,
    });
  }

  if (includeColumnGroupsHeaders) {
    const columnGroupPaths = columns.reduce<Record<string, string[]>>((acc, column) => {
        throw new Error("STUB");
    }, {});

    addColumnGroupingHeaders(
      worksheet,
      serializedColumns,
      columnGroupPaths,
      apiRef.current.getAllGroupDetails(),
    );
  }

  if (includeHeaders) {
    worksheet.addRow(columns.map((column) => { throw new Error("STUB"); }));
  }

  const valueOptionsData = await getDataForValueOptionsSheet(
    columns,
    valueOptionsSheetName,
    apiRef.current,
  );
  createValueOptionsSheetIfNeeded(valueOptionsData, valueOptionsSheetName, workbook);

  apiRef.current.resetColSpan();
  rowIds.forEach((id) => {
      throw new Error("STUB");
  });
  apiRef.current.resetColSpan();

  if (exceljsPostProcess) {
    await exceljsPostProcess({
      workbook,
      worksheet,
    });
  }

  return workbook;
}
