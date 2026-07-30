import { Store } from '@mui/x-internals/store';
import type {
  ChatConversation,
  ChatDraftAttachment,
  ChatMessage,
  ChatMessageAuthorGetterProps,
  ChatRole,
  ChatUser,
} from '../types/chat-entities';
import type { ChatError } from '../types/chat-error';
import type { ChatInternalState } from '../types/chat-state';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface ChatStoreParameters<Cursor = string> extends ChatMessageAuthorGetterProps {
  /**
   * Known chat participants.
   * Used to derive the local user / assistant user when explicit props are omitted,
   * and to enrich message authors by resolved author id at render time.
   */
  members?: ChatUser[];
  /**
   * The local user sending messages.
   * If omitted, derived from `members` by finding the entry with `role === 'user'`.
   * Also used to enrich message authors when a rendered message resolves to `currentUser.id`.
   */
  currentUser?: ChatUser;
  /** Locale-driven fallback labels for messages without explicit author information. */
  roleDisplayNames?: Partial<Record<ChatRole, string>>;
  messages?: ChatMessage[];
  /** The initial messages when uncontrolled. Ignored after initialization and when `messages` is provided. */
  initialMessages?: ChatMessage[];
  onMessagesChange?: (messages: ChatMessage[]) => void;
  conversations?: ChatConversation[];
  /** The initial conversations when uncontrolled. Ignored after initialization and when `conversations` is provided. */
  initialConversations?: ChatConversation[];
  onConversationsChange?: (conversations: ChatConversation[]) => void;
  activeConversationId?: string;
  /** Internal flag used to distinguish a controlled `undefined` active conversation from an uncontrolled model. */
  activeConversationIdControlled?: boolean;
  /** The initial active conversation ID when uncontrolled. Ignored after initialization and when `activeConversationId` is provided. */
  initialActiveConversationId?: string;
  onActiveConversationChange?: (conversationId: string | undefined) => void;
  composerValue?: string;
  /** The initial composer value when uncontrolled. Ignored after initialization and when `composerValue` is provided. */
  initialComposerValue?: string;
  onComposerValueChange?: (value: string) => void;
}

export type ControlledModel =
  'messages' | 'conversations' | 'activeConversationId' | 'composerValue';

export interface ChatStoreConstructor<Cursor = string> {
  new (parameters: ChatStoreParameters<Cursor>): ChatStore<Cursor>;
}

function applyModelInitialValue<T>(
  controlledValue: T | undefined,
  defaultValue: T | undefined,
  fallback: T,
): T {
  if (controlledValue !== undefined) {
    return controlledValue;
  }

  if (defaultValue !== undefined) {
    return defaultValue;
  }

  return fallback;
}

function normalizeById<T extends { id: string }>(
  items: T[],
): { ids: string[]; byId: Record<string, T> } {
  const ids: string[] = [];
  const byId: Record<string, T> = {};
  const seen = new Set<string>();

  for (const item of items) {
    byId[item.id] = item;

    if (!seen.has(item.id)) {
      seen.add(item.id);
      ids.push(item.id);
    }
  }

  return { ids, byId };
}

function pruneMessageErrorsById(
  messageErrorsById: Record<string, ChatError | undefined>,
  messageIds: string[],
): Record<string, ChatError | undefined> {
    throw new Error("STUB");
}

/**
 * Returns `prevIds` when the two arrays contain the same strings in the same
 * order, avoiding a new reference that would trigger downstream re-renders
 * (e.g. `useMessageIds()`) when only message bodies changed.
 */
function stableIds(prevIds: string[], nextIds: string[]): string[] {
    throw new Error("STUB");
}

function deriveStateFromParameters<Cursor = string>(parameters: ChatStoreParameters<Cursor>) {
  const { ids: messageIds, byId: messagesById } = normalizeById(
    applyModelInitialValue(parameters.messages, parameters.initialMessages, []),
  );
  const { ids: conversationIds, byId: conversationsById } = normalizeById(
    applyModelInitialValue(parameters.conversations, parameters.initialConversations, []),
  );

  return {
    conversationIds,
    conversationsById,
    activeConversationId: parameters.activeConversationIdControlled
      ? parameters.activeConversationId
      : applyModelInitialValue(
          parameters.activeConversationId,
          parameters.initialActiveConversationId,
          undefined,
        ),
    messageIds,
    messagesById,
    composerValue: applyModelInitialValue(
      parameters.composerValue,
      parameters.initialComposerValue,
      '',
    ),
  };
}

export class ChatStore<Cursor = string> extends Store<ChatInternalState<Cursor>> {
  public parameters: ChatStoreParameters<Cursor>;

  /** Local (sending) user: explicit prop → members list → active conversation participants. */
  get currentUser(): ChatUser | undefined {
      throw new Error("STUB");
  }

  /** Assistant member: members list → active conversation participants. */
  get assistantUser(): ChatUser | undefined {
      throw new Error("STUB");
  }

  private getMemberByRole(role: 'user' | 'assistant', explicit?: ChatUser): ChatUser | undefined {
      throw new Error("STUB");
  }

  private dirtyControlledModels = new Set<ControlledModel>();

  /** Whether any controlled model has been internally mutated since the last parameter sync. */
  get hasDirtyControlledModels(): boolean {
      throw new Error("STUB");
  }

  public constructor(parameters: ChatStoreParameters<Cursor> = {}) {
      throw new Error("STUB");
  }

  public updateStateFromParameters = (parameters: ChatStoreParameters<Cursor>) => {
    const newState: Partial<ChatInternalState<Cursor>> = {};

    if (
      parameters.messages !== undefined &&
      (parameters.messages !== this.parameters.messages ||
        this.dirtyControlledModels.has('messages'))
    ) {
      const { ids: messageIds, byId: messagesById } = normalizeById(parameters.messages);
      newState.messageIds = stableIds(this.state.messageIds, messageIds);
      newState.messagesById = messagesById;
      newState.messageErrorsById = pruneMessageErrorsById(this.state.messageErrorsById, messageIds);
      this.dirtyControlledModels.delete('messages');
    }

    if (
      parameters.conversations !== undefined &&
      (parameters.conversations !== this.parameters.conversations ||
        this.dirtyControlledModels.has('conversations'))
    ) {
      const { ids: conversationIds, byId: conversationsById } = normalizeById(
        parameters.conversations,
      );
      newState.conversationIds = stableIds(this.state.conversationIds, conversationIds);
      newState.conversationsById = conversationsById;
      this.dirtyControlledModels.delete('conversations');
    }

    if (
      parameters.activeConversationIdControlled &&
      (parameters.activeConversationId !== this.parameters.activeConversationId ||
        this.dirtyControlledModels.has('activeConversationId'))
    ) {
      newState.activeConversationId = parameters.activeConversationId;
      this.dirtyControlledModels.delete('activeConversationId');
    }

    if (
      parameters.composerValue !== undefined &&
      (parameters.composerValue !== this.parameters.composerValue ||
        this.dirtyControlledModels.has('composerValue'))
    ) {
      newState.composerValue = parameters.composerValue;
      this.dirtyControlledModels.delete('composerValue');
    }

    this.parameters = parameters;
    this.update(newState);
  };

  /**
   * Returns a cleanup function to be used as a React effect teardown.
   * Called by `useChatInstance` when the store instance changes or the component unmounts.
   */
  public disposeEffect = (): (() => void) => {
      throw new Error("STUB");
  };

  public registerStoreEffect = <Value>(
    selector: (state: ChatInternalState<Cursor>) => Value,
    effect: (previous: Value, next: Value) => void,
  ) => {
      throw new Error("STUB");
  };

  public addMessage = (message: ChatMessage) => {
    const nextMessageIds = this.state.messagesById[message.id]
      ? this.state.messageIds
      : [...this.state.messageIds, message.id];

    this.dirtyControlledModels.add('messages');
    this.update({
      messageIds: nextMessageIds,
      messagesById: {
        ...this.state.messagesById,
        [message.id]: message,
      },
    });
  };

  public updateMessage = (id: string, patch: Partial<ChatMessage>) => {
    const currentMessage = this.state.messagesById[id];

    if (!currentMessage) {
      return;
    }

    this.dirtyControlledModels.add('messages');
    this.update({
      messagesById: {
        ...this.state.messagesById,
        [id]: {
          ...currentMessage,
          ...patch,
        },
      },
    });
  };

  public removeMessage = (id: string) => {
      throw new Error("STUB");
  };

  public prependMessages = (messages: ChatMessage[]) => {
      throw new Error("STUB");
  };

  public setMessages = (messages: ChatMessage[]) => {
      throw new Error("STUB");
  };

  public setConversations = (conversations: ChatConversation[]) => {
    const { ids: conversationIds, byId: conversationsById } = normalizeById(conversations);

    this.dirtyControlledModels.add('conversations');
    this.update({
      conversationIds,
      conversationsById,
    });
  };

  public addConversation = (conversation: ChatConversation) => {
      throw new Error("STUB");
  };

  public updateConversation = (id: string, patch: Partial<ChatConversation>) => {
      throw new Error("STUB");
  };

  public removeConversation = (id: string) => {
      throw new Error("STUB");
  };

  public setActiveConversation = (id: string | undefined) => {
    this.dirtyControlledModels.add('activeConversationId');
    this.set('activeConversationId', id);
  };

  public setTypingUser = (conversationId: string, userId: string, isTyping: boolean) => {
      throw new Error("STUB");
  };

  public setComposerValue = (value: string) => {
      throw new Error("STUB");
  };

  public setComposerIsComposing = (value: boolean) => {
    this.set('composerIsComposing', value);
  };

  public setComposerAttachments = (attachments: ChatDraftAttachment[]) => {
      throw new Error("STUB");
  };

  public addComposerAttachment = (attachment: ChatDraftAttachment) => {
      throw new Error("STUB");
  };

  public removeComposerAttachment = (localId: string) => {
      throw new Error("STUB");
  };

  public clearComposer = () => {
      throw new Error("STUB");
  };

  public setStreaming = (value: boolean, conversationId?: string) => {
      throw new Error("STUB");
  };

  public setHistoryLoading = (value: boolean) => {
      throw new Error("STUB");
  };

  public setActiveStreamAbortController = (value: AbortController | null) => {
      throw new Error("STUB");
  };

  public setError = (error: ChatError | null) => {
    this.set('error', error);
  };

  public setMessageError = (messageId: string, error: ChatError | null) => {
      throw new Error("STUB");
  };

  public clearMessageError = (messageId: string) => {
      throw new Error("STUB");
  };

  public clearAllMessageErrors = () => {
      throw new Error("STUB");
  };

  public setHistoryState = ({
    cursor,
    hasMore,
  }: {
    cursor: Cursor | undefined;
    hasMore: boolean;
  }) => {
      throw new Error("STUB");
  };

  public resetMessages = () => {
      throw new Error("STUB");
  };
}

/**
 * Narrows the one intentional cursor-erasure boundary used by helpers that
 * operate only on message/conversation state and never touch history cursors.
 */
export function asCursorAgnosticChatStore<Cursor>(store: ChatStore<Cursor>): ChatStore<unknown> {
  return store as unknown as ChatStore<unknown>;
}
