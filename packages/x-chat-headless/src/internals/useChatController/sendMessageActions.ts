import * as React from 'react';
import { warnOnce } from '@mui/x-internals/warning';
import type { ChatAdapter } from '../../adapters';
import { processStream, type ProcessStreamResult } from '../../stream';
import type { ChatStore } from '../../store';
import type {
  ChatMessage,
  ChatOnData,
  ChatOnError,
  ChatOnFinish,
  ChatOnToolCall,
} from '../../types';
import type { ChatDraftAttachment } from '../../types/chat-entities';
import type { ChatError } from '../../types/chat-error';
import { createLocalId } from '../createLocalId';
import type { UseChatSendMessageInput } from '../../types/chat-callbacks';
import {
  getMessages,
  createRuntimeError,
  getErrorMessage,
  findAssistantMessageIdsForRetry,
  removeAssistantMessageIds,
  resolveRegenerateAnchor,
} from './useChatControllerHelpers';
import { getFinishMessage } from '../../stream/streamHelpers';

export interface SendMessageActionsRuntimeRef<Cursor = string> {
  adapter: ChatAdapter<Cursor>;
  streamFlushInterval?: number;
  onToolCall?: ChatOnToolCall;
  onFinish?: ChatOnFinish;
  onData?: ChatOnData;
  onError?: ChatOnError;
}

export function createSendMessageActions<Cursor = string>(params: {
  store: ChatStore<Cursor>;
  storeUnknown: ChatStore<unknown>;
  runtimeRef: React.MutableRefObject<SendMessageActionsRuntimeRef<Cursor>>;
  setRuntimeError: (error: ChatError | null) => void;
  assistantMessageIdByUserMessageIdRef: React.MutableRefObject<Map<string, string>>;
}) {
    throw new Error("STUB");
}
