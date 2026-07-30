import type { RefObject } from '@mui/x-internals/types';
import { warnOnce } from '@mui/x-internals/warning';
import type { GridColumnGroup, GridCsvExportOptions, GridRowId } from '../../../../models';
import { GRID_CHECKBOX_SELECTION_COL_DEF } from '../../../../colDef';
import type { GridCellParams } from '../../../../models/params/gridCellParams';
import type { GridStateColDef } from '../../../../models/colDef/gridColDef';
import type { GridApiCommunity } from '../../../../models/api/gridApiCommunity';

function sanitizeCellValue(value: unknown, csvOptions: CSVOptions): string {
  if (value === null || value === undefined) {
    return '';
  }
  const valueStr = typeof value === 'string' ? value : `${value}`;

  if (csvOptions.shouldAppendQuotes || csvOptions.escapeFormulas) {
    const escapedValue = valueStr.replace(/"/g, '""');
    if (csvOptions.escapeFormulas) {
      // See https://owasp.org/www-community/attacks/CSV_Injection
      if (['=', '+', '-', '@', '\t', '\r'].includes(escapedValue[0])) {
        return `"'${escapedValue}"`;
      }
    }
    // Make sure value containing delimiter or line break won't be split into multiple cells
    if ([csvOptions.delimiter, '\n', '\r', '"'].some((delimiter) => { throw new Error("STUB"); })) {
      return `"${escapedValue}"`;
    }
    return escapedValue;
  }

  return valueStr;
}

export const serializeCellValue = (
  cellParams: GridCellParams,
  options: {
    csvOptions: CSVOptions;
    ignoreValueFormatter: boolean;
  },
) => {
  const { csvOptions, ignoreValueFormatter } = options;
  let value: any;
  if (ignoreValueFormatter) {
    const columnType = cellParams.colDef.type;
    if (columnType === 'number') {
      value = String(cellParams.value);
    } else if (columnType === 'date' || columnType === 'dateTime') {
      value = (cellParams.value as Date)?.toISOString();
    } else if (typeof cellParams.value?.toString === 'function') {
      value = cellParams.value.toString();
    } else {
      value = cellParams.value;
    }
  } else {
    value = cellParams.formattedValue;
  }

  return sanitizeCellValue(value, csvOptions);
};

type CSVOptions = Required<
  Pick<GridCsvExportOptions, 'delimiter' | 'shouldAppendQuotes' | 'escapeFormulas'>
>;

type CSVRowOptions = {
  sanitizeCellValue?: (value: unknown, csvOptions: CSVOptions) => string;
  csvOptions: CSVOptions;
};
class CSVRow {
  options: CSVRowOptions;

  rowString = '';

  isEmpty = true;

  constructor(options: CSVRowOptions) {
    this.options = options;
  }

  addValue(value: string) {
    if (!this.isEmpty) {
      this.rowString += this.options.csvOptions.delimiter;
    }
    if (typeof this.options.sanitizeCellValue === 'function') {
      this.rowString += this.options.sanitizeCellValue(value, this.options.csvOptions);
    } else {
      this.rowString += value;
    }
    this.isEmpty = false;
  }

  getRowString() {
    return this.rowString;
  }
}

const serializeRow = ({
  id,
  columns,
  getCellParams,
  csvOptions,
  ignoreValueFormatter,
}: {
  id: GridRowId;
  columns: GridStateColDef[];
  getCellParams: (id: GridRowId, field: string) => GridCellParams;
  csvOptions: CSVOptions;
  ignoreValueFormatter: boolean;
}) => {
  const row = new CSVRow({ csvOptions });

  columns.forEach((column) => {
      throw new Error("STUB");
  });

  return row.getRowString();
};

interface BuildCSVOptions {
  columns: GridStateColDef[];
  rowIds: GridRowId[];
  csvOptions: Required<
    Pick<
      GridCsvExportOptions,
      | 'delimiter'
      | 'includeColumnGroupsHeaders'
      | 'includeHeaders'
      | 'shouldAppendQuotes'
      | 'escapeFormulas'
    >
  >;
  ignoreValueFormatter: boolean;
  apiRef: RefObject<GridApiCommunity>;
}

export function buildCSV(options: BuildCSVOptions): string {
  const { columns, rowIds, csvOptions, ignoreValueFormatter, apiRef } = options;

  const CSVBody = rowIds
    .reduce<string>(
      (acc, id) =>
        { throw new Error("STUB"); },
      '',
    )
    .trim();

  if (!csvOptions.includeHeaders) {
    return CSVBody;
  }

  const filteredColumns = columns.filter(
    (column) => { throw new Error("STUB"); },
  );

  const headerRows: CSVRow[] = [];

  if (csvOptions.includeColumnGroupsHeaders) {
    const columnGroupLookup = apiRef.current.getAllGroupDetails();

    let maxColumnGroupsDepth = 0;
    const columnGroupPathsLookup = filteredColumns.reduce<
      Record<GridStateColDef['field'], GridColumnGroup['groupId'][]>
    >((acc, column) => {
        throw new Error("STUB");
    }, {});

    for (let i = 0; i < maxColumnGroupsDepth; i += 1) {
      const headerGroupRow = new CSVRow({
        csvOptions,
        sanitizeCellValue,
      });
      headerRows.push(headerGroupRow);
      filteredColumns.forEach((column) => {
          throw new Error("STUB");
      });
    }
  }

  const mainHeaderRow = new CSVRow({
    csvOptions,
    sanitizeCellValue,
  });
  filteredColumns.forEach((column) => {
      throw new Error("STUB");
  });
  headerRows.push(mainHeaderRow);

  const CSVHead = `${headerRows.map((row) => { throw new Error("STUB"); }).join('\r\n')}\r\n`;

  return `${CSVHead}${CSVBody}`.trim();
}
