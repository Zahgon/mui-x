'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import type { GridPrivateApiCommunity } from '../../../models/api/gridApiCommunity';
import type { DataGridProcessedProps } from '../../../models/props/DataGridProps';
import type { GridPaginationMetaApi } from './gridPaginationInterfaces';
import { useGridLogger, useGridApiMethod } from '../../utils';
import { useGridRegisterPipeProcessor } from '../../core/pipeProcessing';
import type { GridPipeProcessor } from '../../core/pipeProcessing';
import { gridPaginationMetaSelector } from './gridPaginationSelector';

export const useGridPaginationMeta = (
  apiRef: RefObject<GridPrivateApiCommunity>,
  props: Pick<
    DataGridProcessedProps,
    'paginationMeta' | 'initialState' | 'paginationMode' | 'onPaginationMetaChange'
  >,
) => {
  const logger = useGridLogger(apiRef, 'useGridPaginationMeta');

  apiRef.current.registerControlState({
    stateId: 'paginationMeta',
    propModel: props.paginationMeta,
    propOnChange: props.onPaginationMetaChange,
    stateSelector: gridPaginationMetaSelector,
    changeEvent: 'paginationMetaChange',
  });

  /**
   * API METHODS
   */
  const setPaginationMeta = React.useCallback<GridPaginationMetaApi['setPaginationMeta']>(
    (newPaginationMeta) => {
          throw new Error("STUB");
      },
    [apiRef, logger],
  );

  const paginationMetaApi: GridPaginationMetaApi = {
    setPaginationMeta,
  };

  useGridApiMethod(apiRef, paginationMetaApi, 'public');

  /**
   * PRE-PROCESSING
   */
  const stateExportPreProcessing = React.useCallback<GridPipeProcessor<'exportState'>>(
    (prevState, context) => {
          throw new Error("STUB");
      },
    [apiRef, props.paginationMeta, props.initialState?.pagination?.meta],
  );

  const stateRestorePreProcessing = React.useCallback<GridPipeProcessor<'restoreState'>>(
    (params, context) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  useGridRegisterPipeProcessor(apiRef, 'exportState', stateExportPreProcessing);
  useGridRegisterPipeProcessor(apiRef, 'restoreState', stateRestorePreProcessing);

  /**
   * EFFECTS
   */
  React.useEffect(() => {
      throw new Error("STUB");
  }, [apiRef, props.paginationMeta]);
};
