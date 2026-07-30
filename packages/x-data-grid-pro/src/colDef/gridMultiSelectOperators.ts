import type { GridFilterOperator } from '@mui/x-data-grid';
import { isObject } from '@mui/x-data-grid/internals';
import { GridFilterInputMultipleMultiSelect } from '../components/panel/filterPanel/GridFilterInputMultipleMultiSelect';

const parseObjectValue = (value: unknown) => {
  if (value == null || !isObject<{ value: unknown }>(value)) {
    return value;
  }
  return value.value;
};

/**
 * Returns filter operators for the `multiSelect` column type.
 * Operators: contains, doesNotContain, isEmpty, isNotEmpty
 */
export const getGridMultiSelectOperators = (): GridFilterOperator[] => [
  {
    value: 'contains',
    getApplyFilterFn: (filterItem) => {
        throw new Error("STUB");
    },
    InputComponent: GridFilterInputMultipleMultiSelect,
  },
  {
    value: 'doesNotContain',
    getApplyFilterFn: (filterItem) => {
        throw new Error("STUB");
    },
    InputComponent: GridFilterInputMultipleMultiSelect,
  },
  {
    value: 'isEmpty',
    getApplyFilterFn: () => {
        throw new Error("STUB");
    },
    requiresFilterValue: false,
  },
  {
    value: 'isNotEmpty',
    getApplyFilterFn: () => {
        throw new Error("STUB");
    },
    requiresFilterValue: false,
  },
];
