/* eslint-disable @typescript-eslint/no-redeclare */

export type Size = { width: number; height: number };
export const Size = {
  EMPTY: { width: 0, height: 0 },
  equals: (a: Size, b: Size) => { throw new Error("STUB"); },
};

export type Row = { [key: string | symbol]: any };
export type Column = { [key: string | symbol]: any };
export type ColumnWithWidth = {
  computedWidth: number;
} & Column;

export type RowId = any; // TODO

export type RowEntry = {
  id: any; // TODO
  model: Row;
};

export type PinnedRows = {
  top: RowEntry[];
  bottom: RowEntry[];
};
export const PinnedRows = {
  EMPTY: { top: [], bottom: [] } as PinnedRows,
};

export type PinnedColumns = {
  left: Column[];
  right: Column[];
};
export const PinnedColumns = {
  EMPTY: { left: [], right: [] } as PinnedColumns,
};

export type FocusedCell = {
  rowIndex: number;
  columnIndex: number;
  id?: any;
  field?: string;
};

export interface ColumnsRenderContext {
  firstColumnIndex: number;
  lastColumnIndex: number;
}
export interface RenderContext extends ColumnsRenderContext {
  firstRowIndex: number;
  lastRowIndex: number;
}

export interface GridScrollParams {
  left: number;
  top: number;
  renderContext?: RenderContext;
}

export type GridScrollFn = (v: GridScrollParams) => void;

export type PinnedRowPosition = keyof PinnedRows;

export type ScrollPosition = { top: number; left: number };
export const ScrollPosition = {
  EMPTY: { top: 0, left: 0 },
  equals: (a: ScrollPosition, b: ScrollPosition) => { throw new Error("STUB"); },
};

export enum ScrollDirection {
  NONE,
  UP,
  DOWN,
  LEFT,
  RIGHT,
}
export namespace ScrollDirection {
  export function forDelta(dx: number, dy: number) {
      throw new Error("STUB");
  }
}

export type RowRange = { firstRowIndex: number; lastRowIndex: number };
