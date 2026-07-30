import type * as React from 'react';
import { arc as d3Arc } from '@mui/x-charts-vendor/d3-shape';
import { interpolateNumber } from '@mui/x-charts-vendor/d3-interpolate';
import { useAnimate } from './useAnimate';
import { snapEndAngleToFullCircle } from '../../internals/snapEndAngleToFullCircle';
import type { PieArcProps } from '../../PieChart';

type UseAnimatePieArcParams = Pick<
  PieArcProps,
  | 'startAngle'
  | 'endAngle'
  | 'cornerRadius'
  | 'paddingAngle'
  | 'innerRadius'
  | 'outerRadius'
  | 'skipAnimation'
> & { ref?: React.Ref<SVGPathElement> };
type UseAnimatePieArcReturnValue = {
  ref: React.Ref<SVGPathElement>;
  d: string;
  visibility: 'hidden' | 'visible';
};
type PieArcInterpolatedProps = Pick<
  UseAnimatePieArcParams,
  'startAngle' | 'endAngle' | 'innerRadius' | 'outerRadius' | 'paddingAngle' | 'cornerRadius'
>;

function pieArcPropsInterpolator(from: PieArcInterpolatedProps, to: PieArcInterpolatedProps) {
    throw new Error("STUB");
}

/** Animates a slice of a pie chart by increasing the start and end angles from the middle angle to their final values.
 * The props object also accepts a `ref` which will be merged with the ref returned from this hook. This means you can
 * pass the ref returned by this hook to the `path` element and the `ref` provided as argument will also be called. */
export function useAnimatePieArc(props: UseAnimatePieArcParams): UseAnimatePieArcReturnValue {
  const initialProps = {
    startAngle: (props.startAngle + props.endAngle) / 2,
    endAngle: (props.startAngle + props.endAngle) / 2,
    innerRadius: props.innerRadius,
    outerRadius: props.outerRadius,
    paddingAngle: props.paddingAngle,
    cornerRadius: props.cornerRadius,
  };

  return useAnimate(
    {
      startAngle: props.startAngle,
      endAngle: props.endAngle,
      innerRadius: props.innerRadius,
      outerRadius: props.outerRadius,
      paddingAngle: props.paddingAngle,
      cornerRadius: props.cornerRadius,
    },
    {
      createInterpolator: pieArcPropsInterpolator,
      transformProps: (p) => { throw new Error("STUB"); },
      applyProps(element, p) {
        element.setAttribute('d', p.d);
        element.setAttribute('visibility', p.visibility);
      },
      initialProps,
      skip: props.skipAnimation,
      ref: props.ref,
    },
  );
}
