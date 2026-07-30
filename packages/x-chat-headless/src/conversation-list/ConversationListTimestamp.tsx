'use client';
import * as React from 'react';
import useSlotProps from '@mui/utils/useSlotProps';
import { SlotComponentProps } from '@mui/utils/types';
import type { ChatConversation } from '../types/chat-entities';
import { useChatLocaleText } from '../chat/internals/ChatLocaleContext';
import { type ConversationListTimestampOwnerState } from './conversationList.types';

export interface ConversationListTimestampSlots {
  root: React.ElementType;
}

export interface ConversationListTimestampSlotProps {
  root?: SlotComponentProps<'div', {}, ConversationListTimestampOwnerState>;
}

export interface ConversationListTimestampProps extends React.HTMLAttributes<HTMLDivElement> {
  conversation: ChatConversation;
  selected?: boolean;
  unread?: boolean;
  focused?: boolean;
  slots?: Partial<ConversationListTimestampSlots>;
  slotProps?: ConversationListTimestampSlotProps;
}

type ConversationListTimestampComponent = ((
  props: ConversationListTimestampProps & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element | null) & { propTypes?: any };

export const ConversationListTimestamp = React.forwardRef(function ConversationListTimestamp(
  props: ConversationListTimestampProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as ConversationListTimestampComponent;
