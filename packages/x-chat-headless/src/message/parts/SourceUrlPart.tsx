'use client';
import * as React from 'react';
import useSlotProps from '@mui/utils/useSlotProps';
import type { SlotComponentProps } from '@mui/utils/types';
import type { ChatPartRenderer, ChatPartRendererProps } from '../../renderers/chatPartRenderer';
import type { ChatRole } from '../../types/chat-entities';
import type { ChatSourceUrlMessagePart } from '../../types/chat-message-parts';
import { useMessageContentTabIndex } from '../../message-list/internals/MessageRovingContext';
import { safeUri } from './partUtils';

export interface SourceUrlPartOwnerState {
  messageId: string;
  role: ChatRole;
}

export interface SourceUrlPartSlots {
  root: React.ElementType;
  icon: React.ElementType;
  link: React.ElementType;
}

export interface SourceUrlPartSlotProps {
  root?: SlotComponentProps<'span', {}, SourceUrlPartOwnerState>;
  icon?: SlotComponentProps<'span', {}, SourceUrlPartOwnerState>;
  link?: SlotComponentProps<'a', {}, SourceUrlPartOwnerState>;
}

export interface SourceUrlPartProps extends ChatPartRendererProps<ChatSourceUrlMessagePart> {
  className?: string;
  slots?: Partial<SourceUrlPartSlots>;
  slotProps?: SourceUrlPartSlotProps;
}

export type SourceUrlPartExternalProps = Omit<
  SourceUrlPartProps,
  'index' | 'message' | 'onToolCall' | 'part'
>;

type SourceUrlPartComponent = ((
  props: SourceUrlPartProps & React.RefAttributes<HTMLSpanElement>,
) => React.JSX.Element) & { propTypes?: any };

function ExternalLinkIcon() {
    throw new Error("STUB");
}

export const SourceUrlPart = React.forwardRef(function SourceUrlPart(
  props: SourceUrlPartProps,
  ref: React.Ref<HTMLSpanElement>,
) {
    throw new Error("STUB");
}) as SourceUrlPartComponent;

export function createSourceUrlPartRenderer(
  defaultProps: SourceUrlPartExternalProps = {},
): ChatPartRenderer<ChatSourceUrlMessagePart> {
    throw new Error("STUB");
}
