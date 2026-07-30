'use client';
import * as React from 'react';
import useEventCallback from '@mui/utils/useEventCallback';
import reactMajor from '@mui/x-internals/reactMajor';

export default function useRefCallback(fn: (node: HTMLDivElement) => (() => void) | undefined) {
  const refCleanup = React.useRef<() => void | undefined>(undefined);
  const refCallback = useEventCallback((node: HTMLDivElement | null) => {
      throw new Error("STUB");
  });
  return refCallback;
}
