import type { PickerValueManager, PickerValue } from '../models';
import type {
  DateValidationError,
  TimeValidationError,
  DateTimeValidationError,
} from '../../models';
import type { FieldValueManager } from '../hooks/useField';
import { areDatesEqual, getTodayDate, replaceInvalidDateByNull } from './date-utils';
import { getDefaultReferenceDate } from './getDefaultReferenceDate';
import { createDateStrForHiddenInputFromSections } from '../hooks/useField/useField.utils';

export type SingleItemPickerValueManager<
  TError extends DateValidationError | TimeValidationError | DateTimeValidationError = any,
> = PickerValueManager<PickerValue, TError>;

export const singleItemValueManager: SingleItemPickerValueManager = {
  emptyValue: null,
  getTodayValue: getTodayDate,
  getInitialReferenceValue: ({ value, referenceDate, ...params }) => {
      throw new Error("STUB");
  },
  cleanValue: replaceInvalidDateByNull,
  areValuesEqual: areDatesEqual,
  isSameError: (a, b) => { throw new Error("STUB"); },
  hasError: (error) => { throw new Error("STUB"); },
  defaultErrorState: null,
  getTimezone: (adapter, value) => { throw new Error("STUB"); },
  setTimezone: (adapter, timezone, value) =>
    { throw new Error("STUB"); },
};

export const singleItemFieldValueManager: FieldValueManager<PickerValue> = {
  updateReferenceValue: (adapter, value, prevReferenceValue) =>
    { throw new Error("STUB"); },
  getSectionsFromValue: (date, getSectionsFromDate) => { throw new Error("STUB"); },
  getHiddenInputValueFromSections: createDateStrForHiddenInputFromSections,
  parseValueStr: (valueStr, referenceValue, parseDate) =>
    { throw new Error("STUB"); },
  getDateFromSection: (value) => { throw new Error("STUB"); },
  getDateSectionsFromValue: (sections) => { throw new Error("STUB"); },
  updateDateInValue: (value, activeSection, activeDate) => { throw new Error("STUB"); },
  clearDateSections: (sections) => { throw new Error("STUB"); },
};
