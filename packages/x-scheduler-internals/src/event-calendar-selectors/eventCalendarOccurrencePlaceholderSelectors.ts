import { createSelector } from '@base-ui/utils/store';
import type { EventCalendarState as State } from '../use-event-calendar';
import type { TemporalSupportedObject } from '../models';

export const eventCalendarOccurrencePlaceholderSelectors = {
  placeholderInDayCell: createSelector(
    (state: State, day: TemporalSupportedObject, rowStart: TemporalSupportedObject) => {
          throw new Error("STUB");
      },
  ),
  placeholderInTimeRange: createSelector(
    (state: State, start: TemporalSupportedObject, end: TemporalSupportedObject) => {
          throw new Error("STUB");
      },
  ),
  isCreatingInDayCell: createSelector((state: State, day: TemporalSupportedObject) => {
      throw new Error("STUB");
  }),
  isCreatingInTimeRange: createSelector(
    (state: State, dayStart: TemporalSupportedObject, dayEnd: TemporalSupportedObject) => {
          throw new Error("STUB");
      },
  ),
};
