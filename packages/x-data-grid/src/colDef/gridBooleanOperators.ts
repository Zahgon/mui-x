import {
  GridFilterInputBoolean,
  sanitizeFilterItemValue,
} from '../components/panel/filterPanel/GridFilterInputBoolean';
import type { GridFilterItem } from '../models/gridFilterItem';
import type { GridFilterOperator } from '../models/gridFilterOperator';

export const getGridBooleanOperators = (): GridFilterOperator<any, boolean | null, any>[] => [
  {
    value: 'is',
    getApplyFilterFn: (filterItem: GridFilterItem) => {
        throw new Error("STUB");
    },
    InputComponent: GridFilterInputBoolean,
  },
];
