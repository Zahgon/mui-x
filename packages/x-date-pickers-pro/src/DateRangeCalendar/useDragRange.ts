'use client';
import * as React from 'react';
import useEventCallback from '@mui/utils/useEventCallback';
import { isHTMLElement } from '@mui/x-internals/domUtils';
import type {
  MuiPickersAdapter,
  PickersTimezone,
  PickerValidDate,
} from '@mui/x-date-pickers/models';
import type { PickerRangeValue } from '@mui/x-date-pickers/internals';
import type { RangePosition } from '../models';
import { isEndOfRange, isStartOfRange } from '../internals/utils/date-utils';

interface UseDragRangeParams {
  disableDragEditing?: boolean;
  adapter: MuiPickersAdapter;
  setRangeDragDay: (value: PickerValidDate | null) => void;
  setIsDragging: (value: boolean) => void;
  onDatePositionChange: (position: RangePosition) => void;
  onDrop: (newDate: PickerValidDate) => void;
  dateRange: PickerRangeValue;
  timezone: PickersTimezone;
}

interface UseDragRangeEvents {
  onPointerDown?: React.PointerEventHandler<HTMLButtonElement>;
  onPointerOver?: React.PointerEventHandler<HTMLButtonElement>;
}

interface UseDragRangeResponse extends UseDragRangeEvents {
  isDragging: boolean;
  rangeDragDay: PickerValidDate | null;
  draggingDatePosition: RangePosition | null;
}

/**
 * Returns the element (or its closest ancestor) carrying `data-{attr}`.
 * Single-word `attr` only — `dataset[attr]` (camelCase) and `.closest()`
 * (kebab-case) only agree for single-word names.
 */
const getClosestElementWithDataAttribute = (
  element: HTMLElement | null,
  dataAttribute: string,
): HTMLElement | null => {
  if (!element) {
    return null;
  }
  return element.dataset[dataAttribute] != null
    ? element
    : element.closest<HTMLElement>(`[data-${dataAttribute}]`);
};

const resolveDateFromTarget = (
  target: EventTarget | null,
  adapter: MuiPickersAdapter,
  timezone: PickersTimezone,
) => {
  if (!isHTMLElement(target)) {
    return null;
  }

  const element = getClosestElementWithDataAttribute(target, 'timestamp');
  const timestampString = element?.dataset.timestamp;
  if (!timestampString) {
    return null;
  }

  // Guard against malformed `data-timestamp` — `Number('abc')` is `NaN` and
  // `new Date(NaN).toISOString()` throws, which would otherwise wedge the
  // gesture mid-`pointerover`.
  const timestamp = Number(timestampString);
  if (!Number.isFinite(timestamp)) {
    return null;
  }

  return adapter.date(new Date(timestamp).toISOString(), timezone);
};

const useDragRangeEvents = ({
  adapter,
  setRangeDragDay,
  setIsDragging,
  onDatePositionChange,
  onDrop,
  disableDragEditing,
  dateRange,
  timezone,
}: UseDragRangeParams): UseDragRangeEvents => {
  const isDraggingRef = React.useRef(false);
  const pointerIdRef = React.useRef<number | null>(null);
  const sourceDateRef = React.useRef<PickerValidDate | null>(null);
  const sourcePositionRef = React.useRef<RangePosition | null>(null);
  const didMoveRef = React.useRef(false);
  // Last cell the pointer hovered. Used to dedupe `pointerover` (which fires
  // repeatedly within the same cell), and as the drop fallback for
  // `pointercancel` (whose `event.target` is unreliable across browsers).
  const lastHoveredCellRef = React.useRef<HTMLElement | null>(null);
  // Each entry removes one document listener the gesture installed.
  const listenerCleanupsRef = React.useRef<Array<() => void>>([]);
  // Outstanding capture-phase click suppressor, if any. Tracked so back-to-back
  // drags can tear the prior one down before installing a new one.
  const clickSuppressorRef = React.useRef<(() => void) | null>(null);

  const isElementDraggable = (day: PickerValidDate | null): day is PickerValidDate => {
    if (day == null) {
      return false;
    }

    const shouldInitDragging = !disableDragEditing && !!dateRange[0] && !!dateRange[1];
    const isSelectedStartDate = isStartOfRange(adapter, day, dateRange);
    const isSelectedEndDate = isEndOfRange(adapter, day, dateRange);

    return shouldInitDragging && (isSelectedStartDate || isSelectedEndDate);
  };

  // Resets every ref the gesture mutated and removes any listeners installed
  // during the gesture. Safe to call from event handlers and from unmount.
  // Only reads refs, so its closure never changes — memoized for stable
  // identity (referenced by `cleanup` and the unmount effect).
  const clearGestureState = useEventCallback(() => {
      throw new Error("STUB");
  });

  const cleanup = useEventCallback(() => {
      throw new Error("STUB");
  });

  const installClickSuppressor = (doc: Document) => {
    // Tear down a prior outstanding suppressor first; back-to-back drags
    // would otherwise race two listeners on the document.
    clickSuppressorRef.current?.();

    // suppress and teardown reference each other, so forward-declare suppress.
    let suppress: (event: Event) => void;
    const teardown = () => {
      doc.removeEventListener('click', suppress, { capture: true });
      if (clickSuppressorRef.current === teardown) {
        clickSuppressorRef.current = null;
      }
    };
    suppress = (clickEvent: Event) => {
        throw new Error("STUB");
    };
    doc.addEventListener('click', suppress, { capture: true });
    clickSuppressorRef.current = teardown;
    // If no click ever fires (drop on a different cell, browser doesn't
    // synthesize), tear the listener down so it doesn't leak.
    setTimeout(teardown, 0);
  };

  const finalizeGesture = (
    event: PointerEvent,
    ownerDoc: Document,
    eventType: 'pointerup' | 'pointercancel',
  ) => {
    const wasMoved = didMoveRef.current;
    const sourceDate = sourceDateRef.current;

    // For `pointerup`, the drop target is whatever element the pointer was
    // actually over at release time — releasing into a gap or off the calendar
    // resolves to `null` and cancels, matching native HTML5 drag.
    // For `pointercancel`, `event.target` can be unreliable (browsers vary on
    // whether it's the current under-pointer element or the gesture's start
    // element). Fall back to the last cell the user hovered, which is the
    // closest expression of their intent.
    let dropOrigin: HTMLElement | null;
    if (eventType === 'pointercancel') {
      dropOrigin = lastHoveredCellRef.current;
    } else {
      dropOrigin = event.target instanceof HTMLElement ? event.target : null;
    }
    const dropCell = getClosestElementWithDataAttribute(dropOrigin, 'timestamp');
    const newDate = dropCell ? resolveDateFromTarget(dropCell, adapter, timezone) : null;
    // Resolve the focusable `<button>` separately from `dropCell`. Today
    // `data-timestamp` lives on the button itself, but a future custom slot
    // could put it on a wrapper; in that case the cell isn't focusable and
    // the disabled state lives on the inner button.
    const dropButton = (dropOrigin?.closest('button') ??
      dropCell?.querySelector('button') ??
      null) as HTMLButtonElement | null;

    // `shouldDisableDate` / min-max / readOnly mark the day's button as
    // `disabled`. `pointerup` still lands on a disabled `<button>` in
    // Chromium/WebKit, so guard explicitly — `DateRangeCalendar.handleDrop`
    // doesn't re-validate the date.
    const isDropDisabled = dropButton?.disabled === true;

    cleanup();

    if (eventType === 'pointerup' && wasMoved && dropCell) {
      // The click that follows pointerup on a day cell would re-enter the
      // day's selection logic and undo the drop (or, when the drag returned
      // to the source, replace the range with a single-day selection).
      // Swallow it. Gated on `dropCell` so a release outside the calendar
      // doesn't swallow an unrelated click on the host UI.
      installClickSuppressor(ownerDoc);
    }

    if (
      wasMoved &&
      newDate &&
      sourceDate &&
      !isDropDisabled &&
      !adapter.isEqual(newDate, sourceDate)
    ) {
      dropButton?.focus();
      onDrop(newDate);
    }
  };

  // `touchmove`-blocks-scroll listener. Attached eagerly in
  // `handlePointerDown` for touch pointers only. Mouse/pen don't fire touch
  // events. Stable at hook level so the listener identity is consistent
  // across renders.
  const onTouchMove = useEventCallback((touchEvent: TouchEvent) => {
      throw new Error("STUB");
  });

  const handlePointerDown = useEventCallback((event: React.PointerEvent<HTMLButtonElement>) => {
      throw new Error("STUB");
  });

  // Use `pointerover` (bubbles) rather than `pointerenter`: React's
  // `onPointerEnter` is implemented on top of over/out.
  const handlePointerOver = useEventCallback((event: React.PointerEvent<HTMLButtonElement>) => {
      throw new Error("STUB");
  });

  // On unmount, clear gesture state so a remount can start fresh and any
  // detached DOM nodes still referenced by gesture refs can be GC'd.
  // `clearGestureState` is `useEventCallback`-stable, so the effect runs once.
  React.useEffect(() => { throw new Error("STUB"); }, [clearGestureState]);

  return {
    onPointerDown: handlePointerDown,
    onPointerOver: handlePointerOver,
  };
};

export const useDragRange = ({
  disableDragEditing,
  adapter,
  onDatePositionChange,
  onDrop,
  dateRange,
  timezone,
}: Omit<UseDragRangeParams, 'setRangeDragDay' | 'setIsDragging'>): UseDragRangeResponse => {
  const [isDragging, setIsDragging] = React.useState(false);
  const [rangeDragDay, setRangeDragDay] = React.useState<PickerValidDate | null>(null);

  const handleRangeDragDayChange = useEventCallback((newValue: PickerValidDate | null) => {
      throw new Error("STUB");
  });

  const draggingDatePosition: RangePosition | null = React.useMemo(() => {
      throw new Error("STUB");
  }, [dateRange, rangeDragDay, adapter]);

  const dragRangeEvents = useDragRangeEvents({
    adapter,
    onDatePositionChange,
    onDrop,
    setIsDragging,
    setRangeDragDay: handleRangeDragDayChange,
    disableDragEditing,
    dateRange,
    timezone,
  });

  return React.useMemo(
    () => { throw new Error("STUB"); },
    [isDragging, rangeDragDay, draggingDatePosition, disableDragEditing, dragRangeEvents],
  );
};
