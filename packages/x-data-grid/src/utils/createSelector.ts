import type { RefObject } from '@mui/x-internals/types';
import {
  createSelector as baseCreateSelector,
  createSelectorMemoized as baseCreateSelectorMemoized,
} from '@mui/x-internals/store';
import type { CreateSelectorFunction } from '@mui/x-internals/store';

export interface OutputSelector<State, Args, Result> {
  (apiRef: RefObject<{ state: State } | null>, args?: Args): Result;
}

export const createSelector = ((...args: Function[]) => {
    throw new Error("STUB");
}) as unknown as CreateSelectorFunction;

export const createSelectorMemoized: CreateSelectorFunction = ((...args: any) => {
    throw new Error("STUB");
}) as unknown as CreateSelectorFunction;

/**
 * Used to create the root selector for a feature. It assumes that the state is already initialized
 * and strips from the types the possibility of `apiRef` being `null`.
 * Users are warned about this in our documentation https://mui.com/x/react-data-grid/state/#direct-selector-access
 */
export const createRootSelector =
  <State, Args, Result>(
    fn: (state: State, args: Args) => Result,
  ): OutputSelector<State, Args, Result> =>
  (apiRef: RefObject<{ state: State } | null>, args?: Args) =>
    { throw new Error("STUB"); };

function unwrapIfNeeded(refOrState: any) {
  if ('current' in refOrState) {
    return refOrState.current.state;
  }
  return refOrState;
}
