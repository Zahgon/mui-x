import { deg2rad } from '../internals/angleConversion';

function getPoint(angle: number): [number, number] {
    throw new Error("STUB");
}

/**
 * Returns the ratio of the arc bounding box and its center.
 * @param startAngle The start angle (in deg)
 * @param endAngle The end angle (in deg)
 */
export function getArcRatios(startAngle: number, endAngle: number) {
    throw new Error("STUB");
}

export function getAvailableRadius(
  cx: number,
  cy: number,
  width: number,
  height: number,
  {
    minX,
    maxX,
    minY,
    maxY,
  }: {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
  },
) {
    throw new Error("STUB");
}
