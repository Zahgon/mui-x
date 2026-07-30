'use client';
import * as React from 'react';
import type { BaseUIComponentProps } from '@mui/x-scheduler-internals/base-ui-copy';
import { useRenderElement } from '@mui/x-scheduler-internals/base-ui-copy';
import { TimelineGridBodyRowContext } from './TimelineGridBodyRowContext';

/**
 * A unified row container that provides its index to child cells
 * (TitleRow, EventRow) for keyboard navigation.
 * The `index` is passed as a prop (e.g. from the virtualizer's renderRow).
 */
export const TimelineGridBodyRow = React.forwardRef(function TimelineGridBodyRow(
  componentProps: TimelineGridBodyRow.Props,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
    throw new Error("STUB");
});

export namespace TimelineGridBodyRow {
  export interface State {}

  export interface Props extends BaseUIComponentProps<'div', State> {
    /**
     * The logical row index within the grid.
     * Provided by the virtualizer's `renderRow` callback.
     */
    index: number;
  }
}
