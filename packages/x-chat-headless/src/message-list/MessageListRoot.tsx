'use client';
import * as React from 'react';
import useSlotProps from '@mui/utils/useSlotProps';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';
import { SlotComponentProps } from '@mui/utils/types';
import { useChat } from '../hooks/useChat';
import { useChatStore } from '../hooks/useChatStore';
import { useMessageIds } from '../hooks/useMessage';
import { useChatLocaleText } from '../chat/internals/ChatLocaleContext';
import { useRovingFocus } from '../internals/useRovingFocus';
import { useMessageListBehavior } from './useMessageListBehavior';
import {
  ScrollRoot,
  ScrollViewport,
  ScrollScrollbar,
  ScrollThumb,
  scrollbarStyle,
  thumbStyle,
} from '../internals/ScrollAreaSlots';
import { MessageListContextProvider } from './internals/MessageListContext';
import {
  MessageRovingProvider,
  useMessageRovingController,
} from './internals/MessageRovingContext';
import { type MessageListRootOwnerState } from './messageList.types';

const DEFAULT_ESTIMATED_ITEM_SIZE = 84;
const DEFAULT_AUTO_SCROLL_BUFFER = 150;

export interface MessageListRootHandle {
  scrollToBottom(options?: { behavior?: ScrollBehavior }): void;
  /**
   * Move the roving focus to the given message (defaults to the newest one)
   * and focus its article element.
   */
  focusMessage(id?: string): void;
}

export interface MessageListRootSlots {
  messageList: React.ElementType;
  messageListScroller: React.ElementType;
  messageListContent: React.ElementType;
  messageListOverlay: React.ElementType;
  messageListScrollbar: React.ElementType;
  messageListScrollbarThumb: React.ElementType;
  /**
   * The visually-hidden `role="status"` element announcing streaming
   * transitions ("Assistant is responding" / "Response complete") to screen
   * readers. Pass `null`-rendering component to silence the announcements.
   */
  messageListStatus: React.ElementType;
}

export interface MessageListRootSlotProps {
  messageList?: SlotComponentProps<'div', {}, MessageListRootOwnerState>;
  messageListScroller?: SlotComponentProps<'div', {}, MessageListRootOwnerState>;
  messageListContent?: SlotComponentProps<'div', {}, MessageListRootOwnerState>;
  messageListOverlay?: SlotComponentProps<'div', {}, MessageListRootOwnerState>;
  messageListScrollbar?: SlotComponentProps<'div', {}, MessageListRootOwnerState>;
  messageListScrollbarThumb?: SlotComponentProps<'div', {}, MessageListRootOwnerState>;
  messageListStatus?: SlotComponentProps<'div', {}, MessageListRootOwnerState>;
}

export interface MessageListRootAutoScrollConfig {
  /**
   * Distance in pixels from the bottom of the scroll container within which the
   * user is still considered "at the bottom" and auto-scroll will trigger.
   * @default 150
   */
  buffer?: number;
}

export interface MessageListRootProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'children'
> {
  items?: string[];
  /**
   * Floating layer rendered above the message list, anchored to its bottom edge; pointer-transparent.
   * @default null
   */
  overlay?: React.ReactNode;
  renderItem(params: { id: string; index: number }): React.ReactNode;
  getItemKey?: (id: string, index: number) => React.Key;
  estimatedItemSize?: number;
  /**
   * Callback fired when the viewport enters the top zone of the list — within
   * `estimatedItemSize` pixels (84 by default) of the top edge. Fires once per
   * entry: it does not fire again until the user scrolls away from the top,
   * past the threshold, and back. It is coupled to history loading: it only
   * fires when more history is available and no history page load is in
   * flight, right before the next page is requested.
   */
  onReachTop?: () => void;
  /**
   * Callback fired when the viewport enters the bottom zone of the list — within
   * `autoScroll.buffer` pixels (150 by default; `estimatedItemSize` when `autoScroll`
   * is disabled) of the bottom edge. Fires once per entry: it does not fire again until
   * the user scrolls away from the bottom and back. Entries caused by programmatic
   * scrolls (`scrollToBottom()`, the scroll-to-bottom affordance, the forced scroll
   * after the user sends a message) count. It does not fire on mount, while the list
   * stays pinned to the bottom during streaming, when new messages arrive while already
   * at the bottom, or when the conversation (item set) is switched. Growing the buffer
   * so that it newly encloses the current position counts as entering the zone.
   */
  onReachBottom?: () => void;
  /**
   * Controls automatic scrolling to the bottom when new messages arrive or
   * streaming content grows, as long as the user is within `buffer` pixels of
   * the bottom.
   *
   * - `true` – enable with the default buffer (150 px).
   * - `{ buffer: number }` – enable with a custom threshold.
   * - `false` – disable (the scroll-to-bottom affordance is still available).
   *
   * Scrolling when the *user* sends a message is always active.
   * @default true
   */
  autoScroll?: boolean | MessageListRootAutoScrollConfig;
  /**
   * Whether the message list manages a roving tabindex over its messages:
   * the list is a single Tab stop, ArrowUp/ArrowDown (plus Home/End) move
   * focus between messages, Enter drills into a message's interior controls
   * and Escape returns to the message.
   *
   * Disable when rendering fully custom rows that manage focus themselves.
   * @default true
   */
  enableRovingFocus?: boolean;
  slots?: Partial<MessageListRootSlots>;
  slotProps?: MessageListRootSlotProps;
}

type MessageListRootComponent = ((
  props: MessageListRootProps & React.RefAttributes<MessageListRootHandle>,
) => React.JSX.Element) & { propTypes?: any };

interface MessageListViewProps {
  itemIds: string[];
  overlay: React.ReactNode;
  renderItem: MessageListRootProps['renderItem'];
  getItemKey: NonNullable<MessageListRootProps['getItemKey']>;
  statusAnnouncement: string;
  slots: Partial<MessageListRootSlots> | undefined;
  slotProps: MessageListRootSlotProps | undefined;
  other: Omit<
    MessageListRootProps,
    | 'estimatedItemSize'
    | 'getItemKey'
    | 'items'
    | 'onReachBottom'
    | 'onReachTop'
    | 'renderItem'
    | 'slotProps'
    | 'slots'
  >;
  behavior: ReturnType<typeof useMessageListBehavior>;
}

interface MessageListRenderedRowProps {
  id: string;
  index: number;
  renderItem: MessageListRootProps['renderItem'];
  registerRowElement(id: string, element: HTMLDivElement | null): void;
  onRowResize(): void;
}

function MessageListRenderedRow(props: MessageListRenderedRowProps) {
    throw new Error("STUB");
}

// ---------------------------------------------------------------------------
// Functional default styles for the scroll slots.
// These are applied via `additionalProps` so consumers can override them
// through `slotProps` or direct `style` props (which take higher priority
// in the `mergeSlotProps` merge order).
// ---------------------------------------------------------------------------

const scrollRootStyle: React.CSSProperties = {
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  minHeight: 0,
};

const scrollViewportStyle: React.CSSProperties = {
  overscrollBehavior: 'contain',
  paddingRight: 8,
};

const overlayStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  pointerEvents: 'none',
};

// Standard visually-hidden recipe: present in the accessibility tree (the
// status live region must stay rendered) but invisible and out of layout.
const visuallyHiddenStyle: React.CSSProperties = {
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  whiteSpace: 'nowrap',
  border: 0,
};

// Fallback styles used when the outer `messageList` slot is overridden
// (which removes the ScrollArea context).
const fallbackRootStyle: React.CSSProperties = {
  position: 'relative',
  minHeight: 0,
};

const fallbackScrollerStyle: React.CSSProperties = {
  overflowY: 'auto',
  overscrollBehavior: 'contain',
};

function StaticMessageListView(props: MessageListViewProps) {
    throw new Error("STUB");
}

export const MessageListRoot = React.forwardRef(function MessageListRoot(
  props: MessageListRootProps,
  ref: React.Ref<MessageListRootHandle>,
) {
    throw new Error("STUB");
}) as MessageListRootComponent;
