'use client';
import * as React from 'react';
import useSlotProps from '@mui/utils/useSlotProps';
import type { SlotComponentProps } from '@mui/utils/types';
import type { ChatPartRenderer, ChatPartRendererProps } from '../../renderers/chatPartRenderer';
import type { ChatReasoningMessagePart } from '../../types/chat-message-parts';
import type { ChatRole } from '../../types/chat-entities';
import { useChatLocaleText } from '../../chat/internals/ChatLocaleContext';
import { useMessageContentTabIndex } from '../../message-list/internals/MessageRovingContext';

export interface ReasoningPartOwnerState {
  messageId: string;
  role: ChatRole;
  streaming: boolean;
}

export interface ReasoningPartSlots {
  root: React.ElementType;
  summary: React.ElementType;
  content: React.ElementType;
}

export interface ReasoningPartSlotProps {
  root?: SlotComponentProps<'details', {}, ReasoningPartOwnerState>;
  summary?: SlotComponentProps<'summary', {}, ReasoningPartOwnerState>;
  content?: SlotComponentProps<'div', {}, ReasoningPartOwnerState>;
}

export interface ReasoningPartProps extends ChatPartRendererProps<ChatReasoningMessagePart> {
  className?: string;
  slots?: Partial<ReasoningPartSlots>;
  slotProps?: ReasoningPartSlotProps;
}

export type ReasoningPartExternalProps = Omit<
  ReasoningPartProps,
  'index' | 'message' | 'onToolCall' | 'part'
>;

type ReasoningPartComponent = ((
  props: ReasoningPartProps & React.RefAttributes<HTMLDetailsElement>,
) => React.JSX.Element) & { propTypes?: any };

export const ReasoningPart = React.forwardRef(function ReasoningPart(
  props: ReasoningPartProps,
  ref: React.Ref<HTMLDetailsElement>,
) {
    throw new Error("STUB");
}) as ReasoningPartComponent;

export function createReasoningPartRenderer(
  defaultProps: ReasoningPartExternalProps = {},
): ChatPartRenderer<ChatReasoningMessagePart> {
    throw new Error("STUB");
}
