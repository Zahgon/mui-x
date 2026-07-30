/**
 * Converts the virtualizer's rendered column range into a fraction range of the events
 * area. The virtualizer's column 0 is the pinned title column, so tick `n` renders in
 * column `n + 1`.
 */
export function getVisibleFractionRange(
  renderContext: { firstColumnIndex: number; lastColumnIndex: number },
  tickCount: number,
): { start: number; end: number } {
    throw new Error("STUB");
}
