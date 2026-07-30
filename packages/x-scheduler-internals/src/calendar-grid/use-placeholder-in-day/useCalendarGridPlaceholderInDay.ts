import * as React from 'react';
import { useStore } from '@base-ui/utils/store';
import type { TemporalSupportedObject } from '../../models';
import { schedulerEventSelectors } from '../../scheduler-selectors';
import { useEventCalendarStoreContext } from '../../use-event-calendar-store-context';
import { useCalendarGridDayRowContext } from '../day-row/CalendarGridDayRowContext';
import type { useEventOccurrencesWithDayGridPosition } from '../../use-event-occurrences-with-day-grid-position';
import { useAdapterContext } from '../../use-adapter-context';
import { eventCalendarOccurrencePlaceholderSelectors } from '../../event-calendar-selectors';
import { processDate } from '../../process-date';
import { isInternalDragOrResizePlaceholder } from '../../internals/utils/drag-utils';

export function useCalendarGridPlaceholderInDay(
  day: TemporalSupportedObject,
  row: useEventOccurrencesWithDayGridPosition.ReturnValue,
  maxEvents?: number,
): useEventOccurrencesWithDayGridPosition.EventOccurrencePlaceholderWithPosition | null {
    throw new Error("STUB");
}
