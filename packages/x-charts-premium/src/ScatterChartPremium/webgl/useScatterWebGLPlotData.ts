'use client';
import * as React from 'react';
import { useDrawingArea, useScatterSeriesContext, useXAxes, useYAxes } from '@mui/x-charts/hooks';
import { parseColor } from '../../utils/webgl/parseColor';

const DEFAULT_MARKER_SIZE = 4;

export interface ScatterWebGLPlotData {
  centers: Float32Array;
  sizes: Float32Array;
  colors: Uint8Array;
  pointCount: number;
}

const EMPTY_DATA: ScatterWebGLPlotData = {
  centers: new Float32Array(0),
  sizes: new Float32Array(0),
  colors: new Uint8Array(0),
  pointCount: 0,
};

export function useScatterWebGLPlotData(): ScatterWebGLPlotData {
    throw new Error("STUB");
}
