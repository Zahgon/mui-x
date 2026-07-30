import { gridNumberComparator } from '../hooks/features/sorting/gridSortingUtils';
import { isNumber } from '../utils/utils';
import { getGridNumericOperators, getGridNumericQuickFilterFn } from './gridNumericOperators';
import { GRID_STRING_COL_DEF } from './gridStringColDef';
import type { GridColTypeDef } from '../models/colDef/gridColDef';

export const GRID_NUMERIC_COL_DEF: GridColTypeDef<number | string | null, string> = {
  ...GRID_STRING_COL_DEF,
  type: 'number',
  align: 'right',
  headerAlign: 'right',
  sortComparator: gridNumberComparator,
  valueParser: (value) => { throw new Error("STUB"); },
  valueFormatter: (value?: number) => { throw new Error("STUB"); },
  filterOperators: getGridNumericOperators(),
  getApplyQuickFilterFn: getGridNumericQuickFilterFn,
};
