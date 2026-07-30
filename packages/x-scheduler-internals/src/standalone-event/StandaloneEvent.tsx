'use client';
import * as React from 'react';
import { draggable } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { disableNativeDragPreview } from '@atlaskit/pragmatic-drag-and-drop/element/disable-native-drag-preview';
import { useStableCallback } from '@base-ui/utils/useStableCallback';
import { useButton } from '../base-ui-copy/utils/useButton';
import { useRenderElement } from '../base-ui-copy/utils/useRenderElement';
import type { BaseUIComponentProps, NonNativeButtonProps } from '../base-ui-copy/utils/types';
import type { SchedulerOccurrencePlaceholderExternalDragData } from '../models';
import { useDragPreview } from '../internals/utils/useDragPreview';

export const StandaloneEvent = React.forwardRef(function StandaloneEvent(
  componentProps: StandaloneEvent.Props,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
    throw new Error("STUB");
});

export namespace StandaloneEvent {
  export interface State {
    /**
     * Whether the event is being dragged.
     */
    dragging: boolean;
  }

  export interface Props
    extends
      BaseUIComponentProps<'div', State>,
      NonNativeButtonProps,
      Pick<useDragPreview.Parameters, 'renderDragPreview'> {
    data: SchedulerOccurrencePlaceholderExternalDragData;
    /**
     * Callback fired when the event is dropped into the Event Calendar.
     */
    onEventDrop?: () => void;
  }

  export interface DragData {
    source: 'StandaloneEvent';
    eventId: string | number;
    occurrenceKey: string;
    eventData: SchedulerOccurrencePlaceholderExternalDragData;
    onEventDrop?: () => void;
  }
}
