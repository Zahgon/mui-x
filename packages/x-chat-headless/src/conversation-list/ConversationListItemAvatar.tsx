'use client';
import * as React from 'react';
import useSlotProps from '@mui/utils/useSlotProps';
import { SlotComponentProps } from '@mui/utils/types';
import type { ChatConversation } from '../types/chat-entities';
import { type ConversationListItemAvatarOwnerState } from './conversationList.types';

export interface ConversationListItemAvatarSlots {
  root: React.ElementType;
  image: React.ElementType;
}

export interface ConversationListItemAvatarSlotProps {
  root?: SlotComponentProps<'div', {}, ConversationListItemAvatarOwnerState>;
  image?: SlotComponentProps<'img', {}, ConversationListItemAvatarOwnerState>;
}

export interface ConversationListItemAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  conversation: ChatConversation;
  selected?: boolean;
  unread?: boolean;
  focused?: boolean;
  slots?: Partial<ConversationListItemAvatarSlots>;
  slotProps?: ConversationListItemAvatarSlotProps;
}

type ConversationListItemAvatarComponent = ((
  props: ConversationListItemAvatarProps & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element) & { propTypes?: any };

export const ConversationListItemAvatar = React.forwardRef(function ConversationListItemAvatar(
  props: ConversationListItemAvatarProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as ConversationListItemAvatarComponent;
