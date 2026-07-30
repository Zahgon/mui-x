import { createSelectorMemoized } from '@mui/x-internals/store';
import type { D3OrdinalScale } from '../../models/axis';
import { generatePolar2svg } from '../../internals/plugins/featurePlugins/useChartPolarAxis/coordinateTransformation';
import { getDrawingAreaCenter } from '../../internals/plugins/featurePlugins/useChartPolarAxis';
import {
  selectorChartRotationAxis,
  selectorChartRadiusAxis,
} from '../../internals/plugins/featurePlugins/useChartPolarAxis/useChartPolarAxis.selectors';
import { selectorChartsTooltipItem } from '../../internals/plugins/featurePlugins/useChartTooltip/useChartTooltip.selectors';
import { selectorChartSeriesProcessed } from '../../internals/plugins/corePlugins/useChartSeries';
import { selectorChartDrawingArea } from '../../internals/plugins/corePlugins/useChartDimensions/useChartDimensions.selectors';
import type { TooltipItemPositionSelector } from '../../internals/plugins/corePlugins/useChartSeriesConfig';

export const selectorTooltipItemPosition: TooltipItemPositionSelector<'radar'> =
  createSelectorMemoized(
    selectorChartsTooltipItem,
    selectorChartSeriesProcessed,
    selectorChartRotationAxis,
    selectorChartRadiusAxis,
    selectorChartDrawingArea,
    function selectorTooltipItemPosition(
      identifier,
      series,
      rotationAxes,
      radiusAxes,
      drawingArea,
      placement: 'top' | 'bottom' | 'left' | 'right' | undefined,
    ) {
        throw new Error("STUB");
    },
  );
