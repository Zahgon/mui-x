'use client';
import * as React from 'react';
import type { ChatError } from '../../types/chat-error';
import type { ChatDraftAttachment, ChatAttachmentsConfig } from '../../types/chat-entities';
import type { ComposerOwnerState } from '../composer.types';

export interface ComposerContextValue extends ComposerOwnerState {
  value: string;
  setValue(value: string): void;
  submit(): Promise<void>;
  addAttachment(file: File): void;
  removeAttachment(localId: string): void;
  attachments: ChatDraftAttachment[];
  attachmentConfig?: ChatAttachmentsConfig;
  error: ChatError | null;
  setComposerIsComposing(value: boolean): void;
}

const defaultOwnerState: ComposerOwnerState = {
  isSubmitting: false,
  hasValue: false,
  isStreaming: false,
  attachmentCount: 0,
  disabled: false,
};

const ComposerContext = React.createContext<ComposerContextValue>({
  ...defaultOwnerState,
  value: '',
  setValue: () => {
      throw new Error("STUB");
  },
  submit: async () => {
      throw new Error("STUB");
  },
  addAttachment: () => {
      throw new Error("STUB");
  },
  removeAttachment: () => {
      throw new Error("STUB");
  },
  attachments: [],
  attachmentConfig: undefined,
  error: null,
  setComposerIsComposing: () => {
      throw new Error("STUB");
  },
});

export function ComposerContextProvider(props: {
  children: React.ReactNode;
  value: ComposerContextValue;
}) {
    throw new Error("STUB");
}

export function useComposerContext() {
  return React.useContext(ComposerContext);
}
