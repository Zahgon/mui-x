'use client';
import * as React from 'react';
import { useStore } from '@base-ui/utils/store';
import { useRenderElement } from '../../base-ui-copy/utils/useRenderElement';
import type { BaseUIComponentProps } from '../../base-ui-copy/utils/types';
import { useAdapterContext } from '../../use-adapter-context';
import { useCalendarGridTimeColumnContext } from '../time-column/CalendarGridTimeColumnContext';
import { useElementPositionInCollection } from '../../internals/utils/useElementPositionInCollection';
import { CalendarGridCurrentTimeIndicatorCssVars } from './CalendarGridCurrentTimeIndicatorCssVars';
import { mergeDateAndTime } from '../../internals/utils/date-utils';
import { useEventCalendarStoreContext } from '../../use-event-calendar-store-context';
import { schedulerNowSelectors } from '../../scheduler-selectors';
import { processDate } from '../../process-date';

export const CalendarGridCurrentTimeIndicator = React.forwardRef(
  function CalendarGridCurrentTimeIndicator(
    componentProps: CalendarGridCurrentTimeIndicator.Props,
    forwardedRef: React.ForwardedRef<HTMLDivElement>,
  ) {
        throw new Error("STUB");
    },
);

export namespace CalendarGridCurrentTimeIndicator {
  export interface State {}
  export interface Props extends BaseUIComponentProps<'div', State> {}
}
