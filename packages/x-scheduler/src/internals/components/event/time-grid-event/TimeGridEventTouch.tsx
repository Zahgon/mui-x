'use client';
import * as React from 'react';
import clsx from 'clsx';
import type { CSSObject } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { CalendarGrid } from '@mui/x-scheduler-internals/calendar-grid';
import { EventDragPreview } from '../../../components/event-drag-preview';
import { useEventCalendarStyledContext } from '../../../../event-calendar/EventCalendarStyledContext';
import type { PaletteName } from '../../../utils/tokens';
import type { TimeGridEventProps } from './TimeGridEvent.types';
import { useTimeGridEvent } from './useTimeGridEvent';
import {
  getTimeGridEventRootStyles,
  linesClampStyles,
  TimeGridEventPlaceholder,
} from './TimeGridEventShared';

const TimeGridEventTouchRoot = styled(CalendarGrid.TimeEvent, {
  name: 'MuiEventCalendar',
  slot: 'TimeGridEventTouchRoot',
})<{ palette?: PaletteName }>(({ theme }) => { throw new Error("STUB"); });

const TOUCH_TITLE_LINE_HEIGHT_PX = 12;
const TOUCH_TITLE_MAX_LINES = 24;

const touchTitleLineClampSteps: CSSObject = {};
for (let lines = 2; lines <= TOUCH_TITLE_MAX_LINES; lines += 1) {
  const minHeight = lines * TOUCH_TITLE_LINE_HEIGHT_PX;
  touchTitleLineClampSteps[`@container (min-height: ${minHeight}px)`] = {
    WebkitLineClamp: lines,
    maxHeight: `${lines * TOUCH_TITLE_LINE_HEIGHT_PX}px`,
  };
}

const TimeGridEventTouchTitle = styled(Typography, {
  name: 'MuiEventCalendar',
  slot: 'TimeGridEventTouchTitle',
})(({ theme }) => { throw new Error("STUB"); });

const TimeGridEventTouchResizeHandler = styled(CalendarGrid.TimeEventResizeHandler, {
  name: 'MuiEventCalendar',
  slot: 'TimeGridEventTouchResizeHandler',
})({
  position: 'absolute',
  height: 4,
  left: 0,
  right: 0,
  zIndex: 3,
  cursor: 'ns-resize',
  '&[data-start]': {
    top: 0,
  },
  '&[data-end]': {
    bottom: 0,
  },
});

export const TimeGridEventTouch = React.forwardRef(function TimeGridEventTouch(
  props: TimeGridEventProps,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
    throw new Error("STUB");
});
