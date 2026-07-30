'use client';
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { useStore } from '@base-ui/utils/store';
import { Dimensions, Virtualization } from '@mui/x-virtualizer';
import { useAdapterContext } from '@mui/x-scheduler-internals/use-adapter-context';
import { schedulerOccurrenceSelectors } from '@mui/x-scheduler-internals/scheduler-selectors';
import { useEventTimelinePremiumStoreContext } from '@mui/x-scheduler-internals-premium/use-event-timeline-premium-store-context';
import {
  eventTimelinePremiumDependencySelectors,
  eventTimelinePremiumPresetSelectors,
} from '@mui/x-scheduler-internals-premium/event-timeline-premium-selectors';
import type { SchedulerDependency } from '@mui/x-scheduler-internals-premium/models';
import { useEventTimelinePremiumStyledContext } from '../../EventTimelinePremiumStyledContext';
import { useEventTimelinePremiumVirtualizerStore } from '../EventTimelinePremiumVirtualizerContext';
import { getEventsCellLaneMetrics } from '../rowGeometry';
import { getVisibleFractionRange } from '../getVisibleFractionRange';
import { computeDependencyArrows, DEPENDENCY_ARROWHEAD_SIZE } from './dependencyArrowGeometry';

const DEPENDENCY_ARROW_STROKE_WIDTH = 1;

// TODO(dependencies public flip): add a `dependencyArrows` utility class and assert the
// slot in the theme augmentation. The overlay only carries data attributes while the
// feature has no public API.
const DependencyArrowsSvg = styled('svg', {
  name: 'MuiEventTimeline',
  slot: 'DependencyArrows',
})(({ theme }) => { throw new Error("STUB"); });

/**
 * Renders the arrows of the active dependencies over the timeline rows.
 * Rendering-only: it subscribes to the dependencies state slice and never mutates it.
 */
export function EventTimelinePremiumDependencyArrows() {
    throw new Error("STUB");
}

/**
 * Isolated like `EventList` so that scrolling (which updates `renderContext`) only
 * re-renders this subtree. Arrow paths are computed from the data model — never from
 * the DOM — so they can anchor on events the virtualizer did not mount, and they only
 * change when an event or dependency changes, not on scroll.
 */
function DependencyArrowsLayer({ dependencies }: { dependencies: readonly SchedulerDependency[] }) {
    throw new Error("STUB");
}
