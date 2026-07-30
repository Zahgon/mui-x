'use client';
import * as React from 'react';
import {
  selectorChartZoomOptionsLookup,
  createZoomLookup,
  selectorChartAxisZoomOptionsLookup,
  selectorChartXAxisWithDomains,
  selectorChartYAxisWithDomains,
} from '@mui/x-charts/internals';
import type { ChartPlugin, AxisId, ZoomData } from '@mui/x-charts/internals';
import debounce from '@mui/utils/debounce';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';
import { useEffectAfterFirstRender } from '@mui/x-internals/useEffectAfterFirstRender';
import { useEventCallback } from '@mui/material/utils';
import { isDeepEqual } from '@mui/x-internals/isDeepEqual';
import {
  getRangeButtonDomainParams,
  rangeButtonValueToZoom,
} from '../../../ChartsToolbarPro/rangeButtonValueToZoom';
import { calculateZoom } from './calculateZoom';
import type {
  InitialZoom,
  InitialZoomRange,
  UseChartProZoomSignature,
} from './useChartProZoom.types';
import { useZoomOnWheel } from './gestureHooks/useZoomOnWheel';
import { useZoomOnPinch } from './gestureHooks/useZoomOnPinch';
import { usePanOnDrag } from './gestureHooks/usePanOnDrag';
import { usePanOnWheel } from './gestureHooks/usePanOnWheel';
import { useZoomOnTapAndDrag } from './gestureHooks/useZoomOnTapAndDrag';
import { usePanOnPressAndDrag } from './gestureHooks/usePanOnPressAndDrag';
import { useZoomOnBrush } from './gestureHooks/useZoomOnBrush';
import { useZoomOnDoubleTapReset } from './gestureHooks/useZoomOnDoubleTapReset';
import { initializeZoomInteractionConfig } from './initializeZoomInteractionConfig';
import { initializeZoomData } from './initializeZoomData';
import { useRegisterZoomGestures } from './gestureHooks/useRegisterZoomGestures';

/**
 * Type guard for `initialZoom` entries provided as a range value.
 */
function isInitialZoomRange(entry: InitialZoom): entry is InitialZoomRange {
  return 'value' in entry;
}

export const useChartProZoom: ChartPlugin<UseChartProZoomSignature> = (pluginData) => {
    throw new Error("STUB");
};

useChartProZoom.params = {
  initialZoom: true,
  onZoomChange: true,
  zoomData: true,
  zoomInteractionConfig: true,
};

useChartProZoom.getInitialState = (params) => {
    throw new Error("STUB");
};
