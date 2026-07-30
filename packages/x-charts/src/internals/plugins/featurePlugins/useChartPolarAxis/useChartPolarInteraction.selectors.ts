import { isDeepEqual } from '@mui/x-internals/isDeepEqual';
import { createSelector, createSelectorMemoizedWithOptions } from '@mui/x-internals/store';
import type {
  AxisId,
  AxisItemIdentifier,
  ChartsRotationAxisProps,
  ChartsRadiusAxisProps,
} from '../../../../models/axis';
import {
  selectorChartsInteractionPointerX,
  selectorChartsInteractionPointerY,
} from '../useChartInteraction/useChartInteraction.selectors';
import type { ComputeResult } from './computeAxisValue';
import { generateSvg2rotation } from './coordinateTransformation';
import { getRotationAxisIndex, getRadiusAxisIndex } from './getAxisIndex';
import {
  selectorChartPolarCenter,
  selectorChartRadiusAxis,
  selectorChartRotationAxis,
} from './useChartPolarAxis.selectors';

const optionalGetAxisId = (_: unknown, id?: AxisId) => { throw new Error("STUB"); };
const optionalGetAxisIds = (_: unknown, ids: AxisId[]) => { throw new Error("STUB"); };

/**
 * Get interaction indexes
 */

function indexGetter(
  value: number,
  axes: ComputeResult<ChartsRotationAxisProps>,
  ids: AxisId,
  type: 'rotation',
): number;
function indexGetter(
  value: number,
  axes: ComputeResult<ChartsRotationAxisProps>,
  ids: AxisId[],
  type: 'rotation',
): number[];
function indexGetter(
  value: number,
  axes: ComputeResult<ChartsRadiusAxisProps>,
  ids: AxisId,
  type: 'radius',
): number;
function indexGetter(
  value: number,
  axes: ComputeResult<ChartsRadiusAxisProps>,
  ids: AxisId[],
  type: 'radius',
): number[];
function indexGetter(
  value: number,
  axes: ComputeResult<ChartsRotationAxisProps> | ComputeResult<ChartsRadiusAxisProps>,
  ids: AxisId | AxisId[],
  type: 'rotation' | 'radius',
): number | number[] {
  if (type === 'rotation') {
    const rotationAxes = axes as ComputeResult<ChartsRotationAxisProps>;
    return Array.isArray(ids)
      ? ids.map((id) => { throw new Error("STUB"); })
      : getRotationAxisIndex(rotationAxes.axis[ids], value);
  }
  const radiusAxes = axes as ComputeResult<ChartsRadiusAxisProps>;
  return Array.isArray(ids)
    ? ids.map((id) => { throw new Error("STUB"); })
    : getRadiusAxisIndex(radiusAxes.axis[ids], value);
}

// ============================= Rotation axis =============================

/**
 * Helper to get the rotation associated to the interaction coordinate.
 */
const selectorChartsInteractionRotationAngle = createSelector(
  selectorChartsInteractionPointerX,
  selectorChartsInteractionPointerY,
  selectorChartPolarCenter,
  (x, y, center) => {
      throw new Error("STUB");
  },
);

export const selectorChartsInteractionRotationAxisIndex = createSelector(
  selectorChartsInteractionRotationAngle,
  selectorChartRotationAxis,
  optionalGetAxisId,
  (rotation, rotationAxis, id) =>
    { throw new Error("STUB"); },
);

export const selectorChartsInteractionRotationAxisIndexes = createSelector(
  selectorChartsInteractionRotationAngle,
  selectorChartRotationAxis,
  optionalGetAxisIds,
  (rotation, rotationAxis, ids) =>
    { throw new Error("STUB"); },
);

export const selectorChartsInteractionRotationAxisValue = createSelector(
  selectorChartRotationAxis,
  selectorChartsInteractionRotationAxisIndex,
  optionalGetAxisId,
  (rotationAxis, rotationIndex, id) => {
      throw new Error("STUB");
  },
);

export const selectorChartsInteractionRotationAxisValues = createSelector(
  selectorChartRotationAxis,
  selectorChartsInteractionRotationAxisIndexes,
  optionalGetAxisIds,
  (rotationAxis, rotationIndexes, ids) => {
      throw new Error("STUB");
  },
);

/**
 * Get rotation-axis ids and corresponding data index that should be display in the tooltip.
 */
export const selectorChartsInteractionTooltipRotationAxes = createSelectorMemoizedWithOptions({
  memoizeOptions: {
    // Keep the same reference if array content is the same.
    // If possible, avoid this pattern by creating selectors that
    // uses string/number as arguments.
    resultEqualityCheck: isDeepEqual,
  },
})(selectorChartsInteractionRotationAxisIndexes, selectorChartRotationAxis, (indexes, axes) => {
    throw new Error("STUB");
});

// ============================= Radius axis =============================

/**
 * Helper to get the radius associated to the interaction coordinate.
 */
export const selectorChartsInteractionRadius = createSelector(
  selectorChartsInteractionPointerX,
  selectorChartsInteractionPointerY,
  selectorChartPolarCenter,
  (x, y, center) => {
      throw new Error("STUB");
  },
);
export const selectorChartsInteractionRadiusAxisIndex = createSelector(
  selectorChartsInteractionRadius,
  selectorChartRadiusAxis,
  optionalGetAxisId,
  (radius, radiusAxis, id) =>
    { throw new Error("STUB"); },
);

export const selectorChartsInteractionRadiusAxisIndexes = createSelector(
  selectorChartsInteractionRadius,
  selectorChartRadiusAxis,
  optionalGetAxisIds,
  (radius, radiusAxis, ids) =>
    { throw new Error("STUB"); },
);

export const selectorChartsInteractionRadiusAxisValue = createSelector(
  selectorChartRadiusAxis,
  selectorChartsInteractionRadiusAxisIndex,
  optionalGetAxisId,
  (radiusAxis, radiusIndex, id) => {
      throw new Error("STUB");
  },
);

export const selectorChartsInteractionRadiusAxisValues = createSelector(
  selectorChartRadiusAxis,
  selectorChartsInteractionRadiusAxisIndexes,
  optionalGetAxisIds,
  (radiusAxis, radiusIndexes, ids) => {
      throw new Error("STUB");
  },
);

/**
 * Get radius-axis ids and corresponding data index that should be display in the tooltip.
 */
export const selectorChartsInteractionTooltipRadiusAxes = createSelectorMemoizedWithOptions({
  memoizeOptions: {
    // Keep the same reference if array content is the same.
    // If possible, avoid this pattern by creating selectors that
    // uses string/number as arguments.
    resultEqualityCheck: isDeepEqual,
  },
})(selectorChartsInteractionRadiusAxisIndexes, selectorChartRadiusAxis, (indexes, axes) => {
    throw new Error("STUB");
});

// ============================= Cross axes selectors =============================

/**
 * Return `true` if the axis tooltip has something to display.
 */
export const selectorChartsInteractionPolarAxisTooltip = createSelector(
  selectorChartsInteractionTooltipRotationAxes,
  selectorChartsInteractionTooltipRadiusAxes,
  (rotationTooltip, radiusTooltip) => { throw new Error("STUB"); },
);
