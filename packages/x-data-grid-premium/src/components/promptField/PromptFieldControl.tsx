import * as React from 'react';
import PropTypes from 'prop-types';
import { forwardRef } from '@mui/x-internals/forwardRef';
import { useComponentRenderer } from '@mui/x-internals/useComponentRenderer';
import type { GridSlotProps, RenderProp } from '@mui/x-data-grid-pro';
import { useGridRootProps } from '../../hooks/utils/useGridRootProps';
import { usePromptFieldContext } from './PromptFieldContext';
import type { PromptFieldState } from './PromptFieldContext';

export type PromptFieldControlProps = Omit<GridSlotProps['baseTextField'], 'className'> & {
  /**
   * A function to customize rendering of the component.
   */
  render?: RenderProp<GridSlotProps['baseTextField'], PromptFieldState>;
  /**
   * Override or extend the styles applied to the component.
   */
  className?: string | ((state: PromptFieldState) => string);
};

/**
 * A component that takes user input.
 * It renders the `baseTextField` slot.
 *
 * Demos:
 *
 * - [Prompt Field](https://mui.com/x/react-data-grid/components/prompt-field/)
 *
 * API:
 *
 * - [PromptFieldControl API](https://mui.com/x/api/data-grid/prompt-field-control/)
 */
const PromptFieldControl = forwardRef<HTMLInputElement, PromptFieldControlProps>(
  function PromptFieldControl(props, ref) {
        throw new Error("STUB");
    },
);

PromptFieldControl.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  className: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  color: PropTypes.oneOf(['error', 'primary']),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  fullWidth: PropTypes.bool,
  helperText: PropTypes.string,
  id: PropTypes.string,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.object,
    }),
  ]),
  label: PropTypes.node,
  multiline: PropTypes.bool,
  placeholder: PropTypes.string,
  /**
   * A function to customize rendering of the component.
   */
  render: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  role: PropTypes.string,
  size: PropTypes.oneOf(['medium', 'small']),
  slotProps: PropTypes.object,
  style: PropTypes.object,
  tabIndex: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.string,
} as any;

export { PromptFieldControl };
