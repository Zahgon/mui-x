'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import { isDeepEqual } from '@mui/x-internals/isDeepEqual';
import {
  gridColumnLookupSelector,
  GridLogicOperator,
  gridRowsLookupSelector,
  useGridApiMethod,
  GRID_CHECKBOX_SELECTION_FIELD,
  GridPreferencePanelsValue,
  gridColumnGroupsUnwrappedModelSelector,
  gridVisibleRowsSelector,
} from '@mui/x-data-grid-pro';
import type { GridRowSelectionModel, GridSingleSelectColDef } from '@mui/x-data-grid-pro';
import {
  getValueOptions,
  getVisibleRows,
  useGridRegisterPipeProcessor,
} from '@mui/x-data-grid-pro/internals';
import type { GridPipeProcessor, GridStateInitializer } from '@mui/x-data-grid-pro/internals';
import type { GridPrivateApiPremium } from '../../../models/gridApiPremium';
import type {
  GridAiAssistantApi,
  GridAiAssistantState,
  Prompt,
  PromptResponse,
} from './gridAiAssistantInterfaces';
import type { DataGridPremiumProcessedProps } from '../../../models/dataGridPremiumProps';
import {
  gridAiAssistantConversationsSelector,
  gridAiAssistantActiveConversationSelector,
  gridAiAssistantActiveConversationIndexSelector,
} from './gridAiAssistantSelectors';
import { gridChartsIntegrationActiveChartIdSelector } from '../chartsIntegration/gridChartsIntegrationSelectors';

const DEFAULT_SAMPLE_COUNT = 5;
const MAX_CHART_DATA_POINTS = 1000;

export const aiAssistantStateInitializer: GridStateInitializer<
  Pick<DataGridPremiumProcessedProps, 'initialState' | 'aiAssistantConversations' | 'aiAssistant'>
> = (state, props) => {
    throw new Error("STUB");
};

export const useGridAiAssistant = (
  apiRef: RefObject<GridPrivateApiPremium>,
  props: Pick<
    DataGridPremiumProcessedProps,
    | 'aiAssistant'
    | 'aiAssistantConversations'
    | 'aiAssistantActiveConversationIndex'
    | 'allowAiAssistantDataSampling'
    | 'onAiAssistantConversationsChange'
    | 'onAiAssistantActiveConversationIndexChange'
    | 'onPrompt'
    | 'slots'
    | 'rowSelection'
    | 'disableColumnFilter'
    | 'disableRowGrouping'
    | 'disableAggregation'
    | 'disableColumnSorting'
    | 'disablePivoting'
    | 'chartsIntegration'
    | 'getPivotDerivedColumns'
  >,
) => {
  const {
    onPrompt,
    allowAiAssistantDataSampling,
    slots,
    rowSelection,
    disableColumnFilter,
    disableRowGrouping,
    disableAggregation,
    disableColumnSorting,
    disablePivoting,
    chartsIntegration,
    getPivotDerivedColumns,
  } = props;
  const previousUnwrappedGroupingModel = React.useRef<string[]>([]);
  const activeChartId = gridChartsIntegrationActiveChartIdSelector(apiRef);
  const columnsLookup = gridColumnLookupSelector(apiRef);
  const columns = Object.values(columnsLookup);
  const rows = Object.values(gridRowsLookupSelector(apiRef));
  const isAiAssistantAvailable = !!props.aiAssistant;

  apiRef.current.registerControlState({
    stateId: 'aiAssistantConversations',
    propModel: props.aiAssistantConversations,
    propOnChange: props.onAiAssistantConversationsChange,
    stateSelector: gridAiAssistantConversationsSelector,
    changeEvent: 'aiAssistantConversationsChange',
  });

  apiRef.current.registerControlState({
    stateId: 'aiAssistantActiveConversationIndex',
    propModel: props.aiAssistantActiveConversationIndex,
    propOnChange: props.onAiAssistantActiveConversationIndexChange,
    stateSelector: gridAiAssistantActiveConversationIndexSelector,
    changeEvent: 'aiAssistantActiveConversationIndexChange',
  });

  const preferencePanelPreProcessing = React.useCallback<GridPipeProcessor<'preferencePanel'>>(
    (initialValue, value) => {
          throw new Error("STUB");
      },
    [isAiAssistantAvailable, slots],
  );

  const collectSampleData = React.useCallback(() => {
      throw new Error("STUB");
  }, [apiRef, columns, rows]);

  const getPromptContext = React.useCallback(
    (allowDataSampling = false) => {
          throw new Error("STUB");
      },
    [
      apiRef,
      columns,
      collectSampleData,
      getPivotDerivedColumns,
      isAiAssistantAvailable,
      disablePivoting,
    ],
  );

  const updateChart = React.useCallback(
    (result: PromptResponse) => {
          throw new Error("STUB");
      },
    [apiRef, activeChartId],
  );

  const applyPromptResult = React.useCallback(
    (result: PromptResponse) => {
          throw new Error("STUB");
      },
    [
      apiRef,
      updateChart,
      rowSelection,
      disableColumnFilter,
      disableRowGrouping,
      disableAggregation,
      disableColumnSorting,
      disablePivoting,
      columnsLookup,
      isAiAssistantAvailable,
      activeChartId,
      chartsIntegration,
    ],
  );

  const setActiveConversationId = React.useCallback(
    (id: string) => {
          throw new Error("STUB");
      },
    [apiRef, isAiAssistantAvailable],
  );

  const setConversationPrompts = React.useCallback(
    (index: number, callback: (prevPrompts: Prompt[]) => Prompt[]) => {
          throw new Error("STUB");
      },
    [apiRef, isAiAssistantAvailable],
  );

  const processPrompt = React.useCallback(
    async (value: string) => {
          throw new Error("STUB");
      },
    [
      apiRef,
      allowAiAssistantDataSampling,
      onPrompt,
      getPromptContext,
      applyPromptResult,
      setConversationPrompts,
      setActiveConversationId,
    ],
  );

  const setActiveConversationIndex = React.useCallback<
    GridAiAssistantApi['aiAssistant']['setActiveConversationIndex']
  >(
    (index) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const setConversations = React.useCallback<GridAiAssistantApi['aiAssistant']['setConversations']>(
    (callback) => {
          throw new Error("STUB");
      },
    [apiRef, isAiAssistantAvailable],
  );

  React.useEffect(() => {
      throw new Error("STUB");
  }, [apiRef, props.aiAssistantConversations, setConversations]);

  React.useEffect(() => {
      throw new Error("STUB");
  }, [apiRef, props.aiAssistantActiveConversationIndex, setActiveConversationIndex]);

  useGridRegisterPipeProcessor(apiRef, 'preferencePanel', preferencePanelPreProcessing);
  useGridApiMethod(
    apiRef,
    {
      aiAssistant: {
        processPrompt,
        setConversations,
        setActiveConversationIndex,
      },
    },
    'public',
  );
};
