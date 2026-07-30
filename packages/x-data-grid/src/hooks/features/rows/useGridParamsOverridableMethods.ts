import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import { getRowValue as getRowValueFn } from './gridRowsUtils';
import type { GridPrivateApiCommunity } from '../../../models/api/gridApiCommunity';
import type { GridParamsApi } from '../../../models/api/gridParamsApi';

export const useGridParamsOverridableMethods = (apiRef: RefObject<GridPrivateApiCommunity>) => {
  const getCellValue = React.useCallback<GridParamsApi['getCellValue']>(
    (id, field) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const getRowValue = React.useCallback<GridParamsApi['getRowValue']>(
    (row, colDef) => { throw new Error("STUB"); },
    [apiRef],
  );

  const getRowFormattedValue = React.useCallback<GridParamsApi['getRowFormattedValue']>(
    (row, colDef) => {
          throw new Error("STUB");
      },
    [apiRef, getRowValue],
  );

  return {
    getCellValue,
    getRowValue,
    getRowFormattedValue,
  };
};
