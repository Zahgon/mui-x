import * as React from 'react';
import { gridRowIdSelector } from '@mui/x-data-grid-pro';
import type { GridParamsApi } from '@mui/x-data-grid-pro';
import { useGridParamsOverridableMethods as useGridParamsOverridableMethodsCommunity } from '@mui/x-data-grid-pro/internals';
import type { RefObject } from '@mui/x-internals/types';
import { gridCellAggregationResultSelector } from '../aggregation/gridAggregationSelectors';
import type { GridPrivateApiPremium } from '../../../models/gridApiPremium';

export const useGridParamsOverridableMethods = (apiRef: RefObject<GridPrivateApiPremium>) => {
  const communityMethods = useGridParamsOverridableMethodsCommunity(apiRef);

  const getCellValue = React.useCallback<GridParamsApi['getCellValue']>(
    (id, field) =>
      { throw new Error("STUB"); },
    [apiRef, communityMethods],
  );

  const getRowValue = React.useCallback<GridParamsApi['getRowValue']>(
    (row, colDef) =>
      { throw new Error("STUB"); },
    [apiRef, communityMethods],
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
