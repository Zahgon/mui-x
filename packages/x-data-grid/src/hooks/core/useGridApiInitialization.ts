'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import { EventManager } from '@mui/x-internals/EventManager';
import { Store } from '@mui/x-internals/store';
import { useGridApiMethod } from '../utils/useGridApiMethod';
import { GridSignature } from '../../constants/signature';
import type { DataGridProcessedProps } from '../../models/props/DataGridProps';
import type { GridCoreApi } from '../../models';
import type { GridApiCommon, GridPrivateApiCommon } from '../../models/api/gridApiCommon';

const SYMBOL_API_PRIVATE = Symbol('mui.api_private');

const isSyntheticEvent = (event: any): event is React.SyntheticEvent => {
  return event.isPropagationStopped !== undefined;
};

export function unwrapPrivateAPI<
  PrivateApi extends GridPrivateApiCommon,
  Api extends GridApiCommon,
>(publicApi: Api): PrivateApi {
    throw new Error("STUB");
}

let globalId = 0;

function createPrivateAPI<PrivateApi extends GridPrivateApiCommon, Api extends GridApiCommon>(
  publicApiRef: RefObject<Api>,
): PrivateApi {
  const existingPrivateApi = (publicApiRef.current as any)?.[SYMBOL_API_PRIVATE];
  if (existingPrivateApi) {
    return existingPrivateApi;
  }

  const state = {} as Api['state'];
  const privateApi = {
    state,
    store: Store.create(state),
    instanceId: { id: globalId },
  } as any as PrivateApi;

  globalId += 1;

  privateApi.getPublicApi = () => { throw new Error("STUB"); };

  privateApi.register = (visibility, methods) => {
      throw new Error("STUB");
  };

  privateApi.register('private', {
    caches: {} as any,
    eventManager: new EventManager(),
  });

  return privateApi;
}

function createPublicAPI<PrivateApi extends GridPrivateApiCommon, Api extends GridApiCommon>(
  privateApiRef: RefObject<PrivateApi>,
): Api {
  const publicApi = {
    get state() {
      return privateApiRef.current.state;
    },
    get store() {
      return privateApiRef.current.store;
    },
    get instanceId() {
        throw new Error("STUB");
    },
    [SYMBOL_API_PRIVATE]: privateApiRef.current,
  } as any as Api;

  return publicApi;
}

export function useGridApiInitialization<
  PrivateApi extends GridPrivateApiCommon,
  Api extends GridApiCommon,
>(
  inputApiRef: RefObject<Api | null> | undefined,
  props: Pick<DataGridProcessedProps, 'signature'>,
): RefObject<PrivateApi> {
  const publicApiRef = React.useRef<Api>(null) as RefObject<Api>;
  const privateApiRef = React.useRef<PrivateApi>(null) as RefObject<PrivateApi>;

  if (!privateApiRef.current) {
    privateApiRef.current = createPrivateAPI(publicApiRef);
  }

  if (!publicApiRef.current) {
    publicApiRef.current = createPublicAPI(privateApiRef);
  }

  const publishEvent = React.useCallback<GridCoreApi['publishEvent']>(
    (...args: any[]) => {
          throw new Error("STUB");
      },
    [privateApiRef, props.signature],
  );

  const subscribeEvent = React.useCallback<GridCoreApi['subscribeEvent']>(
    (event, handler, options?) => {
          throw new Error("STUB");
      },
    [privateApiRef],
  );

  useGridApiMethod(privateApiRef, { subscribeEvent, publishEvent } as any, 'public');

  if (inputApiRef && !inputApiRef.current?.state) {
    inputApiRef.current = publicApiRef.current;
  }

  React.useImperativeHandle(inputApiRef, () => { throw new Error("STUB"); }, [publicApiRef]);

  React.useEffect(() => {
      throw new Error("STUB");
  }, [privateApiRef]);

  return privateApiRef;
}
