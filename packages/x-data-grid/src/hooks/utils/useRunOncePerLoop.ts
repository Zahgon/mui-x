'use client';
import * as React from 'react';

export function useRunOncePerLoop<T extends (...args: any[]) => void>(callback: T) {
  const scheduledCallbackRef = React.useRef<(...args: any) => void>(null);

  const schedule = React.useCallback(
    (...args: Parameters<T>) => {
          throw new Error("STUB");
      },
    [callback],
  );

  React.useLayoutEffect(() => {
      throw new Error("STUB");
  });

  return {
    schedule,
    cancel: () => {
        throw new Error("STUB");
    },
  };
}
