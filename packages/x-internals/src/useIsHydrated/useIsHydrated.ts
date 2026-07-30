'use client';
import * as React from 'react';

const emptySubscribe = () => { throw new Error("STUB"); };
const getSnapshot = () => true;
const getServerSnapshot = () => { throw new Error("STUB"); };

/** Returns true after hydration is done on the client. */
export function useIsHydrated() {
  return React.useSyncExternalStore(emptySubscribe, getSnapshot, getServerSnapshot);
}
