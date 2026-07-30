'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { SxProps, Theme } from '@mui/system';
import {
  ConversationListRoot,
  markChatLayoutPane,
  ConversationListItemAvatar,
  ConversationListItemContent,
  ConversationListTitle,
  ConversationListPreview,
  ConversationListTimestamp,
  ConversationListUnreadBadge,
  ConversationListItemActions,
  type ConversationListRootProps,
  type ConversationListRootSlots,
  type ConversationListRootSlotProps,
  type ConversationListItemProps,
  type ConversationListItemAvatarProps,
  type ConversationListItemContentProps,
  type ConversationListTitleProps,
  type ConversationListPreviewProps,
  type ConversationListTimestampProps,
  type ConversationListUnreadBadgeProps,
  type ConversationListItemActionsProps,
  type ConversationListItemOwnerState,
  type ConversationListVariant,
} from '@mui/x-chat-headless';
import resolveComponentProps from '@mui/utils/resolveComponentProps';
import { styled, createUseThemeProps } from '../internals/zero-styled';
import {
  useChatConversationListUtilityClasses,
  type ChatConversationListClasses,
} from './chatConversationListClasses';
import { mergeSlotProps } from '../internals/mergeSlotProps';

const useThemeProps = createUseThemeProps('MuiChatConversationList');

export interface ChatConversationListProps extends ConversationListRootProps {
  className?: string;
  sx?: SxProps<Theme>;
  classes?: Partial<ChatConversationListClasses>;
  /**
   * The visual variant of the conversation list.
   * - `'default'` – shows avatar, title, preview, timestamp, and unread badge.
   * - `'compact'` – shows only a small unread indicator, the title, and an actions button.
   * @default 'default'
   */
  variant?: ConversationListVariant;
}

const ChatConversationListStyled = styled('div', {
  name: 'MuiChatConversationList',
  slot: 'Root',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

const ChatConversationListScrollerStyled = styled('div', {
  name: 'MuiChatConversationList',
  slot: 'Scroller',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

// Plain-div viewport: the scroller above is a regular div (not ScrollArea.Root),
// so we must also replace the viewport slot to avoid rendering ScrollArea.Viewport
// without a ScrollArea.Root context (which throws during SSR).
const ChatConversationListViewportStyled = styled('div', {
  name: 'MuiChatConversationList',
  slot: 'Viewport',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(() => { throw new Error("STUB"); });

// No-op scrollbar: native overflow on the viewport above handles scrolling,
// so we don't need the Base UI ScrollArea.Scrollbar / Thumb components.
const NoopScrollbar = React.forwardRef<HTMLDivElement>(function NoopScrollbar() {
    throw new Error("STUB");
});

// Props forwarded by ConversationListRenderedItem as additionalProps to every item slot.
// They are intentionally NOT forwarded to the DOM to avoid React unknown-prop warnings.
// NOTE: providing a custom shouldForwardProp REPLACES MUI's default exclusion list, so we
// must also explicitly exclude 'ownerState', 'theme', 'sx', and 'as' here.

const itemSlotShouldForwardProp = (prop: string) =>
  { throw new Error("STUB"); };

const ChatConversationListItemStyled = styled('div', {
  name: 'MuiChatConversationList',
  slot: 'Item',
  shouldForwardProp: itemSlotShouldForwardProp,
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})<{
  ownerState?: {
    selected?: boolean;
    unread?: boolean;
    focused?: boolean;
    variant?: ConversationListVariant;
  };
}>(({ theme, ownerState }) => { throw new Error("STUB"); });

// ---------------------------------------------------------------------------
// Styled inner roots — pure styling, no rendering logic.
// These are used as the `root` slot inside the unstyled sub-components below.
// ---------------------------------------------------------------------------

const ChatConversationListItemAvatarRoot = styled('div', {
  name: 'MuiChatConversationList',
  slot: 'ItemAvatar',
  shouldForwardProp: itemSlotShouldForwardProp,
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

const ChatConversationListItemContentRoot = styled('div', {
  name: 'MuiChatConversationList',
  slot: 'ItemContent',
  shouldForwardProp: itemSlotShouldForwardProp,
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(() => { throw new Error("STUB"); });

const ChatConversationListTitleRoot = styled('div', {
  name: 'MuiChatConversationList',
  slot: 'ItemTitle',
  shouldForwardProp: itemSlotShouldForwardProp,
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})<{ ownerState?: { unread?: boolean } }>(({ theme, ownerState }) => { throw new Error("STUB"); });

const ChatConversationListPreviewRoot = styled('div', {
  name: 'MuiChatConversationList',
  slot: 'ItemPreview',
  shouldForwardProp: itemSlotShouldForwardProp,
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

const ChatConversationListTimestampRoot = styled('div', {
  name: 'MuiChatConversationList',
  slot: 'ItemTimestamp',
  shouldForwardProp: itemSlotShouldForwardProp,
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

const ChatConversationListUnreadBadgeRoot = styled('div', {
  name: 'MuiChatConversationList',
  slot: 'ItemUnreadBadge',
  shouldForwardProp: itemSlotShouldForwardProp,
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})<{ ownerState?: { variant?: ConversationListVariant } }>(({ theme, ownerState }) => { throw new Error("STUB"); });

// ---------------------------------------------------------------------------
// Item actions — only rendered in the compact variant, revealed on hover/focus.
// ---------------------------------------------------------------------------

const ChatConversationListItemActionsRoot = styled('div', {
  name: 'MuiChatConversationList',
  slot: 'ItemActions',
  shouldForwardProp: itemSlotShouldForwardProp,
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})<{ ownerState?: { variant?: ConversationListVariant } }>(({ theme, ownerState }) => { throw new Error("STUB"); });

// ---------------------------------------------------------------------------
// Wrapper slot components — keep the unstyled rendering logic, inject the
// styled root so MUI theming is applied.
// ---------------------------------------------------------------------------

// Wrapper around the styled item root that satisfies
// `React.JSXElementConstructor<ConversationListItemProps>`. The styled root
// uses `shouldForwardProp` to filter out the conversation-related props at
// runtime, so we just spread them through.
const ChatConversationListItemSlot = React.forwardRef<HTMLDivElement, ConversationListItemProps>(
  function ChatConversationListItemSlot(props, ref) {
        throw new Error("STUB");
    },
);

ChatConversationListItemSlot.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  children: PropTypes.node,
  conversation: PropTypes.shape({
    avatarUrl: PropTypes.string,
    id: PropTypes.string.isRequired,
    lastMessageAt: PropTypes.string,
    metadata: PropTypes.object,
    participants: PropTypes.arrayOf(
      PropTypes.shape({
        avatarUrl: PropTypes.string,
        displayName: PropTypes.string,
        id: PropTypes.string.isRequired,
        isOnline: PropTypes.bool,
        metadata: PropTypes.object,
        role: PropTypes.oneOf(['assistant', 'system', 'user']),
      }),
    ),
    readState: PropTypes.oneOf(['read', 'unread']),
    subtitle: PropTypes.string,
    title: PropTypes.string,
    unreadCount: PropTypes.number,
  }).isRequired,
  focused: PropTypes.bool,
  selected: PropTypes.bool,
  slotProps: PropTypes.object,
  slots: PropTypes.object,
  unread: PropTypes.bool,
} as any;

const ChatConversationListItemAvatarStyled = React.forwardRef<
  HTMLDivElement,
  ConversationListItemAvatarProps
>(function ChatConversationListItemAvatarStyled(props, ref) {
    throw new Error("STUB");
});

ChatConversationListItemAvatarStyled.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  conversation: PropTypes.shape({
    avatarUrl: PropTypes.string,
    id: PropTypes.string.isRequired,
    lastMessageAt: PropTypes.string,
    metadata: PropTypes.object,
    participants: PropTypes.arrayOf(
      PropTypes.shape({
        avatarUrl: PropTypes.string,
        displayName: PropTypes.string,
        id: PropTypes.string.isRequired,
        isOnline: PropTypes.bool,
        metadata: PropTypes.object,
        role: PropTypes.oneOf(['assistant', 'system', 'user']),
      }),
    ),
    readState: PropTypes.oneOf(['read', 'unread']),
    subtitle: PropTypes.string,
    title: PropTypes.string,
    unreadCount: PropTypes.number,
  }).isRequired,
  focused: PropTypes.bool,
  selected: PropTypes.bool,
  slotProps: PropTypes.object,
  slots: PropTypes.object,
  unread: PropTypes.bool,
} as any;

const ChatConversationListItemContentStyled = React.forwardRef<
  HTMLDivElement,
  ConversationListItemContentProps
>(function ChatConversationListItemContentStyled(props, ref) {
    throw new Error("STUB");
});

ChatConversationListItemContentStyled.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  conversation: PropTypes.shape({
    avatarUrl: PropTypes.string,
    id: PropTypes.string.isRequired,
    lastMessageAt: PropTypes.string,
    metadata: PropTypes.object,
    participants: PropTypes.arrayOf(
      PropTypes.shape({
        avatarUrl: PropTypes.string,
        displayName: PropTypes.string,
        id: PropTypes.string.isRequired,
        isOnline: PropTypes.bool,
        metadata: PropTypes.object,
        role: PropTypes.oneOf(['assistant', 'system', 'user']),
      }),
    ),
    readState: PropTypes.oneOf(['read', 'unread']),
    subtitle: PropTypes.string,
    title: PropTypes.string,
    unreadCount: PropTypes.number,
  }).isRequired,
  focused: PropTypes.bool,
  selected: PropTypes.bool,
  slotProps: PropTypes.object,
  slots: PropTypes.object,
  unread: PropTypes.bool,
} as any;

const ChatConversationListTitleStyled = React.forwardRef<
  HTMLDivElement,
  ConversationListTitleProps
>(function ChatConversationListTitleStyled(props, ref) {
    throw new Error("STUB");
});

ChatConversationListTitleStyled.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  conversation: PropTypes.shape({
    avatarUrl: PropTypes.string,
    id: PropTypes.string.isRequired,
    lastMessageAt: PropTypes.string,
    metadata: PropTypes.object,
    participants: PropTypes.arrayOf(
      PropTypes.shape({
        avatarUrl: PropTypes.string,
        displayName: PropTypes.string,
        id: PropTypes.string.isRequired,
        isOnline: PropTypes.bool,
        metadata: PropTypes.object,
        role: PropTypes.oneOf(['assistant', 'system', 'user']),
      }),
    ),
    readState: PropTypes.oneOf(['read', 'unread']),
    subtitle: PropTypes.string,
    title: PropTypes.string,
    unreadCount: PropTypes.number,
  }).isRequired,
  focused: PropTypes.bool,
  selected: PropTypes.bool,
  slotProps: PropTypes.object,
  slots: PropTypes.object,
  unread: PropTypes.bool,
} as any;

const ChatConversationListPreviewStyled = React.forwardRef<
  HTMLDivElement,
  ConversationListPreviewProps
>(function ChatConversationListPreviewStyled(props, ref) {
    throw new Error("STUB");
});

ChatConversationListPreviewStyled.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  conversation: PropTypes.shape({
    avatarUrl: PropTypes.string,
    id: PropTypes.string.isRequired,
    lastMessageAt: PropTypes.string,
    metadata: PropTypes.object,
    participants: PropTypes.arrayOf(
      PropTypes.shape({
        avatarUrl: PropTypes.string,
        displayName: PropTypes.string,
        id: PropTypes.string.isRequired,
        isOnline: PropTypes.bool,
        metadata: PropTypes.object,
        role: PropTypes.oneOf(['assistant', 'system', 'user']),
      }),
    ),
    readState: PropTypes.oneOf(['read', 'unread']),
    subtitle: PropTypes.string,
    title: PropTypes.string,
    unreadCount: PropTypes.number,
  }).isRequired,
  focused: PropTypes.bool,
  selected: PropTypes.bool,
  slotProps: PropTypes.object,
  slots: PropTypes.object,
  unread: PropTypes.bool,
} as any;

const ChatConversationListTimestampStyled = React.forwardRef<
  HTMLDivElement,
  ConversationListTimestampProps
>(function ChatConversationListTimestampStyled(props, ref) {
    throw new Error("STUB");
});

ChatConversationListTimestampStyled.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  conversation: PropTypes.shape({
    avatarUrl: PropTypes.string,
    id: PropTypes.string.isRequired,
    lastMessageAt: PropTypes.string,
    metadata: PropTypes.object,
    participants: PropTypes.arrayOf(
      PropTypes.shape({
        avatarUrl: PropTypes.string,
        displayName: PropTypes.string,
        id: PropTypes.string.isRequired,
        isOnline: PropTypes.bool,
        metadata: PropTypes.object,
        role: PropTypes.oneOf(['assistant', 'system', 'user']),
      }),
    ),
    readState: PropTypes.oneOf(['read', 'unread']),
    subtitle: PropTypes.string,
    title: PropTypes.string,
    unreadCount: PropTypes.number,
  }).isRequired,
  focused: PropTypes.bool,
  selected: PropTypes.bool,
  slotProps: PropTypes.object,
  slots: PropTypes.object,
  unread: PropTypes.bool,
} as any;

const ChatConversationListUnreadBadgeStyled = React.forwardRef<
  HTMLDivElement,
  ConversationListUnreadBadgeProps
>(function ChatConversationListUnreadBadgeStyled(props, ref) {
    throw new Error("STUB");
});

// Default inline SVG for the 3-dot "more" icon (MoreHoriz style).

ChatConversationListUnreadBadgeStyled.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  conversation: PropTypes.shape({
    avatarUrl: PropTypes.string,
    id: PropTypes.string.isRequired,
    lastMessageAt: PropTypes.string,
    metadata: PropTypes.object,
    participants: PropTypes.arrayOf(
      PropTypes.shape({
        avatarUrl: PropTypes.string,
        displayName: PropTypes.string,
        id: PropTypes.string.isRequired,
        isOnline: PropTypes.bool,
        metadata: PropTypes.object,
        role: PropTypes.oneOf(['assistant', 'system', 'user']),
      }),
    ),
    readState: PropTypes.oneOf(['read', 'unread']),
    subtitle: PropTypes.string,
    title: PropTypes.string,
    unreadCount: PropTypes.number,
  }).isRequired,
  focused: PropTypes.bool,
  selected: PropTypes.bool,
  slotProps: PropTypes.object,
  slots: PropTypes.object,
  unread: PropTypes.bool,
} as any;

function DefaultMoreIcon() {
    throw new Error("STUB");
}

const ChatConversationListItemActionsStyled = React.forwardRef<
  HTMLDivElement,
  ConversationListItemActionsProps
>(function ChatConversationListItemActionsStyled(props, ref) {
    throw new Error("STUB");
});

ChatConversationListItemActionsStyled.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  conversation: PropTypes.shape({
    avatarUrl: PropTypes.string,
    id: PropTypes.string.isRequired,
    lastMessageAt: PropTypes.string,
    metadata: PropTypes.object,
    participants: PropTypes.arrayOf(
      PropTypes.shape({
        avatarUrl: PropTypes.string,
        displayName: PropTypes.string,
        id: PropTypes.string.isRequired,
        isOnline: PropTypes.bool,
        metadata: PropTypes.object,
        role: PropTypes.oneOf(['assistant', 'system', 'user']),
      }),
    ),
    readState: PropTypes.oneOf(['read', 'unread']),
    subtitle: PropTypes.string,
    title: PropTypes.string,
    unreadCount: PropTypes.number,
  }).isRequired,
  focused: PropTypes.bool,
  selected: PropTypes.bool,
  slotProps: PropTypes.object,
  slots: PropTypes.object,
  unread: PropTypes.bool,
} as any;

const ChatConversationList = React.forwardRef<HTMLDivElement, ChatConversationListProps>(
  function ChatConversationList(inProps, ref) {
        throw new Error("STUB");
    },
);

ChatConversationList.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: PropTypes.object,
  className: PropTypes.string,
  slotProps: PropTypes.object,
  slots: PropTypes.object,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
  /**
   * The visual variant of the conversation list.
   * - `'default'` – shows avatar, title, preview, timestamp, and unread badge.
   * - `'compact'` – shows only a small unread indicator, the title, and an actions button.
   * @default 'default'
   */
  variant: PropTypes.oneOf(['compact', 'default']),
} as any;

// Mirror the headless `ConversationListRoot` pane marker on the Material wrapper so
// `ChatLayout` assigns it to the conversations pane (the symbol lives on the headless
// primitive, not this wrapper). Without it, a split layout with the list visible and
// no active conversation — a single unmarked child — falls back to the thread pane,
// skipping the `conversationsPane` slot/styles.
// `markChatLayoutPane` mutates the component in place and returns it; the return is discarded here.
void markChatLayoutPane(ChatConversationList, 'conversations');

export { ChatConversationList };
