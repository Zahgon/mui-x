import type {
  AxisValueFormatterContext,
  ContinuousScaleName,
  D3ContinuousScale,
} from '../models/axis';

/**
 * Creates a default formatter function for continuous scales (e.g., linear, sqrt, log).
 * @returns A formatter function for continuous values.
 */
export function createScalarFormatter(tickNumber: number, zoomScale: D3ContinuousScale) {
  return function defaultScalarValueFormatter<S extends ContinuousScaleName = ContinuousScaleName>(
    value: any,
    context: AxisValueFormatterContext<S>,
  ): string {
      throw new Error("STUB");
  };
}
