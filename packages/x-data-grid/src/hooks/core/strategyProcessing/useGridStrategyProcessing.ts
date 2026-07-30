'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import type { GridPrivateApiCommon } from '../../../models/api/gridApiCommon';
import { GridStrategyGroup } from './gridStrategyProcessingApi';
import type {
  GridStrategyProcessor,
  GridStrategyProcessorName,
  GridStrategyProcessingApi,
  GridStrategyGroupValue,
} from './gridStrategyProcessingApi';
import { useGridApiMethod } from '../../utils/useGridApiMethod';

export const GRID_DEFAULT_STRATEGY = 'none';

const GRID_STRATEGIES_PROCESSORS: {
  [P in GridStrategyProcessorName]: GridStrategyGroupValue;
} = {
  dataSourceRootRowsUpdate: GridStrategyGroup.DataSource,
  dataSourceNestedRowsUpdate: GridStrategyGroup.DataSource,
  rowTreeCreation: GridStrategyGroup.RowTree,
  filtering: GridStrategyGroup.RowTree,
  sorting: GridStrategyGroup.RowTree,
  visibleRowsLookupCreation: GridStrategyGroup.RowTree,
};

type UntypedStrategyProcessors = {
  [strategyName: string]: GridStrategyProcessor<any>;
};

/**
 * Implements a variant of the Strategy Pattern (see https://en.wikipedia.org/wiki/Strategy_pattern)
 *
 * More information and detailed example in (TODO add link to technical doc when ready)
 *
 * Some plugins contains custom logic that must only be applied if the right strategy is active.
 * For instance, the row grouping plugin has a custom filtering algorithm.
 * This algorithm must be applied by the filtering plugin if the row grouping is the current way of grouping rows,
 * but not if the tree data is the current way of grouping rows.
 *
 * =====================================================================================================================
 *
 * The plugin containing the custom logic must use:
 *
 * - `useGridRegisterStrategyProcessor` to register their processor.
 *   When the processor of the active strategy changes, it will fire `"activeStrategyProcessorChange"` to re-apply the processor.
 *
 * - `apiRef.current.setStrategyAvailability` to tell if their strategy can be used.
 *
 * =====================================================================================================================
 *
 * The plugin or component that needs to apply the custom logic of the current strategy must use:
 *
 * - `apiRef.current.applyStrategyProcessor` to run the processor of the active strategy for a given processor name.
 *
 * - the "strategyAvailabilityChange" event to update something when the active strategy changes.
 *    Warning: Be careful not to apply the processor several times.
 *    For instance "rowsSet" is fired by `useGridRows` whenever the active strategy changes.
 *    So listening to both would most likely run your logic twice.
 *
 * - The "activeStrategyProcessorChange" event to update something when the processor of the active strategy changes.
 *
 * =====================================================================================================================
 *
 * Each processor name is part of a strategy group which can only have one active strategy at the time.
 * There are two active groups named `rowTree` and `dataSource`.
 */
export const useGridStrategyProcessing = (apiRef: RefObject<GridPrivateApiCommon>) => {
  const availableStrategies = React.useRef(
    new Map<string, { group: GridStrategyGroupValue; isAvailable: () => boolean }>(),
  );
  const strategiesCache = React.useRef<{
    [P in GridStrategyProcessorName]?: { [strategyName: string]: GridStrategyProcessor<any> };
  }>({});

  const registerStrategyProcessor = React.useCallback<
    GridStrategyProcessingApi['registerStrategyProcessor']
  >(
    (strategyName, processorName, processor: GridStrategyProcessor<any>) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const applyStrategyProcessor = React.useCallback<
    GridStrategyProcessingApi['applyStrategyProcessor']
  >(
    (processorName, params) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const getActiveStrategy = React.useCallback<GridStrategyProcessingApi['getActiveStrategy']>(
    (strategyGroup) => {
          throw new Error("STUB");
      },
    [],
  );

  const setStrategyAvailability = React.useCallback<
    GridStrategyProcessingApi['setStrategyAvailability']
  >(
    (strategyGroup, strategyName, isAvailable) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const strategyProcessingApi: GridStrategyProcessingApi = {
    registerStrategyProcessor,
    applyStrategyProcessor,
    getActiveStrategy,
    setStrategyAvailability,
  };

  useGridApiMethod(apiRef, strategyProcessingApi, 'private');
};
