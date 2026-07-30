'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import useEventCallback from '@mui/utils/useEventCallback';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';
import { warnOnce } from '@mui/x-internals/warning';
import { isDeepEqual } from '@mui/x-internals/isDeepEqual';
import { useGridEvent, useGridEventPriority } from '../../utils/useGridEvent';
import type { GridEventListener } from '../../../models/events/gridEventListener';
import { GridEditModes, GridRowModes } from '../../../models/gridEditRowModel';
import type {
  GridEditingState,
  GridEditCellProps,
  GridEditRowProps,
} from '../../../models/gridEditRowModel';
import type { GridPrivateApiCommunity } from '../../../models/api/gridApiCommunity';
import type { DataGridProcessedProps } from '../../../models/props/DataGridProps';
import type {
  GridRowEditingApi,
  GridEditingSharedApi,
  GridStopRowEditModeParams,
  GridStartRowEditModeParams,
  GridRowModesModel,
  GridRowModesModelProps,
  GridRowEditingPrivateApi,
  GridEditingSharedPrivateApi,
} from '../../../models/api/gridEditingApi';
import { useGridApiMethod } from '../../utils/useGridApiMethod';
import { gridEditRowsStateSelector, gridRowIsEditingSelector } from './gridEditingSelectors';
import type { GridRowId, GridValidRowModel } from '../../../models/gridRows';
import { isPrintableKey, isPasteShortcut } from '../../../utils/keyboardUtils';
import {
  gridColumnDefinitionsSelector,
  gridVisibleColumnFieldsSelector,
} from '../columns/gridColumnsSelector';
import type { GridCellParams } from '../../../models/params/gridCellParams';
import { gridRowsLookupSelector } from '../rows/gridRowsSelector';
import { deepClone } from '../../../utils/utils';
import {
  GridRowEditStopReasons,
  GridRowEditStartReasons,
} from '../../../models/params/gridRowParams';
import type {
  GridRowEditStopParams,
  GridRowEditStartParams,
} from '../../../models/params/gridRowParams';
import { GRID_ACTIONS_COLUMN_TYPE } from '../../../colDef';
import { getDefaultCellValue } from './utils';
import type { GridUpdateRowParams } from '../../../models/gridDataSource';

export const useGridRowEditing = (
  apiRef: RefObject<GridPrivateApiCommunity>,
  props: Pick<
    DataGridProcessedProps,
    | 'editMode'
    | 'processRowUpdate'
    | 'onRowEditStart'
    | 'onRowEditStop'
    | 'onProcessRowUpdateError'
    | 'rowModesModel'
    | 'onRowModesModelChange'
    | 'signature'
    | 'dataSource'
  >,
) => {
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});
  const rowModesModelRef = React.useRef(rowModesModel);
  const prevRowModesModel = React.useRef<GridRowModesModel>({});
  const prevRowValuesLookup = React.useRef<Record<GridRowId, GridValidRowModel>>({});
  const focusTimeout = React.useRef<ReturnType<typeof setTimeout>>(undefined);
  const nextFocusedCell = React.useRef<GridCellParams | null>(null);

  const {
    processRowUpdate,
    onProcessRowUpdateError,
    rowModesModel: rowModesModelProp,
    onRowModesModelChange,
  } = props;

  const runIfEditModeIsRow =
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
    (id: GridRowId, mode: GridRowModes) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const hasFieldsWithErrors = React.useCallback(
    (rowId: GridRowId) => {
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

  const handleCellFocusIn = React.useCallback<GridEventListener<'cellFocusIn'>>((params) => {
      throw new Error("STUB");
  }, []);

  const handleCellFocusOut = React.useCallback<GridEventListener<'cellFocusOut'>>(
    (params, event) => {
          throw new Error("STUB");
      },
    [apiRef, hasFieldsWithErrors],
  );

  React.useEffect(() => {
      throw new Error("STUB");
  }, []);

  const handleCellKeyDown = React.useCallback<GridEventListener<'cellKeyDown'>>(
    (params, event) => {
          throw new Error("STUB");
      },
    [apiRef, hasFieldsWithErrors, rowModesModelProp],
  );

  const handleRowEditStart = React.useCallback<GridEventListener<'rowEditStart'>>(
    (params) => {
          throw new Error("STUB");
      },
    [apiRef, rowModesModelProp],
  );

  const handleRowEditStop = React.useCallback<GridEventListener<'rowEditStop'>>(
    (params) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  useGridEvent(apiRef, 'cellDoubleClick', runIfEditModeIsRow(handleCellDoubleClick));
  useGridEvent(apiRef, 'cellFocusIn', runIfEditModeIsRow(handleCellFocusIn));
  useGridEvent(apiRef, 'cellFocusOut', runIfEditModeIsRow(handleCellFocusOut));
  useGridEvent(apiRef, 'cellKeyDown', runIfEditModeIsRow(handleCellKeyDown));

  useGridEvent(apiRef, 'rowEditStart', runIfEditModeIsRow(handleRowEditStart));
  useGridEvent(apiRef, 'rowEditStop', runIfEditModeIsRow(handleRowEditStop));

  useGridEventPriority(apiRef, 'rowEditStart', props.onRowEditStart);
  useGridEventPriority(apiRef, 'rowEditStop', props.onRowEditStop);

  const getRowMode = React.useCallback<GridRowEditingApi['getRowMode']>(
    (id) => {
          throw new Error("STUB");
      },
    [apiRef, props.editMode],
  );

  const updateRowModesModel = useEventCallback((newModel: GridRowModesModel) => {
      throw new Error("STUB");
  });

  const updateRowInRowModesModel = React.useCallback(
    (id: GridRowId, newProps: GridRowModesModelProps | null) => {
          throw new Error("STUB");
      },
    [updateRowModesModel],
  );

  const updateOrDeleteRowState = React.useCallback(
    (id: GridRowId, newProps: GridEditRowProps | null) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const updateOrDeleteFieldState = React.useCallback(
    (id: GridRowId, field: string, newProps: GridEditCellProps | null) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const startRowEditMode = React.useCallback<GridRowEditingApi['startRowEditMode']>(
    (params) => {
          throw new Error("STUB");
      },
    [throwIfNotInMode, updateRowInRowModesModel],
  );

  const updateStateToStartRowEditMode = useEventCallback<[GridStartRowEditModeParams], void>(
    (params) => {
          throw new Error("STUB");
      },
  ) as GridRowEditingApi['startRowEditMode'];

  const stopRowEditMode = React.useCallback<GridRowEditingApi['stopRowEditMode']>(
    (params) => {
          throw new Error("STUB");
      },
    [throwIfNotInMode, updateRowInRowModesModel],
  );

  const updateStateToStopRowEditMode = useEventCallback<[GridStopRowEditModeParams], void>(
    async (params) => {
          throw new Error("STUB");
      },
  ) as GridRowEditingApi['startRowEditMode'];

  const setRowEditingEditCellValue = React.useCallback<
    GridRowEditingPrivateApi['setRowEditingEditCellValue']
  >(
    (params) => {
          throw new Error("STUB");
      },
    [apiRef, throwIfNotEditable, updateOrDeleteFieldState],
  );

  const getRowWithUpdatedValuesFromRowEditing = React.useCallback<
    GridRowEditingPrivateApi['getRowWithUpdatedValuesFromRowEditing']
  >(
    (id) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const editingApi: Omit<GridRowEditingApi, keyof GridEditingSharedApi> = {
    getRowMode,
    startRowEditMode,
    stopRowEditMode,
  };

  const editingPrivateApi: Omit<GridRowEditingPrivateApi, keyof GridEditingSharedPrivateApi> = {
    setRowEditingEditCellValue,
    getRowWithUpdatedValuesFromRowEditing,
  };

  useGridApiMethod(apiRef, editingApi, 'public');
  useGridApiMethod(apiRef, editingPrivateApi, 'private');

  React.useEffect(() => {
      throw new Error("STUB");
  }, [rowModesModelProp, updateRowModesModel]);

  // Run this effect synchronously so that the keyboard event can impact the yet-to-be-rendered input.
  useEnhancedEffect(() => {
      throw new Error("STUB");
  }, [
    apiRef,
    rowModesModel,
    updateOrDeleteRowState,
    updateStateToStartRowEditMode,
    updateStateToStopRowEditMode,
    updateRowInRowModesModel,
  ]);
};
