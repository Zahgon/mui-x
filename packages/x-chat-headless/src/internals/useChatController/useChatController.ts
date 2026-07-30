'use client';
import * as React from 'react';
import { useStoreEffect } from '@mui/x-internals/store';
import type { ChatAdapter } from '../../adapters';
import { asCursorAgnosticChatStore, type ChatStore } from '../../store';
import type {
  ChatAddToolApproveResponseInput,
  ChatMessage,
  ChatOnData,
  ChatOnError,
  ChatOnFinish,
  ChatOnToolCall,
} from '../../types';
import type { ChatError } from '../../types/chat-error';
import type { UseChatSendMessageInput } from '../../types/chat-callbacks';
import {
  getMessages,
  createRuntimeError,
  getErrorMessage,
  getMessageIdFromError,
} from './useChatControllerHelpers';
import { createRealtimeActions } from './realtimeActions';
import { createConversationActions } from './conversationActions';
import { createSendMessageActions } from './sendMessageActions';
import { createTypingActions } from './typingActions';
import type { ChatFeatures } from '../../ChatProvider';

export type { UseChatSendMessageInput };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface ChatRuntimeActions<Cursor = string> {
  sendMessage(input: UseChatSendMessageInput): Promise<void>;
  stopStreaming(): void;
  loadMoreHistory(): Promise<void>;
  setActiveConversation(id: string | undefined): Promise<void>;
  retry(messageId: string): Promise<void>;
  regenerate(messageId: string): Promise<void>;
  setError(error: ChatError | null): void;
  addToolApprovalResponse(input: ChatAddToolApproveResponseInput): Promise<void>;
}

interface UseChatControllerParameters<Cursor = string> {
  store: ChatStore<Cursor>;
  adapter: ChatAdapter<Cursor>;
  onToolCall?: ChatOnToolCall;
  onFinish?: ChatOnFinish;
  onData?: ChatOnData;
  onError?: ChatOnError;
  streamFlushInterval?: number;
  features?: ChatFeatures;
}

export function useChatController<Cursor = string>({
  store,
  adapter,
  onToolCall,
  onFinish,
  onData,
  onError,
  streamFlushInterval,
  features,
}: UseChatControllerParameters<Cursor>): ChatRuntimeActions<Cursor> {
    throw new Error("STUB");
}
