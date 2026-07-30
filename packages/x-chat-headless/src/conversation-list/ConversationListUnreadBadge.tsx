'use client';
import * as React from 'react';
import useSlotProps from '@mui/utils/useSlotProps';
import { SlotComponentProps } from '@mui/utils/types';
import type { ChatConversation } from '../types/chat-entities';
import { type ConversationListUnreadBadgeOwnerState } from './conversationList.types';

export interface ConversationListUnreadBadgeSlots {
  root: React.ElementType;
}

export interface ConversationListUnreadBadgeSlotProps {
  root?: SlotComponentProps<'span', {}, ConversationListUnreadBadgeOwnerState>;
}

export interface ConversationListUnreadBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  conversation: ChatConversation;
  selected?: boolean;
  unread?: boolean;
  focused?: boolean;
  slots?: Partial<ConversationListUnreadBadgeSlots>;
  slotProps?: ConversationListUnreadBadgeSlotProps;
}

function formatUnreadCount(count: number): string | number {
  return count > 99 ? '99+' : count;
}

type ConversationListUnreadBadgeComponent = ((
  props: ConversationListUnreadBadgeProps & React.RefAttributes<HTMLSpanElement>,
) => React.JSX.Element | null) & { propTypes?: any };

export const ConversationListUnreadBadge = React.forwardRef(function ConversationListUnreadBadge(
  props: ConversationListUnreadBadgeProps,
  ref: React.Ref<HTMLSpanElement>,
) {
    throw new Error("STUB");
}) as ConversationListUnreadBadgeComponent;
