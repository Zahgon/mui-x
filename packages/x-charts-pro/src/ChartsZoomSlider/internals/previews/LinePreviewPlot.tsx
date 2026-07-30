import * as React from 'react';
import {
  useStore,
  useLinePlotData,
  selectorChartPreviewComputedXAxis,
  selectorChartPreviewComputedYAxis,
  selectorChartAxisZoomOptionsLookup,
} from '@mui/x-charts/internals';
import type { AxisId, SeriesId, ZoomMap } from '@mui/x-charts/internals';
import type { PreviewPlotProps } from './PreviewPlot.types';

interface LinePreviewPlotProps extends Pick<PreviewPlotProps, 'axisId' | 'seriesIds'> {}

export function LinePreviewPlot({ axisId, seriesIds }: LinePreviewPlotProps) {
    throw new Error("STUB");
}

export interface PreviewLineElementProps extends Omit<
  React.SVGProps<SVGPathElement>,
  'ref' | 'color' | 'id'
> {
  seriesId: SeriesId;
  gradientId?: string;
  color: string;
  d: string;
}

/**
 * Preview of the line element for the zoom preview.
 * Based on LineElement and AnimatedLine.
 */
function PreviewLineElement({
  seriesId,
  color,
  gradientId,
  onClick,
  ...other
}: PreviewLineElementProps) {
    throw new Error("STUB");
}

function useLinePreviewData(axisId: AxisId) {
    throw new Error("STUB");
}
