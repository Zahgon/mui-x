'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { warnOnce } from '@mui/x-internals/warning';
import { SxProps, Theme } from '@mui/system';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {
  MessageActions,
  useChatActions,
  type ChatMessage,
  type ChatRuntimeActions,
  type MessageActionsProps,
} from '@mui/x-chat-headless';
import { styled, createUseThemeProps } from '../internals/zero-styled';
import { useChatMessageUtilityClasses } from './chatMessageClasses';
import { mergeSlotProps } from '../internals/mergeSlotProps';

const useThemeProps = createUseThemeProps('MuiChatMessageActions');

export interface ChatMessageExtraActionContext {
  /** The message this action bar belongs to (null while loading). */
  message: ChatMessage | null;
  /** Runtime actions (sendMessage, retry, regenerate, …). */
  chat: ChatRuntimeActions;
}

export interface ChatMessageExtraAction {
  /** Stable id; used as the React key and in the rendered button's data-action attribute. */
  id: string;
  /** Accessible label. Rendered as the button text when no icon is given, and as `aria-label` + tooltip when an icon is given. */
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    context: ChatMessageExtraActionContext,
  ) => void;
}

export interface ChatMessageActionsProps extends MessageActionsProps {
  className?: string;
  sx?: SxProps<Theme>;
  /**
   * Declarative action buttons appended after `children`. Lets consumers add
   * actions without replacing the `messageActions` slot component.
   */
  extraActions?: ChatMessageExtraAction[];
  /**
   * The message this bar belongs to. Injected by `ChatMessage` (from its
   * existing `useMessage` subscription); pass explicitly in standalone usage.
   */
  message?: ChatMessage | null;
}

const ChatMessageActionsStyled = styled('div', {
  name: 'MuiChatMessage',
  slot: 'Actions',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})<{ ownerState?: { role?: string; isOwnMessage?: boolean } }>(({ theme, ownerState }) => { throw new Error("STUB"); });

const ChatMessageActions = React.forwardRef<HTMLDivElement, ChatMessageActionsProps>(
  function ChatMessageActions(inProps, ref) {
        throw new Error("STUB");
    },
);

ChatMessageActions.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  className: PropTypes.string,
  /**
   * Declarative action buttons appended after `children`. Lets consumers add
   * actions without replacing the `messageActions` slot component.
   */
  extraActions: PropTypes.arrayOf(
    PropTypes.shape({
      disabled: PropTypes.bool,
      icon: PropTypes.node,
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    }),
  ),
  /**
   * The message this bar belongs to. Injected by `ChatMessage` (from its
   * existing `useMessage` subscription); pass explicitly in standalone usage.
   */
  message: PropTypes.shape({
    author: PropTypes.shape({
      avatarUrl: PropTypes.string,
      displayName: PropTypes.string,
      id: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
      metadata: PropTypes.object,
      role: PropTypes.oneOf(['assistant', 'system', 'user']),
    }),
    conversationId: PropTypes.string,
    createdAt: PropTypes.string,
    editedAt: PropTypes.string,
    id: PropTypes.string.isRequired,
    metadata: PropTypes.object,
    parts: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.shape({
          data: PropTypes.any.isRequired,
          id: PropTypes.string,
          transient: PropTypes.bool,
          type: PropTypes.object.isRequired,
        }),
        PropTypes.shape({
          filename: PropTypes.string,
          mediaType: PropTypes.string.isRequired,
          type: PropTypes.oneOf(['file']).isRequired,
          url: PropTypes.string.isRequired,
        }),
        PropTypes.shape({
          sourceId: PropTypes.string.isRequired,
          text: PropTypes.string,
          title: PropTypes.string,
          type: PropTypes.oneOf(['source-document']).isRequired,
        }),
        PropTypes.shape({
          sourceId: PropTypes.string.isRequired,
          title: PropTypes.string,
          type: PropTypes.oneOf(['source-url']).isRequired,
          url: PropTypes.string.isRequired,
        }),
        PropTypes.shape({
          state: PropTypes.oneOf(['done', 'streaming']),
          text: PropTypes.string.isRequired,
          type: PropTypes.oneOf(['reasoning']).isRequired,
        }),
        PropTypes.shape({
          state: PropTypes.oneOf(['done', 'streaming']),
          text: PropTypes.string.isRequired,
          type: PropTypes.oneOf(['text']).isRequired,
        }),
        PropTypes.shape({
          toolInvocation: PropTypes.shape({
            approval: PropTypes.object,
            approvalId: PropTypes.string,
            callProviderMetadata: PropTypes.object,
            errorText: PropTypes.string,
            input: PropTypes.any,
            output: PropTypes.any,
            preliminary: PropTypes.bool,
            providerExecuted: PropTypes.bool,
            state: PropTypes.oneOf([
              'approval-requested',
              'approval-responded',
              'input-available',
              'input-streaming',
              'output-available',
              'output-denied',
              'output-error',
            ]).isRequired,
            title: PropTypes.string,
            toolCallId: PropTypes.string.isRequired,
            toolName: PropTypes.string.isRequired,
          }).isRequired,
          type: PropTypes.oneOf(['dynamic-tool']).isRequired,
        }),
        PropTypes.shape({
          toolInvocation: PropTypes.shape({
            approval: PropTypes.object,
            approvalId: PropTypes.string,
            callProviderMetadata: PropTypes.object,
            errorText: PropTypes.string,
            input: PropTypes.any,
            output: PropTypes.any,
            preliminary: PropTypes.bool,
            providerExecuted: PropTypes.bool,
            state: PropTypes.oneOf([
              'approval-requested',
              'approval-responded',
              'input-available',
              'input-streaming',
              'output-available',
              'output-denied',
              'output-error',
            ]).isRequired,
            title: PropTypes.string,
            toolCallId: PropTypes.string.isRequired,
            toolName: PropTypes.string.isRequired,
          }).isRequired,
          type: PropTypes.oneOf(['tool']).isRequired,
        }),
        PropTypes.shape({
          type: PropTypes.oneOf(['step-start']).isRequired,
        }),
      ]).isRequired,
    ).isRequired,
    role: PropTypes.oneOf(['assistant', 'system', 'user']).isRequired,
    status: PropTypes.oneOf([
      'cancelled',
      'error',
      'pending',
      'read',
      'sending',
      'sent',
      'streaming',
    ]),
    updatedAt: PropTypes.string,
  }),
  slotProps: PropTypes.object,
  slots: PropTypes.object,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
} as any;

export { ChatMessageActions };
