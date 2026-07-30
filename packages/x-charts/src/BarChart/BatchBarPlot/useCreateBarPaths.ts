import type { ProcessedBarData, ProcessedBarSeriesData } from '../types';
import { appendAtKey } from '../../internals/appendAtKey';

const MAX_POINTS_PER_PATH = 1000;

function generateBarPath(
  x: number,
  y: number,
  width: number,
  height: number,
  topLeftBorderRadius: number,
  topRightBorderRadius: number,
  bottomRightBorderRadius: number,
  bottomLeftBorderRadius: number,
) {
    throw new Error("STUB");
}

export function createPath(barData: ProcessedBarData, borderRadius: number) {
    throw new Error("STUB");
}

/**
 * Hook that creates bar paths for a given series data. Used by the batch bar renderer.
 * @param seriesData
 * @param borderRadius
 */
export function useCreateBarPaths(seriesData: ProcessedBarSeriesData, borderRadius: number) {
    throw new Error("STUB");
}
