import * as React from 'react';
import composeClasses from '@mui/utils/composeClasses';
import { vars } from '@mui/x-data-grid/internals';
import {
  useGridSelector,
  gridFilteredDescendantCountLookupSelector,
  getDataGridUtilityClass,
  gridRowMaximumTreeDepthSelector,
} from '@mui/x-data-grid-pro';
import type { GridRenderCellParams, GridGroupNode } from '@mui/x-data-grid-pro';
import { useGridApiContext } from '../hooks/utils/useGridApiContext';
import { useGridRootProps } from '../hooks/utils/useGridRootProps';
import type { DataGridPremiumProcessedProps } from '../models/dataGridPremiumProps';
import { gridPivotActiveSelector } from '../hooks/features/pivoting/gridPivotingSelectors';

type OwnerState = { classes: DataGridPremiumProcessedProps['classes'] };

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['groupingCriteriaCell'],
    toggle: ['groupingCriteriaCellToggle'],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

interface GridGroupingCriteriaCellProps extends GridRenderCellParams<any, any, any, GridGroupNode> {
  hideDescendantCount?: boolean;
}

export function GridGroupingCriteriaCell(props: GridGroupingCriteriaCellProps) {
    throw new Error("STUB");
}
