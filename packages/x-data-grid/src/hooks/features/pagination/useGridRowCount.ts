'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import useLazyRef from '@mui/utils/useLazyRef';
import { useStoreEffect } from '@mui/x-internals/store';
import type { GridPrivateApiCommunity } from '../../../models/api/gridApiCommunity';
import type { DataGridProcessedProps } from '../../../models/props/DataGridProps';
import type { GridPaginationRowCountApi, GridPaginationState } from './gridPaginationInterfaces';
import { gridFilteredTopLevelRowCountSelector } from '../filter';
import { useGridLogger, useGridApiMethod, useGridEvent } from '../../utils';
import { useGridRegisterPipeProcessor } from '../../core/pipeProcessing';
import type { GridPipeProcessor } from '../../core/pipeProcessing';
import {
  gridPaginationRowCountSelector,
  gridPaginationMetaSelector,
  gridPaginationModelSelector,
} from './gridPaginationSelector';

export const useGridRowCount = (
  apiRef: RefObject<GridPrivateApiCommunity>,
  props: Pick<
    DataGridProcessedProps,
    'rowCount' | 'initialState' | 'paginationMode' | 'onRowCountChange'
  >,
) => {
  const logger = useGridLogger(apiRef, 'useGridRowCount');

  const previousPageSize = useLazyRef(() => { throw new Error("STUB"); });

  const onRowCountChangeProp = props.onRowCountChange;

  apiRef.current.registerControlState({
    stateId: 'paginationRowCount',
    propModel: props.rowCount,
    propOnChange: onRowCountChangeProp,
    stateSelector: gridPaginationRowCountSelector,
    changeEvent: 'rowCountChange',
  });

  /**
   * API METHODS
   */
  const setRowCount = React.useCallback<GridPaginationRowCountApi['setRowCount']>(
    (newRowCount) => {
          throw new Error("STUB");
      },
    [apiRef, logger, onRowCountChangeProp],
  );

  const paginationRowCountApi: GridPaginationRowCountApi = {
    setRowCount,
  };

  useGridApiMethod(apiRef, paginationRowCountApi, 'public');

  /**
   * PRE-PROCESSING
   */
  const stateExportPreProcessing = React.useCallback<GridPipeProcessor<'exportState'>>(
    (prevState, context) => {
          throw new Error("STUB");
      },
    [apiRef, props.rowCount, props.initialState?.pagination?.rowCount],
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
   * EVENTS
   */
  const handlePaginationModelChange = React.useCallback(
    (model: GridPaginationState['paginationModel']) => {
          throw new Error("STUB");
      },
    [props.paginationMode, previousPageSize, apiRef],
  );

  useGridEvent(apiRef, 'paginationModelChange', handlePaginationModelChange);

  /**
   * EFFECTS
   */
  React.useEffect(() => {
      throw new Error("STUB");
  }, [apiRef, props.paginationMode, props.rowCount]);

  useStoreEffect(
    // typings not supported currently, but methods work
    apiRef.current.store as any,
    () => {
        throw new Error("STUB");
    },
    (_, isLastPageOrRowCount) => {
        throw new Error("STUB");
    },
  );

  React.useEffect(() => {
      throw new Error("STUB");
  }, [apiRef, props.paginationMode]);
};
