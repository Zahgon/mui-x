'use client';
import * as React from 'react';
import type {
  ChatDynamicToolMessagePart,
  ChatFileMessagePart,
  ChatMessagePart,
  ChatReasoningMessagePart,
  ChatSourceDocumentMessagePart,
  ChatSourceUrlMessagePart,
  ChatStepStartMessagePart,
  ChatTextMessagePart,
  ChatToolMessagePart,
} from '../types/chat-message-parts';
import type { ChatPartRenderer } from '../renderers/chatPartRenderer';
import { safeFileUri, safeUri } from './parts/partUtils';

function JsonBlock(props: { value: unknown }) {
    throw new Error("STUB");
}

export const renderDefaultTextPart: ChatPartRenderer<ChatTextMessagePart> = ({ part }) => { throw new Error("STUB"); };

export const renderDefaultReasoningPart: ChatPartRenderer<ChatReasoningMessagePart> = ({
  part,
}) => { throw new Error("STUB"); };

function ToolRenderer(props: { part: ChatToolMessagePart | ChatDynamicToolMessagePart }) {
    throw new Error("STUB");
}

export const renderDefaultToolPart: ChatPartRenderer<ChatToolMessagePart> = ({ part }) => { throw new Error("STUB"); };

export const renderDefaultDynamicToolPart: ChatPartRenderer<ChatDynamicToolMessagePart> = ({
  part,
}) => { throw new Error("STUB"); };

export const renderDefaultFilePart: ChatPartRenderer<ChatFileMessagePart> = ({ part }) => {
    throw new Error("STUB");
};

export const renderDefaultSourceUrlPart: ChatPartRenderer<ChatSourceUrlMessagePart> = ({
  part,
}) => { throw new Error("STUB"); };

export const renderDefaultSourceDocumentPart: ChatPartRenderer<ChatSourceDocumentMessagePart> = ({
  part,
}) => { throw new Error("STUB"); };

export const renderDefaultStepStartPart: ChatPartRenderer<ChatStepStartMessagePart> = () => { throw new Error("STUB"); };

export const renderDefaultDataPart: ChatPartRenderer<
  Extract<ChatMessagePart, { type: `data-${string}` }>
> = ({ part }) => { throw new Error("STUB"); };

export function getDefaultMessagePartRenderer(part: ChatMessagePart): ChatPartRenderer<any> | null {
  switch (part.type) {
    case 'text':
      return renderDefaultTextPart;
    case 'reasoning':
      return renderDefaultReasoningPart;
    case 'tool':
      return renderDefaultToolPart;
    case 'dynamic-tool':
      return renderDefaultDynamicToolPart;
    case 'file':
      return renderDefaultFilePart;
    case 'source-url':
      return renderDefaultSourceUrlPart;
    case 'source-document':
      return renderDefaultSourceDocumentPart;
    case 'step-start':
      return renderDefaultStepStartPart;
    default:
      return part.type.startsWith('data-') ? renderDefaultDataPart : null;
  }
}
