import {
  lruMemoize,
  createSelectorCreator,
  OverrideMemoizeOptions,
  UnknownMemoizer,
} from 'reselect';
import type { CreateSelectorFunction } from './createSelectorType';

export type { CreateSelectorFunction } from './createSelectorType';

/* eslint-disable no-underscore-dangle */ // __cacheKey__

const reselectCreateSelector = createSelectorCreator({
  memoize: lruMemoize,
  memoizeOptions: {
    maxSize: 1,
    equalityCheck: Object.is,
  },
});

type SelectorWithArgs = ReturnType<typeof reselectCreateSelector> & { selectorArgs: any[3] };

/**
 * Creates a selector function that can be used to derive values from the store's state.
 *
 * The combiner function can have up to three additional parameters, but it **cannot have optional or default parameters**.
 *
 * This function accepts up to six functions and combines them into a single selector function.
 * The resulting selector will take the state from the combined selectors and any additional parameters required by the combiner.
 *
 * The return type of the resulting selector is determined by the return type of the combiner function.
 *
 * @example
 * const selector = createSelector(
 *  (state) => state.disabled
 * );
 *
 * @example
 * const selector = createSelector(
 *   (state) => state.disabled,
 *   (state) => state.open,
 *   (disabled, open) => ({ disabled, open })
 * );
 */
/* eslint-disable id-denylist */
export const createSelector = ((
  a: Function,
  b: Function,
  c?: Function,
  d?: Function,
  e?: Function,
  f?: Function,
  g?: Function,
  h?: Function,
  ...other: any[]
) => {
    throw new Error("STUB");
}) as unknown as CreateSelectorFunction;
/* eslint-enable id-denylist */

export const createSelectorMemoizedWithOptions =
  (options?: OverrideMemoizeOptions<UnknownMemoizer>): CreateSelectorFunction =>
  (...inputs: any[]) => {
      throw new Error("STUB");
  };

/**
 * Creates a memoized selector function that can be used to derive values from the store's state.
 * This is useful for selectors that produce non-primitive values, such as objects or arrays, where memoization can help prevent unnecessary re-renders in React components.
 *
 * The memoization is implemented in a way that only the most recent selector result is cached.
 * This is suitable for cases where the selector is called with the same state and arguments repeatedly,
 * but may not be ideal for selectors that are called with a wide variety of states and arguments.
 *
 * The combiner function can have up to three additional parameters, but it **cannot have optional or default parameters**.
 *
 * This function accepts up to six functions and combines them into a single selector function.
 * The resulting selector will take the state from the combined selectors and any additional parameters required by the combiner.
 *
 * The return type of the resulting selector is determined by the return type of the combiner function.
 *
 * @example
 * const selector = createSelectorMemoized(
 *  (state) => state.disabled
 * );
 *
 * @example
 * const selector = createSelectorMemoized(
 *   (state) => state.disabled,
 *   (state) => state.open,
 *   (disabled, open) => ({ disabled, open })
 * );
 */
export const createSelectorMemoized = createSelectorMemoizedWithOptions();
