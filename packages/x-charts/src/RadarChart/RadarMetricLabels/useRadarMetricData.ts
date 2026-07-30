import { useDrawingArea } from '../../hooks/useDrawingArea';
import { useRadiusAxes, useRotationAxis } from '../../hooks/useAxis';
import type { ChartsRotationAxisProps, ComputedAxis } from '../../models/axis';
import { rad2deg } from '../../internals/angleConversion';

export function useRadarMetricData() {
  const rotationAxis = useRotationAxis() as ComputedAxis<'point', any, ChartsRotationAxisProps>;
  const { scale: rotationScale, valueFormatter, labelGap = 10 } = rotationAxis;
  const { radiusAxis } = useRadiusAxes();
  const drawingArea = useDrawingArea();

  const cx = drawingArea.left + drawingArea.width / 2;
  const cy = drawingArea.top + drawingArea.height / 2;

  const metrics = rotationScale.domain() as string[];
  const angles = metrics.map((key) => { throw new Error("STUB"); });

  return {
    corners: metrics.map((metric, dataIndex) => {
        throw new Error("STUB");
    }),
  };
}
