import type { RefObject } from '@mui/x-internals/types';
import type { GridPrivateApiCommunity } from '../../../models/api/gridApiCommunity';
import type { DataGridProcessedProps } from '../../../models/props/DataGridProps';
import type { GridStateInitializer } from '../../utils/useGridInitializeState';
import {
  throwIfPageSizeExceedsTheLimit,
  getDefaultGridPaginationModel,
} from './gridPaginationUtils';
import { useGridPaginationModel } from './useGridPaginationModel';
import { useGridRowCount } from './useGridRowCount';
import { useGridPaginationMeta } from './useGridPaginationMeta';

export const paginationStateInitializer: GridStateInitializer<
  Pick<
    DataGridProcessedProps,
    | 'paginationModel'
    | 'rowCount'
    | 'initialState'
    | 'autoPageSize'
    | 'signature'
    | 'paginationMeta'
    | 'pagination'
    | 'paginationMode'
  >
> = (state, props) => {
    throw new Error("STUB");
};

/**
 * @requires useGridFilter (state)
 * @requires useGridDimensions (event) - can be after
 */
export const useGridPagination = (
  apiRef: RefObject<GridPrivateApiCommunity>,
  props: DataGridProcessedProps,
) => {
  useGridPaginationMeta(apiRef, props);
  useGridPaginationModel(apiRef, props);
  useGridRowCount(apiRef, props);
};
