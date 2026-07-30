'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import type { Store } from '@base-ui/utils/store';
import { useStore } from '@base-ui/utils/store';
import type { RenderDragPreviewParameters } from '@mui/x-scheduler-internals/models';
import { schedulerEventSelectors } from '@mui/x-scheduler-internals/scheduler-selectors';
import { useSchedulerStoreContext } from '@mui/x-scheduler-internals/use-scheduler-store-context';
import type { PaletteName } from '../../utils/tokens';
import { getPaletteVariants } from '../../utils/tokens';
import { EventCalendarStyledContext } from '../../../event-calendar/EventCalendarStyledContext';

const EventDragPreviewRoot = styled('div', {
  name: 'MuiEventCalendar',
  slot: 'EventDragPreview',
})<{ palette?: PaletteName }>(({ theme }) => { throw new Error("STUB"); });

const fakeStore = {
  subscribe: () => {
        throw new Error("STUB");
    },
  getSnapshot: () => { throw new Error("STUB"); },
} as unknown as Store<any>;

export function EventDragPreview(props: RenderDragPreviewParameters) {
    throw new Error("STUB");
}
