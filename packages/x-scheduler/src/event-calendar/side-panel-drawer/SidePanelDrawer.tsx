'use client';
import * as React from 'react';
import clsx from 'clsx';
import { useStore } from '@base-ui/utils/store';
import { styled } from '@mui/material/styles';
import Close from '@mui/icons-material/Close';
import ExpandMoreOutlined from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlined from '@mui/icons-material/ExpandLessOutlined';
import SettingsOutlined from '@mui/icons-material/SettingsOutlined';
import CalendarViewMonthOutlined from '@mui/icons-material/CalendarViewMonthOutlined';
import CalendarViewWeekOutlined from '@mui/icons-material/CalendarViewWeekOutlined';
import CalendarViewDayOutlined from '@mui/icons-material/CalendarViewDayOutlined';
import ViewAgendaOutlined from '@mui/icons-material/ViewAgendaOutlined';
import Collapse from '@mui/material/Collapse';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useAdapterContext } from '@mui/x-scheduler-internals/use-adapter-context';
import { useEventCalendarStoreContext } from '@mui/x-scheduler-internals/use-event-calendar-store-context';
import { eventCalendarViewSelectors } from '@mui/x-scheduler-internals/event-calendar-selectors';
import { schedulerOtherSelectors } from '@mui/x-scheduler-internals/scheduler-selectors';
import { ResourcesTree } from '../resources-tree';
import { usePreferencesMenuItems } from '../header-toolbar/preferences-menu';
import { useEventCalendarStyledContext } from '../EventCalendarStyledContext';
import type { SidePanelDrawerProps } from './SidePanelDrawer.types';

const SidePanelDrawerRoot = styled(Drawer, {
  name: 'MuiEventCalendar',
  slot: 'SidePanelDrawerViewport',
})(({ theme }) => { throw new Error("STUB"); });

const SidePanelDrawerHeader = styled('div', {
  name: 'MuiEventCalendar',
  slot: 'SidePanelDrawerHeader',
})(({ theme }) => { throw new Error("STUB"); });

const SidePanelDrawerTitle = styled('h2', {
  name: 'MuiEventCalendar',
  slot: 'SidePanelDrawerTitle',
})(({ theme }) => { throw new Error("STUB"); });

const SidePanelDrawerViewList = styled(MenuList, {
  name: 'MuiEventCalendar',
  slot: 'SidePanelDrawerViewList',
})(({ theme }) => { throw new Error("STUB"); });

const SidePanelDrawerResources = styled('div', {
  name: 'MuiEventCalendar',
  slot: 'SidePanelDrawerResources',
})(({ theme }) => { throw new Error("STUB"); });

const VIEW_ICONS = {
  day: <CalendarViewDayOutlined fontSize="small" />,
  week: <CalendarViewWeekOutlined fontSize="small" />,
  month: <CalendarViewMonthOutlined fontSize="small" />,
  agenda: <ViewAgendaOutlined fontSize="small" />,
};

/**
 * Compact-layout side panel (MUI temporary `Drawer`) with view switching, resources, and
 * preferences (inline `Collapse`). Portaled into the calendar root to stay container-scoped.
 */
export const SidePanelDrawer = React.forwardRef(function SidePanelDrawer(
  props: SidePanelDrawerProps,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
    throw new Error("STUB");
});
