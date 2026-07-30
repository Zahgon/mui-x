'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import useSlotProps from '@mui/utils/useSlotProps';
import composeClasses from '@mui/utils/composeClasses';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';
import type {
  YearButtonOwnerState,
  YearCalendarSlotProps,
  YearCalendarSlots,
} from './YearCalendar.types';
import { usePickerPrivateContext } from '../internals/hooks/usePickerPrivateContext';
import type { PickerOwnerState } from '../models/pickers';
import type { YearCalendarClasses } from './yearCalendarClasses';
import { getYearCalendarUtilityClass, yearCalendarClasses } from './yearCalendarClasses';

export interface YearCalendarButtonProps {
  value: number;
  tabIndex: number;
  selected: boolean;
  disabled: boolean;
  autoFocus: boolean;
  classes: Partial<YearCalendarClasses> | undefined;
  slots: YearCalendarSlots | undefined;
  slotProps: YearCalendarSlotProps | undefined;
  'aria-current': React.AriaAttributes['aria-current'];
  children: React.ReactNode;
  onClick: (event: React.MouseEvent, year: number) => void;
  onKeyDown: (event: React.KeyboardEvent, year: number) => void;
  onFocus: (event: React.FocusEvent, year: number) => void;
  onBlur: (event: React.FocusEvent, year: number) => void;
}

const useUtilityClasses = (
  classes: Partial<YearCalendarClasses> | undefined,
  ownerState: YearButtonOwnerState,
) => {
  const slots = {
    button: [
      'button',
      ownerState.isYearDisabled && 'disabled',
      ownerState.isYearSelected && 'selected',
    ],
  };

  return composeClasses(slots, getYearCalendarUtilityClass, classes);
};

const DefaultYearButton = styled('button', {
  name: 'MuiYearCalendar',
  slot: 'Button',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})<{ ownerState: PickerOwnerState }>(({ theme }) => { throw new Error("STUB"); });

/**
 * @ignore - internal component.
 */
export const YearCalendarButton = React.memo(function YearCalendarButton(
  props: YearCalendarButtonProps,
) {
    throw new Error("STUB");
});
