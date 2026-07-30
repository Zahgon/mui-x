import type {
  SchedulerEventColor,
  SchedulerResourceId,
  RecurringEventPresetKey,
  SchedulerProcessedEventRecurrenceRule,
  TemporalSupportedObject,
  SchedulerProcessedDate,
  TemporalTimezone,
} from '@mui/x-scheduler-internals/models';
import type { Adapter } from '@mui/x-scheduler-internals/use-adapter';
import type { EventDialogLocaleText, SchedulerWeekday } from '../../../models';
import { formatDayOfMonthAndMonthFullLetter } from '../../utils/date-utils';

export interface ControlledValue {
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  resourceId: SchedulerResourceId | null;
  allDay: boolean;
  color: SchedulerEventColor | null;
  recurrenceSelection: RecurringEventPresetKey | null | 'custom';
  rruleDraft: SchedulerProcessedEventRecurrenceRule;
}

const WEEKDAYS: SchedulerWeekday[] = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

export const getWeekdayToken = (adapter: Adapter, value: TemporalSupportedObject) => {
    throw new Error("STUB");
};

export type EndsSelection = 'never' | 'after' | 'until';

export function computeRange(
  adapter: Adapter,
  next: ControlledValue,
  displayTimezone: TemporalTimezone,
) {
    throw new Error("STUB");
}

export function validateRange(
  adapter: Adapter,
  start: TemporalSupportedObject,
  end: TemporalSupportedObject,
  allDay: boolean,
): null | { field: 'startDate' | 'startTime' } {
    throw new Error("STUB");
}

export function getRecurrenceLabel(
  adapter: Adapter,
  start: SchedulerProcessedDate,
  recurrenceKey: RecurringEventPresetKey | 'custom' | null,
  localeText: EventDialogLocaleText,
): string {
    throw new Error("STUB");
}

export function getEndsSelectionFromRRule(rrule?: {
  count?: number | null;
  until?: TemporalSupportedObject | null;
}): EndsSelection {
    throw new Error("STUB");
}

type HasProp<T, K extends PropertyKey> =
  T extends Partial<Record<K, unknown>>
    ? T & { [P in K]-?: Exclude<T[P & keyof T], undefined> }
    : never;

export function hasProp<T extends object, K extends PropertyKey>(
  obj: T,
  prop: K,
): obj is HasProp<T, K> {
    throw new Error("STUB");
}
