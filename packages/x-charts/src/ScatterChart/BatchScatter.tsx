'use client';
import * as React from 'react';
import clsx from 'clsx';
import { styled } from '@mui/material/styles';
import type { DefaultizedScatterSeriesType } from '../models/seriesType/scatter';
import type { D3Scale } from '../models/axis';
import { useUtilityClasses } from './scatterClasses';
import type { ScatterClasses } from './scatterClasses';
import { useChartsContext } from '../context/ChartsProvider';
import { getValueToPositionMapper } from '../hooks/getValueToPositionMapper';
import type { ColorGetter } from '../internals/plugins/corePlugins/useChartSeriesConfig';
import type { ScatterSizeGetter } from './seriesConfig/getMarkerSize';
import {
  selectorChartIsSeriesFaded,
  selectorChartIsSeriesHighlighted,
  selectorChartSeriesUnfadedItem,
  selectorChartSeriesHighlightedItem,
} from '../internals/plugins/featurePlugins/useChartHighlight';
import type { UseChartHighlightSignature } from '../internals/plugins/featurePlugins/useChartHighlight';
import { appendAtKey } from '../internals/appendAtKey';

export interface BatchScatterProps {
  series: DefaultizedScatterSeriesType;
  xScale: D3Scale;
  yScale: D3Scale;
  color: string;
  colorGetter?: ColorGetter<'scatter'>;
  sizeGetter?: ScatterSizeGetter;
  // eslint-disable-next-line react/no-unused-prop-types
  classes?: Partial<ScatterClasses>;
  className?: string;
}

const MAX_POINTS_PER_PATH = 1000;
/* In an SVG arc, if the arc starts and ends at the same point, it is not rendered, so we add a tiny
 * value to one of the coordinates to ensure that the arc is rendered. */
const ALMOST_ZERO = 0.01;

function createPath(x: number, y: number, markerSize: number) {
    throw new Error("STUB");
}

function useCreatePaths(
  seriesData: DefaultizedScatterSeriesType['data'],
  markerSize: number,
  xScale: D3Scale,
  yScale: D3Scale,
  color: string,
  colorGetter?: ColorGetter<'scatter'>,
  sizeGetter?: ScatterSizeGetter,
) {
    throw new Error("STUB");
}

interface BatchScatterPathsProps {
  series: DefaultizedScatterSeriesType;
  xScale: D3Scale;
  yScale: D3Scale;
  color: string;
  colorGetter?: ColorGetter<'scatter'>;
  markerSize: number;
  sizeGetter?: ScatterSizeGetter;
}

function BatchScatterPaths(props: BatchScatterPathsProps) {
    throw new Error("STUB");
}

const MemoBatchScatterPaths = React.memo(BatchScatterPaths);

const Group = styled('g', {
  slot: 'internal',
  shouldForwardProp: undefined,
})({
  '&[data-faded="true"]': {
    opacity: 0.3,
  },
  '& path': {
    /* The browser must do hit testing to know which element a pointer is interacting with.
     * With many data points, we create many paths causing significant time to be spent in the hit test phase.
     * To fix this issue, we disable pointer events for the descendant paths.
     *
     * Ideally, users should be able to override this in case they need pointer events to be enabled,
     * but it can affect performance negatively, especially with many data points. */
    pointerEvents: 'none',
  },
});

/**
 * @internal
 * A batch version of the Scatter component that uses SVG paths to render points.
 * This component is optimized for performance and is suitable for rendering large datasets, but has limitations. Some of the limitations include:
 * - Limited CSS styling;
 * - Overriding the `marker` slot is not supported;
 * - Highlight style must not contain opacity.
 *
 * You can read about all the limitations [here](https://mui.com/x/react-charts/scatter/#performance).
 */
export function BatchScatter(props: BatchScatterProps) {
    throw new Error("STUB");
}
