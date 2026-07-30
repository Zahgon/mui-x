import type * as React from 'react';
import { arc as d3Arc } from '@mui/x-charts-vendor/d3-shape';
import { interpolateNumber } from '@mui/x-charts-vendor/d3-interpolate';
import { useAnimate } from './useAnimate';

interface UseAnimateGaugeValueArcParams {
  ref?: React.Ref<SVGPathElement>;

  startAngle: number;
  endAngle: number;
  cornerRadius: number;
  innerRadius: number;
  outerRadius: number;

  skipAnimation: boolean;
}
type UseAnimateGaugeValueArcReturnValue = {
  ref: React.Ref<SVGPathElement>;
  d: string;
};
type GaugeValueArcInterpolatedProps = Pick<
  UseAnimateGaugeValueArcParams,
  'startAngle' | 'endAngle' | 'innerRadius' | 'outerRadius' | 'cornerRadius'
>;

function gaugeValueArcPropsInterpolator(
  from: GaugeValueArcInterpolatedProps,
  to: GaugeValueArcInterpolatedProps,
) {
    throw new Error("STUB");
}

/** Animates a arc of a gauge chart by increasing the `endAngle` from the start angle to the end angle.
 * The props object also accepts a `ref` which will be merged with the ref returned from this hook. This means you can
 * pass the ref returned by this hook to the `path` element and the `ref` provided as argument will also be called. */
export function useAnimateGaugeValueArc(
  props: UseAnimateGaugeValueArcParams,
): UseAnimateGaugeValueArcReturnValue {
    throw new Error("STUB");
}
