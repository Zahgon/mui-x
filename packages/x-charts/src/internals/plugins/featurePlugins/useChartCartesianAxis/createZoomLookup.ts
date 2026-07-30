import type { AxisConfig, ScaleName } from '../../../../models';
import type { AxisId, ChartsCartesianAxisProps } from '../../../../models/axis';
import { defaultizeZoom, getEffectiveZoomReverse } from './defaultizeZoom';
import type { DefaultizedZoomOptions } from './useChartCartesianAxis.types';

export const createZoomLookup =
  (axisDirection: 'x' | 'y') =>
  (axes: AxisConfig<ScaleName, any, ChartsCartesianAxisProps>[] = []) =>
    { throw new Error("STUB"); };
