import type { RefObject } from '@mui/x-internals/types';
import { useGridLogger } from './useGridLogger';
import type { GridPrivateApiCommon } from '../../models/api/gridApiCommon';
import { useGridEventPriority } from './useGridEvent';

export const useGridNativeEventListener = <
  PrivateApi extends GridPrivateApiCommon,
  K extends keyof HTMLElementEventMap,
>(
  apiRef: RefObject<PrivateApi>,
  ref: () => HTMLElement | undefined | null,
  eventName: K,
  handler: (event: HTMLElementEventMap[K]) => any,
  options?: AddEventListenerOptions,
) => {
  const logger = useGridLogger(apiRef, 'useNativeEventListener');

  useGridEventPriority(apiRef, 'rootMount', () => {
      throw new Error("STUB");
  });
};
