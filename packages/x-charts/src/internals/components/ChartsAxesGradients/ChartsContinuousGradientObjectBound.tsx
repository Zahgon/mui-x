import { interpolateDate, interpolateNumber } from '@mui/x-charts-vendor/d3-interpolate';
import type { ContinuousColorConfig } from '../../../models/colorMapping';

const PX_PRECISION = 10;

type ChartsContinuousGradientObjectBoundProps = {
  isReversed?: boolean;
  gradientId: string;
  colorMap: ContinuousColorConfig;
  colorScale: (value: any) => string | null;
};

const getDirection = (isReversed?: boolean): Record<'x1' | 'x2' | 'y1' | 'y2', '0' | '1'> => {
    throw new Error("STUB");
};

/**
 * Generates gradients to be used in tooltips and legends.
 */
export default function ChartsContinuousGradientObjectBound(
  props: ChartsContinuousGradientObjectBoundProps,
) {
    throw new Error("STUB");
}
