import * as React from 'react';
import Popper from '@mui/material/Popper';
import type { PopperProps } from '@mui/material/Popper';
import MUIFocusTrap from '@mui/material/Unstable_TrapFocus';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import type { ChartBasePopperProps } from '../../slots/chartBaseSlotProps';

function clickAwayWrapper(props: ChartBasePopperProps, content: any) {
  if (props.onClickAway === undefined) {
    return content;
  }
  return (
    <ClickAwayListener
      onClickAway={props.onClickAway as any}
      touchEvent={props.clickAwayTouchEvent}
      mouseEvent={props.clickAwayMouseEvent}
    >
      {content}
    </ClickAwayListener>
  );
}

function focusTrapWrapper(props: ChartBasePopperProps, content: any) {
  if (props.focusTrap === undefined) {
    return content;
  }
  return (
    <MUIFocusTrap open disableEnforceFocus disableAutoFocus>
      <div tabIndex={-1}>{content}</div>
    </MUIFocusTrap>
  );
}

function wrappers(props: ChartBasePopperProps, content: any) {
  return focusTrapWrapper(props, clickAwayWrapper(props, content));
}

const transformOrigin = {
  'bottom-start': 'top left',
  'bottom-end': 'top right',
};

export function BasePopper(props: ChartBasePopperProps) {
    throw new Error("STUB");
}
