import * as React from 'react';
import { lruMemoize } from '@mui/x-internals/lruMemoize';
import type { RefObject } from '@mui/x-internals/types';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';
import { isDeepEqual } from '@mui/x-internals/isDeepEqual';
import type { GridEventListener } from '../../../models/events';
import type { DataGridProcessedProps } from '../../../models/props/DataGridProps';
import type { GridPrivateApiCommunity } from '../../../models/api/gridApiCommunity';
import type { GridFilterApi } from '../../../models/api/gridFilterApi';
import type { GridFilterItem } from '../../../models/gridFilterItem';
import type { GridRowId } from '../../../models/gridRows';
import type { GridStateCommunity } from '../../../models/gridStateCommunity';
import { useLazyRef } from '../../utils/useLazyRef';
import { useGridEvent } from '../../utils/useGridEvent';
import { useGridApiMethod } from '../../utils/useGridApiMethod';
import { useGridLogger } from '../../utils/useGridLogger';
import { gridColumnLookupSelector } from '../columns/gridColumnsSelector';
import { GridPreferencePanelsValue } from '../preferencesPanel/gridPreferencePanelsValue';
import { defaultGridFilterLookup, getDefaultGridFilterModel } from './gridFilterState';
import { gridFilterModelSelector } from './gridFilterSelector';
import { useFirstRender } from '../../utils/useFirstRender';
import { gridRowsLookupSelector } from '../rows';
import { useGridRegisterPipeProcessor } from '../../core/pipeProcessing';
import type { GridPipeProcessor } from '../../core/pipeProcessing';
import {
  GRID_DEFAULT_STRATEGY,
  useGridRegisterStrategyProcessor,
} from '../../core/strategyProcessing';
import type { GridStrategyProcessor } from '../../core/strategyProcessing';
import {
  buildAggregatedFilterApplier,
  sanitizeFilterModel,
  mergeStateWithFilterModel,
  cleanFilterItem,
  passFilterLogic,
  shouldQuickFilterExcludeHiddenColumns,
  upsertFilterItemInModel,
  upsertFilterItemsInModel,
  deleteFilterItemFromModel,
  setFilterLogicOperatorInModel,
} from './gridFilterUtils';
import type { GridStateInitializer } from '../../utils/useGridInitializeState';
import type { ItemPlusTag } from '../../../components/panel/filterPanel/GridFilterInputValue';
import type { GridConfiguration } from '../../../models/configuration/gridConfiguration';

export const filterStateInitializer: GridStateInitializer<
  Pick<DataGridProcessedProps, 'filterModel' | 'initialState' | 'disableMultipleColumnsFiltering'>
> = (state, props, apiRef) => {
    throw new Error("STUB");
};

const getVisibleRowsLookup: GridStrategyProcessor<'visibleRowsLookupCreation'> = (params) => {
    throw new Error("STUB");
};

function getVisibleRowsLookupState(
  apiRef: RefObject<GridPrivateApiCommunity>,
  state: GridStateCommunity,
) {
  return apiRef.current.applyStrategyProcessor('visibleRowsLookupCreation', {
    tree: state.rows.tree,
    filteredRowsLookup: state.filter.filteredRowsLookup,
  });
}

function createMemoizedValues() {
    throw new Error("STUB");
}

/**
 * @requires useGridColumns (method, event)
 * @requires useGridParamsApi (method)
 * @requires useGridRows (event)
 */
export const useGridFilter = (
  apiRef: RefObject<GridPrivateApiCommunity>,
  props: Pick<
    DataGridProcessedProps,
    | 'rows'
    | 'initialState'
    | 'filterModel'
    | 'getRowId'
    | 'onFilterModelChange'
    | 'filterMode'
    | 'disableMultipleColumnsFiltering'
    | 'slots'
    | 'slotProps'
    | 'disableColumnFilter'
    | 'disableEval'
    | 'ignoreDiacritics'
    | 'signature'
  >,
  configuration: GridConfiguration,
): void => {
  const logger = useGridLogger(apiRef, 'useGridFilter');

  apiRef.current.registerControlState({
    stateId: 'filter',
    propModel: props.filterModel,
    propOnChange: props.onFilterModelChange,
    stateSelector: gridFilterModelSelector,
    changeEvent: 'filterModelChange',
  });

  const updateFilteredRows = React.useCallback(() => {
      throw new Error("STUB");
  }, [apiRef]);

  const addColumnMenuItem = React.useCallback<GridPipeProcessor<'columnMenu'>>(
    (columnMenuItems, colDef) => {
          throw new Error("STUB");
      },
    [props.disableColumnFilter],
  );

  /**
   * API METHODS
   */
  const upsertFilterItem = React.useCallback<GridFilterApi['upsertFilterItem']>(
    (item) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const upsertFilterItems = React.useCallback<GridFilterApi['upsertFilterItems']>(
    (items) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const deleteFilterItem = React.useCallback<GridFilterApi['deleteFilterItem']>(
    (itemToDelete) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const showFilterPanel = React.useCallback<GridFilterApi['showFilterPanel']>(
    (targetColumnField, panelId, labelId) => {
          throw new Error("STUB");
      },
    [apiRef, logger, props.disableMultipleColumnsFiltering],
  );

  const hideFilterPanel = React.useCallback<GridFilterApi['hideFilterPanel']>(() => {
      throw new Error("STUB");
  }, [apiRef, logger]);

  const setFilterLogicOperator = React.useCallback<GridFilterApi['setFilterLogicOperator']>(
    (logicOperator) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const setQuickFilterValues = React.useCallback<GridFilterApi['setQuickFilterValues']>(
    (values) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const setFilterModel = React.useCallback<GridFilterApi['setFilterModel']>(
    (model, reason) => {
          throw new Error("STUB");
      },
    [apiRef, logger, props.disableMultipleColumnsFiltering],
  );

  const getFilterState = React.useCallback<GridFilterApi['getFilterState']>(
    (inputFilterModel) => {
          throw new Error("STUB");
      },
    [apiRef, configuration.hooks, props],
  );

  const filterApi: GridFilterApi = {
    setFilterLogicOperator,
    unstable_applyFilters: updateFilteredRows,
    deleteFilterItem,
    upsertFilterItem,
    upsertFilterItems,
    setFilterModel,
    showFilterPanel,
    hideFilterPanel,
    setQuickFilterValues,
    ignoreDiacritics: props.ignoreDiacritics,
    getFilterState,
  };

  useGridApiMethod(apiRef, filterApi, 'public');

  /**
   * PRE-PROCESSING
   */
  const stateExportPreProcessing = React.useCallback<GridPipeProcessor<'exportState'>>(
    (prevState, context) => {
          throw new Error("STUB");
      },
    [apiRef, props.filterModel, props.initialState?.filter?.filterModel],
  );

  const stateRestorePreProcessing = React.useCallback<GridPipeProcessor<'restoreState'>>(
    (params, context) => {
          throw new Error("STUB");
      },
    [apiRef, props.disableMultipleColumnsFiltering],
  );

  const preferencePanelPreProcessing = React.useCallback<GridPipeProcessor<'preferencePanel'>>(
    (initialValue, value) => {
          throw new Error("STUB");
      },
    [props.slots.filterPanel, props.slotProps?.filterPanel],
  );

  const { getRowId } = props;
  const getRowsRef = useLazyRef(createMemoizedValues);

  const flatFilteringMethod = React.useCallback<GridStrategyProcessor<'filtering'>>(
    (params) => {
          throw new Error("STUB");
      },
    [apiRef, props.filterMode, getRowId, getRowsRef],
  );

  useGridRegisterPipeProcessor(apiRef, 'columnMenu', addColumnMenuItem);
  useGridRegisterPipeProcessor(apiRef, 'exportState', stateExportPreProcessing);
  useGridRegisterPipeProcessor(apiRef, 'restoreState', stateRestorePreProcessing);
  useGridRegisterPipeProcessor(apiRef, 'preferencePanel', preferencePanelPreProcessing);
  useGridRegisterStrategyProcessor(apiRef, GRID_DEFAULT_STRATEGY, 'filtering', flatFilteringMethod);
  useGridRegisterStrategyProcessor(
    apiRef,
    GRID_DEFAULT_STRATEGY,
    'visibleRowsLookupCreation',
    getVisibleRowsLookup,
  );

  /**
   * EVENTS
   */
  const handleColumnsChange = React.useCallback<GridEventListener<'columnsChange'>>(() => {
      throw new Error("STUB");
  }, [apiRef, logger]);

  const handleStrategyProcessorChange = React.useCallback<
    GridEventListener<'activeStrategyProcessorChange'>
  >(
    (methodName) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const updateVisibleRowsLookupState = React.useCallback(() => {
      throw new Error("STUB");
  }, [apiRef]);

  useGridEvent(apiRef, 'rowsSet', updateFilteredRows);
  useGridEvent(apiRef, 'columnsChange', handleColumnsChange);
  useGridEvent(apiRef, 'activeStrategyProcessorChange', handleStrategyProcessorChange);
  useGridEvent(apiRef, 'rowExpansionChange', updateVisibleRowsLookupState);
  useGridEvent(apiRef, 'columnVisibilityModelChange', () => {
      throw new Error("STUB");
  });

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
  }, [apiRef, logger, props.filterModel]);
};
