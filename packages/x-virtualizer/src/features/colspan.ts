import useEventCallback from '@mui/utils/useEventCallback';
import { Store } from '@mui/x-internals/store';
import type { integer } from '@mui/x-internals/types';
import type { BaseState, ParamsWithDefaults } from '../useVirtualizer';
import type { ColumnWithWidth, RowId } from '../models';
import type { CellColSpanInfo } from '../models/colspan';
import { Virtualization } from './virtualization';

/* eslint-disable import/export, @typescript-eslint/no-redeclare */

type ColumnIndex = number;
type ColspanMap = Map<RowId, Record<ColumnIndex, CellColSpanInfo>>;

export type ColspanParams = {
  enabled: boolean;
  getColspan: (rowId: RowId, column: ColumnWithWidth, columnIndex: integer) => integer;
};

const selectors = {};

export const Colspan = {
  initialize: initializeState,
  use: useColspan,
  selectors,
};
export namespace Colspan {
  export type State = {
    colspanMap: ColspanMap;
  };
  export type API = ReturnType<typeof useColspan>;
}

function initializeState(_params: ParamsWithDefaults) {
    throw new Error("STUB");
}

function useColspan(
  store: Store<BaseState & Colspan.State>,
  params: ParamsWithDefaults,
  api: Virtualization.API,
) {
    throw new Error("STUB");
}

function calculateCellColSpan(
  lookup: ColspanMap,
  columnIndex: number,
  rowId: RowId,
  minFirstColumnIndex: number,
  maxLastColumnIndex: number,
  columns: ColumnWithWidth[],
  getColspan: ColspanParams['getColspan'],
) {
    throw new Error("STUB");
}

function setCellColSpanInfo(
  colspanMap: ColspanMap,
  rowId: RowId,
  columnIndex: ColumnIndex,
  cellColSpanInfo: CellColSpanInfo,
) {
    throw new Error("STUB");
}
