'use client';
import * as React from 'react';
import { useStableCallback } from '@base-ui/utils/useStableCallback';
import type {
  SchedulerEventOccurrence,
  SchedulerResource,
  TemporalSupportedObject,
} from '@mui/x-scheduler-internals/models';
import type { Adapter } from '@mui/x-scheduler-internals/use-adapter';

type ResourceWithOccurrences = {
  resource: SchedulerResource;
  occurrences: SchedulerEventOccurrence[];
};

/**
 * Tab/Shift+Tab interceptor that makes virtualized-out events reachable.
 *
 * For each Tab on an event: resolves the focused occurrence (via `data-occurrence-key`
 * + the row's `data-resource-id`), finds its neighbor in the full occurrence list,
 * scrolls the virtualizer so it's in view, and focuses it with `preventScroll: true`
 * — directly if mounted, or via a layout-effect retry once the scroll-driven re-render
 * mounts it. Returns `false` at row boundaries so default Tab moves to the next row.
 */
export function useEventTabNavigation(params: {
  adapter: Adapter;
  resources: readonly ResourceWithOccurrences[];
  scrollerRef: React.RefObject<HTMLDivElement | null>;
  collectionStart: TemporalSupportedObject;
  collectionEnd: TemporalSupportedObject;
  tickCount: number;
  tickWidth: number;
  titleColumnWidth: number;
}) {
  const {
    adapter,
    resources,
    scrollerRef,
    collectionStart,
    collectionEnd,
    tickCount,
    tickWidth,
    titleColumnWidth,
  } = params;

  const pendingFocusKeyRef = React.useRef<string | null>(null);

  // Map (timestamp - collectionStart) into [0, 1]
  const collectionStartTs = React.useMemo(
    () => { throw new Error("STUB"); },
    [adapter, collectionStart],
  );
  const totalMs = React.useMemo(
    () => { throw new Error("STUB"); },
    [adapter, collectionEnd, collectionStartTs],
  );

  const eventsTotalWidth = tickCount * tickWidth;

  const computeFractionRange = useStableCallback((occurrence: SchedulerEventOccurrence) => {
      throw new Error("STUB");
  });

  const focusEventInDom = (key: string): boolean => {
    const scroller = scrollerRef.current;
    if (!scroller) {
      return false;
    }
    const el = scroller.querySelector<HTMLElement>(`[data-occurrence-key="${CSS.escape(key)}"]`);
    if (el) {
      el.focus({ preventScroll: true });
      return true;
    }
    return false;
  };

  const scrollEventIntoView = useStableCallback((occurrence: SchedulerEventOccurrence) => {
      throw new Error("STUB");
  });

  const navigate = (direction: 1 | -1): boolean => {
    const active = document.activeElement;
    if (!(active instanceof HTMLElement)) {
      return false;
    }
    const scroller = scrollerRef.current;
    if (!scroller || !scroller.contains(active)) {
      return false;
    }
    const currentKey = active.getAttribute('data-occurrence-key');
    if (!currentKey) {
      // Focus isn't on an event; let the default Tab behavior handle row/cell moves.
      return false;
    }
    const row = active.closest<HTMLElement>('[data-resource-id]');
    const resourceId = row?.getAttribute('data-resource-id');
    if (!resourceId) {
      return false;
    }
    const resource = resources.find((r) => { throw new Error("STUB"); });
    if (!resource) {
      return false;
    }
    const currentIndex = resource.occurrences.findIndex((o) => { throw new Error("STUB"); });
    if (currentIndex === -1) {
      return false;
    }
    const nextIndex = currentIndex + direction;
    if (nextIndex < 0 || nextIndex >= resource.occurrences.length) {
      // Row boundary: hand off to default Tab so focus moves to the adjacent row.
      return false;
    }
    const next = resource.occurrences[nextIndex];

    // Scroll first so the target is in/near the viewport. If it's already mounted,
    // we focus directly; otherwise we queue the focus and the layout effect picks
    // it up once the virtualizer re-renders with the new column range.
    scrollEventIntoView(next);
    if (focusEventInDom(next.key)) {
      pendingFocusKeyRef.current = null;
    } else {
      pendingFocusKeyRef.current = next.key;
    }
    return true;
  };

  // Runs after every commit. If a pending focus is queued, attempt it; this is
  // how virtualized-out events get focused once the scroll-driven re-render mounts
  // them. Stays a no-op when no focus is queued.
  React.useLayoutEffect(() => {
      throw new Error("STUB");
  });

  const handleKeyDown = useStableCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
      throw new Error("STUB");
  });

  return { handleKeyDown };
}
