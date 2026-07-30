'use client';
import * as React from 'react';
import clsx from 'clsx';
import useSlotProps from '@mui/utils/useSlotProps';
import { useThemeProps, useTheme, styled } from '@mui/material/styles';
import { useIsHydrated } from '@mui/x-internals/useIsHydrated';
import type { ChartsYAxisProps, ComputedAxis, ScaleName } from '../models/axis';
import { ChartsSingleYAxisTicks } from './ChartsSingleYAxisTicks';
import { ChartsGroupedYAxisTicks } from './ChartsGroupedYAxisTicks';
import { ChartsText } from '../ChartsText';
import type { ChartsTextProps } from '../ChartsText';
import { defaultProps, useUtilityClasses } from './utilities';
import { isInfinity } from '../internals/isInfinity';
import { useDrawingArea } from '../hooks/useDrawingArea';
import { isOrdinalScale } from '../internals/scaleGuards';
import { getStringSize } from '../internals/domUtils';
import { AxisRoot } from '../internals/components/AxisSharedComponents';

const YAxisRoot = styled(AxisRoot, {
  name: 'MuiChartsYAxis',
  slot: 'Root',
})({});

interface ChartsYAxisImplProps extends Omit<ChartsYAxisProps, 'axis'> {
  axis: ComputedAxis<ScaleName, any, ChartsYAxisProps>;
}

/**
 * @ignore - internal component. Use `ChartsYAxis` instead.
 */
export function ChartsYAxisImpl({ axis, ...inProps }: ChartsYAxisImplProps) {
    throw new Error("STUB");
}
