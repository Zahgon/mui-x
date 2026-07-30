import * as React from 'react';
import { styled } from '@mui/material/styles';
import { selectorChartAxisZoomOptionsLookup, useStore } from '@mui/x-charts/internals';
import type { AxisId, SeriesId } from '@mui/x-charts/internals';
import { alpha } from '@mui/system';
import useId from '@mui/utils/useId';
import { selectorChartAxisZoomData } from '../../internals/plugins/useChartProZoom';
import { ChartsAxisZoomSliderPreviewContent } from './ChartsAxisZoomSliderPreviewContent';

const PreviewBackgroundRect = styled('rect', {
  slot: 'internal',
  shouldForwardProp: undefined,
})(({ theme }) => { throw new Error("STUB"); });

interface ChartsAxisZoomSliderPreviewProps {
  axisId: AxisId;
  axisDirection: 'x' | 'y';
  reverse: boolean;
  x: number;
  y: number;
  height: number;
  width: number;
  /**
   * If provided, only the series with these IDs will be shown in the preview.
   */
  seriesIds?: SeriesId[];
}

export function ChartsAxisZoomSliderPreview({
  axisId,
  axisDirection,
  reverse,
  seriesIds,
  ...props
}: ChartsAxisZoomSliderPreviewProps) {
    throw new Error("STUB");
}

function PreviewRectangles(props: {
  axisId: AxisId;
  axisDirection: 'x' | 'y';
  x: number;
  y: number;
  height: number;
  width: number;
}) {
    throw new Error("STUB");
}
