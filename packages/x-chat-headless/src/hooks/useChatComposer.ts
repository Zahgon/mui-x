'use client';
import * as React from 'react';
import { useStore, useStoreEffect } from '@mui/x-internals/store';
import { useChatRuntimeContext } from '../internals/useChatRuntimeContext';
import { chatSelectors } from '../selectors';
import type { ChatDraftAttachment } from '../types/chat-entities';
import type { ChatInternalState } from '../types/chat-state';
import type { ChatMessagePart } from '../types/chat-message-parts';
import { createLocalId } from '../internals/createLocalId';
import { useChatStore } from './useChatStore';

export interface UseChatComposerValue {
  value: string;
  setValue(value: string): void;
  attachments: ChatDraftAttachment[];
  addAttachment(file: File): void;
  removeAttachment(localId: string): void;
  clear(): void;
  submit(): Promise<void>;
  isSubmitting: boolean;
}

function createAttachmentPreviewUrl(file: File) {
  if (!file.type.startsWith('image/')) {
    return undefined;
  }

  if (typeof URL === 'undefined' || typeof URL.createObjectURL !== 'function') {
    return undefined;
  }

  return URL.createObjectURL(file);
}

function revokeAttachmentPreviewUrl(previewUrl: string) {
  if (typeof URL === 'undefined' || typeof URL.revokeObjectURL !== 'function') {
    return;
  }

  URL.revokeObjectURL(previewUrl);
}

export function useChatComposer<Cursor = string>(): UseChatComposerValue {
  const store = useChatStore<Cursor>();
  const { actions } = useChatRuntimeContext<Cursor>();
  // URLs the composer currently owns (still attached to the draft).
  const ownedPreviewUrlsRef = React.useRef(new Map<string, string>());
  // URLs that have been transferred to a sent message (#7). Each entry is
  // keyed by `messageId` and holds the local-id → previewUrl mapping for
  // attachments that message references. We revoke them when the message is
  // removed from the store, or on unmount.
  const messageOwnedPreviewUrlsRef = React.useRef(new Map<string, Map<string, string>>());
  const selectComposerValue = chatSelectors.composerValue as (
    state: ChatInternalState<Cursor>,
  ) => ReturnType<typeof chatSelectors.composerValue>;
  const selectComposerAttachments = chatSelectors.composerAttachments as (
    state: ChatInternalState<Cursor>,
  ) => ReturnType<typeof chatSelectors.composerAttachments>;
  const selectIsStreaming = chatSelectors.isStreaming as (
    state: ChatInternalState<Cursor>,
  ) => ReturnType<typeof chatSelectors.isStreaming>;
  const selectMessageIds = chatSelectors.messageIds as (
    state: ChatInternalState<Cursor>,
  ) => ReturnType<typeof chatSelectors.messageIds>;
  const value = useStore(store, selectComposerValue);
  const attachments = useStore(store, selectComposerAttachments);
  const isSubmitting = useStore(store, selectIsStreaming);

  const setValue = React.useCallback(
    (nextValue: string) => {
          throw new Error("STUB");
      },
    [store],
  );

  React.useEffect(() => {
      throw new Error("STUB");
  }, [attachments]);

  // Revoke URLs once the message that owns them is removed from the store.
  useStoreEffect(store, selectMessageIds, (previousIds, nextIds) => {
      throw new Error("STUB");
  });

  React.useEffect(
    () => { throw new Error("STUB"); },
    [],
  );

  const addAttachment = React.useCallback(
    (file: File) => {
          throw new Error("STUB");
      },
    [store],
  );

  const removeAttachment = React.useCallback(
    (localId: string) => {
          throw new Error("STUB");
      },
    [store],
  );

  const clear = React.useCallback(() => {
      throw new Error("STUB");
  }, [store]);

  const submit = React.useCallback(async () => {
      throw new Error("STUB");
  }, [actions, store]);

  return React.useMemo(
    () => { throw new Error("STUB"); },
    [addAttachment, attachments, clear, isSubmitting, removeAttachment, setValue, submit, value],
  );
}
