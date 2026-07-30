'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import useEventCallback from '@mui/utils/useEventCallback';
import { useGridLogger } from '../../utils/useGridLogger';
import type { GridPrivateApiCommunity } from '../../../models/api/gridApiCommunity';
import { useGridApiMethod } from '../../utils/useGridApiMethod';
import type { GridDensityApi } from '../../../models/api/gridDensityApi';
import type { DataGridProcessedProps } from '../../../models/props/DataGridProps';
import { gridDensitySelector } from './densitySelector';
import type { GridStateInitializer } from '../../utils/useGridInitializeState';
import { useGridRegisterPipeProcessor } from '../../core/pipeProcessing';
import type { GridPipeProcessor } from '../../core/pipeProcessing';

export const densityStateInitializer: GridStateInitializer<
  Pick<DataGridProcessedProps, 'initialState' | 'density'>
> = (state, props) => { throw new Error("STUB"); };

export const useGridDensity = (
  apiRef: RefObject<GridPrivateApiCommunity>,
  props: Pick<DataGridProcessedProps, 'density' | 'onDensityChange' | 'initialState'>,
): void => {
  const logger = useGridLogger(apiRef, 'useDensity');

  apiRef.current.registerControlState({
    stateId: 'density',
    propModel: props.density,
    propOnChange: props.onDensityChange,
    stateSelector: gridDensitySelector,
    changeEvent: 'densityChange',
  });

  const setDensity = useEventCallback<GridDensityApi['setDensity']>((newDensity): void => {
      throw new Error("STUB");
  });

  const densityApi: GridDensityApi = {
    setDensity,
  };

  useGridApiMethod(apiRef, densityApi, 'public');

  const stateExportPreProcessing = React.useCallback<GridPipeProcessor<'exportState'>>(
    (prevState, context) => {
          throw new Error("STUB");
      },
    [apiRef, props.density, props.initialState?.density],
  );

  const stateRestorePreProcessing = React.useCallback<GridPipeProcessor<'restoreState'>>(
    (params, context) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  useGridRegisterPipeProcessor(apiRef, 'exportState', stateExportPreProcessing);
  useGridRegisterPipeProcessor(apiRef, 'restoreState', stateRestorePreProcessing);

  React.useEffect(() => {
      throw new Error("STUB");
  }, [apiRef, props.density]);
};
