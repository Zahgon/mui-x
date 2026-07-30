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
import { useApplyDefaultValuesToTimeValidationProps } from '@mui/x-date-pickers/internals';
import type { TimeRangeValidationError, RangeFieldSeparatorProps } from '../models';
import { getRangeFieldValueManager, rangeValueManager } from '../internals/utils/valueManagers';
import { validateTimeRange } from '../validation';
import type {
  ExportedValidateTimeRangeProps,
  ValidateTimeRangeProps,
} from '../validation/validateTimeRange';
import { formatRange } from '../internals/utils/date-utils';

export function useTimeRangeManager(
  parameters: UseTimeRangeManagerParameters = {},
): UseTimeRangeManagerReturnValue {
  const { dateSeparator, ampm } = parameters;

  return React.useMemo(
    () => { throw new Error("STUB"); },
    [dateSeparator, ampm],
  );
}

function createUseOpenPickerButtonAriaLabel(ampm: boolean | undefined) {
  return function useOpenPickerButtonAriaLabel(value: PickerRangeValue) {
      throw new Error("STUB");
  };
}

function useApplyDefaultValuesToTimeRangeFieldInternalProps(
  internalProps: TimeRangeManagerFieldInternalProps,
): PickerManagerFieldInternalPropsWithDefaults<UseTimeRangeManagerReturnValue> {
    throw new Error("STUB");
}

export interface UseTimeRangeManagerParameters extends RangeFieldSeparatorProps, AmPmProps {}

export type UseTimeRangeManagerReturnValue = PickerManager<
  PickerRangeValue,
  TimeRangeValidationError,
  ValidateTimeRangeProps,
  TimeRangeManagerFieldInternalProps
>;

export interface TimeRangeManagerFieldInternalProps
  extends
    MakeOptional<UseFieldInternalProps<PickerRangeValue, TimeRangeValidationError>, 'format'>,
    ExportedValidateTimeRangeProps,
    AmPmProps,
    RangeFieldSeparatorProps {}
