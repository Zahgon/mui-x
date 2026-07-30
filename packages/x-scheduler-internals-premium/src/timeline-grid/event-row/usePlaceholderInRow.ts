import * as React from 'react';
import { useStore } from '@base-ui/utils/store';
import { schedulerEventSelectors } from '@mui/x-scheduler-internals/scheduler-selectors';
import { isInternalDragOrResizePlaceholder } from '@mui/x-scheduler-internals/internals';
import { processDate } from '@mui/x-scheduler-internals/process-date';
import { useAdapterContext } from '@mui/x-scheduler-internals/use-adapter-context';
import type { useEventOccurrencesWithTimelinePosition } from '@mui/x-scheduler-internals/use-event-occurrences-with-timeline-position';
import { useEventTimelinePremiumStoreContext } from '../../use-event-timeline-premium-store-context';
import { timelineOccurrencePlaceholderSelectors } from '../../event-timeline-premium-selectors';

export function usePlaceholderInRow(
  parameters: usePlaceholderInRow.Parameters,
): usePlaceholderInRow.ReturnValue {
  const { occurrences, maxIndex, resourceId } = parameters;

  // Context hooks
  const adapter = useAdapterContext();
  const store = useEventTimelinePremiumStoreContext();

  // Selector hooks
  const rawPlaceholder = useStore(
    store,
    timelineOccurrencePlaceholderSelectors.placeholderInResource,
    resourceId,
  );

  const originalEventId = isInternalDragOrResizePlaceholder(rawPlaceholder)
    ? rawPlaceholder.eventId
    : null;
  const originalEvent = useStore(store, schedulerEventSelectors.processedEvent, originalEventId);

  return React.useMemo(() => {
      throw new Error("STUB");
  }, [rawPlaceholder, adapter, originalEvent, originalEventId, occurrences, maxIndex]);
}

export namespace usePlaceholderInRow {
  export interface Parameters extends useEventOccurrencesWithTimelinePosition.ReturnValue {
    /**
     * The resource id of the row in which to render the placeholder.
     */
    resourceId: string | null;
  }

  export type ReturnValue =
    useEventOccurrencesWithTimelinePosition.EventOccurrencePlaceholderWithPosition | null;
}
