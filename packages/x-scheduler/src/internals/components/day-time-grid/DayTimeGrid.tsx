'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useMergedRefs } from '@base-ui/utils/useMergedRefs';
import { useIsoLayoutEffect } from '@base-ui/utils/useIsoLayoutEffect';
import { useStore } from '@base-ui/utils/store';
import { useResizeObserver } from '@mui/x-internals/useResizeObserver';
import { useEventOccurrencesGroupedByDay } from '@mui/x-scheduler-internals/use-event-occurrences-grouped-by-day';
import { useEventOccurrencesWithDayGridPosition } from '@mui/x-scheduler-internals/use-event-occurrences-with-day-grid-position';
import { eventCalendarViewSelectors } from '@mui/x-scheduler-internals/event-calendar-selectors';
import type {
  SchedulerEventOccurrence,
  SchedulerProcessedDate,
} from '@mui/x-scheduler-internals/models';
import { isWeekend } from '@mui/x-scheduler-internals/use-adapter';
import { useAdapterContext } from '@mui/x-scheduler-internals/use-adapter-context';
import { CalendarGrid } from '@mui/x-scheduler-internals/calendar-grid';
import { useEventCalendarStoreContext } from '@mui/x-scheduler-internals/use-event-calendar-store-context';
import { schedulerNowSelectors } from '@mui/x-scheduler-internals/scheduler-selectors';
import clsx from 'clsx';
import type { DayTimeGridProps } from './DayTimeGrid.types';
import { TimeGridColumn } from './TimeGridColumn';
import { DayGridCell } from './DayGridCell';
import { getTimeGridHourRange } from '../../utils/getTimeGridHourRange';
import { useFormatTime } from '../../../internals/hooks/useFormatTime';
import { isOccurrenceAllDayOrMultipleDay } from '../../utils/event-utils';
import { useEventCalendarStyledContext } from '../../../event-calendar/EventCalendarStyledContext';
import { eventCalendarClasses } from '../../../event-calendar/eventCalendarClasses';
import { eventCalendarContentCompactQuery } from '../../constants/responsiveTypography';

const HOUR_HEIGHT = 46;
// Number of hours displayed in the grid. Defaults to a full day; overridden per render via the
// `--hours-count` CSS variable when a view limits its visible hour range.
const DEFAULT_HOURS_IN_DAY = 24;

const DayTimeGridContainer = styled(CalendarGrid.Root, {
  name: 'MuiEventCalendar',
  slot: 'DayTimeGridContainer',
})(({ theme }) => { throw new Error("STUB"); });

const DayTimeGridRoot = styled('div', {
  name: 'MuiEventCalendar',
  slot: 'DayTimeGrid',
})({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  overflowY: 'auto',
});

const DayTimeGridHeader = styled(CalendarGrid.HeaderRow, {
  name: 'MuiEventCalendar',
  slot: 'DayTimeGridHeader',
})(({ theme }) => { throw new Error("STUB"); });

const DayTimeGridAllDayEventsGrid = styled('div', {
  name: 'MuiEventCalendar',
  slot: 'DayTimeGridAllDayEventsGrid',
})(({ theme }) => { throw new Error("STUB"); });

const DayTimeGridAllDayEventsRow = styled(CalendarGrid.DayRow, {
  name: 'MuiEventCalendar',
  slot: 'DayTimeGridAllDayEventsRow',
})(({ theme }) => { throw new Error("STUB"); });

const DayTimeGridAllDayEventsCell = styled('div', {
  name: 'MuiEventCalendar',
  slot: 'DayTimeGridAllDayEventsCell',
})(({ theme }) => { throw new Error("STUB"); });

const DayTimeGridAllDayEventsHeaderCell = styled('div', {
  name: 'MuiEventCalendar',
  slot: 'DayTimeGridAllDayEventsHeaderCell',
})(({ theme }) => { throw new Error("STUB"); });

const DayTimeGridHeaderContent = styled('span', {
  name: 'MuiEventCalendar',
  slot: 'DayTimeGridHeaderContent',
})(({ theme }) => { throw new Error("STUB"); });

const DayTimeGridHeaderCell = styled(CalendarGrid.HeaderCell, {
  name: 'MuiEventCalendar',
  slot: 'DayTimeGridHeaderCell',
})(({ theme }) => { throw new Error("STUB"); });

const DayTimeGridHeaderButton = styled('button', {
  name: 'MuiEventCalendar',
  slot: 'DayTimeGridHeaderButton',
})(({ theme }) => { throw new Error("STUB"); });

const DayTimeGridHeaderDayName = styled('span', {
  name: 'MuiEventCalendar',
  slot: 'DayTimeGridHeaderDayName',
})(({ theme }) => { throw new Error("STUB"); });

const DayTimeGridHeaderDayNumber = styled('span', {
  name: 'MuiEventCalendar',
  slot: 'DayTimeGridHeaderDayNumber',
})(({ theme }) => { throw new Error("STUB"); });

const DayTimeGridBody = styled('div', {
  name: 'MuiEventCalendar',
  slot: 'DayTimeGridBody',
})({
  flex: 1,
  height: '100%',
});

const DayTimeGridScrollableContent = styled(CalendarGrid.TimeScrollableContent, {
  name: 'MuiEventCalendar',
  slot: 'DayTimeGridScrollableContent',
})({
  display: 'flex',
  height: `calc(var(--hour-height) * var(--hours-count, ${DEFAULT_HOURS_IN_DAY}))`,
  position: 'relative',
  overflowY: 'auto',
  overflowX: 'clip',
});

const DayTimeGridTimeAxis = styled('div', {
  name: 'MuiEventCalendar',
  slot: 'DayTimeGridTimeAxis',
})({
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  width: 'var(--fixed-cell-width)',
});

const DayTimeGridTimeAxisCell = styled('div', {
  name: 'MuiEventCalendar',
  slot: 'DayTimeGridTimeAxisCell',
})(({ theme }) => { throw new Error("STUB"); });

const DayTimeGridTimeAxisText = styled('time', {
  name: 'MuiEventCalendar',
  slot: 'DayTimeGridTimeAxisText',
})(({ theme }) => { throw new Error("STUB"); });

const DayTimeGridGrid = styled('div', {
  name: 'MuiEventCalendar',
  slot: 'DayTimeGridGrid',
})(({ theme }) => { throw new Error("STUB"); });

export const DayTimeGrid = React.forwardRef(function DayTimeGrid(
  props: DayTimeGridProps,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
    throw new Error("STUB");
});
