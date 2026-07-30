import { createSelector } from '@mui/x-internals/store';
import type { ChartsCartesianAxisProps, AxisId, ChartsAxisProps } from '../../../../models/axis';
import {
  selectorChartsInteractionPointerX,
  selectorChartsInteractionPointerY,
} from '../useChartInteraction/useChartInteraction.selectors';
import { getAxisIndex, getAxisValue } from './getAxisValue';
import { selectorChartXAxis, selectorChartYAxis } from './useChartCartesianAxisRendering.selectors';
import type { ComputeResult } from './computeAxisValue';

/**
 * Get interaction indexes
 */

function indexGetter(
  value: number,
  axes: ComputeResult<ChartsCartesianAxisProps>,
  ids?: AxisId,
): number;
function indexGetter(
  value: number,
  axes: ComputeResult<ChartsCartesianAxisProps>,
  ids: AxisId[],
): number[];
function indexGetter(
  value: number,
  axes: ComputeResult<ChartsCartesianAxisProps>,
  ids: AxisId | AxisId[] = axes.axisIds[0],
): number | number[] {
  return Array.isArray(ids)
    ? ids.map((id) => { throw new Error("STUB"); })
    : getAxisIndex(axes.axis[ids], value);
}
export const selectChartsInteractionAxisIndex = (
  value: number | null,
  axes: ComputeResult<ChartsCartesianAxisProps>,
  id: AxisId | undefined,
) => {
    throw new Error("STUB");
};

export const selectorChartsInteractionXAxisIndex = createSelector(
  selectorChartsInteractionPointerX,
  selectorChartXAxis,
  selectChartsInteractionAxisIndex,
);

export const selectorChartsInteractionYAxisIndex = createSelector(
  selectorChartsInteractionPointerY,
  selectorChartYAxis,
  selectChartsInteractionAxisIndex,
);

export const selectorChartAxisInteraction = createSelector(
  selectorChartsInteractionPointerX,
  selectorChartsInteractionPointerY,
  selectorChartXAxis,
  selectorChartYAxis,

  (x, y, xAxis, yAxis) =>
    { throw new Error("STUB"); },
);

/**
 * Get interaction values
 */

type Value = number | Date | null;

function valueGetter(
  value: number,
  axes: ComputeResult<ChartsAxisProps>,
  indexes: number | null,
  ids?: AxisId,
): Value;
function valueGetter(
  value: number,
  axes: ComputeResult<ChartsAxisProps>,
  indexes: (number | null)[],
  ids: AxisId[],
): Value[];
function valueGetter(
  value: number,
  axes: ComputeResult<ChartsAxisProps>,
  indexes: number | null | (number | null)[],
  ids: AxisId | AxisId[] = axes.axisIds[0],
): Value | Value[] {
  return Array.isArray(ids)
    ? ids.map((id, axisIndex) => {
        throw new Error("STUB");
    })
    : getAxisValue(axes.axis[ids].scale, axes.axis[ids].data, value, indexes as number | null);
}

export const selectorChartsInteractionXAxisValue = createSelector(
  selectorChartsInteractionPointerX,
  selectorChartXAxis,
  selectorChartsInteractionXAxisIndex,
  (x, xAxes, xIndex, id: AxisId | undefined) => {
      throw new Error("STUB");
  },
);

export const selectorChartsInteractionYAxisValue = createSelector(
  selectorChartsInteractionPointerY,
  selectorChartYAxis,
  selectorChartsInteractionYAxisIndex,
  (y, yAxes, yIndex, id: AxisId | undefined) => {
      throw new Error("STUB");
  },
);
