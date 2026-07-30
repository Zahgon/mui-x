import * as React from 'react';
import clsx from 'clsx';
import { styled } from '@mui/material/styles';
import visuallyHidden from '@mui/utils/visuallyHidden';
import { useStore } from '@base-ui/utils/store';
import { useId } from '@base-ui/utils/useId';
import RepeatRounded from '@mui/icons-material/RepeatRounded';
import { TimelineGrid } from '@mui/x-scheduler-internals-premium/timeline-grid';
import { schedulerEventSelectors } from '@mui/x-scheduler-internals/scheduler-selectors';
import { eventTimelinePremiumDependencySelectors } from '@mui/x-scheduler-internals-premium/event-timeline-premium-selectors';
import { useEventTimelinePremiumStoreContext } from '@mui/x-scheduler-internals-premium/use-event-timeline-premium-store-context';
import { EventDragPreview, getPaletteVariants } from '@mui/x-scheduler/internals';
import type { EventTimelinePremiumEventProps } from './EventTimelinePremiumEvent.types';
import { useEventTimelinePremiumStyledContext } from '../../EventTimelinePremiumStyledContext';
import { eventTimelinePremiumClasses } from '../../eventTimelinePremiumClasses';

const ARROW_DEPTH = 8; // px - depth of the chevron point
const LEFT_ARROW_CLIP = `polygon(${ARROW_DEPTH}px 0, 100% 0, 100% 100%, ${ARROW_DEPTH}px 100%, 0 50%)`;
const RIGHT_ARROW_CLIP = `polygon(0 0, calc(100% - ${ARROW_DEPTH}px) 0, 100% 50%, calc(100% - ${ARROW_DEPTH}px) 100%, 0 100%)`;
const BOTH_ARROWS_CLIP = `polygon(${ARROW_DEPTH}px 0, calc(100% - ${ARROW_DEPTH}px) 0, 100% 50%, calc(100% - ${ARROW_DEPTH}px) 100%, ${ARROW_DEPTH}px 100%, 0 50%)`;

const EventTimelinePremiumEventRoot = styled('div', {
  name: 'MuiEventTimeline',
  slot: 'Event',
})(({ theme }) => { throw new Error("STUB"); });

const EventTimelinePremiumEventLinesClamp = styled('span', {
  name: 'MuiEventTimeline',
  slot: 'EventLinesClamp',
})({
  display: '-webkit-box',
  WebkitLineClamp: 'var(--number-of-lines)',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  wordBreak: 'break-word',
  overflowWrap: 'break-word',
});

const EventTimelinePremiumEventRecurringIcon = styled(RepeatRounded, {
  name: 'MuiEventTimeline',
  slot: 'EventRecurringIcon',
})({
  flexShrink: 0,
  fontSize: '1rem',
});

const EventTimelinePremiumEventResizeHandler = styled(TimelineGrid.EventResizeHandler, {
  name: 'MuiEventTimeline',
  slot: 'EventResizeHandler',
})({
  position: 'absolute',
  width: 4,
  top: 0,
  bottom: 0,
  zIndex: 3,
  cursor: 'ew-resize',
  opacity: 0,
  '&[data-start]': {
    left: 0,
  },
  '&[data-end]': {
    right: 0,
  },
});

export const EventTimelinePremiumEvent = React.forwardRef(function EventTimelinePremiumEvent(
  props: EventTimelinePremiumEventProps,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
    throw new Error("STUB");
});
