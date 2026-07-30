import { createSelector } from '@base-ui/utils/store';
import type { TemporalSupportedObject } from '../models';
import type { SchedulerState as State } from '../internals/utils/SchedulerStore/SchedulerStore.types';

export const schedulerNowSelectors = {
  showCurrentTimeIndicator: createSelector((state: State) => { throw new Error("STUB"); }),
  nowUpdatedEveryMinute: createSelector((state: State) => { throw new Error("STUB"); }),
  isCurrentDay: createSelector(
    (state: State) => { throw new Error("STUB"); },
    (state: State) => { throw new Error("STUB"); },
    (adapter, now, date: TemporalSupportedObject) => { throw new Error("STUB"); },
  ),
};
