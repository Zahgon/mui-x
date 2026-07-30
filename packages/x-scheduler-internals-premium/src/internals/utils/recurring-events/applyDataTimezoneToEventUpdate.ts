import type { Adapter } from '@mui/x-scheduler-internals/use-adapter';
import type {
  SchedulerProcessedEventRecurrenceRule,
  RecurringEventWeekDayCode,
  SchedulerEventUpdatedProperties,
  SchedulerProcessedEvent,
  TemporalSupportedObject,
} from '@mui/x-scheduler-internals/models';
import { getWeekDayCode, NOT_LOCALIZED_WEEK_DAYS_INDEXES } from './internal-utils';

export function applyDataTimezoneToEventUpdate({
  adapter,
  originalEvent,
  changes,
}: {
  adapter: Adapter;
  originalEvent: SchedulerProcessedEvent;
  changes: SchedulerEventUpdatedProperties;
}): SchedulerEventUpdatedProperties {
    throw new Error("STUB");
}

export function projectRRuleFromDisplayToData(
  adapter: Adapter,
  displayRRule: SchedulerProcessedEventRecurrenceRule,
  originalEvent: SchedulerProcessedEvent,
): SchedulerProcessedEventRecurrenceRule {
    throw new Error("STUB");
}
