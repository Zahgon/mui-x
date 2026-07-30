'use client';
import * as React from 'react';
import { useId } from '@base-ui/utils/useId';
import { useRenderElement } from '../../base-ui-copy/utils/useRenderElement';
import type { BaseUIComponentProps } from '../../base-ui-copy/utils/types';
import { DEFAULT_ROW_TYPES } from '../../internals/utils/getNavigationTarget';
import type { GridCellCoordinates, GridRowType } from '../../models/calendarGrid';
import { CalendarGridRootContext } from './CalendarGridRootContext';

const DEFAULT_ROWS_PER_TYPE: Partial<Record<GridRowType, number>> = {};

export const CalendarGridRoot = React.forwardRef(function CalendarGridRoot(
  componentProps: CalendarGridRoot.Props,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
    throw new Error("STUB");
});

export namespace CalendarGridRoot {
  export interface State {}

  export interface Props extends BaseUIComponentProps<'div', State> {
    /**
     * The ordered list of row types that are rendered in the grid.
     * Used for vertical arrow-key navigation so it only targets rows that actually exist.
     * @default ['header', 'day-grid', 'time-grid']
     */
    rowTypes?: GridRowType[];
    /**
     * The number of rows for each row type.
     * Defaults to 1 for row types not specified.
     * Month view uses this to indicate multiple week rows (e.g., `{ 'day-grid': 5 }`).
     * @default {}
     */
    rowsPerType?: Partial<Record<GridRowType, number>>;
  }
}
