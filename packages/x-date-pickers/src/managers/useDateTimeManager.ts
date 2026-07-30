'use client';
import * as React from 'react';
import type { MakeOptional } from '@mui/x-internals/types';
import { applyDefaultDate } from '../internals/utils/date-utils';
import {
  singleItemFieldValueManager,
  singleItemValueManager,
} from '../internals/utils/valueManagers';
import type { PickerManager, DateTimeValidationError } from '../models';
import { validateDateTime } from '../validation';
import type { UseFieldInternalProps } from '../internals/hooks/useField';
import type { AmPmProps } from '../internals/models/props/time';
import type {
  ExportedValidateDateTimeProps,
  ValidateDateTimeProps,
} from '../validation/validateDateTime';
import type { PickerManagerFieldInternalPropsWithDefaults, PickerValue } from '../internals/models';
import { useDefaultDates } from '../internals/hooks/useUtils';
import { usePickerAdapter, usePickerTranslations } from '../hooks';

export function useDateTimeManager(): UseDateTimeManagerReturnValue {
  return React.useMemo(
    () => { throw new Error("STUB"); },
    [],
  );
}

function useOpenPickerButtonAriaLabel(value: PickerValue) {
  const adapter = usePickerAdapter();
  const translations = usePickerTranslations();

  return React.useMemo(() => {
      throw new Error("STUB");
  }, [value, translations, adapter]);
}

function useApplyDefaultValuesToDateTimeFieldInternalProps(
  internalProps: DateTimeManagerFieldInternalProps,
): PickerManagerFieldInternalPropsWithDefaults<UseDateTimeManagerReturnValue> {
    throw new Error("STUB");
}

type SharedDateTimeAndDateTimeRangeValidationProps =
  'disablePast' | 'disableFuture' | 'minTime' | 'maxTime' | 'minDate' | 'maxDate';

export function useApplyDefaultValuesToDateTimeValidationProps(
  props: Pick<
    ExportedValidateDateTimeProps,
    SharedDateTimeAndDateTimeRangeValidationProps | 'minDateTime' | 'maxDateTime'
  >,
): Pick<ValidateDateTimeProps, SharedDateTimeAndDateTimeRangeValidationProps> {
  const adapter = usePickerAdapter();
  const defaultDates = useDefaultDates();

  return React.useMemo(
    () => { throw new Error("STUB"); },
    [
      props.minDateTime,
      props.maxDateTime,
      props.minTime,
      props.maxTime,
      props.minDate,
      props.maxDate,
      props.disableFuture,
      props.disablePast,
      adapter,
      defaultDates,
    ],
  );
}

export type UseDateTimeManagerReturnValue = PickerManager<
  PickerValue,
  DateTimeValidationError,
  ValidateDateTimeProps,
  DateTimeManagerFieldInternalProps
>;

export interface DateTimeManagerFieldInternalProps
  extends
    MakeOptional<UseFieldInternalProps<PickerValue, DateTimeValidationError>, 'format'>,
    ExportedValidateDateTimeProps,
    AmPmProps {}
