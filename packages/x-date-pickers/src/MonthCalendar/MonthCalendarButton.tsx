'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import useSlotProps from '@mui/utils/useSlotProps';
import composeClasses from '@mui/utils/composeClasses';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';
import type {
  MonthCalendarSlotProps,
  MonthCalendarSlots,
  MonthButtonOwnerState,
} from './MonthCalendar.types';
import { usePickerPrivateContext } from '../internals/hooks/usePickerPrivateContext';
import type { MonthCalendarClasses } from './monthCalendarClasses';
import { getMonthCalendarUtilityClass, monthCalendarClasses } from './monthCalendarClasses';

export interface MonthCalendarButtonProps {
  value: number;
  tabIndex: number;
  selected: boolean;
  disabled: boolean;
  autoFocus: boolean;
  classes: Partial<MonthCalendarClasses> | undefined;
  slots: MonthCalendarSlots | undefined;
  slotProps: MonthCalendarSlotProps | undefined;
  'aria-current': React.AriaAttributes['aria-current'];
  'aria-label': React.AriaAttributes['aria-label'];
  children: React.ReactNode;
  onClick: (event: React.MouseEvent, month: number) => void;
  onKeyDown: (event: React.KeyboardEvent, month: number) => void;
  onFocus: (event: React.FocusEvent, month: number) => void;
  onBlur: (event: React.FocusEvent, month: number) => void;
}

const useUtilityClasses = (
  classes: Partial<MonthCalendarClasses> | undefined,
  ownerState: MonthButtonOwnerState,
) => {
  const slots = {
    button: [
      'button',
      ownerState.isMonthDisabled && 'disabled',
      ownerState.isMonthSelected && 'selected',
    ],
  };

  return composeClasses(slots, getMonthCalendarUtilityClass, classes);
};

const DefaultMonthButton = styled('button', {
  name: 'MuiMonthCalendar',
  slot: 'Button',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})<{
  ownerState?: MonthButtonOwnerState;
}>(({ theme }) => { throw new Error("STUB"); });

/**
 * @ignore - do not document.
 */
export const MonthCalendarButton = React.memo(function MonthCalendarButton(
  props: MonthCalendarButtonProps,
) {
    throw new Error("STUB");
});
