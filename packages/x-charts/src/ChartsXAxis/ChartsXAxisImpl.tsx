'use client';
import * as React from 'react';
import clsx from 'clsx';
import useSlotProps from '@mui/utils/useSlotProps';
import { styled, useTheme, useThemeProps } from '@mui/material/styles';
import type { ChartsXAxisProps, ComputedAxis, ScaleName } from '../models/axis';
import { ChartsSingleXAxisTicks } from './ChartsSingleXAxisTicks';
import { ChartsGroupedXAxisTicks } from './ChartsGroupedXAxisTicks';
import { ChartsText } from '../ChartsText';
import type { ChartsTextProps } from '../ChartsText';
import { isOrdinalScale } from '../internals/scaleGuards';
import { isInfinity } from '../internals/isInfinity';
import { defaultProps, useUtilityClasses } from './utilities';
import { useDrawingArea } from '../hooks';
import { getStringSize } from '../internals/domUtils';
import { AxisRoot } from '../internals/components/AxisSharedComponents';

const XAxisRoot = styled(AxisRoot, {
  name: 'MuiChartsXAxis',
  slot: 'Root',
})({});

interface ChartsXAxisImplProps extends Omit<ChartsXAxisProps, 'axis'> {
  axis: ComputedAxis<ScaleName, any, ChartsXAxisProps>;
}

/**
 * @ignore - internal component. Use `ChartsXAxis` instead.
 */
export function ChartsXAxisImpl({ axis, ...inProps }: ChartsXAxisImplProps) {
    throw new Error("STUB");
}
