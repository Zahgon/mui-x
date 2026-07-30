import * as React from 'react';
import clsx from 'clsx';
import { styled, useThemeProps } from '@mui/material/styles';
import composeClasses from '@mui/utils/composeClasses';
import { CLOCK_WIDTH, CLOCK_HOUR_WIDTH } from './shared';
import type { ClockNumberClasses } from './clockNumberClasses';
import { getClockNumberUtilityClass, clockNumberClasses } from './clockNumberClasses';
import type { PickerOwnerState } from '../models/pickers';
import { usePickerPrivateContext } from '../internals/hooks/usePickerPrivateContext';

export interface ClockNumberProps extends React.HTMLAttributes<HTMLSpanElement> {
  'aria-label': string;
  disabled: boolean;
  /**
   * Make sure callers pass an id which. It should be defined if selected.
   */
  id: string | undefined;
  index: number;
  inner: boolean;
  label: string;
  selected: boolean;
  classes?: Partial<ClockNumberClasses>;
}

export interface ClockNumberOwnerState extends PickerOwnerState {
  /**
   * `true` if the clock number is in the inner clock ring.
   * When used with meridiem, all the hours are in the outer ring.
   * When used without meridiem, the hours from 1 to 12 are in the outer ring and the hours from 13 to 24 are in the inner ring.
   * The minutes are always in the outer ring.
   */
  isClockNumberInInnerRing: boolean;
  /**
   * `true` if the clock number is selected.
   */
  isClockNumberSelected: boolean;
  /**
   * `true` if the clock number is disabled.
   */
  isClockNumberDisabled: boolean;
}

const useUtilityClasses = (
  classes: Partial<ClockNumberClasses> | undefined,
  ownerState: ClockNumberOwnerState,
) => {
  const slots = {
    root: [
      'root',
      ownerState.isClockNumberSelected && 'selected',
      ownerState.isClockNumberDisabled && 'disabled',
    ],
  };

  return composeClasses(slots, getClockNumberUtilityClass, classes);
};

const ClockNumberRoot = styled('span', {
  name: 'MuiClockNumber',
  slot: 'Root',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})<{ ownerState: ClockNumberOwnerState }>(({ theme }) => { throw new Error("STUB"); });

/**
 * @ignore - internal component.
 */
export function ClockNumber(inProps: ClockNumberProps) {
    throw new Error("STUB");
}
