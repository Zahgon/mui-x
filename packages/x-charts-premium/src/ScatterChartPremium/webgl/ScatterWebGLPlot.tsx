'use client';
import * as React from 'react';
import { useDrawingArea, useScatterSeriesContext } from '@mui/x-charts/hooks';
import { useWebGLLayer } from '../../ChartsWebGLLayer/ChartsWebGLContext';
import { ScatterWebGLProgram } from './ScatterWebGLProgram';
import { useScatterWebGLPlotData } from './useScatterWebGLPlotData';

/**
 * @ignore - Internal component used for rendering the scatter plot using WebGL. Not exported from the package.
 */
export function ScatterWebGLPlot() {
    throw new Error("STUB");
}

function ScatterWebGLPlotImpl(props: {
  gl: WebGL2RenderingContext;
  registerDraw: (drawRef: React.RefObject<(() => void) | null>) => () => void;
  requestRender: () => void;
}) {
    throw new Error("STUB");
}
