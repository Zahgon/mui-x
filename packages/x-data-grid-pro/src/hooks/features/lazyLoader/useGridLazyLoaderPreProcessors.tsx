import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import { useGridRegisterPipeProcessor } from '@mui/x-data-grid/internals';
import type { GridPipeProcessor } from '@mui/x-data-grid/internals';
import { GRID_ROOT_GROUP_ID } from '@mui/x-data-grid';
import type { GridGroupNode, GridSkeletonRowNode } from '@mui/x-data-grid';
import type { GridPrivateApiPro } from '../../../models/gridApiPro';
import type { DataGridProProcessedProps } from '../../../models/dataGridProProps';

export const GRID_SKELETON_ROW_ROOT_ID = 'auto-generated-skeleton-row-root';

const getSkeletonRowId = (index: number) => `${GRID_SKELETON_ROW_ROOT_ID}-${index}`;

export const useGridLazyLoaderPreProcessors = (
  privateApiRef: RefObject<GridPrivateApiPro>,
  props: Pick<DataGridProProcessedProps, 'rowCount' | 'rowsLoadingMode'>,
) => {
  const addSkeletonRows = React.useCallback<GridPipeProcessor<'hydrateRows'>>(
    (groupingParams) => {
          throw new Error("STUB");
      },
    [props.rowCount, props.rowsLoadingMode],
  );

  useGridRegisterPipeProcessor(privateApiRef, 'hydrateRows', addSkeletonRows);
};
