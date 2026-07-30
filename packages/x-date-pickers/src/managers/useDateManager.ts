'use client';
import * as React from 'react';
import type { MakeOptional } from '@mui/x-internals/types';
import { applyDefaultDate } from '../internals/utils/date-utils';
import {
  singleItemFieldValueManager,
  singleItemValueManager,
} from '../internals/utils/valueManagers';
import type { PickerManager, DateValidationError } from '../models';
import { validateDate } from '../validation';
import type { UseFieldInternalProps } from '../internals/hooks/useField';
import type { ExportedValidateDateProps, ValidateDateProps } from '../validation/validateDate';
import type { PickerManagerFieldInternalPropsWithDefaults, PickerValue } from '../internals/models';
import { useDefaultDates } from '../internals/hooks/useUtils';
import { usePickerAdapter, usePickerTranslations } from '../hooks';

export function useDateManager(): UseDateManagerReturnValue {
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

function useApplyDefaultValuesToDateFieldInternalProps(
  internalProps: DateManagerFieldInternalProps,
): PickerManagerFieldInternalPropsWithDefaults<UseDateManagerReturnValue> {
    throw new Error("STUB");
}

type SharedDateAndDateRangeValidationProps =
  'disablePast' | 'disableFuture' | 'minDate' | 'maxDate';

export function useApplyDefaultValuesToDateValidationProps(
  props: Pick<ExportedValidateDateProps, SharedDateAndDateRangeValidationProps>,
): Pick<ValidateDateProps, SharedDateAndDateRangeValidationProps> {
  const adapter = usePickerAdapter();
  const defaultDates = useDefaultDates();

  return React.useMemo(
    () => { throw new Error("STUB"); },
    [props.minDate, props.maxDate, props.disableFuture, props.disablePast, adapter, defaultDates],
  );
}

export type UseDateManagerReturnValue = PickerManager<
  PickerValue,
  DateValidationError,
  ValidateDateProps,
  DateManagerFieldInternalProps
>;

export interface DateManagerFieldInternalProps
  extends
    MakeOptional<UseFieldInternalProps<PickerValue, DateValidationError>, 'format'>,
    ExportedValidateDateProps {}
