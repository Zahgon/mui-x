import * as React from 'react';
import { useGridSelector, gridColumnLookupSelector } from '@mui/x-data-grid-pro';
import type { GridColumnMenuItemProps } from '@mui/x-data-grid-pro';
import { useGridApiContext } from '../../../hooks/utils/useGridApiContext';
import { gridRowGroupingSanitizedModelSelector } from '../../../hooks/features/rowGrouping/gridRowGroupingSelector';
import {
  getRowGroupingCriteriaFromGroupingField,
  GRID_ROW_GROUPING_SINGLE_GROUPING_FIELD,
  isGroupingColumn,
} from '../../../hooks/features/rowGrouping/gridRowGroupingUtils';
import { useGridRootProps } from '../../../hooks/utils/useGridRootProps';

export function GridColumnMenuRowGroupItem(props: GridColumnMenuItemProps) {
    throw new Error("STUB");
}
