'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import type { GridPrivateApiCommunity } from '../../../models/api/gridApiCommunity';
import type {
  GridEditingApi,
  GridEditingPrivateApi,
  GridEditingSharedApi,
  GridEditingSharedPrivateApi,
} from '../../../models/api/gridEditingApi';
import type { DataGridProcessedProps } from '../../../models/props/DataGridProps';
import { useGridApiMethod } from '../../utils/useGridApiMethod';
import type { GridConfiguration } from '../../../models/configuration/gridConfiguration';
import type { GridRowId } from '../../../models/gridRows';
import { useGridCellEditing } from './useGridCellEditing';
import { GridCellModes, GridEditModes } from '../../../models/gridEditRowModel';
import { useGridRowEditing } from './useGridRowEditing';
import type { GridStateInitializer } from '../../utils/useGridInitializeState';
import { gridEditRowsStateSelector } from './gridEditingSelectors';

export const editingStateInitializer: GridStateInitializer = (state) => { throw new Error("STUB"); };

export const useGridEditing = (
  apiRef: RefObject<GridPrivateApiCommunity>,
  props: Pick<
    DataGridProcessedProps,
    'isCellEditable' | 'editMode' | 'processRowUpdate' | 'dataSource' | 'onDataSourceError'
  >,
  configuration: GridConfiguration,
) => {
  useGridCellEditing(apiRef, props);
  useGridRowEditing(apiRef, props);

  const debounceMap = React.useRef<
    Record<GridRowId, Record<string, [ReturnType<typeof setTimeout>, () => void]>>
  >({});

  const { isCellEditable: isCellEditableProp } = props;

  const isCellEditableFn = configuration.hooks.useIsCellEditable(
    apiRef,
    props as DataGridProcessedProps,
  );
  const isCellEditable = React.useCallback<GridEditingApi['isCellEditable']>(
    (params) => {
          throw new Error("STUB");
      },
    [isCellEditableProp, isCellEditableFn],
  );

  const maybeDebounce = (
    id: GridRowId,
    field: string,
    debounceMs: number | undefined,
    callback: () => Promise<void>,
  ) => {
    if (!debounceMs) {
      callback();
      return;
    }

    if (!debounceMap.current[id]) {
      debounceMap.current[id] = {};
    }

    if (debounceMap.current[id][field]) {
      const [timeout] = debounceMap.current[id][field];
      clearTimeout(timeout);
    }

    // To run the callback immediately without waiting the timeout
    const runImmediately = () => {
        throw new Error("STUB");
    };

    const timeout = setTimeout(() => {
        throw new Error("STUB");
    }, debounceMs);

    debounceMap.current[id][field] = [timeout, runImmediately];
  };

  React.useEffect(() => {
      throw new Error("STUB");
  }, []);

  const runPendingEditCellValueMutation = React.useCallback<
    GridEditingPrivateApi['runPendingEditCellValueMutation']
  >((id, field) => {
      throw new Error("STUB");
  }, []);

  const setEditCellValue = React.useCallback<GridEditingApi['setEditCellValue']>(
    (params) => {
          throw new Error("STUB");
      },
    [apiRef, props.editMode],
  );

  const getRowWithUpdatedValues = React.useCallback<
    GridEditingSharedApi['getRowWithUpdatedValues']
  >(
    (id, field) => {
          throw new Error("STUB");
      },
    [apiRef, props.editMode],
  );

  const getEditCellMeta = React.useCallback<GridEditingSharedApi['unstable_getEditCellMeta']>(
    (id, field) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const editingSharedApi: GridEditingSharedApi = {
    isCellEditable,
    setEditCellValue,
    getRowWithUpdatedValues,
    unstable_getEditCellMeta: getEditCellMeta,
  };

  const editingSharedPrivateApi: GridEditingSharedPrivateApi = {
    runPendingEditCellValueMutation,
  };

  useGridApiMethod(apiRef, editingSharedApi, 'public');
  useGridApiMethod(apiRef, editingSharedPrivateApi, 'private');
};
