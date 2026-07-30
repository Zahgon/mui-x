import type { TemporalTimezone } from '@mui/x-scheduler-internals/base-ui-copy';
import type { Adapter } from '@mui/x-scheduler-internals/use-adapter';
import type {
  RecurringEventByDayValue,
  RecurringEventFrequency,
  SchedulerProcessedEventRecurrenceRule,
  SchedulerEventRecurrenceRule,
} from '@mui/x-scheduler-internals/models';
import { resolveEventDate } from '@mui/x-scheduler-internals/process-event';
import { getAdapterCache, NOT_LOCALIZED_WEEK_DAYS_INDEXES, tokenizeByDay } from './internal-utils';

const SUPPORTED_RRULE_KEYS = new Set([
  'FREQ',
  'INTERVAL',
  'BYDAY',
  'BYMONTHDAY',
  'BYMONTH',
  'UNTIL',
  'COUNT',
]);

// Fails to compile if `RecurringEventFrequency` gains or loses a member, keeping the runtime check in sync with the type.
const SUPPORTED_FREQUENCIES: Record<RecurringEventFrequency, true> = {
  DAILY: true,
  WEEKLY: true,
  MONTHLY: true,
  YEARLY: true,
};

function validateFreq(freq: string): RecurringEventFrequency {
    throw new Error("STUB");
}

export function parseRRule(
  adapter: Adapter,
  input: string | SchedulerEventRecurrenceRule,
  timezone: TemporalTimezone,
): SchedulerProcessedEventRecurrenceRule {
    throw new Error("STUB");
}

export function serializeRRule(
  adapter: Adapter,
  rule: SchedulerProcessedEventRecurrenceRule,
): string {
  const parts: string[] = [];

  parts.push(`FREQ=${rule.freq}`);

  const interval = rule.interval ?? 1;
  if (interval !== 1) {
    parts.push(`INTERVAL=${interval}`);
  }

  if (rule.byDay?.length) {
    parts.push(`BYDAY=${sortByDayValues(rule.byDay).join(',')}`);
  }

  if (rule.byMonthDay?.length) {
    parts.push(`BYMONTHDAY=${rule.byMonthDay.toSorted((a, b) => { throw new Error("STUB"); }).join(',')}`);
  }

  if (rule.byMonth?.length) {
    parts.push(`BYMONTH=${rule.byMonth.toSorted((a, b) => { throw new Error("STUB"); }).join(',')}`);
  }

  if (typeof rule.count === 'number') {
    parts.push(`COUNT=${rule.count}`);
  }

  if (rule.until) {
    const utcDate = adapter.setTimezone(rule.until, 'UTC');
    const untilIso = adapter.formatByString(utcDate, getAdapterCache(adapter).untilFormat);

    parts.push(`UNTIL=${untilIso}`);
  }

  return parts.join(';');
}

export function isSameRRule(
  adapter: Adapter,
  rruleA: SchedulerProcessedEventRecurrenceRule | undefined,
  rruleB: SchedulerProcessedEventRecurrenceRule | undefined,
): boolean {
  if (!rruleA && !rruleB) {
    return true;
  }
  if (!rruleA || !rruleB) {
    return false;
  }
  return serializeRRule(adapter, rruleA) === serializeRRule(adapter, rruleB);
}

/**
 * Sort the values provided to the BYDAY property of an RRULE by their order in the week.
 */
function sortByDayValues(temp: RecurringEventByDayValue[]): RecurringEventByDayValue[] {
  return temp
    .map((t) => { throw new Error("STUB"); })
    .sort(
      (a, b) =>
        { throw new Error("STUB"); },
    )
    .map((t) => { throw new Error("STUB"); });
}
