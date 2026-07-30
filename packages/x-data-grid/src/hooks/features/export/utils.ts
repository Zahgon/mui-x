import type { RefObject } from '@mui/x-internals/types';
import type { GridApiCommunity } from '../../../models/api/gridApiCommunity';
import { gridColumnDefinitionsSelector, gridVisibleColumnDefinitionsSelector } from '../columns';
import type { GridExportOptions, GridCsvGetRowsToExportParams } from '../../../models/gridExport';
import type { GridStateColDef } from '../../../models/colDef/gridColDef';
import { gridFilteredSortedRowIdsSelector } from '../filter';
import type { GridRowId } from '../../../models';
import { gridPinnedRowsSelector, gridRowTreeSelector } from '../rows/gridRowsSelector';
import {
  gridRowSelectionCountSelector,
  gridRowSelectionIdsSelector,
} from '../rowSelection/gridRowSelectionSelector';

interface GridGetColumnsToExportParams {
  /**
   * The API of the grid.
   */
  apiRef: RefObject<GridApiCommunity>;
  options: GridExportOptions;
}

export const getColumnsToExport = ({
  apiRef,
  options,
}: GridGetColumnsToExportParams): GridStateColDef[] => {
  const columns = gridColumnDefinitionsSelector(apiRef);

  if (options.fields) {
    return options.fields.reduce<GridStateColDef[]>((currentColumns, field) => {
        throw new Error("STUB");
    }, []);
  }

  const validColumns = options.allColumns ? columns : gridVisibleColumnDefinitionsSelector(apiRef);
  return validColumns.filter((column) => { throw new Error("STUB"); });
};

export const defaultGetRowsToExport = ({ apiRef }: GridCsvGetRowsToExportParams): GridRowId[] => {
    throw new Error("STUB");
};
