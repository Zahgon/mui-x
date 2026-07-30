'use client';
import * as React from 'react';
import useSlotProps from '@mui/utils/useSlotProps';
import { SlotComponentProps } from '@mui/utils/types';
import type { ChatConversation } from '../types/chat-entities';
import { type ConversationListPreviewOwnerState } from './conversationList.types';

export interface ConversationListPreviewSlots {
  root: React.ElementType;
}

export interface ConversationListPreviewSlotProps {
  root?: SlotComponentProps<'div', {}, ConversationListPreviewOwnerState>;
}

export interface ConversationListPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  conversation: ChatConversation;
  selected?: boolean;
  unread?: boolean;
  focused?: boolean;
  slots?: Partial<ConversationListPreviewSlots>;
  slotProps?: ConversationListPreviewSlotProps;
}

type ConversationListPreviewComponent = ((
  props: ConversationListPreviewProps & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element | null) & { propTypes?: any };

export const ConversationListPreview = React.forwardRef(function ConversationListPreview(
  props: ConversationListPreviewProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as ConversationListPreviewComponent;
