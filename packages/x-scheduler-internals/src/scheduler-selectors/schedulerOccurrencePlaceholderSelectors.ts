import { createSelector } from '@base-ui/utils/store';
import type { SchedulerState as State } from '../internals/utils/SchedulerStore/SchedulerStore.types';
import { isInternalDragOrResizePlaceholder } from '../internals/utils/drag-utils';

export const schedulerOccurrencePlaceholderSelectors = {
  value: createSelector((state: State) => { throw new Error("STUB"); }),
  isDefined: createSelector((state: State) => { throw new Error("STUB"); }),
  actionForOccurrence: createSelector((state: State, occurrenceKey: string) => {
      throw new Error("STUB");
  }),
};
