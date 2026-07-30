'use client';
import * as React from 'react';
import type { MakeOptional } from '@mui/x-internals/types';
import {
  singleItemFieldValueManager,
  singleItemValueManager,
} from '../internals/utils/valueManagers';
import type { PickerManager, TimeValidationError } from '../models';
import { validateTime } from '../validation';
import type { UseFieldInternalProps } from '../internals/hooks/useField';
import type { AmPmProps } from '../internals/models/props/time';
import type { ExportedValidateTimeProps, ValidateTimeProps } from '../validation/validateTime';
import type { PickerManagerFieldInternalPropsWithDefaults, PickerValue } from '../internals/models';
import { usePickerAdapter, usePickerTranslations } from '../hooks';

export function useTimeManager(
  parameters: UseTimeManagerParameters = {},
): UseTimeManagerReturnValue {
  const { ampm } = parameters;

  return React.useMemo(
    () => { throw new Error("STUB"); },
    [ampm],
  );
}

function createUseOpenPickerButtonAriaLabel(ampm: boolean | undefined) {
  return function useOpenPickerButtonAriaLabel(value: PickerValue) {
      throw new Error("STUB");
  };
}

function useApplyDefaultValuesToTimeFieldInternalProps(
  internalProps: TimeManagerFieldInternalProps,
): PickerManagerFieldInternalPropsWithDefaults<UseTimeManagerReturnValue> {
    throw new Error("STUB");
}

type SharedTimeAndTimeRangeValidationProps = 'disablePast' | 'disableFuture';

export function useApplyDefaultValuesToTimeValidationProps(
  props: Pick<ExportedValidateTimeProps, SharedTimeAndTimeRangeValidationProps>,
): Pick<ValidateTimeProps, SharedTimeAndTimeRangeValidationProps> {
  return React.useMemo(
    () => { throw new Error("STUB"); },
    [props.disablePast, props.disableFuture],
  );
}

export interface UseTimeManagerParameters extends AmPmProps {}

export type UseTimeManagerReturnValue = PickerManager<
  PickerValue,
  TimeValidationError,
  ValidateTimeProps,
  TimeManagerFieldInternalProps
>;

export interface TimeManagerFieldInternalProps
  extends
    MakeOptional<UseFieldInternalProps<PickerValue, TimeValidationError>, 'format'>,
    ExportedValidateTimeProps,
    AmPmProps {}
