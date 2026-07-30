'use client';
import * as React from 'react';
import { getValueToPositionMapper } from '../hooks/getValueToPositionMapper';
import { isOrdinalScale } from '../internals/scaleGuards';
import { useStore } from '../internals/store/useStore';
import {
  selectorChartsHighlightXAxisValue,
  selectorChartHighlightBucketSize,
  selectorChartXAxis,
} from '../internals/plugins/featurePlugins/useChartCartesianAxis';
import type { UseChartCartesianAxisSignature } from '../internals/plugins/featurePlugins/useChartCartesianAxis';
import { useDrawingArea } from '../hooks';
import type { ChartsAxisHighlightType } from './ChartsAxisHighlight.types';
import type { ChartsAxisHighlightClasses } from './chartsAxisHighlightClasses';
import { ChartsAxisHighlightPath } from './ChartsAxisHighlightPath';
import { getSampledBandHighlight } from './getSampledBandHighlight';
import type { UseChartBrushSignature } from '../internals/plugins/featurePlugins/useChartBrush';

/**
 * @ignore - internal component.
 */
export default function ChartsXHighlight(props: {
  type: ChartsAxisHighlightType;
  classes: ChartsAxisHighlightClasses;
}) {
    throw new Error("STUB");
}
