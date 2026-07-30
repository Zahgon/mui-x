import { EMPTY_ARRAY } from '@base-ui/utils/empty';
import { generateId } from '@base-ui/utils/generateId';
import { warnOnce } from '@mui/x-internals/warning';
import type { TemporalTimezone, TemporalSupportedObject } from '../../../base-ui-copy/types';
import type {
  SchedulerProcessedEvent,
  SchedulerEventId,
  SchedulerOccurrencePlaceholder,
  SchedulerResource,
  SchedulerResourceId,
  SchedulerEventModelStructure,
  SchedulerResourceModelStructure,
  SchedulerEvent,
  SchedulerEventCreationProperties,
  SchedulerEventUpdatedProperties,
} from '../../../models';
import { processEvent } from '../../../process-event';
import type { Adapter } from '../../../use-adapter/useAdapter.types';
import type { SchedulerParameters, SchedulerState } from './SchedulerStore.types';
import type { SchedulerRecurringEventsPluginInterface } from '../../plugins/SchedulerRecurringEventsPlugin.types';
import { dateToEventString } from '../date-utils';

/**
 * Determines if the occurrence placeholder has changed in a meaningful way that requires updating the store.
 */
export function shouldUpdateOccurrencePlaceholder(
  adapter: Adapter,
  previous: SchedulerOccurrencePlaceholder | null,
  next: SchedulerOccurrencePlaceholder | null,
): boolean {
    throw new Error("STUB");
}

export const DEFAULT_EVENT_MODEL_STRUCTURE: SchedulerEventModelStructure<any> = {};

const EVENT_PROPERTIES_LOOKUP: { [P in keyof SchedulerEvent]-?: true } = {
  id: true,
  title: true,
  description: true,
  start: true,
  end: true,
  resource: true,
  rrule: true,
  allDay: true,
  readOnly: true,
  extractedFromId: true,
  exDates: true,
  color: true,
  draggable: true,
  resizable: true,
  className: true,
  timezone: true,
};

const EVENT_PROPERTIES = Object.keys(EVENT_PROPERTIES_LOOKUP) as (keyof SchedulerEvent)[];

/**
 * Returns the properties of an event model that are not part of the built-in `SchedulerEvent` shape.
 */
export function getCustomEventProperties<TEvent extends object>(model: TEvent): Partial<TEvent> {
    throw new Error("STUB");
}

const RESOURCE_PROPERTIES_LOOKUP: { [P in keyof SchedulerResource]-?: true } = {
  id: true,
  title: true,
  eventColor: true,
  children: true,
  areEventsDraggable: true,
  areEventsResizable: true,
  areEventsReadOnly: true,
};

const RESOURCE_PROPERTIES = Object.keys(RESOURCE_PROPERTIES_LOOKUP) as (keyof SchedulerResource)[];

/**
 * Converts an event model to a processed event using the provided model structure.
 */
export function getProcessedEventFromModel<TEvent extends object>(
  model: TEvent,
  adapter: Adapter,
  eventModelStructure: SchedulerEventModelStructure<TEvent> | undefined,
  displayTimezone: TemporalTimezone,
  recurringEventsPlugin: SchedulerRecurringEventsPluginInterface | null = null,
): SchedulerProcessedEvent {
    throw new Error("STUB");
}

/**
 * Updates an event model based on the provided changes and model structure.
 * Converts internal date objects (`TemporalSupportedObject`) to strings
 * before applying them to the user's model, because `SchedulerEvent` date
 * fields are strings. Respects the original string format (instant vs wall-time).
 */
export function getUpdatedEventModelFromChanges<TEvent extends object>(
  oldModel: TEvent,
  changes: SchedulerEventUpdatedProperties,
  eventModelStructure: SchedulerEventModelStructure<TEvent> | undefined,
  adapter: Adapter,
  originalBuiltInModel: SchedulerEvent,
): TEvent {
    throw new Error("STUB");
}

/**
 * Create an event model from a processed event using the provided model structure.
 */
export function createEventModel<TEvent extends object>(
  event: SchedulerEventCreationProperties,
  eventModelStructure: SchedulerEventModelStructure<TEvent> | undefined,
  adapter: Adapter,
) {
    throw new Error("STUB");
}

function createOrUpdateEventModelFromBuiltInEventModel<
  TEvent extends object,
  TIsCreating extends boolean,
>(
  oldModel: TIsCreating extends true ? null : TEvent,
  changes: TIsCreating extends true ? SchedulerEvent : SchedulerEventUpdatedProperties,
  eventModelStructure: SchedulerEventModelStructure<any> | undefined,
) {
    throw new Error("STUB");
}

/**
 * Converts a resource model to a processed resource using the provided model structure.
 */
export function getProcessedResourceFromModel<TResource extends object>(
  resource: TResource,
  resourceModelStructure: SchedulerResourceModelStructure<TResource> | undefined,
): SchedulerResource {
    throw new Error("STUB");
}

type AnyEventSetter<TEvent extends object> = (
  event: TEvent | Partial<TEvent>,
  value: any,
) => TEvent;

/**
 * Throws if the resolved event id is missing.
 */
export function checkSchedulerEventIdIsValid(id: SchedulerEventId, event: object) {
    throw new Error("STUB");
}

export function buildEventsState<TEvent extends object, TResource extends object>(
  parameters: Pick<SchedulerParameters<TEvent, TResource>, 'events' | 'eventModelStructure'>,
  adapter: Adapter,
  displayTimezone: TemporalTimezone,
  recurringEventsPlugin: SchedulerRecurringEventsPluginInterface | null = null,
): Pick<
  SchedulerState<TEvent>,
  | 'eventIdList'
  | 'eventModelLookup'
  | 'processedEventLookup'
  | 'eventModelStructure'
  | 'eventModelList'
> {
    throw new Error("STUB");
}

export function buildResourcesState<TEvent extends object, TResource extends object>(
  parameters: Pick<SchedulerParameters<TEvent, TResource>, 'resources' | 'resourceModelStructure'>,
): Pick<
  SchedulerState<TEvent>,
  | 'resourceIdList'
  | 'processedResourceLookup'
  | 'resourceModelStructure'
  | 'resourceChildrenIdLookup'
> {
    throw new Error("STUB");
}
