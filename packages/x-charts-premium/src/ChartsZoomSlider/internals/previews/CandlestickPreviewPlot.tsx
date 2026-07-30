import * as React from 'react';
import type { ScaleBand } from '@mui/x-charts-vendor/d3-scale';
import {
  selectorChartPreviewComputedXAxis,
  selectorChartPreviewComputedYAxis,
  useStore,
} from '@mui/x-charts/internals';
import type { D3ContinuousScale } from '@mui/x-charts/internals';
import { useXAxes, useYAxes } from '@mui/x-charts/hooks';
import { useTheme } from '@mui/material/styles';
import type { PreviewPlotProps } from '@mui/x-charts-pro/internals';
import { useOHLCSeriesContext } from '../../../hooks/useOHLCSeries';

export function CandlestickPreviewPlot(props: PreviewPlotProps) {
    throw new Error("STUB");
}
