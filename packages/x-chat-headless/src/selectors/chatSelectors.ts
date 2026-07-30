import { createSelector, createSelectorMemoized } from '@mui/x-internals/store';
import { resolveMessageAuthor } from '../internals/messageAuthor';
import type { ChatConversation, ChatMessage } from '../types/chat-entities';
import type { ChatError } from '../types/chat-error';
import type { ChatInternalState } from '../types/chat-state';
import type { ChatStoreParameters } from '../store';

type State<Cursor = string> = ChatInternalState<Cursor>;

export const chatSelectors = {
  messageIds: createSelector((state: State) => { throw new Error("STUB"); }),
  messagesById: createSelector((state: State) => { throw new Error("STUB"); }),
  conversationIds: createSelector((state: State) => { throw new Error("STUB"); }),
  conversationsById: createSelector((state: State) => { throw new Error("STUB"); }),
  activeConversationId: createSelector((state: State) => { throw new Error("STUB"); }),
  isStreaming: createSelector((state: State) => { throw new Error("STUB"); }),
  streamingConversationId: createSelector((state: State) => { throw new Error("STUB"); }),
  hasMoreHistory: createSelector((state: State) => { throw new Error("STUB"); }),
  isLoadingHistory: createSelector((state: State) => { throw new Error("STUB"); }),
  error: createSelector((state: State) => { throw new Error("STUB"); }),
  messages: createSelectorMemoized(
    (state: State) => { throw new Error("STUB"); },
    (state: State) => { throw new Error("STUB"); },
    (messageIds, messagesById): ChatMessage[] => { throw new Error("STUB"); },
  ),
  message: createSelector(
    (state: State) => { throw new Error("STUB"); },
    (messagesById, id: string): ChatMessage | undefined => { throw new Error("STUB"); },
  ),
  messageAuthor: createSelectorMemoized(
    (state: State) => { throw new Error("STUB"); },
    (state: State) => { throw new Error("STUB"); },
    (state: State) => { throw new Error("STUB"); },
    (
      messagesById,
      conversationsById,
      activeConversationId,
      id: string,
      parameters: ChatStoreParameters<any>,
    ) => {
        throw new Error("STUB");
    },
  ),
  messageError: createSelector(
    (state: State) => { throw new Error("STUB"); },
    (state: State) => { throw new Error("STUB"); },
    (messageErrorsById, messagesById, id: string): ChatError | null => {
        throw new Error("STUB");
    },
  ),
  conversations: createSelectorMemoized(
    (state: State) => { throw new Error("STUB"); },
    (state: State) => { throw new Error("STUB"); },
    (conversationIds, conversationsById): ChatConversation[] =>
      { throw new Error("STUB"); },
  ),
  conversation: createSelector(
    (state: State) => { throw new Error("STUB"); },
    (conversationsById, id: string): ChatConversation | undefined => { throw new Error("STUB"); },
  ),
  activeConversation: createSelector(
    (state: State) => { throw new Error("STUB"); },
    (state: State) => { throw new Error("STUB"); },
    (activeConversationId, conversationsById): ChatConversation | undefined =>
      { throw new Error("STUB"); },
  ),
  messageCount: createSelector(
    (state: State) => { throw new Error("STUB"); },
    (messageIds): number => { throw new Error("STUB"); },
  ),
  conversationCount: createSelector(
    (state: State) => { throw new Error("STUB"); },
    (conversationIds): number => { throw new Error("STUB"); },
  ),
  composerValue: createSelector((state: State) => { throw new Error("STUB"); }),
  composerAttachments: createSelector((state: State) => { throw new Error("STUB"); }),
  /**
   * Returns the IDs of users currently typing in the given conversation.
   * If no conversationId argument is provided, falls back to the active conversation.
   */
  typingUserIds: createSelectorMemoized(
    (state: State) => { throw new Error("STUB"); },
    (state: State) => { throw new Error("STUB"); },
    (typingByConversation, activeConversationId, conversationId: string | undefined): string[] => {
        throw new Error("STUB");
    },
  ),
  /**
   * Returns the IDs of users currently typing in the active conversation.
   * Use this instead of `typingUserIds(state, undefined)` to avoid creating an inline wrapper
   * function that would defeat memoization.
   */
  typingUserIdsForActiveConversation: createSelectorMemoized(
    (state: State) => { throw new Error("STUB"); },
    (state: State) => { throw new Error("STUB"); },
    (typingByConversation, activeConversationId): string[] => {
        throw new Error("STUB");
    },
  ),
} as const;

// `messageAuthor` intentionally has no standalone `select*` alias: it requires
// trailing `(id, parameters: ChatStoreParameters)` args and is consumed via the
// internal useMessageAuthor plumbing rather than ad-hoc useStore calls.
export const selectMessageIds = chatSelectors.messageIds;
export const selectMessagesById = chatSelectors.messagesById;
export const selectConversationIds = chatSelectors.conversationIds;
export const selectConversationsById = chatSelectors.conversationsById;
export const selectActiveConversationId = chatSelectors.activeConversationId;
export const selectIsStreaming = chatSelectors.isStreaming;
export const selectStreamingConversationId = chatSelectors.streamingConversationId;
export const selectHasMoreHistory = chatSelectors.hasMoreHistory;
export const selectIsLoadingHistory = chatSelectors.isLoadingHistory;
export const selectError = chatSelectors.error;
export const selectMessages = chatSelectors.messages;
export const selectMessage = chatSelectors.message;
export const selectMessageError = chatSelectors.messageError;
export const selectConversations = chatSelectors.conversations;
export const selectConversation = chatSelectors.conversation;
export const selectActiveConversation = chatSelectors.activeConversation;
export const selectMessageCount = chatSelectors.messageCount;
export const selectConversationCount = chatSelectors.conversationCount;
export const selectComposerValue = chatSelectors.composerValue;
export const selectComposerAttachments = chatSelectors.composerAttachments;
export const selectTypingUserIds = chatSelectors.typingUserIds;
export const selectTypingUserIdsForActiveConversation =
  chatSelectors.typingUserIdsForActiveConversation;
