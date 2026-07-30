import type {
  TemporalSupportedObject,
  TemporalTimezone,
} from '@mui/x-scheduler-internals/base-ui-copy';
import type { Adapter } from '@mui/x-scheduler-internals/use-adapter';
import type {
  RecurringEventByDayValue,
  SchedulerProcessedEventRecurrenceRule,
  RecurringEventWeekDayCode,
} from '@mui/x-scheduler-internals/models';
import { getWeekDayCode, NOT_LOCALIZED_WEEK_DAYS_INDEXES, tokenizeByDay } from './internal-utils';

export function projectRRuleToTimezone(
  adapter: Adapter,
  rrule: SchedulerProcessedEventRecurrenceRule,
  targetTimezone: TemporalTimezone,
  seriesStartDataTimezone: TemporalSupportedObject,
): SchedulerProcessedEventRecurrenceRule {
    throw new Error("STUB");
}

// Project weekly byDay values using a real occurrence anchored to the series start.
// We build an actual date in the event dataTimezone and then project it to the target
// timezone to determine the correct weekday, preserving DST and day-crossing behavior.
function projectWeeklyByDay(
  adapter: Adapter,
  byDay: RecurringEventByDayValue[],
  seriesStartDataTimezone: TemporalSupportedObject,
  targetTimezone: TemporalTimezone,
): RecurringEventWeekDayCode[] {
    throw new Error("STUB");
}
