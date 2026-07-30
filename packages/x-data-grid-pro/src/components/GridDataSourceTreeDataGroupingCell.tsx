import * as React from 'react';
import composeClasses from '@mui/utils/composeClasses';
import { getDataGridUtilityClass, useGridSelector } from '@mui/x-data-grid';
import type { GridRenderCellParams, GridDataSourceGroupNode } from '@mui/x-data-grid';
import { vars, gridRowSelector } from '@mui/x-data-grid/internals';
import { useGridRootProps } from '../hooks/utils/useGridRootProps';
import { useGridPrivateApiContext } from '../hooks/utils/useGridPrivateApiContext';
import type { DataGridProProcessedProps } from '../models/dataGridProProps';
import {
  gridDataSourceErrorSelector,
  gridDataSourceLoadingIdSelector,
} from '../hooks/features/dataSource/gridDataSourceSelector';

type OwnerState = DataGridProProcessedProps;

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['treeDataGroupingCell'],
    toggle: ['treeDataGroupingCellToggle'],
    loadingContainer: ['treeDataGroupingCellLoadingContainer'],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

interface GridTreeDataGroupingCellProps extends GridRenderCellParams<
  any,
  any,
  any,
  GridDataSourceGroupNode
> {
  hideDescendantCount?: boolean;
  /**
   * The cell offset multiplier used for calculating cell offset (`rowNode.depth * offsetMultiplier` px).
   * @default 2
   */
  offsetMultiplier?: number;
}

interface GridTreeDataGroupingCellIconProps extends Pick<
  GridTreeDataGroupingCellProps,
  'id' | 'field' | 'rowNode' | 'row'
> {
  descendantCount: number;
}

function GridTreeDataGroupingCellIcon(props: GridTreeDataGroupingCellIconProps) {
    throw new Error("STUB");
}

export function GridDataSourceTreeDataGroupingCell(props: GridTreeDataGroupingCellProps) {
    throw new Error("STUB");
}
