'use client';
import * as React from 'react';
import { useChartsLayerContainerRef } from '../../../../hooks';
import type { UseChartTooltipSignature } from '../../featurePlugins/useChartTooltip';
import type { SeriesItemIdentifierWithType } from '../../../../models/seriesType';
import type { ChartSeriesType } from '../../../../models/seriesType/config';
import type { UseChartInteractionSignature } from '../useChartInteraction';
import type { UseChartHighlightSignature } from '../useChartHighlight';
import { useStore } from '../../../store/useStore';
import { useChartsContext } from '../../../../context/ChartsProvider';
import { getChartPoint } from '../../../getChartPoint';
import type { UseChartSeriesConfigSignature } from '../../corePlugins/useChartSeriesConfig';
import type { UseChartCartesianAxisSignature } from '../useChartCartesianAxis';
import type { UseChartPolarAxisSignature } from '../useChartPolarAxis';

/**
 * Hook that registers pointer interaction handlers on the chart container.
 * It iterates through all series configs' `getItemAtPosition` to find which
 * item is at the pointer position and updates highlight/tooltip state accordingly.
 */
export function useRegisterPointerInteractions() {
  const { instance } =
    useChartsContext<
      [
        UseChartInteractionSignature,
        UseChartHighlightSignature<ChartSeriesType>,
        UseChartTooltipSignature,
      ]
    >();
  const chartsLayerContainerRef = useChartsLayerContainerRef();
  const store =
    useStore<
      [
        UseChartSeriesConfigSignature<ChartSeriesType>,
        UseChartCartesianAxisSignature<ChartSeriesType>,
        UseChartPolarAxisSignature<ChartSeriesType>,
      ]
    >();

  const interactionActive = React.useRef(false);
  const lastItemRef = React.useRef<SeriesItemIdentifierWithType<ChartSeriesType> | undefined>(
    undefined,
  );

  React.useEffect(() => {
      throw new Error("STUB");
  }, [instance, store, chartsLayerContainerRef, store.state.seriesConfig.config]);
}
