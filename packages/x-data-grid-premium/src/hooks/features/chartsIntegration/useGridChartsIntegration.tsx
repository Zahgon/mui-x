'use client';
import * as React from 'react';
import debounce from '@mui/utils/debounce';
import type { RefObject } from '@mui/x-internals/types';
import {
  gridColumnGroupsLookupSelector,
  gridColumnGroupsUnwrappedModelSelector,
  gridRowIdSelector,
  gridRowNodeSelector,
  gridRowTreeSelector,
} from '@mui/x-data-grid-pro';
import type { GridColDef } from '@mui/x-data-grid-pro';
import {
  useGridApiMethod,
  useGridEvent,
  gridColumnLookupSelector,
  runIf,
  gridPivotActiveSelector,
  useGridRegisterPipeProcessor,
  gridColumnFieldsSelector,
  gridFilteredSortedDepthRowEntriesSelector,
  GRID_ROW_GROUPING_SINGLE_GROUPING_FIELD,
} from '@mui/x-data-grid-pro/internals';
import type {
  GridStateInitializer,
  GridPipeProcessor,
  GridRestoreStatePreProcessingContext,
} from '@mui/x-data-grid-pro/internals';

import type { DataGridPremiumProcessedProps } from '../../../models/dataGridPremiumProps';
import type { GridInitialStatePremium } from '../../../models/gridStatePremium';
import type { GridPrivateApiPremium } from '../../../models/gridApiPremium';
import type {
  ChartState,
  GridChartsIntegrationContextValue,
} from '../../../models/gridChartsIntegration';
import { getRowGroupingFieldFromGroupingCriteria } from '../rowGrouping/gridRowGroupingUtils';
import type {
  GridChartsIntegrationApi,
  GridChartsIntegrationItem,
  GridChartsIntegrationPrivateApi,
  GridChartsIntegrationState,
} from './gridChartsIntegrationInterfaces';
import {
  gridChartsPanelOpenSelector,
  gridChartsDimensionsSelector,
  gridChartsValuesSelector,
  gridChartsIntegrationActiveChartIdSelector,
  gridChartableColumnsSelector,
  gridChartsIntegrationChartsLookupSelector,
} from './gridChartsIntegrationSelectors';
import { useGridChartsIntegrationContext } from '../../utils/useGridChartIntegration';
import { isBlockedForSection } from './utils';
import { gridRowGroupingSanitizedModelSelector } from '../rowGrouping/gridRowGroupingSelector';
import { GridSidebarValue } from '../sidebar';
import {
  getAggregationFunctionLabel,
  getAvailableAggregationFunctions,
} from '../aggregation/gridAggregationUtils';
import type { GridAggregationModel } from '../aggregation/gridAggregationInterfaces';
import { gridAggregationModelSelector } from '../aggregation/gridAggregationSelectors';
import { gridPivotModelSelector } from '../pivoting/gridPivotingSelectors';
import type { GridPivotModel } from '../pivoting/gridPivotingInterfaces';

const EMPTY_CHART_INTEGRATION_CONTEXT: GridChartsIntegrationContextValue = {
  chartStateLookup: {},
  setChartState: () => {
      throw new Error("STUB");
  },
};

export const EMPTY_CHART_INTEGRATION_CONTEXT_STATE: ChartState = {
  synced: true,
  dimensions: [],
  values: [],
  type: '',
  configuration: {},
};

export const chartsIntegrationStateInitializer: GridStateInitializer<
  Pick<
    DataGridPremiumProcessedProps,
    'chartsIntegration' | 'initialState' | 'activeChartId' | 'rowGroupingModel' | 'pivotModel'
  >,
  GridPrivateApiPremium
> = (state, props) => {
    throw new Error("STUB");
};

export const useGridChartsIntegration = (
  apiRef: RefObject<GridPrivateApiPremium>,
  props: Pick<
    DataGridPremiumProcessedProps,
    | 'chartsIntegration'
    | 'activeChartId'
    | 'onActiveChartIdChange'
    | 'initialState'
    | 'slots'
    | 'slotProps'
    | 'aggregationFunctions'
    | 'dataSource'
  >,
) => {
  const visibleDimensions = React.useRef<Record<string, GridColDef[]>>({});
  const visibleValues = React.useRef<Record<string, GridColDef[]>>({});
  const schema = React.useMemo(
    () => { throw new Error("STUB"); },
    [props.slotProps?.chartsPanel?.schema],
  );

  const context = useGridChartsIntegrationContext(true);
  const isChartsIntegrationAvailable = !!props.chartsIntegration && !!context;
  const activeChartId = gridChartsIntegrationActiveChartIdSelector(apiRef);
  const aggregationModel = gridAggregationModelSelector(apiRef);
  const pivotActive = gridPivotActiveSelector(apiRef);
  const pivotModel = gridPivotModelSelector(apiRef);

  const { chartStateLookup, setChartState } = context || EMPTY_CHART_INTEGRATION_CONTEXT;
  const availableChartIds = React.useMemo(() => {
      throw new Error("STUB");
  }, [chartStateLookup]);
  const syncedChartIds = React.useMemo(
    () => { throw new Error("STUB"); },
    [availableChartIds, chartStateLookup],
  );

  const getColumnName = React.useCallback(
    (field: string) => {
          throw new Error("STUB");
      },
    [apiRef, pivotActive, props.slotProps?.chartsPanel],
  );

  // Adds aggregation function label to the column name
  const getValueDatasetLabel = React.useCallback(
    (field: string) => {
          throw new Error("STUB");
      },
    [apiRef, props.aggregationFunctions, props.slotProps?.chartsPanel, getColumnName],
  );

  apiRef.current.registerControlState({
    stateId: 'activeChartId',
    propModel: props.activeChartId,
    propOnChange: props.onActiveChartIdChange,
    stateSelector: gridChartsIntegrationActiveChartIdSelector,
    changeEvent: 'activeChartIdChange',
  });

  // sometimes, updates made to the chart dimensions and values require updating other models
  // for example, if we are adding more than one dimension, we need to set the new grouping model
  // if we are adding new value dataset to the grouped data, we need to set the aggregation model, otherwise the values will be undefined
  const updateOtherModels = React.useCallback(() => {
      throw new Error("STUB");
  }, [
    apiRef,
    props.aggregationFunctions,
    props.dataSource,
    activeChartId,
    pivotActive,
    aggregationModel,
  ]);

  const handleRowDataUpdate = React.useCallback(
    (chartIds: string[]) => {
          throw new Error("STUB");
      },
    [apiRef, getColumnName, getValueDatasetLabel, setChartState],
  );

  const debouncedHandleRowDataUpdate = React.useMemo(
    () => { throw new Error("STUB"); },
    [handleRowDataUpdate],
  );

  const handleColumnDataUpdate = React.useCallback(
    (chartIds: string[], updatedChartStateLookup?: Record<string, ChartState>) => {
          throw new Error("STUB");
      },
    [
      apiRef,
      chartStateLookup,
      pivotActive,
      pivotModel,
      debouncedHandleRowDataUpdate,
      updateOtherModels,
    ],
  );

  const debouncedHandleColumnDataUpdate = React.useMemo(
    () => { throw new Error("STUB"); },
    [handleColumnDataUpdate],
  );

  const setChartsPanelOpen = React.useCallback<GridChartsIntegrationApi['setChartsPanelOpen']>(
    (callback) => {
          throw new Error("STUB");
      },
    [apiRef, isChartsIntegrationAvailable],
  );

  const updateChartDimensionsData = React.useCallback(
    (
      chartId: string,
      dimensions:
        | GridChartsIntegrationItem[]
        | ((prev: GridChartsIntegrationItem[]) => GridChartsIntegrationItem[]),
    ) => {
          throw new Error("STUB");
      },
    [apiRef, isChartsIntegrationAvailable, syncedChartIds, debouncedHandleColumnDataUpdate],
  );

  const updateChartValuesData = React.useCallback(
    (
      chartId: string,
      values:
        | GridChartsIntegrationItem[]
        | ((prev: GridChartsIntegrationItem[]) => GridChartsIntegrationItem[]),
    ) => {
          throw new Error("STUB");
      },
    [apiRef, isChartsIntegrationAvailable, syncedChartIds, debouncedHandleColumnDataUpdate],
  );

  const setActiveChartId = React.useCallback<GridChartsIntegrationApi['setActiveChartId']>(
    (chartId) => {
          throw new Error("STUB");
      },
    [apiRef, isChartsIntegrationAvailable],
  );

  const setChartType = React.useCallback<GridChartsIntegrationApi['setChartType']>(
    (chartId, type) => {
          throw new Error("STUB");
      },
    [isChartsIntegrationAvailable, chartStateLookup, schema, setChartState, handleColumnDataUpdate],
  );

  const setChartSynchronizationState = React.useCallback<
    GridChartsIntegrationApi['setChartSynchronizationState']
  >(
    (chartId, synced) => {
          throw new Error("STUB");
      },
    [
      apiRef,
      isChartsIntegrationAvailable,
      chartStateLookup,
      setChartState,
      debouncedHandleColumnDataUpdate,
    ],
  );

  // called when a column is dragged and dropped to a different section
  const updateDataReference = React.useCallback<
    GridChartsIntegrationPrivateApi['chartsIntegration']['updateDataReference']
  >(
    (field, originSection, targetSection, targetField, placementRelativeToTargetField) => {
          throw new Error("STUB");
      },
    [
      apiRef,
      props.aggregationFunctions,
      props.dataSource,
      activeChartId,
      chartStateLookup,
      updateChartDimensionsData,
      updateChartValuesData,
      aggregationModel,
      pivotActive,
      pivotModel,
    ],
  );

  const addColumnMenuButton = React.useCallback<GridPipeProcessor<'columnMenu'>>(
    (menuItems) => {
          throw new Error("STUB");
      },
    [isChartsIntegrationAvailable],
  );

  useGridRegisterPipeProcessor(apiRef, 'columnMenu', addColumnMenuButton);

  const addChartsPanel = React.useCallback<GridPipeProcessor<'sidebar'>>(
    (initialValue, value) => {
          throw new Error("STUB");
      },
    [props, isChartsIntegrationAvailable],
  );

  useGridRegisterPipeProcessor(apiRef, 'sidebar', addChartsPanel);

  useGridApiMethod(
    apiRef,
    { chartsIntegration: { updateDataReference, getColumnName } },
    'private',
  );
  useGridApiMethod(
    apiRef,
    props.chartsIntegration
      ? {
          setChartsPanelOpen,
          setActiveChartId,
          setChartType,
          setChartSynchronizationState,
          updateChartDimensionsData,
          updateChartValuesData,
        }
      : {},
    'public',
  );

  useGridEvent(
    apiRef,
    'columnsChange',
    runIf(isChartsIntegrationAvailable, () => { throw new Error("STUB"); }),
  );
  useGridEvent(
    apiRef,
    'pivotModeChange',
    runIf(isChartsIntegrationAvailable, () => { throw new Error("STUB"); }),
  );
  useGridEvent(
    apiRef,
    'filteredRowsSet',
    runIf(isChartsIntegrationAvailable, () => { throw new Error("STUB"); }),
  );
  useGridEvent(
    apiRef,
    'sortedRowsSet',
    runIf(isChartsIntegrationAvailable, () => { throw new Error("STUB"); }),
  );
  useGridEvent(
    apiRef,
    'aggregationLookupSet',
    runIf(isChartsIntegrationAvailable, () => { throw new Error("STUB"); }),
  );

  const stateExportPreProcessing = React.useCallback<GridPipeProcessor<'exportState'>>(
    (prevState, exportContext) => {
          throw new Error("STUB");
      },
    [apiRef, chartStateLookup, props.chartsIntegration, props.initialState?.chartsIntegration],
  );

  const stateRestorePreProcessing = React.useCallback<GridPipeProcessor<'restoreState'>>(
    (params, restoreContext) => {
          throw new Error("STUB");
      },
    [apiRef, setChartState],
  );

  useGridRegisterPipeProcessor(apiRef, 'exportState', stateExportPreProcessing);
  useGridRegisterPipeProcessor(apiRef, 'restoreState', stateRestorePreProcessing);

  React.useEffect(() => {
      throw new Error("STUB");
  }, [availableChartIds, activeChartId, setActiveChartId]);

  const isInitialized = React.useRef(false);
  React.useEffect(() => {
      throw new Error("STUB");
  }, [
    schema,
    availableChartIds,
    syncedChartIds,
    props.initialState?.chartsIntegration?.charts,
    setChartState,
    debouncedHandleColumnDataUpdate,
  ]);
};
