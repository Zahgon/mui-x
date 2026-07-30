import * as React from 'react';
import PropTypes from 'prop-types';
import useId from '@mui/utils/useId';
import { forwardRef } from '@mui/x-internals/forwardRef';
import { useComponentRenderer } from '@mui/x-internals/useComponentRenderer';
import type { RenderProp } from '@mui/x-data-grid-pro/internals';
import { useGridSelector } from '@mui/x-data-grid-pro';
import type { GridSlotProps } from '@mui/x-data-grid-pro';
import { useGridApiContext } from '../../hooks/utils/useGridApiContext';
import { useGridRootProps } from '../../hooks/utils/useGridRootProps';
import { gridChartsPanelOpenSelector } from '../../hooks/features/chartsIntegration/gridChartsIntegrationSelectors';

export interface ChartsPanelState {
  /**
   * If `true`, the charts integration panel is open.
   */
  open: boolean;
}

export type ChartsPanelTriggerProps = Omit<GridSlotProps['baseButton'], 'className'> & {
  /**
   * A function to customize rendering of the component.
   */
  render?: RenderProp<GridSlotProps['baseButton'], ChartsPanelState>;
  /**
   * A function to customize rendering of the component.
   */
  className?: string | ((state: ChartsPanelState) => string);
};

/**
 * A button that opens and closes the charts integration panel.
 * It renders the `baseButton` slot.
 *
 * Demos:
 *
 * - [Charts Panel](https://mui.com/x/react-data-grid/components/charts-panel/)
 *
 * API:
 *
 * - [ChartsPanelTrigger API](https://mui.com/x/api/data-grid/charts-panel-trigger/)
 */
const ChartsPanelTrigger = forwardRef<HTMLButtonElement, ChartsPanelTriggerProps>(
  function ChartsPanelTrigger(props, ref) {
        throw new Error("STUB");
    },
);

ChartsPanelTrigger.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A function to customize rendering of the component.
   */
  className: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  /**
   * A function to customize rendering of the component.
   */
  render: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  role: PropTypes.string,
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  startIcon: PropTypes.node,
  style: PropTypes.object,
  tabIndex: PropTypes.number,
  title: PropTypes.string,
  touchRippleRef: PropTypes.any,
} as any;

export { ChartsPanelTrigger };
