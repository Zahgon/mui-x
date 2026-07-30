'use client';
import * as React from 'react';
import { useStore } from '@base-ui/utils/store';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import type { RecurringEventScope } from '@mui/x-scheduler-internals/models';
import { schedulerOtherSelectors } from '@mui/x-scheduler-internals/scheduler-selectors';
import { useSchedulerStoreContext } from '@mui/x-scheduler-internals/use-scheduler-store-context';
import { useEventDialogStyledContext } from '@mui/x-scheduler/internals';
import type { RecurringScopeDialogProps } from './RecurringScopeDialog.types';

export const RecurringScopeDialog = React.forwardRef<HTMLDivElement, RecurringScopeDialogProps>(
  function RecurringScopeDialog(props, ref) {
        throw new Error("STUB");
    },
);
