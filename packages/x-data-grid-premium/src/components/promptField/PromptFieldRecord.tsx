import * as React from 'react';
import PropTypes from 'prop-types';
import { Timeout } from '@mui/utils/useTimeout';
import useLazyRef from '@mui/utils/useLazyRef';
import { forwardRef } from '@mui/x-internals/forwardRef';
import { useComponentRenderer } from '@mui/x-internals/useComponentRenderer';
import type { GridSlotProps, RenderProp } from '@mui/x-data-grid-pro';
import { useGridRootProps } from '../../hooks/utils/useGridRootProps';
import { usePromptFieldContext } from './PromptFieldContext';
import type { PromptFieldState } from './PromptFieldContext';
import { BrowserSpeechRecognition } from '../../utils/speechRecognition';

export type PromptFieldRecordProps = Omit<GridSlotProps['baseIconButton'], 'className'> & {
  /**
   * A function to customize rendering of the component.
   */
  render?: RenderProp<GridSlotProps['baseIconButton'], PromptFieldState>;
  /**
   * Override or extend the styles applied to the component.
   */
  className?: string | ((state: PromptFieldState) => string);
};

type SpeechRecognitionOptions = {
  onUpdate: (value: string) => void;
  onDone: (value: string) => void;
  onError: (error: string) => void;
};

/**
 * A button that records the user's voice when clicked.
 * It renders the `baseIconButton` slot.
 *
 * Demos:
 *
 * - [Prompt Field](https://mui.com/x/react-data-grid/components/prompt-field/)
 *
 * API:
 *
 * - [PromptFieldRecord API](https://mui.com/x/api/data-grid/prompt-field-record/)
 */
const PromptFieldRecord = forwardRef<HTMLButtonElement, PromptFieldRecordProps>(
  function PromptFieldRecord(props, ref) {
        throw new Error("STUB");
    },
);

PromptFieldRecord.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  className: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
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

export { PromptFieldRecord };
