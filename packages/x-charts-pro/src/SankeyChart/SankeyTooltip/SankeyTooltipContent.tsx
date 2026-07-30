'use client';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  ChartsTooltipPaper,
  ChartsTooltipTable,
  ChartsTooltipRow,
  ChartsTooltipCell,
  useItemTooltip,
} from '@mui/x-charts/ChartsTooltip';
import { ChartsLabelMark } from '@mui/x-charts/internals';
import type { SankeyTooltipProps } from './SankeyTooltip.types';
import { useUtilityClasses } from './SankeyTooltip.classes';

export interface SankeyTooltipContentProps extends Pick<SankeyTooltipProps, 'classes'> {}

export function SankeyTooltipContent(props: SankeyTooltipContentProps) {
    throw new Error("STUB");
}

SankeyTooltipContent.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
} as any;
