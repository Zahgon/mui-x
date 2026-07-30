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
import { useXAxis, useYAxis } from '@mui/x-charts/hooks';
import { getLabel, ChartsLabelMark } from '@mui/x-charts/internals';
import { useHeatmapSeriesContext } from '../../hooks/useHeatmapSeries';
import { HeatmapTooltipAxesValue } from './HeatmapTooltipAxesValue';
import type { HeatmapTooltipProps } from './HeatmapTooltip.types';
import { useUtilityClasses } from './HeatmapTooltip.classes';

export interface HeatmapTooltipContentProps extends Pick<HeatmapTooltipProps, 'classes'> {}

export function HeatmapTooltipContent(props: HeatmapTooltipContentProps) {
    throw new Error("STUB");
}

HeatmapTooltipContent.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
} as any;
