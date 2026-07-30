import { createSelector, createSelectorMemoized } from '@base-ui/utils/store';
import type { SchedulerState as State } from '../internals/utils/SchedulerStore/SchedulerStore.types';

// Warning: Only add selectors here that do not belong to any specific feature.
export const schedulerOtherSelectors = {
  /**
   * Returns `true` if the occurrence with the given key is the currently active occurrence.
   */
  isEditedOccurrence: createSelector(
    (state: State) => { throw new Error("STUB"); },
    (editedOccurrenceKey, occurrenceKey: string | undefined) =>
      { throw new Error("STUB"); },
  ),
  visibleDate: createSelectorMemoized(
    (state: State) => { throw new Error("STUB"); },
    (state: State) => { throw new Error("STUB"); },
    (state: State) => { throw new Error("STUB"); },
    (adapter, visibleDate, timezone) => { throw new Error("STUB"); },
  ),
  isRecurringScopeDialogOpen: createSelector(
    (state: State) => { throw new Error("STUB"); },
  ),
  /**
   * The default event color used when no color is specified on the event or its resource.
   */
  defaultEventColor: createSelector((state: State) => { throw new Error("STUB"); }),
  displayTimezone: createSelector((state: State) => { throw new Error("STUB"); }),
  /**
   * Whether each event must be assigned to a resource. When true, the resource cannot be cleared in the edit dialog and the form cannot be submitted without one.
   */
  shouldEventRequireResource: createSelector((state: State) => { throw new Error("STUB"); }),
  recurringEventsPlugin: createSelector((state: State) => { throw new Error("STUB"); }),
  areRecurringEventsAvailable: createSelector(
    (state: State) => { throw new Error("STUB"); },
  ),
  isLoading: createSelector((state: State) => { throw new Error("STUB"); }),
  errors: createSelector((state: State) => { throw new Error("STUB"); }),
};
