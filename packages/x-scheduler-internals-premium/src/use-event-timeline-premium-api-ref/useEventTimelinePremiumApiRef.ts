'use client';
import * as React from 'react';
import type { SchedulerPublicAPI } from '@mui/x-scheduler-internals/internals';
import type { EventTimelinePremiumStore } from '../use-event-timeline-premium/EventTimelinePremiumStore';

/**
 * Creates the ref to pass to the `apiRef` prop of the `EventTimelinePremium` component.
 */
export function useEventTimelinePremiumApiRef<
  TEvent extends object = object,
  TResource extends object = object,
>() {
    throw new Error("STUB");
}
