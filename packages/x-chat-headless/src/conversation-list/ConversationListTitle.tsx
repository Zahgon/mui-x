'use client';
import * as React from 'react';
import useSlotProps from '@mui/utils/useSlotProps';
import { SlotComponentProps } from '@mui/utils/types';
import type { ChatConversation } from '../types/chat-entities';
import { type ConversationListTitleOwnerState } from './conversationList.types';

export interface ConversationListTitleSlots {
  root: React.ElementType;
}

export interface ConversationListTitleSlotProps {
  root?: SlotComponentProps<'div', {}, ConversationListTitleOwnerState>;
}

export interface ConversationListTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  conversation: ChatConversation;
  selected?: boolean;
  unread?: boolean;
  focused?: boolean;
  slots?: Partial<ConversationListTitleSlots>;
  slotProps?: ConversationListTitleSlotProps;
}

type ConversationListTitleComponent = ((
  props: ConversationListTitleProps & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element) & { propTypes?: any };

export const ConversationListTitle = React.forwardRef(function ConversationListTitle(
  props: ConversationListTitleProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as ConversationListTitleComponent;
