import * as React from 'react';
import clsx from 'clsx';
import { ChartsTooltipCell, ChartsTooltipRow } from '@mui/x-charts/ChartsTooltip';
import type { AxisTooltipContentProps, ItemTooltipContentProps } from '@mui/x-charts/internals';
import { useChartsLocalization } from '@mui/x-charts/hooks';
import { useChartsTooltipUtilityClasses } from '@mui/x-charts/internals';
import type { OHLCField } from '../../models';

const OHLC_FIELDS: OHLCField[] = ['open', 'high', 'low', 'close'];

export function OHLCTooltipContent(
  props: AxisTooltipContentProps<'ohlc'> | ItemTooltipContentProps<'ohlc'>,
) {
    throw new Error("STUB");
}
