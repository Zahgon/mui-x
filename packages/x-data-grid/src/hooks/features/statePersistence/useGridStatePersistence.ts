import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import type { GridInitialStateCommunity } from '../../../models/gridStateCommunity';
import type { GridPrivateApiCommunity } from '../../../models/api/gridApiCommunity';
import type { GridStatePersistenceApi } from './gridStatePersistenceInterface';
import { useGridApiMethod } from '../../utils';

export const useGridStatePersistence = (apiRef: RefObject<GridPrivateApiCommunity>) => {
  const exportState = React.useCallback<
    GridStatePersistenceApi<GridInitialStateCommunity>['exportState']
  >(
    (params = {}) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const restoreState = React.useCallback<
    GridStatePersistenceApi<GridInitialStateCommunity>['restoreState']
  >(
    (stateToRestore) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const statePersistenceApi: GridStatePersistenceApi<GridInitialStateCommunity> = {
    exportState,
    restoreState,
  };

  useGridApiMethod(apiRef, statePersistenceApi, 'public');
};
