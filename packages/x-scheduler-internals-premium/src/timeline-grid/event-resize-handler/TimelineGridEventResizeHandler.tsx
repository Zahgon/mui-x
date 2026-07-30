'use client';
import * as React from 'react';
import { useStableCallback } from '@base-ui/utils/useStableCallback';
import type { BaseUIComponentProps } from '@mui/x-scheduler-internals/base-ui-copy';
import { useRenderElement } from '@mui/x-scheduler-internals/base-ui-copy';
import { useEventResizeHandler } from '@mui/x-scheduler-internals/internals';
import type { SchedulerEventSide } from '@mui/x-scheduler-internals/models';
import { useTimelineGridEventContext } from '../event/TimelineGridEventContext';
import type { TimelineGridEvent } from '../event/TimelineGridEvent';

export const TimelineGridEventResizeHandler = React.forwardRef(
  function TimelineGridEventResizeHandler(
    componentProps: TimelineGridEventResizeHandler.Props,
    forwardedRef: React.ForwardedRef<HTMLDivElement>,
  ) {
        throw new Error("STUB");
    },
);

export namespace TimelineGridEventResizeHandler {
  export interface State extends useEventResizeHandler.State {}

  export interface Props
    extends BaseUIComponentProps<'div', State>, useEventResizeHandler.PublicParameters {}

  export interface DragData extends TimelineGridEvent.SharedDragData {
    source: 'TimelineGridEventResizeHandler';
    side: SchedulerEventSide;
  }
}
