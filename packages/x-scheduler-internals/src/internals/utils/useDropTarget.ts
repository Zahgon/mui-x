'use client';
import * as React from 'react';
import { dropTargetForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import type {
  SchedulerEvent,
  SchedulerOccurrencePlaceholder,
  SchedulerOccurrencePlaceholderExternalDrag,
  SchedulerOccurrencePlaceholderInternalDragOrResize,
  EventSurfaceType,
  SchedulerEventUpdatedProperties,
  TemporalSupportedObject,
  SchedulerResourceId,
} from '../../models';
import type {
  EventDropData,
  EventDropDataLookup,
} from '../../build-is-valid-drop-target/buildIsValidDropTarget';
import type { SchedulerStoreInContext } from '../../use-scheduler-store-context';
import { useSchedulerStoreContext } from '../../use-scheduler-store-context';
import {
  schedulerEventSelectors,
  schedulerOccurrencePlaceholderSelectors,
} from '../../scheduler-selectors';
import { isInternalDragOrResizePlaceholder } from './drag-utils';
import type { StandaloneEvent } from '../../standalone-event';
import { useAdapterContext } from '../../use-adapter-context';
import { getPrimaryResourceId } from './event-utils';

export function useDropTarget<Targets extends keyof EventDropDataLookup>(
  parameters: useDropTarget.Parameters<Targets>,
) {
  const {
    surfaceType,
    ref,
    resourceId = null,
    getEventDropData,
    isValidDropTarget,
    addPropertiesToDroppedEvent,
  } = parameters;

  const adapter = useAdapterContext();
  const store = useSchedulerStoreContext();

  React.useEffect(() => {
      throw new Error("STUB");
  }, [
    ref,
    surfaceType,
    resourceId,
    getEventDropData,
    isValidDropTarget,
    addPropertiesToDroppedEvent,
    adapter,
    store,
  ]);
}

export namespace useDropTarget {
  export interface Parameters<Targets extends keyof EventDropDataLookup> {
    surfaceType: EventSurfaceType;
    ref: React.RefObject<HTMLDivElement | null>;
    isValidDropTarget: (data: any) => data is EventDropDataLookup[Targets];
    getEventDropData: GetEventDropData;
    /**
     * Add properties to the event dropped in the element before storing it in the store.
     */
    addPropertiesToDroppedEvent?: () => Partial<SchedulerEvent>;
    /**
     * The id of the resource onto which to drop the event.
     * If null, the event will be dropped outside of any resource.
     * If not defined, the event will be dropped onto the resource it was originally in (if any).
     */
    resourceId?: SchedulerResourceId | null;
  }

  export type GetDataFromInside = (
    data: Exclude<EventDropData, StandaloneEvent.DragData>,
    newStart: TemporalSupportedObject,
    newEnd: TemporalSupportedObject,
  ) => SchedulerOccurrencePlaceholderInternalDragOrResize;

  export type GetDataFromOutside = (
    data: StandaloneEvent.DragData,
    start: TemporalSupportedObject,
  ) => SchedulerOccurrencePlaceholderExternalDrag | undefined;

  export type GetEventDropData = (parameters: {
    data: any;
    input: { clientX: number; clientY: number };
    getDataFromInside: GetDataFromInside;
    getDataFromOutside: GetDataFromOutside;
  }) => SchedulerOccurrencePlaceholder | undefined;
}

/**
 * Applies the data from the placeholder occurrence to the event it represents.
 */
function applyInternalDragOrResizeOccurrencePlaceholder(
  store: SchedulerStoreInContext<any, any>,
  placeholder: SchedulerOccurrencePlaceholderInternalDragOrResize,
  addPropertiesToDroppedEvent?: () => Partial<SchedulerEvent>,
): void {
  // TODO: Try to do a single state update.
  store.setOccurrencePlaceholder(null);

  const { eventId, start, end, originalOccurrence } = placeholder;

  const adapter = store.state.adapter;

  const changes: SchedulerEventUpdatedProperties = { id: eventId, start, end };

  // If `undefined`, we want to set the event resource to `undefined` (no resource).
  // If `null`, we want to keep the original event resource.
  if (placeholder.resourceId !== null) {
    changes.resource = placeholder.resourceId;
  }

  const additionalChanges = addPropertiesToDroppedEvent?.() ?? {};
  Object.assign(changes, additionalChanges);

  const hasChanged = Object.entries(changes).some(([key, value]) => {
      throw new Error("STUB");
  });

  if (!hasChanged) {
    return;
  }

  if (originalOccurrence.displayTimezone.rrule) {
    store.updateRecurringEvent({
      occurrenceStart: originalOccurrence.displayTimezone.start.value,
      changes,
    });
    return;
  }

  store.updateEvent(changes);
}

function applyExternalDragOccurrencePlaceholder(
  store: SchedulerStoreInContext<any, any>,
  placeholder: SchedulerOccurrencePlaceholderExternalDrag,
  addPropertiesToDroppedEvent?: () => Partial<SchedulerEvent>,
) {
  const event = {
    start: placeholder.start,
    end: placeholder.end,
    ...placeholder.eventData,
  };

  // If `undefined`, we want to set the event resource to `undefined` (no resource).
  // If `null`, we want to keep the original event resource.
  if (placeholder.resourceId !== null) {
    event.resource = placeholder.resourceId;
  }

  if (addPropertiesToDroppedEvent) {
    Object.assign(event, addPropertiesToDroppedEvent());
  }

  store.setOccurrencePlaceholder(null);
  store.createEvent(event);
  placeholder.onEventDrop?.();
}
