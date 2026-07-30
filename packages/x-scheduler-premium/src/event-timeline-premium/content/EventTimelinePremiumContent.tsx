'use client';
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { useMergedRefs } from '@base-ui/utils/useMergedRefs';
import { useIsoLayoutEffect } from '@base-ui/utils/useIsoLayoutEffect';
import { useStore } from '@base-ui/utils/store';
import useLazyRef from '@mui/utils/useLazyRef';
import type { SchedulerResourceId } from '@mui/x-scheduler-internals/models';
import type { ColumnWithWidth, PinnedColumns } from '@mui/x-virtualizer';
import { useVirtualizer, LayoutDataGrid, Dimensions, Virtualization } from '@mui/x-virtualizer';
import { TimelineGrid } from '@mui/x-scheduler-internals-premium/timeline-grid';
import { useEventTimelinePremiumStoreContext } from '@mui/x-scheduler-internals-premium/use-event-timeline-premium-store-context';
import {
  eventTimelinePremiumPresetSelectors,
  timelineOccurrencePlaceholderSelectors,
} from '@mui/x-scheduler-internals-premium/event-timeline-premium-selectors';
import type { useEventOccurrencesWithTimelinePosition } from '@mui/x-scheduler-internals/use-event-occurrences-with-timeline-position';
import { computeOccurrencesMaxIndex } from '@mui/x-scheduler-internals/use-event-occurrences-with-timeline-position';
import {
  schedulerNowSelectors,
  schedulerOccurrenceSelectors,
  schedulerOtherSelectors,
  schedulerResourceSelectors,
} from '@mui/x-scheduler-internals/scheduler-selectors';
import { useAdapterContext } from '@mui/x-scheduler-internals/use-adapter-context';
import {
  EventDialogProvider,
  EventDialogTrigger,
  EventSkeleton,
  useEventDialogContext,
  getCellFocusBackground,
} from '@mui/x-scheduler/internals';
import {
  computeElementPositionInCollection,
  useTimelineDragAutoScroll,
} from '@mui/x-scheduler-internals/internals';
import { PREMIUM_EVENT_DIALOG_OPTIONAL_RENDERERS } from '../../internals/eventDialogOptionalRenderers';
import { EventTimelinePremiumHeader } from './timeline-header';
import type { EventTimelinePremiumContentProps } from './EventTimelinePremiumContent.types';
import EventTimelinePremiumTitleCell from './timeline-title-cell/EventTimelinePremiumTitleCell';
import { EventTimelinePremiumEvent } from './timeline-event';
import { useEventTimelinePremiumStyledContext } from '../EventTimelinePremiumStyledContext';
import {
  EventTimelinePremiumVirtualizerContext,
  useEventTimelinePremiumVirtualizerStore,
} from './EventTimelinePremiumVirtualizerContext';
import {
  TitleColumnWidthProvider,
  useTitleColumnWidth,
  useReportTitleWidth,
  TITLE_HEADER_KEY,
} from './useTitleColumnWidth';
import { useTitleScrollSync } from './useTitleScrollSync';
import { useEventTabNavigation } from './useEventTabNavigation';
import { getRowHeightForLaneCount } from './rowGeometry';
import { getVisibleFractionRange } from './getVisibleFractionRange';
import { EventTimelinePremiumDependencyArrows } from './timeline-dependency-arrows';

const EventTimelinePremiumContentRoot = styled('section', {
  name: 'MuiEventTimeline',
  slot: 'Content',
})(({ theme }) => { throw new Error("STUB"); });

const EventTimelinePremiumGrid = styled(TimelineGrid.Root, {
  name: 'MuiEventTimeline',
  slot: 'Grid',
})({
  flex: 1,
  flexGrow: 1,
  minHeight: 0,
  height: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'scroll',

  scrollbarWidth: 'none' /* Firefox */,
  '&::-webkit-scrollbar': {
    display: 'none' /* Safari and Chrome */,
  },

  '@media print': {
    overflow: 'hidden',
  },

  // Creates a stacking context so z-indexed children (header, render zone) don't bleed outside.
  // Also https://github.com/mui/mui-x/issues/10547
  zIndex: 0,
});

const EventTimelinePremiumHeaderRow = styled(TimelineGrid.Row, {
  name: 'MuiEventTimeline',
  slot: 'HeaderRow',
})(({ theme }) => { throw new Error("STUB"); });

const EventTimelinePremiumTitleHeaderCell = styled(TimelineGrid.Cell, {
  name: 'MuiEventTimeline',
  slot: 'TitleHeaderCell',
})(({ theme }) => { throw new Error("STUB"); });

const EventTimelinePremiumEventsHeaderCell = styled(TimelineGrid.Cell, {
  name: 'MuiEventTimeline',
  slot: 'EventsHeaderCell',
})({
  flex: 1,
  minWidth: 0,
  position: 'relative',
  overflowX: 'clip',
  zIndex: 4,
});

const EventTimelinePremiumEventsHeaderCellContent = styled('div', {
  name: 'MuiEventTimeline',
  slot: 'EventsHeaderCellContent',
})({
  height: '100%',
  width: 'calc(var(--unit-count) * var(--unit-width))',
  minWidth: '100%',
});

const EventTimelinePremiumScrollerContent = styled('div', {
  name: 'MuiEventTimeline',
  slot: 'ScrollerContent',
})({
  flex: '1 0 auto',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
});

const EventTimelinePremiumViewport = styled('div', {
  name: 'MuiEventTimeline',
  slot: 'Viewport',
})({
  display: 'inline-block',
  position: 'sticky',
  top: 0,
  left: 0,
  overflow: 'hidden',
});

const EventTimelinePremiumBodyRow = styled(TimelineGrid.BodyRow, {
  name: 'MuiEventTimeline',
  slot: 'BodyRow',
})({
  display: 'flex',
  width: 'var(--row-width)',
  position: 'relative',
  breakInside: 'avoid',
});

const EventTimelinePremiumEventsCell = styled(TimelineGrid.EventRow, {
  name: 'MuiEventTimeline',
  slot: 'EventsCell',
})(({ theme }) => { throw new Error("STUB"); });

const EventTimelinePremiumCurrentTimeIndicator = styled(TimelineGrid.CurrentTimeIndicator, {
  name: 'MuiEventTimeline',
  slot: 'CurrentTimeIndicator',
})(({ theme }) => { throw new Error("STUB"); });

const EventTimelinePremiumCurrentTimeIndicatorCircle = styled(TimelineGrid.CurrentTimeIndicator, {
  name: 'MuiEventTimeline',
  slot: 'CurrentTimeIndicatorCircle',
})(({ theme }) => { throw new Error("STUB"); });

// In macOS Safari and Gnome Web, scrollbars are overlaid and report size 0.
// The virtual scrollbar container needs a real size, so we clamp to at least 14px.
const SCROLLBAR_SIZE_CSS = 'calc(max(var(--scrollbar-size, 10px), 14px))';

const Scrollbar = styled('div', {
  name: 'MuiEventTimeline',
  slot: 'Scrollbar',
})({
  position: 'absolute',
  display: 'inline-block',
  zIndex: 6,
  '&:hover': {
    zIndex: 7,
  },
  '--size': SCROLLBAR_SIZE_CSS,
});

const ScrollbarVertical = styled(Scrollbar, {
  name: 'MuiEventTimeline',
  slot: 'ScrollbarVertical',
})({
  width: 'var(--size)',
  height:
    'calc(100% - var(--header-height, 0px) - var(--has-scroll-x, 0) * var(--scrollbar-size, 10px))',
  overflowY: 'auto',
  overflowX: 'hidden',
  outline: 0,
  scrollbarWidth: 'thin',
  '& > div': {
    width: 'var(--size)',
  },
  top: 'var(--header-height, 0px)',
  right: 0,
});

const ScrollbarHorizontal = styled(Scrollbar, {
  name: 'MuiEventTimeline',
  slot: 'ScrollbarHorizontal',
})({
  width: 'calc(100% - var(--title-column-width))',
  height: 'var(--size)',
  overflowY: 'hidden',
  overflowX: 'auto',
  outline: 0,
  scrollbarWidth: 'thin',
  '& > div': {
    height: 'var(--size)',
  },
  bottom: 0,
  left: 'var(--title-column-width)',
});

const ScrollbarTitleHorizontal = styled(Scrollbar, {
  name: 'MuiEventTimeline',
  slot: 'ScrollbarTitleHorizontal',
})({
  width: 'var(--title-column-width)',
  height: 'var(--size)',
  overflowY: 'hidden',
  overflowX: 'auto',
  outline: 0,
  scrollbarWidth: 'thin',
  '& > div': {
    height: 'var(--size)',
  },
  bottom: 0,
  left: 0,
});

// When the title scrollbar is not rendered (no overflow) but the events
// horizontal scrollbar is, this filler sits in the bottom-left strip to
// extend the title column's right border down to the very bottom.
const TitleScrollbarFiller = styled('div', {
  name: 'MuiEventTimeline',
  slot: 'TitleScrollbarFiller',
})(({ theme }) => { throw new Error("STUB"); });

const RowContainer = styled('div', {
  name: 'MuiEventTimeline',
  slot: 'RowContainer',
})({
  width: 'fit-content',
  display: 'flex',
  flexDirection: 'column',
});

const EventTimelinePremiumFillerRow = styled('div', {
  name: 'MuiEventTimeline',
  slot: 'FillerRow',
})(({ theme }) => { throw new Error("STUB"); });

const HeaderRowContent = React.forwardRef<HTMLDivElement, { showCurrentTimeIndicator: boolean }>(
  function HeaderRowContent(props, ref) {
        throw new Error("STUB");
    },
);

function FillerRow() {
    throw new Error("STUB");
}

/**
 * Renders only the events that intersect the virtualizer's visible column range.
 * Isolated into its own component so that scrolling (which updates `renderContext`)
 * only re-renders this subtree, not the surrounding row logic.
 */
function EventList({
  occurrences,
}: {
  occurrences: useEventOccurrencesWithTimelinePosition.EventOccurrenceWithPosition[];
}) {
    throw new Error("STUB");
}

function EventRowContent({
  resourceId,
  occurrences,
  placeholder,
}: {
  resourceId: SchedulerResourceId;
  occurrences: useEventOccurrencesWithTimelinePosition.EventOccurrenceWithPosition[];
  placeholder: useEventOccurrencesWithTimelinePosition.EventOccurrencePlaceholderWithPosition | null;
}) {
    throw new Error("STUB");
}

/**
 * Measures one dimension (`'width'` or `'height'`) of an element via
 * ResizeObserver and returns it as state.
 */
function useElementSize(
  ref: React.RefObject<HTMLElement | null>,
  dimension: 'width' | 'height',
): number {
  const [size, setSize] = React.useState(0);

  useIsoLayoutEffect(() => {
      throw new Error("STUB");
  }, [ref, dimension]);

  return size;
}

export const EventTimelinePremiumContent = React.forwardRef(function EventTimelinePremiumContent(
  props: EventTimelinePremiumContentProps,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
    throw new Error("STUB");
});
