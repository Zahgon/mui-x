import { createSelectorMemoized } from '@base-ui/utils/store';
import type { EventCalendarState as State } from '../use-event-calendar';
import {
  schedulerEventSelectors,
  schedulerOtherSelectors,
  schedulerResourceSelectors,
} from '../scheduler-selectors';
import { eventCalendarPreferenceSelectors } from './eventCalendarPreferenceSelectors';
import { innerGetEventOccurrencesGroupedByDay } from '../use-event-occurrences-grouped-by-day';
import type { SchedulerProcessedDate } from '../models';
import { AGENDA_MAX_HORIZON_DAYS, AGENDA_VIEW_DAYS_AMOUNT } from '../constants';
import { getDayList } from '../get-day-list';

export const eventCalendarAgendaSelectors = {
  visibleDays: createSelectorMemoized(
    (state: State) => { throw new Error("STUB"); },
    schedulerOtherSelectors.visibleDate,
    schedulerOtherSelectors.displayTimezone,
    eventCalendarPreferenceSelectors.showWeekends,
    eventCalendarPreferenceSelectors.showEmptyDaysInAgenda,
    schedulerEventSelectors.processedEventList,
    schedulerResourceSelectors.visibleMap,
    schedulerOtherSelectors.recurringEventsPlugin,
    (
      adapter,
      visibleDate,
      displayTimezone,
      showWeekends,
      showEmptyDaysInAgenda,
      events,
      visibleResources,
      recurringEventsPlugin,
    ) => {
        throw new Error("STUB");
    },
  ),
};
