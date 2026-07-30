'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import useForkRef from '@mui/utils/useForkRef';
import useId from '@mui/utils/useId';
import { forwardRef } from '@mui/x-internals/forwardRef';
import { useComponentRenderer } from '@mui/x-internals/useComponentRenderer';
import type { RenderProp } from '@mui/x-internals/useComponentRenderer';
import { useGridRootProps } from '../../hooks/utils/useGridRootProps';
import type { GridSlotProps } from '../../models';
import { useToolbarContext } from './ToolbarContext';

export type ToolbarButtonProps = GridSlotProps['baseIconButton'] & {
  /**
   * A function to customize rendering of the component.
   */
  render?: RenderProp<GridSlotProps['baseIconButton']>;
};

/**
 * A button for performing actions from the toolbar.
 * It renders the `baseIconButton` slot.
 *
 * Demos:
 *
 * - [Toolbar](https://mui.com/x/react-data-grid/components/toolbar/)
 *
 * API:
 *
 * - [ToolbarButton API](https://mui.com/x/api/data-grid/toolbar-button/)
 */
const ToolbarButton = forwardRef<HTMLButtonElement, ToolbarButtonProps>(
  function ToolbarButton(props, ref) {
        throw new Error("STUB");
    },
);

ToolbarButton.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  className: PropTypes.string,
  color: PropTypes.oneOf(['default', 'inherit', 'primary']),
  disabled: PropTypes.bool,
  edge: PropTypes.oneOf(['end', 'start', false]),
  id: PropTypes.string,
  label: PropTypes.string,
  /**
   * A function to customize rendering of the component.
   */
  render: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  role: PropTypes.string,
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  style: PropTypes.object,
  tabIndex: PropTypes.number,
  title: PropTypes.string,
  touchRippleRef: PropTypes.any,
} as any;

export { ToolbarButton };
