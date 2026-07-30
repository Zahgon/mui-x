import * as React from 'react';
import type { BarPlotSlotProps, BarPlotSlots } from './BarPlot';
import type { BarItemIdentifier } from '../models';
import { BarElement } from './BarElement';
import type { MaskData, ProcessedBarSeriesData } from './types';
import { useUtilityClasses } from './barClasses';
import { BarClipPath } from './BarClipPath';
import { useRegisterItemClickHandlers } from './useRegisterItemClickHandlers';

export interface IndividualBarPlotProps {
  completedData: ProcessedBarSeriesData[];
  masksData: MaskData[];
  borderRadius?: number;
  skipAnimation?: boolean;
  onItemClick?: (event: MouseEvent, barItemIdentifier: BarItemIdentifier) => void;
  slotProps?: BarPlotSlotProps;
  slots?: BarPlotSlots;
}

export function IndividualBarPlot({
  completedData,
  masksData,
  borderRadius,
  onItemClick,
  skipAnimation,
  ...other
}: IndividualBarPlotProps) {
    throw new Error("STUB");
}
