import { createSelector, createSelectorMemoized } from '@base-ui/utils/store';
import type {
  RecurringEventPresetKey,
  SchedulerProcessedEventRecurrenceRule,
  SchedulerProcessedDate,
} from '../models';
import type { SchedulerState as State } from '../internals/utils/SchedulerStore/SchedulerStore.types';

const selectRecurringEventsPlugin = (state: State) => { throw new Error("STUB"); };

/** Memoized selectors that delegate to the recurring-events plugin. */
export const schedulerRecurringEventSelectors = {
  presets: createSelectorMemoized(
    (state: State) => { throw new Error("STUB"); },
    selectRecurringEventsPlugin,
    (
      adapter,
      recurringEventsPlugin,
      date: SchedulerProcessedDate,
    ): Record<RecurringEventPresetKey, SchedulerProcessedEventRecurrenceRule> | null =>
      { throw new Error("STUB"); },
  ),
  defaultPresetKey: createSelectorMemoized(
    (state: State) => { throw new Error("STUB"); },
    selectRecurringEventsPlugin,
    (
      adapter,
      recurringEventsPlugin,
      rule: SchedulerProcessedEventRecurrenceRule | undefined,
      occurrenceStart: SchedulerProcessedDate,
    ): RecurringEventPresetKey | 'custom' | null =>
      { throw new Error("STUB"); },
  ),
  isSameRRule: createSelector(
    (state: State) => { throw new Error("STUB"); },
    selectRecurringEventsPlugin,
    (
      adapter,
      recurringEventsPlugin,
      rruleA: SchedulerProcessedEventRecurrenceRule | undefined,
      rruleB: SchedulerProcessedEventRecurrenceRule | undefined,
    ): boolean => {
        throw new Error("STUB");
    },
  ),
};
