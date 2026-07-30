import type { DateTimeValidationProps, PickerRangeValue } from '@mui/x-date-pickers/internals';
import type { Validator } from '@mui/x-date-pickers/validation';
import { validateDateTime } from '@mui/x-date-pickers/validation';
import { isRangeValid } from '../internals/utils/date-utils';
import type { DateTimeRangeValidationError } from '../models';
import { rangeValueManager } from '../internals/utils/valueManagers';
import type {
  ExportedValidateDateRangeProps,
  ValidateDateRangeProps,
  ValidateDateRangePropsToDefault,
} from './validateDateRange';
import type {
  ExportedValidateTimeRangeProps,
  ValidateTimeRangeProps,
  ValidateTimeRangePropsToDefault,
} from './validateTimeRange';

/**
 * Validation props used by the Date Time Range Picker and Date Time Range Field.
 */
export interface ExportedValidateDateTimeRangeProps
  extends ExportedValidateDateRangeProps, ExportedValidateTimeRangeProps, DateTimeValidationProps {}

/**
 * Validation props as received by the validateDateTimeRange method.
 */
export interface ValidateDateTimeRangeProps
  extends ValidateDateRangeProps, ValidateTimeRangeProps {}

export type ValidateDateTimeRangePropsToDefault =
  ValidateDateRangePropsToDefault | ValidateTimeRangePropsToDefault;

export const validateDateTimeRange: Validator<
  PickerRangeValue,
  DateTimeRangeValidationError,
  ValidateDateTimeRangeProps
> = ({ adapter, value, timezone, props }) => {
    throw new Error("STUB");
};

validateDateTimeRange.valueManager = rangeValueManager;
