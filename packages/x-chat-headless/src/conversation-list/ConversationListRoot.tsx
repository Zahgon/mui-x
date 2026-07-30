'use client';
import * as React from 'react';
import useSlotProps from '@mui/utils/useSlotProps';
import { SlotComponentProps } from '@mui/utils/types';
import { useChat } from '../hooks/useChat';
import { useChatStore } from '../hooks/useChatStore';
import { useConversations } from '../hooks/useConversation';
import type { ChatConversation } from '../types/chat-entities';
import { markChatLayoutPane } from '../chat/internals/chatLayoutPaneKind';
import {
  ScrollRoot,
  ScrollViewport,
  ScrollScrollbar,
  ScrollThumb,
  scrollbarStyle,
  thumbStyle,
} from '../internals/ScrollAreaSlots';
import { mergeReactProps } from '../internals/mergeReactProps';
import { useRovingFocus } from '../internals/useRovingFocus';
import { ConversationListItem, type ConversationListItemProps } from './ConversationListItem';
import {
  ConversationListItemAvatar,
  type ConversationListItemAvatarProps,
} from './ConversationListItemAvatar';
import {
  ConversationListItemContent,
  type ConversationListItemContentProps,
} from './ConversationListItemContent';
import { ConversationListTitle, type ConversationListTitleProps } from './ConversationListTitle';
import {
  ConversationListPreview,
  type ConversationListPreviewProps,
} from './ConversationListPreview';
import {
  ConversationListTimestamp,
  type ConversationListTimestampProps,
} from './ConversationListTimestamp';
import {
  ConversationListUnreadBadge,
  type ConversationListUnreadBadgeProps,
} from './ConversationListUnreadBadge';
import {
  ConversationListItemActions,
  type ConversationListItemActionsProps,
} from './ConversationListItemActions';
import {
  type ConversationListItemOwnerState,
  type ConversationListRootOwnerState,
  type ConversationListVariant,
} from './conversationList.types';

export interface ConversationListRootSlots {
  root: React.ElementType;
  scroller: React.ElementType;
  viewport: React.ElementType;
  scrollbar: React.ElementType;
  scrollbarThumb: React.ElementType;
  item: React.JSXElementConstructor<ConversationListItemProps>;
  itemAvatar: React.JSXElementConstructor<ConversationListItemAvatarProps>;
  itemContent: React.JSXElementConstructor<ConversationListItemContentProps>;
  title: React.JSXElementConstructor<ConversationListTitleProps>;
  preview: React.JSXElementConstructor<ConversationListPreviewProps>;
  timestamp: React.JSXElementConstructor<ConversationListTimestampProps>;
  unreadBadge: React.JSXElementConstructor<ConversationListUnreadBadgeProps>;
  itemActions: React.JSXElementConstructor<ConversationListItemActionsProps>;
}

export interface ConversationListRootSlotProps {
  root?: SlotComponentProps<'div', {}, ConversationListRootOwnerState>;
  scroller?: SlotComponentProps<'div', {}, ConversationListRootOwnerState>;
  viewport?: SlotComponentProps<'div', {}, ConversationListRootOwnerState>;
  scrollbar?: SlotComponentProps<'div', {}, ConversationListRootOwnerState>;
  scrollbarThumb?: SlotComponentProps<'div', {}, ConversationListRootOwnerState>;
  item?: SlotComponentProps<typeof ConversationListItem, {}, ConversationListItemOwnerState>;
  itemAvatar?: SlotComponentProps<
    typeof ConversationListItemAvatar,
    {},
    ConversationListItemOwnerState
  >;
  itemContent?: SlotComponentProps<
    typeof ConversationListItemContent,
    {},
    ConversationListItemOwnerState
  >;
  title?: SlotComponentProps<typeof ConversationListTitle, {}, ConversationListItemOwnerState>;
  preview?: SlotComponentProps<typeof ConversationListPreview, {}, ConversationListItemOwnerState>;
  timestamp?: SlotComponentProps<
    typeof ConversationListTimestamp,
    {},
    ConversationListItemOwnerState
  >;
  unreadBadge?: SlotComponentProps<
    typeof ConversationListUnreadBadge,
    {},
    ConversationListItemOwnerState
  >;
  itemActions?: SlotComponentProps<
    typeof ConversationListItemActions,
    {},
    ConversationListItemOwnerState
  >;
}

export interface ConversationListRootProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'children'
> {
  /**
   * The visual variant of the conversation list.
   * - `'default'` – shows avatar, title, preview, timestamp, and unread badge.
   * - `'compact'` – shows only a small unread indicator, the title, and an actions button.
   * @default 'default'
   */
  variant?: ConversationListVariant;
  slots?: Partial<ConversationListRootSlots>;
  slotProps?: ConversationListRootSlotProps;
}

interface ConversationListRenderedItemProps {
  conversation: ChatConversation;
  focused: boolean;
  selected: boolean;
  unread: boolean;
  variant: ConversationListVariant;
  slots: Partial<ConversationListRootSlots> | undefined;
  slotProps: ConversationListRootSlotProps | undefined;
  registerItemRef(id: string, element: HTMLElement | null): void;
  onFocus(id: string): void;
  onSelect(id: string): void;
  onKeyDown(event: React.KeyboardEvent<HTMLDivElement>, id: string): void;
}

function ConversationListRenderedItem(props: ConversationListRenderedItemProps) {
    throw new Error("STUB");
}

type ConversationListRootComponent = ((
  props: ConversationListRootProps & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element) & { propTypes?: any };

// ---------------------------------------------------------------------------
// Functional default styles for the scroll slots.
// ---------------------------------------------------------------------------

const clScrollRootStyle: React.CSSProperties = {
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  minHeight: 0,
};

const clScrollViewportStyle: React.CSSProperties = {
  overscrollBehavior: 'contain',
};

export const ConversationListRoot = markChatLayoutPane(
  React.forwardRef(function ConversationListRoot(
    props: ConversationListRootProps,
    ref: React.Ref<HTMLDivElement>,
  ) {
      throw new Error("STUB");
  }) as ConversationListRootComponent,
  'conversations',
);
