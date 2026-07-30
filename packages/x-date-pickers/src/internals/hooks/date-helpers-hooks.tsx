import * as React from 'react';
import type { PickerOnChangeFn } from './useViews';
import { getMeridiem, convertToMeridiem } from '../utils/time-utils';
import type { PickerSelectionState } from './usePicker';
import type { PickersTimezone, PickerValidDate } from '../../models';
import { usePickerAdapter } from '../../hooks/usePickerAdapter';

export interface MonthValidationOptions {
  disablePast?: boolean;
  disableFuture?: boolean;
  minDate: PickerValidDate;
  maxDate: PickerValidDate;
  timezone: PickersTimezone;
}

export function useNextMonthDisabled(
  month: PickerValidDate,
  {
    disableFuture,
    maxDate,
    timezone,
  }: Pick<MonthValidationOptions, 'disableFuture' | 'maxDate' | 'timezone'>,
) {
  const adapter = usePickerAdapter();
  return React.useMemo(() => {
      throw new Error("STUB");
  }, [disableFuture, maxDate, month, adapter, timezone]);
}

export function usePreviousMonthDisabled(
  month: PickerValidDate,
  {
    disablePast,
    minDate,
    timezone,
  }: Pick<MonthValidationOptions, 'disablePast' | 'minDate' | 'timezone'>,
) {
  const adapter = usePickerAdapter();

  return React.useMemo(() => {
      throw new Error("STUB");
  }, [disablePast, minDate, month, adapter, timezone]);
}

export function useMeridiemMode(
  date: PickerValidDate | null,
  ampm: boolean | undefined,
  onChange: PickerOnChangeFn,
  selectionState?: PickerSelectionState,
) {
  const adapter = usePickerAdapter();
  const cleanDate = React.useMemo(() => { throw new Error("STUB"); }, [adapter, date]);

  const meridiemMode = getMeridiem(cleanDate, adapter);

  const handleMeridiemChange = React.useCallback(
    (mode: 'am' | 'pm') => {
          throw new Error("STUB");
      },
    [ampm, cleanDate, onChange, selectionState, adapter],
  );

  return { meridiemMode, handleMeridiemChange };
}
