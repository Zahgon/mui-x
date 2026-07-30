'use client';
import * as React from 'react';
import clsx from 'clsx';
import { styled } from '@mui/material/styles';
import ExpandMoreOutlined from '@mui/icons-material/ExpandMoreOutlined';
import { useMergedRefs } from '@base-ui/utils/useMergedRefs';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import type { CalendarView } from '@mui/x-scheduler-internals/models';
import { useEventCalendarStyledContext } from '../../EventCalendarStyledContext';

const ViewSwitcherRoot = styled('div', {
  name: 'MuiEventCalendar',
  slot: 'ViewSwitcher',
})({
  display: 'flex',
});

export interface ViewSwitcherProps extends React.HTMLAttributes<HTMLDivElement> {
  views: CalendarView[];
  view: CalendarView;
  onViewChange: (view: CalendarView, event: Event) => void;
}

type ViewSwitcherComponent = (
  props: ViewSwitcherProps & {
    ref?: React.ForwardedRef<HTMLDivElement>;
  },
) => React.ReactElement | null;

export const ViewSwitcher = React.forwardRef(function ViewSwitcher(
  props: ViewSwitcherProps,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as ViewSwitcherComponent;
