'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import useEventCallback from '@mui/utils/useEventCallback';
import type { GridEventListener } from '../../../models/events';
import type { DataGridProcessedProps } from '../../../models/props/DataGridProps';
import type { GridPrivateApiCommunity } from '../../../models/api/gridApiCommunity';
import type {
  GridRowSelectionApi,
  GridRowMultiSelectionApi,
} from '../../../models/api/gridRowSelectionApi';
import type { GridGroupNode, GridRowId } from '../../../models/gridRows';
import { GridSignature } from '../../../constants/signature';
import { useGridEvent } from '../../utils/useGridEvent';
import { useGridApiMethod } from '../../utils/useGridApiMethod';
import { useGridLogger } from '../../utils/useGridLogger';
import { useGridSelector } from '../../utils/useGridSelector';
import {
  gridRowsLookupSelector,
  gridRowMaximumTreeDepthSelector,
  gridRowNodeSelector,
  gridRowTreeSelector,
} from '../rows/gridRowsSelector';
import {
  gridRowSelectionManagerSelector,
  gridRowSelectionStateSelector,
  gridRowSelectionCountSelector,
  gridRowSelectionIdsSelector,
} from './gridRowSelectionSelector';
import { gridFocusCellSelector } from '../focus/gridFocusStateSelector';
import {
  gridExpandedSortedRowIdsSelector,
  gridFilteredRowsLookupSelector,
  gridFilterModelSelector,
  gridQuickFilterValuesSelector,
} from '../filter/gridFilterSelector';
import { GRID_CHECKBOX_SELECTION_COL_DEF, GRID_ACTIONS_COLUMN_TYPE } from '../../../colDef';
import { GridCellModes } from '../../../models/gridEditRowModel';
import { isKeyboardEvent, isNavigationKey } from '../../../utils/keyboardUtils';
import { getVisibleRows } from '../../utils/useGridVisibleRows';
import type { GridStateInitializer } from '../../utils/useGridInitializeState';
import { GRID_DETAIL_PANEL_TOGGLE_FIELD } from '../../../internals/constants';
import { gridClasses } from '../../../constants/gridClasses';
import { isEventTargetInPortal } from '../../../utils/domUtils';
import { isMultipleRowSelectionEnabled, findRowsToSelect, findRowsToDeselect } from './utils';
import { runIf } from '../../../utils/utils';
import type { GridRowSelectionModel } from '../../../models/gridRowSelectionModel';
import { createRowSelectionManager } from '../../../models/gridRowSelectionManager';
import { gridPaginatedVisibleSortedGridRowIdsSelector } from '../pagination';

const emptyModel = { type: 'include', ids: new Set<GridRowId>() } as const;

export const rowSelectionStateInitializer: GridStateInitializer<
  Pick<DataGridProcessedProps, 'rowSelectionModel' | 'rowSelection'>
> = (state, props) => { throw new Error("STUB"); };

/**
 * @requires useGridRows (state, method) - can be after
 * @requires useGridParamsApi (method) - can be after
 * @requires useGridFocus (state) - can be after
 * @requires useGridKeyboardNavigation (`cellKeyDown` event must first be consumed by it)
 */
export const useGridRowSelection = (
  apiRef: RefObject<GridPrivateApiCommunity>,
  props: Pick<
    DataGridProcessedProps,
    | 'checkboxSelection'
    | 'rowSelectionModel'
    | 'onRowSelectionModelChange'
    | 'disableMultipleRowSelection'
    | 'disableRowSelectionOnClick'
    | 'disableRowSelectionExcludeModel'
    | 'isRowSelectable'
    | 'checkboxSelectionVisibleOnly'
    | 'pagination'
    | 'paginationMode'
    | 'filterMode'
    | 'classes'
    | 'keepNonExistentRowsSelected'
    | 'rowSelection'
    | 'rowSelectionPropagation'
    | 'signature'
  >,
): void => {
  const logger = useGridLogger(apiRef, 'useGridSelection');

  const isNestedData = useGridSelector(apiRef, gridRowMaximumTreeDepthSelector) > 1;

  const applyAutoSelection =
    props.signature !== GridSignature.DataGrid &&
    (props.rowSelectionPropagation?.parents || props.rowSelectionPropagation?.descendants) &&
    isNestedData;

  const propRowSelectionModel = React.useMemo(() => {
      throw new Error("STUB");
  }, [props.rowSelectionModel]);

  const lastRowToggled = React.useRef<GridRowId | null>(null);

  apiRef.current.registerControlState({
    stateId: 'rowSelection',
    propModel: propRowSelectionModel,
    propOnChange: props.onRowSelectionModelChange,
    stateSelector: gridRowSelectionStateSelector,
    changeEvent: 'rowSelectionChange',
  });

  const {
    checkboxSelection,
    disableRowSelectionOnClick,
    isRowSelectable: propIsRowSelectable,
  } = props;

  const canHaveMultipleSelection = isMultipleRowSelectionEnabled(props);

  const expandMouseRowRangeSelection = React.useCallback(
    (id: GridRowId) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const getRowsToBeSelected = useEventCallback(() => {
      throw new Error("STUB");
  });

  /*
   * API METHODS
   */
  const setRowSelectionModel = React.useCallback<GridRowSelectionApi['setRowSelectionModel']>(
    (model, reason) => {
          throw new Error("STUB");
      },
    [apiRef, logger, props.rowSelection, props.signature, canHaveMultipleSelection],
  );

  const isRowSelected = React.useCallback<GridRowSelectionApi['isRowSelected']>(
    (id) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const isRowSelectable = React.useCallback<GridRowSelectionApi['isRowSelectable']>(
    (id) => {
          throw new Error("STUB");
      },
    [apiRef, props.rowSelection, props.keepNonExistentRowsSelected, propIsRowSelectable],
  );

  const getSelectedRows = React.useCallback<GridRowSelectionApi['getSelectedRows']>(
    () => { throw new Error("STUB"); },
    [apiRef],
  );

  const selectRow = React.useCallback<GridRowSelectionApi['selectRow']>(
    (id, isSelected = true, resetSelection = false) => {
          throw new Error("STUB");
      },
    [
      apiRef,
      logger,
      applyAutoSelection,
      props.rowSelectionPropagation?.descendants,
      props.rowSelectionPropagation?.parents,
      canHaveMultipleSelection,
    ],
  );

  const selectRows = React.useCallback<GridRowMultiSelectionApi['selectRows']>(
    (ids: GridRowId[], isSelected = true, resetSelection = false) => {
          throw new Error("STUB");
      },
    [
      logger,
      applyAutoSelection,
      canHaveMultipleSelection,
      apiRef,
      props.rowSelectionPropagation?.descendants,
      props.rowSelectionPropagation?.parents,
      props.rowSelection,
    ],
  );

  const getPropagatedRowSelectionModel = React.useCallback<
    GridRowMultiSelectionApi['getPropagatedRowSelectionModel']
  >(
    (inputSelectionModel) => {
          throw new Error("STUB");
      },
    [
      apiRef,
      props.rowSelectionPropagation?.descendants,
      props.rowSelectionPropagation?.parents,
      isNestedData,
      applyAutoSelection,
    ],
  );

  const selectRowRange = React.useCallback<GridRowMultiSelectionApi['selectRowRange']>(
    (
      {
        startId,
        endId,
      }: {
        startId: GridRowId;
        endId: GridRowId;
      },
      isSelected = true,
      resetSelection = false,
    ) => {
          throw new Error("STUB");
      },
    [apiRef, logger],
  );

  const selectionPublicApi: GridRowSelectionApi = {
    selectRow,
    setRowSelectionModel,
    getSelectedRows,
    isRowSelected,
    isRowSelectable,
  };

  const selectionPrivateApi: GridRowMultiSelectionApi = {
    selectRows,
    selectRowRange,
    getPropagatedRowSelectionModel,
  };

  useGridApiMethod(apiRef, selectionPublicApi, 'public');
  useGridApiMethod(
    apiRef,
    selectionPrivateApi,
    props.signature === GridSignature.DataGrid ? 'private' : 'public',
  );

  /*
   * EVENTS
   */
  const isFirstRender = React.useRef(true);
  const removeOutdatedSelection = React.useCallback(() => {
      throw new Error("STUB");
  }, [
    apiRef,
    isNestedData,
    props.rowSelectionPropagation?.parents,
    props.keepNonExistentRowsSelected,
    props.filterMode,
    getRowsToBeSelected,
  ]);

  const handleSingleRowSelection = React.useCallback(
    (id: GridRowId, event: React.MouseEvent | React.KeyboardEvent) => {
          throw new Error("STUB");
      },
    [apiRef, canHaveMultipleSelection, checkboxSelection],
  );

  const handleRowClick = React.useCallback<GridEventListener<'rowClick'>>(
    (params, event) => {
          throw new Error("STUB");
      },
    [
      disableRowSelectionOnClick,
      canHaveMultipleSelection,
      apiRef,
      expandMouseRowRangeSelection,
      handleSingleRowSelection,
    ],
  );

  const preventSelectionOnShift = React.useCallback<GridEventListener<'cellMouseDown'>>(
    (params, event) => {
          throw new Error("STUB");
      },
    [canHaveMultipleSelection],
  );

  const handleRowSelectionCheckboxChange = React.useCallback<
    GridEventListener<'rowSelectionCheckboxChange'>
  >(
    (params, event) => {
          throw new Error("STUB");
      },
    [apiRef, expandMouseRowRangeSelection, canHaveMultipleSelection],
  );

  const toggleAllRows = React.useCallback(
    (value: boolean) => {
          throw new Error("STUB");
      },
    [
      apiRef,
      getRowsToBeSelected,
      props.checkboxSelectionVisibleOnly,
      props.isRowSelectable,
      props.rowSelectionPropagation?.descendants,
      props.disableRowSelectionExcludeModel,
      isNestedData,
    ],
  );

  const handleHeaderSelectionCheckboxChange = React.useCallback<
    GridEventListener<'headerSelectionCheckboxChange'>
  >(
    (params) => {
          throw new Error("STUB");
      },
    [toggleAllRows],
  );

  const handleCellKeyDown = React.useCallback<GridEventListener<'cellKeyDown'>>(
    (params, event) => {
          throw new Error("STUB");
      },
    [apiRef, canHaveMultipleSelection, handleSingleRowSelection, toggleAllRows],
  );

  const syncControlledState = useEventCallback(() => {
      throw new Error("STUB");
  });

  useGridEvent(apiRef, 'filteredRowsSet', runIf(props.rowSelection, removeOutdatedSelection));
  useGridEvent(apiRef, 'rowClick', runIf(props.rowSelection, handleRowClick));
  useGridEvent(
    apiRef,
    'rowSelectionCheckboxChange',
    runIf(props.rowSelection, handleRowSelectionCheckboxChange),
  );
  useGridEvent(apiRef, 'headerSelectionCheckboxChange', handleHeaderSelectionCheckboxChange);
  useGridEvent(apiRef, 'cellMouseDown', runIf(props.rowSelection, preventSelectionOnShift));
  useGridEvent(apiRef, 'cellKeyDown', runIf(props.rowSelection, handleCellKeyDown));

  /*
   * EFFECTS
   */
  React.useEffect(() => {
      throw new Error("STUB");
  }, [apiRef, propRowSelectionModel, props.rowSelection, syncControlledState]);

  const isStateControlled = propRowSelectionModel != null;
  React.useEffect(() => {
      throw new Error("STUB");
  }, [apiRef, isRowSelectable, isStateControlled, props.rowSelection]);

  React.useEffect(() => {
      throw new Error("STUB");
  }, [apiRef, canHaveMultipleSelection, checkboxSelection, isStateControlled, props.rowSelection]);

  React.useEffect(() => {
      throw new Error("STUB");
  }, []);
};
