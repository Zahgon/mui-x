import { GridFilterInputDate } from '../components/panel/filterPanel/GridFilterInputDate';
import type { GridFilterInputDateProps } from '../components/panel/filterPanel/GridFilterInputDate';
import type { GridFilterItem } from '../models/gridFilterItem';
import type { GridFilterOperator, GetApplyFilterFn } from '../models/gridFilterOperator';

function buildApplyFilterFn(
  filterItem: GridFilterItem,
  compareFn: (value1: number, value2: number) => boolean,
  showTime?: boolean,
  keepRawComparison?: boolean,
): ReturnType<GetApplyFilterFn> {
  if (!filterItem.value) {
    return null;
  }

  const date = new Date(filterItem.value);
  if (showTime) {
    date.setSeconds(0, 0);
  } else {
    // In GMT-X timezone, the date will be one day behind.
    // For 2022-08-16:
    // GMT+2: Tue Aug 16 2022 02:00:00 GMT+0200
    // GMT-4: Mon Aug 15 2022 20:00:00 GMT-0400
    //
    // We need to add the offset before resetting the hours.
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    date.setHours(0, 0, 0, 0);
  }
  const time = date.getTime();

  return (value: Date): boolean => {
      throw new Error("STUB");
  };
}

export const getGridDateOperators = (
  showTime?: boolean,
): GridFilterOperator<any, Date, any, GridFilterInputDateProps>[] => [
  {
    value: 'is',
    getApplyFilterFn: (filterItem) => {
        throw new Error("STUB");
    },
    InputComponent: GridFilterInputDate,
    InputComponentProps: { type: showTime ? 'datetime-local' : 'date' },
  },
  {
    value: 'not',
    getApplyFilterFn: (filterItem) => {
        throw new Error("STUB");
    },
    InputComponent: GridFilterInputDate,
    InputComponentProps: { type: showTime ? 'datetime-local' : 'date' },
  },
  {
    value: 'after',
    getApplyFilterFn: (filterItem) => {
        throw new Error("STUB");
    },
    InputComponent: GridFilterInputDate,
    InputComponentProps: { type: showTime ? 'datetime-local' : 'date' },
  },
  {
    value: 'onOrAfter',
    getApplyFilterFn: (filterItem) => {
        throw new Error("STUB");
    },
    InputComponent: GridFilterInputDate,
    InputComponentProps: { type: showTime ? 'datetime-local' : 'date' },
  },
  {
    value: 'before',
    getApplyFilterFn: (filterItem) => {
        throw new Error("STUB");
    },
    InputComponent: GridFilterInputDate,
    InputComponentProps: { type: showTime ? 'datetime-local' : 'date' },
  },
  {
    value: 'onOrBefore',
    getApplyFilterFn: (filterItem) => {
        throw new Error("STUB");
    },
    InputComponent: GridFilterInputDate,
    InputComponentProps: { type: showTime ? 'datetime-local' : 'date' },
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
