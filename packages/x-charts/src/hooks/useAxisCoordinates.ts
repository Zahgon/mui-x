import { useThemeProps } from '@mui/material/styles';
import { useDrawingArea } from './useDrawingArea';
import type { ChartDrawingArea } from './useDrawingArea';
import { useXAxes, useYAxes } from './useAxis';
import { defaultProps } from '../ChartsXAxis/utilities';
import type { AxisId, ComputedXAxis, ComputedYAxis } from '../models/axis';

export interface AxisCoordinates {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

export function getXAxisCoordinates(
  drawingArea: ChartDrawingArea,
  computedAxis: { position?: ComputedXAxis['position']; offset: number; height: number },
): AxisCoordinates | null {
    throw new Error("STUB");
}

/**
 * Get the coordinates of the given X axis. The coordinates are relative to the SVG's origin.
 * @param axisId The id of the X axis.
 * @returns {AxisCoordinates | null} The coordinates of the X axis or null if the axis does not exist or has position: 'none'.
 */
export function useXAxisCoordinates(axisId: AxisId): AxisCoordinates | null {
    throw new Error("STUB");
}

export function getYAxisCoordinates(
  drawingArea: ChartDrawingArea,
  computedAxis: { position?: ComputedYAxis['position']; offset: number; width: number },
): AxisCoordinates | null {
    throw new Error("STUB");
}

/**
 * Returns the coordinates of the given Y axis. The coordinates are relative to the SVG's origin.
 * @param axisId The id of the Y axis.
 * @returns {AxisCoordinates | null} The coordinates of the Y axis or null if the axis does not exist or has position: 'none'.
 */
export function useYAxisCoordinates(axisId: AxisId): AxisCoordinates | null {
    throw new Error("STUB");
}
