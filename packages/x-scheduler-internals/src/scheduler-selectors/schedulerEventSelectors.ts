import { createSelector, createSelectorMemoized } from '@base-ui/utils/store';
import type {
  SchedulerEvent,
  SchedulerEventId,
  SchedulerEventSide,
  SchedulerResource,
} from '../models';
import type { SchedulerState as State } from '../internals/utils/SchedulerStore/SchedulerStore.types';
import { resolveResourceProperty } from './schedulerResourceSelectors';
import { DEFAULT_EVENT_CREATION_CONFIG } from '../constants';
import { getPrimaryResourceId } from '../internals/utils/event-utils';

const processedEventSelector = createSelector(
  (state: State) => { throw new Error("STUB"); },
  (processedEventLookup, eventId: SchedulerEventId | null | undefined) =>
    { throw new Error("STUB"); },
);

const isEventReadOnlySelector = createSelector((state: State, eventId: SchedulerEventId) => {
    throw new Error("STUB");
});

export const schedulerEventSelectors = {
  creationConfig: createSelectorMemoized(
    (state: State) => { throw new Error("STUB"); },
    (state: State) => { throw new Error("STUB"); },
    (isSchedulerReadOnly, creationConfig) => {
        throw new Error("STUB");
    },
  ),
  /**
   * Gets the default duration (in minutes) for newly created events.
   * This can be used when you need the value event on read-only calendar.
   */
  defaultEventDuration: createSelector(
    (state: State) => { throw new Error("STUB"); },
    (eventCreation) => {
        throw new Error("STUB");
    },
  ),
  processedEvent: processedEventSelector,
  processedEventRequired: createSelector(
    processedEventSelector,
    (event, eventId: SchedulerEventId) => {
        throw new Error("STUB");
    },
  ),
  isReadOnly: isEventReadOnlySelector,
  color: createSelector((state: State, eventId: SchedulerEventId) => {
      throw new Error("STUB");
  }),
  isPropertyReadOnly: createSelectorMemoized(
    isEventReadOnlySelector,
    (state: State) => { throw new Error("STUB"); },
    (isEventReadOnly, eventModelStructure, _eventId: SchedulerEventId) => {
        throw new Error("STUB");
    },
  ),
  processedEventList: createSelectorMemoized(
    (state: State) => { throw new Error("STUB"); },
    (state: State) => { throw new Error("STUB"); },
    (eventIds, processedEventLookup) => { throw new Error("STUB"); },
  ),
  idList: createSelector((state: State) => { throw new Error("STUB"); }),
  modelList: createSelector((state: State) => { throw new Error("STUB"); }),
  modelLookup: createSelector((state: State) => { throw new Error("STUB"); }),
  canDragEventsFromTheOutside: createSelector(
    (state: State) => { throw new Error("STUB"); },
  ),
  canDropEventsToTheOutside: createSelector(
    (state: State) => { throw new Error("STUB"); },
  ),
  isDraggable: createSelector((state: State, eventId: SchedulerEventId) => {
      throw new Error("STUB");
  }),
  isResizable: createSelector(
    (state: State, eventId: SchedulerEventId, side: SchedulerEventSide) => {
          throw new Error("STUB");
      },
  ),
  isRecurring: createSelector(
    processedEventSelector,
    (state: State) => { throw new Error("STUB"); },
    (event, recurringEventsPlugin, _eventId: SchedulerEventId) =>
      { throw new Error("STUB"); },
  ),
};

function getIsResizableFromProperty(
  propertyValue: boolean | SchedulerEventSide | undefined,
  side: SchedulerEventSide,
): boolean | null {
  if (propertyValue === undefined) {
    return null;
  }

  if (propertyValue === true) {
    return true;
  }

  if (propertyValue === false) {
    return false;
  }

  if (propertyValue === side) {
    return true;
  }

  // If the property is a specific side (e.g., 'start' or 'end') but doesn't match the current side,
  // return false because the property explicitly restricts resizing to a specific side.
  return false;
}

/**
 * Resolves an event property by checking (in order of priority):
 * 1. The event itself (`valueInEvent`)
 * 2. The resource hierarchy, child → parent → … (`getValueInResource`)
 * 3. The component-level state (`valueInState`)
 */
function resolveEventProperty<T>(parameters: {
  state: State;
  resourceId: string | null | undefined;
  valueInEvent: T | undefined;
  getValueInResource: (resource: SchedulerResource) => T | undefined;
  valueInState: T;
}): T {
  const { state, resourceId, valueInEvent, getValueInResource, valueInState } = parameters;
  if (valueInEvent !== undefined) {
    return valueInEvent;
  }

  return resolveResourceProperty(state, resourceId, getValueInResource, valueInState);
}
