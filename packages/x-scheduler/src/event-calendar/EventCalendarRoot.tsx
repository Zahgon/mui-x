'use client';
import * as React from 'react';
import clsx from 'clsx';
import { useStore } from '@base-ui/utils/store';
import type { SxProps } from '@mui/system/styleFunctionSx';
import type { Theme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import { useMergedRefs } from '@base-ui/utils/useMergedRefs';
import { useResizeObserver } from '@mui/x-internals/useResizeObserver';
import {
  eventCalendarPreferenceSelectors,
  eventCalendarViewSelectors,
} from '@mui/x-scheduler-internals/event-calendar-selectors';
import { useEventCalendarStoreContext } from '@mui/x-scheduler-internals/use-event-calendar-store-context';
import {
  EVENT_CALENDAR_ROOT_CONTAINER_NAME,
  RESPONSIVE_TYPOGRAPHY_BREAKPOINT_SM,
  eventCalendarRootExpandedQuery,
  eventCalendarRootCompactQuery,
  responsiveTypographyContainerQueries,
} from '../internals/constants/responsiveTypography';
import { ResponsiveTypographyContainer } from '../internals/components/ResponsiveTypographyContainer';
import { ErrorContainer } from '../internals/components/error-container';
import { WeekView } from '../week-view/WeekView';
import { AgendaView } from '../agenda-view';
import { DayView } from '../day-view/DayView';
import { MonthView } from '../month-view';
import { HeaderToolbar } from './header-toolbar';
import { ResourcesTree } from './resources-tree';
import { MiniCalendar } from './mini-calendar';
import { SidePanelDrawer } from './side-panel-drawer';
import { useEventCalendarStyledContext } from './EventCalendarStyledContext';

export interface EventCalendarRootProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
}

const EventCalendarRootStyled = styled('div', {
  name: 'MuiEventCalendar',
  slot: 'Root',
})(({ theme }) => { throw new Error("STUB"); });

const EventCalendarSidePanel = styled('aside', {
  name: 'MuiEventCalendar',
  slot: 'SidePanel',
})(({ theme }) => { throw new Error("STUB"); });

const EventCalendarSidePanelCollapse = styled(Collapse, {
  name: 'MuiEventCalendar',
  slot: 'SidePanelCollapse',
})({
  // The inline side panel is expanded-only; in the compact layout the drawer overlay
  // takes its place.
  [eventCalendarRootCompactQuery]: {
    display: 'none',
  },
});

const EventCalendarMainPanel = styled('div', {
  name: 'MuiEventCalendar',
  slot: 'MainPanel',
})(({ theme }) => { throw new Error("STUB"); });

const EventCalendarContent = styled('section', {
  name: 'MuiEventCalendar',
  slot: 'Content',
})(() => { throw new Error("STUB"); });

/**
 * Internal component that renders the EventCalendar UI.
 * Used by both EventCalendar and EventCalendarPremium.
 * Expects the store to be provided via context.
 */
export const EventCalendarRoot = React.forwardRef<HTMLDivElement, EventCalendarRootProps>(
  function EventCalendarRoot(props, forwardedRef) {
        throw new Error("STUB");
    },
);
