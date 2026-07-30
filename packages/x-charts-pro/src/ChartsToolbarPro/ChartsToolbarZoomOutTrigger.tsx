'use client';

import * as React from 'react';
import PropTypes from 'prop-types';
import { useChartsContext, useChartsSlots } from '@mui/x-charts/internals';
import type { ChartsSlotProps, UseChartCartesianAxisSignature } from '@mui/x-charts/internals';
import { useComponentRenderer } from '@mui/x-internals/useComponentRenderer';
import type { RenderProp } from '@mui/x-internals/useComponentRenderer';
import { selectorChartCanZoomOut } from '../internals/plugins/useChartProZoom';
import type { UseChartProZoomSignature } from '../internals/plugins/useChartProZoom';

interface ChartsToolbarZoomOutTriggerProps {
  /**
   * A function to customize the rendering of the component.
   */
  render?: RenderProp<ChartsSlotProps['baseButton']>;
}

/**
 * A button that zooms the chart out.
 * It renders the `baseButton` slot.
 */
const ChartsToolbarZoomOutTrigger = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<ChartsToolbarZoomOutTriggerProps>
>(function ChartsToolbarZoomOutTrigger({ render, ...other }, ref) {
    throw new Error("STUB");
});

ChartsToolbarZoomOutTrigger.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A function to customize the rendering of the component.
   */
  render: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
} as any;

export { ChartsToolbarZoomOutTrigger };
