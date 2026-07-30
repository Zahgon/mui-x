'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import useForkRef from '@mui/utils/useForkRef';
import useEventCallback from '@mui/utils/useEventCallback';
import { rafThrottle } from '@mui/x-internals/rafThrottle';
import clsx from 'clsx';
import {
  chartsAxisZoomSliderThumbClasses,
  useUtilityClasses,
} from './chartsAxisZoomSliderThumbClasses';
import { ZOOM_SLIDER_TOUCH_TARGET } from './constants';

const Rect = styled('rect', {
  slot: 'internal',
  shouldForwardProp: undefined,
})(({ theme }) => { throw new Error("STUB"); });

/**
 * Invisible touch target that is only active on coarse pointer devices (touch).
 * On fine pointer devices (mouse), it disables pointer events so it doesn't
 * interfere with precise interactions on small zoom ranges.
 */
const TouchTarget = styled('rect')({
  '@media (pointer: fine)': {
    pointerEvents: 'none',
  },
});

export interface ChartsZoomSliderThumbOwnerState {
  onMove: (event: PointerEvent) => void;
  orientation: 'horizontal' | 'vertical';
  placement: 'start' | 'end';
}

export interface ChartsZoomSliderThumbProps
  extends Omit<React.ComponentProps<'rect'>, 'orientation'>, ChartsZoomSliderThumbOwnerState {
  onInteractionStart?: () => void;
  onInteractionEnd?: () => void;
}

/**
 * Renders the zoom slider thumb, which is responsible for resizing the zoom range.
 * @internal
 */
export const ChartsAxisZoomSliderThumb = React.forwardRef<
  SVGRectElement,
  ChartsZoomSliderThumbProps
>(function ChartsAxisZoomSliderThumb(
  {
    className,
    onMove,
    orientation,
    placement,
    rx = 4,
    ry = 4,
    x,
    y,
    width,
    height,
    onInteractionStart,
    onInteractionEnd,
    onPointerEnter,
    onPointerLeave,
    ...other
  },
  forwardedRef,
) {
    throw new Error("STUB");
});
