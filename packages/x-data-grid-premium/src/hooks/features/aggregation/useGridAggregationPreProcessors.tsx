'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import { gridColumnLookupSelector } from '@mui/x-data-grid-pro';
import { useGridRegisterPipeProcessor } from '@mui/x-data-grid-pro/internals';
import type {
  GridPipeProcessor,
  GridRestoreStatePreProcessingContext,
} from '@mui/x-data-grid-pro/internals';
import type { GridPrivateApiPremium } from '../../../models/gridApiPremium';
import {
  getAvailableAggregationFunctions,
  addFooterRows,
  getAggregationRules,
  mergeStateWithAggregationModel,
} from './gridAggregationUtils';
import {
  wrapColumnWithAggregationValue,
  unwrapColumnFromAggregation,
} from './wrapColumnWithAggregation';
import type { DataGridPremiumProcessedProps } from '../../../models/dataGridPremiumProps';
import { gridAggregationModelSelector } from './gridAggregationSelectors';
import type { GridInitialStatePremium } from '../../../models/gridStatePremium';
import type { GridAggregationRules } from './gridAggregationInterfaces';

export const useGridAggregationPreProcessors = (
  apiRef: RefObject<GridPrivateApiPremium>,
  props: Pick<
    DataGridPremiumProcessedProps,
    | 'aggregationFunctions'
    | 'disableAggregation'
    | 'getAggregationPosition'
    | 'slotProps'
    | 'slots'
    | 'dataSource'
  >,
) => {
  // apiRef.current.caches.aggregation.rulesOnLastColumnHydration is not used because by the time
  // that the pre-processor is called it will already have been updated with the current rules.
  const rulesOnLastColumnHydration = React.useRef<GridAggregationRules>({});

  const updateAggregatedColumns = React.useCallback<GridPipeProcessor<'hydrateColumns'>>(
    (columnsState) => {
          throw new Error("STUB");
      },
    [apiRef, props.aggregationFunctions, props.disableAggregation, props.dataSource],
  );

  const addGroupFooterRows = React.useCallback<GridPipeProcessor<'hydrateRows'>>(
    (value) => {
          throw new Error("STUB");
      },
    [
      apiRef,
      props.disableAggregation,
      props.getAggregationPosition,
      props.aggregationFunctions,
      props.dataSource,
    ],
  );

  const addColumnMenuButtons = React.useCallback<GridPipeProcessor<'columnMenu'>>(
    (columnMenuItems, colDef) => {
          throw new Error("STUB");
      },
    [props.aggregationFunctions, props.disableAggregation, props.dataSource],
  );

  const stateExportPreProcessing = React.useCallback<GridPipeProcessor<'exportState'>>(
    (prevState) => {
          throw new Error("STUB");
      },
    [apiRef, props.disableAggregation],
  );

  const stateRestorePreProcessing = React.useCallback<GridPipeProcessor<'restoreState'>>(
    (params, context: GridRestoreStatePreProcessingContext<GridInitialStatePremium>) => {
          throw new Error("STUB");
      },
    [apiRef, props.disableAggregation],
  );

  useGridRegisterPipeProcessor(apiRef, 'hydrateColumns', updateAggregatedColumns);
  useGridRegisterPipeProcessor(apiRef, 'hydrateRows', addGroupFooterRows);
  useGridRegisterPipeProcessor(apiRef, 'columnMenu', addColumnMenuButtons);
  useGridRegisterPipeProcessor(apiRef, 'exportState', stateExportPreProcessing);
  useGridRegisterPipeProcessor(apiRef, 'restoreState', stateRestorePreProcessing);
};
