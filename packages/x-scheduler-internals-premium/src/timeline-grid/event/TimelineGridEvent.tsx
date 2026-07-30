'use client';
import * as React from 'react';
import { useStableCallback } from '@base-ui/utils/useStableCallback';
import { useStore } from '@base-ui/utils/store';
import type {
  BaseUIComponentProps,
  NonNativeButtonProps,
} from '@mui/x-scheduler-internals/base-ui-copy';
import { useButton, useRenderElement } from '@mui/x-scheduler-internals/base-ui-copy';
import type {
  SchedulerEventId,
  SchedulerEventOccurrence,
  TemporalSupportedObject,
} from '@mui/x-scheduler-internals/models';
import {
  useDraggableEvent,
  generateOccurrenceFromEvent,
  useElementPositionInCollection,
} from '@mui/x-scheduler-internals/internals';
import { useAdapterContext } from '@mui/x-scheduler-internals/use-adapter-context';
import { schedulerEventSelectors } from '@mui/x-scheduler-internals/scheduler-selectors';
import { useEventTimelinePremiumStoreContext } from '../../use-event-timeline-premium-store-context';
import { useTimelineGridEventRowContext } from '../event-row/TimelineGridEventRowContext';
import { TimelineGridEventCssVars } from './TimelineGridEventCssVars';
import { TimelineGridEventContext } from './TimelineGridEventContext';
import { eventTimelinePremiumPresetSelectors } from '../../event-timeline-premium-selectors';
import { TimelineGridEventDataAttributes } from './TimelineGridEventDataAttributes';

const overflowStateAttributesMapping = {
  startingBeforeEdge: (value: boolean) =>
    { throw new Error("STUB"); },
  endingAfterEdge: (value: boolean) =>
    { throw new Error("STUB"); },
};

export const TimelineGridEvent = React.forwardRef(function TimelineGridEvent(
  componentProps: TimelineGridEvent.Props,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
    throw new Error("STUB");
});

export namespace TimelineGridEvent {
  export interface State extends useDraggableEvent.State {
    startingBeforeEdge: boolean;
    endingAfterEdge: boolean;
  }

  export interface Props
    extends
      BaseUIComponentProps<'div', State>,
      NonNativeButtonProps,
      useDraggableEvent.PublicParameters {}

  export interface SharedDragData {
    eventId: SchedulerEventId;
    occurrenceKey: string;
    originalOccurrence: SchedulerEventOccurrence;
    start: TemporalSupportedObject;
    end: TemporalSupportedObject;
    initialCursorPositionInEventMs: number;
  }

  export interface DragData extends SharedDragData {
    source: 'TimelineGridEvent';
  }
}
