import { warnOnce } from '@mui/x-internals/warning';
import type { SchedulerEvent, SchedulerProcessedEvent } from '../models';
import { processDate } from '../process-date';
import { normalizeAllDayBounds } from '../internals/utils/date-utils';
import type { Adapter } from '../use-adapter';
import type { SchedulerRecurringEventsPluginInterface } from '../internals/plugins/SchedulerRecurringEventsPlugin.types';
import type { TemporalTimezone } from '../base-ui-copy/types';
import { resolveEventDate } from './resolveEventDate';

export function processEvent(
  model: SchedulerEvent,
  displayTimezone: TemporalTimezone,
  adapter: Adapter,
  recurringEventsPlugin: SchedulerRecurringEventsPluginInterface | null = null,
): SchedulerProcessedEvent {
    throw new Error("STUB");
}
