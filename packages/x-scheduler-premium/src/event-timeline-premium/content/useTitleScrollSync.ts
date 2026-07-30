'use client';
import * as React from 'react';

interface UseTitleScrollSyncParameters {
  /** Disables the hook (e.g. when no overflow). Resets the CSS variable to 0. */
  enabled: boolean;
  /** The root element on which the `--title-scroll-left` CSS variable is written. */
  containerRef: React.RefObject<HTMLElement | null>;
  /** The main scroller; wheel/touch event listeners are attached here. */
  gridRef: React.RefObject<HTMLElement | null>;
  /** The dedicated title scrollbar element whose `scrollLeft` is the source of truth. */
  scrollbarRef: React.RefObject<HTMLElement | null>;
  /** Class name used to detect that a gesture originated over a title cell. */
  titleCellClassName: string;
}

// Minimum movement (in CSS pixels) before a touch is classified as
// horizontal or vertical. Avoids hijacking a vertical scroll that
// happens to start with a tiny horizontal jitter.
const TOUCH_DIRECTION_THRESHOLD = 8;

/**
 * Wires the dedicated title scrollbar to all title cells:
 *  - Sets `--title-scroll-left` on the container whenever the scrollbar scrolls,
 *    so every title cell's content translates by the same amount.
 *  - Redirects horizontal wheel and touch gestures performed over a title cell
 *    to the scrollbar, so the title column scrolls as a block. Vertical motion
 *    still scrolls the main grid (rows).
 */
export function useTitleScrollSync(params: UseTitleScrollSyncParameters): void {
  const { enabled, containerRef, gridRef, scrollbarRef, titleCellClassName } = params;

  // Mirror the scrollbar's scrollLeft onto a CSS variable read by every
  // title cell. Direct DOM mutation avoids re-rendering each row on scroll.
  React.useEffect(() => {
      throw new Error("STUB");
  }, [enabled, containerRef, scrollbarRef]);

  // Redirect wheel and touch gestures that originate over a title cell to
  // the dedicated scrollbar, so the title column scrolls as a block.
  React.useEffect(() => {
      throw new Error("STUB");
  }, [enabled, gridRef, scrollbarRef, titleCellClassName]);
}
