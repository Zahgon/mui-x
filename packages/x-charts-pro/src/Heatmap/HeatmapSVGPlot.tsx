'use client';
import * as React from 'react';
import clsx from 'clsx';
import { styled } from '@mui/material/styles';
import { useXScale, useYScale, useZColorScale } from '@mui/x-charts/hooks';
import { selectorChartsHighlightStateCallback, useStore } from '@mui/x-charts/internals';
import { useHeatmapSeriesContext } from '../hooks';
import { HeatmapItem } from './HeatmapItem';
import type { HeatmapRendererPlotProps } from './Heatmap.types';
import type { HighlightItemIdentifierWithType } from '../models';
import { heatmapClasses } from './heatmapClasses';

const MemoHeatmapItem = React.memo(HeatmapItem);

const HeatmapPlotRoot = styled('g', {
  name: 'MuiHeatmapPlot',
  slot: 'Root',
})();

export function HeatmapSVGPlot(props: HeatmapRendererPlotProps) {
    throw new Error("STUB");
}
