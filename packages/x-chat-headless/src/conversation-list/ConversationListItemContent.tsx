'use client';
import * as React from 'react';
import useSlotProps from '@mui/utils/useSlotProps';
import { SlotComponentProps } from '@mui/utils/types';
import type { ChatConversation } from '../types/chat-entities';
import { type ConversationListItemContentOwnerState } from './conversationList.types';

export interface ConversationListItemContentSlots {
  root: React.ElementType;
}

export interface ConversationListItemContentSlotProps {
  root?: SlotComponentProps<'div', {}, ConversationListItemContentOwnerState>;
}

export interface ConversationListItemContentProps extends React.HTMLAttributes<HTMLDivElement> {
  conversation: ChatConversation;
  selected?: boolean;
  unread?: boolean;
  focused?: boolean;
  slots?: Partial<ConversationListItemContentSlots>;
  slotProps?: ConversationListItemContentSlotProps;
}

type ConversationListItemContentComponent = ((
  props: ConversationListItemContentProps & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element) & { propTypes?: any };

export const ConversationListItemContent = React.forwardRef(function ConversationListItemContent(
  props: ConversationListItemContentProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as ConversationListItemContentComponent;
