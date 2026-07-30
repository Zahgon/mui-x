'use client';
import * as React from 'react';
import { useDrawingArea, useXAxes, useYAxes } from '@mui/x-charts/hooks';
import { useWebGLLayer } from '../../ChartsWebGLLayer/ChartsWebGLContext';
import { BarWebGLProgram } from '../webgl/BarWebGLProgram';
import { useWebGLBarLikePlotData } from '../webgl/useWebGLBarLikePlotData';
import { useRangeBarPlotData } from './useRangeBarPlotData';
import type { ProcessedRangeBarSeriesData } from './types';

export interface RangeBarWebGLPlotProps {
  borderRadius?: number;
}

/**
 * @ignore - Internal component used for rendering the range bar plot using WebGL. Not exported from the package.
 */
export function RangeBarWebGLPlot({
  borderRadius = 0,
}: RangeBarWebGLPlotProps): React.JSX.Element | null {
    throw new Error("STUB");
}

function RangeBarWebGLPlotImpl(props: {
  gl: WebGL2RenderingContext;
  registerDraw: (drawRef: React.RefObject<(() => void) | null>) => () => void;
  requestRender: () => void;
  borderRadius: number;
  completedData: ProcessedRangeBarSeriesData[];
}) {
    throw new Error("STUB");
}
