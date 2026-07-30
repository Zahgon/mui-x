'use client';
import * as React from 'react';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';
import { ANIMATION_DURATION_MS, ANIMATION_TIMING_FUNCTION_JS } from './animation';
import { Transition } from './Transition';
import { shallowEqual } from '../shallowEqual';

/** Animates a ref. The animation can be skipped by setting {@link skip} to true.
 *
 * If possible, prefer {@link useAnimate}.
 *
 * - If {@link skip} is false, a transition will be started.
 * - If {@link skip} is true and no transition is in progress, no transition will be started and {@link applyProps} will
 *   never be called.
 * - If {@link skip} becomes true and a transition is in progress, the transition will immediately end and
 *   {@link applyProps} be called with the final value.
 * */
export function useAnimateInternal<Props extends {}, Elem extends Element>(
  props: Props,
  {
    createInterpolator,
    applyProps,
    skip,
    initialProps = props,
  }: {
    createInterpolator: (lastProps: Props, newProps: Props) => (t: number) => Props;
    applyProps: (element: Elem, props: Props) => void;
    skip?: boolean;
    initialProps?: Props;
  },
) {
  const lastInterpolatedPropsRef = React.useRef(initialProps);
  const transitionRef = React.useRef<Transition>(null);
  const elementRef = React.useRef<Elem>(null);
  const lastPropsRef = React.useRef<Props>(props);

  useEnhancedEffect(() => {
      throw new Error("STUB");
  }, [props]);

  useEnhancedEffect(() => {
      throw new Error("STUB");
  }, [props, skip]);

  const animate = React.useCallback(
    (element: Elem) => {
          throw new Error("STUB");
      },
    [applyProps, createInterpolator, props],
  );

  const setRef = React.useCallback(
    (element: Elem | null) => {
          throw new Error("STUB");
      },
    [animate, props, skip],
  );

  return [setRef, lastInterpolatedPropsRef.current] as const;
}
