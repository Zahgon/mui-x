'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import {
  useGridSelector,
  gridVisibleColumnDefinitionsSelector,
  gridColumnsTotalWidthSelector,
  gridColumnPositionsSelector,
  useGridApiMethod,
  useGridEvent,
  GridPinnedColumnPosition,
  gridColumnFieldsSelector,
} from '@mui/x-data-grid';
import type { GridEventListener } from '@mui/x-data-grid';
import {
  useGridRegisterPipeProcessor,
  gridPinnedColumnsSelector,
  gridVisiblePinnedColumnDefinitionsSelector,
} from '@mui/x-data-grid/internals';
import type {
  GridPipeProcessor,
  GridRestoreStatePreProcessingContext,
  GridStateInitializer,
  GridPinnedColumnFields,
} from '@mui/x-data-grid/internals';
import type { GridPrivateApiPro } from '../../../models/gridApiPro';
import type { GridInitialStatePro } from '../../../models/gridStatePro';
import type { DataGridProProcessedProps } from '../../../models/dataGridProProps';
import type { GridColumnPinningApi } from './gridColumnPinningInterface';

export const columnPinningStateInitializer: GridStateInitializer<
  Pick<DataGridProProcessedProps, 'pinnedColumns' | 'initialState'>
> = (state, props, apiRef) => {
    throw new Error("STUB");
};

export const useGridColumnPinning = (
  apiRef: RefObject<GridPrivateApiPro>,
  props: Pick<
    DataGridProProcessedProps,
    | 'disableColumnPinning'
    | 'initialState'
    | 'pinnedColumns'
    | 'onPinnedColumnsChange'
    | 'slotProps'
    | 'slots'
  >,
): void => {
  const pinnedColumns = useGridSelector(apiRef, gridPinnedColumnsSelector);

  /**
   * PRE-PROCESSING
   */
  const calculateScrollLeft = React.useCallback<GridPipeProcessor<'scrollToIndexes'>>(
    (initialValue, params) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const addColumnMenuItems = React.useCallback<GridPipeProcessor<'columnMenu'>>(
    (columnMenuItems, colDef) => {
          throw new Error("STUB");
      },
    [props.disableColumnPinning],
  );

  const checkIfCanBeReordered = React.useCallback<GridPipeProcessor<'canBeReordered'>>(
    (initialValue, { targetIndex }) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const stateExportPreProcessing = React.useCallback<GridPipeProcessor<'exportState'>>(
    (prevState, context) => {
          throw new Error("STUB");
      },
    [apiRef, props.pinnedColumns, props.initialState?.pinnedColumns],
  );

  const stateRestorePreProcessing = React.useCallback<GridPipeProcessor<'restoreState'>>(
    (params, context: GridRestoreStatePreProcessingContext<GridInitialStatePro>) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  useGridRegisterPipeProcessor(apiRef, 'scrollToIndexes', calculateScrollLeft);
  useGridRegisterPipeProcessor(apiRef, 'columnMenu', addColumnMenuItems);
  useGridRegisterPipeProcessor(apiRef, 'canBeReordered', checkIfCanBeReordered);
  useGridRegisterPipeProcessor(apiRef, 'exportState', stateExportPreProcessing);
  useGridRegisterPipeProcessor(apiRef, 'restoreState', stateRestorePreProcessing);

  apiRef.current.registerControlState({
    stateId: 'pinnedColumns',
    propModel: props.pinnedColumns,
    propOnChange: props.onPinnedColumnsChange,
    stateSelector: gridPinnedColumnsSelector,
    changeEvent: 'pinnedColumnsChange',
  });

  const pinColumn = React.useCallback<GridColumnPinningApi['pinColumn']>(
    (field: string, side: GridPinnedColumnPosition) => {
          throw new Error("STUB");
      },
    [apiRef, pinnedColumns],
  );

  const unpinColumn = React.useCallback<GridColumnPinningApi['unpinColumn']>(
    (field: string) => {
          throw new Error("STUB");
      },
    [apiRef, pinnedColumns.left, pinnedColumns.right],
  );

  const getPinnedColumns = React.useCallback<GridColumnPinningApi['getPinnedColumns']>(() => {
      throw new Error("STUB");
  }, [apiRef]);

  const setPinnedColumns = React.useCallback<GridColumnPinningApi['setPinnedColumns']>(
    (newPinnedColumns) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const isColumnPinned = React.useCallback<GridColumnPinningApi['isColumnPinned']>(
    (field) => {
          throw new Error("STUB");
      },
    [pinnedColumns.left, pinnedColumns.right],
  );

  const columnPinningApi: GridColumnPinningApi = {
    pinColumn,
    unpinColumn,
    getPinnedColumns,
    setPinnedColumns,
    isColumnPinned,
  };

  useGridApiMethod(apiRef, columnPinningApi, 'public');

  const handleColumnOrderChange: GridEventListener<'columnOrderChange'> = (params) => {
      throw new Error("STUB");
  };

  useGridEvent(apiRef, 'columnOrderChange', handleColumnOrderChange);

  React.useEffect(() => {
      throw new Error("STUB");
  }, [apiRef, props.pinnedColumns]);
};

function setState(apiRef: RefObject<GridPrivateApiPro>, model: GridPinnedColumnFields) {
  apiRef.current.setState((state) => { throw new Error("STUB"); });
}
