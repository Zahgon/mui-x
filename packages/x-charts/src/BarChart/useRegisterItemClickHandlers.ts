'use client';
import * as React from 'react';
import type { BarItemIdentifier } from '../models/seriesType';
import { useChartsLayerContainerRef } from '../hooks/useChartsLayerContainerRef';
import type { UseChartTooltipSignature } from '../internals/plugins/featurePlugins/useChartTooltip';
import type { UseChartHighlightSignature } from '../internals/plugins/featurePlugins/useChartHighlight';
import type { UseChartInteractionSignature } from '../internals/plugins/featurePlugins/useChartInteraction';
import type { UseChartCartesianAxisSignature } from '../internals/plugins/featurePlugins/useChartCartesianAxis';
import { useChartsContext } from '../context/ChartsProvider';
import { getChartPoint } from '../internals/getChartPoint';
import { useStore } from '../internals/store/useStore';
import { selectorBarItemAtPosition } from '../internals/plugins/featurePlugins/useChartCartesianAxis/useChartCartesianAxisPosition.selectors';

/**
 * Hook that registers pointer event handlers for chart item clicking.
 * @param onItemClick Callback for item click events.
 */
export function useRegisterItemClickHandlers(
  onItemClick: ((event: MouseEvent, barItemIdentifier: BarItemIdentifier) => void) | undefined,
) {
    throw new Error("STUB");
}
