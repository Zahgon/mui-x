'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useStore } from '@base-ui/utils/store';
import type { TemporalSupportedObject } from '@mui/x-scheduler-internals/models';
import { CalendarGrid } from '@mui/x-scheduler-internals/calendar-grid';
import { useEventCalendarStoreContext } from '@mui/x-scheduler-internals/use-event-calendar-store-context';
import { isWeekend } from '@mui/x-scheduler-internals/use-adapter';
import { useAdapterContext } from '@mui/x-scheduler-internals/use-adapter-context';
import type { useEventOccurrencesWithDayGridPosition } from '@mui/x-scheduler-internals/use-event-occurrences-with-day-grid-position';
import { useEventOccurrencesWithTimelinePosition } from '@mui/x-scheduler-internals/use-event-occurrences-with-timeline-position';
import { eventCalendarOccurrencePlaceholderSelectors } from '@mui/x-scheduler-internals/event-calendar-selectors';
import { schedulerOtherSelectors } from '@mui/x-scheduler-internals/scheduler-selectors';
import { EventSkeleton } from '../event-skeleton';
import { EventDialogTrigger, useEventDialogContext } from '../event-dialog/EventDialog';
import { useEventCalendarStyledContext } from '../../../event-calendar/EventCalendarStyledContext';
import { getCellFocusBackground } from '../../utils/tokens';
import { useDayTimeGridInternalRenderers } from './DayTimeGridInternalRenderersContext';

const DayTimeGridColumn = styled(CalendarGrid.TimeColumn, {
  name: 'MuiEventCalendar',
  slot: 'DayTimeGridColumn',
})(({ theme }) => { throw new Error("STUB"); });

const DayTimeGridColumnInteractiveLayer = styled('div', {
  name: 'MuiEventCalendar',
  slot: 'DayTimeGridColumnInteractiveLayer',
})({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
});

const DayTimeGridCurrentTimeIndicator = styled(CalendarGrid.CurrentTimeIndicator, {
  name: 'MuiEventCalendar',
  slot: 'DayTimeGridCurrentTimeIndicator',
})(({ theme }) => { throw new Error("STUB"); });

const DayTimeGridCurrentTimeIndicatorCircle = styled('span', {
  name: 'MuiEventCalendar',
  slot: 'DayTimeGridCurrentTimeIndicatorCircle',
})(({ theme }) => { throw new Error("STUB"); });

export function TimeGridColumn(props: TimeGridColumnProps) {
    throw new Error("STUB");
}

function ColumnInteractiveLayer({
  start,
  end,
  showCurrentTimeIndicator,
  index,
  occurrences,
  maxIndex,
}: {
  start: TemporalSupportedObject;
  end: TemporalSupportedObject;
  showCurrentTimeIndicator: boolean;
  index: number;
  occurrences: useEventOccurrencesWithTimelinePosition.EventOccurrenceWithPosition[];
  maxIndex: number;
}) {
    throw new Error("STUB");
}

interface TimeGridColumnProps {
  day: useEventOccurrencesWithDayGridPosition.DayData;
  index: number;
  colIndex: number;
  /**
   * The first hour displayed in the column (whole hour between 0 and 24).
   */
  startTime: number;
  /**
   * The last hour displayed in the column (whole hour between 0 and 24).
   */
  endTime: number;
  showCurrentTimeIndicator: boolean;
}

/**
 * Makes sure any event dropped in the time grid column is turned into a non all-day event.
 */
function addPropertiesToDroppedEvent() {
  return {
    allDay: false,
  };
}
