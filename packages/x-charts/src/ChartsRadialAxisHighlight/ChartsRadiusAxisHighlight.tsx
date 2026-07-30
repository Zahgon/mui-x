'use client';
import * as React from 'react';
import { useStore } from '../internals/store/useStore';
import {
  selectorChartPolarCenter,
  selectorChartRadiusAxis,
  selectorChartRotationAxis,
  selectorChartsInteractionRadius,
  selectorChartsInteractionRadiusAxisValue,
} from '../internals/plugins/featurePlugins/useChartPolarAxis';
import type { UseChartPolarAxisSignature } from '../internals/plugins/featurePlugins/useChartPolarAxis';
import type { ChartsRadialAxisHighlightRadiusType } from './ChartsRadialAxisHighlight.types';
import type { ChartsRadialAxisHighlightClasses } from './chartsRadialAxisHighlightClasses';
import {
  ChartsRadialAxisHighlightCircle,
  ChartsRadialAxisHighlightPath,
} from './ChartsRadialAxisHighlightPath';
import { getRingPath } from '../internals/getRingPath';
import { isOrdinalScale } from '../internals/scaleGuards';

function polarToSvg(cx: number, cy: number, radius: number, angle: number) {
    throw new Error("STUB");
}

/**
 * @ignore - internal component.
 */
export default function ChartsRadiusAxisHighlight(props: {
  type: ChartsRadialAxisHighlightRadiusType;
  classes: ChartsRadialAxisHighlightClasses;
}) {
    throw new Error("STUB");
}
