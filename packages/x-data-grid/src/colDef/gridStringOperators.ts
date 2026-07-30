import { GridFilterInputValue } from '../components/panel/filterPanel/GridFilterInputValue';
import { escapeRegExp } from '../utils/utils';
import type { GetApplyQuickFilterFn } from '../models/colDef/gridColDef';
import type { GridFilterItem } from '../models/gridFilterItem';
import type { GridFilterOperator } from '../models/gridFilterOperator';
import { GridFilterInputMultipleValue } from '../components/panel/filterPanel/GridFilterInputMultipleValue';
import { removeDiacritics } from '../hooks/features/filter/gridFilterUtils';

export const getGridStringQuickFilterFn: GetApplyQuickFilterFn<any, unknown> = (value) => {
    throw new Error("STUB");
};

const createContainsFilterFn =
  (disableTrim: boolean, negate: boolean) => (filterItem: GridFilterItem) => {
      throw new Error("STUB");
  };

const createEqualityFilterFn =
  (disableTrim: boolean, negate: boolean) => (filterItem: GridFilterItem) => {
      throw new Error("STUB");
  };

const createEmptyFilterFn = (negate: boolean) => () => {
    throw new Error("STUB");
};

export const getGridStringOperators = (
  disableTrim: boolean = false,
): GridFilterOperator<any, number | string | null, any>[] => [
  {
    value: 'contains',
    getApplyFilterFn: createContainsFilterFn(disableTrim, false),
    InputComponent: GridFilterInputValue,
  },
  {
    value: 'doesNotContain',
    getApplyFilterFn: createContainsFilterFn(disableTrim, true),
    InputComponent: GridFilterInputValue,
  },
  {
    value: 'equals',
    getApplyFilterFn: createEqualityFilterFn(disableTrim, false),
    InputComponent: GridFilterInputValue,
  },
  {
    value: 'doesNotEqual',
    getApplyFilterFn: createEqualityFilterFn(disableTrim, true),
    InputComponent: GridFilterInputValue,
  },
  {
    value: 'startsWith',
    getApplyFilterFn: (filterItem: GridFilterItem) => {
        throw new Error("STUB");
    },
    InputComponent: GridFilterInputValue,
  },
  {
    value: 'endsWith',
    getApplyFilterFn: (filterItem: GridFilterItem) => {
        throw new Error("STUB");
    },
    InputComponent: GridFilterInputValue,
  },
  {
    value: 'isEmpty',
    getApplyFilterFn: createEmptyFilterFn(false),
    requiresFilterValue: false,
  },
  {
    value: 'isNotEmpty',
    getApplyFilterFn: createEmptyFilterFn(true),
    requiresFilterValue: false,
  },
  {
    value: 'isAnyOf',
    getApplyFilterFn: (filterItem: GridFilterItem) => {
        throw new Error("STUB");
    },
    InputComponent: GridFilterInputMultipleValue,
  },
];
