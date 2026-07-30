'use client';
import * as React from 'react';
import { isOrdinalScale } from '../internals/scaleGuards';
import { useStore } from '../internals/store/useStore';
import {
  selectorChartPolarCenter,
  selectorChartRadiusAxis,
  selectorChartRotationAxis,
} from '../internals/plugins/featurePlugins/useChartPolarAxis';
import type { UseChartPolarAxisSignature } from '../internals/plugins/featurePlugins/useChartPolarAxis';
import {
  selectorChartsInteractionRotationAxisIndex,
  selectorChartsInteractionRotationAxisValue,
} from '../internals/plugins/featurePlugins/useChartPolarAxis/useChartPolarInteraction.selectors';
import type { ChartsRadialAxisHighlightRotationType } from './ChartsRadialAxisHighlight.types';
import type { ChartsRadialAxisHighlightClasses } from './chartsRadialAxisHighlightClasses';
import { ChartsRadialAxisHighlightPath } from './ChartsRadialAxisHighlightPath';

function polarToSvg(cx: number, cy: number, radius: number, angle: number) {
    throw new Error("STUB");
}

/**
 * @ignore - internal component.
 */
export default function ChartsRotationAxisHighlight(props: {
  type: ChartsRadialAxisHighlightRotationType;
  classes: ChartsRadialAxisHighlightClasses;
}) {
    throw new Error("STUB");
}
