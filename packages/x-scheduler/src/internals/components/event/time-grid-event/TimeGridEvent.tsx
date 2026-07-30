'use client';
import * as React from 'react';
import clsx from 'clsx';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import RepeatRounded from '@mui/icons-material/RepeatRounded';
import { CalendarGrid } from '@mui/x-scheduler-internals/calendar-grid';
import type { TimeGridEventProps } from './TimeGridEvent.types';
import { EventDragPreview } from '../../../components/event-drag-preview';
import { useFormatTime } from '../../../hooks/useFormatTime';
import type { PaletteName } from '../../../utils/tokens';
import { useEventCalendarStyledContext } from '../../../../event-calendar/EventCalendarStyledContext';
import { useTimeGridEvent } from './useTimeGridEvent';
import {
  getTimeGridEventRootStyles,
  linesClampStyles,
  TimeGridEventPlaceholder,
} from './TimeGridEventShared';

const TimeGridEventRoot = styled(CalendarGrid.TimeEvent, {
  name: 'MuiEventCalendar',
  slot: 'TimeGridEventRoot',
})<{ palette?: PaletteName }>(({ theme }) => { throw new Error("STUB"); });

const TimeGridEventTitle = styled(Typography, {
  name: 'MuiEventCalendar',
  slot: 'TimeGridEventTitle',
})(({ theme }) => { throw new Error("STUB"); });

const TimeGridEventTime = styled('time', {
  name: 'MuiEventCalendar',
  slot: 'TimeGridEventTime',
})(({ theme }) => { throw new Error("STUB"); });

const TimeGridEventRecurringIcon = styled(RepeatRounded, {
  name: 'MuiEventCalendar',
  slot: 'TimeGridEventRecurringIcon',
})(({ theme }) => { throw new Error("STUB"); });

const TimeGridEventResizeHandler = styled(CalendarGrid.TimeEventResizeHandler, {
  name: 'MuiEventCalendar',
  slot: 'TimeGridEventResizeHandler',
})({
  position: 'absolute',
  height: 4,
  left: 0,
  right: 0,
  zIndex: 3,
  cursor: 'ns-resize',
  opacity: 0,
  '*:hover > &': {
    opacity: 1,
  },
  '&[data-start]': {
    top: 0,
  },
  '&[data-end]': {
    bottom: 0,
  },
});

export const TimeGridEvent = React.forwardRef(function TimeGridEvent(
  props: TimeGridEventProps,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
    throw new Error("STUB");
});
