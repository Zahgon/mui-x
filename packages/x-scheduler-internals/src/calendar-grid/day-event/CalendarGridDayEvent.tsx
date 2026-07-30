'use client';
import * as React from 'react';
import { useStableCallback } from '@base-ui/utils/useStableCallback';
import { useStore } from '@base-ui/utils/store';
import { useId } from '@base-ui/utils/useId';
import { useButton } from '../../base-ui-copy/utils/useButton';
import { useRenderElement } from '../../base-ui-copy/utils/useRenderElement';
import type { BaseUIComponentProps, NonNativeButtonProps } from '../../base-ui-copy/utils/types';
import { useDraggableEvent } from '../../internals/utils/useDraggableEvent';
import type {
  SchedulerEventId,
  SchedulerEventOccurrence,
  TemporalSupportedObject,
} from '../../models';
import { useAdapterContext } from '../../use-adapter-context';
import { useCalendarGridDayRowContext } from '../day-row/CalendarGridDayRowContext';
import {
  schedulerEventSelectors,
  schedulerOccurrencePlaceholderSelectors,
} from '../../scheduler-selectors';
import { getCalendarGridHeaderCellId } from '../../internals/utils/accessibility-utils';
import { CalendarGridDayEventContext } from './CalendarGridDayEventContext';
import { useEventCalendarStoreContext } from '../../use-event-calendar-store-context';
import { useCalendarGridDayCellContext } from '../day-cell/CalendarGridDayCellContext';
import { useCalendarGridRootContext } from '../root/CalendarGridRootContext';
import { generateOccurrenceFromEvent } from '../../internals/utils/event-utils';

const overflowStateAttributesMapping = {
  startingBeforeEdge: (value: boolean) => { throw new Error("STUB"); },
  endingAfterEdge: (value: boolean) => { throw new Error("STUB"); },
};

export const CalendarGridDayEvent = React.forwardRef(function CalendarGridDayEvent(
  componentProps: CalendarGridDayEvent.Props,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
    throw new Error("STUB");
});

export namespace CalendarGridDayEvent {
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
  }

  export interface DragData extends SharedDragData {
    source: 'CalendarGridDayEvent';
    draggedDay: TemporalSupportedObject;
  }
}
