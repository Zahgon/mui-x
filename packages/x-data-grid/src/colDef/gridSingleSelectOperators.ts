import { GridFilterInputSingleSelect } from '../components/panel/filterPanel/GridFilterInputSingleSelect';
import type { GridFilterOperator } from '../models/gridFilterOperator';
import { GridFilterInputMultipleSingleSelect } from '../components/panel/filterPanel/GridFilterInputMultipleSingleSelect';
import { isObject } from '../utils/utils';

const parseObjectValue = (value: unknown) => {
  if (value == null || !isObject<{ value: unknown }>(value)) {
    return value;
  }
  return value.value;
};

export const getGridSingleSelectOperators = (): GridFilterOperator[] => [
  {
    value: 'is',
    getApplyFilterFn: (filterItem) => {
        throw new Error("STUB");
    },
    InputComponent: GridFilterInputSingleSelect,
  },
  {
    value: 'not',
    getApplyFilterFn: (filterItem) => {
        throw new Error("STUB");
    },
    InputComponent: GridFilterInputSingleSelect,
  },
  {
    value: 'isAnyOf',
    getApplyFilterFn: (filterItem) => {
        throw new Error("STUB");
    },
    InputComponent: GridFilterInputMultipleSingleSelect,
  },
];
