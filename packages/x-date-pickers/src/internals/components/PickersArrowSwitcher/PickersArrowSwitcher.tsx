'use client';
import * as React from 'react';
import clsx from 'clsx';
import Typography from '@mui/material/Typography';
import { useRtl } from '@mui/system/RtlProvider';
import { styled, useThemeProps } from '@mui/material/styles';
import composeClasses from '@mui/utils/composeClasses';
import useSlotProps from '@mui/utils/useSlotProps';
import IconButton from '@mui/material/IconButton';
import { ArrowLeftIcon, ArrowRightIcon } from '../../../icons';
import type {
  PickersArrowSwitcherOwnerState,
  PickersArrowSwitcherProps,
} from './PickersArrowSwitcher.types';
import type { PickersArrowSwitcherClasses } from './pickersArrowSwitcherClasses';
import { getPickersArrowSwitcherUtilityClass } from './pickersArrowSwitcherClasses';
import { usePickerPrivateContext } from '../../hooks/usePickerPrivateContext';
import type { PickerOwnerState } from '../../../models';

const PickersArrowSwitcherRoot = styled('div', {
  name: 'MuiPickersArrowSwitcher',
  slot: 'Root',
})<{
  ownerState: PickerOwnerState;
}>({
  display: 'flex',
});

const PickersArrowSwitcherSpacer = styled('div', {
  name: 'MuiPickersArrowSwitcher',
  slot: 'Spacer',
})<{
  ownerState: PickerOwnerState;
}>(({ theme }) => { throw new Error("STUB"); });

const PickersArrowSwitcherButton = styled(IconButton, {
  name: 'MuiPickersArrowSwitcher',
  slot: 'Button',
})<{
  ownerState: PickersArrowSwitcherOwnerState;
}>({
  variants: [
    {
      props: { isButtonHidden: true },
      style: { visibility: 'hidden' },
    },
  ],
});

const useUtilityClasses = (classes: Partial<PickersArrowSwitcherClasses> | undefined) => {
  const slots = {
    root: ['root'],
    spacer: ['spacer'],
    button: ['button'],
    previousIconButton: ['previousIconButton'],
    nextIconButton: ['nextIconButton'],
    leftArrowIcon: ['leftArrowIcon'],
    rightArrowIcon: ['rightArrowIcon'],
  };

  return composeClasses(slots, getPickersArrowSwitcherUtilityClass, classes);
};

export const PickersArrowSwitcher = React.forwardRef(function PickersArrowSwitcher(
  inProps: PickersArrowSwitcherProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
});
