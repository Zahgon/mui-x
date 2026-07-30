'use client';
import * as React from 'react';
import { useDrawingArea, useXScale, useYScale } from '@mui/x-charts/hooks';
import type { DefaultizedHeatmapSeriesType } from '@mui/x-charts-pro/models';
import { useWebGLLayer } from '../../ChartsWebGLLayer/ChartsWebGLContext';
import { useHeatmapSeriesContext } from '../../hooks';
import { HeatmapWebGLProgram } from './HeatmapWebGLProgram';
import { useHeatmapPlotData } from './useHeatmapPlotData';

export function HeatmapWebGLPlot({
  borderRadius,
}: {
  borderRadius?: number;
}): React.JSX.Element | null {
    throw new Error("STUB");
}

function HeatmapWebGLPlotImpl(props: {
  gl: WebGL2RenderingContext;
  registerDraw: (drawRef: React.RefObject<(() => void) | null>) => () => void;
  requestRender: () => void;
  borderRadius: number;
  series: DefaultizedHeatmapSeriesType;
}) {
    throw new Error("STUB");
}
