'use client';
import * as React from 'react';
import { useThemeProps } from '@mui/material/styles';
import { useExtractEventCalendarParameters } from '@mui/x-scheduler-internals/use-event-calendar';
import type { StandaloneCompactDayViewProps } from './CompactDayView.types';
import { EventCalendarProvider } from '../internals/components/EventCalendarProvider';
import { EventDialogProvider } from '../internals/components/event-dialog';
import { ResponsiveTypographyContainer } from '../internals/components/ResponsiveTypographyContainer';
import { CompactDayView } from './CompactDayView';

/**
 * A touch-optimized Day View (1 day) for narrow widths that can be used outside of the
 * Event Calendar.
 */
const StandaloneCompactDayView = React.forwardRef(function StandaloneCompactDayView<
  TEvent extends object,
  TResource extends object,
>(
  inProps: StandaloneCompactDayViewProps<TEvent, TResource>,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as StandaloneCompactDayViewComponent;

export { StandaloneCompactDayView };

interface StandaloneCompactDayViewComponent {
  <TEvent extends object, TResource extends object>(
    props: StandaloneCompactDayViewProps<TEvent, TResource> & {
      ref?: React.ForwardedRef<HTMLDivElement>;
    },
  ): React.JSX.Element;
  propTypes?: any;
}
