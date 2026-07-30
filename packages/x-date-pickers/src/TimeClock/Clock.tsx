'use client';
import * as React from 'react';
import clsx from 'clsx';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import type { Theme } from '@mui/material/styles';
import { styled, useThemeProps } from '@mui/material/styles';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';
import useEventCallback from '@mui/utils/useEventCallback';
import ownerDocument from '@mui/utils/ownerDocument';
import composeClasses from '@mui/utils/composeClasses';
import { ClockPointer } from './ClockPointer';
import { usePickerAdapter, usePickerTranslations } from '../hooks';
import type { PickerSelectionState } from '../internals/hooks/usePicker';
import type { useMeridiemMode } from '../internals/hooks/date-helpers-hooks';
import { CLOCK_HOUR_WIDTH, getHours, getMinutes } from './shared';
import type { PickerOwnerState, PickerValidDate, TimeView } from '../models';
import type { ClockClasses } from './clockClasses';
import { getClockUtilityClass } from './clockClasses';
import { formatMeridiem } from '../internals/utils/date-utils';
import type { Meridiem } from '../internals/utils/time-utils';
import type { FormProps } from '../internals/models/formProps';
import { usePickerPrivateContext } from '../internals/hooks/usePickerPrivateContext';

export interface ClockProps extends ReturnType<typeof useMeridiemMode>, FormProps {
  ampm: boolean;
  ampmInClock: boolean;
  autoFocus?: boolean;
  children: readonly React.ReactNode[];
  isTimeDisabled: (timeValue: number, type: TimeView) => boolean;
  minutesStep?: number;
  onChange: (value: number, isFinish?: PickerSelectionState) => void;
  /**
   * DOM id that the selected option should have
   * Should only be `undefined` on the server
   */
  selectedId: string | undefined;
  type: TimeView;
  /**
   * The numeric value of the current view.
   */
  viewValue: number;
  /**
   * The current full date value.
   */
  value: PickerValidDate | null;
  /**
   * Minimum and maximum value of the clock.
   */
  viewRange: [number, number];
  className?: string;
  classes?: Partial<ClockClasses>;
}

export interface ClockOwnerState extends PickerOwnerState {
  /**
   * `true` if the clock is disabled, `false` otherwise.
   */
  isClockDisabled: boolean;
  /**
   * The current meridiem mode of the clock.
   */
  clockMeridiemMode: Meridiem | null;
}

const useUtilityClasses = (
  classes: Partial<ClockClasses> | undefined,
  ownerState: ClockOwnerState,
) => {
  const slots = {
    root: ['root'],
    clock: ['clock'],
    wrapper: ['wrapper'],
    squareMask: ['squareMask'],
    pin: ['pin'],
    amButton: ['amButton', ownerState.clockMeridiemMode === 'am' && 'selected'],
    pmButton: ['pmButton', ownerState.clockMeridiemMode === 'pm' && 'selected'],
    meridiemText: ['meridiemText'],
  };

  return composeClasses(slots, getClockUtilityClass, classes);
};

const ClockRoot = styled('div', {
  name: 'MuiClock',
  slot: 'Root',
})(({ theme }) => { throw new Error("STUB"); });

const ClockClock = styled('div', {
  name: 'MuiClock',
  slot: 'Clock',
})({
  backgroundColor: 'rgba(0,0,0,.07)',
  borderRadius: '50%',
  height: 220,
  width: 220,
  flexShrink: 0,
  position: 'relative',
  pointerEvents: 'none',
});

const ClockWrapper = styled('div', {
  name: 'MuiClock',
  slot: 'Wrapper',
})({
  '&:focus': {
    outline: 'none',
  },
});

const ClockSquareMask = styled('div', {
  name: 'MuiClock',
  slot: 'SquareMask',
})<{ ownerState: ClockOwnerState }>({
  width: '100%',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'auto',
  outline: 0,
  // Disable scroll capabilities.
  touchAction: 'none',
  userSelect: 'none',
  variants: [
    {
      props: { isClockDisabled: false },
      style: {
        '@media (pointer: fine)': {
          cursor: 'pointer',
          borderRadius: '50%',
        },
        '&:active': {
          cursor: 'move',
        },
      },
    },
  ],
});

const ClockPin = styled('div', {
  name: 'MuiClock',
  slot: 'Pin',
})(({ theme }) => { throw new Error("STUB"); });

const meridiemButtonCommonStyles = (
  theme: Theme,
  clockMeridiemMode: ClockOwnerState['clockMeridiemMode'],
) => ({
  zIndex: 1,
  bottom: 8,
  paddingLeft: 4,
  paddingRight: 4,
  width: CLOCK_HOUR_WIDTH,
  variants: [
    {
      props: { clockMeridiemMode },
      style: {
        backgroundColor: (theme.vars || theme).palette.primary.main,
        color: (theme.vars || theme).palette.primary.contrastText,
        '&:hover': {
          backgroundColor: (theme.vars || theme).palette.primary.light,
        },
      },
    },
  ],
});

const ClockAmButton = styled(IconButton, {
  name: 'MuiClock',
  slot: 'AmButton',
})<{ ownerState: ClockOwnerState }>(({ theme }) => { throw new Error("STUB"); });

const ClockPmButton = styled(IconButton, {
  name: 'MuiClock',
  slot: 'PmButton',
})<{ ownerState: ClockOwnerState }>(({ theme }) => { throw new Error("STUB"); });

const ClockMeridiemText = styled(Typography, {
  name: 'MuiClock',
  slot: 'MeridiemText',
})({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

/**
 * @ignore - internal component.
 */
export function Clock(inProps: ClockProps) {
    throw new Error("STUB");
}
