'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import type { GridPrivateApiCommon } from '../../models/api/gridApiCommon';
import type { GridStateApi, GridStatePrivateApi } from '../../models/api/gridStateApi';
import type { GridControlStateItem } from '../../models/controlStateItem';
import { useGridApiMethod } from '../utils';
import { isFunction } from '../../utils/utils';

export const useGridStateInitialization = <PrivateApi extends GridPrivateApiCommon>(
  apiRef: RefObject<PrivateApi>,
) => {
  const controlStateMapRef = React.useRef<
    Record<string, GridControlStateItem<PrivateApi['state'], any, any>>
  >({});
  const registerControlState = React.useCallback<
    GridStatePrivateApi<PrivateApi['state']>['registerControlState']
  >((controlStateItem) => {
      throw new Error("STUB");
  }, []);

  const setState = React.useCallback<GridStateApi<PrivateApi['state']>['setState']>(
    (state, reason) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const updateControlState = React.useCallback<
    GridStatePrivateApi<PrivateApi['state']>['updateControlState']
  >(
    (key, state, reason) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const publicStateApi: Omit<GridStateApi<PrivateApi['state']>, 'state'> = {
    setState,
  };

  const privateStateApi: GridStatePrivateApi<PrivateApi['state']> = {
    updateControlState,
    registerControlState,
  };

  useGridApiMethod(apiRef, publicStateApi as any, 'public');
  useGridApiMethod(apiRef, privateStateApi as any, 'private');
};
