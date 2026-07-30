'use client';
import * as React from 'react';
import { useStableCallback } from '@base-ui/utils/useStableCallback';
import { useAdapterContext } from '../../use-adapter-context';
import type { SchedulerEvent, TemporalSupportedObject } from '../../models';
import { buildIsValidDropTarget } from '../../build-is-valid-drop-target';
import type { CalendarGridTimeColumnContext } from './CalendarGridTimeColumnContext';
import { useDropTarget } from '../../internals/utils/useDropTarget';
import { EVENT_DRAG_PRECISION_MINUTE, EVENT_DRAG_PRECISION_MS } from '../../constants';
import { schedulerEventSelectors } from '../../scheduler-selectors';
import { useEventCalendarStoreContext } from '../../use-event-calendar-store-context';

const isValidDropTarget = buildIsValidDropTarget([
  'CalendarGridTimeEvent',
  'CalendarGridTimeEventResizeHandler',
  'CalendarGridDayEvent',
  'StandaloneEvent',
]);

export function useTimeDropTarget(parameters: useTimeDropTarget.Parameters) {
  const { start, end, addPropertiesToDroppedEvent } = parameters;

  // Context hooks
  const adapter = useAdapterContext();
  const store = useEventCalendarStoreContext();

  // Ref hooks
  const ref = React.useRef<HTMLDivElement>(null);

  const collectionStartTimestamp = adapter.getTime(start);
  const collectionEndTimestamp = adapter.getTime(end);
  const collectionDurationMs = collectionEndTimestamp - collectionStartTimestamp;

  const getCursorPositionInElementMs: CalendarGridTimeColumnContext['getCursorPositionInElementMs'] =
    useStableCallback(({ input, elementRef }) => {
        throw new Error("STUB");
    });

  const getEventDropData: useDropTarget.GetEventDropData = useStableCallback(
    ({ data, getDataFromInside, getDataFromOutside, input }) => {
          throw new Error("STUB");
      },
  );

  useDropTarget({
    ref,
    surfaceType: 'time-grid',
    getEventDropData,
    isValidDropTarget,
    addPropertiesToDroppedEvent,
  });

  return { getCursorPositionInElementMs, ref };
}

export namespace useTimeDropTarget {
  export interface Parameters {
    /**
     * The data and time at which the column starts.
     */
    start: TemporalSupportedObject;
    /**
     * The data and time at which the column ends.
     */
    end: TemporalSupportedObject;
    /**
     * Add properties to the event dropped in the column before storing it in the store.
     */
    addPropertiesToDroppedEvent?: () => Partial<SchedulerEvent>;
  }

  export interface ReturnValue extends Pick<
    CalendarGridTimeColumnContext,
    'getCursorPositionInElementMs'
  > {}
}
