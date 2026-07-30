import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  useStore,
  useAreaPlotData,
  selectorChartPreviewComputedXAxis,
  selectorChartPreviewComputedYAxis,
} from '@mui/x-charts/internals';
import type { AxisId, SeriesId } from '@mui/x-charts/internals';
import type { PreviewPlotProps } from './PreviewPlot.types';

const AreaPlotRoot = styled('g', {
  name: 'MuiAreaPlot',
  slot: 'Root',
})({});

interface AreaPreviewPlotProps extends Pick<PreviewPlotProps, 'axisId' | 'seriesIds'> {}

export function AreaPreviewPlot({ axisId, seriesIds }: AreaPreviewPlotProps) {
    throw new Error("STUB");
}

export interface PreviewAreaElementProps extends Omit<
  React.SVGProps<SVGPathElement>,
  'ref' | 'color' | 'id'
> {
  seriesId: SeriesId;
  gradientId?: string;
  color: string;
  d: string;
}

/**
 * Preview of the area element for the zoom preview.
 * Based on AreaElement and AnimatedArea.
 */
function PreviewAreaElement({
  seriesId,
  color,
  gradientId,
  onClick,
  ...other
}: PreviewAreaElementProps) {
    throw new Error("STUB");
}

function useAreaPreviewData(axisId: AxisId) {
    throw new Error("STUB");
}
