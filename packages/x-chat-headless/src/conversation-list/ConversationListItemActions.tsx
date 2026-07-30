'use client';
import * as React from 'react';
import useSlotProps from '@mui/utils/useSlotProps';
import { SlotComponentProps } from '@mui/utils/types';
import type { ChatConversation } from '../types/chat-entities';
import { type ConversationListItemActionsOwnerState } from './conversationList.types';

export interface ConversationListItemActionsSlots {
  root: React.ElementType;
}

export interface ConversationListItemActionsSlotProps {
  root?: SlotComponentProps<'div', {}, ConversationListItemActionsOwnerState>;
}

export interface ConversationListItemActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  conversation: ChatConversation;
  selected?: boolean;
  unread?: boolean;
  focused?: boolean;
  slots?: Partial<ConversationListItemActionsSlots>;
  slotProps?: ConversationListItemActionsSlotProps;
}

type ConversationListItemActionsComponent = ((
  props: ConversationListItemActionsProps & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element) & { propTypes?: any };

export const ConversationListItemActions = React.forwardRef(function ConversationListItemActions(
  props: ConversationListItemActionsProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as ConversationListItemActionsComponent;
