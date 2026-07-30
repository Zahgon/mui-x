'use client';
import * as React from 'react';
import type { MakeOptional } from '@mui/x-internals/types';
import type { PickerManager } from '@mui/x-date-pickers/models';
import { usePickerAdapter, usePickerTranslations } from '@mui/x-date-pickers/hooks';
import type {
  PickerManagerFieldInternalPropsWithDefaults,
  PickerRangeValue,
  UseFieldInternalProps,
} from '@mui/x-date-pickers/internals';
import { useApplyDefaultValuesToDateValidationProps } from '@mui/x-date-pickers/internals';
import type { DateRangeValidationError, RangeFieldSeparatorProps } from '../models';
import { getRangeFieldValueManager, rangeValueManager } from '../internals/utils/valueManagers';
import { validateDateRange } from '../validation';
import type {
  ExportedValidateDateRangeProps,
  ValidateDateRangeProps,
} from '../validation/validateDateRange';
import { formatRange } from '../internals/utils/date-utils';

export function useDateRangeManager(
  parameters: UseDateRangeManagerParameters = {},
): UseDateRangeManagerReturnValue {
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

function useApplyDefaultValuesToDateRangeFieldInternalProps(
  internalProps: DateRangeManagerFieldInternalProps,
): PickerManagerFieldInternalPropsWithDefaults<UseDateRangeManagerReturnValue> {
    throw new Error("STUB");
}

export interface UseDateRangeManagerParameters extends RangeFieldSeparatorProps {}

export type UseDateRangeManagerReturnValue = PickerManager<
  PickerRangeValue,
  DateRangeValidationError,
  ValidateDateRangeProps,
  DateRangeManagerFieldInternalProps
>;

export interface DateRangeManagerFieldInternalProps
  extends
    MakeOptional<UseFieldInternalProps<PickerRangeValue, DateRangeValidationError>, 'format'>,
    RangeFieldSeparatorProps,
    ExportedValidateDateRangeProps {}
