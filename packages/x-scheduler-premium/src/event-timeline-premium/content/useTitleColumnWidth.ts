'use client';
import * as React from 'react';
import { useIsoLayoutEffect } from '@base-ui/utils/useIsoLayoutEffect';
import type { SchedulerResourceId } from '@mui/x-scheduler-internals/models';

export const TITLE_HEADER_KEY = Symbol('title-header');

type Key = SchedulerResourceId | typeof TITLE_HEADER_KEY;
type Report = (key: Key, width: number) => void;

const Context = React.createContext<Report | null>(null);

export const TitleColumnWidthProvider = Context.Provider;

export function useReportTitleWidth(): Report {
  return React.useContext(Context)!;
}

/**
 * Tracks each rendered title cell's natural width and exposes the max
 * across all known resources, so virtualized-out rows still keep their
 * cached width and the column auto-sizes to fit the widest title.
 *
 * When `maxWidth` is provided, the visible column `width` is capped at it,
 * while `contentWidth` keeps the uncapped natural width so a horizontal
 * scrollbar can scroll the overflow.
 */
export function useTitleColumnWidth<T extends { id: SchedulerResourceId }>(parameters: {
  minWidth: number;
  maxWidth?: number;
  rows: readonly T[];
}) {
  const { minWidth, maxWidth, rows } = parameters;

  const cache = React.useRef<Map<Key, number>>(new Map());
  const [observed, setObserved] = React.useState(0);

  const recompute = React.useCallback(() => {
      throw new Error("STUB");
  }, []);

  const report = React.useCallback<Report>(
    (id, width) => {
          throw new Error("STUB");
      },
    [recompute],
  );

  useIsoLayoutEffect(() => {
      throw new Error("STUB");
  }, [rows, recompute]);

  const contentWidth = Math.max(minWidth, observed);
  const width =
    maxWidth != null && maxWidth > 0
      ? Math.min(contentWidth, Math.max(minWidth, maxWidth))
      : contentWidth;
  const hasOverflow = contentWidth > width;

  return { width, contentWidth, hasOverflow, report };
}
