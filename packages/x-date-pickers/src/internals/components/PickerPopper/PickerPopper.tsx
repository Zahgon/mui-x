'use client';
import * as React from 'react';
import useSlotProps from '@mui/utils/useSlotProps';
import Grow from '@mui/material/Grow';
import Fade from '@mui/material/Fade';
import type { PaperProps as MuiPaperProps, PaperProps } from '@mui/material/Paper';
import MuiPaper from '@mui/material/Paper';
import type {
  PopperProps as MuiPopperProps,
  PopperPlacementType,
  PopperProps,
} from '@mui/material/Popper';
import MuiPopper from '@mui/material/Popper';
import type { TrapFocusProps as MuiTrapFocusProps } from '@mui/material/Unstable_TrapFocus';
import BaseFocusTrap from '@mui/material/Unstable_TrapFocus';
import useForkRef from '@mui/utils/useForkRef';
import useEventCallback from '@mui/utils/useEventCallback';
import ownerDocument from '@mui/utils/ownerDocument';
import composeClasses from '@mui/utils/composeClasses';
import { styled, useThemeProps } from '@mui/material/styles';
import type { TransitionProps as MuiTransitionProps } from '@mui/material/transitions';
import type { MuiEvent, SlotComponentPropsFromProps } from '@mui/x-internals/types';
import type { WithDataAttributes } from '@mui/utils/types';
import { isElementInteractive } from '../../utils/isElementInteractive';
import type { PickerPopperClasses } from './pickerPopperClasses';
import { getPickerPopperUtilityClass } from './pickerPopperClasses';
import { executeInTheNextEventLoopTick, getActiveElement } from '../../utils/utils';
import { usePickerPrivateContext } from '../../hooks/usePickerPrivateContext';
import type { PickerOwnerState } from '../../../models';
import { usePickerContext } from '../../../hooks';

export interface PickerPopperOwnerState extends PickerOwnerState {
  popperPlacement: PopperPlacementType;
}

export interface PickerPopperSlots {
  /**
   * Custom component for the paper rendered inside the desktop picker's Popper.
   * @default PickerPopperPaper
   */
  desktopPaper?: React.JSXElementConstructor<MuiPaperProps>;
  /**
   * Custom component for the desktop popper [Transition](https://mui.com/material-ui/transitions/).
   * @default Grow or Fade from '@mui/material' when `reduceAnimations` is `true`.
   */
  desktopTransition?: React.JSXElementConstructor<MuiTransitionProps>;
  /**
   * Custom component for trapping the focus inside the views on desktop.
   * @default TrapFocus from '@mui/material'.
   */
  desktopTrapFocus?: React.JSXElementConstructor<MuiTrapFocusProps>;
  /**
   * Custom component for the popper inside which the views are rendered on desktop.
   * @default Popper from '@mui/material'.
   */
  popper?: React.ElementType<MuiPopperProps>;
}

export interface PickerPopperSlotProps {
  /**
   * Props passed down to the desktop [Paper](https://mui.com/material-ui/api/paper/) component.
   */
  desktopPaper?: SlotComponentPropsFromProps<PaperProps, {}, PickerPopperOwnerState>;
  /**
   * Props passed down to the desktop [Transition](https://mui.com/material-ui/transitions/) component.
   */
  desktopTransition?: WithDataAttributes<Partial<MuiTransitionProps>>;
  /**
   * Props passed down to the [FocusTrap](https://mui.com/base-ui/react-focus-trap/) component on desktop.
   */
  // Not widened with `data-*`: FocusTrap renders no DOM element and its
  // `exactProp` guard rejects unknown props (a stray `data-*` throws in dev),
  // so the attribute could never reach the DOM.
  desktopTrapFocus?: Partial<MuiTrapFocusProps>;
  /**
   * Props passed down to [Popper](https://mui.com/material-ui/api/popper/) component.
   */
  popper?: SlotComponentPropsFromProps<PopperProps, {}, PickerOwnerState>;
}

export interface ExportedPickerPopperProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<PickerPopperClasses>;
  /**
   * @default "bottom-start"
   */
  // Never used in the codebase, only here for theme augmentation.
  placement?: MuiPopperProps['placement'];
}

export interface PickerPopperProps extends ExportedPickerPopperProps {
  children?: React.ReactNode;
  slots?: PickerPopperSlots;
  slotProps?: PickerPopperSlotProps;
}

const useUtilityClasses = (classes: Partial<PickerPopperClasses> | undefined) => {
  const slots = {
    root: ['root'],
    paper: ['paper'],
  };

  return composeClasses(slots, getPickerPopperUtilityClass, classes);
};

const PickerPopperRoot = styled(MuiPopper, {
  name: 'MuiPickerPopper',
  slot: 'Root',
})<{ ownerState: PickerOwnerState }>(({ theme }) => { throw new Error("STUB"); });

const PickerPopperPaper = styled(MuiPaper, {
  name: 'MuiPickerPopper',
  slot: 'Paper',
})<{
  ownerState: PickerPopperOwnerState;
}>({
  outline: 0,
  transformOrigin: 'top center',
  variants: [
    {
      props: ({ popperPlacement }) => { throw new Error("STUB"); },
      style: {
        transformOrigin: 'bottom center',
      },
    },
  ],
});

function clickedRootScrollbar(event: MouseEvent, doc: Document) {
    throw new Error("STUB");
}

type OnClickAway = (event: MouseEvent | TouchEvent) => void;

/**
 * Based on @mui/material/ClickAwayListener without the customization.
 * We can probably strip away even more since children won't be portaled.
 * @param {boolean} active Only listen to clicks when the popper is opened.
 * @param {(event: MouseEvent | TouchEvent) => void} onClickAway The callback to call when clicking outside the popper.
 * @returns {Array} The ref and event handler to listen to the outside clicks.
 */
function useClickAwayListener(
  active: boolean,
  onClickAway: OnClickAway,
): [React.Ref<Element>, React.MouseEventHandler, React.TouchEventHandler] {
    throw new Error("STUB");
}

interface PickerPopperPaperWrapperProps {
  PaperComponent: React.ElementType;
  children: React.ReactNode;
  ownerState: PickerPopperOwnerState;
  paperClasses: string;
  onPaperClick: React.MouseEventHandler<HTMLDivElement>;
  onPaperTouchStart: React.TouchEventHandler<HTMLDivElement>;
  paperSlotProps?: PickerPopperSlotProps['desktopPaper'];
}

const PickerPopperPaperWrapper = React.forwardRef(
  (props: PickerPopperPaperWrapperProps, ref: React.Ref<HTMLDivElement>) => {
        throw new Error("STUB");
    },
);

const isEventTargetInteractive = (eventTarget: EventTarget) => {
    throw new Error("STUB");
};

export function PickerPopper(inProps: PickerPopperProps) {
    throw new Error("STUB");
}
