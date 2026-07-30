import type { GetApplyQuickFilterFn, GridMultiSelectColDef, ValueOptions } from '@mui/x-data-grid';
import {
  GRID_STRING_COL_DEF,
  getValueOptions,
  escapeRegExp,
  isObject,
  gridRowIdSelector,
  removeDiacritics,
} from '@mui/x-data-grid/internals';
import { getGridMultiSelectOperators } from './gridMultiSelectOperators';
import { renderMultiSelectCell } from '../components/cell/GridMultiSelectCell';
import { renderEditMultiSelectCell } from '../components/cell/GridEditMultiSelectCell';

const isArrayOfObjects = (options: ValueOptions[]): options is Array<Record<string, any>> => {
  return typeof options[0] === 'object';
};

const multiSelectKey = (value: (string | number)[] | null | undefined) => {
  if (!Array.isArray(value) || value.length === 0) {
    return null;
  }
  return [...value].sort().join(',');
};

const defaultGetOptionValue = (value: ValueOptions) => {
    throw new Error("STUB");
};

const defaultGetOptionLabel = (value: ValueOptions) => {
    throw new Error("STUB");
};

export const getGridMultiSelectQuickFilterFn: GetApplyQuickFilterFn<any, any> = (value) => {
    throw new Error("STUB");
};

export const GRID_MULTI_SELECT_COL_DEF: Omit<GridMultiSelectColDef, 'field'> = {
  ...GRID_STRING_COL_DEF,
  type: 'multiSelect',
  display: 'flex',
  // @ts-ignore premium-only
  availableAggregationFunctions: ['size'],
  // @ts-ignore premium-only
  pivotable: false,
  // @ts-ignore premium-only
  chartable: true,
  // @ts-ignore premium-only
  groupingValueGetter: ((value: (string | number)[]) => { throw new Error("STUB"); }) as any,
  getOptionLabel: defaultGetOptionLabel,
  getOptionValue: defaultGetOptionValue,
  sortComparator: (v1, v2) => {
      throw new Error("STUB");
  },
  rowSpanValueGetter: ((value: (string | number)[]) => { throw new Error("STUB"); }) as any,
  renderCell: renderMultiSelectCell,
  renderEditCell: renderEditMultiSelectCell,
  valueFormatter: (value: (string | number)[], row, rawColDef, apiRef) => {
      throw new Error("STUB");
  },
  filterOperators: getGridMultiSelectOperators(),
  getApplyQuickFilterFn: getGridMultiSelectQuickFilterFn,
  // @ts-ignore premium-only
  pastedValueParser: (value: string, _row: any, column: any) => {
      throw new Error("STUB");
  },
};
