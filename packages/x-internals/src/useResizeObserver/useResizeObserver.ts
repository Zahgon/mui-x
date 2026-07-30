'use client';
import * as React from 'react';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';

const isDevEnvironment = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test';

const noop = () => {};

export function useResizeObserver(
  ref: React.RefObject<HTMLElement | undefined | null>,
  fn: (entries: ResizeObserverEntry[]) => void,
  enabled?: boolean,
) {
  const fnRef = React.useRef(null as unknown as typeof fn);
  fnRef.current = fn;

  useEnhancedEffect(() => {
      throw new Error("STUB");
  }, [ref, enabled]);
}
