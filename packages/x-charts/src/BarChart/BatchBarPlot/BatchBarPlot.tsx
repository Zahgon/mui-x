'use client';
import * as React from 'react';
import type { BarItemIdentifier } from '../../models';
import type { ProcessedBarSeriesData } from '../types';
import { useUtilityClasses } from '../barClasses';
import type { IndividualBarPlotProps } from '../IndividualBarPlot';
import { useChartsContext } from '../../context/ChartsProvider/useChartsContext';
import {
  selectorChartIsSeriesFaded,
  selectorChartIsSeriesHighlighted,
  selectorChartSeriesHighlightedItem,
  selectorChartSeriesUnfadedItem,
} from '../../internals/plugins/featurePlugins/useChartHighlight';
import type { UseChartHighlightSignature } from '../../internals/plugins/featurePlugins/useChartHighlight';
import { useRegisterItemClickHandlers } from '../useRegisterItemClickHandlers';
import { createPath, useCreateBarPaths } from './useCreateBarPaths';
import { BarGroup } from './BarGroup';

interface BatchBarPlotProps extends Omit<IndividualBarPlotProps, 'onItemClick'> {
  onItemClick?: (event: MouseEvent, barItemIdentifier: BarItemIdentifier) => void;
}

export function BatchBarPlot({
  completedData,
  borderRadius = 0,
  onItemClick,
  skipAnimation = false,
}: BatchBarPlotProps) {
    throw new Error("STUB");
}

const MemoFadedHighlightedBars = React.memo(FadedHighlightedBars);

function SeriesBatchPlot({
  series,
  borderRadius,
  skipAnimation,
}: {
  series: ProcessedBarSeriesData;
  borderRadius: number;
  skipAnimation: boolean;
}) {
    throw new Error("STUB");
}

function BatchBarSeriesPlot({
  processedSeries,
  borderRadius,
}: {
  processedSeries: ProcessedBarSeriesData;
  borderRadius: number;
}) {
    throw new Error("STUB");
}

function FadedHighlightedBars({
  processedSeries,
  borderRadius,
}: {
  processedSeries: ProcessedBarSeriesData;
  borderRadius: number;
}) {
    throw new Error("STUB");
}
