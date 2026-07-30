import * as React from 'react';
import { useTicks } from '../hooks/useTicks';
import type { ComputedYAxis } from '../models/axis';
import { GridLine } from './styledComponents';
import type { ChartsGridClasses } from './chartsGridClasses';
import { useChartsContext } from '../context/ChartsProvider';

interface ChartsGridHorizontalProps {
  axis: ComputedYAxis;
  start: number;
  end: number;
  classes: Partial<ChartsGridClasses>;
}

/**
 * @ignore - internal component.
 */
export function ChartsGridHorizontal(props: ChartsGridHorizontalProps) {
    throw new Error("STUB");
}
