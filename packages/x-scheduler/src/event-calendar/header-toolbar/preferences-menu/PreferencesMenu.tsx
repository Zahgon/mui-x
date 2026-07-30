'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useMergedRefs } from '@base-ui/utils/useMergedRefs';
import SettingsOutlined from '@mui/icons-material/SettingsOutlined';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import clsx from 'clsx';
import { useEventCalendarStyledContext } from '../../EventCalendarStyledContext';
import { usePreferencesMenuItems } from './PreferencesMenuItems';

const PreferencesMenuRoot = styled('div', {
  name: 'MuiEventCalendar',
  slot: 'PreferencesMenu',
})({});

export const PreferencesMenu = React.forwardRef(function PreferencesMenu(
  props: React.HTMLAttributes<HTMLDivElement>,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
    throw new Error("STUB");
});
