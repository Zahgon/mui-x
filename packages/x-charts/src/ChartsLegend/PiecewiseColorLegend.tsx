'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import type { SxProps, Theme } from '@mui/material/styles';
import clsx from 'clsx';
import type { PrependKeys } from '@mui/x-internals/types';
import { ChartsLabel } from '../ChartsLabel/ChartsLabel';
import { ChartsLabelMark } from '../ChartsLabel/ChartsLabelMark';
import type { ChartsLabelMarkProps } from '../ChartsLabel/ChartsLabelMark';
import type { Direction } from './direction';
import { consumeThemeProps } from '../internals/consumeThemeProps';
import { piecewiseColorLegendClasses, useUtilityClasses } from './piecewiseColorLegendClasses';
import type { PiecewiseColorLegendClasses } from './piecewiseColorLegendClasses';
import type { ColorLegendSelector } from './colorLegend.types';
import type { PiecewiseLabelFormatterParams } from './piecewiseColorLegend.types';
import type { ComputedAxis } from '../models/axis';
import { useAxis } from './useAxis';
import type { PiecewiseColorLegendItemContext } from './legendContext.types';
import { piecewiseColorDefaultLabelFormatter } from './piecewiseColorDefaultLabelFormatter';

export interface PiecewiseColorLegendProps
  extends ColorLegendSelector, PrependKeys<Pick<ChartsLabelMarkProps, 'type'>, 'mark'> {
  /**
   * The direction of the legend layout.
   * @default 'horizontal'
   */
  direction?: Direction;
  /**
   * Format the legend labels.
   * @param {PiecewiseLabelFormatterParams} params The bound of the piece to format.
   * @returns {string|null} The displayed label, `''` to skip the label but show the color mark, or `null` to skip it entirely.
   */
  labelFormatter?: (params: PiecewiseLabelFormatterParams) => string | null;
  /**
   * Where to position the labels relative to the color marks.
   * @default 'extremes'
   */
  labelPosition?: 'start' | 'end' | 'extremes' | 'inline-start' | 'inline-end';
  /**
   * Callback fired when a legend item is clicked.
   * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event The click event.
   * @param {PiecewiseColorLegendItemContext} legendItem The legend item data.
   * @param {number} index The index of the clicked legend item.
   */
  onItemClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    legendItem: PiecewiseColorLegendItemContext,
    index: number,
  ) => void;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<PiecewiseColorLegendClasses>;
  className?: string;
  sx?: SxProps<Theme>;
  tabIndex?: number;
}

const RootElement = styled('ul', {
  name: 'MuiPiecewiseColorLegend',
  slot: 'Root',
})<{ ownerState: PiecewiseColorLegendProps }>(({ theme, ownerState }) => {
    throw new Error("STUB");
});

const PiecewiseColorLegend = consumeThemeProps(
  'MuiPiecewiseColorLegend',
  {
    defaultProps: {
      direction: 'horizontal',
      labelPosition: 'extremes',
      labelFormatter: piecewiseColorDefaultLabelFormatter,
    },
    classesResolver: useUtilityClasses,
  },
  function PiecewiseColorLegend(
    props: PiecewiseColorLegendProps,
    ref: React.Ref<HTMLUListElement>,
  ) {
      throw new Error("STUB");
  },
);

PiecewiseColorLegend.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The axis direction containing the color configuration to represent.
   * @default 'z'
   */
  axisDirection: PropTypes.oneOf(['x', 'y', 'z']),
  /**
   * The id of the axis item with the color configuration to represent.
   * @default The first axis item.
   */
  axisId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  className: PropTypes.string,
  /**
   * The direction of the legend layout.
   * @default 'horizontal'
   */
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  /**
   * Format the legend labels.
   * @param {PiecewiseLabelFormatterParams} params The bound of the piece to format.
   * @returns {string|null} The displayed label, `''` to skip the label but show the color mark, or `null` to skip it entirely.
   */
  labelFormatter: PropTypes.func,
  /**
   * Where to position the labels relative to the gradient.
   * @default 'extremes'
   */
  labelPosition: PropTypes.oneOf(['start', 'end', 'extremes', 'inline-start', 'inline-end']),
  /**
   * The type of the mark.
   * @default 'square'
   */
  markType: PropTypes.oneOf(['square', 'circle', 'line']),
  /**
   * Callback fired when a legend item is clicked.
   * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event The click event.
   * @param {PiecewiseColorLegendItemContext} legendItem The legend item data.
   * @param {number} index The index of the clicked legend item.
   */
  onItemClick: PropTypes.func,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
} as any;

export { PiecewiseColorLegend };
