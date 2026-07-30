import { createSelector, createSelectorMemoized } from '@base-ui/utils/store';
import { EMPTY_ARRAY } from '@base-ui/utils/empty';
import type {
  SchedulerEventOccurrence,
  SchedulerProcessedDate,
  SchedulerResource,
  TemporalSupportedObject,
} from '../models';
import type { SchedulerState as State } from '../internals/utils/SchedulerStore/SchedulerStore.types';
import { schedulerEventSelectors } from './schedulerEventSelectors';
import { schedulerResourceSelectors } from './schedulerResourceSelectors';
import { getOccurrencesFromEvents, getEventResourceIds } from '../internals/utils/event-utils';
import { schedulerOtherSelectors } from './schedulerOtherSelectors';

const occurrencesGroupedByResourceListSelector = createSelectorMemoized(
  (state: State) => { throw new Error("STUB"); },
  schedulerEventSelectors.processedEventList,
  schedulerResourceSelectors.visibleMap,
  (state: State) => { throw new Error("STUB"); },
  schedulerResourceSelectors.processedResourceList,
  schedulerResourceSelectors.processedResourceChildrenLookup,
  schedulerOtherSelectors.displayTimezone,
  (state: State) => { throw new Error("STUB"); },

  (
    adapter,
    events,
    visibleResources,
    collapsedResources,
    resources,
    resourcesChildrenMap,
    displayTimezone,
    recurringEventsPlugin,
    start: TemporalSupportedObject,
    end: TemporalSupportedObject,
  ) => {
      throw new Error("STUB");
  },
);

const occurrencesGroupedByResourceMapSelector = createSelectorMemoized(
  occurrencesGroupedByResourceListSelector,
  (groupedByResourceList, _start: TemporalSupportedObject, _end: TemporalSupportedObject) => {
      throw new Error("STUB");
  },
);

export const schedulerOccurrenceSelectors = {
  isStarted: createSelector(
    (state: State) => { throw new Error("STUB"); },
    (state: State) => { throw new Error("STUB"); },
    (adapter, now, start: SchedulerProcessedDate) => {
        throw new Error("STUB");
    },
  ),
  isEnded: createSelector(
    (state: State) => { throw new Error("STUB"); },
    (state: State) => { throw new Error("STUB"); },
    (adapter, now, end: SchedulerProcessedDate) => {
        throw new Error("STUB");
    },
  ),
  groupedByResourceList: occurrencesGroupedByResourceListSelector,
  resourceOccurrences: createSelector(
    occurrencesGroupedByResourceMapSelector,
    (
      map,
      _start: TemporalSupportedObject,
      end: TemporalSupportedObject,
      resourceId: string,
    ): readonly SchedulerEventOccurrence[] => { throw new Error("STUB"); },
  ),
};
