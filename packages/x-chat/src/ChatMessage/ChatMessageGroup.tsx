'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { SxProps, Theme } from '@mui/system';
import { MessageGroup, type MessageGroupProps } from '@mui/x-chat-headless';
import { styled, createUseThemeProps } from '../internals/zero-styled';
import { mergeSlotProps } from '../internals/mergeSlotProps';
import { useChatMessageUtilityClasses } from './chatMessageClasses';
import { ChatMessage, type ChatMessageSlots, type ChatMessageSlotProps } from './ChatMessage';
import type { ChatBoxSlots, ChatBoxSlotProps } from '../ChatBox/ChatBox.types';

const useThemeProps = createUseThemeProps('MuiChatMessageGroup');

/**
 * Flat slot keys for `ChatMessageGroup` — part of the message-rendering pipeline
 * vocabulary. `messageGroup` is the styled group wrapper (wrapper-only); the
 * `message*` keys are mapped onto the inner `ChatMessage`'s short local slots.
 * A subset of the public `ChatBoxSlots`.
 */
type ChatMessageGroupSlotKeys =
  | 'messageGroup'
  | 'messageRoot'
  | 'messageAvatar'
  | 'messageContent'
  | 'messageMeta'
  | 'messageInlineMeta'
  | 'messageError'
  | 'messageActions'
  | 'messageAuthorName'
  | 'streamingIndicator';

export interface ChatMessageGroupSlots extends Pick<ChatBoxSlots, ChatMessageGroupSlotKeys> {}

export interface ChatMessageGroupSlotProps extends Pick<
  ChatBoxSlotProps,
  ChatMessageGroupSlotKeys
> {}

export interface ChatMessageGroupProps extends Omit<MessageGroupProps, 'slots' | 'slotProps'> {
  className?: string;
  sx?: SxProps<Theme>;
  slots?: ChatMessageGroupSlots;
  slotProps?: ChatMessageGroupSlotProps;
}

const ChatMessageGroupStyled = styled('div', {
  name: 'MuiChatMessage',
  slot: 'Group',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})<{
  ownerState?: {
    variant?: string;
    isFirst?: boolean;
    isFirstInList?: boolean;
    density?: string;
  };
}>(({ theme, ownerState }) => {
    throw new Error("STUB");
});

const ChatMessageGroupAuthorNameStyled = styled('div', {
  name: 'MuiChatMessage',
  slot: 'GroupAuthorName',
})<{ ownerState?: { isOwnMessage?: boolean; variant?: string } }>(({ theme, ownerState }) => { throw new Error("STUB"); });

function HiddenAuthorName() {
    throw new Error("STUB");
}

const ChatMessageGroupTimestampStyled = styled('span', {
  name: 'MuiChatMessage',
  slot: 'GroupTimestamp',
})(({ theme }) => { throw new Error("STUB"); });

const ChatMessageGroup = React.forwardRef<HTMLDivElement, ChatMessageGroupProps>(
  function ChatMessageGroup(inProps, ref) {
        throw new Error("STUB");
    },
);

ChatMessageGroup.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  children: PropTypes.node,
  className: PropTypes.string,
  /**
   * A function that maps a message to a group key.
   * Messages that resolve to the same key are visually grouped (shared avatar, author name, etc.).
   * Use `createTimeWindowGroupKey(windowMs)` to replicate time-window-based grouping.
   * @default (message) => message.author?.id ?? message.role ?? ''
   */
  groupKey: PropTypes.func,
  index: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string),
  messageId: PropTypes.string.isRequired,
  slotProps: PropTypes.object,
  slots: PropTypes.object,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
} as any;

export { ChatMessageGroup };
