import type { TemporalSupportedObject, TemporalTimezone } from '../base-ui-copy/types';
import type { Adapter } from '../use-adapter';
import type { SchedulerEventId } from '../models';

/**
 * Resolves an event date string to a `TemporalSupportedObject`.
 *
 * - Strings ending with `"Z"` are treated as instants (UTC).
 * - Strings without `"Z"` are treated as wall-time and interpreted in `dataTimezone`.
 */
export function resolveEventDate(
  value: string,
  dataTimezone: TemporalTimezone,
  adapter: Adapter,
  eventId?: SchedulerEventId,
): TemporalSupportedObject {
    throw new Error("STUB");
}
