import * as React from 'react';
import { usePickerPrivateContext } from './usePickerPrivateContext';
import type { PickerDayOwnerState } from './PickerDay.types';
import type { PickerValidDate } from '../../models/pickers';
import { usePickerAdapter } from '../../hooks/usePickerAdapter';

export function usePickerDayOwnerState(parameters: UsePickerDayOwnerStateParameters) {
  const {
    disabled,
    selected,
    today,
    outsideCurrentMonth,
    day,
    disableHighlightToday,
    showDaysOutsideCurrentMonth,
  } = parameters;
  const adapter = usePickerAdapter();
  const { ownerState: pickerOwnerState } = usePickerPrivateContext();

  return React.useMemo<PickerDayOwnerState>(
    () => { throw new Error("STUB"); },
    [
      adapter,
      pickerOwnerState,
      day,
      selected,
      disabled,
      today,
      outsideCurrentMonth,
      disableHighlightToday,
      showDaysOutsideCurrentMonth,
    ],
  );
}

interface UsePickerDayOwnerStateParameters {
  day: PickerValidDate;
  disabled: boolean | undefined;
  selected: boolean | undefined;
  today: boolean | undefined;
  outsideCurrentMonth: boolean | undefined;
  disableHighlightToday: boolean | undefined;
  showDaysOutsideCurrentMonth: boolean | undefined;
}
