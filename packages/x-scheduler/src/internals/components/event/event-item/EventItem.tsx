'use client';
import * as React from 'react';
import clsx from 'clsx';
import { styled } from '@mui/material/styles';
import { useId } from '@base-ui/utils/useId';
import { useStore } from '@base-ui/utils/store';
import RepeatRounded from '@mui/icons-material/RepeatRounded';
import {
  schedulerEventSelectors,
  schedulerOtherSelectors,
  schedulerResourceSelectors,
} from '@mui/x-scheduler-internals/scheduler-selectors';
import { Button } from '@base-ui/react/button';
import { useAdapterContext } from '@mui/x-scheduler-internals/use-adapter-context';
import { getPrimaryResourceId } from '@mui/x-scheduler-internals/internals';
import { useEventCalendarStoreContext } from '@mui/x-scheduler-internals/use-event-calendar-store-context';
import type { SchedulerEventOccurrence } from '@mui/x-scheduler-internals/models';
import type { EventItemProps } from './EventItem.types';
import { useFormatTime } from '../../../hooks/useFormatTime';
import { useEventCalendarStyledContext } from '../../../../event-calendar/EventCalendarStyledContext';
import type { PaletteName } from '../../../utils/tokens';
import { getPaletteVariants } from '../../../utils/tokens';
import { ARROW_DEPTH, LEFT_ARROW_CLIP, RIGHT_ARROW_CLIP, BOTH_ARROWS_CLIP } from '../arrowClips';

const EventItemCard = styled('div', {
  name: 'MuiEventCalendar',
  slot: 'EventItemCard',
})<{ 'data-variant'?: 'compact' | 'filled' | 'regular'; palette?: PaletteName }>(({ theme }) => { throw new Error("STUB"); });

const EventItemCardWrapper = styled('div', {
  name: 'MuiEventCalendar',
  slot: 'EventItemCardWrapper',
})<{ 'data-variant'?: 'compact' | 'filled' | 'regular' }>(({ theme }) => { throw new Error("STUB"); });

const EventItemTitle = styled('span', {
  name: 'MuiEventCalendar',
  slot: 'EventItemTitle',
})(({ theme }) => { throw new Error("STUB"); });

const EventItemTime = styled('time', {
  name: 'MuiEventCalendar',
  slot: 'EventItemTime',
})<{ 'data-compact'?: boolean }>(({ theme }) => { throw new Error("STUB"); });

const EventItemRecurringIcon = styled(RepeatRounded, {
  name: 'MuiEventCalendar',
  slot: 'EventItemRecurringIcon',
})(({ theme }) => { throw new Error("STUB"); });

const ResourceLegendColor = styled('span', {
  name: 'MuiEventCalendar',
  slot: 'ResourceLegendColor',
})({
  width: 8,
  height: 8,
  borderRadius: '50%',
  flexShrink: 0,
  backgroundColor: 'var(--event-main)',
  '[data-editing] &': {
    backgroundColor: 'var(--event-on-surface-selected)',
  },
});

const EventItemCardContent = styled('p', {
  name: 'MuiEventCalendar',
  slot: 'EventItemCardContent',
})({
  margin: 0,
  height: 20,
  lineHeight: '20px',
});

const EventItemLinesClamp = styled('span', {
  name: 'MuiEventCalendar',
  slot: 'EventItemLinesClamp',
})({
  display: '-webkit-box',
  WebkitLineClamp: 'var(--number-of-lines)',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  wordBreak: 'break-word',
  overflowWrap: 'break-word',
});

/**
 * Component used to display an event occurrence, without any positioning capabilities
 * Used in <AgendaView /> and in the event popover of <MonthView /> to display the list of events for a specific day.
 */
export const EventItem = React.forwardRef(function EventItem(
  props: EventItemProps,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
    throw new Error("STUB");
});

function MultiDayDateLabel(props: {
  occurrence: SchedulerEventOccurrence;
  formatTime: ReturnType<typeof useFormatTime>;
}) {
    throw new Error("STUB");
}
