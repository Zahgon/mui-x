'use client';
import * as React from 'react';
import debounce from '@mui/utils/debounce';
import type { RefObject } from '@mui/x-internals/types';
import { isDeepEqual } from '@mui/x-internals/isDeepEqual';
import type { GridPrivateApiCommunity } from '../../../models/api/gridApiCommunity';
import type { DataGridProcessedProps } from '../../../models/props/DataGridProps';
import type { GridPaginationModelApi, GridPaginationState } from './gridPaginationInterfaces';
import type { GridEventListener } from '../../../models/events';
import type { GridPaginationModel } from '../../../models/gridPaginationProps';
import type { GridFilterModel } from '../../../models/gridFilterModel';
import {
  gridFilterModelSelector,
  gridFilterActiveItemsSelector,
} from '../filter/gridFilterSelector';
import { gridDensityFactorSelector } from '../density';
import { useGridLogger, useGridSelector, useGridApiMethod, useGridEvent } from '../../utils';
import { useGridRegisterPipeProcessor } from '../../core/pipeProcessing';
import type { GridPipeProcessor } from '../../core/pipeProcessing';
import { gridPageCountSelector, gridPaginationModelSelector } from './gridPaginationSelector';
import {
  getPageCount,
  defaultPageSize,
  throwIfPageSizeExceedsTheLimit,
  getDefaultGridPaginationModel,
  getValidPage,
} from './gridPaginationUtils';

export const getDerivedPaginationModel = (
  paginationState: GridPaginationState,
  signature: DataGridProcessedProps['signature'],
  paginationModelProp?: GridPaginationModel,
) => {
  let paginationModel = paginationState.paginationModel;
  const rowCount = paginationState.rowCount;
  const pageSize = paginationModelProp?.pageSize ?? paginationModel.pageSize;
  const page = paginationModelProp?.page ?? paginationModel.page;
  const pageCount = getPageCount(rowCount, pageSize, page);

  if (
    paginationModelProp &&
    (paginationModelProp?.page !== paginationModel.page ||
      paginationModelProp?.pageSize !== paginationModel.pageSize)
  ) {
    paginationModel = paginationModelProp;
  }

  const validPage = pageSize === -1 ? 0 : getValidPage(paginationModel.page, pageCount);
  if (validPage !== paginationModel.page) {
    paginationModel = { ...paginationModel, page: validPage };
  }

  throwIfPageSizeExceedsTheLimit(paginationModel.pageSize, signature);

  return paginationModel;
};

/**
 * @requires useGridFilter (state)
 * @requires useGridDimensions (event) - can be after
 */
export const useGridPaginationModel = (
  apiRef: RefObject<GridPrivateApiCommunity>,
  props: Pick<
    DataGridProcessedProps,
    | 'paginationModel'
    | 'onPaginationModelChange'
    | 'autoPageSize'
    | 'initialState'
    | 'paginationMode'
    | 'pagination'
    | 'signature'
    | 'rowHeight'
  >,
) => {
  const logger = useGridLogger(apiRef, 'useGridPaginationModel');
  const densityFactor = useGridSelector(apiRef, gridDensityFactorSelector);
  const previousFilterModel = React.useRef<GridFilterModel>(gridFilterModelSelector(apiRef));

  const rowHeight = Math.floor(props.rowHeight * densityFactor);
  apiRef.current.registerControlState({
    stateId: 'paginationModel',
    propModel: props.paginationModel,
    propOnChange: props.onPaginationModelChange,
    stateSelector: gridPaginationModelSelector,
    changeEvent: 'paginationModelChange',
  });

  /**
   * API METHODS
   */
  const setPage = React.useCallback<GridPaginationModelApi['setPage']>(
    (page) => {
          throw new Error("STUB");
      },
    [apiRef, logger],
  );

  const debouncedSetPage = React.useMemo(() => { throw new Error("STUB"); }, [setPage]);

  const setPageSize = React.useCallback<GridPaginationModelApi['setPageSize']>(
    (pageSize) => {
          throw new Error("STUB");
      },
    [apiRef, logger],
  );

  const setPaginationModel = React.useCallback<GridPaginationModelApi['setPaginationModel']>(
    (paginationModel) => {
          throw new Error("STUB");
      },
    [apiRef, logger, props.signature],
  );

  const paginationModelApi: GridPaginationModelApi = {
    setPage,
    setPageSize,
    setPaginationModel,
  };

  useGridApiMethod(apiRef, paginationModelApi, 'public');

  /**
   * PRE-PROCESSING
   */
  const stateExportPreProcessing = React.useCallback<GridPipeProcessor<'exportState'>>(
    (prevState, context) => {
          throw new Error("STUB");
      },
    [
      apiRef,
      props.paginationModel,
      props.initialState?.pagination?.paginationModel,
      props.autoPageSize,
    ],
  );

  const stateRestorePreProcessing = React.useCallback<GridPipeProcessor<'restoreState'>>(
    (params, context) => {
          throw new Error("STUB");
      },
    [apiRef, props.autoPageSize, props.signature],
  );

  useGridRegisterPipeProcessor(apiRef, 'exportState', stateExportPreProcessing);
  useGridRegisterPipeProcessor(apiRef, 'restoreState', stateRestorePreProcessing);

  /**
   * EVENTS
   */
  const handlePaginationModelChange: GridEventListener<'paginationModelChange'> = () => {
      throw new Error("STUB");
  };

  const handleUpdateAutoPageSize = React.useCallback(() => {
      throw new Error("STUB");
  }, [apiRef, props.autoPageSize, rowHeight]);

  const handleRowCountChange = React.useCallback(
    (newRowCount: GridPaginationState['rowCount']) => {
          throw new Error("STUB");
      },
    [apiRef, debouncedSetPage],
  );

  /**
   * Goes to the first row of the grid
   */
  const navigateToStart = React.useCallback(() => {
      throw new Error("STUB");
  }, [apiRef, debouncedSetPage]);

  const debouncedNavigateToStart = React.useMemo(
    () => { throw new Error("STUB"); },
    [navigateToStart],
  );

  /**
   * Resets the page only if the active items or quick filter has changed from the last time.
   * This is to avoid resetting the page when the filter model is changed
   * because of and update of the operator from an item that does not have the value
   * or reseting when the filter panel is just opened
   */
  const handleFilterModelChange = React.useCallback<GridEventListener<'filterModelChange'>>(
    (filterModel) => {
          throw new Error("STUB");
      },
    [apiRef, debouncedNavigateToStart],
  );

  useGridEvent(apiRef, 'viewportInnerSizeChange', handleUpdateAutoPageSize);
  useGridEvent(apiRef, 'paginationModelChange', handlePaginationModelChange);
  useGridEvent(apiRef, 'rowCountChange', handleRowCountChange);
  useGridEvent(apiRef, 'sortModelChange', debouncedNavigateToStart);
  useGridEvent(apiRef, 'filterModelChange', handleFilterModelChange);

  /**
   * EFFECTS
   */
  const isFirstRender = React.useRef(true);
  React.useEffect(() => {
      throw new Error("STUB");
  }, [apiRef, props.paginationModel, props.signature, props.pagination]);

  React.useEffect(() => {
      throw new Error("STUB");
  }, [apiRef, props.paginationMode, props.pagination]);

  React.useEffect(handleUpdateAutoPageSize, [handleUpdateAutoPageSize]);
};
