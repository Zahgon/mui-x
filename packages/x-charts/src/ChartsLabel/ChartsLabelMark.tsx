'use client';
import * as React from 'react';
import clsx from 'clsx';
import { styled, useTheme } from '@mui/material/styles';
import type { SxProps, Theme } from '@mui/material/styles';
import { symbol as d3Symbol, symbolsFill as d3SymbolsFill } from '@mui/x-charts-vendor/d3-shape';
import { labelMarkClasses, useUtilityClasses } from './labelMarkClasses';
import type { ChartsLabelMarkClasses } from './labelMarkClasses';
import type { MarkShape } from '../models/seriesType/line';
import { consumeThemeProps } from '../internals/consumeThemeProps';
import { getSymbol } from '../internals/getSymbol';

export interface ChartsLabelCustomMarkProps {
  className?: string;
  /** Color of the series this mark refers to. */
  color?: string;
}

export type ChartsLabelMarkType =
  'square' | 'circle' | 'line' | 'line+mark' | React.ComponentType<ChartsLabelCustomMarkProps>;

export interface ChartsLabelMarkProps {
  /**
   * The type of the mark.
   * @default 'square'
   */
  type?: ChartsLabelMarkType;
  /**
   * The mark will be rendered as a combination of a line and the specified mark type.
   * The line will be rendered first, followed by the mark.
   * Only used if `type='line+mark'`.
   */
  markShape?: MarkShape;
  /**
   * The color of the mark.
   */
  color?: string;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ChartsLabelMarkClasses>;
  className?: string;
  sx?: SxProps<Theme>;
}

const Root = styled('div', {
  name: 'MuiChartsLabelMark',
  slot: 'Root',
})<{ ownerState: ChartsLabelMarkProps }>(() => {
    throw new Error("STUB");
});

/**
 * Generates the label mark for the tooltip and legend.
 * @ignore - internal component.
 */
const ChartsLabelMark = consumeThemeProps(
  'MuiChartsLabelMark',
  {
    defaultProps: { type: 'square' },
    classesResolver: useUtilityClasses,
  },
  function ChartsLabelMark(props: ChartsLabelMarkProps, ref: React.Ref<HTMLDivElement>) {
      throw new Error("STUB");
  },
);

export { ChartsLabelMark };
