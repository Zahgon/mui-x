import {
  DisposableStack,
  disposeSymbol,
  unwrapSuppressedErrors,
} from '@mui/x-internals/disposable';
import { Store } from '@base-ui/utils/store';
import { EMPTY_OBJECT } from '@base-ui/utils/empty';
// TODO: Use the Base UI warning utility once it supports cleanup in tests.
import { warnOnce } from '@mui/x-internals/warning';
import { EventManager } from '@mui/x-internals/EventManager';
import type {
  SchedulerEventId,
  SchedulerOccurrencePlaceholder,
  SchedulerResourceId,
  TemporalSupportedObject,
  SchedulerEventUpdatedProperties,
  RecurringEventScope,
  SchedulerPreferences,
  SchedulerEventCreationProperties,
  SchedulerEventPasteProperties,
} from '../../../models';
import type {
  SchedulerState,
  SchedulerParameters,
  UpdateRecurringEventParameters,
  DeleteRecurringEventParameters,
  SchedulerParametersToStateMapper,
  SchedulerModelUpdater,
  UpdateEventsParameters,
  SchedulerInstanceName,
} from './SchedulerStore.types';
import type { SchedulerRecurringEventsPluginInterface } from '../../plugins/SchedulerRecurringEventsPlugin.types';
import type { SchedulerSchedulingPluginInterface } from '../../plugins/SchedulerSchedulingPlugin.types';
import type {
  SchedulerEvents,
  SchedulerEventListener,
  SchedulerEventParameters,
} from '../../models/events';
import type { Adapter } from '../../../use-adapter/useAdapter.types';
import { schedulerEventSelectors } from '../../../scheduler-selectors';
import {
  buildEventsState,
  buildResourcesState,
  createEventModel,
  getCustomEventProperties,
  getUpdatedEventModelFromChanges,
  shouldUpdateOccurrencePlaceholder,
} from './SchedulerStore.utils';
import { dateToEventString } from '../date-utils';
import { extractStandaloneEvent } from '../extractStandaloneEvent';
import { TimeoutManager } from '../TimeoutManager';
import { createChangeEventDetails } from '../../../base-ui-copy/utils/createBaseUIEventDetails';

const ONE_MINUTE_IN_MS = 60 * 1000;

export const DEFAULT_SCHEDULER_PREFERENCES: SchedulerPreferences = {
  ampm: true,
};

const MOCK_EVENT_STATE = {
  eventIdList: [],
  eventModelLookup: new Map(),
  eventModelStructure: {},
  processedEventLookup: new Map(),
  eventModelList: [],
};

/**
 * Instance shared by the Event Calendar and the Event Timeline Premium components.
 */
export class SchedulerStore<
  TEvent extends object,
  TResource extends object,
  State extends SchedulerState,
  Parameters extends SchedulerParameters<TEvent, TResource>,
> extends Store<State> {
  public parameters: Parameters;

  private initialParameters: Parameters | null = null;

  public instanceName: SchedulerInstanceName;

  private mapper: SchedulerParametersToStateMapper<State, Parameters>;

  protected readonly disposables = new DisposableStack();

  // Registered first via field init so they're disposed last (LIFO): plugins
  // added by subclasses in their constructors dispose first, then the store's
  // own resources.
  protected timeoutManager = this.disposables.use(new TimeoutManager());

  private eventManager = this.disposables.adopt(new EventManager(), (m) => { throw new Error("STUB"); });

  /**
   * Plugin that provides event-scheduling support (dependencies). `null` when not attached.
   */
  protected schedulingPlugin: SchedulerSchedulingPluginInterface | null = null;

  public constructor(
    parameters: Parameters,
    adapter: Adapter,
    instanceName: SchedulerInstanceName,
    mapper: SchedulerParametersToStateMapper<State, Parameters>,
    recurringEventsPlugin: SchedulerRecurringEventsPluginInterface | null = null,
  ) {
      throw new Error("STUB");
  }

  /**
   * Returns the properties of the state that are derived from the parameters.
   * This do not contain state properties that don't update whenever the parameters update.
   */
  private static deriveStateFromParameters<TEvent extends object, TResource extends object>(
    parameters: SchedulerParameters<TEvent, TResource>,
    adapter: Adapter,
  ) {
    return {
      adapter,
      areEventsDraggable: parameters.areEventsDraggable ?? true,
      areEventsResizable: parameters.areEventsResizable ?? true,
      canDragEventsFromTheOutside: parameters.canDragEventsFromTheOutside ?? false,
      canDropEventsToTheOutside: parameters.canDropEventsToTheOutside ?? false,
      eventColor: parameters.eventColor ?? 'teal',
      showCurrentTimeIndicator: parameters.showCurrentTimeIndicator ?? true,
      readOnly: parameters.readOnly ?? false,
      eventCreation: parameters.eventCreation ?? true,
      displayTimezone: parameters.displayTimezone ?? 'default',
    };
  }

  /**
   * Updates the state of the calendar based on the new parameters provided to the root component.
   */
  public updateStateFromParameters = (parameters: Parameters, adapter: Adapter) => {
    // TODO: Move the lazy loading plugin
    const updateModel: SchedulerModelUpdater<State, Parameters> = (
      mutableNewState,
      controlledProp,
      defaultProp,
    ) => {
      if (parameters[controlledProp] !== undefined) {
        mutableNewState[controlledProp] = parameters[controlledProp] as any;
      }

      if (process.env.NODE_ENV !== 'production') {
        const defaultValue = parameters[defaultProp];
        const isControlled = parameters[controlledProp] !== undefined;
        const initialDefaultValue = this.initialParameters?.[defaultProp];
        const initialIsControlled = this.initialParameters?.[controlledProp] !== undefined;

        if (initialIsControlled !== isControlled) {
          warnOnce([
            `MUI X Scheduler: A component is changing the ${
              initialIsControlled ? '' : 'un'
            }controlled ${controlledProp} state of ${this.instanceName} to be ${initialIsControlled ? 'un' : ''}controlled.`,
            'Elements should not switch from uncontrolled to controlled (or vice versa).',
            `Decide between using a controlled or uncontrolled ${controlledProp} element for the lifetime of the component.`,
            "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.",
            'More info: https://fb.me/react-controlled-components',
          ]);
        } else if (JSON.stringify(initialDefaultValue) !== JSON.stringify(defaultValue)) {
          warnOnce([
            `MUI X Scheduler: A component is changing the default ${controlledProp} state of an uncontrolled ${this.instanceName} after being initialized. `,
            `To suppress this warning opt to use a controlled ${this.instanceName}.`,
          ]);
        }
      }
    };

    const newSchedulerState = SchedulerStore.deriveStateFromParameters(
      parameters,
      adapter,
    ) as Partial<State>;

    if (
      !parameters.dataSource &&
      (parameters.events !== this.parameters.events ||
        parameters.eventModelStructure !== this.parameters.eventModelStructure ||
        adapter !== this.state.adapter)
    ) {
      Object.assign(
        newSchedulerState,
        buildEventsState(
          parameters,
          adapter,
          newSchedulerState.displayTimezone!,
          this.state.recurringEventsPlugin,
        ),
      );
    }
    // Recompute "now" only when the display timezone changes; the minute timer maintains it otherwise.
    if (newSchedulerState.displayTimezone !== this.state.displayTimezone) {
      newSchedulerState.nowUpdatedEveryMinute = adapter.now(newSchedulerState.displayTimezone!);
    }

    if (
      parameters.resources !== this.parameters.resources ||
      parameters.resourceModelStructure !== this.parameters.resourceModelStructure
    ) {
      Object.assign(newSchedulerState, buildResourcesState(parameters));
    }

    updateModel(newSchedulerState, 'visibleDate', 'defaultVisibleDate');
    updateModel(newSchedulerState, 'visibleResources', 'defaultVisibleResources');
    updateModel(newSchedulerState, 'collapsedResources', 'defaultCollapsedResources');

    const newState = this.mapper.updateStateFromParameters(
      newSchedulerState,
      parameters,
      updateModel,
    );

    this.update(newState);
    this.parameters = parameters;
  };

  /**
   * Disposes the store synchronously. The React consumer (`useDisposable`)
   * handles the StrictMode double-invocation by suppressing the simulated
   * unmount, so this method does not need to defer the teardown itself.
   */
  [disposeSymbol](): void {
      throw new Error("STUB");
  }

  /**
   * Removes the error with the given key from `state.errors`.
   * The key is the one carried by the matching `StoredError` entry.
   */
  public dismissError = (key: string) => {
      throw new Error("STUB");
  };

  private nextErrorKey = 0;

  /**
   * Appends an error to `state.errors`, wrapping non-Error rejections to preserve
   * the original payload via `cause`. The store owns the key counter so uniqueness
   * is enforced in one place. Does not dedupe — pushing the same `Error` instance
   * twice produces two entries (intentional; e.g. a retried failure that should
   * re-display after the previous one was dismissed).
   * @internal
   */
  public pushError = (error: unknown) => {
      throw new Error("STUB");
  };

  /**
   * Registers an effect to be run when the value returned by the selector changes.
   */
  public registerStoreEffect = <Value>(
    selector: (state: State) => Value,
    effect: (previous: Value, next: Value) => void,
  ) => {
      throw new Error("STUB");
  };

  /**
   * Publishes an event to all its subscribers.
   */
  public publishEvent = <E extends SchedulerEvents>(
    name: E,
    params: SchedulerEventParameters<TEvent, E>,
  ) => {
    this.eventManager.emit(name, params);
  };

  /**
   * Subscribe to an event emitted by the store. Returns an unsubscribe function.
   */
  public subscribeEvent = <E extends SchedulerEvents>(
    eventName: E,
    handler: SchedulerEventListener<TEvent, E>,
  ): (() => void) => {
    this.eventManager.on(eventName, handler);
    return () => { throw new Error("STUB"); };
  };

  protected setVisibleDate = ({
    visibleDate,
    event,
  }: {
    visibleDate: TemporalSupportedObject;
    event?: React.UIEvent | null;
  }) => {
    const { visibleDate: visibleDateProp, onVisibleDateChange } = this.parameters;
    const { adapter } = this.state;
    const hasChange = !adapter.isEqual(this.state.visibleDate, visibleDate);

    if (hasChange) {
      const eventDetails = createChangeEventDetails('none', event?.nativeEvent);
      onVisibleDateChange?.(visibleDate, eventDetails);

      if (!eventDetails.isCanceled && visibleDateProp === undefined) {
        this.set('visibleDate', visibleDate);
      }
    }
  };

  /**
   * Adds, updates and / or deletes events in the calendar.
   */
  protected updateEvents(parameters: UpdateEventsParameters) {
      throw new Error("STUB");
  }

  /**
   * Goes to today's date without changing the view.
   */
  public goToToday = (event: React.UIEvent) => {
      throw new Error("STUB");
  };

  /**
   * Goes to a specific date without changing the view.
   */
  public goToDate = (visibleDate: TemporalSupportedObject, event: React.UIEvent) => {
    this.setVisibleDate({ visibleDate, event });
  };

  /**
   * Creates a new event in the calendar.
   */
  public createEvent = (calendarEvent: SchedulerEventCreationProperties) => {
      throw new Error("STUB");
  };

  /**
   * Updates an event in the calendar.
   */
  public updateEvent = (calendarEvent: SchedulerEventUpdatedProperties) => {
      throw new Error("STUB");
  };

  /**
   * Updates a recurring event in the calendar.
   */
  public updateRecurringEvent = (params: UpdateRecurringEventParameters) => {
    if (this.state.recurringEventsPlugin == null) {
      if (process.env.NODE_ENV !== 'production') {
        warnOnce([
          'MUI X Scheduler: Recurring event updates are a premium feature.',
          'Use <EventCalendarPremium /> or <EventTimelinePremium /> to enable recurring events.',
        ]);
      }
      return;
    }
    this.set('pendingRecurringEventOperation', { kind: 'update', ...params });
  };

  /**
   * Opens the recurring scope dialog to delete a recurring event.
   */
  public deleteRecurringEvent = (params: DeleteRecurringEventParameters) => {
    if (this.state.recurringEventsPlugin == null) {
      if (process.env.NODE_ENV !== 'production') {
        warnOnce([
          'MUI X Scheduler: Recurring event deletions are a premium feature.',
          'Use <EventCalendarPremium /> or <EventTimelinePremium /> to enable recurring events.',
        ]);
      }
      return;
    }
    this.set('pendingRecurringEventOperation', { kind: 'delete', ...params });
  };

  /**
   * Applies the pending recurring event operation after the user selects a scope.
   * @param scope The selected scope, or null if canceled.
   */
  public selectRecurringEventScope = (scope: RecurringEventScope | null) => {
    const { recurringEventsPlugin, pendingRecurringEventOperation, adapter } = this.state;
    if (recurringEventsPlugin == null || pendingRecurringEventOperation == null) {
      return;
    }

    this.set('pendingRecurringEventOperation', null);
    if (scope == null) {
      return;
    }

    const { occurrenceStart, onSubmit } = pendingRecurringEventOperation;
    const eventId =
      pendingRecurringEventOperation.kind === 'update'
        ? pendingRecurringEventOperation.changes.id
        : pendingRecurringEventOperation.eventId;
    const original = schedulerEventSelectors.processedEventRequired(this.state, eventId);
    if (!original.dataTimezone.rrule) {
      throw new Error(
        'MUI X Scheduler: The event targeted by the recurring scope dialog is not recurring. ' +
          'Recurring scope changes require an event with a recurrence rule. ' +
          'Use updateEvent() or deleteEvent() for non-recurring events.',
      );
    }

    // IMPORTANT:
    // Recurring changes are pattern-based, not instant-based.
    // Using the raw instant here would incorrectly shift the recurring rule
    // depending on the user's display timezone. We therefore convert the
    // occurrence to the event's dataTimezone before applying the change.
    const occurrenceStartInDataTimezone = adapter.setTimezone(
      occurrenceStart,
      original.dataTimezone.timezone,
    );

    let updatedEvents: UpdateEventsParameters;
    if (pendingRecurringEventOperation.kind === 'delete') {
      updatedEvents = recurringEventsPlugin.deleteRecurringEvent(
        adapter,
        original,
        occurrenceStartInDataTimezone,
        scope,
      );
    } else {
      const changesInDataTimezone = recurringEventsPlugin.applyDataTimezoneToEventUpdate({
        adapter,
        originalEvent: original,
        changes: pendingRecurringEventOperation.changes,
      });
      updatedEvents = recurringEventsPlugin.updateRecurringEvent(
        adapter,
        original,
        occurrenceStartInDataTimezone,
        changesInDataTimezone,
        scope,
      );
    }

    this.updateEvents(updatedEvents);

    if (onSubmit) {
      queueMicrotask(() => { throw new Error("STUB"); });
    }
  };

  /**
   * Deletes an event from the calendar.
   */
  public deleteEvent = (eventId: SchedulerEventId) => {
      throw new Error("STUB");
  };

  /**
   * Creates an event from an event occurrence.
   * The new event will have the same properties as the original event except:
   * - the start and end dates will be those provided as parameters.
   * - the recurrence rule will be removed.
   */
  public duplicateEventOccurrence = (
    eventId: SchedulerEventId,
    start: TemporalSupportedObject,
    end: TemporalSupportedObject,
  ) => {
      throw new Error("STUB");
  };

  /**
   * Copies an event to be pasted later.
   */
  public copyEvent = (eventId: SchedulerEventId) => {
      throw new Error("STUB");
  };

  /**
   * Cuts an event to be pasted later.
   */
  public cutEvent = (eventId: SchedulerEventId) => {
      throw new Error("STUB");
  };

  /**
   * Pastes the copied or cut event with the provided changes.
   */
  public pasteEvent = (changes: SchedulerEventPasteProperties) => {
      throw new Error("STUB");
  };

  /**
   * Updates the visible resources.
   */
  public setVisibleResources = (
    visibleResources: Record<SchedulerResourceId, boolean>,
    event: Event | undefined,
  ) => {
    const { visibleResources: visibleResourcesProp, onVisibleResourcesChange } = this.parameters;
    const hasChange = this.state.visibleResources !== visibleResources;
    if (hasChange) {
      const eventDetails = createChangeEventDetails('none', event);
      onVisibleResourcesChange?.(visibleResources, eventDetails);
      if (!eventDetails.isCanceled && visibleResourcesProp === undefined) {
        this.set('visibleResources', visibleResources);
      }
    }
  };

  /**
   * Updates the collapsed resources.
   */
  public setCollapsedResources = (
    collapsedResources: Record<SchedulerResourceId, boolean>,
    event: Event | undefined,
  ) => {
    const { collapsedResources: collapsedResourcesProp, onCollapsedResourcesChange } =
      this.parameters;
    const hasChange = this.state.collapsedResources !== collapsedResources;
    if (hasChange) {
      const eventDetails = createChangeEventDetails('none', event);
      onCollapsedResourcesChange?.(collapsedResources, eventDetails);
      if (!eventDetails.isCanceled && collapsedResourcesProp === undefined) {
        this.set('collapsedResources', collapsedResources);
      }
    }
  };

  /**
   * Toggles the collapsed state of a single resource.
   */
  public toggleResourceCollapse = (resourceId: SchedulerResourceId, event: Event | undefined) => {
      throw new Error("STUB");
  };

  /**
   * Sets the occurrence placeholder to render while creating a new event or dragging an existing event occurrence.
   */
  public setOccurrencePlaceholder = (newPlaceholder: SchedulerOccurrencePlaceholder | null) => {
      throw new Error("STUB");
  };

  /**
   * Sets the key of the currently active occurrence (e.g. open in the event dialog).
   * Pass `null` to clear the active occurrence.
   */
  public setEditedOccurrenceKey = (occurrenceKey: string | null) => {
      throw new Error("STUB");
  };

  /**
   * Builds an object containing the methods that should be exposed publicly by the scheduler components.
   */
  public buildPublicAPI() {
    return {
      setVisibleDate: this.setVisibleDate,
    };
  }
}
