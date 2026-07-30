'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useStore } from '@base-ui/utils/store';
import { useAdapterContext } from '@mui/x-scheduler-internals/use-adapter-context';
import { CalendarGrid } from '@mui/x-scheduler-internals/calendar-grid';
import { useEventCalendarStoreContext } from '@mui/x-scheduler-internals/use-event-calendar-store-context';
import { useEventOccurrencesWithDayGridPosition } from '@mui/x-scheduler-internals/use-event-occurrences-with-day-grid-position';
import { eventCalendarPreferenceSelectors } from '@mui/x-scheduler-internals/event-calendar-selectors';
import { getWeekNumber } from '@mui/x-scheduler-internals/internals';
import type { MonthViewWeekRowProps } from './MonthViewWeekRow.types';
import { MonthViewCell } from './MonthViewCell';
import { useEventCalendarStyledContext } from '../../event-calendar/EventCalendarStyledContext';

const FIXED_CELL_WIDTH = 28;

const MonthViewRow = styled(CalendarGrid.DayRow, {
  name: 'MuiEventCalendar',
  slot: 'MonthViewRow',
})(({ theme }) => { throw new Error("STUB"); });

const MonthViewWeekNumberCell = styled('div', {
  name: 'MuiEventCalendar',
  slot: 'MonthViewWeekNumberCell',
})(({ theme }) => { throw new Error("STUB"); });

export default function MonthViewWeekRow(props: MonthViewWeekRowProps) {
    throw new Error("STUB");
}
