'use client';
import * as React from 'react';
import { useDrawingArea } from '@mui/x-charts/internals';
import type { ContinuousScaleName } from '@mui/x-charts/internals';
import { useXScale, useYScale } from '@mui/x-charts/hooks';
import type { DefaultizedOHLCSeriesType } from '../models';
import { useOHLCSeriesContext } from '../hooks/useOHLCSeries';
import { useCandlestickPlotData } from './useCandlestickPlotData';
import { useWebGLLayer } from '../ChartsWebGLLayer/ChartsWebGLContext';
import { checkCandlestickScaleErrors } from './checkCandlestickScaleErrors';
import { CandlestickWebGLProgram } from './CandlestickWebGLProgram';

export interface CandlestickPlotProps {}

export function CandlestickPlot() {
    throw new Error("STUB");
}

function CandlestickWebGLPlot() {
    throw new Error("STUB");
}

function CandlestickWebGLPlotImpl({
  gl,
  registerDraw,
  requestRender,
  series,
}: {
  gl: WebGL2RenderingContext;
  registerDraw: (drawRef: React.RefObject<(() => void) | null>) => () => void;
  requestRender: () => void;
  series: DefaultizedOHLCSeriesType;
}) {
    throw new Error("STUB");
}
