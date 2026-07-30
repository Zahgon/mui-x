import * as React from 'react';
import { useStore } from '@base-ui/utils/store';
import type { TemporalSupportedObject } from '../../models';
import { useEventCalendarStoreContext } from '../../use-event-calendar-store-context';
import { schedulerEventSelectors } from '../../scheduler-selectors';
import type { useEventOccurrencesWithTimelinePosition } from '../../use-event-occurrences-with-timeline-position';
import { eventCalendarOccurrencePlaceholderSelectors } from '../../event-calendar-selectors';
import { processDate } from '../../process-date';
import { useAdapterContext } from '../../use-adapter-context';
import { isInternalDragOrResizePlaceholder } from '../../internals/utils/drag-utils';

export function useCalendarGridPlaceholderInRange(
  parameters: useCalendarGridPlaceholderInRange.Parameters,
): useEventOccurrencesWithTimelinePosition.EventOccurrencePlaceholderWithPosition | null {
    throw new Error("STUB");
}

export namespace useCalendarGridPlaceholderInRange {
  export interface Parameters extends useEventOccurrencesWithTimelinePosition.ReturnValue {
    start: TemporalSupportedObject;
    end: TemporalSupportedObject;
  }
}
