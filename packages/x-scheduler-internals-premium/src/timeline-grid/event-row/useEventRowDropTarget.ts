'use client';
import * as React from 'react';
import { useStableCallback } from '@base-ui/utils/useStableCallback';
import { useStore } from '@base-ui/utils/store';
import { useAdapterContext } from '@mui/x-scheduler-internals/use-adapter-context';
import type {
  SchedulerResourceId,
  SchedulerEvent,
  TemporalSupportedObject,
} from '@mui/x-scheduler-internals/models';
import { useDropTarget } from '@mui/x-scheduler-internals/internals';
import { buildIsValidDropTarget } from '@mui/x-scheduler-internals/build-is-valid-drop-target';
import {
  EVENT_DRAG_PRECISION_MINUTE,
  EVENT_DRAG_PRECISION_MS,
} from '@mui/x-scheduler-internals/constants';
import type { TimelineGridEventRowContext } from './TimelineGridEventRowContext';
import { useEventTimelinePremiumStoreContext } from '../../use-event-timeline-premium-store-context';
import { eventTimelinePremiumPresetSelectors } from '../../event-timeline-premium-selectors';

const isValidDropTarget = buildIsValidDropTarget([
  'TimelineGridEvent',
  'TimelineGridEventResizeHandler',
  'StandaloneEvent',
]);

export function useEventRowDropTarget(parameters: useEventRowDropTarget.Parameters) {
  const { resourceId, addPropertiesToDroppedEvent } = parameters;

  // Context hooks
  const adapter = useAdapterContext();
  const store = useEventTimelinePremiumStoreContext();

  // Ref hooks
  const ref = React.useRef<HTMLDivElement>(null);

  // Selector hooks
  const presetConfig = useStore(store, eventTimelinePremiumPresetSelectors.config);

  const collectionStartTimestamp = adapter.getTime(presetConfig.start);
  const collectionEndTimestamp = adapter.getTime(presetConfig.end);
  const collectionDurationMs = collectionEndTimestamp - collectionStartTimestamp;

  const getCursorPositionInElementMs: TimelineGridEventRowContext['getCursorPositionInElementMs'] =
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
    resourceId,
    surfaceType: 'timeline',
    getEventDropData,
    isValidDropTarget,
    addPropertiesToDroppedEvent,
  });

  return { getCursorPositionInElementMs, ref };
}

export namespace useEventRowDropTarget {
  export interface Parameters {
    /**
     * The id of the resource to drop the event onto.
     */
    resourceId: SchedulerResourceId;
    /**
     * Add properties to the event dropped in the row before storing it in the store.
     */
    addPropertiesToDroppedEvent?: () => Partial<SchedulerEvent>;
  }

  export interface ReturnValue extends Pick<
    TimelineGridEventRowContext,
    'getCursorPositionInElementMs'
  > {}
}
