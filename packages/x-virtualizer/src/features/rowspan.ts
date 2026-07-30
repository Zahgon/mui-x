import { Store } from '@mui/x-internals/store';
import type { BaseState, ParamsWithDefaults } from '../useVirtualizer';
import type { RowRange } from '../models';
import type { RowSpanningState, RowSpanningCaches } from '../models/rowspan';
import { Virtualization } from './virtualization';

/* eslint-disable import/export, @typescript-eslint/no-redeclare */

const EMPTY_RANGE: RowRange = { firstRowIndex: 0, lastRowIndex: 0 };
const EMPTY_CACHES: RowSpanningCaches = {
  spannedCells: {},
  hiddenCells: {},
  hiddenCellOriginMap: {},
};

const selectors = {
  state: (state: Rowspan.State) => { throw new Error("STUB"); },
  hiddenCells: (state: Rowspan.State) => { throw new Error("STUB"); },
  spannedCells: (state: Rowspan.State) => { throw new Error("STUB"); },
  hiddenCellsOriginMap: (state: Rowspan.State) => { throw new Error("STUB"); },
};

export const Rowspan = {
  initialize: initializeState,
  use: useRowspan,
  selectors,
};
export namespace Rowspan {
  export type State = {
    rowSpanning: RowSpanningState;
  };
  export type API = ReturnType<typeof useRowspan>;
}

function initializeState(params: ParamsWithDefaults): Rowspan.State {
    throw new Error("STUB");
}

function useRowspan(
  store: Store<BaseState & Rowspan.State>,
  _params: ParamsWithDefaults,
  _api: Virtualization.API,
) {
    throw new Error("STUB");
}
