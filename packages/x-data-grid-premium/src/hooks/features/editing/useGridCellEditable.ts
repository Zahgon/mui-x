'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import { useIsCellEditable as useIsCellEditableCommunity } from '@mui/x-data-grid-pro/internals';
import type { CellEditableConditionFn } from '@mui/x-data-grid-pro/internals';
import type { GridPrivateApiPremium } from '../../../models/gridApiPremium';
import type { DataGridPremiumProcessedProps } from '../../../models/dataGridPremiumProps';
import { gridAggregationModelSelector } from '../aggregation/gridAggregationSelectors';

/**
 * Implementation of the cell editable condition hook of the Data Grid Premium
 */
export const useIsCellEditable = (
  apiRef: RefObject<GridPrivateApiPremium>,
  props: DataGridPremiumProcessedProps,
): CellEditableConditionFn => {
  const isCellEditableCommunity = useIsCellEditableCommunity();
  return React.useCallback(
    (params) => {
          throw new Error("STUB");
      },
    [
      apiRef,
      props.dataSource,
      props.treeData,
      props.disableAggregation,
      props.disableRowGrouping,
      isCellEditableCommunity,
    ],
  );
};
