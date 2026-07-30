'use client';
import * as React from 'react';
import { useStore } from '@base-ui/utils/store';
import { EMPTY_OBJECT } from '@base-ui/utils/empty';
import type { PaperProps } from '@mui/material/Paper';
import Paper from '@mui/material/Paper';
import type { DialogProps } from '@mui/material/Dialog';
import Dialog, { dialogClasses } from '@mui/material/Dialog';
import { backdropClasses } from '@mui/material/Backdrop';
import { styled, useThemeProps } from '@mui/material/styles';
import type { SchedulerRenderableEventOccurrence } from '@mui/x-scheduler-internals/models';
import {
  schedulerEventSelectors,
  schedulerOtherSelectors,
} from '@mui/x-scheduler-internals/scheduler-selectors';
import { useSchedulerStoreContext } from '@mui/x-scheduler-internals/use-scheduler-store-context';
import { useDraggableDialog } from '@mui/x-scheduler-internals/use-draggable-dialog';
import type {
  EventDialogProps,
  EventDialogProviderProps,
  EventDialogTriggerProps,
} from './EventDialog.types';
import { createModal } from '../create-modal';
import { FormContent } from './FormContent';
import { calculatePosition } from '../../utils/dialog-utils';
import ReadonlyContent from './ReadonlyContent';
import { useEventDialogStyledContext } from './EventDialogStyledContext';
import type { EventDialogOptionalRenderers } from './EventDialogOptionalRenderersContext';
import { EventDialogOptionalRenderersContext } from './EventDialogOptionalRenderersContext';

const EventDialogRoot = styled(Dialog, {
  name: 'MuiEventDialog',
  slot: 'Root',
})({
  [`& .${backdropClasses.root}`]: {
    backgroundColor: 'transparent',
  },
  [`& .${dialogClasses.container}`]: {
    width: '100%',
    justifyContent: 'unset',
    alignItems: 'unset',
  },
  [`& .${dialogClasses.paper}`]: {
    margin: 0,
  },
});

const EventDialogPaper = styled(Paper, {
  name: 'MuiEventDialog',
  slot: 'Paper',
})(({ theme }) => { throw new Error("STUB"); });

interface PaperComponentProps extends PaperProps {
  anchorRef: React.RefObject<HTMLElement>;
  dragHandlerRef: React.RefObject<HTMLElement | null>;
}

// 1. Setup the Draggable Paper Logic
const PaperComponent = function PaperComponent(props: PaperComponentProps) {
    throw new Error("STUB");
} as any as DialogProps['PaperComponent'];

const EventDialog = createModal<SchedulerRenderableEventOccurrence>({
  contextName: 'EventDialogContext',
});

export const EventDialogContext = EventDialog.Context;
export const useEventDialogContext = EventDialog.useContext;

export const EventDialogContent = React.forwardRef(function EventDialogContent(
  inProps: EventDialogProps,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
    throw new Error("STUB");
});

export function EventDialogProvider(props: EventDialogProviderProps) {
    throw new Error("STUB");
}

export function EventDialogTrigger(props: EventDialogTriggerProps) {
    throw new Error("STUB");
}
