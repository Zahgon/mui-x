import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import composeClasses from '@mui/utils/composeClasses';
import {
  useGridPrivateApiContext,
  gridDataSourceErrorSelector,
  gridDataSourceLoadingIdSelector,
  gridRowSelector,
  vars,
  gridPivotActiveSelector,
} from '@mui/x-data-grid-pro/internals';
import { useGridSelector, getDataGridUtilityClass } from '@mui/x-data-grid-pro';
import type { GridRenderCellParams, GridGroupNode } from '@mui/x-data-grid-pro';
import { useGridApiContext } from '../hooks/utils/useGridApiContext';
import { useGridRootProps } from '../hooks/utils/useGridRootProps';
import type { DataGridPremiumProcessedProps } from '../models/dataGridPremiumProps';
import type { GridPrivateApiPremium } from '../models/gridApiPremium';
import { gridRowGroupingModelSelector } from '../hooks/features/rowGrouping/gridRowGroupingSelector';

type OwnerState = DataGridPremiumProcessedProps;

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['groupingCriteriaCell'],
    toggle: ['groupingCriteriaCellToggle'],
    loadingContainer: ['groupingCriteriaCellLoadingContainer'],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

interface GridGroupingCriteriaCellProps extends GridRenderCellParams<any, any, any, GridGroupNode> {
  hideDescendantCount?: boolean;
}

interface GridGroupingCriteriaCellIconProps extends Pick<
  GridGroupingCriteriaCellProps,
  'id' | 'field' | 'rowNode' | 'row'
> {
  descendantCount: number;
}

function GridGroupingCriteriaCellIcon(props: GridGroupingCriteriaCellIconProps) {
    throw new Error("STUB");
}

export function GridDataSourceGroupingCriteriaCell(props: GridGroupingCriteriaCellProps) {
    throw new Error("STUB");
}
