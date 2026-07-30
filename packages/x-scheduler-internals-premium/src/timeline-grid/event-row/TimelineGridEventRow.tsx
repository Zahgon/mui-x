'use client';
import * as React from 'react';
import { useStore } from '@base-ui/utils/store';
import type { BaseUIComponentProps } from '@mui/x-scheduler-internals/base-ui-copy';
import { useRenderElement } from '@mui/x-scheduler-internals/base-ui-copy';
import { schedulerOccurrenceSelectors } from '@mui/x-scheduler-internals/scheduler-selectors';
import { useEventOccurrencesWithTimelinePosition } from '@mui/x-scheduler-internals/use-event-occurrences-with-timeline-position';
import { useAdapterContext } from '@mui/x-scheduler-internals/use-adapter-context';
import { useEventCreation, useKeyboardEventCreation } from '@mui/x-scheduler-internals/internals';
import { EVENT_CREATION_PRECISION_MINUTE } from '@mui/x-scheduler-internals/constants';
import type { SchedulerResourceId } from '@mui/x-scheduler-internals/models';
import { TimelineGridEventRowContext } from './TimelineGridEventRowContext';
import { useEventRowDropTarget } from './useEventRowDropTarget';
import { usePlaceholderInRow } from './usePlaceholderInRow';
import { useEventTimelinePremiumStoreContext } from '../../use-event-timeline-premium-store-context';
import { eventTimelinePremiumPresetSelectors } from '../../event-timeline-premium-selectors';
import { TimelineGridEventRowDataAttributes } from './TimelineGridEventRowDataAttributes';
import { useTimelineGridRowKeyboard } from '../../internals/utils/useTimelineGridRowKeyboard';

const stateAttributesMapping = {
  resourceId: (value: SchedulerResourceId) => { throw new Error("STUB"); },
  creationDisabled: (value: boolean) =>
    { throw new Error("STUB"); },
};

export const TimelineGridEventRow = React.forwardRef(function TimelineGridEventRow(
  componentProps: TimelineGridEventRow.Props,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
    throw new Error("STUB");
});

export namespace TimelineGridEventRow {
  export interface State {
    /**
     * The ID of the resource for this event row.
     */
    resourceId: SchedulerResourceId;
    /**
     * Whether event creation is disabled.
     */
    creationDisabled: boolean;
  }

  export interface Props
    extends Omit<BaseUIComponentProps<'div', State>, 'children'>, useEventRowDropTarget.Parameters {
    children: (parameters: ChildrenParameters) => React.ReactNode;
  }

  export interface ChildrenParameters extends useEventOccurrencesWithTimelinePosition.ReturnValue {
    placeholder: usePlaceholderInRow.ReturnValue;
  }
}
