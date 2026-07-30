'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import {
  useGridRegisterPipeProcessor,
  gridExistingPinnedColumnSelector,
} from '@mui/x-data-grid/internals';
import type { GridPipeProcessor } from '@mui/x-data-grid/internals';
import type { DataGridProProcessedProps } from '../../../models/dataGridProProps';
import type { GridPrivateApiPro } from '../../../models/gridApiPro';

export const useGridColumnPinningPreProcessors = (
  apiRef: RefObject<GridPrivateApiPro>,
  props: DataGridProProcessedProps,
) => {
  const { disableColumnPinning } = props;

  const prevAllPinnedColumns = React.useRef<string[]>([]);

  const reorderPinnedColumns = React.useCallback<GridPipeProcessor<'hydrateColumns'>>(
    (columnsState) => {
          throw new Error("STUB");
      },
    [apiRef, disableColumnPinning],
  );

  useGridRegisterPipeProcessor(apiRef, 'hydrateColumns', reorderPinnedColumns);

  const isColumnPinned = React.useCallback<GridPipeProcessor<'isColumnPinned'>>(
    (initialValue, field) => { throw new Error("STUB"); },
    [apiRef],
  );
  useGridRegisterPipeProcessor(apiRef, 'isColumnPinned', isColumnPinned);
};
