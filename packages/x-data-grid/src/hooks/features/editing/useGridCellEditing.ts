'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import { warnOnce } from '@mui/x-internals/warning';
import useEventCallback from '@mui/utils/useEventCallback';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';
import { isDeepEqual } from '@mui/x-internals/isDeepEqual';
import { useGridEvent, useGridEventPriority } from '../../utils/useGridEvent';
import type { GridEventListener } from '../../../models/events/gridEventListener';
import { GridEditModes, GridCellModes } from '../../../models/gridEditRowModel';
import type { GridEditingState, GridEditCellProps } from '../../../models/gridEditRowModel';
import type { GridPrivateApiCommunity } from '../../../models/api/gridApiCommunity';
import type { DataGridProcessedProps } from '../../../models/props/DataGridProps';
import type {
  GridCellEditingApi,
  GridStopCellEditModeParams,
  GridStartCellEditModeParams,
  GridCellModesModel,
  GridCellModesModelProps,
  GridEditingSharedApi,
  GridCellEditingPrivateApi,
  GridEditingSharedPrivateApi,
} from '../../../models/api/gridEditingApi';
import { useGridApiMethod } from '../../utils/useGridApiMethod';
import { gridEditRowsStateSelector } from './gridEditingSelectors';
import type { GridRowId } from '../../../models/gridRows';
import { isPrintableKey, isPasteShortcut } from '../../../utils/keyboardUtils';
import { gridRowsLookupSelector } from '../rows/gridRowsSelector';
import { deepClone } from '../../../utils/utils';
import {
  GridCellEditStartReasons,
  GridCellEditStopReasons,
} from '../../../models/params/gridEditCellParams';
import type {
  GridCellEditStartParams,
  GridCellEditStopParams,
} from '../../../models/params/gridEditCellParams';
import { getDefaultCellValue } from './utils';
import type { GridUpdateRowParams } from '../../../models/gridDataSource';

export const useGridCellEditing = (
  apiRef: RefObject<GridPrivateApiCommunity>,
  props: Pick<
    DataGridProcessedProps,
    | 'editMode'
    | 'processRowUpdate'
    | 'onCellEditStart'
    | 'onCellEditStop'
    | 'cellModesModel'
    | 'onCellModesModelChange'
    | 'onProcessRowUpdateError'
    | 'signature'
    | 'dataSource'
  >,
) => {
  const [cellModesModel, setCellModesModel] = React.useState<GridCellModesModel>({});
  const cellModesModelRef = React.useRef(cellModesModel);
  const prevCellModesModel = React.useRef<GridCellModesModel>({});
  const {
    processRowUpdate,
    onProcessRowUpdateError,
    cellModesModel: cellModesModelProp,
    onCellModesModelChange,
  } = props;

  const runIfEditModeIsCell =
    <Args extends any[]>(callback: (...args: Args) => void) =>
    (...args: Args) => {
        throw new Error("STUB");
    };

  const throwIfNotEditable = React.useCallback(
    (id: GridRowId, field: string) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const throwIfNotInMode = React.useCallback(
    (id: GridRowId, field: string, mode: GridCellModes) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const handleCellDoubleClick = React.useCallback<GridEventListener<'cellDoubleClick'>>(
    (params, event) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const handleCellFocusOut = React.useCallback<GridEventListener<'cellFocusOut'>>(
    (params, event) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const handleCellKeyDown = React.useCallback<GridEventListener<'cellKeyDown'>>(
    (params, event) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const handleCellEditStart = React.useCallback<GridEventListener<'cellEditStart'>>(
    (params) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const handleCellEditStop = React.useCallback<GridEventListener<'cellEditStop'>>(
    (params) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const runIfNoFieldErrors =
    <Args extends Parameters<GridEventListener<'cellEditStop'>>>(
      callback?: (...args: Args) => void,
    ) =>
    async (...args: Args) => {
        throw new Error("STUB");
    };

  useGridEvent(apiRef, 'cellDoubleClick', runIfEditModeIsCell(handleCellDoubleClick));
  useGridEvent(apiRef, 'cellFocusOut', runIfEditModeIsCell(handleCellFocusOut));
  useGridEvent(apiRef, 'cellKeyDown', runIfEditModeIsCell(handleCellKeyDown));

  useGridEvent(apiRef, 'cellEditStart', runIfEditModeIsCell(handleCellEditStart));
  useGridEvent(apiRef, 'cellEditStop', runIfEditModeIsCell(handleCellEditStop));

  useGridEventPriority(apiRef, 'cellEditStart', props.onCellEditStart);
  useGridEventPriority(apiRef, 'cellEditStop', runIfNoFieldErrors(props.onCellEditStop));

  const getCellMode = React.useCallback<GridCellEditingApi['getCellMode']>(
    (id, field) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const updateCellModesModel = useEventCallback((newModel: GridCellModesModel) => {
      throw new Error("STUB");
  });

  const updateFieldInCellModesModel = React.useCallback(
    (id: GridRowId, field: string, newProps: GridCellModesModelProps | null) => {
          throw new Error("STUB");
      },
    [updateCellModesModel],
  );

  const updateOrDeleteFieldState = React.useCallback(
    (id: GridRowId, field: string, newProps: GridEditCellProps | null) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const startCellEditMode = React.useCallback<GridCellEditingApi['startCellEditMode']>(
    (params) => {
          throw new Error("STUB");
      },
    [throwIfNotEditable, throwIfNotInMode, updateFieldInCellModesModel],
  );

  const updateStateToStartCellEditMode = useEventCallback<[GridStartCellEditModeParams], void>(
    async (params) => {
          throw new Error("STUB");
      },
  ) as GridCellEditingApi['startCellEditMode'];

  const stopCellEditMode = React.useCallback<GridCellEditingApi['stopCellEditMode']>(
    (params) => {
          throw new Error("STUB");
      },
    [throwIfNotInMode, updateFieldInCellModesModel],
  );

  const updateStateToStopCellEditMode = useEventCallback<[GridStopCellEditModeParams], void>(
    async (params) => {
          throw new Error("STUB");
      },
  ) as GridCellEditingApi['stopCellEditMode'];

  const setCellEditingEditCellValue = React.useCallback<
    GridCellEditingPrivateApi['setCellEditingEditCellValue']
  >(
    async (params) => {
          throw new Error("STUB");
      },
    [apiRef, throwIfNotEditable, throwIfNotInMode, updateOrDeleteFieldState],
  );

  const getRowWithUpdatedValuesFromCellEditing = React.useCallback<
    GridCellEditingPrivateApi['getRowWithUpdatedValuesFromCellEditing']
  >(
    (id, field) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const editingApi: Omit<GridCellEditingApi, keyof GridEditingSharedApi> = {
    getCellMode,
    startCellEditMode,
    stopCellEditMode,
  };

  const editingPrivateApi: Omit<GridCellEditingPrivateApi, keyof GridEditingSharedPrivateApi> = {
    setCellEditingEditCellValue,
    getRowWithUpdatedValuesFromCellEditing,
  };

  useGridApiMethod(apiRef, editingApi, 'public');
  useGridApiMethod(apiRef, editingPrivateApi, 'private');

  React.useEffect(() => {
      throw new Error("STUB");
  }, [cellModesModelProp, updateCellModesModel]);

  // Run this effect synchronously so that the keyboard event can impact the yet-to-be-rendered input.
  useEnhancedEffect(() => {
      throw new Error("STUB");
  }, [apiRef, cellModesModel, updateStateToStartCellEditMode, updateStateToStopCellEditMode]);
};
