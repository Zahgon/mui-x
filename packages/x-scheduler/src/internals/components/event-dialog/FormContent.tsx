'use client';
import * as React from 'react';
import { useStore } from '@base-ui/utils/store';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import MuiDialogContent from '@mui/material/DialogContent';
import Divider from '@mui/material/Divider';
import { inputBaseClasses } from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import type {
  SchedulerEventUpdatedProperties,
  SchedulerProcessedDate,
  RecurringEventFrequency,
  SchedulerProcessedEventRecurrenceRule,
  SchedulerRenderableEventOccurrence,
} from '@mui/x-scheduler-internals/models';
import { useSchedulerStoreContext } from '@mui/x-scheduler-internals/use-scheduler-store-context';
import { useAdapterContext } from '@mui/x-scheduler-internals/use-adapter-context';
import {
  schedulerEventSelectors,
  schedulerOccurrencePlaceholderSelectors,
  schedulerOtherSelectors,
  schedulerRecurringEventSelectors,
} from '@mui/x-scheduler-internals/scheduler-selectors';
import { getPrimaryResourceId } from '@mui/x-scheduler-internals/internals';
import { useEventDialogStyledContext } from './EventDialogStyledContext';
import { useEventDialogOptionalRenderers } from './EventDialogOptionalRenderersContext';
import type { ControlledValue } from './utils';
import { computeRange, hasProp, validateRange } from './utils';
import EventDialogHeader from './EventDialogHeader';
import { GeneralTab } from './GeneralTab';

const FormActions = styled(DialogActions, {
  name: 'MuiEventDialog',
  slot: 'FormActions',
})(({ theme }) => { throw new Error("STUB"); });

const DialogContent = styled(MuiDialogContent, {
  name: 'MuiEventDialog',
  slot: 'DialogContent',
})({
  cursor: 'default',
  userSelect: 'text',
  padding: 0,
  minWidth: 360,
  width: 450,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

const EventDialogTitleTextField = styled(TextField, {
  name: 'MuiEventDialog',
  slot: 'TitleTextField',
})(({ theme }) => { throw new Error("STUB"); });

const EventDialogForm = styled('form', {
  name: 'MuiEventDialog',
  slot: 'Form',
})({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  minHeight: 0,
});

const EventDialogTabsContainer = styled('div', {
  name: 'MuiEventDialog',
  slot: 'TabsContainer',
})(({ theme }) => { throw new Error("STUB"); });

const EventDialogTabs = styled(Tabs, {
  name: 'MuiEventDialog',
  slot: 'Tabs',
})(({ theme }) => { throw new Error("STUB"); });

interface FormContentProps {
  occurrence: SchedulerRenderableEventOccurrence;
  onClose: () => void;
  dragHandlerRef: React.RefObject<HTMLElement | null>;
}

export function FormContent(props: FormContentProps) {
    throw new Error("STUB");
}
