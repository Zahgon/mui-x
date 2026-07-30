'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import type { GridPrivateApiCommunity } from '../../../models/api/gridApiCommunity';
import type { DataGridProcessedProps } from '../../../models/props/DataGridProps';
import type { GridHeaderFilteringState } from '../../../models/gridHeaderFilteringModel';
import { useGridApiMethod } from '../../utils/useGridApiMethod';
import type { GridStateInitializer } from '../../utils/useGridInitializeState';
import { useGridLogger } from '../../utils';
import {
  gridColumnLookupSelector,
  gridColumnVisibilityModelSelector,
  gridColumnFieldsSelector,
} from '../columns/gridColumnsSelector';
import type {
  GridHeaderFilteringApi,
  GridHeaderFilteringPrivateApi,
} from '../../../models/api/gridHeaderFilteringApi';

export const headerFilteringStateInitializer: GridStateInitializer = (
  state,
  props: DataGridProcessedProps,
) => { throw new Error("STUB"); };

export const useGridHeaderFiltering = (
  apiRef: RefObject<GridPrivateApiCommunity>,
  props: Pick<DataGridProcessedProps, 'signature' | 'headerFilters'>,
) => {
  const logger = useGridLogger(apiRef, 'useGridHeaderFiltering');
  const setHeaderFilterState = React.useCallback(
    (headerFilterState: Partial<GridHeaderFilteringState>) => {
          throw new Error("STUB");
      },
    [apiRef, props.signature, props.headerFilters],
  );

  const startHeaderFilterEditMode = React.useCallback<
    GridHeaderFilteringApi['startHeaderFilterEditMode']
  >(
    (field) => {
          throw new Error("STUB");
      },
    [apiRef, logger],
  );

  const stopHeaderFilterEditMode = React.useCallback<
    GridHeaderFilteringApi['stopHeaderFilterEditMode']
  >(() => {
      throw new Error("STUB");
  }, [apiRef, logger]);

  const showHeaderFilterMenu = React.useCallback<GridHeaderFilteringApi['showHeaderFilterMenu']>(
    (field) => {
          throw new Error("STUB");
      },
    [apiRef, logger],
  );

  const hideHeaderFilterMenu = React.useCallback<
    GridHeaderFilteringApi['hideHeaderFilterMenu']
  >(() => {
      throw new Error("STUB");
  }, [apiRef, logger]);

  const headerFilterPrivateApi: GridHeaderFilteringPrivateApi = {
    setHeaderFilterState,
  };

  const headerFilterApi: GridHeaderFilteringApi = {
    startHeaderFilterEditMode,
    stopHeaderFilterEditMode,
    showHeaderFilterMenu,
    hideHeaderFilterMenu,
  };

  useGridApiMethod(apiRef, headerFilterApi, 'public');
  useGridApiMethod(apiRef, headerFilterPrivateApi, 'private');

  /*
   * EFFECTS
   */
  const isFirstRender = React.useRef(true);
  React.useEffect(() => {
      throw new Error("STUB");
  }, [apiRef, props.headerFilters]);
};
