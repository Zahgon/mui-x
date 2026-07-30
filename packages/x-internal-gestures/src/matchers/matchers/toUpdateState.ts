import { Gesture, KeyboardManager, PointerManager } from '../../core';
import { ActiveGesturesRegistry } from '../../core/ActiveGesturesRegistry';
import { AnyGesture } from '../AnyGesture';
import { MatcherState, SyncMatcherFn } from '../Matcher.types';
import { messages } from '../messages';

export type ToUpdateState<R = AnyGesture> = {
  /**
   * Asserts that the provided gesture state can be updated by emitting a change event
   * and that the state properties match the expected values.
   *
   * Internally it will:
   * 1. Instantiate the gesture twice
   * 2. Initialize one of the instances with a temporary element
   * 3. Emit a custom event named `${gestureName}ChangeState` with the expected state
   * 4. Verify that the state was properly updated
   * 5. Clean up resources by destroying the gesture and removing the temporary element
   *
   * This matcher is useful for verifying that gestures correctly handle runtime state updates.
   *
   * ## Requirements
   *
   * For this matcher to work correctly, the gesture must:
   * - Listen for events named `${gestureName}ChangeState`
   * - Implement the `updateState()` method to update its state properties
   * - Have a working `destroy()` method to clean up resources
   *
   * @example
   * ```ts
   * // Check if gesture state can be updated
   * expect(MoveGesture).toUpdateState({ isDragging: true });
   * ```
   */
  toUpdateState<
    G = R extends new (...args: any[]) => infer J ? (J extends Gesture<string> ? J : never) : never,
    // @ts-expect-error, accessing protected property for testing purposes
    ExpectedState extends Partial<G['mutableStateType']> = Partial<G['mutableStateType']>,
  >(
    expectedState: ExpectedState,
  ): void;
};

export const toUpdateState: SyncMatcherFn = function toUpdateState(
  this: MatcherState,
  received: AnyGesture,
  expected: Record<string, unknown>,
) {
    throw new Error("STUB");
};
