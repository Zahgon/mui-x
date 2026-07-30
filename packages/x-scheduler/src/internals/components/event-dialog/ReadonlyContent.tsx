import * as React from 'react';
import CalendarMonthRounded from '@mui/icons-material/CalendarMonthRounded';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import { useStore } from '@base-ui/utils/store';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import type { SchedulerRenderableEventOccurrence } from '@mui/x-scheduler-internals/models';
import { useSchedulerStoreContext } from '@mui/x-scheduler-internals/use-scheduler-store-context';
import {
  schedulerEventSelectors,
  schedulerOtherSelectors,
  schedulerRecurringEventSelectors,
  schedulerResourceSelectors,
} from '@mui/x-scheduler-internals/scheduler-selectors';
import { useAdapterContext } from '@mui/x-scheduler-internals/use-adapter-context';
import { getPrimaryResourceId } from '@mui/x-scheduler-internals/internals';
import EventDialogHeader from './EventDialogHeader';
import { useEventDialogStyledContext } from './EventDialogStyledContext';
import { getRecurrenceLabel, hasProp } from './utils';
import { useFormatTime } from '../../hooks/useFormatTime';
import type { PaletteName } from '../../utils/tokens';
import { getPaletteVariants } from '../../utils/tokens';

const ReadonlyContentDragContainer = styled('section', {
  name: 'MuiEventDialog',
  slot: 'ReadonlyContentDragContainer',
})({
  cursor: 'move',
});

const ReadonlyContentRoot = styled('div', {
  name: 'MuiEventDialog',
  slot: 'ReadonlyContent',
})(({ theme }) => { throw new Error("STUB"); });

const RecurrenceLabelContainer = styled('div', {
  name: 'MuiEventDialog',
  slot: 'RecurrenceLabelContainer',
})(({ theme }) => { throw new Error("STUB"); });

const EventDialogActions = styled('div', {
  name: 'MuiEventDialog',
  slot: 'Actions',
})(({ theme }) => { throw new Error("STUB"); });

const EventDialogDateTimeContainer = styled('div', {
  name: 'MuiEventDialog',
  slot: 'DateTimeContainer',
})(({ theme }) => { throw new Error("STUB"); });

const EventDialogTitle = styled(Typography, {
  name: 'MuiEventDialog',
  slot: 'Title',
})({
  margin: 0,
  color: 'var(--event-on-surface-subtle-primary)',
});

const EventDialogResourceContainer = styled('div', {
  name: 'MuiEventDialog',
  slot: 'ResourceContainer',
})(({ theme }) => { throw new Error("STUB"); });

const EventDialogResourceLegendContainer = styled('div', {
  name: 'MuiEventDialog',
  slot: 'ResourceLegendContainer',
})(({ theme }) => { throw new Error("STUB"); });

const ResourceLegendColorDot = styled('span', {
  name: 'MuiEventDialog',
  slot: 'ResourceLegendColor',
})<{ palette?: PaletteName }>(({ theme }) => { throw new Error("STUB"); });

const EventDialogResourceTitle = styled(Typography, {
  name: 'MuiEventDialog',
  slot: 'ResourceTitle',
})(({ theme }) => { throw new Error("STUB"); });

type ReadonlyContentProps = {
  occurrence: SchedulerRenderableEventOccurrence;
  onClose: () => void;
  dragHandlerRef: React.RefObject<HTMLElement | null>;
};

export default function ReadonlyContent(props: ReadonlyContentProps) {
    throw new Error("STUB");
}
