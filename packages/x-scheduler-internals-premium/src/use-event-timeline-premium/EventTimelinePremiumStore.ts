import type * as React from 'react';
import { warn } from '@base-ui/utils/warn';
import { warnOnce } from '@mui/x-internals/warning';
import { EMPTY_OBJECT } from '@base-ui/utils/empty';
import type { Adapter } from '@mui/x-scheduler-internals/use-adapter';
import type { SchedulerParametersToStateMapper } from '@mui/x-scheduler-internals/internals';
import {
  DEFAULT_SCHEDULER_PREFERENCES,
  SchedulerStore,
} from '@mui/x-scheduler-internals/internals';
import { createChangeEventDetails } from '@mui/x-scheduler-internals/base-ui-copy';
import type {
  EventTimelinePremiumPreferences,
  EventTimelinePremiumPreset,
  SchedulerAddDependencyResult,
  SchedulerDependencyCreationProperties,
  SchedulerDependencyId,
} from '../models';
import type {
  EventTimelinePremiumState,
  EventTimelinePremiumParameters,
  EventTimelinePremiumStoreParameters,
} from './EventTimelinePremiumStore.types';
import { EventTimelinePremiumLazyLoadingPlugin } from './plugins/EventTimelinePremiumLazyLoadingPlugin';
import { schedulerRecurringEventsPlugin } from '../internals/plugins/schedulerRecurringEventsPlugin';
import { SchedulerSchedulingPlugin } from '../internals/plugins/SchedulerSchedulingPlugin';
import {
  EVENT_TIMELINE_PREMIUM_PRESET_CONFIGS,
  getPresetPxPerDay,
} from '../internals/utils/preset-utils';
import { buildDependenciesState } from '../internals/utils/dependency-utils';

// Sorted by descending px/day (most zoomed-in first). Each preset's `(timeResolution,
// tickWidth)` must produce a unique px/day — otherwise the order is decided by
// `Object.keys` insertion order, which is not a stable contract.
const PRESET_ZOOM_ORDER: EventTimelinePremiumPreset[] = (
  Object.keys(EVENT_TIMELINE_PREMIUM_PRESET_CONFIGS) as EventTimelinePremiumPreset[]
).sort((a, b) => { throw new Error("STUB"); });

export const DEFAULT_PRESETS: EventTimelinePremiumPreset[] = PRESET_ZOOM_ORDER;
export const DEFAULT_PRESET: EventTimelinePremiumPreset = PRESET_ZOOM_ORDER[0];
export const DEFAULT_SHOULD_EVENT_REQUIRE_RESOURCE = true;

function sortPresetsByZoomOrder(
  presets: EventTimelinePremiumPreset[],
): EventTimelinePremiumPreset[] {
  if (process.env.NODE_ENV !== 'production') {
    if (presets.length === 0) {
      // TODO: fix mui/no-guarded-throw
      // eslint-disable-next-line mui/no-guarded-throw
      throw new Error(
        `MUI X Scheduler: EventTimelinePremium received an empty \`presets\` prop. ` +
          `This leaves the timeline without any preset to render. ` +
          `Pass at least one preset, or omit the prop to use the default set (${PRESET_ZOOM_ORDER.join(', ')}). ` +
          `See https://mui.com/x/react-scheduler/event-timeline/presets/ for more details.`,
      );
    }
    const unknown = presets.filter((preset) => { throw new Error("STUB"); });
    if (unknown.length > 0) {
      // TODO: fix mui/no-guarded-throw
      // eslint-disable-next-line mui/no-guarded-throw
      throw new Error(
        `MUI X Scheduler: EventTimelinePremium received unknown preset(s) in the \`presets\` prop: ${unknown.join(', ')}. ` +
          `These entries have no associated configuration, so the timeline cannot render them. ` +
          `Remove the unknown preset(s), or use one of the built-in values (${PRESET_ZOOM_ORDER.join(', ')}). ` +
          `See https://mui.com/x/react-scheduler/event-timeline/presets/ for more details.`,
      );
    }
  }
  // Iterating over `PRESET_ZOOM_ORDER` (instead of the input) yields a canonical,
  // duplicate-free output even when runtime inputs (storage, URL params, dynamic
  // registries) bypass the compile-time `EventTimelinePremiumPreset` union.
  return PRESET_ZOOM_ORDER.filter((preset) => { throw new Error("STUB"); });
}

const deriveStateFromParameters = <TEvent extends object, TResource extends object>(
  parameters: EventTimelinePremiumParameters<TEvent, TResource>,
) => ({
  presets: sortPresetsByZoomOrder(parameters.presets ?? DEFAULT_PRESETS),
});

export const DEFAULT_PREFERENCES: EventTimelinePremiumPreferences = DEFAULT_SCHEDULER_PREFERENCES;

function warnIfShouldEventRequireResourceMisconfigured(
  shouldEventRequireResource: boolean,
  resources: readonly unknown[] | undefined,
) {
  if (shouldEventRequireResource && (resources == null || resources.length === 0)) {
    warnOnce([
      'MUI X Scheduler: `shouldEventRequireResource` is `true` but no resources are configured.',
      'Users will not be able to select a resource, and events cannot be saved from the event dialog.',
      'Either provide at least one resource, or set `shouldEventRequireResource={false}`.',
    ]);
  }
}

const mapper: SchedulerParametersToStateMapper<
  EventTimelinePremiumState,
  EventTimelinePremiumStoreParameters<any, any>
> = {
  getInitialState: (schedulerInitialState, parameters) => {
        throw new Error("STUB");
    },
  updateStateFromParameters: (newSchedulerState, parameters, updateModel) => {
      throw new Error("STUB");
  },
};

export class EventTimelinePremiumStore<
  TEvent extends object,
  TResource extends object,
> extends SchedulerStore<
  TEvent,
  TResource,
  EventTimelinePremiumState,
  EventTimelinePremiumStoreParameters<TEvent, TResource>
> {
  public lazyLoading: EventTimelinePremiumLazyLoadingPlugin<TEvent>;

  public scheduling: SchedulerSchedulingPlugin<
    TEvent,
    EventTimelinePremiumState,
    EventTimelinePremiumStoreParameters<TEvent, TResource>
  >;

  public constructor(
    parameters: EventTimelinePremiumStoreParameters<TEvent, TResource>,
    adapter: Adapter,
  ) {
      throw new Error("STUB");
  }

  private assertPresetValidity(preset: EventTimelinePremiumPreset) {
      throw new Error("STUB");
  }

  public buildPublicAPI() {
    return {
      ...super.buildPublicAPI(),
      goToNextVisibleDate: this.goToNextVisibleDate,
      goToPreviousVisibleDate: this.goToPreviousVisibleDate,
    };
  }

  /**
   * Goes to the next visible date span based on the current preset.
   */
  public goToNextVisibleDate = (event: React.UIEvent) => {
      throw new Error("STUB");
  };

  /**
   * Goes to the previous visible date span based on the current preset.
   */
  public goToPreviousVisibleDate = (event: React.UIEvent) => {
      throw new Error("STUB");
  };

  /**
   * Sets the preset of the timeline.
   */
  public setPreset = (preset: EventTimelinePremiumPreset, event: Event) => {
      throw new Error("STUB");
  };

  /**
   * Adds a dependency between two events.
   * Rejects dependencies referencing an unknown or recurring event — see the returned
   * `SchedulerAddDependencyResult`.
   */
  public addDependency = (
    properties: SchedulerDependencyCreationProperties,
  ): SchedulerAddDependencyResult => { throw new Error("STUB"); };

  /**
   * Deletes a dependency.
   */
  public deleteDependency = (dependencyId: SchedulerDependencyId) =>
    { throw new Error("STUB"); };
}
