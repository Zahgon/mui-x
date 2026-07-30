'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import { warnOnce } from '@mui/x-internals/warning';
import type { GridEventListener } from '../../../models/events';
import type { GridPrivateApiCommunity } from '../../../models/api/gridApiCommunity';
import type { GridColumnApi, GridColumnReorderApi } from '../../../models/api/gridColumnApi';
import type { GridStateCommunity } from '../../../models/gridStateCommunity';
import { useGridApiMethod } from '../../utils/useGridApiMethod';
import { useGridLogger } from '../../utils/useGridLogger';
import {
  gridColumnFieldsSelector,
  gridColumnDefinitionsSelector,
  gridColumnLookupSelector,
  gridColumnsStateSelector,
  gridColumnVisibilityModelSelector,
  gridVisibleColumnDefinitionsSelector,
  gridColumnPositionsSelector,
} from './gridColumnsSelector';
import { GridSignature } from '../../../constants/signature';
import { useGridEvent } from '../../utils/useGridEvent';
import type { DataGridProcessedProps } from '../../../models/props/DataGridProps';
import {
  useGridRegisterPipeProcessor,
  useGridRegisterPipeApplier,
} from '../../core/pipeProcessing';
import type { GridPipeProcessor } from '../../core/pipeProcessing';
import { EMPTY_PINNED_COLUMN_FIELDS } from './gridColumnsInterfaces';
import type {
  GridColumnDimensions,
  GridColumnsInitialState,
  GridColumnsState,
  GridColumnVisibilityModel,
} from './gridColumnsInterfaces';
import type { GridStateInitializer } from '../../utils/useGridInitializeState';
import {
  hydrateColumnsWidth,
  createColumnsState,
  COLUMNS_DIMENSION_PROPERTIES,
} from './gridColumnsUtils';
import { GridPreferencePanelsValue } from '../preferencesPanel';
import type { GridColumnOrderChangeParams } from '../../../models/params/gridColumnOrderChangeParams';
import type { GridColDef, GridStateColDef } from '../../../models/colDef/gridColDef';
import {
  gridPivotActiveSelector,
  gridPivotInitialColumnsSelector,
} from '../pivoting/gridPivotingSelectors';

export const columnsStateInitializer: GridStateInitializer<
  Pick<DataGridProcessedProps, 'columnVisibilityModel' | 'initialState' | 'columns'>
> = (state, props, apiRef) => {
    throw new Error("STUB");
};

/**
 * @requires useGridParamsApi (method)
 * @requires useGridDimensions (method, event) - can be after
 * TODO: Impossible priority - useGridParamsApi also needs to be after useGridColumns
 */
export function useGridColumns(
  apiRef: RefObject<GridPrivateApiCommunity>,
  props: Pick<
    DataGridProcessedProps,
    | 'initialState'
    | 'columns'
    | 'columnVisibilityModel'
    | 'onColumnVisibilityModelChange'
    | 'slots'
    | 'slotProps'
    | 'disableColumnSelector'
    | 'signature'
  >,
): void {
  const logger = useGridLogger(apiRef, 'useGridColumns');

  apiRef.current.registerControlState({
    stateId: 'visibleColumns',
    propModel: props.columnVisibilityModel,
    propOnChange: props.onColumnVisibilityModelChange,
    stateSelector: gridColumnVisibilityModelSelector,
    changeEvent: 'columnVisibilityModelChange',
  });

  const setGridColumnsState = React.useCallback(
    (columnsState: GridColumnsState) => {
          throw new Error("STUB");
      },
    [logger, apiRef],
  );

  /**
   * API METHODS
   */
  const getColumn = React.useCallback<GridColumnApi['getColumn']>(
    (field) => { throw new Error("STUB"); },
    [apiRef],
  );

  const getAllColumns = React.useCallback<GridColumnApi['getAllColumns']>(
    () => { throw new Error("STUB"); },
    [apiRef],
  );

  const getVisibleColumns = React.useCallback<GridColumnApi['getVisibleColumns']>(
    () => { throw new Error("STUB"); },
    [apiRef],
  );

  const getColumnIndex = React.useCallback<GridColumnApi['getColumnIndex']>(
    (field, useVisibleColumns = true) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const getColumnPosition = React.useCallback<GridColumnApi['getColumnPosition']>(
    (field) => {
          throw new Error("STUB");
      },
    [apiRef, getColumnIndex],
  );

  const setColumnVisibilityModel = React.useCallback<GridColumnApi['setColumnVisibilityModel']>(
    (model) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const updateColumns = React.useCallback<GridColumnApi['updateColumns']>(
    (columns) => {
          throw new Error("STUB");
      },
    [apiRef, setGridColumnsState],
  );

  const setColumnVisibility = React.useCallback<GridColumnApi['setColumnVisibility']>(
    (field, isVisible) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const getColumnIndexRelativeToVisibleColumns = React.useCallback<
    GridColumnApi['getColumnIndexRelativeToVisibleColumns']
  >(
    (field) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const setColumnIndex = React.useCallback<GridColumnReorderApi['setColumnIndex']>(
    (field, targetIndexPosition) => {
          throw new Error("STUB");
      },
    [apiRef, logger, setGridColumnsState, getColumnIndexRelativeToVisibleColumns],
  );

  const setColumnWidth = React.useCallback<GridColumnApi['setColumnWidth']>(
    (field, width) => {
          throw new Error("STUB");
      },
    [apiRef, logger, setGridColumnsState],
  );

  const columnApi: GridColumnApi = {
    getColumn,
    getAllColumns,
    getColumnIndex,
    getColumnPosition,
    getVisibleColumns,
    getColumnIndexRelativeToVisibleColumns,
    updateColumns,
    setColumnVisibilityModel,
    setColumnVisibility,
    setColumnWidth,
  };

  const columnReorderApi: GridColumnReorderApi = { setColumnIndex };

  useGridApiMethod(apiRef, columnApi, 'public');
  useGridApiMethod(
    apiRef,
    columnReorderApi,
    props.signature === GridSignature.DataGrid ? 'private' : 'public',
  );

  /**
   * PRE-PROCESSING
   */
  const stateExportPreProcessing = React.useCallback<GridPipeProcessor<'exportState'>>(
    (prevState, context) => {
          throw new Error("STUB");
      },
    [apiRef, props.columnVisibilityModel, props.initialState?.columns],
  );

  const stateRestorePreProcessing = React.useCallback<GridPipeProcessor<'restoreState'>>(
    (params, context) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const preferencePanelPreProcessing = React.useCallback<GridPipeProcessor<'preferencePanel'>>(
    (initialValue, value) => {
          throw new Error("STUB");
      },
    [props.slots.columnsPanel, props.slotProps?.columnsPanel],
  );

  const addColumnMenuItems = React.useCallback<GridPipeProcessor<'columnMenu'>>(
    (columnMenuItems) => {
          throw new Error("STUB");
      },
    [props.disableColumnSelector, apiRef],
  );

  useGridRegisterPipeProcessor(apiRef, 'columnMenu', addColumnMenuItems);
  useGridRegisterPipeProcessor(apiRef, 'exportState', stateExportPreProcessing);
  useGridRegisterPipeProcessor(apiRef, 'restoreState', stateRestorePreProcessing);
  useGridRegisterPipeProcessor(apiRef, 'preferencePanel', preferencePanelPreProcessing);

  /*
   * EVENTS
   */

  const prevInnerWidth = React.useRef<number | null>(null);
  const handleGridSizeChange: GridEventListener<'viewportInnerSizeChange'> = (size) => {
      throw new Error("STUB");
  };

  useGridEvent(apiRef, 'viewportInnerSizeChange', handleGridSizeChange);

  /**
   * APPLIERS
   */
  const hydrateColumns = React.useCallback(() => {
      throw new Error("STUB");
  }, [apiRef, logger, setGridColumnsState]);

  useGridRegisterPipeApplier(apiRef, 'hydrateColumns', hydrateColumns);

  /*
   * EFFECTS
   */
  // The effect do not track any value defined synchronously during the 1st render by hooks called after `useGridColumns`
  // As a consequence, the state generated by the 1st run of this useEffect will always be equal to the initialization one
  React.useEffect(() => {
      throw new Error("STUB");
  }, [logger, apiRef, setGridColumnsState, props.columns, props.columnVisibilityModel]);

  React.useEffect(() => {
      throw new Error("STUB");
  }, [apiRef, logger, props.columnVisibilityModel]);

  const checkMultiSelectColumns = React.useCallback(
    (orderedFields: string[]) => {
          throw new Error("STUB");
      },
    [apiRef, props.signature],
  );

  useGridEvent(apiRef, 'columnsChange', checkMultiSelectColumns);
}

function mergeColumnsState(columnsState: GridColumnsState) {
  return (state: GridStateCommunity): GridStateCommunity => { throw new Error("STUB"); };
}
