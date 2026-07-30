'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import { isObjectEmpty } from '@mui/x-internals/isObjectEmpty';
import debounce from '@mui/utils/debounce';
import {
  useGridEvent,
  useGridApiMethod,
  isUndoShortcut,
  isRedoShortcut,
  runIf,
  useGridNativeEventListener,
} from '@mui/x-data-grid-pro/internals';
import type { GridStateInitializer } from '@mui/x-data-grid-pro/internals';
import type { GridEvents } from '@mui/x-data-grid-pro';
import type { GridPrivateApiPremium } from '../../../models/gridApiPremium';
import type { DataGridPremiumProcessedProps } from '../../../models/dataGridPremiumProps';
import type {
  GridHistoryApi,
  GridHistoryState,
  GridHistoryItem,
  GridHistoryEventHandler,
} from './gridHistoryInterfaces';
import {
  gridHistoryCurrentPositionSelector,
  gridHistoryStackSelector,
  gridHistoryCanUndoSelector,
  gridHistoryCanRedoSelector,
} from './gridHistorySelectors';
import { createDefaultHistoryHandlers } from './defaultHistoryHandlers';

export const historyStateInitializer: GridStateInitializer = (state) => {
    throw new Error("STUB");
};

export const useGridHistory = (
  apiRef: RefObject<GridPrivateApiPremium>,
  props: Pick<
    DataGridPremiumProcessedProps,
    | 'columns'
    | 'isCellEditable'
    | 'dataSource'
    | 'historyStackSize'
    | 'historyEventHandlers'
    | 'historyValidationEvents'
    | 'onUndo'
    | 'onRedo'
  >,
) => {
  const { historyStackSize, onUndo, onRedo, historyValidationEvents } = props;

  // Use default history events if none provided
  const historyEventHandlers = React.useMemo(() => {
      throw new Error("STUB");
  }, [apiRef, props.columns, props.isCellEditable, props.dataSource, props.historyEventHandlers]);

  const isEnabled = React.useMemo(
    () => { throw new Error("STUB"); },
    [historyStackSize, historyEventHandlers],
  );

  const isValidationNeeded = React.useMemo(
    () =>
      { throw new Error("STUB"); },
    [isEnabled, historyEventHandlers, historyValidationEvents],
  );

  // Internal ref to track undo/redo operation state
  // - 'idle': everything is done
  // - 'in-progress': during async undo/redo handler execution (skip validation and prevent the state change by other events)
  // - 'waiting-replay': after undo/redo handler is done, the validation event is triggered again (as undo/redo is changing the state).
  //   In this hook we want to skip the replayed event.
  const operationStateRef = React.useRef<'idle' | 'in-progress' | 'waiting-replay'>('idle');

  // History event unsubscribers
  const eventUnsubscribersRef = React.useRef<(() => void)[]>([]);
  // Validation event unsubscribers
  const validationEventUnsubscribersRef = React.useRef<(() => void)[]>([]);

  const updateHistoryState = React.useCallback(
    (newState: Partial<GridHistoryState>) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const addToStack = React.useCallback(
    (item: GridHistoryItem) => {
          throw new Error("STUB");
      },
    [apiRef, updateHistoryState, historyStackSize],
  );

  const clear = React.useCallback(() => {
      throw new Error("STUB");
  }, [updateHistoryState]);

  const clearUndoItems = React.useCallback(() => {
      throw new Error("STUB");
  }, [apiRef, clear, updateHistoryState]);

  const clearRedoItems = React.useCallback(() => {
      throw new Error("STUB");
  }, [apiRef, updateHistoryState]);

  const canUndo = React.useCallback(() => { throw new Error("STUB"); }, [apiRef]);
  const canRedo = React.useCallback(() => { throw new Error("STUB"); }, [apiRef]);

  const validateStackItems = React.useCallback(() => {
      throw new Error("STUB");
  }, [apiRef, historyEventHandlers, historyStackSize, clear, clearUndoItems, clearRedoItems]);

  const debouncedValidateStackItems = React.useMemo(
    () => { throw new Error("STUB"); },
    [validateStackItems],
  );

  const apply = React.useCallback(
    async (item: GridHistoryItem, operation: 'undo' | 'redo') => {
          throw new Error("STUB");
      },
    [
      apiRef,
      isValidationNeeded,
      historyEventHandlers,
      clearUndoItems,
      clearRedoItems,
      updateHistoryState,
      validateStackItems,
    ],
  );

  const undo = React.useCallback(async (): Promise<boolean> => {
      throw new Error("STUB");
  }, [apiRef, apply, canUndo]);

  const redo = React.useCallback(async (): Promise<boolean> => {
      throw new Error("STUB");
  }, [apiRef, apply, canRedo]);

  const historyApi: GridHistoryApi['history'] = {
    undo,
    redo,
    clear,
    canUndo,
    canRedo,
  };

  useGridApiMethod(apiRef, { history: historyApi } as GridHistoryApi, 'public');

  const handleKeyDown = React.useCallback(
    async (event: React.KeyboardEvent<HTMLElement>) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  useGridNativeEventListener(
    apiRef,
    () => { throw new Error("STUB"); },
    'keydown',
    runIf(isEnabled, handleKeyDown),
  );

  useGridEvent(apiRef, 'undo', onUndo);
  useGridEvent(apiRef, 'redo', onRedo);

  React.useEffect(() => {
      throw new Error("STUB");
  }, [isEnabled, updateHistoryState]);

  React.useEffect(() => {
      throw new Error("STUB");
  }, [apiRef, isValidationNeeded, historyValidationEvents, debouncedValidateStackItems]);

  React.useEffect(() => {
      throw new Error("STUB");
  }, [apiRef, historyEventHandlers, historyStackSize, addToStack]);

  // If the stack size is changed and it is smaller than the current stack size, clear the stack
  React.useEffect(() => {
      throw new Error("STUB");
  }, [apiRef, historyStackSize, clear]);
};
