'use client';
import * as React from 'react';
import { useStableCallback } from '@base-ui/utils/useStableCallback';
import { useId } from '@base-ui/utils/useId';
import { useButton } from '../../base-ui-copy/utils/useButton';
import { useRenderElement } from '../../base-ui-copy/utils/useRenderElement';
import type { BaseUIComponentProps, NonNativeButtonProps } from '../../base-ui-copy/utils/types';
import { CalendarGridTimeEventCssVars } from './CalendarGridTimeEventCssVars';
import { useCalendarGridTimeColumnContext } from '../time-column/CalendarGridTimeColumnContext';
import { useDraggableEvent } from '../../internals/utils/useDraggableEvent';
import { useElementPositionInCollection } from '../../internals/utils/useElementPositionInCollection';
import { getCalendarGridHeaderCellId } from '../../internals/utils/accessibility-utils';
import { CalendarGridTimeEventContext } from './CalendarGridTimeEventContext';
import { useAdapterContext } from '../../use-adapter-context';
import { useEventCalendarStoreContext } from '../../use-event-calendar-store-context';
import { schedulerEventSelectors } from '../../scheduler-selectors';
import type {
  SchedulerEventId,
  SchedulerEventOccurrence,
  TemporalSupportedObject,
} from '../../models';
import { useCalendarGridRootContext } from '../root/CalendarGridRootContext';
import { generateOccurrenceFromEvent } from '../../internals/utils/event-utils';

export const CalendarGridTimeEvent = React.forwardRef(function CalendarGridTimeEvent(
  componentProps: CalendarGridTimeEvent.Props,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
    throw new Error("STUB");
});

export namespace CalendarGridTimeEvent {
  export interface State extends useDraggableEvent.State {}

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
    source: 'CalendarGridTimeEvent';
  }
}
