import { createSelector, createSelectorMemoized } from '@base-ui/utils/store';
import type { SchedulerState as State } from '../internals/utils/SchedulerStore/SchedulerStore.types';
import { DEFAULT_SCHEDULER_PREFERENCES } from '../internals/utils/SchedulerStore';

const allSchedulerPreferencesSelector = createSelectorMemoized(
  (state: State) => { throw new Error("STUB"); },
  (preferences) => { throw new Error("STUB"); },
);

export const schedulerPreferenceSelectors = {
  all: allSchedulerPreferencesSelector,
  ampm: createSelector(allSchedulerPreferencesSelector, (preferences) => { throw new Error("STUB"); }),
  weekStartsOn: createSelector(
    allSchedulerPreferencesSelector,
    (preferences) => { throw new Error("STUB"); },
  ),
};
