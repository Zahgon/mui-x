import * as React from 'react';
import {
  gridDataRowIdsSelector,
  gridRowIdSelector,
  gridRowsLoadingSelector,
  gridRowsLookupSelector,
} from '@mui/x-data-grid-pro';
import type { GridColDef, GridRowId, GridRowModel } from '@mui/x-data-grid-pro';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';
import useOnMount from '@mui/utils/useOnMount';
import type { RefObject } from '@mui/x-internals/types';
import {
  useGridApiMethod,
  useGridRegisterPipeProcessor,
  useGridSelector,
  gridPivotInitialColumnsSelector,
} from '@mui/x-data-grid-pro/internals';
import type { GridStateInitializer, GridPipeProcessor } from '@mui/x-data-grid-pro/internals';
import type { GridInitialStatePremium } from '../../../models/gridStatePremium';
import type { DataGridPremiumProcessedProps } from '../../../models/dataGridPremiumProps';

import type { GridPrivateApiPremium } from '../../../models/gridApiPremium';
import { GridPivotPanel } from '../../../components/pivotPanel';
import type {
  GridPivotingApi,
  GridPivotingPrivateApi,
  GridPivotingPropsOverrides,
  GridPivotingStaticPropsOverrides,
  GridPivotingState,
  GridPivotModel,
} from './gridPivotingInterfaces';
import {
  gridPivotModelSelector,
  gridPivotActiveSelector,
  gridPivotPanelOpenSelector,
} from './gridPivotingSelectors';
import { getInitialColumns, getPivotForcedProps, createPivotPropsFromRows } from './utils';
import { getAvailableAggregationFunctions } from '../aggregation/gridAggregationUtils';
import { GridSidebarValue } from '../sidebar';

const emptyPivotModel: GridPivotModel = { rows: [], columns: [], values: [] };

export const pivotingStateInitializer: GridStateInitializer<
  Pick<
    DataGridPremiumProcessedProps,
    | 'pivotActive'
    | 'pivotModel'
    | 'pivotPanelOpen'
    | 'initialState'
    | 'disablePivoting'
    | 'getPivotDerivedColumns'
    | 'columns'
  >,
  GridPrivateApiPremium
> = (state, props, apiRef) => {
    throw new Error("STUB");
};

export const useGridPivoting = (
  apiRef: RefObject<GridPrivateApiPremium>,
  props: Pick<
    DataGridPremiumProcessedProps,
    | 'pivotActive'
    | 'onPivotActiveChange'
    | 'pivotModel'
    | 'onPivotModelChange'
    | 'pivotPanelOpen'
    | 'onPivotPanelOpenChange'
    | 'disablePivoting'
    | 'getPivotDerivedColumns'
    | 'pivotingColDef'
    | 'groupingColDef'
    | 'aggregationFunctions'
    | 'loading'
    | 'dataSource'
  >,
  originalColumnsProp: readonly GridColDef[],
  originalRowsProp: readonly GridRowModel[],
) => {
  const isPivotActive = useGridSelector(apiRef, gridPivotActiveSelector);
  const isLoading = props.loading ?? gridRowsLoadingSelector(apiRef);
  const { exportedStateRef, nonPivotDataRef } = apiRef.current.caches.pivoting;

  const isPivotingAvailable = !props.disablePivoting;

  apiRef.current.registerControlState({
    stateId: 'pivotModel',
    propModel: props.pivotModel,
    propOnChange: props.onPivotModelChange,
    stateSelector: gridPivotModelSelector,
    changeEvent: 'pivotModelChange',
  });

  apiRef.current.registerControlState({
    stateId: 'pivotMode',
    propModel: props.pivotActive,
    propOnChange: props.onPivotActiveChange,
    stateSelector: gridPivotActiveSelector,
    changeEvent: 'pivotModeChange',
  });

  apiRef.current.registerControlState({
    stateId: 'pivotPanelOpen',
    propModel: props.pivotPanelOpen,
    propOnChange: props.onPivotPanelOpenChange,
    stateSelector: gridPivotPanelOpenSelector,
    changeEvent: 'pivotPanelOpenChange',
  });

  const getInitialData = React.useCallback(() => {
      throw new Error("STUB");
  }, [
    apiRef,
    props.getPivotDerivedColumns,
    originalColumnsProp,
    originalRowsProp,
    exportedStateRef,
    props.dataSource,
  ]);

  const computePivotingState = React.useCallback(
    ({ active, model: pivotModel }: Pick<GridPivotingState, 'active' | 'model'>) => {
          throw new Error("STUB");
      },
    [
      apiRef,
      isLoading,
      props.dataSource,
      props.pivotingColDef,
      props.groupingColDef,
      nonPivotDataRef,
    ],
  );

  useOnMount(() => {
      throw new Error("STUB");
  });

  useEnhancedEffect(() => {
      throw new Error("STUB");
  }, [isPivotActive, apiRef, isPivotingAvailable, nonPivotDataRef, exportedStateRef]);

  const setPivotModel = React.useCallback<GridPivotingApi['setPivotModel']>(
    (callback) => {
          throw new Error("STUB");
      },
    [apiRef, computePivotingState, isPivotingAvailable],
  );

  const updatePivotModel = React.useCallback<GridPivotingPrivateApi['updatePivotModel']>(
    ({ field, targetSection, originSection, targetField, targetFieldPosition }) => {
          throw new Error("STUB");
      },
    [apiRef, props.aggregationFunctions, props.dataSource],
  );

  const setPivotActive = React.useCallback<GridPivotingApi['setPivotActive']>(
    (callback) => {
          throw new Error("STUB");
      },
    [apiRef, computePivotingState, getInitialData, isPivotingAvailable, nonPivotDataRef],
  );

  const setPivotPanelOpen = React.useCallback<GridPivotingApi['setPivotPanelOpen']>(
    (callback) => {
          throw new Error("STUB");
      },
    [apiRef, isPivotingAvailable],
  );

  const addColumnMenuButton = React.useCallback<GridPipeProcessor<'columnMenu'>>(
    (menuItems) => {
          throw new Error("STUB");
      },
    [isPivotingAvailable],
  );

  useGridRegisterPipeProcessor(apiRef, 'columnMenu', addColumnMenuButton);

  const updateNonPivotColumns = React.useCallback<GridPivotingPrivateApi['updateNonPivotColumns']>(
    (columns, keepPreviousColumns = true) => {
          throw new Error("STUB");
      },
    [
      isPivotingAvailable,
      apiRef,
      props.getPivotDerivedColumns,
      computePivotingState,
      nonPivotDataRef,
    ],
  );

  const updateNonPivotRows = React.useCallback<GridPivotingPrivateApi['updateNonPivotRows']>(
    (rows, keepPreviousRows = true) => {
          throw new Error("STUB");
      },
    [apiRef, computePivotingState, isPivotingAvailable, nonPivotDataRef, props.dataSource],
  );

  const addPivotingPanel = React.useCallback<GridPipeProcessor<'sidebar'>>(
    (initialValue, value) => {
          throw new Error("STUB");
      },
    [isPivotingAvailable],
  );

  const addGetRowsParams = React.useCallback<GridPipeProcessor<'getRowsParams'>>(
    (params) => {
          throw new Error("STUB");
      },
    [apiRef, isPivotingAvailable, isPivotActive],
  );

  useGridRegisterPipeProcessor(apiRef, 'sidebar', addPivotingPanel);
  useGridRegisterPipeProcessor(apiRef, 'getRowsParams', addGetRowsParams);

  useGridApiMethod(apiRef, { setPivotModel, setPivotActive, setPivotPanelOpen }, 'public');
  useGridApiMethod(
    apiRef,
    { updatePivotModel, updateNonPivotColumns, updateNonPivotRows },
    'private',
  );

  useEnhancedEffect(() => {
      throw new Error("STUB");
  }, [originalColumnsProp, apiRef]);

  useEnhancedEffect(() => {
      throw new Error("STUB");
  }, [originalRowsProp, apiRef, nonPivotDataRef]);

  useEnhancedEffect(() => {
      throw new Error("STUB");
  }, [apiRef, props.pivotModel]);

  useEnhancedEffect(() => {
      throw new Error("STUB");
  }, [apiRef, props.pivotActive]);

  useEnhancedEffect(() => {
      throw new Error("STUB");
  }, [apiRef, props.pivotPanelOpen]);
};

export const useGridPivotingExportState = (apiRef: RefObject<GridPrivateApiPremium>) => {
  const stateExportPreProcessing: GridPipeProcessor<'exportState'> = React.useCallback(
    (state: GridInitialStatePremium) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  useGridRegisterPipeProcessor(apiRef, 'exportState', stateExportPreProcessing);
};
