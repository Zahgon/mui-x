'use client';
import * as React from 'react';
import useSlotProps from '@mui/utils/useSlotProps';
import { SlotComponentProps } from '@mui/utils/types';
import { useChatPartRenderer } from '../hooks/useChatPartRenderer';
import type { ChatMessagePart, ChatStepStartMessagePart } from '../types/chat-message-parts';
import type { ChatPartRenderer } from '../renderers/chatPartRenderer';
import { useChatOnToolCall } from '../hooks/useChatOnToolCall';
import { useChatLocaleText } from '../chat/internals/ChatLocaleContext';
import type { ChatLocaleText } from '../chat/internals/chatLocaleText';
import { useMessageContext } from './internals/MessageContext';
import { type MessageContentOwnerState } from './message.types';
import { FilePart, type FilePartExternalProps } from './parts/FilePart';
import { ReasoningPart, type ReasoningPartExternalProps } from './parts/ReasoningPart';
import {
  SourceDocumentPart,
  type SourceDocumentPartExternalProps,
} from './parts/SourceDocumentPart';
import { SourceUrlPart, type SourceUrlPartExternalProps } from './parts/SourceUrlPart';
import { ToolPart, type ToolPartExternalProps } from './parts/ToolPart';

export interface MessageContentSlots {
  content: React.ElementType;
  bubble: React.ElementType;
}

export interface MessageContentSlotProps {
  content?: SlotComponentProps<'div', {}, MessageContentOwnerState>;
  bubble?: SlotComponentProps<'div', {}, MessageContentOwnerState>;
}

export interface TextPartExternalProps {
  /**
   * Custom renderer for text message parts.
   * When provided, this overrides the default plain-text rendering and
   * receives the raw text string (e.g. for markdown-to-JSX conversion).
   * @param {string} text The raw text content of the message part.
   * @returns {React.ReactNode} The rendered text content.
   */
  renderText?: (text: string) => React.ReactNode;
}

export interface MessageContentPartProps {
  text?: TextPartExternalProps;
  reasoning?: ReasoningPartExternalProps;
  tool?: ToolPartExternalProps;
  'dynamic-tool'?: ToolPartExternalProps;
  file?: FilePartExternalProps;
  'source-url'?: SourceUrlPartExternalProps;
  'source-document'?: SourceDocumentPartExternalProps;
}

export interface MessageContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Props forwarded to the built-in unstyled part renderer components.
   * Use this to pass `slots` and `slotProps` to individual part type renderers.
   */
  partProps?: MessageContentPartProps;
  /**
   * @deprecated Use `partProps` instead.
   * Callback to resolve a built-in part renderer for a given part type.
   * @param {ChatMessagePart} part The message part to resolve a renderer for.
   * @param {ChatLocaleText} localeText The locale text for the chat.
   * @returns {ChatPartRenderer<ChatMessagePart> | null} A renderer or null.
   */
  resolveBuiltInPartRenderer?: (
    part: ChatMessagePart,
    localeText: ChatLocaleText,
  ) => ChatPartRenderer<ChatMessagePart> | null;
  /**
   * Content rendered inside the bubble after the message parts.
   * Useful for placing inline metadata (e.g. timestamp, status) inside the bubble.
   */
  afterContent?: React.ReactNode;
  slots?: Partial<MessageContentSlots>;
  slotProps?: MessageContentSlotProps;
}

type MessageContentComponent = ((
  props: MessageContentProps & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element) & { propTypes?: any };

function DefaultPartFallback(props: { part: ChatMessagePart }) {
    throw new Error("STUB");
}

function TextPart(props: { text: string; renderText: (text: string) => React.ReactNode }) {
    throw new Error("STUB");
}

function JsonBlock(props: { value: unknown }) {
    throw new Error("STUB");
}

const renderDefaultStepStartPart: ChatPartRenderer<ChatStepStartMessagePart> = () => { throw new Error("STUB"); };

const renderDefaultDataPart: ChatPartRenderer<
  Extract<ChatMessagePart, { type: `data-${string}` }>
> = ({ part }) => { throw new Error("STUB"); };

function renderDefaultStepStartMessagePart(props: {
  part: ChatStepStartMessagePart;
  index: number;
  message: NonNullable<MessageContentOwnerState['message']>;
  onToolCall: ReturnType<typeof useChatOnToolCall>;
}) {
    throw new Error("STUB");
}

function renderDefaultDataMessagePart(props: {
  part: Extract<ChatMessagePart, { type: `data-${string}` }>;
  index: number;
  message: NonNullable<MessageContentOwnerState['message']>;
  onToolCall: ReturnType<typeof useChatOnToolCall>;
}) {
    throw new Error("STUB");
}

function MessageRenderedPart(props: {
  part: ChatMessagePart;
  index: number;
  message: NonNullable<MessageContentOwnerState['message']>;
  partProps?: MessageContentPartProps;
  resolveBuiltInPartRenderer?: (
    part: ChatMessagePart,
    localeText: ChatLocaleText,
  ) => ChatPartRenderer<ChatMessagePart> | null;
}) {
    throw new Error("STUB");
}

export const MessageContent = React.forwardRef(function MessageContent(
  props: MessageContentProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as MessageContentComponent;
