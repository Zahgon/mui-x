'use client';
import * as React from 'react';
import { useStore } from '@base-ui/utils/store';
import type { BaseUIComponentProps } from '@mui/x-scheduler-internals/base-ui-copy';
import { useRenderElement } from '@mui/x-scheduler-internals/base-ui-copy';
import { isWeekend } from '@mui/x-scheduler-internals/use-adapter';
import { useAdapterContext } from '@mui/x-scheduler-internals/use-adapter-context';
import { schedulerPreferenceSelectors } from '@mui/x-scheduler-internals/scheduler-selectors';
import { useEventTimelinePremiumStoreContext } from '../../use-event-timeline-premium-store-context';
import { eventTimelinePremiumPresetSelectors } from '../../event-timeline-premium-selectors';
import { iterate } from './iterate';

export const TimelineGridHeader = React.forwardRef(function TimelineGridHeader(
  componentProps: TimelineGridHeader.Props,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
    throw new Error("STUB");
});

export namespace TimelineGridHeader {
  export interface State {}

  export interface Props extends BaseUIComponentProps<'div', State> {
    /**
     * Extra class names applied to the primitive's internal elements so a styled wrapper
     * (or a consumer) can target rows, cells, and labels without a nested selector.
     */
    classNames?: {
      row?: string;
      cell?: string;
      label?: string;
    };
    /**
     * When provided, only header cells overlapping this tick range are rendered.
     * Tick indices are zero-based relative to the preset's tick grid (not the
     * virtualizer's column model which includes the pinned title column).
     */
    tickRange?: {
      firstTickIndex: number;
      lastTickIndex: number;
    };
  }
}

/**
 * Filters a level's cells to those overlapping a tick range and computes
 * the tick offset of the first visible cell within that level.
 */
function filterCellsByTickRange(
  cells: ReturnType<typeof iterate>,
  firstTickIndex: number,
  lastTickIndex: number,
): { visibleCells: ReturnType<typeof iterate>; offsetInTicks: number } {
  let tickCursor = 0;
  let firstVisibleIdx = -1;
  let lastVisibleIdx = -1;

  for (let i = 0; i < cells.length; i += 1) {
    const cellEnd = tickCursor + cells[i].spanInTicks;
    // Cell overlaps [firstTickIndex, lastTickIndex) if cellEnd > first && tickCursor < last
    if (cellEnd > firstTickIndex && tickCursor < lastTickIndex) {
      if (firstVisibleIdx === -1) {
        firstVisibleIdx = i;
      }
      lastVisibleIdx = i;
    }
    tickCursor = cellEnd;
  }

  if (firstVisibleIdx === -1) {
    return { visibleCells: [], offsetInTicks: 0 };
  }

  // Offset = tick position of the first visible cell
  let offsetInTicks = 0;
  for (let i = 0; i < firstVisibleIdx; i += 1) {
    offsetInTicks += cells[i].spanInTicks;
  }

  return {
    visibleCells: cells.slice(firstVisibleIdx, lastVisibleIdx + 1),
    offsetInTicks,
  };
}
