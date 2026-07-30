import * as React from 'react';
import clsx from 'clsx';
import { styled, useTheme, useThemeProps } from '@mui/material/styles';
import composeClasses from '@mui/utils/composeClasses';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import type { CSSTransitionProps } from 'react-transition-group/CSSTransition';
import type { TransitionGroupProps } from 'react-transition-group/TransitionGroup';
import type { PickersSlideTransitionClasses } from './pickersSlideTransitionClasses';
import {
  getPickersSlideTransitionUtilityClass,
  pickersSlideTransitionClasses,
} from './pickersSlideTransitionClasses';
import type { PickerOwnerState } from '../models/pickers';
import { usePickerPrivateContext } from '../internals/hooks/usePickerPrivateContext';

export type SlideDirection = 'right' | 'left';

export interface PickerSlideTransitionOwnerState extends PickerOwnerState {
  slideDirection: SlideDirection;
}

export interface ExportedSlideTransitionProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<PickersSlideTransitionClasses>;
}
export interface SlideTransitionProps
  extends Omit<CSSTransitionProps, 'timeout'>, ExportedSlideTransitionProps {
  children: React.ReactElement<any>;
  className?: string;
  reduceAnimations: boolean;
  slideDirection: SlideDirection;
  transKey: React.Key;
}

const useUtilityClasses = (
  classes: Partial<PickersSlideTransitionClasses> | undefined,
  ownerState: PickerSlideTransitionOwnerState,
) => {
  const { slideDirection } = ownerState;

  const slots = {
    root: ['root'],
    exit: ['slideExit'],
    enterActive: ['slideEnterActive'],
    enter: [`slideEnter-${slideDirection}`],
    exitActive: [`slideExitActiveLeft-${slideDirection}`],
  };

  return composeClasses(slots, getPickersSlideTransitionUtilityClass, classes);
};

const elementOverrides = [
  'slideEnter-left',
  'slideEnter-right',
  'slideEnterActive',
  'slideExit',
  'slideExitActiveLeft-left',
  'slideExitActiveLeft-right',
] as const;

const PickersSlideTransitionRoot = styled(TransitionGroup, {
  name: 'MuiPickersSlideTransition',
  slot: 'Root',
  overridesResolver: (_, styles) =>
    { throw new Error("STUB"); },
})<TransitionGroupProps & { ownerState?: PickerSlideTransitionOwnerState }>(({ theme }) => {
    throw new Error("STUB");
});

/**
 * @ignore - do not document.
 */
export function PickersSlideTransition(inProps: SlideTransitionProps) {
    throw new Error("STUB");
}
