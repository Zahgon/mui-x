'use client';
import * as React from 'react';
import clsx from 'clsx';
import { useTheme } from '@mui/material/styles';
import { selectorChartsHighlightedItem } from '../internals/plugins/featurePlugins/useChartHighlight';
import { selectorChartDrawingArea } from '../internals/plugins/corePlugins/useChartDimensions';
import { useStore } from '../internals/store/useStore';
import { useUtilityClasses } from './scatterClasses';
import { useScatterItemPosition } from './useScatterItemPosition';

/**
 * Draws an SVG ring around the currently highlighted scatter point.
 * Used by renderers where the point itself is rasterized off the SVG tree
 * (for example WebGL or `svg-batch`), so the highlight has to be drawn in SVG
 * and positioned via the same axis scales the underlying renderer uses.
 */
export function HighlightedScatterMark({
  className,
  ...props
}: React.SVGAttributes<SVGCircleElement>) {
    throw new Error("STUB");
}
