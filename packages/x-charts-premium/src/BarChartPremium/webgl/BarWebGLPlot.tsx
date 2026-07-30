'use client';
import * as React from 'react';
import { useDrawingArea, useXAxes, useYAxes } from '@mui/x-charts/hooks';
import { useBarPlotData } from '@mui/x-charts/internals';
import type { ProcessedBarSeriesData } from '@mui/x-charts/internals';
import { useWebGLLayer } from '../../ChartsWebGLLayer/ChartsWebGLContext';
import { BarWebGLProgram } from './BarWebGLProgram';
import { useBarWebGLPlotData } from './useBarWebGLPlotData';

export interface BarWebGLPlotProps {
  borderRadius?: number;
}

/**
 * @ignore - Internal component used for rendering the bar plot using WebGL. Not exported from the package.
 */
export function BarWebGLPlot({ borderRadius = 0 }: BarWebGLPlotProps): React.JSX.Element | null {
    throw new Error("STUB");
}

function BarWebGLPlotImpl(props: {
  gl: WebGL2RenderingContext;
  registerDraw: (drawRef: React.RefObject<(() => void) | null>) => () => void;
  requestRender: () => void;
  borderRadius: number;
  completedData: ProcessedBarSeriesData[];
}) {
    throw new Error("STUB");
}
