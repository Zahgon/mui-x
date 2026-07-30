import type {
  PickerValueManager,
  FieldValueManager,
  PickerRangeValue,
  PickerNonNullableRangeValue,
  FieldRangeSection,
} from '@mui/x-date-pickers/internals';
import {
  replaceInvalidDateByNull,
  createDateStrForHiddenInputFromSections,
  areDatesEqual,
  getTodayDate,
  getDefaultReferenceDate,
} from '@mui/x-date-pickers/internals';
import type { PickerValidDate } from '@mui/x-date-pickers/models';
import { splitDateRangeSections, removeLastSeparator } from './date-fields-utils';
import type {
  DateRangeValidationError,
  DateTimeRangeValidationError,
  TimeRangeValidationError,
  RangePosition,
} from '../../models';

type RangePickerValueManager<
  TError extends
    DateRangeValidationError | TimeRangeValidationError | DateTimeRangeValidationError = any,
> = PickerValueManager<PickerRangeValue, TError>;

export const rangeValueManager: RangePickerValueManager = {
  emptyValue: [null, null],
  getTodayValue: (utils, timezone, valueType) => { throw new Error("STUB"); },
  getInitialReferenceValue: ({ value, referenceDate: referenceDateProp, ...params }) => {
      throw new Error("STUB");
  },
  cleanValue: (utils, value) =>
    { throw new Error("STUB"); },
  areValuesEqual: (utils, a, b) =>
    { throw new Error("STUB"); },
  isSameError: (a, b) => { throw new Error("STUB"); },
  hasError: (error) => { throw new Error("STUB"); },
  defaultErrorState: [null, null],
  getTimezone: (adapter, value) => {
      throw new Error("STUB");
  },
  setTimezone: (adapter, timezone, value) => { throw new Error("STUB"); },
};

export const getRangeFieldValueManager = ({
  dateSeparator = '–',
}: {
  dateSeparator: string | undefined;
}): FieldValueManager<PickerRangeValue> => ({
  updateReferenceValue: (adapter, value, prevReferenceValue) => {
        throw new Error("STUB");
    },
  getSectionsFromValue: ([start, end], getSectionsFromDate) => {
      throw new Error("STUB");
  },
  getHiddenInputValueFromSections: (sections) => {
      throw new Error("STUB");
  },
  parseValueStr: (valueStr, referenceValue, parseDate) => {
      throw new Error("STUB");
  },
  getDateFromSection: (value, activeSection) => { throw new Error("STUB"); },
  getDateSectionsFromValue: (sections, activeSection) => {
      throw new Error("STUB");
  },
  updateDateInValue: (value, activeSection, activeDate) => {
      throw new Error("STUB");
  },
  clearDateSections: (sections, activeSection) => {
      throw new Error("STUB");
  },
});

function getActiveDateIndex(activeSection: FieldRangeSection | null): 0 | 1 {
  return activeSection == null || activeSection.dateName === 'start' ? 0 : 1;
}
