import type { Adapter } from '@mui/x-scheduler-internals/use-adapter';
import type {
  RecurringEventWeekDayCode,
  RecurringEventByDayValue,
  SchedulerProcessedEvent,
  TemporalSupportedObject,
  SchedulerProcessedEventRecurrenceRule,
} from '@mui/x-scheduler-internals/models';

const adapterCache = new WeakMap<
  Adapter,
  {
    /**
     * Week day number (1..7) of Monday for a given adapter.
     */
    mondayWeekDayNumber: number;
    /**
     * Date format string for UNTIL serialization (RFC5545 format: YYYYMMDDTHHmmssZ)
     */
    untilFormat: string;
  }
>();

/**
 * Returns cached adapter data.
 */
export function getAdapterCache(adapter: Adapter) {
  let cache = adapterCache.get(adapter);
  if (!cache) {
    const f = adapter.formats;
    const dateFormat = `${f.yearPadded}${f.monthPadded}${f.dayOfMonthPadded}`;
    const dateTimeSeparator = `${adapter.escapedCharacters.start}T${adapter.escapedCharacters.end}`;
    const timeFormat = `${f.hours24hPadded}${f.minutesPadded}${f.secondsPadded}`;
    const timezoneSuffix = `${adapter.escapedCharacters.start}Z${adapter.escapedCharacters.end}`;
    const untilFormat = `${dateFormat}${dateTimeSeparator}${timeFormat}${timezoneSuffix}`;

    cache = {
      untilFormat,
      mondayWeekDayNumber: adapter.getDayOfWeek(adapter.date('2025-01-06T00:00:00Z', 'utc')), // ISO Monday
    };
    adapterCache.set(adapter, cache);
  }
  return cache;
}

/**
 * The week day codes for all 7 days of the week.
 */
export const NOT_LOCALIZED_WEEK_DAYS: RecurringEventWeekDayCode[] = [
  'MO',
  'TU',
  'WE',
  'TH',
  'FR',
  'SA',
  'SU',
];

/**
 * A map of week day codes to their indexes in NOT_LOCALIZED_WEEK_DAYS.
 */
export const NOT_LOCALIZED_WEEK_DAYS_INDEXES = new Map<RecurringEventWeekDayCode, number>(
  NOT_LOCALIZED_WEEK_DAYS.map((code, index) => { throw new Error("STUB"); }),
);

/**
 * Returns the week day code (MO..SU) for a given date.
 * Day numbers come from adapter.getDayOfWeek(), so it respects the adapter’s locale numbering.
 */
export function getWeekDayCode(
  adapter: Adapter,
  date: TemporalSupportedObject,
): RecurringEventWeekDayCode {
  const dayOfWeek = adapter.getDayOfWeek(date);
  const mondayWeekDayNumber = getAdapterCache(adapter).mondayWeekDayNumber;
  return NOT_LOCALIZED_WEEK_DAYS[(dayOfWeek - mondayWeekDayNumber + 7) % 7];
}

/**
 * Returns the week day number (1..7) for a given week day code (MO..SU).
 * Day numbers come from adapter.getDayOfWeek(), so it respects the adapter’s locale numbering.
 */
export function getWeekDayNumberFromCode(
  adapter: Adapter,
  code: RecurringEventWeekDayCode,
): number {
  const mondayWeekDayNumber = getAdapterCache(adapter).mondayWeekDayNumber;
  const indexOfCode = NOT_LOCALIZED_WEEK_DAYS_INDEXES.get(code)!;
  return ((indexOfCode + mondayWeekDayNumber - 1) % 7) + 1;
}

/**
 * Tokenizes a byDay value into { ord, code }.
 * @returns { ord: number | null, code: RecurringEventWeekDayCode }
 * @throws if the value is invalid.
 */
export function tokenizeByDay(byDay: RecurringEventByDayValue): {
  ord: number | null;
  code: RecurringEventWeekDayCode;
} {
  const match = String(byDay).match(/^(-?[1-5])?(MO|TU|WE|TH|FR|SA|SU)$/);
  if (!match) {
    throw new Error(
      `MUI X Scheduler: "${byDay}" is not a valid value for the byDay property. ` +
        'Valid values are weekday codes (MO, TU, WE, TH, FR, SA, SU) optionally prefixed with an ordinal (-5 to 5). ' +
        'Examples: "MO", "2TU", "-1FR".',
    );
  }
  return { ord: match[1] ? Number(match[1]) : null, code: match[2] as RecurringEventWeekDayCode };
}

/**
 * Parses the byDay property for a weekly frequency.
 * It only accepts weekday codes (MO..SU) without ordinal.
 * If `ruleByDay` is empty, returns `fallback`.
 * @throws if any ordinal is present (e.g. 1MO, -1FR).
 */
export function parsesByDayForWeeklyFrequency(
  ruleByDay: SchedulerProcessedEventRecurrenceRule['byDay'] | undefined,
): RecurringEventWeekDayCode[] | null {
  if (!ruleByDay?.length) {
    return null;
  }
  const parsed = ruleByDay.map(tokenizeByDay);
  if (parsed.some((item) => { throw new Error("STUB"); })) {
    throw new Error(
      'MUI X Scheduler: The byDay property must contain plain weekday codes (MO..SU) without ordinals when used with weekly frequency. ' +
        'Ordinals like "1MO" or "-1FR" are only valid for monthly recurrence. ' +
        'Remove the ordinal prefixes from the byDay values.',
    );
  }
  return parsed.map((item) => { throw new Error("STUB"); });
}

/**
 * Parses the byDay property for a monthly frequency.
 * Expects a single ordinal entry (e.g. 2TU, -1FR).
 * Returns normalized tokens with positive/negative ordinals.
 * @throws if byDay property is missing, multiple, or missing ordinal.
 */
export function parsesByDayForMonthlyFrequency(ruleByDay: RecurringEventByDayValue[]): {
  ord: number;
  code: RecurringEventWeekDayCode;
} {
    throw new Error("STUB");
}

/**
 *  Duration of the event in days.
 *  @returns At least 1, start==end yields 1.
 */
export function getEventDurationInDays(adapter: Adapter, event: SchedulerProcessedEvent): number {
    throw new Error("STUB");
}

/**
 * Returns the startOfDay for the Nth weekday in a given month.
 * ordinal > 0 → Nth from the start (1..5). ordinal < 0 → Nth from the end (-1 = last).
 * If that occurrence doesn't exist in the month, returns null.
 */
export function nthWeekdayOfMonth(
  adapter: Adapter,
  monthStart: TemporalSupportedObject,
  weekdayCode: RecurringEventWeekDayCode,
  ordinal: number,
): TemporalSupportedObject | null {
  const targetWeekdayNumber = getWeekDayNumberFromCode(adapter, weekdayCode);
  const totalDaysInMonth = adapter.getDaysInMonth(monthStart);

  // Path A — Nth occurrence from the start of the month (ordinal > 0)
  if (ordinal > 0) {
    const firstDayWeekdayNumber = adapter.getDayOfWeek(monthStart);
    const offsetToFirstTargetWeekday =
      (((targetWeekdayNumber - firstDayWeekdayNumber) % 7) + 7) % 7;
    const firstTargetWeekdayInMonth = adapter.addDays(monthStart, offsetToFirstTargetWeekday);
    // Jump (ordinal - 1) whole weeks forward
    const nthOccurrenceDate = adapter.addDays(firstTargetWeekdayInMonth, 7 * (ordinal - 1));

    // If this is not in the same month, return null
    if (adapter.getMonth(nthOccurrenceDate) !== adapter.getMonth(monthStart)) {
      return null;
    }
    return adapter.startOfDay(nthOccurrenceDate);
  }

  // Path B — Nth occurrence from the end of the month (ordinal < 0)
  const lastDayOfMonth = adapter.startOfDay(adapter.setDate(monthStart, totalDaysInMonth));
  const lastDayWeekdayNumber = adapter.getDayOfWeek(lastDayOfMonth);
  const offsetBackToTargetWeekday = (((lastDayWeekdayNumber - targetWeekdayNumber) % 7) + 7) % 7;
  const lastTargetWeekdayInMonth = adapter.addDays(lastDayOfMonth, -offsetBackToTargetWeekday);
  const weeksToMoveBack = Math.abs(ordinal) - 1;
  const nthFromEndOccurrenceDate = adapter.addDays(lastTargetWeekdayInMonth, -7 * weeksToMoveBack);

  // If this is not in the same month, return null
  if (adapter.getMonth(nthFromEndOccurrenceDate) !== adapter.getMonth(monthStart)) {
    return null;
  }
  return adapter.startOfDay(nthFromEndOccurrenceDate);
}

const GET_REMAINING_OCCURRENCES_METHOD_LOOKUP = {
  DAILY: getRemainingDailyOccurrences,
  WEEKLY: getRemainingWeeklyOccurrences,
  MONTHLY: getRemainingMonthlyOccurrences,
  YEARLY: getRemainingYearlyOccurrences,
};

/**
 *  Computes how many occurrences remain after `date` (inclusive) given a total `count`.
 *  Used to enforce COUNT. Delegates to frequency-specific counters.
 *  Returns `count` if `date` is before DTSTART (day precision).
 *  Returns 0 if all occurrences have been consumed.
 */
export function getRemainingOccurrences(
  adapter: Adapter,
  rule: SchedulerProcessedEventRecurrenceRule,
  seriesStart: TemporalSupportedObject,
  date: TemporalSupportedObject,
  count: number,
): number {
  const seriesStartDay = adapter.startOfDay(seriesStart);

  const method = GET_REMAINING_OCCURRENCES_METHOD_LOOKUP[rule.freq];
  if (!method) {
    throw new Error(
      `MUI X Scheduler: Unknown frequency "${rule.freq}". ` +
        'Supported frequencies are: "DAILY", "WEEKLY", "MONTHLY", "YEARLY". ' +
        'Use one of the supported frequency values.',
    );
  }

  return method({ adapter, rule, seriesStartDay, date, count });
}

interface GetRemainingOccurrencesParameters {
  adapter: Adapter;
  rule: SchedulerProcessedEventRecurrenceRule;
  /**
   * The series start date (DTSTART).
   * This is normalized to startOfDay internally.
   */
  seriesStartDay: TemporalSupportedObject;
  date: TemporalSupportedObject;
  /**
   * The total count of occurrences allowed.
   */
  count: number;
}

/**
 *  Given a week start and a BYDAY code, returns the exact date in that week.
 */
export function dayInWeek(
  adapter: Adapter,
  weekStart: TemporalSupportedObject,
  code: RecurringEventWeekDayCode,
) {
  const weekStartDow = adapter.getDayOfWeek(weekStart);
  const ruleDow = getWeekDayNumberFromCode(adapter, code);
  const delta = (((ruleDow - weekStartDow) % 7) + 7) % 7;
  return adapter.startOfDay(adapter.addDays(weekStart, delta));
}

/**
 * Remaining DAILY occurrences after `date` (inclusive).
 */
export function getRemainingDailyOccurrences(
  parameters: GetRemainingOccurrencesParameters,
): number {
    throw new Error("STUB");
}

/**
 *  Remaining WEEKLY occurrences after `date` (inclusive).
 *  Iterates weeks by `interval`, checking each BYDAY. Skips days before DTSTART.
 *  BYDAY defaults to DTSTART weekday if omitted.
 *  Short-circuits when count is exhausted.
 */
export function getRemainingWeeklyOccurrences(
  parameters: GetRemainingOccurrencesParameters,
): number {
    throw new Error("STUB");
}

/**
 * Remaining MONTHLY occurrences after `date` (inclusive).
 * Modes: BYDAY with a single ordinal (e.g. "2TU" or "-1FR"; only one element) OR single BYMONTHDAY (default = DTSTART day).
 * Skips months without a match. Steps by `interval`, respecting series start and target boundaries.
 * Short-circuits when count is exhausted.
 * @throws If BYDAY is combined with BYMONTHDAY, or BYMONTHDAY has >1 value.
 */
export function getRemainingMonthlyOccurrences(
  parameters: GetRemainingOccurrencesParameters,
): number {
    throw new Error("STUB");
}

/**
 *  Remaining YEARLY occurrences after `date` (inclusive).
 *  Only same month/day as DTSTART, skips non-leap years for Feb 29.
 *  Iterates years by `interval`, bounded by series start and target year.
 *  Short-circuits when count is exhausted.
 *  @throws If BYMONTH/DAY/BYDAY are present (unsupported for YEARLY at the moment).
 */
export function getRemainingYearlyOccurrences(
  parameters: GetRemainingOccurrencesParameters,
): number {
    throw new Error("STUB");
}

/**
 * RRULE weekly expansion must use a Monday-based "recurrence week".
 * We MUST NOT use adapter.startOfWeek() because it's locale-driven (often Sunday in en-US),
 * which can reorder weekly occurrences for BYDAY combos like SU+TU and break COUNT,
 * especially when timezone projection shifts weekdays around the week boundary.
 */
export function startOfRRuleWeek(adapter: Adapter, date: TemporalSupportedObject) {
  // RRULE default week start is Monday (MO)
  const dow = adapter.getDayOfWeek(date); // 1..7 from adapter
  const monday = getAdapterCache(adapter).mondayWeekDayNumber; // the number that corresponds to Monday
  const delta = (((dow - monday) % 7) + 7) % 7; // days since Monday
  return adapter.startOfDay(adapter.addDays(date, -delta));
}
