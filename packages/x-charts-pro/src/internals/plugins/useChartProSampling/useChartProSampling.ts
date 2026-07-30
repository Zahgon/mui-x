'use client';
import { useEffectAfterFirstRender } from '@mui/x-internals/useEffectAfterFirstRender';
import { isDeepEqual } from '@mui/x-internals/isDeepEqual';
import type { ChartPlugin, SamplingConfig, SamplingState } from '@mui/x-charts/internals';
import type { UseChartProSamplingSignature } from './useChartProSampling.types';

/** Toggles sampling. Pyramids and level selection live in community selectors. */
export const useChartProSampling: ChartPlugin<UseChartProSamplingSignature> = ({
  params,
  store,
}) => {
    throw new Error("STUB");
};

/** Maps the per-series-type `sampling` config to the internal state (enabled methods per type). */
function toSamplingState(sampling: SamplingConfig = {}): SamplingState {
  const methods: SamplingState['methods'] = {};
  // Iterate generically so a new series type only needs its `sampling` config entry, no edit here.
  (Object.keys(sampling) as (keyof SamplingConfig)[]).forEach((seriesType) => {
      throw new Error("STUB");
  });
  return {
    enabled: Object.keys(methods).length > 0,
    methods,
  };
}

useChartProSampling.params = {
  sampling: true,
};

useChartProSampling.getDefaultizedParams = ({ params }) => { throw new Error("STUB"); };

useChartProSampling.getInitialState = ({ sampling }) => { throw new Error("STUB"); };
