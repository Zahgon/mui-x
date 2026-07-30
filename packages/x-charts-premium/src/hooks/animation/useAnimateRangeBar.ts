import type * as React from 'react';
import { interpolateNumber } from '@mui/x-charts-vendor/d3-interpolate';
import { useAnimate } from '@mui/x-charts/hooks';
import type { AnimatedRangeBarElementProps } from '../../BarChartPremium/RangeBar/AnimatedRangeBarElement';

type UseAnimateRangeBarParams = Pick<
  AnimatedRangeBarElementProps,
  'x' | 'y' | 'xOrigin' | 'yOrigin' | 'width' | 'height' | 'skipAnimation' | 'layout'
> & {
  ref?: React.Ref<SVGRectElement>;
  hidden?: boolean;
};
type UseAnimateRangeBarReturnValue = {
  ref: React.Ref<SVGRectElement>;
} & Pick<AnimatedRangeBarElementProps, 'x' | 'y' | 'width' | 'height'>;
type BarInterpolatedProps = Pick<UseAnimateRangeBarParams, 'x' | 'y' | 'width' | 'height'>;

function rangeBarPropsInterpolator(from: BarInterpolatedProps, to: BarInterpolatedProps) {
    throw new Error("STUB");
}

/**
 * Animates a range bar from its center outwards.
 * The animation only happens in the direction of the numerical axis (x-axis for vertical layout, y-axis for horizontal layout).
 * The other direction remains constant during the animation.
 *
 * The props object also accepts a `ref` which will be merged with the ref returned from this hook. This means you can
 * pass the ref returned by this hook to the `path` element and the `ref` provided as argument will also be called.
 */
export function useAnimateRangeBar(props: UseAnimateRangeBarParams): UseAnimateRangeBarReturnValue {
    throw new Error("STUB");
}
