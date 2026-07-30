import * as React from 'react';
import type { ChatAdapter, ChatListMessagesResult } from '../../adapters';
import type { ChatStore } from '../../store';
import type { ChatError } from '../../types/chat-error';
import { createRuntimeError, getErrorMessage } from './useChatControllerHelpers';

export interface ConversationActionsRuntimeRef<Cursor = string> {
  adapter: ChatAdapter<Cursor>;
}

export function createConversationActions<Cursor = string>(params: {
  store: ChatStore<Cursor>;
  runtimeRef: React.MutableRefObject<ConversationActionsRuntimeRef<Cursor>>;
  setRuntimeError: (error: ChatError | null) => void;
  stopStreaming: () => void;
  conversationNavigationRequestIdRef: React.MutableRefObject<number>;
  conversationLoadRequestIdRef: React.MutableRefObject<number>;
  historyLoadRequestIdRef: React.MutableRefObject<number>;
}) {
    throw new Error("STUB");
}
