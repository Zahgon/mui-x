'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import type { SxProps, Theme } from '@mui/material/styles';
import clsx from 'clsx';
import { useUtilityClasses } from './labelClasses';
import type { ChartsLabelClasses } from './labelClasses';
import { consumeThemeProps } from '../internals/consumeThemeProps';

export interface ChartsLabelProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ChartsLabelClasses>;
  children?: React.ReactNode;
  className?: string;
  sx?: SxProps<Theme>;
}

/**
 * Generates the label mark for the tooltip and legend.
 * @ignore - internal component.
 */
const ChartsLabel = consumeThemeProps(
  'MuiChartsLabel',
  {
    classesResolver: useUtilityClasses,
  },
  function ChartsLabel(props: ChartsLabelProps, ref: React.Ref<HTMLSpanElement>) {
      throw new Error("STUB");
  },
);

ChartsLabel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
} as any;

export { ChartsLabel };
