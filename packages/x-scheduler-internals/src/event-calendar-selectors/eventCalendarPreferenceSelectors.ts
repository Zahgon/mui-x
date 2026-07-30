import { createSelector, createSelectorMemoized } from '@base-ui/utils/store';
import type { EventCalendarState as State } from '../use-event-calendar';
import { DEFAULT_EVENT_CALENDAR_PREFERENCES } from '../use-event-calendar/EventCalendarStore';

const allPreferencesSelector = createSelectorMemoized(
  (state: State) => { throw new Error("STUB"); },
  (preferences) => { throw new Error("STUB"); },
);

export const eventCalendarPreferenceSelectors = {
  all: allPreferencesSelector,
  menuConfig: createSelector((state: State) => { throw new Error("STUB"); }),
  ampm: createSelector(allPreferencesSelector, (preferences) => { throw new Error("STUB"); }),
  showWeekends: createSelector(allPreferencesSelector, (preferences) => { throw new Error("STUB"); }),
  showWeekNumber: createSelector(
    allPreferencesSelector,
    (preferences) => { throw new Error("STUB"); },
  ),
  showEmptyDaysInAgenda: createSelector(
    allPreferencesSelector,
    (preferences) => { throw new Error("STUB"); },
  ),
  isSidePanelOpen: createSelector(
    allPreferencesSelector,
    (preferences) => { throw new Error("STUB"); },
  ),
  weekStartsOn: createSelector(allPreferencesSelector, (preferences) => { throw new Error("STUB"); }),
};
