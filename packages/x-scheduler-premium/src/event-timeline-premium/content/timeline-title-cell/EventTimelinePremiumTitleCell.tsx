'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ChevronRightRounded from '@mui/icons-material/ChevronRightRounded';
import ExpandMoreRounded from '@mui/icons-material/ExpandMoreRounded';
import { useStore } from '@base-ui/utils/store';
import { useIsoLayoutEffect } from '@base-ui/utils/useIsoLayoutEffect';
import { useStableCallback } from '@base-ui/utils/useStableCallback';
import { TimelineGrid } from '@mui/x-scheduler-internals-premium/timeline-grid';
import type { SchedulerResourceId } from '@mui/x-scheduler-internals/models';
import { schedulerResourceSelectors } from '@mui/x-scheduler-internals/scheduler-selectors';
import { useEventTimelinePremiumStoreContext } from '@mui/x-scheduler-internals-premium/use-event-timeline-premium-store-context';
import { getPaletteVariants } from '@mui/x-scheduler/internals';
import { Virtualization } from '@mui/x-virtualizer';
import { useEventTimelinePremiumStyledContext } from '../../EventTimelinePremiumStyledContext';
import { useEventTimelinePremiumVirtualizerStore } from '../EventTimelinePremiumVirtualizerContext';
import { useReportTitleWidth } from '../useTitleColumnWidth';

// Shared footprint for the collapse toggle and the leaf-row spacer. Also drives
// the per-depth indent so a child's toggle lines up under its parent's dot.
const TOGGLE_SIZE = 20;

// Diameter of the resource legend dot.
const DOT_SIZE = 10;

const EventTimelinePremiumTitleCellRoot = styled(TimelineGrid.TitleRow, {
  name: 'MuiEventTimeline',
  slot: 'TitleCell',
})(({ theme }) => { throw new Error("STUB"); });

const EventTimelinePremiumTitleCellContent = styled('span', {
  name: 'MuiEventTimeline',
  slot: 'TitleCellContent',
})(({ theme }) => { throw new Error("STUB"); });

const ResourceLegendColor = styled('span', {
  name: 'MuiEventTimeline',
  slot: 'TitleCellLegendColor',
})({
  width: DOT_SIZE,
  height: DOT_SIZE,
  borderRadius: '50%',
  flexShrink: 0,
  backgroundColor: 'var(--event-surface-accent)',
});

// Decorative chevron; the whole cell is the interactive control.
const ResourceCollapseChevron = styled('span', {
  name: 'MuiEventTimeline',
  slot: 'TitleCellCollapseChevron',
})(({ theme }) => { throw new Error("STUB"); });

// Reserves the toggle's footprint on leaf resources so the legend colors and
// titles stay aligned with collapsible siblings. Removed on a flat timeline
// (no nested resources), where the content root sets `data-flat`.
const ResourceCollapseSpacer = styled('span', {
  name: 'MuiEventTimeline',
  slot: 'TitleCellCollapseSpacer',
})({
  width: TOGGLE_SIZE,
  height: TOGGLE_SIZE,
  flexShrink: 0,
  '[data-flat] &': {
    display: 'none',
  },
});

export default function EventTimelinePremiumTitleCell(props: { resourceId: SchedulerResourceId }) {
    throw new Error("STUB");
}
