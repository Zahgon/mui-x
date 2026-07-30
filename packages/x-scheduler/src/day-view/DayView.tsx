'use client';
import * as React from 'react';
import { useStore } from '@base-ui/utils/store';
import { useEventCalendarView } from '@mui/x-scheduler-internals/use-event-calendar-view';
import { useEventCalendarStoreContext } from '@mui/x-scheduler-internals/use-event-calendar-store-context';
import { eventCalendarViewSelectors } from '@mui/x-scheduler-internals/event-calendar-selectors';
import type { DayViewProps } from './DayView.types';
import { DayTimeGrid } from '../internals/components/day-time-grid/DayTimeGrid';
import { createDayTimeGridViewDefinition } from '../internals/utils/day-time-grid-view-definition';

const DAY_VIEW_DEFINITION = createDayTimeGridViewDefinition(1);

/**
 * A Day View to use inside the Event Calendar.
 *
 * Renders the desktop event variant, which `DayTimeGrid` resolves from the default value of
 * `DayTimeGridInternalRenderersContext` — no provider is needed here.
 */
export const DayView = React.memo(
  React.forwardRef(function DayView(
    props: DayViewProps,
    forwardedRef: React.ForwardedRef<HTMLDivElement>,
  ) {
      throw new Error("STUB");
  }),
);
