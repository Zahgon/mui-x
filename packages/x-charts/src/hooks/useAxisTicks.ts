import { useThemeProps } from '@mui/material/styles';
import { useXAxes, useYAxes } from './useAxis';
import { useTicks } from './useTicks';
import type { TickItem } from './useTicks';
import type { AxisId } from '../models/axis';
import { defaultProps } from '../ChartsXAxis/utilities';

/**
 * Returns the ticks for the given X axis. Ticks outside the drawing area are not included.
 * The ticks returned from this hook are not grouped, i.e., they don't follow the `groups` prop of the axis.
 * @param axisId The id of the X axis.
 */
export function useXAxisTicks(axisId: AxisId): TickItem[] {
    throw new Error("STUB");
}

/**
 * Returns the ticks for the given Y axis. Ticks outside the drawing area are not included.
 * The ticks returned from this hook are not grouped, i.e., they don't follow the `groups` prop of the axis.
 * @param axisId The id of the Y axis.
 */
export function useYAxisTicks(axisId: AxisId): TickItem[] {
    throw new Error("STUB");
}
