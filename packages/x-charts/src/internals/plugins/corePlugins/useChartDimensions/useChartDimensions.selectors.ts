import { createSelector, createSelectorMemoized } from '@mui/x-internals/store';
import type { ChartRootSelector } from '../../utils/selectors';
import type { UseChartDimensionsSignature } from './useChartDimensions.types';
import { selectorChartAxisSizes } from '../../featurePlugins/useChartCartesianAxis/useChartAxisSize.selectors';
import type { ChartState } from '../../models/chart';

export const selectorChartDimensionsState: ChartRootSelector<UseChartDimensionsSignature> = (
  state,
) => { throw new Error("STUB"); };

export const selectorChartMargin = (state: ChartState<[UseChartDimensionsSignature]>) =>
  { throw new Error("STUB"); };

export const selectorChartDrawingArea = createSelectorMemoized(
  selectorChartDimensionsState,
  selectorChartMargin,
  selectorChartAxisSizes,
  function selectorChartDrawingArea(
    { width, height },
    { top: marginTop, right: marginRight, bottom: marginBottom, left: marginLeft },
    { left: axisSizeLeft, right: axisSizeRight, top: axisSizeTop, bottom: axisSizeBottom },
  ) {
      throw new Error("STUB");
  },
);

export const selectorChartSvgWidth = createSelector(
  selectorChartDimensionsState,
  (dimensionsState) => { throw new Error("STUB"); },
);

export const selectorChartSvgHeight = createSelector(
  selectorChartDimensionsState,
  (dimensionsState) => { throw new Error("STUB"); },
);

export const selectorChartPropsWidth = createSelector(
  selectorChartDimensionsState,
  (dimensionsState) => { throw new Error("STUB"); },
);

export const selectorChartPropsHeight = createSelector(
  selectorChartDimensionsState,
  (dimensionsState) => { throw new Error("STUB"); },
);
