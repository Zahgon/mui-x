'use client';
import * as React from 'react';
import { useStore } from '@base-ui/utils/store';
import { useRenderElement } from '../../base-ui-copy/utils/useRenderElement';
import type { BaseUIComponentProps } from '../../base-ui-copy/utils/types';
import { useCompositeListItem } from '../../base-ui-copy/composite/list/useCompositeListItem';
import { useCompositeListContext } from '../../base-ui-copy/composite/list/CompositeListContext';
import { useEventCalendarStoreContext } from '../../use-event-calendar-store-context';
import { useAdapterContext } from '../../use-adapter-context';
import { schedulerNowSelectors } from '../../scheduler-selectors';
import { EVENT_CREATION_PRECISION_MINUTE } from '../../constants';
import { useEventCreation } from '../../internals/utils/useEventCreation';
import { useKeyboardEventCreation } from '../../internals/utils/useKeyboardEventCreation';
import { getNavigationTarget } from '../../internals/utils/getNavigationTarget';
import { useCalendarGridRootContext } from '../root/CalendarGridRootContext';
import { CalendarGridTimeColumnContext } from './CalendarGridTimeColumnContext';
import { useTimeDropTarget } from './useTimeDropTarget';

export const CalendarGridTimeColumn = React.forwardRef(function CalendarGridTimeColumn(
  componentProps: CalendarGridTimeColumn.Props,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
    throw new Error("STUB");
});

export namespace CalendarGridTimeColumn {
  export interface State {
    /**
     * Whether the column represents the current day.
     */
    current: boolean;
  }

  export interface Props extends BaseUIComponentProps<'div', State>, useTimeDropTarget.Parameters {
    /**
     * First displayed minute of the day, as an offset from midnight.
     * Derived from the view's whole-hour window so it stays aligned with the
     * grid rows even on DST-transition days.
     * @default 0
     */
    dayStartMinute?: number;
    /**
     * Last displayed minute of the day, as an offset from midnight.
     * Derived from the view's whole-hour window so it stays aligned with the
     * grid rows even on DST-transition days.
     * @default 1440
     */
    dayEndMinute?: number;
  }
}
