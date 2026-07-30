'use client';
import * as React from 'react';
import clsx from 'clsx';
import type { TypographyProps } from '@mui/material/Typography';
import Typography from '@mui/material/Typography';
import { styled, useThemeProps } from '@mui/material/styles';
import composeClasses from '@mui/utils/composeClasses';
import type { PickersToolbarTextClasses } from './pickersToolbarTextClasses';
import { getPickersToolbarTextUtilityClass } from './pickersToolbarTextClasses';

export interface ExportedPickersToolbarTextProps extends Omit<
  TypographyProps,
  'classes' | 'variant' | 'align'
> {
  classes?: Partial<PickersToolbarTextClasses>;
}

export interface PickersToolbarTextProps
  extends Omit<TypographyProps, 'classes'>, Pick<ExportedPickersToolbarTextProps, 'classes'> {
  selected?: boolean;
  value: React.ReactNode;
}

const useUtilityClasses = (classes: Partial<PickersToolbarTextClasses> | undefined) => {
  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getPickersToolbarTextUtilityClass, classes);
};

const PickersToolbarTextRoot = styled(Typography, {
  name: 'MuiPickersToolbarText',
  slot: 'Root',
})<{
  component?: React.ElementType;
  ownerState: PickersToolbarTextProps;
}>(({ theme }) => { throw new Error("STUB"); });

export const PickersToolbarText = React.forwardRef<HTMLSpanElement, PickersToolbarTextProps>(
  function PickersToolbarText(inProps, ref) {
        throw new Error("STUB");
    },
);
