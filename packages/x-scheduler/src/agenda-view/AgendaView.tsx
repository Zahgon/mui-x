'use client';
import * as React from 'react';
import { useStore } from '@base-ui/utils/store';
import { styled } from '@mui/material/styles';
import { useMergedRefs } from '@base-ui/utils/useMergedRefs';
import type { EventCalendarViewDefinition } from '@mui/x-scheduler-internals/models';
import { useAdapterContext } from '@mui/x-scheduler-internals/use-adapter-context';
import { useEventCalendarView } from '@mui/x-scheduler-internals/use-event-calendar-view';
import { sortEventOccurrences } from '@mui/x-scheduler-internals/sort-event-occurrences';
import {
  eventCalendarAgendaSelectors,
  eventCalendarPreferenceSelectors,
} from '@mui/x-scheduler-internals/event-calendar-selectors';
import { useEventOccurrencesGroupedByDay } from '@mui/x-scheduler-internals/use-event-occurrences-grouped-by-day';
import { useEventCalendarStoreContext } from '@mui/x-scheduler-internals/use-event-calendar-store-context';
import { AGENDA_VIEW_DAYS_AMOUNT } from '@mui/x-scheduler-internals/constants';
import { getStartOfWeek, getWeekNumber } from '@mui/x-scheduler-internals/internals';
import {
  schedulerNowSelectors,
  schedulerOtherSelectors,
} from '@mui/x-scheduler-internals/scheduler-selectors';
import clsx from 'clsx';
import type { AgendaViewProps } from './AgendaView.types';
import { EventItem } from '../internals/components/event/event-item/EventItem';
import { EventSkeleton } from '../internals/components/event-skeleton';
import { useEventCalendarStyledContext } from '../event-calendar/EventCalendarStyledContext';
import { EventDialogTrigger } from '../internals/components/event-dialog';

const AgendaViewRoot = styled('div', {
  name: 'MuiEventCalendar',
  slot: 'AgendaView',
})(({ theme }) => { throw new Error("STUB"); });

const AgendaViewRow = styled('section', {
  name: 'MuiEventCalendar',
  slot: 'AgendaViewRow',
})(({ theme }) => { throw new Error("STUB"); });

const DayHeaderCell = styled('header', {
  name: 'MuiEventCalendar',
  slot: 'AgendaViewDayHeaderCell',
})(({ theme }) => { throw new Error("STUB"); });

const DayNumberCell = styled('span', {
  name: 'MuiEventCalendar',
  slot: 'AgendaViewDayNumberCell',
})(({ theme }) => { throw new Error("STUB"); });

const WeekDayCell = styled('div', {
  name: 'MuiEventCalendar',
  slot: 'AgendaViewWeekDayCell',
})(({ theme }) => { throw new Error("STUB"); });

const AgendaWeekDayNameLabel = styled('span', {
  name: 'MuiEventCalendar',
  slot: 'AgendaViewWeekDayNameLabel',
})(({ theme }) => { throw new Error("STUB"); });

const AgendaYearAndMonthLabel = styled('span', {
  name: 'MuiEventCalendar',
  slot: 'AgendaViewYearAndMonthLabel',
})(({ theme }) => { throw new Error("STUB"); });

const EventsList = styled('ul', {
  name: 'MuiEventCalendar',
  slot: 'AgendaViewEventsList',
})(({ theme }) => { throw new Error("STUB"); });

const AgendaViewWeekNumberLabel = styled('span', {
  name: 'MuiEventCalendar',
  slot: 'AgendaViewWeekNumberLabel',
})(({ theme }) => { throw new Error("STUB"); });

const AgendaViewWeekNumberRow = styled('div', {
  name: 'MuiEventCalendar',
  slot: 'AgendaViewWeekNumberRow',
})(({ theme }) => { throw new Error("STUB"); });

const AGENDA_VIEW_DEFINITION: EventCalendarViewDefinition = {
  siblingVisibleDateGetter: ({ state, delta }) =>
    { throw new Error("STUB"); },
  visibleDaysSelector: eventCalendarAgendaSelectors.visibleDays,
};

/**
 * An Agenda View to use inside the Event Calendar.
 */
export const AgendaView = React.memo(
  React.forwardRef(function AgendaView(
    props: AgendaViewProps,
    forwardedRef: React.ForwardedRef<HTMLDivElement>,
  ) {
      throw new Error("STUB");
  }),
);
