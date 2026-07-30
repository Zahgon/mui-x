import * as React from 'react';
import type { ChatStore } from '../../store';
import type { ChatRealtimeEvent } from '../../types/chat-realtime';
import { applyPresenceUpdate, applyReadUpdate } from './useChatControllerHelpers';

export function createRealtimeActions(params: {
  store: ChatStore<unknown>;
  conversationNavigationRequestIdRef: React.MutableRefObject<number>;
}) {
    throw new Error("STUB");
}
