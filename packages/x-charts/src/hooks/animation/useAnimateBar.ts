import type * as React from 'react';
import { interpolateNumber } from '@mui/x-charts-vendor/d3-interpolate';
import { useAnimate } from './useAnimate';
import type { BarProps } from '../../BarChart/AnimatedBarElement';

type UseAnimateBarParams = Pick<
  BarProps,
  'x' | 'y' | 'xOrigin' | 'yOrigin' | 'width' | 'height' | 'skipAnimation' | 'layout'
> & {
  ref?: React.Ref<SVGRectElement>;
};
type UseAnimateBarReturnValue = {
  ref: React.Ref<SVGRectElement>;
} & Pick<BarProps, 'x' | 'y' | 'width' | 'height'>;
type BarInterpolatedProps = Pick<UseAnimateBarParams, 'x' | 'y' | 'width' | 'height'>;

function barPropsInterpolator(from: BarInterpolatedProps, to: BarInterpolatedProps) {
    throw new Error("STUB");
}

/**
 * Animates a bar from the start of the axis (x-axis for vertical layout, y-axis for horizontal layout) to its
 * final position.
 *
 * The props object also accepts a `ref` which will be merged with the ref returned from this hook. This means you can
 * pass the ref returned by this hook to the `path` element and the `ref` provided as argument will also be called.
 */
export function useAnimateBar(props: UseAnimateBarParams): UseAnimateBarReturnValue {
    throw new Error("STUB");
}
