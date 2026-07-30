'use client';
import * as React from 'react';
import useSlotProps from '@mui/utils/useSlotProps';
import type { SlotComponentProps } from '@mui/utils/types';
import type { ChatPartRenderer, ChatPartRendererProps } from '../../renderers/chatPartRenderer';
import type { ChatRole } from '../../types/chat-entities';
import type { ChatSourceDocumentMessagePart } from '../../types/chat-message-parts';

export interface SourceDocumentPartOwnerState {
  messageId: string;
  role: ChatRole;
}

export interface SourceDocumentPartSlots {
  root: React.ElementType;
  title: React.ElementType;
  excerpt: React.ElementType;
}

export interface SourceDocumentPartSlotProps {
  root?: SlotComponentProps<'div', {}, SourceDocumentPartOwnerState>;
  title?: SlotComponentProps<'div', {}, SourceDocumentPartOwnerState>;
  excerpt?: SlotComponentProps<'div', {}, SourceDocumentPartOwnerState>;
}

export interface SourceDocumentPartProps extends ChatPartRendererProps<ChatSourceDocumentMessagePart> {
  className?: string;
  slots?: Partial<SourceDocumentPartSlots>;
  slotProps?: SourceDocumentPartSlotProps;
}

export type SourceDocumentPartExternalProps = Omit<
  SourceDocumentPartProps,
  'index' | 'message' | 'onToolCall' | 'part'
>;

type SourceDocumentPartComponent = ((
  props: SourceDocumentPartProps & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element | null) & { propTypes?: any };

export const SourceDocumentPart = React.forwardRef(function SourceDocumentPart(
  props: SourceDocumentPartProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as SourceDocumentPartComponent;

export function createSourceDocumentPartRenderer(
  defaultProps: SourceDocumentPartExternalProps = {},
): ChatPartRenderer<ChatSourceDocumentMessagePart> {
    throw new Error("STUB");
}
