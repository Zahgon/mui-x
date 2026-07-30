import { GridFilterInputValue } from '../components/panel/filterPanel/GridFilterInputValue';
import { GridFilterInputMultipleValue } from '../components/panel/filterPanel/GridFilterInputMultipleValue';
import type { GridFilterOperator } from '../models/gridFilterOperator';
import type { GridFilterInputValueProps } from '../models/gridFilterInputComponent';
import type { GetApplyQuickFilterFn } from '../models/colDef/gridColDef';

const parseNumericValue = (value: unknown) => {
  if (value == null) {
    return null;
  }

  return Number(value);
};

export const getGridNumericQuickFilterFn: GetApplyQuickFilterFn<any, number | string | null> = (
  value,
) => {
    throw new Error("STUB");
};

export const getGridNumericOperators = (): GridFilterOperator<
  any,
  number | string | null,
  any,
  GridFilterInputValueProps & { type?: 'number' }
>[] => [
  {
    value: '=',
    getApplyFilterFn: (filterItem) => {
        throw new Error("STUB");
    },
    InputComponent: GridFilterInputValue,
    InputComponentProps: { type: 'number' },
  },
  {
    value: '!=',
    getApplyFilterFn: (filterItem) => {
        throw new Error("STUB");
    },
    InputComponent: GridFilterInputValue,
    InputComponentProps: { type: 'number' },
  },
  {
    value: '>',
    getApplyFilterFn: (filterItem) => {
        throw new Error("STUB");
    },
    InputComponent: GridFilterInputValue,
    InputComponentProps: { type: 'number' },
  },
  {
    value: '>=',
    getApplyFilterFn: (filterItem) => {
        throw new Error("STUB");
    },
    InputComponent: GridFilterInputValue,
    InputComponentProps: { type: 'number' },
  },
  {
    value: '<',
    getApplyFilterFn: (filterItem) => {
        throw new Error("STUB");
    },
    InputComponent: GridFilterInputValue,
    InputComponentProps: { type: 'number' },
  },
  {
    value: '<=',
    getApplyFilterFn: (filterItem) => {
        throw new Error("STUB");
    },
    InputComponent: GridFilterInputValue,
    InputComponentProps: { type: 'number' },
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
  {
    value: 'isAnyOf',
    getApplyFilterFn: (filterItem) => {
        throw new Error("STUB");
    },
    InputComponent: GridFilterInputMultipleValue,
    InputComponentProps: { type: 'number' },
  },
];
