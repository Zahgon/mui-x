'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import { isObjectEmpty } from '@mui/x-internals/isObjectEmpty';
import {
  gridColumnLookupSelector,
  useGridEvent,
  useGridApiMethod,
  useRunOncePerLoop,
  gridRenderContextSelector,
  gridVisibleColumnFieldsSelector,
  gridSortModelSelector,
  gridRowMaximumTreeDepthSelector,
} from '@mui/x-data-grid-pro';
import {
  useGridRegisterPipeProcessor,
  gridPivotActiveSelector,
} from '@mui/x-data-grid-pro/internals';
import type { GridStateInitializer, GridPipeProcessor } from '@mui/x-data-grid-pro/internals';
import type { DataGridPremiumProcessedProps } from '../../../models/dataGridPremiumProps';
import type { GridPrivateApiPremium } from '../../../models/gridApiPremium';
import {
  gridAggregationLookupSelector,
  gridAggregationModelSelector,
} from './gridAggregationSelectors';
import type {
  GridAggregationApi,
  GridAggregationLookup,
  GridAggregationPrivateApi,
} from './gridAggregationInterfaces';
import {
  getAggregationRules,
  mergeStateWithAggregationModel,
  areAggregationRulesEqual,
} from './gridAggregationUtils';
import { createAggregationLookup, shouldApplySorting } from './createAggregationLookup';

export const aggregationStateInitializer: GridStateInitializer<
  Pick<DataGridPremiumProcessedProps, 'aggregationModel' | 'initialState'>,
  GridPrivateApiPremium
> = (state, props, apiRef) => {
    throw new Error("STUB");
};

export const useGridAggregation = (
  apiRef: RefObject<GridPrivateApiPremium>,
  props: Pick<
    DataGridPremiumProcessedProps,
    | 'onAggregationModelChange'
    | 'initialState'
    | 'aggregationModel'
    | 'getAggregationPosition'
    | 'aggregationFunctions'
    | 'aggregationRowsScope'
    | 'disableAggregation'
    | 'rowGroupingColumnMode'
    | 'dataSource'
  >,
) => {
  apiRef.current.registerControlState({
    stateId: 'aggregation',
    propModel: props.aggregationModel,
    propOnChange: props.onAggregationModelChange,
    stateSelector: gridAggregationModelSelector,
    changeEvent: 'aggregationModelChange',
  });

  /**
   * API METHODS
   */
  const setAggregationModel = React.useCallback<GridAggregationApi['setAggregationModel']>(
    (model) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const abortControllerRef = React.useRef<AbortController | null>(null);
  const applyAggregation = React.useCallback(() => {
      throw new Error("STUB");
  }, [
    apiRef,
    props.getAggregationPosition,
    props.aggregationFunctions,
    props.aggregationRowsScope,
    props.dataSource,
  ]);

  React.useEffect(() => {
      throw new Error("STUB");
  }, []);

  const { schedule: deferredApplyAggregation } = useRunOncePerLoop(applyAggregation);

  const aggregationApi: GridAggregationApi = {
    setAggregationModel,
  };

  const aggregationPrivateApi: GridAggregationPrivateApi = {
    applyAggregation,
  };

  useGridApiMethod(apiRef, aggregationApi, 'public');
  useGridApiMethod(apiRef, aggregationPrivateApi, 'private');

  const addGetRowsParams = React.useCallback<GridPipeProcessor<'getRowsParams'>>(
    (params) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  useGridRegisterPipeProcessor(apiRef, 'getRowsParams', addGetRowsParams);

  /**
   * EVENTS
   */
  const checkAggregationRulesDiff = React.useCallback(() => {
      throw new Error("STUB");
  }, [
    apiRef,
    deferredApplyAggregation,
    props.aggregationFunctions,
    props.disableAggregation,
    props.dataSource,
  ]);

  useGridEvent(apiRef, 'aggregationModelChange', checkAggregationRulesDiff);
  useGridEvent(apiRef, 'columnsChange', checkAggregationRulesDiff);
  useGridEvent(apiRef, 'filteredRowsSet', deferredApplyAggregation);

  const lastSortModel = React.useRef(gridSortModelSelector(apiRef));
  useGridEvent(apiRef, 'sortedRowsSet', () => {
      throw new Error("STUB");
  });

  /**
   * EFFECTS
   */
  React.useEffect(() => {
      throw new Error("STUB");
  }, [apiRef, props.aggregationModel]);

  React.useEffect(() => {
      throw new Error("STUB");
  }, [deferredApplyAggregation, props.getAggregationPosition]);
};
