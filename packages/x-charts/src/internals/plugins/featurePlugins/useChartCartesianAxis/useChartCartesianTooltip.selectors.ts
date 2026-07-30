import {
  createSelector,
  createSelectorMemoized,
  createSelectorMemoizedWithOptions,
} from '@mui/x-internals/store';
import { isDeepEqual } from '@mui/x-internals/isDeepEqual';
import { selectorChartXAxis, selectorChartYAxis } from './useChartCartesianAxisRendering.selectors';
import {
  selectorChartsInteractionPointerX,
  selectorChartsInteractionPointerY,
} from '../useChartInteraction';
import { selectorChartsLastInteraction } from '../useChartInteraction/useChartInteraction.selectors';
import {
  selectorChartsKeyboardXAxisIndex,
  selectorChartsKeyboardYAxisIndex,
} from '../useChartKeyboardNavigation/useChartKeyboardNavigation.selectors';
import { getAxisIndex } from './getAxisValue';
import type { UseChartCartesianAxisSignature } from './useChartCartesianAxis.types';
import type { ChartState } from '../../models/chart';
import type {
  AxisItemIdentifier,
  ChartsAxisProps,
  ChartsXAxisProps,
  ChartsYAxisProps,
} from '../../../../models/axis';
import type { ComputeResult } from './computeAxisValue';
import { getValueToPositionMapper } from '../../../../hooks/getValueToPositionMapper';
import type { ChartDrawingArea } from '../../../../hooks/useDrawingArea';
import { selectorChartDrawingArea } from '../../corePlugins/useChartDimensions/useChartDimensions.selectors';

const selectorChartControlledCartesianAxisTooltip = (
  state: ChartState<[], [UseChartCartesianAxisSignature]>,
) => { throw new Error("STUB"); };

const EMPTY_ARRAY: AxisItemIdentifier[] = [];

function getKeyboardAxisTooltip(
  keyboardIndex: AxisItemIdentifier | undefined,
  axes: ComputeResult<ChartsAxisProps>,
): AxisItemIdentifier[] {
  if (keyboardIndex === undefined) {
    return EMPTY_ARRAY;
  }
  const axis = axes.axis[keyboardIndex.axisId];
  if (!axis?.triggerTooltip) {
    return EMPTY_ARRAY;
  }
  return [keyboardIndex];
}

/**
 * Get x-axis ids and corresponding data index that should be display in the tooltip.
 */
export const selectorChartsInteractionTooltipXAxes = createSelectorMemoizedWithOptions({
  memoizeOptions: {
    // Keep the same reference if array content is the same.
    // If possible, avoid this pattern by creating selectors that
    // uses string/number as arguments.
    resultEqualityCheck: isDeepEqual,
  },
})(
  selectorChartControlledCartesianAxisTooltip,
  selectorChartsInteractionPointerX,
  selectorChartXAxis,
  selectorChartsLastInteraction,
  selectorChartsKeyboardXAxisIndex,
  (controlledValues, value, axes, lastInteraction, keyboardIndex) => {
      throw new Error("STUB");
  },
);

/**
 * Get y-axis ids and corresponding data index that should be display in the tooltip.
 */
export const selectorChartsInteractionTooltipYAxes = createSelectorMemoizedWithOptions({
  memoizeOptions: {
    // Keep the same reference if array content is the same.
    // If possible, avoid this pattern by creating selectors that
    // uses string/number as arguments.
    resultEqualityCheck: isDeepEqual,
  },
})(
  selectorChartControlledCartesianAxisTooltip,
  selectorChartsInteractionPointerY,
  selectorChartYAxis,
  selectorChartsLastInteraction,
  selectorChartsKeyboardYAxisIndex,
  (controlledValues, value, axes, lastInteraction, keyboardIndex) => {
      throw new Error("STUB");
  },
);

/**
 * Return `true` if the axis tooltip has something to display.
 */
export const selectorChartsInteractionAxisTooltip = createSelector(
  selectorChartsInteractionTooltipXAxes,
  selectorChartsInteractionTooltipYAxes,
  (xTooltip, yTooltip) => { throw new Error("STUB"); },
);

function getCoordinatesFromAxis(
  identifier: AxisItemIdentifier,
  axes: ComputeResult<ChartsAxisProps>,
): number | null {
  const axis = axes.axis[identifier.axisId];
  if (!axis) {
    return null;
  }
  const value = axis.data?.[identifier.dataIndex];
  if (value == null) {
    return null;
  }
  const coordinate = getValueToPositionMapper(axis.scale)(value);
  if (coordinate === undefined) {
    return null;
  }
  return coordinate;
}

export const selectorChartsTooltipAxisPosition = createSelectorMemoized(
  selectorChartsInteractionTooltipXAxes,
  selectorChartsInteractionTooltipYAxes,
  selectorChartXAxis,
  selectorChartYAxis,
  selectorChartDrawingArea,

  function selectorChartsTooltipItemPosition(
    xAxesIdentifiers: AxisItemIdentifier[],
    yAxesIdentifiers: AxisItemIdentifier[],
    xAxes: ComputeResult<ChartsXAxisProps>,
    yAxes: ComputeResult<ChartsYAxisProps>,
    drawingArea: ChartDrawingArea,
    placement: 'top' | 'bottom' | 'left' | 'right' | undefined,
  ) {
      throw new Error("STUB");
  },
);
