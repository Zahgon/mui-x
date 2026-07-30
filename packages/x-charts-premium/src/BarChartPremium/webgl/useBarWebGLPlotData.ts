'use client';
import type { ChartDrawingArea } from '@mui/x-charts/hooks';
import type { ProcessedBarSeriesData } from '@mui/x-charts/internals';
import { useWebGLBarLikePlotData } from './useWebGLBarLikePlotData';
import type { WebGLBarLikePlotData } from './useWebGLBarLikePlotData';

export type BarWebGLPlotData = WebGLBarLikePlotData;

export function useBarWebGLPlotData(
  drawingArea: ChartDrawingArea,
  completedData: ProcessedBarSeriesData[],
  borderRadius: number,
): BarWebGLPlotData {
    throw new Error("STUB");
}
