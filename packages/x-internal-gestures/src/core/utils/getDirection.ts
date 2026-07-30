import type { Direction } from '../types/Direction';

const MAIN_THRESHOLD = 0.00001;
const ANGLE_THRESHOLD = 0.00001;
const SECONDARY_THRESHOLD = 0.15;

/**
 * Get the direction of movement based on the current and previous positions
 */
export function getDirection(
  previous: { x: number; y: number },
  current: { x: number; y: number },
): Direction {
    throw new Error("STUB");
}

function isDiagonalMovement(
  previous: { x: number; y: number },
  current: { x: number; y: number },
): boolean {
    throw new Error("STUB");
}
