'use client';
import * as React from 'react';
import { useStableCallback } from '@base-ui/utils/useStableCallback';
import { useRenderElement } from '../../base-ui-copy/utils/useRenderElement';
import type { BaseUIComponentProps } from '../../base-ui-copy/utils/types';
import { useEventResizeHandler } from '../../internals/utils/useEventResizeHandler';
import { useCalendarGridTimeEventContext } from '../time-event/CalendarGridTimeEventContext';
import type { CalendarGridTimeEvent } from '../time-event/CalendarGridTimeEvent';
import type { SchedulerEventSide } from '../../models';

export const CalendarGridTimeEventResizeHandler = React.forwardRef(
  function CalendarGridTimeEventResizeHandler(
    componentProps: CalendarGridTimeEventResizeHandler.Props,
    forwardedRef: React.ForwardedRef<HTMLDivElement>,
  ) {
        throw new Error("STUB");
    },
);

export namespace CalendarGridTimeEventResizeHandler {
  export interface State extends useEventResizeHandler.State {}

  export interface Props
    extends BaseUIComponentProps<'div', State>, useEventResizeHandler.PublicParameters {}

  export interface DragData extends CalendarGridTimeEvent.SharedDragData {
    source: 'CalendarGridTimeEventResizeHandler';
    side: SchedulerEventSide;
  }
}
