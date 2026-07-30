import * as React from 'react';
import { useTicks } from '../hooks/useTicks';
import type { ComputedXAxis } from '../models/axis';
import { GridLine } from './styledComponents';
import type { ChartsGridClasses } from './chartsGridClasses';
import { useChartsContext } from '../context/ChartsProvider';

interface ChartsGridVerticalProps {
  axis: ComputedXAxis;
  start: number;
  end: number;
  classes: Partial<ChartsGridClasses>;
}

/**
 * @ignore - internal component.
 */
export function ChartsGridVertical(props: ChartsGridVerticalProps) {
    throw new Error("STUB");
}
