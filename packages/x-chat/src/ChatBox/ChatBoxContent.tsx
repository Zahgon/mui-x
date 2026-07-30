'use client';
import * as React from 'react';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';
import { useChat, useMessageIds, useConversations } from '@mui/x-chat-headless';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import MUIFocusTrap from '@mui/material/Unstable_TrapFocus';
import {
  ChatLayout,
  markChatLayoutPane,
  useChatLocaleText,
  useChatVariant,
  type ChatSuggestion,
  type ChatVariant,
} from '@mui/x-chat-headless';
import { styled } from '../internals/zero-styled';
import { ChatConversation } from '../ChatConversation/ChatConversation';
import { ChatConversationHeader } from '../ChatConversation/ChatConversationHeader';
import { ChatConversationTitle } from '../ChatConversation/ChatConversationTitle';
import { ChatConversationSubtitle } from '../ChatConversation/ChatConversationSubtitle';
import { ChatConversationHeaderInfo } from '../ChatConversation/ChatConversationHeaderInfo';
import { ChatConversationHeaderActions } from '../ChatConversation/ChatConversationHeaderActions';
import { ChatConversationList } from '../ChatConversationList/ChatConversationList';
import { ChatComposer } from '../ChatComposer/ChatComposer';
import { ChatComposerTextArea } from '../ChatComposer/ChatComposerTextArea';
import { ChatComposerSendButton } from '../ChatComposer/ChatComposerSendButton';
import { ChatComposerAttachButton } from '../ChatComposer/ChatComposerAttachButton';
import { ChatComposerAttachmentList } from '../ChatComposer/ChatComposerAttachmentList';
import { ChatComposerToolbar } from '../ChatComposer/ChatComposerToolbar';
import { ChatComposerHelperText } from '../ChatComposer/ChatComposerHelperText';
import { ChatMessageList, type ChatMessageListProps } from '../ChatMessageList/ChatMessageList';
import { DefaultMessageItem } from '../ChatMessageList/DefaultMessageItem';
import { ChatScrollToBottomAffordance } from '../ChatIndicators/ChatScrollToBottomAffordance';
import { ChatSuggestions, type ChatSuggestionsProps } from '../ChatSuggestions/ChatSuggestions';
import type {
  ChatBoxFeatures,
  ChatBoxLayoutMode,
  ChatBoxLayoutModeBreakpoints,
} from './ChatBox.types';
import { useChatSlots } from '../internals/ChatSlotsContext';
import { mergeSlotProps } from '../internals/mergeSlotProps';
import DefaultSendIcon from '../icons/DefaultSendIcon';
import DefaultAttachIcon from '../icons/DefaultAttachIcon';
import DefaultMenuIcon from '../icons/DefaultMenuIcon';
import DefaultCloseIcon from '../icons/DefaultCloseIcon';

const DEFAULT_OVERLAY_BREAKPOINT = 600;
const DEFAULT_SPLIT_BREAKPOINT = 450;

/**
 * Observes the ChatBox root element's inline size so the JS behavior
 * can stay aligned with container-query-driven layout changes.
 */
function useContainerWidth(element: HTMLElement | null): number | null {
    throw new Error("STUB");
}

const ChatBoxEmptyState = styled('div', {
  name: 'MuiChatBox',
  slot: 'EmptyState',
})(({ theme }) => { throw new Error("STUB"); });

const ChatBoxEmptyStateIcon = styled('svg', {
  name: 'MuiChatBox',
  slot: 'EmptyStateIcon',
})(({ theme }) => { throw new Error("STUB"); });

const ChatBoxEmptyStateTitle = styled('p', {
  name: 'MuiChatBox',
  slot: 'EmptyStateTitle',
})(({ theme }) => { throw new Error("STUB"); });

const ChatBoxEmptyStateHelper = styled('p', {
  name: 'MuiChatBox',
  slot: 'EmptyStateHelper',
})(({ theme }) => { throw new Error("STUB"); });

const ChatBoxMessageListWrapper = styled('div', {
  name: 'MuiChatBox',
  slot: 'MessageListWrapper',
})({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  minHeight: 0,
});

const ChatBoxCustomEmptyStateOverlay = styled('div', {
  name: 'MuiChatBox',
  slot: 'EmptyStateOverlay',
})({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',
});

const ChatBoxCustomEmptyStateInner = styled('div', {
  name: 'MuiChatBox',
  slot: 'EmptyStateOverlayInner',
})({
  pointerEvents: 'auto',
});

const ChatBoxDrawerContent = styled('div', {
  name: 'MuiChatBox',
  slot: 'DrawerContent',
})({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  minHeight: 0,
});

const ChatBoxDrawerHeader = styled('div', {
  name: 'MuiChatBox',
  slot: 'DrawerHeader',
})(({ theme }) => { throw new Error("STUB"); });

const ChatBoxConversationOverlay = styled('div', {
  name: 'MuiChatBox',
  slot: 'ConversationOverlay',
})(({ theme }) => { throw new Error("STUB"); });
// The narrow overlay is the conversation-list drawer, so it belongs to the
// conversations pane. Marking it keeps ChatLayout's pane resolution unambiguous —
// once any sibling (the thread view) is marked, every direct child must be marked
// or ChatLayout warns about a mixed/undeterminable set.
// `markChatLayoutPane` mutates the component in place and returns it; the return is discarded here.
void markChatLayoutPane(ChatBoxConversationOverlay, 'conversations');

const ChatBoxConversationOverlayBackdrop = styled('div', {
  name: 'MuiChatBox',
  slot: 'ConversationOverlayBackdrop',
})(({ theme }) => { throw new Error("STUB"); });

const ChatBoxConversationOverlayPanel = styled('div', {
  name: 'MuiChatBox',
  slot: 'ConversationOverlayPanel',
})({
  position: 'absolute',
  insetBlock: 0,
  insetInlineStart: 0,
  height: '100%',
  maxWidth: '100%',
  pointerEvents: 'auto',
  // Keep scroll momentum inside the overlay; the in-box overlay (unlike the old
  // Modal-based Drawer) has no document scroll lock, so contain overscroll.
  overscrollBehavior: 'contain',
});

// A minimal bar that carries only the back/menu navigation affordances when the
// full conversation header chrome is disabled (`features.conversationHeader:
// false`). In split/overlay layouts these buttons are the only built-in way back
// to the conversation list, so they must survive even without the header.
const ChatBoxHeaderNavBar = styled('div', {
  name: 'MuiChatBox',
  slot: 'HeaderNavBar',
})({
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
});

const DefaultBackIcon = React.memo(function DefaultBackIcon() {
    throw new Error("STUB");
});

interface ChatBoxContentProps {
  variant?: ChatVariant;
  features?: ChatBoxFeatures;
  layoutMode?: ChatBoxLayoutMode;
  layoutModeBreakpoints?: Partial<ChatBoxLayoutModeBreakpoints>;
  rootElement: HTMLElement | null;
  layoutClassName?: string;
  conversationsPaneClassName?: string;
  threadPaneClassName?: string;
  suggestions?: Array<ChatSuggestion | string>;
  suggestionsAutoSubmit?: boolean;
}

function normalizeLayoutModeBreakpoints(
  breakpoints?: Partial<ChatBoxLayoutModeBreakpoints>,
): ChatBoxLayoutModeBreakpoints {
    throw new Error("STUB");
}

function DefaultConversationHeader({
  features,
  onBackClick,
  showBackButton,
  onMenuClick,
  showMenuButton,
  menuExpanded,
}: {
  features?: ChatBoxFeatures;
  onBackClick?: () => void;
  showBackButton?: boolean;
  onMenuClick?: () => void;
  showMenuButton?: boolean;
  menuExpanded?: boolean;
}) {
    throw new Error("STUB");
}

function mergeConversationListItemSlotProps(itemSlotProps: any, handleDrawerClose: () => void) {
    throw new Error("STUB");
}

function mergeConversationListLayoutSlotProps(slotProp: any, extraStyle: React.CSSProperties) {
    throw new Error("STUB");
}

function mergeLayoutSlotProps(
  slotProp: any,
  internalProps: {
    className?: string;
    style?: React.CSSProperties;
    role?: string;
    'aria-label'?: string;
  },
) {
    throw new Error("STUB");
}

function createConversationListSlotProps(
  baseSlotProps: any,
  options: {
    fullWidth?: boolean;
    onItemClick?: () => void;
  } = {},
) {
    throw new Error("STUB");
}

function DefaultComposer({ features }: { features?: ChatBoxFeatures }) {
    throw new Error("STUB");
}

function AboveComposerSuggestions(props: {
  SuggestionsComponent: typeof ChatSuggestions;
  suggestions: Array<ChatSuggestion | string> | undefined;
  autoSubmit: boolean | undefined;
  consumerSlotProps: Partial<ChatSuggestionsProps> | undefined;
}) {
    throw new Error("STUB");
}

function createMarkedConversationListComponent(
  Component: React.ElementType,
): typeof ChatConversationList {
    throw new Error("STUB");
}

export function ChatBoxContent(props: ChatBoxContentProps) {
    throw new Error("STUB");
}
