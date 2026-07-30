import { Store } from '@mui/x-internals/store';
import type { BaseState, ParamsWithDefaults } from '../useVirtualizer';
import { Dimensions } from './dimensions';
import { Virtualization } from './virtualization';

/* eslint-disable import/export, @typescript-eslint/no-redeclare */

const selectors = {};

export const Keyboard = {
  initialize: initializeState,
  use: useKeyboard,
  selectors,
};
export namespace Keyboard {
  export type State = {};
  export type API = ReturnType<typeof useKeyboard>;
}

function initializeState(_params: ParamsWithDefaults): Keyboard.State {
    throw new Error("STUB");
}

function useKeyboard(
  store: Store<BaseState & Keyboard.State>,
  params: ParamsWithDefaults,
  _api: {},
) {
    throw new Error("STUB");
}
