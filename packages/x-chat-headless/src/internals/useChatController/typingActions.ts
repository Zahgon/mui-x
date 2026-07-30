import * as React from 'react';
import { warnOnce } from '@mui/x-internals/warning';
import type { ChatAdapter } from '../../adapters';
import type { ChatStore } from '../../store';
import type { ChatFeatures } from '../../ChatProvider';

export interface TypingActionsRuntimeRef<Cursor = string> {
  adapter: ChatAdapter<Cursor>;
  features?: ChatFeatures;
}

function warnSetTypingFailed(): void {
  warnOnce([
    'MUI X Chat: An `adapter.setTyping()` call failed while sending an outbound typing signal.',
    'Typing signals are advisory and best-effort, so the failure was swallowed and the call is not retried.',
    'Make `setTyping()` resilient (handle network errors) if the remote "is typing…" state must stay accurate.',
  ]);
}

/**
 * Outbound typing-signal wiring. Feature-gated (`features.typingSignal`, default
 * off). Mirrors the per-concern action-factory pattern used by
 * `createRealtimeActions` / `createConversationActions`.
 *
 * Maintains a single `lastSent` latch (`{ conversationId, isTyping } | null`)
 * keyed by conversation so a state is never re-sent for the same conversation
 * (no call storms during continuous typing). At most one conversation can be
 * "typing" because there is a single composer.
 */
export function createTypingActions(params: {
  store: ChatStore<unknown>;
  runtimeRef: React.MutableRefObject<TypingActionsRuntimeRef<unknown>>;
}) {
    throw new Error("STUB");
}
