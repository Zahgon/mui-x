'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useStore } from '@base-ui/utils/store';
import Button from '@mui/material/Button';
import { useMergedRefs } from '@base-ui/utils/useMergedRefs';
import { isWeekend } from '@mui/x-scheduler-internals/use-adapter';
import { useAdapterContext } from '@mui/x-scheduler-internals/use-adapter-context';
import { CalendarGrid } from '@mui/x-scheduler-internals/calendar-grid';
import { useEventCalendarStoreContext } from '@mui/x-scheduler-internals/use-event-calendar-store-context';
import {
  eventCalendarOccurrencePlaceholderSelectors,
  eventCalendarViewSelectors,
} from '@mui/x-scheduler-internals/event-calendar-selectors';
import {
  schedulerNowSelectors,
  schedulerOtherSelectors,
} from '@mui/x-scheduler-internals/scheduler-selectors';
import type { useEventOccurrencesWithDayGridPosition } from '@mui/x-scheduler-internals/use-event-occurrences-with-day-grid-position';
import { DayGridEvent } from '../../internals/components/event/day-grid-event/DayGridEvent';
import { MoreEventsPopoverTrigger } from '../../internals/components/more-events-popover/MoreEventsPopover';
import { formatMonthAndDayOfMonth } from '../../internals/utils/date-utils';
import { isOccurrenceAllDayOrMultipleDay } from '../../internals/utils/event-utils';
import { EventDialogTrigger } from '../../internals/components/event-dialog';
import { useEventDialogContext } from '../../internals/components/event-dialog/EventDialog';
import { useEventCalendarStyledContext } from '../../event-calendar/EventCalendarStyledContext';
import { eventCalendarClasses } from '../../event-calendar/eventCalendarClasses';
import { EventSkeleton } from '../../internals/components/event-skeleton';
import { getCellFocusBackground } from '../../internals/utils/tokens';

const MonthViewCellRoot = styled(CalendarGrid.DayCell, {
  name: 'MuiEventCalendar',
  slot: 'MonthViewCell',
})(({ theme }) => { throw new Error("STUB"); });

const MonthViewCellNumber = styled('span', {
  name: 'MuiEventCalendar',
  slot: 'MonthViewCellNumber',
})(({ theme }) => { throw new Error("STUB"); });

const MonthViewCellNumberButton = styled('button', {
  name: 'MuiEventCalendar',
  slot: 'MonthViewCellNumberButton',
})(({ theme }) => { throw new Error("STUB"); });

const MonthViewCellEvents = styled('div', {
  name: 'MuiEventCalendar',
  slot: 'MonthViewCellEvents',
})(({ theme }) => { throw new Error("STUB"); });

const MonthViewMoreEvents = styled(Button, {
  name: 'MuiEventCalendar',
  slot: 'MonthViewMoreEvents',
})(({ theme }) => { throw new Error("STUB"); });

const MonthViewPlaceholderEventContainer = styled('div', {
  name: 'MuiEventCalendar',
  slot: 'MonthViewPlaceholderContainer',
})(({ theme }) => { throw new Error("STUB"); });

export const MonthViewCell = React.forwardRef(function MonthViewCell(
  props: MonthViewCellProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
    throw new Error("STUB");
});

interface MonthViewCellProps {
  day: useEventOccurrencesWithDayGridPosition.DayData;
  row: useEventOccurrencesWithDayGridPosition.ReturnValue;
  maxEvents: number;
  colIndex: number;
  ariaLabelledBy?: string;
}
