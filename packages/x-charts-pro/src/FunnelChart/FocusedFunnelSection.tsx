'use client';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { useStore } from '@mui/x-charts/internals';
import { line as d3Line } from '@mui/x-charts-vendor/d3-shape';
import { useFocusedItem } from '@mui/x-charts/hooks';
import { useFunnelSeriesContext } from '../hooks';
import { createPositionGetter } from './coordinateMapper';
import { getFunnelCurve } from './curves';
import type { Point } from './curves';
import {
  selectorChartXAxis,
  selectorChartYAxis,
  selectorFunnelGap,
} from './funnelAxisPlugin/useChartFunnelAxisRendering.selectors';
import { get2DExtrema } from './get2DExtrema';

export function FocusedFunnelSection(props: React.SVGAttributes<SVGRectElement>) {
    throw new Error("STUB");
}
