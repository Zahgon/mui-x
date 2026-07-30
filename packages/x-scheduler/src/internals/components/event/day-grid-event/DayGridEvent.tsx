'use client';
import * as React from 'react';
import clsx from 'clsx';
import { styled } from '@mui/material/styles';
import { createSelector, useStore } from '@base-ui/utils/store';
import RepeatRounded from '@mui/icons-material/RepeatRounded';
import { CalendarGrid } from '@mui/x-scheduler-internals/calendar-grid';
import type {
  SchedulerEventSide,
  SchedulerRenderableEventOccurrence,
} from '@mui/x-scheduler-internals/models';
import type { EventCalendarState } from '@mui/x-scheduler-internals/use-event-calendar';
import {
  schedulerEventSelectors,
  schedulerResourceSelectors,
} from '@mui/x-scheduler-internals/scheduler-selectors';
import { useEventCalendarStoreContext } from '@mui/x-scheduler-internals/use-event-calendar-store-context';
import { eventCalendarViewSelectors } from '@mui/x-scheduler-internals/event-calendar-selectors';
import { getPrimaryResourceId } from '@mui/x-scheduler-internals/internals';
import type { DayGridEventProps } from './DayGridEvent.types';
import { isOccurrenceAllDayOrMultipleDay } from '../../../utils/event-utils';
import { EventDragPreview } from '../../../components/event-drag-preview';
import { useFormatTime } from '../../../hooks/useFormatTime';
import type { PaletteName } from '../../../utils/tokens';
import { getPaletteVariants } from '../../../utils/tokens';
import { useEventCalendarStyledContext } from '../../../../event-calendar/EventCalendarStyledContext';
import { eventCalendarClasses } from '../../../../event-calendar/eventCalendarClasses';
import { ARROW_DEPTH, LEFT_ARROW_CLIP, RIGHT_ARROW_CLIP, BOTH_ARROWS_CLIP } from '../arrowClips';

const DayGridEventBaseStyles = (theme: any) => ({
  containerType: 'inline-size',
  borderRadius: theme.shape.borderRadius * 0.75,
  minWidth: 18,
  height: 18,
  cursor: 'pointer',
  position: 'relative',
  zIndex: 1,
  gridRow: 'var(--grid-row)',
  gridColumn: 1,
  padding: `0 ${theme.spacing(0.5)}`,
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  width: `calc(var(--grid-column-span) * 100% + (var(--grid-column-span) - 1) * (2 * ${theme.spacing(0.5)} + 1px))`,
  '&[data-dragging], &[data-resizing]': {
    opacity: 0.5,
  },
  variants: getPaletteVariants(theme),
});

const DayGridEventRoot = styled(CalendarGrid.DayEvent, {
  name: 'MuiEventCalendar',
  slot: 'DayGridEvent',
})<{ 'data-variant'?: 'filled' | 'invisible' | 'compact' | 'placeholder'; palette?: PaletteName }>(
  ({ theme }) => { throw new Error("STUB"); },
);

const DayGridEventPlaceholder = styled(CalendarGrid.DayEventPlaceholder, {
  name: 'MuiEventCalendar',
  slot: 'DayGridEventPlaceholder',
})<{ palette?: PaletteName }>(({ theme }) => { throw new Error("STUB"); });

const DayGridEventTitle = styled('p', {
  name: 'MuiEventCalendar',
  slot: 'DayGridEventTitle',
})(({ theme }) => { throw new Error("STUB"); });

const DayGridEventTime = styled('time', {
  name: 'MuiEventCalendar',
  slot: 'DayGridEventTime',
})(({ theme }) => { throw new Error("STUB"); });

const DayGridEventRecurringIcon = styled(RepeatRounded, {
  name: 'MuiEventCalendar',
  slot: 'DayGridEventRecurringIcon',
})(({ theme }) => { throw new Error("STUB"); });

const DayGridEventResizeHandler = styled(CalendarGrid.DayEventResizeHandler, {
  name: 'MuiEventCalendar',
  slot: 'DayGridEventResizeHandler',
})({
  position: 'absolute',
  width: 4,
  top: 0,
  bottom: 0,
  zIndex: 3,
  cursor: 'ew-resize',
  opacity: 0,
  '*:hover > &': {
    opacity: 1,
  },
  '&[data-start]': {
    left: 0,
  },
  '&[data-end]': {
    right: 0,
  },
});

const DayGridEventCardWrapper = styled('div', {
  name: 'MuiEventCalendar',
  slot: 'DayGridEventCardWrapper',
})(({ theme }) => { throw new Error("STUB"); });

const DayGridEventCardContent = styled('p', {
  name: 'MuiEventCalendar',
  slot: 'DayGridEventCardContent',
})({
  margin: 0,
  height: 20,
  lineHeight: '20px',
});

const EventColorIndicator = styled('span', {
  name: 'MuiEventCalendar',
  slot: 'EventColorIndicator',
})({
  width: 8,
  height: 8,
  borderRadius: '50%',
  flexShrink: 0,
  backgroundColor: 'var(--event-main)',
  marginTop: 2,
});

const DayGridEventLinesClamp = styled('span', {
  name: 'MuiEventCalendar',
  slot: 'DayGridEventLinesClamp',
})({
  display: '-webkit-box',
  WebkitLineClamp: 'var(--number-of-lines)',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  wordBreak: 'break-word',
  overflowWrap: 'break-word',
  flexGrow: 1,
});

const isResizableSelector = createSelector(
  (
    state: EventCalendarState,
    side: SchedulerEventSide,
    occurrence: SchedulerRenderableEventOccurrence,
  ) => {
        throw new Error("STUB");
    },
);

export const DayGridEvent = React.forwardRef(function DayGridEvent(
  props: DayGridEventProps,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
    throw new Error("STUB");
});
