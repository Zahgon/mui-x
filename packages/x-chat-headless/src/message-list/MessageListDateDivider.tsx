'use client';
import * as React from 'react';
import useSlotProps from '@mui/utils/useSlotProps';
import { SlotComponentProps } from '@mui/utils/types';
import { useIsHydrated } from '@mui/x-internals/useIsHydrated';
import { useMessage, useMessageIds } from '../hooks/useMessage';
import { type MessageListDateDividerOwnerState } from './messageList.types';
import type { ChatMessage } from '../types/chat-entities';

function resolveMessageIndex(messageId: string, index: number | undefined, items: string[]) {
  if (index != null) {
    return index;
  }

  return items.indexOf(messageId);
}

function parseDate(value: string | undefined) {
  if (!value) {
    return null;
  }

  const parsed = new Date(value);

  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function formatIsoDay(date: Date) {
  return date.toISOString().slice(0, 10);
}

function formatLocalDate(date: Date) {
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function isSameCalendarDay(left: Date, right: Date) {
  return formatIsoDay(left) === formatIsoDay(right);
}

export interface MessageListDateDividerSlots {
  divider: React.ElementType;
  line: React.ElementType;
  label: React.ElementType;
}

export interface MessageListDateDividerSlotProps {
  divider?: SlotComponentProps<'div', {}, MessageListDateDividerOwnerState>;
  line?: SlotComponentProps<'div', {}, MessageListDateDividerOwnerState>;
  label?: SlotComponentProps<'div', {}, MessageListDateDividerOwnerState>;
}

export interface MessageListDateDividerProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'children'
> {
  messageId: string;
  index?: number;
  items?: string[];
  formatDate?: (date: Date) => React.ReactNode;
  /**
   * Decides whether the divider renders above the message, replacing the
   * built-in rule when provided. `date`/`previousDate` are the parsed
   * `createdAt` values (`null` when missing or invalid); `previousMessage`
   * is `null` for the first message in the list.
   * @param {object} params The parameters used to decide whether to render the divider.
   * @param {ChatMessage} params.message The message the divider would render above.
   * @param {ChatMessage | null} params.previousMessage The previous message, or `null` for the first message in the list.
   * @param {number} params.index The index of the message in the list.
   * @param {Date | null} params.date The parsed `createdAt` of the message, or `null` when missing or invalid.
   * @param {Date | null} params.previousDate The parsed `createdAt` of the previous message, or `null` when missing or invalid.
   * @returns {boolean} `true` to render the divider above the message.
   * @default Renders when `message.createdAt` falls on a different UTC
   * calendar day than the previous message's.
   */
  shouldShowDivider?: (params: {
    message: ChatMessage;
    previousMessage: ChatMessage | null;
    index: number;
    date: Date | null;
    previousDate: Date | null;
  }) => boolean;
  slots?: Partial<MessageListDateDividerSlots>;
  slotProps?: MessageListDateDividerSlotProps;
}

type MessageListDateDividerComponent = ((
  props: MessageListDateDividerProps & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element | null) & { propTypes?: any };

export const MessageListDateDivider = React.forwardRef(function MessageListDateDivider(
  props: MessageListDateDividerProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as MessageListDateDividerComponent;
