'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useStore } from '@base-ui/utils/store';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Checkbox, { checkboxClasses } from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel, { formControlLabelClasses } from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup, { toggleButtonGroupClasses } from '@mui/material/ToggleButtonGroup';
import type {
  RecurringEventFrequency,
  RecurringEventPresetKey,
  RecurringEventByDayValue,
  RecurringEventWeekDayCode,
  SchedulerRenderableEventOccurrence,
} from '@mui/x-scheduler-internals/models';
import { useSchedulerStoreContext } from '@mui/x-scheduler-internals/use-scheduler-store-context';
import { useAdapterContext } from '@mui/x-scheduler-internals/use-adapter-context';
import {
  schedulerEventSelectors,
  schedulerOtherSelectors,
  schedulerPreferenceSelectors,
} from '@mui/x-scheduler-internals/scheduler-selectors';
import { getMonthlyReference, getWeeklyDays } from '@mui/x-scheduler-internals-premium/internals';
import type { ControlledValue, EndsSelection } from '@mui/x-scheduler/internals';
import {
  useEventDialogStyledContext,
  getEndsSelectionFromRRule,
  formatDayOfMonthAndMonthFullLetter,
  EventDialogTabPanel,
  EventDialogTabContent,
  getWeekdayToken,
} from '@mui/x-scheduler/internals';

const SectionHeaderTitle = styled('legend', {
  name: 'MuiEventDialog',
  slot: 'SectionHeaderTitle',
})(({ theme }) => { throw new Error("STUB"); });

const RecurrenceSelectorContainer = styled('div', {
  name: 'MuiEventDialog',
  slot: 'RecurrenceSelectorContainer',
})(({ theme }) => { throw new Error("STUB"); });

const RadioButtonLabel = styled(FormControlLabel, {
  name: 'MuiEventDialog',
  slot: 'RadioButtonLabel',
})(({ theme }) => { throw new Error("STUB"); });

const RepeatSectionLabel = styled(FormLabel, {
  name: 'MuiEventDialog',
  slot: 'RepeatSectionLabel',
})(({ theme }) => { throw new Error("STUB"); });

const EndsRadioGroup = styled(RadioGroup, {
  name: 'MuiEventDialog',
  slot: 'EndsRadioGroup',
})({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

const RepeatSectionFieldset = styled('fieldset', {
  name: 'MuiEventDialog',
  slot: 'RepeatSectionFieldset',
})({
  border: 0,
  margin: 0,
  padding: 0,
});

const RepeatSectionContent = styled('div', {
  name: 'MuiEventDialog',
  slot: 'RepeatSectionContent',
})({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

const InlineRow = styled('div', {
  name: 'MuiEventDialog',
  slot: 'InlineRow',
})({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

const RecurrenceSelectorToggleGroup = styled(ToggleButtonGroup, {
  name: 'MuiEventDialog',
  slot: 'RecurrenceSelectorToggleGroup',
})(({ theme }) => { throw new Error("STUB"); });

const WeekDaySelectorCheckbox = styled(Checkbox, {
  name: 'MuiEventDialog',
  slot: 'WeekDaySelectorCheckbox',
})(({ theme }) => { throw new Error("STUB"); });

const FrequencySelect = styled(Select, {
  name: 'MuiEventDialog',
  slot: 'FrequencySelect',
})({
  maxWidth: 120,
});

const SmallNumberField = styled(TextField, {
  name: 'MuiEventDialog',
  slot: 'SmallNumberField',
})({
  maxWidth: 100,
});

interface RecurrenceTabProps {
  occurrence: SchedulerRenderableEventOccurrence;
  controlled: ControlledValue;
  setControlled: React.Dispatch<React.SetStateAction<ControlledValue>>;
  tabValue: string;
}

export function RecurrenceTab(props: RecurrenceTabProps) {
    throw new Error("STUB");
}
