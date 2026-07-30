import * as React from 'react';
import type { EventCalendarParameters, EventCalendarStoreConstructor } from '../use-event-calendar';
import { useEventCalendar } from '../use-event-calendar';
import { SchedulerStoreContext } from '../use-scheduler-store-context/useSchedulerStoreContext';

export function EventCalendarProvider<TEvent extends object, TResource extends object>(
  props: EventCalendarProvider.Props<TEvent, TResource>,
) {
    throw new Error("STUB");
}

export namespace EventCalendarProvider {
  export interface Props<
    TEvent extends object,
    TResource extends object,
  > extends EventCalendarParameters<TEvent, TResource> {
    children: React.ReactNode;
    /**
     * The store class to use for this provider.
     * @default EventCalendarStore
     */
    storeClass?: EventCalendarStoreConstructor<TEvent, TResource>;
  }
}
