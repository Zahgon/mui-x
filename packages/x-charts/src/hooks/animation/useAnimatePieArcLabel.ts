import type * as React from 'react';
import { arc as d3Arc } from '@mui/x-charts-vendor/d3-shape';
import { interpolateNumber } from '@mui/x-charts-vendor/d3-interpolate';
import { useAnimate } from './useAnimate';
import type { PieArcLabelProps } from '../../PieChart';

type UseAnimatePieArcLabelParams = Pick<
  PieArcLabelProps,
  'startAngle' | 'endAngle' | 'arcLabelRadius' | 'cornerRadius' | 'paddingAngle' | 'skipAnimation'
> & {
  ref?: React.Ref<SVGTextElement>;
};
type UseAnimatePieArcLabelReturn = {
  ref: React.Ref<SVGTextElement>;
  x: number;
  y: number;
};
type PieArcLabelInterpolatedProps = Pick<
  UseAnimatePieArcLabelParams,
  'startAngle' | 'endAngle' | 'arcLabelRadius' | 'paddingAngle' | 'cornerRadius'
>;

function pieArcLabelPropsInterpolator(
  from: PieArcLabelInterpolatedProps,
  to: PieArcLabelInterpolatedProps,
) {
    throw new Error("STUB");
}

/** Animates the label of pie slice from its middle point to the centroid of the slice.
 * The props object also accepts a `ref` which will be merged with the ref returned from this hook. This means you can
 * pass the ref returned by this hook to the `path` element and the `ref` provided as argument will also be called. */
export function useAnimatePieArcLabel(
  props: UseAnimatePieArcLabelParams,
): UseAnimatePieArcLabelReturn {
  const initialProps = {
    startAngle: (props.startAngle + props.endAngle) / 2,
    endAngle: (props.startAngle + props.endAngle) / 2,
    arcLabelRadius: props.arcLabelRadius,
    paddingAngle: props.paddingAngle,
    cornerRadius: props.cornerRadius,
  };

  return useAnimate(
    {
      startAngle: props.startAngle,
      endAngle: props.endAngle,
      arcLabelRadius: props.arcLabelRadius,
      paddingAngle: props.paddingAngle,
      cornerRadius: props.cornerRadius,
    },
    {
      createInterpolator: pieArcLabelPropsInterpolator,
      transformProps: (animatedProps) => {
          throw new Error("STUB");
      },
      applyProps(element, { x, y }) {
        element.setAttribute('x', x.toString());
        element.setAttribute('y', y.toString());
      },
      initialProps,
      skip: props.skipAnimation,
      ref: props.ref,
    },
  );
}
