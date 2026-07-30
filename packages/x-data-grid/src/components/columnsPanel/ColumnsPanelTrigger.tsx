import * as React from 'react';
import PropTypes from 'prop-types';
import useId from '@mui/utils/useId';
import { forwardRef } from '@mui/x-internals/forwardRef';
import useForkRef from '@mui/utils/useForkRef';
import { useComponentRenderer } from '@mui/x-internals/useComponentRenderer';
import type { RenderProp } from '@mui/x-internals/useComponentRenderer';
import { useGridPanelContext } from '../panel/GridPanelContext';
import { useGridApiContext } from '../../hooks/utils/useGridApiContext';
import {
  gridPreferencePanelStateSelector,
  GridPreferencePanelsValue,
  useGridSelector,
} from '../../hooks';
import { useGridRootProps } from '../../hooks/utils/useGridRootProps';
import type { GridSlotProps } from '../../models';

export interface ColumnsPanelState {
  /**
   * If `true`, the columns panel is open.
   */
  open: boolean;
}

export type ColumnsPanelTriggerProps = Omit<GridSlotProps['baseButton'], 'className'> & {
  /**
   * A function to customize rendering of the component.
   */
  render?: RenderProp<GridSlotProps['baseButton'], ColumnsPanelState>;
  /**
   * Override or extend the styles applied to the component.
   */
  className?: string | ((state: ColumnsPanelState) => string);
};

/**
 * A button that opens and closes the columns panel.
 * It renders the `baseButton` slot.
 *
 * Demos:
 *
 * - [Columns Panel](https://mui.com/x/react-data-grid/components/columns-panel/)
 *
 * API:
 *
 * - [ColumnsPanelTrigger API](https://mui.com/x/api/data-grid/columns-panel-trigger/)
 */
const ColumnsPanelTrigger = forwardRef<HTMLButtonElement, ColumnsPanelTriggerProps>(
  function ColumnsPanelTrigger(props, ref) {
        throw new Error("STUB");
    },
);

ColumnsPanelTrigger.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
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

export { ColumnsPanelTrigger };
