'use client';
import * as React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { styled } from '@mui/material/styles';
import type { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import ListSubheader from '@mui/material/ListSubheader';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { Toggle } from '@base-ui/react/toggle';
import { ToggleGroup } from '@base-ui/react/toggle-group';
import { EVENT_COLORS } from '@mui/x-scheduler-internals/constants';
import { useSchedulerStoreContext } from '@mui/x-scheduler-internals/use-scheduler-store-context';
import {
  schedulerOtherSelectors,
  schedulerResourceSelectors,
} from '@mui/x-scheduler-internals/scheduler-selectors';
import type { SchedulerEventColor, SchedulerResourceId } from '@mui/x-scheduler-internals/models';
import { useStore } from '@base-ui/utils/store';
import type { PaletteName } from '../../utils/tokens';
import { getPaletteVariants } from '../../utils/tokens';
import { useEventDialogStyledContext } from './EventDialogStyledContext';

const NO_RESOURCE_VALUE = '';

const ResourceMenuItem = styled(MenuItem, {
  name: 'MuiEventDialog',
  slot: 'ResourceMenuItem',
})(({ theme }) => { throw new Error("STUB"); });

const ResourceMenuListSubheader = styled(ListSubheader, {
  name: 'MuiEventDialog',
  slot: 'ResourceMenuListSubheader',
})({});

const ResourceMenuColorDot = styled('span', {
  name: 'MuiEventDialog',
  slot: 'ResourceMenuColorDot',
})(({ theme }) => { throw new Error("STUB"); });

const ResourceMenuColorToggleGroup = styled(ToggleGroup, {
  name: 'MuiEventDialog',
  slot: 'ResourceMenuColorToggleGroup',
})(({ theme }) => { throw new Error("STUB"); });

const ResourceMenuColorToggle = styled(Toggle, {
  name: 'MuiEventDialog',
  slot: 'ResourceMenuColorToggle',
})<{ palette?: PaletteName }>(({ theme }) => { throw new Error("STUB"); });

interface ResourceSelectProps {
  readOnly?: boolean;
  resourceId: string | null;
  onResourceChange: (value: SchedulerResourceId) => void;
  onColorChange: (value: SchedulerEventColor | null) => void;
  color: SchedulerEventColor | null;
  error?: string;
}

interface ResourceSelectAdornmentProps {
  resource: ResourceOptionType | null;
}

interface ResourceOptionType {
  label: string;
  value: string | null;
  eventColor: SchedulerEventColor;
  isGroupRoot: boolean;
  indentLevel: number;
  showDivider: boolean;
  hidden?: boolean;
}

function ResourceSelectAdornment(props: ResourceSelectAdornmentProps) {
    throw new Error("STUB");
}

export default function ResourceAndColorSection(props: ResourceSelectProps) {
    throw new Error("STUB");
}
