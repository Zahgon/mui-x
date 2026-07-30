import { useSyncExternalStore } from 'use-sync-external-store/shim';

const emptySubscribe = () => { throw new Error("STUB"); };
const clientSnapshot = () => { throw new Error("STUB"); };
const serverSnapshot = () => { throw new Error("STUB"); };

export const useIsSSR = () => useSyncExternalStore(emptySubscribe, clientSnapshot, serverSnapshot);
