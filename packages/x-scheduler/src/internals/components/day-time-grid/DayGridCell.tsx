'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useStore } from '@base-ui/utils/store';
import { CalendarGrid } from '@mui/x-scheduler-internals/calendar-grid';
import { isWeekend } from '@mui/x-scheduler-internals/use-adapter';
import { useAdapterContext } from '@mui/x-scheduler-internals/use-adapter-context';
import type { useEventOccurrencesWithDayGridPosition } from '@mui/x-scheduler-internals/use-event-occurrences-with-day-grid-position';
import { useEventCalendarStoreContext } from '@mui/x-scheduler-internals/use-event-calendar-store-context';
import { eventCalendarOccurrencePlaceholderSelectors } from '@mui/x-scheduler-internals/event-calendar-selectors';
import { schedulerOtherSelectors } from '@mui/x-scheduler-internals/scheduler-selectors';
import { DayGridEvent } from '../event';
import { EventDialogTrigger } from '../event-dialog';
import { useEventDialogContext } from '../event-dialog/EventDialog';
import { EventSkeleton } from '../event-skeleton';
import { useEventCalendarStyledContext } from '../../../event-calendar/EventCalendarStyledContext';
import { getCellFocusBackground } from '../../utils/tokens';

const EVENT_HEIGHT = 22;

const DayTimeGridAllDayEventsCell = styled(CalendarGrid.DayCell, {
  name: 'MuiEventCalendar',
  slot: 'DayTimeGridAllDayEventsCell',
})(({ theme }) => { throw new Error("STUB"); });

const DayTimeGridAllDayEventsCellEvents = styled('div', {
  name: 'MuiEventCalendar',
  slot: 'DayTimeGridAllDayEventsCellEvents',
})(({ theme }) => { throw new Error("STUB"); });

const DayTimeGridAllDayEventContainer = styled('div', {
  name: 'MuiEventCalendar',
  slot: 'DayTimeGridAllDayEventContainer',
})({
  display: 'contents',
});

export function DayGridCell(props: DayGridCellProps) {
    throw new Error("STUB");
}

interface DayGridCellProps {
  day: useEventOccurrencesWithDayGridPosition.DayData;
  row: useEventOccurrencesWithDayGridPosition.ReturnValue;
  colIndex: number;
}

/**
 * Makes sure any event dropped in the day cell is turned into an all-day event.
 */
function addPropertiesToDroppedEvent() {
  return {
    allDay: true,
  };
}
