import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { useComponentRenderer } from '@mui/x-internals/useComponentRenderer';
import type { RenderProp } from '@mui/x-internals/useComponentRenderer';
import { ToolbarContextProvider } from '@mui/x-internals/ToolbarContext';
import { chartsToolbarClasses } from './chartToolbarClasses';

const ToolbarRoot = styled('div', {
  name: 'MuiChartsToolbar',
  slot: 'Root',
})(({ theme }) => { throw new Error("STUB"); });

export interface ToolbarProps extends React.ComponentProps<'div'> {
  className?: string;
  /**
   * A function to customize rendering of the component.
   */
  render?: RenderProp<React.ComponentProps<typeof ToolbarRoot>>;
}

export const Toolbar = React.forwardRef<HTMLDivElement, ToolbarProps>(function Toolbar(
  { className, render, ...other },
  ref,
) {
    throw new Error("STUB");
});

Toolbar.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  className: PropTypes.string,
  /**
   * A function to customize rendering of the component.
   */
  render: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
} as any;
