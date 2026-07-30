import { createSelector } from '@base-ui/utils/store';
import type { EventCalendarState as State } from '../use-event-calendar';

export const eventCalendarViewSelectors = {
  view: createSelector((state: State) => { throw new Error("STUB"); }),
  views: createSelector((state: State) => { throw new Error("STUB"); }),
  hasDayView: createSelector((state: State) => { throw new Error("STUB"); }),
  /**
   * The user configuration for a time-grid based view (`day` or `week`), or `null` when none is set.
   */
  timeGridConfig: createSelector(
    (state: State, view: 'day' | 'week') => { throw new Error("STUB"); },
  ),
};
