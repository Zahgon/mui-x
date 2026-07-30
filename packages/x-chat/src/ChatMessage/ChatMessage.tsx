'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { SxProps, Theme } from '@mui/system';
import {
  MessageRoot,
  type ChatMessageStatus,
  type ChatRole,
  type ChatMessage as ChatMessageEntity,
  type MessageRootProps,
  type MessageGroupSlotProps,
  useChatVariant,
  useMessage,
} from '@mui/x-chat-headless';
import resolveComponentProps from '@mui/utils/resolveComponentProps';
import type { WithDataAttributes } from '@mui/utils/types';
import { styled, createUseThemeProps } from '../internals/zero-styled';
import { mergeSlotProps } from '../internals/mergeSlotProps';
import { useChatMessageUtilityClasses, type ChatMessageClasses } from './chatMessageClasses';
import { ChatMessageError, type ChatMessageErrorProps } from '../ChatMessageError/ChatMessageError';
import { ChatMessageAvatar, type ChatMessageAvatarProps } from './ChatMessageAvatar';
import { ChatMessageContent, type ChatMessageContentProps } from './ChatMessageContent';
import { ChatMessageMeta, type ChatMessageMetaProps } from './ChatMessageMeta';
import { ChatMessageInlineMeta, type ChatMessageInlineMetaProps } from './ChatMessageInlineMeta';
import { ChatMessageActions, type ChatMessageActionsProps } from './ChatMessageActions';
import {
  ChatStreamingIndicator,
  type ChatStreamingIndicatorProps,
} from '../ChatIndicators/ChatStreamingIndicator';

const useThemeProps = createUseThemeProps('MuiChatMessage');

export interface ChatMessageSlots {
  /** The styled root element. */
  root: React.ElementType;
  /**
   * The avatar component. Pass `null` to hide it and collapse the avatar grid track.
   * Function form receives the message context and may return `null` for per-message hiding,
   * but the grid track is only dropped when the slot itself is `null`.
   */
  avatar: React.ElementType | null;
  /** The bubble component that renders message content. */
  content: React.ElementType;
  /**
   * The external meta component (compact variant). Pass `null` to hide it.
   */
  meta: React.ElementType | null;
  /**
   * The inline meta component (default variant; rendered inside the bubble). Pass `null` to hide it.
   */
  inlineMeta: React.ElementType | null;
  /**
   * The error component rendered under the bubble when status === 'error'.
   * Pass `null` to hide the error surface entirely (no component is mounted).
   */
  error: React.ElementType | null;
  /**
   * The actions component, rendered under the bubble.
   * Receives `{ messageId }` as props.
   * Pass `null` to hide actions entirely; omit to render only `extraActions`
   * (from `slotProps.actions`) if provided.
   */
  actions: React.ElementType | null;
  /**
   * The author-name label. Rendered by the surrounding `ChatMessageGroup`
   * (default variant: above the bubble; compact variant: inside the message
   * grid). Forwarded through `slots.message.authorName` from `ChatBox`. Pass
   * `null` to hide.
   */
  authorName: React.ElementType | null;
  /**
   * The animated streaming indicator, rendered inside the bubble (after the
   * streamed parts) while this assistant message has `status: 'streaming'`.
   * Pass `null` to hide it.
   */
  streamingIndicator: React.ElementType | null;
}

/**
 * Message context passed to a function-valued `slotProps.actions` (and the flat
 * `slotProps.messageActions`), so a consumer can return per-message action props
 * — most commonly `extraActions` for assistant rows.
 */
export interface ChatMessageActionsResolveContext {
  message: ChatMessageEntity | null;
  messageId: string;
  role?: ChatRole;
  status?: ChatMessageStatus;
  streaming: boolean;
}

export interface ChatMessageSlotProps {
  root?: any;
  avatar?: WithDataAttributes<Partial<ChatMessageAvatarProps>>;
  content?: WithDataAttributes<Partial<ChatMessageContentProps>>;
  meta?: WithDataAttributes<Partial<ChatMessageMetaProps>>;
  inlineMeta?: WithDataAttributes<Partial<ChatMessageInlineMetaProps>>;
  error?: WithDataAttributes<Partial<ChatMessageErrorProps>>;
  actions?:
    | WithDataAttributes<Partial<ChatMessageActionsProps>>
    | ((
        context: ChatMessageActionsResolveContext,
      ) => WithDataAttributes<Partial<ChatMessageActionsProps>>);
  authorName?: MessageGroupSlotProps['authorName'];
  streamingIndicator?: WithDataAttributes<Partial<ChatStreamingIndicatorProps>>;
}

export interface ChatMessageProps extends Omit<MessageRootProps, 'slots' | 'slotProps'> {
  className?: string;
  sx?: SxProps<Theme>;
  classes?: Partial<ChatMessageClasses>;
  slots?: Partial<ChatMessageSlots>;
  slotProps?: ChatMessageSlotProps;
  /**
   * @ignore
   * Internal: the group's author label, injected by the headless `MessageGroup`
   * in compact mode so it can share the message's CSS grid. Not part of a
   * consumer's custom composition (which uses `children`).
   */
  groupAuthorName?: React.ReactNode;
}

const ChatMessageStyled = styled('div', {
  name: 'MuiChatMessage',
  slot: 'Root',
  overridesResolver: (props, styles) => { throw new Error("STUB"); },
})<{
  ownerState?: {
    role?: string;
    isGrouped?: boolean;
    variant?: string;
    density?: string;
    isOwnMessage?: boolean;
  };
}>(({ theme, ownerState }) => {
    throw new Error("STUB");
});

const ChatMessage = React.forwardRef<HTMLDivElement, ChatMessageProps>(
  function ChatMessage(inProps, ref) {
        throw new Error("STUB");
    },
);

ChatMessage.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: PropTypes.object,
  className: PropTypes.string,
  /**
   * @ignore
   * Internal: the group's author label, injected by the headless `MessageGroup`
   * in compact mode so it can share the message's CSS grid. Not part of a
   * consumer's custom composition (which uses `children`).
   */
  groupAuthorName: PropTypes.node,
  isGrouped: PropTypes.bool,
  messageId: PropTypes.string.isRequired,
  slotProps: PropTypes.object,
  slots: PropTypes.object,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
} as any;

export { ChatMessage };
