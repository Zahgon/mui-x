'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import type { GridPrivateApiCommunity } from '../../../models/api/gridApiCommunity';
import type { DataGridProcessedProps } from '../../../models/props/DataGridProps';
import type { GridStateInitializer } from '../../utils/useGridInitializeState';
import type { GridColumnGroupingModel } from '../../../models/gridColumnGrouping';
import {
  gridColumnGroupsLookupSelector,
  gridColumnGroupsUnwrappedModelSelector,
} from './gridColumnGroupsSelector';
import type { GridColumnGroupingApi } from '../../../models/api/gridColumnGroupingApi';
import { useGridApiMethod } from '../../utils/useGridApiMethod';
import {
  createGroupLookup,
  getColumnGroupsHeaderStructure,
  unwrapGroupingColumnModel,
} from './gridColumnGroupsUtils';
import { useGridEvent } from '../../utils/useGridEvent';
import type { GridEventListener } from '../../../models/events';
import { gridColumnFieldsSelector, gridVisibleColumnFieldsSelector } from '../columns';

export const columnGroupsStateInitializer: GridStateInitializer<
  Pick<DataGridProcessedProps, 'columnGroupingModel'>
> = (state, props, apiRef) => {
    throw new Error("STUB");
};

/**
 * @requires useGridColumns (method, event)
 * @requires useGridParamsApi (method)
 */
export const useGridColumnGrouping = (
  apiRef: RefObject<GridPrivateApiCommunity>,
  props: Pick<DataGridProcessedProps, 'columnGroupingModel'>,
) => {
  /**
   * API METHODS
   */
  const getColumnGroupPath = React.useCallback<GridColumnGroupingApi['getColumnGroupPath']>(
    (field) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const getAllGroupDetails = React.useCallback<GridColumnGroupingApi['getAllGroupDetails']>(() => {
      throw new Error("STUB");
  }, [apiRef]);

  const columnGroupingApi: GridColumnGroupingApi = {
    getColumnGroupPath,
    getAllGroupDetails,
  };

  useGridApiMethod(apiRef, columnGroupingApi, 'public');

  const handleColumnIndexChange = React.useCallback<GridEventListener<'columnIndexChange'>>(() => {
      throw new Error("STUB");
  }, [apiRef, props.columnGroupingModel]);

  const updateColumnGroupingState = React.useCallback(
    (columnGroupingModel: GridColumnGroupingModel | undefined) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  useGridEvent(apiRef, 'columnIndexChange', handleColumnIndexChange);
  useGridEvent(apiRef, 'columnsChange', () => {
      throw new Error("STUB");
  });
  useGridEvent(apiRef, 'columnVisibilityModelChange', () => {
      throw new Error("STUB");
  });

  /**
   * EFFECTS
   */
  React.useEffect(() => {
      throw new Error("STUB");
  }, [apiRef, updateColumnGroupingState, props.columnGroupingModel]);
};
