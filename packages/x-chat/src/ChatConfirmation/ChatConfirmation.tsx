'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { SxProps, Theme } from '@mui/system';
import { styled, createUseThemeProps } from '../internals/zero-styled';
import {
  useChatConfirmationUtilityClasses,
  type ChatConfirmationClasses,
} from './chatConfirmationClasses';

export interface ChatConfirmationProps {
  /**
   * The question or warning message to display. Required.
   */
  message: string;
  /**
   * Label for the confirm button.
   * @default 'Confirm'
   */
  confirmLabel?: string;
  /**
   * Label for the cancel button.
   * @default 'Cancel'
   */
  cancelLabel?: string;
  /**
   * Called when the user clicks the confirm button.
   */
  onConfirm?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * Called when the user clicks the cancel button.
   */
  onCancel?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  sx?: SxProps<Theme>;
  classes?: Partial<ChatConfirmationClasses>;
}

const useThemeProps = createUseThemeProps('MuiChatConfirmation');

// Inline SVG — avoids @mui/icons-material dependency
function WarningIcon() {
    throw new Error("STUB");
}

const ChatConfirmationRoot = styled('div', {
  name: 'MuiChatConfirmation',
  slot: 'Root',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

const ChatConfirmationIcon = styled('span', {
  name: 'MuiChatConfirmation',
  slot: 'Icon',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

const ChatConfirmationMessage = styled('p', {
  name: 'MuiChatConfirmation',
  slot: 'Message',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

const ChatConfirmationActions = styled('div', {
  name: 'MuiChatConfirmation',
  slot: 'Actions',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

const ChatConfirmationCancelButton = styled('button', {
  name: 'MuiChatConfirmation',
  slot: 'CancelButton',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

const ChatConfirmationConfirmButton = styled('button', {
  name: 'MuiChatConfirmation',
  slot: 'ConfirmButton',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

const ChatConfirmation = React.forwardRef<HTMLDivElement, ChatConfirmationProps>(
  function ChatConfirmation(inProps, ref) {
        throw new Error("STUB");
    },
);

ChatConfirmation.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Label for the cancel button.
   * @default 'Cancel'
   */
  cancelLabel: PropTypes.string,
  classes: PropTypes.object,
  className: PropTypes.string,
  /**
   * Label for the confirm button.
   * @default 'Confirm'
   */
  confirmLabel: PropTypes.string,
  /**
   * The question or warning message to display. Required.
   */
  message: PropTypes.string.isRequired,
  /**
   * Called when the user clicks the cancel button.
   */
  onCancel: PropTypes.func,
  /**
   * Called when the user clicks the confirm button.
   */
  onConfirm: PropTypes.func,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
} as any;

export { ChatConfirmation };
