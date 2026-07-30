'use client';
import * as React from 'react';
import { useStore } from '@base-ui/utils/store';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel, { formControlLabelClasses } from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import type {
  SchedulerEventColor,
  SchedulerResourceId,
  SchedulerRenderableEventOccurrence,
} from '@mui/x-scheduler-internals/models';
import { useSchedulerStoreContext } from '@mui/x-scheduler-internals/use-scheduler-store-context';
import { useAdapterContext } from '@mui/x-scheduler-internals/use-adapter-context';
import {
  schedulerEventSelectors,
  schedulerOccurrencePlaceholderSelectors,
  schedulerOtherSelectors,
} from '@mui/x-scheduler-internals/scheduler-selectors';
import { useEventDialogStyledContext } from './EventDialogStyledContext';
import type { ControlledValue } from './utils';
import { computeRange, hasProp } from './utils';
import ResourceAndColorSection from './ResourceAndColorSection';
import { EventDialogTabPanel, EventDialogTabContent } from './EventDialogTabPanel';

const SectionFieldset = styled('fieldset', {
  name: 'MuiEventDialog',
  slot: 'SectionFieldset',
})(({ theme }) => { throw new Error("STUB"); });

const SectionHeaderTitle = styled('legend', {
  name: 'MuiEventDialog',
  slot: 'SectionHeaderTitle',
})(({ theme }) => { throw new Error("STUB"); });

const DateTimeFieldsContainer = styled('div', {
  name: 'MuiEventDialog',
  slot: 'DateTimeFieldsContainer',
})(({ theme }) => { throw new Error("STUB"); });

const DateTimeFieldsRow = styled('div', {
  name: 'MuiEventDialog',
  slot: 'DateTimeFieldsRow',
})(({ theme }) => { throw new Error("STUB"); });

const AllDayFormControlLabel = styled(FormControlLabel, {
  name: 'MuiEventDialog',
  slot: 'AllDayFormControlLabel',
})({
  width: '100%',
  justifyContent: 'space-between',
  [`&.${formControlLabelClasses.root}`]: {
    marginLeft: 0,
  },
});

interface GeneralTabProps {
  occurrence: SchedulerRenderableEventOccurrence;
  errors: Record<string, string | string[]>;
  setErrors: (errors: Record<string, string | string[]>) => void;
  controlled: ControlledValue;
  setControlled: React.Dispatch<React.SetStateAction<ControlledValue>>;
  value: string;
}

export function GeneralTab(props: GeneralTabProps) {
    throw new Error("STUB");
}
