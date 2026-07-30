'use client';
import * as React from 'react';
import { useStore } from '@mui/x-internals/store';
import useSlotProps from '@mui/utils/useSlotProps';
import { SlotComponentProps } from '@mui/utils/types';
import { useChatStore } from '../hooks/useChatStore';
import { useMessage, useMessageIds } from '../hooks/useMessage';
import { useMessageAuthor } from '../hooks/useMessageAuthor';
import { getMessageWithResolvedAuthor } from '../internals/messageAuthor';
import type { ChatMessage } from '../types/chat-entities';
import { useChatVariant } from '../chat/internals/ChatVariantContext';
import { useChatDensity } from '../chat/internals/ChatDensityContext';
import { getDataAttributes } from '../internals/getDataAttributes';
import { chatSelectors } from '../selectors';
import { MessageAvatar } from '../message/MessageAvatar';
import { MessageContent } from '../message/MessageContent';
import { MessageMeta } from '../message/MessageMeta';
import { MessageRoot } from '../message/MessageRoot';
import { type MessageGroupOwnerState } from './messageGroup.types';

/**
 * A function that maps a message to a group key.
 * Messages that resolve to the same key are visually grouped together
 * (shared avatar, author name, etc.).
 * @param {ChatMessage} message The message to derive a group key from.
 * @returns {string | number} The group key for the message.
 */
export type GroupKeyFn = (message: ChatMessage) => string | number;

const DEFAULT_GROUP_KEY: GroupKeyFn = (message) => { throw new Error("STUB"); };

/**
 * Creates a `groupKey` function that groups messages by author within a sliding
 * time window. Messages from the same author sent more than `windowMs` milliseconds
 * apart will start a new group.
 *
 * @param windowMs - The grouping window in milliseconds. Defaults to 300 000 (5 minutes).
 *
 * @example
 * // Group messages from the same author within a 1-minute window
 * <MessageGroup groupKey={createTimeWindowGroupKey(60_000)} messageId={id} />
 */
export function createTimeWindowGroupKey(windowMs: number = 300_000): GroupKeyFn {
    throw new Error("STUB");
}

function resolveMessageIndex(messageId: string, index: number | undefined, items: string[]) {
  if (index != null) {
    return index;
  }

  return items.indexOf(messageId);
}

export interface MessageGroupSlots {
  group: React.ElementType;
  authorName: React.ElementType;
  /**
   * The timestamp element rendered next to the author name in compact mode.
   * Only rendered when `variant === 'compact'` and the message has a `createdAt` value.
   * @default 'span'
   */
  groupTimestamp: React.ElementType;
}

export interface MessageGroupSlotProps {
  group?: SlotComponentProps<'div', {}, MessageGroupOwnerState>;
  authorName?: SlotComponentProps<'div', {}, MessageGroupOwnerState>;
  groupTimestamp?: SlotComponentProps<'span', {}, MessageGroupOwnerState>;
}

export interface MessageGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  children?: React.ReactNode;
  messageId: string;
  index?: number;
  items?: string[];
  /**
   * A function that maps a message to a group key.
   * Messages that resolve to the same key are visually grouped (shared avatar, author name, etc.).
   * Use `createTimeWindowGroupKey(windowMs)` to replicate time-window-based grouping.
   * @default (message) => message.author?.id ?? message.role ?? ''
   */
  groupKey?: GroupKeyFn;
  slots?: Partial<MessageGroupSlots>;
  slotProps?: MessageGroupSlotProps;
}

type MessageGroupComponent = ((
  props: MessageGroupProps & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element) & { propTypes?: any };

export const MessageGroup = React.forwardRef(function MessageGroup(
  props: MessageGroupProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as MessageGroupComponent;
