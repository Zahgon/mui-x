import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import type { GridRowId, GridGroupNode } from '../../../models/gridRows';
import { gridRowTreeSelector, gridRowNodeSelector } from './gridRowsSelector';
import { gridExpandedSortedRowIndexLookupSelector } from '../filter/gridFilterSelector';
import { GRID_ROOT_GROUP_ID } from './gridRowsUtils';
import type { GridPrivateApiCommunity } from '../../../models/api/gridApiCommunity';
import type { GridRowProApi } from '../../../models/api/gridRowApi';

export const useGridRowsOverridableMethods = (apiRef: RefObject<GridPrivateApiCommunity>) => {
  const setRowPosition = React.useCallback<GridRowProApi['setRowPosition']>(
    (sourceRowId, targetRowId, position) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const setRowIndex = React.useCallback(
    (rowId: GridRowId, targetIndex: number) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  return {
    setRowIndex,
    setRowPosition,
  };
};
