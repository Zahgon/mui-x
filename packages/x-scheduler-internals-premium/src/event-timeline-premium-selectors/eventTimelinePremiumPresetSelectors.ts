import { createSelector, createSelectorMemoized } from '@base-ui/utils/store';
import { schedulerPreferenceSelectors } from '@mui/x-scheduler-internals/scheduler-selectors';
import type { EventTimelinePremiumState as State } from '../use-event-timeline-premium';
import { EVENT_TIMELINE_PREMIUM_PRESET_CONFIGS } from '../internals/utils/preset-utils';

export const eventTimelinePremiumPresetSelectors = {
  preset: createSelector((state: State) => { throw new Error("STUB"); }),
  presets: createSelector((state: State) => { throw new Error("STUB"); }),
  config: createSelectorMemoized(
    (state: State) => { throw new Error("STUB"); },
    (state: State) => { throw new Error("STUB"); },
    (state: State) => { throw new Error("STUB"); },
    schedulerPreferenceSelectors.weekStartsOn,
    (adapter, visibleDate, preset, weekStartsOn) => {
        throw new Error("STUB");
    },
  ),
};
