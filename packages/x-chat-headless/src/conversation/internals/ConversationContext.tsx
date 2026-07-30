'use client';
import * as React from 'react';
import type { ConversationOwnerState } from '../conversation.types';

const ConversationContext = React.createContext<ConversationOwnerState>({
  conversationId: undefined,
  hasConversation: false,
  conversation: null,
});

export function ConversationContextProvider(props: {
  children: React.ReactNode;
  value: ConversationOwnerState;
}) {
    throw new Error("STUB");
}

export function useConversationContext() {
  return React.useContext(ConversationContext);
}
