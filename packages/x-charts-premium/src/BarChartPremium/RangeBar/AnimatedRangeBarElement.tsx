'use client';
import * as React from 'react';
import type { BarProps } from '@mui/x-charts/BarChart';
import { useAnimateRangeBar } from '../../hooks/animation/useAnimateRangeBar';

export interface AnimatedRangeBarElementProps extends BarProps {
  /**
   * If true, the bar is hidden and will animate to a collapsed state.
   */
  hidden?: boolean;
}

export function AnimatedRangeBarElement(props: AnimatedRangeBarElementProps) {
    throw new Error("STUB");
}
