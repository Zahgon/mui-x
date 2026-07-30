'use client';
import * as React from 'react';
import { useStore } from '@base-ui/utils/store';
import { useIsoLayoutEffect } from '@base-ui/utils/useIsoLayoutEffect';
import type { BaseUIComponentProps } from '@mui/x-scheduler-internals/base-ui-copy';
import { useRenderElement } from '@mui/x-scheduler-internals/base-ui-copy';
import type { SchedulerResourceId } from '@mui/x-scheduler-internals/models';
import { schedulerOccurrenceSelectors } from '@mui/x-scheduler-internals/scheduler-selectors';
import { useEventTimelinePremiumStoreContext } from '../../use-event-timeline-premium-store-context';
import { eventTimelinePremiumPresetSelectors } from '../../event-timeline-premium-selectors';
import { TimelineGridRootCssVars } from './TimelineGridRootCssVars';
import type {
  TimelineGridCellCoordinates,
  TimelineGridColumnType,
} from '../../models/timelineGrid';
import { TimelineGridRootContext, DEFAULT_COLUMN_TYPES } from './TimelineGridRootContext';

export const TimelineGridRoot = React.forwardRef(function TimelineGridRoot(
  componentProps: TimelineGridRoot.Props,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
    throw new Error("STUB");
});

export namespace TimelineGridRoot {
  export interface State {}

  export interface Props extends BaseUIComponentProps<'div', State> {
    /**
     * The ordered list of column types that are rendered in the grid.
     * Used for horizontal arrow-key navigation.
     * @default ['title', 'events']
     */
    columnTypes?: readonly [TimelineGridColumnType, ...TimelineGridColumnType[]];
  }
}
