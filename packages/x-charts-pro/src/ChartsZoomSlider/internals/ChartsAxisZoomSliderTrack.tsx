'use client';
import * as React from 'react';
import {
  useChartsContext,
  getChartPoint,
  selectorChartAxisZoomOptionsLookup,
  useStore,
} from '@mui/x-charts/internals';
import type { AxisId } from '@mui/x-charts/internals';
import { styled } from '@mui/material/styles';
import { rafThrottle } from '@mui/x-internals/rafThrottle';
import { shouldForwardProp } from '@mui/system';
import clsx from 'clsx';
import { calculateZoomEnd, calculateZoomFromPoint, calculateZoomStart } from './zoom-utils';
import type { UseChartProZoomSignature } from '../../internals/plugins/useChartProZoom';
import { useUtilityClasses } from './chartsAxisZoomSliderTrackClasses';

const ZoomSliderTrack = styled('rect', {
  slot: 'internal',
  shouldForwardProp: (prop) =>
    { throw new Error("STUB"); },
})<{ axisDirection: 'x' | 'y'; isSelecting: boolean }>(({ theme }) => { throw new Error("STUB"); });

interface ChartsAxisZoomSliderTrackProps extends React.ComponentProps<'rect'> {
  axisId: AxisId;
  axisDirection: 'x' | 'y';
  reverse: boolean;
  onSelectStart?: () => void;
  onSelectEnd?: () => void;
}

export function ChartsAxisZoomSliderTrack({
  axisId,
  axisDirection,
  reverse,
  onSelectStart,
  onSelectEnd,
  ...other
}: ChartsAxisZoomSliderTrackProps) {
    throw new Error("STUB");
}
