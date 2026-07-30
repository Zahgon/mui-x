'use client';
import * as React from 'react';
import useSlotProps from '@mui/utils/useSlotProps';
import { SlotComponentProps } from '@mui/utils/types';
import { useChat } from '../hooks/useChat';
import { useConversations } from '../hooks/useConversation';
import type { ChatConversation } from '../types/chat-entities';
import { markChatLayoutPane } from '../chat/internals/chatLayoutPaneKind';
import { useChatLocaleText } from '../chat/internals/ChatLocaleContext';
import { ConversationContextProvider } from './internals/ConversationContext';
import { type ConversationRootOwnerState } from './conversation.types';

export interface ConversationRootSlots {
  root: React.ElementType;
}

export interface ConversationRootSlotProps {
  root?: SlotComponentProps<'div', {}, ConversationRootOwnerState>;
}

export interface ConversationRootProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'children'
> {
  children?: React.ReactNode;
  slots?: Partial<ConversationRootSlots>;
  slotProps?: ConversationRootSlotProps;
}

type ConversationRootComponent = ((
  props: ConversationRootProps & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element) & { propTypes?: any };

function getActiveConversation(
  conversations: ChatConversation[],
  activeConversationId: string | undefined,
) {
  if (activeConversationId == null) {
    return null;
  }

  return conversations.find((conversation) => { throw new Error("STUB"); }) ?? null;
}

export const ConversationRoot = markChatLayoutPane(
  React.forwardRef(function ConversationRoot(
    props: ConversationRootProps,
    ref: React.Ref<HTMLDivElement>,
  ) {
      throw new Error("STUB");
  }) as ConversationRootComponent,
  'thread',
);
