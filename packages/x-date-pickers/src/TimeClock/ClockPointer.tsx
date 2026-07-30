'use client';
import * as React from 'react';
import clsx from 'clsx';
import { styled, useThemeProps } from '@mui/material/styles';
import composeClasses from '@mui/utils/composeClasses';
import { CLOCK_WIDTH, CLOCK_HOUR_WIDTH } from './shared';
import type { PickerOwnerState, TimeView } from '../models';
import type { ClockPointerClasses } from './clockPointerClasses';
import { getClockPointerUtilityClass } from './clockPointerClasses';
import { usePickerPrivateContext } from '../internals/hooks/usePickerPrivateContext';

export interface ClockPointerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * `true` if the pointer is between two clock values.
   * On the `hours` view, it is always false.
   * On the `minutes` view, it is true if the pointer is on a value that is not a multiple of 5.
   */
  isBetweenTwoClockValues: boolean;
  isInner: boolean;
  type: TimeView;
  viewValue: number;
  classes?: Partial<ClockPointerClasses>;
}

export interface ClockPointerOwnerState extends PickerOwnerState {
  /**
   * `true` if the clock pointer should animate.
   */
  isClockPointerAnimated: boolean;
  /**
   * `true` if the pointer is between two clock values.
   * On the `hours` view, it is always false.
   * On the `minutes` view, it is true if the pointer is on a value that is not a multiple of 5.
   */
  isClockPointerBetweenTwoValues: boolean;
}

const useUtilityClasses = (classes: Partial<ClockPointerClasses> | undefined) => {
  const slots = {
    root: ['root'],
    thumb: ['thumb'],
  };

  return composeClasses(slots, getClockPointerUtilityClass, classes);
};

const ClockPointerRoot = styled('div', {
  name: 'MuiClockPointer',
  slot: 'Root',
})<{
  ownerState: ClockPointerOwnerState;
}>(({ theme }) => { throw new Error("STUB"); });

const ClockPointerThumb = styled('div', {
  name: 'MuiClockPointer',
  slot: 'Thumb',
})<{
  ownerState: ClockPointerOwnerState;
}>(({ theme }) => { throw new Error("STUB"); });

/**
 * @ignore - internal component.
 */
export function ClockPointer(inProps: ClockPointerProps) {
    throw new Error("STUB");
}
