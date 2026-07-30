'use client';
import * as React from 'react';
import { useThemeProps } from '@mui/material/styles';
import { useExtractEventCalendarParameters } from '@mui/x-scheduler-internals/use-event-calendar';
import type { StandaloneCompactThreeDayViewProps } from './CompactThreeDayView.types';
import { EventCalendarProvider } from '../internals/components/EventCalendarProvider';
import { EventDialogProvider } from '../internals/components/event-dialog';
import { ResponsiveTypographyContainer } from '../internals/components/ResponsiveTypographyContainer';
import { CompactThreeDayView } from './CompactThreeDayView';

/**
 * A touch-optimized 3-Day View (3 days) for narrow widths that can be used outside of the
 * Event Calendar.
 */
const StandaloneCompactThreeDayView = React.forwardRef(function StandaloneCompactThreeDayView<
  TEvent extends object,
  TResource extends object,
>(
  inProps: StandaloneCompactThreeDayViewProps<TEvent, TResource>,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as StandaloneCompactThreeDayViewComponent;

export { StandaloneCompactThreeDayView };

interface StandaloneCompactThreeDayViewComponent {
  <TEvent extends object, TResource extends object>(
    props: StandaloneCompactThreeDayViewProps<TEvent, TResource> & {
      ref?: React.ForwardedRef<HTMLDivElement>;
    },
  ): React.JSX.Element;
  propTypes?: any;
}
