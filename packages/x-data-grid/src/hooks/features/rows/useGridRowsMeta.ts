import type { RefObject } from '@mui/x-internals/types';
import type { GridPrivateApiCommunity } from '../../../models/api/gridApiCommunity';
import type { GridRowsMetaApi, GridRowsMetaPrivateApi } from '../../../models/api/gridRowsMetaApi';
import type { DataGridProcessedProps } from '../../../models/props/DataGridProps';
import { useGridApiMethod } from '../../utils/useGridApiMethod';
import { gridPaginationSelector } from '../pagination/gridPaginationSelector';
import type { GridStateInitializer } from '../../utils/useGridInitializeState';
import { useGridRegisterPipeApplier } from '../../core/pipeProcessing';
import { gridRowCountSelector } from './gridRowsSelector';
import { gridRowHeightSelector } from '../dimensions/gridDimensionsSelectors';

export const rowsMetaStateInitializer: GridStateInitializer = (state, props, apiRef) => {
    throw new Error("STUB");
};

/**
 * @requires useGridPageSize (method)
 * @requires useGridPage (method)
 */
export const useGridRowsMeta = (
  apiRef: RefObject<GridPrivateApiCommunity>,
  _props: Pick<
    DataGridProcessedProps,
    | 'getRowHeight'
    | 'getEstimatedRowHeight'
    | 'getRowSpacing'
    | 'pagination'
    | 'paginationMode'
    | 'rowHeight'
  >,
): void => {
  const virtualizer = apiRef.current.virtualizer;

  const {
    getRowHeight,
    setLastMeasuredRowIndex,
    storeRowHeightMeasurement,
    resetRowHeights,
    hydrateRowsMeta,
    observeRowHeight,
    rowHasAutoHeight,
    getRowHeightEntry,
    getLastMeasuredRowIndex,
  } = virtualizer.api.rowsMeta;

  useGridRegisterPipeApplier(apiRef, 'rowHeight', hydrateRowsMeta);

  const rowsMetaApi: GridRowsMetaApi = {
    unstable_getRowHeight: getRowHeight,
    unstable_setLastMeasuredRowIndex: setLastMeasuredRowIndex,
    unstable_storeRowHeightMeasurement: storeRowHeightMeasurement,
    resetRowHeights,
  };

  const rowsMetaPrivateApi: GridRowsMetaPrivateApi = {
    hydrateRowsMeta,
    observeRowHeight,
    rowHasAutoHeight,
    getRowHeightEntry,
    getLastMeasuredRowIndex,
  };

  useGridApiMethod(apiRef, rowsMetaApi, 'public');
  useGridApiMethod(apiRef, rowsMetaPrivateApi, 'private');
};
