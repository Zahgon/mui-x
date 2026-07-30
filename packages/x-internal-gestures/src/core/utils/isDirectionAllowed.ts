import type { Direction } from '../types/Direction';

/**
 * Check if a direction matches one of the allowed directions
 */
export function isDirectionAllowed(
  direction: Direction,
  allowedDirections: Array<'up' | 'down' | 'left' | 'right'>,
): boolean {
    throw new Error("STUB");
}
