'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useAdapterContext } from '@mui/x-scheduler-internals/use-adapter-context';
import type { SchedulerEventOccurrence } from '@mui/x-scheduler-internals/models';
import type { useEventOccurrencesWithDayGridPosition } from '@mui/x-scheduler-internals/use-event-occurrences-with-day-grid-position';
import type {
  MoreEventsPopoverProps,
  MoreEventsPopoverProviderProps,
} from './MoreEventsPopover.types';
import { EventItem } from '../event/event-item/EventItem';
import { createModal } from '../create-modal';
import { isOccurrenceAllDayOrMultipleDay } from '../../utils/event-utils';
import { formatWeekDayMonthAndDayOfMonth } from '../../utils/date-utils';
import { EventDialogTrigger, useEventDialogContext } from '../event-dialog';
import { useEventCalendarStyledContext } from '../../../event-calendar/EventCalendarStyledContext';

const MoreEventsPopoverHeader = styled('div', {
  name: 'MuiEventCalendar',
  slot: 'MoreEventsPopoverHeader',
})(({ theme }) => { throw new Error("STUB"); });

const MoreEventsPopoverTitle = styled(Typography, {
  name: 'MuiEventCalendar',
  slot: 'MoreEventsPopoverTitle',
})(({ theme }) => { throw new Error("STUB"); });

const MoreEventsPopoverBody = styled('div', {
  name: 'MuiEventCalendar',
  slot: 'MoreEventsPopoverBody',
})(({ theme }) => { throw new Error("STUB"); });

interface MoreEventsData {
  occurrences: SchedulerEventOccurrence[];
  count: number;
  day: useEventOccurrencesWithDayGridPosition.DayData;
}

const MoreEventsPopover = createModal<MoreEventsData>({
  contextName: 'MoreEventsPopoverContext',
});

export const MoreEventsPopoverContext = MoreEventsPopover.Context;
export const useMoreEventsPopoverContext = MoreEventsPopover.useContext;

export default function MoreEventsPopoverContent(props: MoreEventsPopoverProps) {
    throw new Error("STUB");
}

export function MoreEventsPopoverProvider(props: MoreEventsPopoverProviderProps) {
    throw new Error("STUB");
}

interface MoreEventsPopoverTriggerProps extends React.HTMLAttributes<HTMLElement> {
  occurrences: SchedulerEventOccurrence[];
  day: useEventOccurrencesWithDayGridPosition.DayData;
  children: React.ReactNode;
}

export function MoreEventsPopoverTrigger(props: MoreEventsPopoverTriggerProps) {
    throw new Error("STUB");
}
