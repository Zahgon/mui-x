import * as React from 'react';
import { useTicks } from '../hooks/useTicks';
import { GridLine } from './styledComponents';
import type { ChartsRadialGridClasses } from './chartsRadialGridClasses';
import { useChartsContext } from '../context/ChartsProvider';
import { selectorChartPolarCenter } from '../internals/plugins/featurePlugins/useChartPolarAxis';
import type { UseChartPolarAxisSignature } from '../internals/plugins/featurePlugins/useChartPolarAxis';
import type { PolarAxisDefaultized } from '../models/axis';

interface ChartsRotationGridProps {
  axis: PolarAxisDefaultized<any, any, any>;
  innerRadius: number;
  outerRadius: number;
  classes: Partial<ChartsRadialGridClasses>;
}

/**
 * @ignore - internal component.
 */
export function ChartsRotationGrid(props: ChartsRotationGridProps) {
    throw new Error("STUB");
}
