import { createSelector } from '@base-ui/utils/store';
import type { SchedulerResourceId } from '@mui/x-scheduler-internals/models';
import type { EventTimelinePremiumState as State } from '../use-event-timeline-premium';
import { eventTimelinePremiumPresetSelectors } from './eventTimelinePremiumPresetSelectors';

export const timelineOccurrencePlaceholderSelectors = {
  placeholderInResource: createSelector((state: State, resourceId: SchedulerResourceId | null) => {
      throw new Error("STUB");
  }),
  isCreatingInResource: createSelector((state: State, resourceId: SchedulerResourceId | null) => {
      throw new Error("STUB");
  }),
};
