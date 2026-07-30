'use client';
import * as React from 'react';
import clsx from 'clsx';
import { useStore } from '@base-ui/utils/store';
import { styled } from '@mui/material/styles';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import MenuOpen from '@mui/icons-material/MenuOpen';
import Menu from '@mui/icons-material/Menu';
import Today from '@mui/icons-material/Today';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useAdapterContext } from '@mui/x-scheduler-internals/use-adapter-context';
import { useEventCalendarStoreContext } from '@mui/x-scheduler-internals/use-event-calendar-store-context';
import {
  eventCalendarPreferenceSelectors,
  eventCalendarViewSelectors,
} from '@mui/x-scheduler-internals/event-calendar-selectors';
import { schedulerOtherSelectors } from '@mui/x-scheduler-internals/scheduler-selectors';
import { getWeekNumber } from '@mui/x-scheduler-internals/internals';
import type { HeaderToolbarProps } from './HeaderToolbar.types';
import { ViewSwitcher } from './view-switcher';
import { PreferencesMenu } from './preferences-menu';
import { useEventCalendarStyledContext } from '../EventCalendarStyledContext';

// Both toolbar layouts render for SSR safety; the root container query toggles them
// via `data-expanded-only` / `data-compact-only` (see `EventCalendarRootStyled`).
const HeaderToolbarRoot = styled('header', {
  name: 'MuiEventCalendar',
  slot: 'HeaderToolbar',
})(({ theme }) => { throw new Error("STUB"); });

const HeaderToolbarActions = styled('div', {
  name: 'MuiEventCalendar',
  slot: 'HeaderToolbarActions',
})(({ theme }) => { throw new Error("STUB"); });

const HeaderToolbarDateNavigator = styled('div', {
  name: 'MuiEventCalendar',
  slot: 'HeaderToolbarDateNavigator',
})(({ theme }) => { throw new Error("STUB"); });

const HeaderToolbarLeftElement = styled('div', {
  name: 'MuiEventCalendar',
  slot: 'HeaderToolbarLeftElement',
})(({ theme }) => { throw new Error("STUB"); });

const HeaderToolbarLabel = styled('p', {
  name: 'MuiEventCalendar',
  slot: 'HeaderToolbarLabel',
})(({ theme }) => { throw new Error("STUB"); });

const HeaderToolbarWeekNumber = styled('span', {
  name: 'MuiEventCalendar',
  slot: 'HeaderToolbarWeekNumber',
})(({ theme }) => { throw new Error("STUB"); });

export const HeaderToolbar = React.forwardRef(function HeaderToolbar(
  props: HeaderToolbarProps,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
    throw new Error("STUB");
});
