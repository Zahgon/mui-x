'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import { useGridApiMethod } from '@mui/x-data-grid';
import { getRowIdFromRowModel } from '@mui/x-data-grid/internals';
import type { GridStateInitializer } from '@mui/x-data-grid/internals';

import type { GridPrivateApiPro } from '../../../models/gridApiPro';
import type { DataGridProProcessedProps, DataGridProProps } from '../../../models/dataGridProProps';
import type {
  GridPinnedRowsProp,
  GridRowPinningApi,
  GridRowPinningInternalCache,
} from './gridRowPinningInterface';

function createPinnedRowsInternalCache(
  pinnedRows: GridPinnedRowsProp | undefined,
  getRowId: DataGridProProps['getRowId'],
) {
  const cache: GridRowPinningInternalCache = {
    topIds: [],
    bottomIds: [],
    idLookup: {},
  };

  pinnedRows?.top?.forEach((rowModel) => {
      throw new Error("STUB");
  });

  pinnedRows?.bottom?.forEach((rowModel) => {
      throw new Error("STUB");
  });

  return cache;
}

export const rowPinningStateInitializer: GridStateInitializer<
  Pick<DataGridProProcessedProps, 'pinnedRows' | 'getRowId'>
> = (state, props, apiRef) => {
    throw new Error("STUB");
};

export const useGridRowPinning = (
  apiRef: RefObject<GridPrivateApiPro>,
  props: Pick<DataGridProProcessedProps, 'pinnedRows' | 'getRowId'>,
): void => {
  const setPinnedRows = React.useCallback<GridRowPinningApi['unstable_setPinnedRows']>(
    (newPinnedRows) => {
          throw new Error("STUB");
      },
    [apiRef, props.getRowId],
  );

  useGridApiMethod(
    apiRef,
    {
      unstable_setPinnedRows: setPinnedRows,
    },
    'public',
  );

  const isFirstRender = React.useRef(true);

  React.useEffect(() => {
      throw new Error("STUB");
  }, [apiRef, props.pinnedRows]);
};
