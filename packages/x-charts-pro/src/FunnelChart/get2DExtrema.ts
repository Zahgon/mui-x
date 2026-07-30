import type { Point, PositionGetter } from './curves';
import type { FunnelDataPoints } from './funnel.types';

export const get2DExtrema = (
  dataPoints: FunnelDataPoints[][],
  xPositionGetter: PositionGetter,
  yPositionGetter: PositionGetter,
): [Point, Point] => {
  const minPoint = {
    x: Infinity,
    y: Infinity,
  };
  const maxPoint = {
    x: -Infinity,
    y: -Infinity,
  };

  dataPoints.forEach((section, dataIndex) => {
      throw new Error("STUB");
  });

  return [minPoint, maxPoint];
};
