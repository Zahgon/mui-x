import * as React from 'react';
import type { PiecewiseColorConfig } from '../../../models/colorMapping';

type ChartsPiecewiseGradientProps = {
  isReversed?: boolean;
  gradientId: string;
  size: number;
  direction: 'x' | 'y';
  scale: (value: any) => number | undefined;
  colorMap: PiecewiseColorConfig;
};

export default function ChartsPiecewiseGradient(props: ChartsPiecewiseGradientProps) {
    throw new Error("STUB");
}
