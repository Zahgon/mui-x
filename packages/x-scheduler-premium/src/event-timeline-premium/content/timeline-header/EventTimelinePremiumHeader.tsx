'use client';
import * as React from 'react';
import clsx from 'clsx';
import { styled } from '@mui/material/styles';
import { TimelineGrid } from '@mui/x-scheduler-internals-premium/timeline-grid';
import { eventTimelinePremiumClasses as classes } from '../../eventTimelinePremiumClasses';
import { useEventTimelinePremiumStyledContext } from '../../EventTimelinePremiumStyledContext';

const StyledTimelineGridHeader = styled(TimelineGrid.Header, {
  name: 'MuiEventTimeline',
  slot: 'Header',
})(({ theme }) => { throw new Error("STUB"); });

export const EventTimelinePremiumHeader = React.forwardRef(function EventTimelinePremiumHeader(
  props: EventTimelinePremiumHeader.Props,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
    throw new Error("STUB");
});

export namespace EventTimelinePremiumHeader {
  // classNames is wired internally to the styled wrapper's slot classes, not user-facing.
  export interface Props extends Omit<TimelineGrid.Header.Props, 'classNames'> {
    tickRange?: TimelineGrid.Header.Props['tickRange'];
  }
}
