'use client';
import * as React from 'react';
import type { MakeOptional } from '@mui/x-internals/types';
import type { PickerManager } from '@mui/x-date-pickers/models';
import { usePickerAdapter, usePickerTranslations } from '@mui/x-date-pickers/hooks';
import type {
  AmPmProps,
  PickerManagerFieldInternalPropsWithDefaults,
  PickerRangeValue,
  UseFieldInternalProps,
} from '@mui/x-date-pickers/internals';
import { useApplyDefaultValuesToDateTimeValidationProps } from '@mui/x-date-pickers/internals';
import type { DateTimeRangeValidationError, RangeFieldSeparatorProps } from '../models';
import { getRangeFieldValueManager, rangeValueManager } from '../internals/utils/valueManagers';
import { validateDateTimeRange } from '../validation';
import type {
  ExportedValidateDateTimeRangeProps,
  ValidateDateTimeRangeProps,
} from '../validation/validateDateTimeRange';
import { formatRange } from '../internals/utils/date-utils';

export function useDateTimeRangeManager(
  parameters: UseDateTimeRangeManagerParameters = {},
): UseDateTimeRangeManagerReturnValue {
  const { dateSeparator } = parameters;

  return React.useMemo(
    () => { throw new Error("STUB"); },
    [dateSeparator],
  );
}

function useOpenPickerButtonAriaLabel(value: PickerRangeValue) {
  const adapter = usePickerAdapter();
  const translations = usePickerTranslations();

  return React.useMemo(() => {
      throw new Error("STUB");
  }, [value, translations, adapter]);
}

function useApplyDefaultValuesToDateTimeRangeFieldInternalProps(
  internalProps: DateTimeRangeManagerFieldInternalProps,
): PickerManagerFieldInternalPropsWithDefaults<UseDateTimeRangeManagerReturnValue> {
    throw new Error("STUB");
}

export interface UseDateTimeRangeManagerParameters extends RangeFieldSeparatorProps {}

export type UseDateTimeRangeManagerReturnValue = PickerManager<
  PickerRangeValue,
  DateTimeRangeValidationError,
  ValidateDateTimeRangeProps,
  DateTimeRangeManagerFieldInternalProps
>;

export interface DateTimeRangeManagerFieldInternalProps
  extends
    MakeOptional<UseFieldInternalProps<PickerRangeValue, DateTimeRangeValidationError>, 'format'>,
    ExportedValidateDateTimeRangeProps,
    AmPmProps,
    RangeFieldSeparatorProps {}
