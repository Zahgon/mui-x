import * as React from 'react';
import { useTicks } from '../hooks/useTicks';
import { GridCircle, GridPath } from './styledComponents';
import type { ChartsRadialGridClasses } from './chartsRadialGridClasses';
import { useChartsContext } from '../context/ChartsProvider';
import { selectorChartPolarCenter } from '../internals/plugins/featurePlugins/useChartPolarAxis';
import type { UseChartPolarAxisSignature } from '../internals/plugins/featurePlugins/useChartPolarAxis';
import type { PolarAxisDefaultized } from '../models/axis';

interface ChartsRadiusGridProps {
  axis: PolarAxisDefaultized<any, any, any>;
  startAngle: number;
  endAngle: number;
  isFullCircle: boolean;
  classes: Partial<ChartsRadialGridClasses>;
}

/**
 * @ignore - internal component.
 */
export function ChartsRadiusGrid(props: ChartsRadiusGridProps) {
    throw new Error("STUB");
}
