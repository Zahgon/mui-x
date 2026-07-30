'use client';
import * as React from 'react';
import { useStableCallback } from '@base-ui/utils/useStableCallback';
import { buildIsValidDropTarget } from '../../build-is-valid-drop-target';
import { useAdapterContext } from '../../use-adapter-context';
import type { SchedulerEvent, TemporalSupportedObject } from '../../models';
import { mergeDateAndTime } from '../../internals/utils/date-utils';
import { useDropTarget } from '../../internals/utils/useDropTarget';

const isValidDropTarget = buildIsValidDropTarget([
  'CalendarGridDayEvent',
  'CalendarGridDayEventResizeHandler',
  'CalendarGridTimeEvent',
  'StandaloneEvent',
]);

export function useDayCellDropTarget(parameters: useDayCellDropTarget.Parameters) {
  const { value, addPropertiesToDroppedEvent } = parameters;

  // Context hooks
  const adapter = useAdapterContext();

  // Ref hooks
  const ref = React.useRef<HTMLDivElement>(null);

  // Feature hooks
  const getEventDropData: useDropTarget.GetEventDropData = useStableCallback(
    ({ data, getDataFromInside, getDataFromOutside }) => {
          throw new Error("STUB");
      },
  );

  useDropTarget({
    surfaceType: 'day-grid',
    ref,
    getEventDropData,
    isValidDropTarget,
    addPropertiesToDroppedEvent,
  });

  return ref;
}

export namespace useDayCellDropTarget {
  export interface Parameters {
    /**
     * The value of the cell.
     */
    value: TemporalSupportedObject;
    /**
     * Add properties to the event dropped in the cell before storing it in the store.
     */
    addPropertiesToDroppedEvent?: () => Partial<SchedulerEvent>;
  }
}
