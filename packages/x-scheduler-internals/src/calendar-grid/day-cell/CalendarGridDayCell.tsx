'use client';
import * as React from 'react';
import { useRenderElement } from '../../base-ui-copy/utils/useRenderElement';
import type { BaseUIComponentProps } from '../../base-ui-copy/utils/types';
import { useCompositeListItem } from '../../base-ui-copy/composite/list/useCompositeListItem';
import { useCompositeListContext } from '../../base-ui-copy/composite/list/CompositeListContext';
import { useAdapterContext } from '../../use-adapter-context';
import { useEventCreation } from '../../internals/utils/useEventCreation';
import { getCalendarGridHeaderCellId } from '../../internals/utils/accessibility-utils';
import { useKeyboardEventCreation } from '../../internals/utils/useKeyboardEventCreation';
import { getNavigationTarget } from '../../internals/utils/getNavigationTarget';
import { useCalendarGridRootContext } from '../root/CalendarGridRootContext';
import { useCalendarGridDayRowContext } from '../day-row/CalendarGridDayRowContext';
import { useDayCellDropTarget } from './useDayCellDropTarget';
import { CalendarGridDayCellContext } from './CalendarGridDayCellContext';

export const CalendarGridDayCell = React.forwardRef(function CalendarGridDayCell(
  componentProps: CalendarGridDayCell.Props,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
    throw new Error("STUB");
});

export namespace CalendarGridDayCell {
  export interface State {}

  export interface Props
    extends BaseUIComponentProps<'div', State>, useDayCellDropTarget.Parameters {
    /**
     * Whether to lock the surface type of the created event placeholder.
     * When true, the surfaceType will not be updated when editing the placeholder.
     */
    lockSurfaceType?: boolean;
  }
}
