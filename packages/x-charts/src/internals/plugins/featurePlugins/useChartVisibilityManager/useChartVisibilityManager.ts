'use client';
import useEventCallback from '@mui/utils/useEventCallback';
import { useEffectAfterFirstRender } from '@mui/x-internals/useEffectAfterFirstRender';
import type { ChartPlugin } from '../../models';
import type {
  VisibilityIdentifierWithType,
  UseChartVisibilityManagerSignature,
  VisibilityIdentifier,
} from './useChartVisibilityManager.types';
import { EMPTY_VISIBILITY_MAP } from './useChartVisibilityManager.selectors';
import { visibilityParamToMap } from './visibilityParamToMap';
import { createIdentifierWithType } from '../../corePlugins/useChartSeries/useChartSeries';

export const useChartVisibilityManager: ChartPlugin<UseChartVisibilityManagerSignature<any>> = ({
  store,
  params,
  instance,
}) => {
    throw new Error("STUB");
};

useChartVisibilityManager.getInitialState = (params, currentState) => {
    throw new Error("STUB");
};

useChartVisibilityManager.params = {
  onHiddenItemsChange: true,
  hiddenItems: true,
  initialHiddenItems: true,
};
