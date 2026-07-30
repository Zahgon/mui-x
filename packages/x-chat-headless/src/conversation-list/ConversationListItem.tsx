'use client';
import * as React from 'react';
import useSlotProps from '@mui/utils/useSlotProps';
import { SlotComponentProps } from '@mui/utils/types';
import type { ChatConversation } from '../types/chat-entities';
import { getDataAttributes } from '../internals/getDataAttributes';
import { type ConversationListItemOwnerState } from './conversationList.types';

export interface ConversationListItemSlots {
  root: React.ElementType;
}

export interface ConversationListItemSlotProps {
  root?: SlotComponentProps<'div', {}, ConversationListItemOwnerState>;
}

export interface ConversationListItemProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'children'
> {
  children?: React.ReactNode;
  conversation: ChatConversation;
  selected?: boolean;
  unread?: boolean;
  focused?: boolean;
  slots?: Partial<ConversationListItemSlots>;
  slotProps?: ConversationListItemSlotProps;
}

type ConversationListItemComponent = ((
  props: ConversationListItemProps & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element) & { propTypes?: any };

export const ConversationListItem = React.forwardRef(function ConversationListItem(
  props: ConversationListItemProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as ConversationListItemComponent;
