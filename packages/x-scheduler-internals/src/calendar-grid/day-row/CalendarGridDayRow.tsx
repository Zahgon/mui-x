'use client';
import * as React from 'react';
import { useRenderElement } from '../../base-ui-copy/utils/useRenderElement';
import { CompositeList } from '../../base-ui-copy/composite/list/CompositeList';
import type { BaseUIComponentProps } from '../../base-ui-copy/utils/types';
import { CalendarGridDayRowContext } from './CalendarGridDayRowContext';
import type { TemporalSupportedObject } from '../../models';

export const CalendarGridDayRow = React.forwardRef(function CalendarGridDayRow(
  componentProps: CalendarGridDayRow.Props,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
    throw new Error("STUB");
});

export namespace CalendarGridDayRow {
  export interface State {}

  export interface Props extends BaseUIComponentProps<'div', State> {
    /**
     * The data and time at which the row starts.
     */
    start: TemporalSupportedObject;
    /**
     * The data and time at which the row ends.
     */
    end: TemporalSupportedObject;
    /**
     * The index of this row within its row type.
     * Used to uniquely identify the row for keyboard navigation when there are
     * multiple rows of the same type (e.g., multiple weeks in the month view).
     * @default 0
     */
    rowIndex?: number;
  }
}
