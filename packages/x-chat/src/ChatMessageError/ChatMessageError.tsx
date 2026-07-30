'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { SxProps, Theme } from '@mui/system';
import Button from '@mui/material/Button';
import {
  MessageError,
  type MessageErrorProps,
  type MessageErrorOwnerState,
  useChatLocaleText,
  useChatStatus,
  useMessage,
} from '@mui/x-chat-headless';
import { styled, createUseThemeProps } from '../internals/zero-styled';
import { mergeSlotProps } from '../internals/mergeSlotProps';
import {
  useChatMessageErrorUtilityClasses,
  type ChatMessageErrorClasses,
} from './chatMessageErrorClasses';

const useThemeProps = createUseThemeProps('MuiChatMessageError');

function getErrorCardBackgroundStyles(
  theme: Theme & { vars?: any; alpha: (color: string, value: number) => string },
) {
  // Scheme-scoped via `applyStyles` so the dark-mode tint (0.16) actually applies
  // under runtime CSS-vars color-scheme switching, instead of the mode being read
  // once at styled time and baked from the default scheme. `theme.alpha` keeps the
  // color SSR-safe (and avoids the imported `alpha()` CSS-vars hazard).
  return {
    backgroundColor: theme.alpha(theme.palette.error.main, 0.08),
    ...theme.applyStyles('dark', {
      backgroundColor: theme.alpha(theme.palette.error.main, 0.16),
    }),
  };
}

export interface ChatMessageErrorProps extends MessageErrorProps {
  className?: string;
  sx?: SxProps<Theme>;
  classes?: Partial<ChatMessageErrorClasses>;
}

const ChatMessageErrorRoot = styled('div', {
  name: 'MuiChatMessageError',
  slot: 'Root',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})<{ ownerState?: MessageErrorOwnerState }>(({ theme, ownerState }) => { throw new Error("STUB"); });

const ChatMessageErrorMessage = styled('span', {
  name: 'MuiChatMessageError',
  slot: 'Message',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})({
  flex: 1,
  minWidth: 0,
  wordBreak: 'break-word',
});

const ChatMessageErrorRetryButton = styled(Button, {
  name: 'MuiChatMessageError',
  slot: 'RetryButton',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

const ChatMessageErrorSlot = React.forwardRef<HTMLDivElement, any>(
  function ChatMessageErrorSlot(props, ref) {
        throw new Error("STUB");
    },
);

const ChatMessageError = React.forwardRef<HTMLDivElement, ChatMessageErrorProps>(
  function ChatMessageError(inProps, ref) {
        throw new Error("STUB");
    },
);

ChatMessageError.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  slotProps: PropTypes.object,
  slots: PropTypes.object,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
} as any;

export { ChatMessageError };
