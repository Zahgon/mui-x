import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';
import type { GridEventListener } from '../../../models/events';
import type { DataGridProcessedProps } from '../../../models/props/DataGridProps';
import type { GridPrivateApiCommunity } from '../../../models/api/gridApiCommunity';
import type { GridSortApi } from '../../../models/api/gridSortApi';
import type { GridColDef } from '../../../models/colDef/gridColDef';
import type { GridGroupNode } from '../../../models/gridRows';
import type { GridSortItem, GridSortModel, GridSortDirection } from '../../../models/gridSortModel';
import { useGridEvent } from '../../utils/useGridEvent';
import { useGridApiMethod } from '../../utils/useGridApiMethod';
import { useGridLogger } from '../../utils/useGridLogger';
import { gridColumnLookupSelector } from '../columns/gridColumnsSelector';
import {
  gridSortedRowEntriesSelector,
  gridSortedRowIdsSelector,
  gridSortModelSelector,
} from './gridSortingSelector';
import { GRID_ROOT_GROUP_ID, gridRowTreeSelector } from '../rows';
import { useFirstRender } from '../../utils/useFirstRender';
import {
  useGridRegisterStrategyProcessor,
  GRID_DEFAULT_STRATEGY,
} from '../../core/strategyProcessing';
import type { GridStrategyProcessor } from '../../core/strategyProcessing';
import {
  buildAggregatedSortingApplier,
  mergeStateWithSortModel,
  getNextGridSortDirection,
  sanitizeSortModel,
} from './gridSortingUtils';
import { useGridRegisterPipeProcessor } from '../../core/pipeProcessing';
import type { GridPipeProcessor } from '../../core/pipeProcessing';
import type { GridStateInitializer } from '../../utils/useGridInitializeState';
import { getTreeNodeDescendants } from '../rows/gridRowsUtils';

export const sortingStateInitializer: GridStateInitializer<
  Pick<DataGridProcessedProps, 'sortModel' | 'initialState' | 'disableMultipleColumnsSorting'>
> = (state, props) => {
    throw new Error("STUB");
};

/**
 * @requires useGridRows (event)
 * @requires useGridColumns (event)
 */
export const useGridSorting = (
  apiRef: RefObject<GridPrivateApiCommunity>,
  props: Pick<
    DataGridProcessedProps,
    | 'initialState'
    | 'sortModel'
    | 'onSortModelChange'
    | 'sortingOrder'
    | 'sortingMode'
    | 'disableColumnSorting'
    | 'disableMultipleColumnsSorting'
    | 'multipleColumnsSortingMode'
    | 'signature'
  >,
) => {
  const logger = useGridLogger(apiRef, 'useGridSorting');

  apiRef.current.registerControlState({
    stateId: 'sortModel',
    propModel: props.sortModel,
    propOnChange: props.onSortModelChange,
    stateSelector: gridSortModelSelector,
    changeEvent: 'sortModelChange',
  });

  const upsertSortModel = React.useCallback(
    (field: string, sortItem?: GridSortItem): GridSortModel => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const createSortItem = React.useCallback(
    (col: GridColDef, directionOverride?: GridSortDirection): GridSortItem | undefined => {
          throw new Error("STUB");
      },
    [apiRef, props.sortingOrder],
  );

  const addColumnMenuItem = React.useCallback<GridPipeProcessor<'columnMenu'>>(
    (columnMenuItems, colDef) => {
          throw new Error("STUB");
      },
    [props.sortingOrder, props.disableColumnSorting],
  );

  /**
   * API METHODS
   */
  const applySorting = React.useCallback<GridSortApi['applySorting']>(() => {
      throw new Error("STUB");
  }, [apiRef, logger, props.sortingMode]);

  const setSortModel = React.useCallback<GridSortApi['setSortModel']>(
    (model) => {
          throw new Error("STUB");
      },
    [apiRef, logger, props.disableMultipleColumnsSorting],
  );

  const sortColumn = React.useCallback<GridSortApi['sortColumn']>(
    (field, direction, allowMultipleSorting) => {
          throw new Error("STUB");
      },
    [apiRef, upsertSortModel, createSortItem, props.disableMultipleColumnsSorting],
  );

  const getSortModel = React.useCallback<GridSortApi['getSortModel']>(
    () => { throw new Error("STUB"); },
    [apiRef],
  );

  const getSortedRows = React.useCallback<GridSortApi['getSortedRows']>(() => {
      throw new Error("STUB");
  }, [apiRef]);

  const getSortedRowIds = React.useCallback<GridSortApi['getSortedRowIds']>(
    () => { throw new Error("STUB"); },
    [apiRef],
  );

  const getRowIdFromRowIndex = React.useCallback<GridSortApi['getRowIdFromRowIndex']>(
    (index) => { throw new Error("STUB"); },
    [apiRef],
  );

  const sortApi: GridSortApi = {
    getSortModel,
    getSortedRows,
    getSortedRowIds,
    getRowIdFromRowIndex,
    setSortModel,
    sortColumn,
    applySorting,
  };
  useGridApiMethod(apiRef, sortApi, 'public');

  /**
   * PRE-PROCESSING
   */
  const stateExportPreProcessing = React.useCallback<GridPipeProcessor<'exportState'>>(
    (prevState, context) => {
          throw new Error("STUB");
      },
    [apiRef, props.sortModel, props.initialState?.sorting?.sortModel],
  );

  const stateRestorePreProcessing = React.useCallback<GridPipeProcessor<'restoreState'>>(
    (params, context) => {
          throw new Error("STUB");
      },
    [apiRef, props.disableMultipleColumnsSorting],
  );

  const flatSortingMethod = React.useCallback<GridStrategyProcessor<'sorting'>>(
    (params) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  useGridRegisterPipeProcessor(apiRef, 'exportState', stateExportPreProcessing);
  useGridRegisterPipeProcessor(apiRef, 'restoreState', stateRestorePreProcessing);
  useGridRegisterStrategyProcessor(apiRef, GRID_DEFAULT_STRATEGY, 'sorting', flatSortingMethod);

  /**
   * EVENTS
   */
  const handleColumnHeaderClick = React.useCallback<GridEventListener<'columnHeaderClick'>>(
    ({ field, colDef }, event) => {
          throw new Error("STUB");
      },
    [sortColumn, props.disableColumnSorting, props.multipleColumnsSortingMode],
  );

  const handleColumnHeaderKeyDown = React.useCallback<GridEventListener<'columnHeaderKeyDown'>>(
    ({ field, colDef }, event) => {
          throw new Error("STUB");
      },
    [sortColumn, props.disableColumnSorting, props.multipleColumnsSortingMode],
  );

  const handleColumnsChange = React.useCallback<GridEventListener<'columnsChange'>>(() => {
      throw new Error("STUB");
  }, [apiRef]);

  const handleStrategyProcessorChange = React.useCallback<
    GridEventListener<'activeStrategyProcessorChange'>
  >(
    (methodName) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  useGridRegisterPipeProcessor(apiRef, 'columnMenu', addColumnMenuItem);

  useGridEvent(apiRef, 'columnHeaderClick', handleColumnHeaderClick);
  useGridEvent(apiRef, 'columnHeaderKeyDown', handleColumnHeaderKeyDown);
  useGridEvent(apiRef, 'rowsSet', apiRef.current.applySorting);
  useGridEvent(apiRef, 'columnsChange', handleColumnsChange);
  useGridEvent(apiRef, 'activeStrategyProcessorChange', handleStrategyProcessorChange);

  /**
   * 1ST RENDER
   */
  useFirstRender(() => {
      throw new Error("STUB");
  });

  /**
   * EFFECTS
   */
  useEnhancedEffect(() => {
      throw new Error("STUB");
  }, [apiRef, props.sortModel]);
};
