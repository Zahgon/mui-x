'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useMergedRefs } from '@base-ui/utils/useMergedRefs';
import { createSelectorMemoized, useStore } from '@base-ui/utils/store';
import { useResizeObserver } from '@mui/x-internals/useResizeObserver';
import type {
  EventCalendarViewDefinition,
  GridRowType,
  SchedulerProcessedDate,
} from '@mui/x-scheduler-internals/models';
import { getDayList } from '@mui/x-scheduler-internals/get-day-list';
import { getStartOfWeek, getEndOfWeek } from '@mui/x-scheduler-internals/internals';
import { useAdapterContext } from '@mui/x-scheduler-internals/use-adapter-context';
import { useEventCalendarView } from '@mui/x-scheduler-internals/use-event-calendar-view';
import { useEventCalendarStoreContext } from '@mui/x-scheduler-internals/use-event-calendar-store-context';
import type { EventCalendarState as State } from '@mui/x-scheduler-internals/use-event-calendar';
import { eventCalendarPreferenceSelectors } from '@mui/x-scheduler-internals/event-calendar-selectors';
import { CalendarGrid } from '@mui/x-scheduler-internals/calendar-grid';
import { useEventOccurrencesGroupedByDay } from '@mui/x-scheduler-internals/use-event-occurrences-grouped-by-day';
import { schedulerOtherSelectors } from '@mui/x-scheduler-internals/scheduler-selectors';
import clsx from 'clsx';
import type { MonthViewProps } from './MonthView.types';
import MonthViewWeekRow from './month-view-row/MonthViewWeekRow';
import { MoreEventsPopoverProvider } from '../internals/components/more-events-popover';
import { useEventCalendarStyledContext } from '../event-calendar/EventCalendarStyledContext';

const FIXED_CELL_WIDTH = 28;

const MonthViewRoot = styled('div', {
  name: 'MuiEventCalendar',
  slot: 'MonthView',
})(({ theme }) => { throw new Error("STUB"); });

const MonthViewGrid = styled(CalendarGrid.Root, {
  name: 'MuiEventCalendar',
  slot: 'MonthViewGrid',
})({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  minHeight: 0,
});

interface MonthViewRowGridProps {
  showWeekNumber?: boolean;
}

const MonthViewHeader = styled(CalendarGrid.HeaderRow, {
  name: 'MuiEventCalendar',
  slot: 'MonthViewHeader',
})<{ ownerState: MonthViewRowGridProps }>(({ theme, ownerState }) => { throw new Error("STUB"); });

const MonthViewHeaderCell = styled(CalendarGrid.HeaderCell, {
  name: 'MuiEventCalendar',
  slot: 'MonthViewHeaderCell',
})(({ theme }) => { throw new Error("STUB"); });

const MonthViewWeekHeaderCell = styled('div', {
  name: 'MuiEventCalendar',
  slot: 'MonthViewWeekHeaderCell',
})(({ theme }) => { throw new Error("STUB"); });

const MonthViewBody = styled('div', {
  name: 'MuiEventCalendar',
  slot: 'MonthViewBody',
})({
  flex: 1,
  display: 'grid',
  gridAutoRows: 'minmax(0, 1fr)',
  position: 'relative',
  flexGrow: 1,
  overflow: 'hidden',
});

const MONTH_VIEW_ROW_TYPES: GridRowType[] = ['header', 'day-grid'];

const CELL_PADDING = 5; // theme.spacing(0.5) * 2
const DAY_NUMBER_HEADER_HEIGHT = 22; // event height (18px) + gap (4px)
const EVENT_HEIGHT = 18;
const EVENT_GAP = 4; // theme.spacing(0.5) = 4px

const MONTH_VIEW_DEFINITION: EventCalendarViewDefinition = {
  siblingVisibleDateGetter: ({ state, delta }) =>
    { throw new Error("STUB"); },
  visibleDaysSelector: createSelectorMemoized(
    (state: State) => { throw new Error("STUB"); },
    schedulerOtherSelectors.visibleDate,
    eventCalendarPreferenceSelectors.showWeekends,
    eventCalendarPreferenceSelectors.weekStartsOn,
    (adapter, visibleDate, showWeekends, weekStartsOn) =>
      { throw new Error("STUB"); },
  ),
};

/**
 * A Month View to use inside the Event Calendar.
 */
export const MonthView = React.memo(
  React.forwardRef(function MonthView(
    props: MonthViewProps,
    forwardedRef: React.ForwardedRef<HTMLDivElement>,
  ) {
      throw new Error("STUB");
  }),
);
