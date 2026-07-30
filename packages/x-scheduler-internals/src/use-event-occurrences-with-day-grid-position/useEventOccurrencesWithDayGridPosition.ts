import * as React from 'react';
import type {
  SchedulerEventOccurrence,
  SchedulerEventOccurrencePlaceholder,
  SchedulerProcessedDate,
} from '../models';
import type { useEventOccurrencesGroupedByDay } from '../use-event-occurrences-grouped-by-day';
import { useAdapterContext } from '../use-adapter-context';
import { sortEventOccurrences } from '../sort-event-occurrences';

/**
 * Places event occurrences for a list of days, where if an event is rendered in a day, it fills the entire day cell (no notion of time).
 */
export function useEventOccurrencesWithDayGridPosition(
  parameters: useEventOccurrencesWithDayGridPosition.Parameters,
): useEventOccurrencesWithDayGridPosition.ReturnValue {
  const { days, occurrencesMap, shouldAddPosition, maxEvents } = parameters;
  const adapter = useAdapterContext();

  return React.useMemo(() => {
      throw new Error("STUB");
  }, [adapter, days, maxEvents, occurrencesMap, shouldAddPosition]);
}

export namespace useEventOccurrencesWithDayGridPosition {
  export interface Parameters {
    /**
     * The days to add the occurrences to.
     */
    days: SchedulerProcessedDate[];
    /**
     * The occurrences Map as returned by `useEventOccurrences()`.
     * It should contain the occurrences for each requested day but can also contain occurrences for other days.
     */
    occurrencesMap: useEventOccurrencesGroupedByDay.ReturnValue;
    /**
     * Whether the position should be computed for this event occurrence.
     * @default () => true
     */
    shouldAddPosition?: (occurrence: SchedulerEventOccurrence) => boolean;
    /**
     * The maximum number of events to show before collapsing into a "+N more" overflow.
     * When provided, events beyond this threshold are tracked so they can resurface with
     * a continuation arrow on later days where a visible row becomes available.
     */
    maxEvents?: number | null;
  }

  export interface EventOccurrencePosition {
    /**
     * The 1-based index of the row the event should be rendered in.
     */
    index: number;
    /**
     * The number of days the event should span across.
     */
    daySpan: number;
    /**
     * Whether the event should be rendered as invisible.
     * Invisible events are used to reserve space for events that started on a previous day.
     */
    isInvisible?: boolean;
  }

  export interface EventOccurrenceWithPosition extends SchedulerEventOccurrence {
    position: EventOccurrencePosition;
  }

  export interface EventOccurrencePlaceholderWithPosition extends SchedulerEventOccurrencePlaceholder {
    position: EventOccurrencePosition;
  }

  export type EventRenderableOccurrenceWithPosition =
    EventOccurrenceWithPosition | EventOccurrencePlaceholderWithPosition;

  export interface DayData extends SchedulerProcessedDate {
    /**
     * Occurrences that have been augmented with position information.
     */
    withPosition: EventOccurrenceWithPosition[];
    /**
     * Occurrences that do not need position information.
     */
    withoutPosition: SchedulerEventOccurrence[];
  }

  export type ReturnValue = {
    /**
     * The occurrences of each day.
     */
    days: DayData[];
    /**
     * The biggest index an event with position has on this day.
     */
    maxIndex: number;
  };
}
