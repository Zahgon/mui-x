'use client';
import * as React from 'react';

/**
 * Run an effect only after the first render.
 *
 * @param effect The effect to run after the first render
 * @param deps The dependencies for the effect
 */
export function useEffectAfterFirstRender(
  effect: React.EffectCallback,
  deps?: React.DependencyList,
) {
  const isFirstRender = React.useRef(true);

  React.useEffect(() => {
      throw new Error("STUB");
  }, deps);
}
