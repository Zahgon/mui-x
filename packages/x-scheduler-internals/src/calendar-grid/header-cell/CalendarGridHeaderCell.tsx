'use client';
import * as React from 'react';
import { createSelector, useStore } from '@base-ui/utils/store';
import { useRenderElement } from '../../base-ui-copy/utils/useRenderElement';
import type { BaseUIComponentProps } from '../../base-ui-copy/utils/types';
import { useCompositeListItem } from '../../base-ui-copy/composite/list/useCompositeListItem';
import { useCompositeListContext } from '../../base-ui-copy/composite/list/CompositeListContext';
import { useAdapterContext } from '../../use-adapter-context';
import { useEventCalendarStoreContext } from '../../use-event-calendar-store-context';
import type { SchedulerProcessedDate, TemporalSupportedObject } from '../../models';
import { getCalendarGridHeaderCellId } from '../../internals/utils/accessibility-utils';
import { getNavigationTarget } from '../../internals/utils/getNavigationTarget';
import { useCalendarGridRootContext } from '../root/CalendarGridRootContext';
import { schedulerNowSelectors } from '../../scheduler-selectors';
import type { EventCalendarState } from '../../use-event-calendar';

const selectorIsCurrentDate = createSelector(
  (
    state: EventCalendarState,
    date: TemporalSupportedObject,
    skipDataCurrent: boolean | undefined,
  ) => { throw new Error("STUB"); },
);

export const CalendarGridHeaderCell = React.forwardRef(function CalendarGridHeaderCell(
  componentProps: CalendarGridHeaderCell.Props,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
    throw new Error("STUB");
});

export namespace CalendarGridHeaderCell {
  export interface State {
    /**
     * Whether the header cell represents the current day.
     */
    current: boolean;
  }

  export interface Props extends BaseUIComponentProps<'div', State> {
    /**
     * The date of the events rendered in the same column as this header cell.
     */
    date: SchedulerProcessedDate;
    /**
     * The format used for the `aria-label` attribute.
     * @default adapter.formats.weekday
     */
    ariaLabelFormat?: string;
    /**
     * Whether to skip adding the `data-current` attribute to the root element when the header cell represents the current day.
     * This can be useful when the cells in the column are not representing a single day (e.g. in the month view).
     * @default false
     */
    skipDataCurrent?: boolean;
  }
}
