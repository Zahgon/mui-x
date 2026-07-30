'use client';
import * as React from 'react';
import useSlotProps from '@mui/utils/useSlotProps';
import { SlotComponentProps } from '@mui/utils/types';
import { ChatProvider, type ChatProviderProps } from '../ChatProvider';
import type { ChatLocaleText } from './internals/chatLocaleText';
import { ChatLocaleProvider } from './internals/ChatLocaleContext';
import { ChatVariantProvider, type ChatVariant } from './internals/ChatVariantContext';
import { ChatDensityProvider, type ChatDensity } from './internals/ChatDensityContext';

export interface ChatRootSlots {
  root: React.ElementType;
}

export interface ChatRootOwnerState {}

export interface ChatRootSlotProps {
  root?: SlotComponentProps<'div', {}, ChatRootOwnerState>;
}

export interface ChatRootProps<Cursor = string>
  extends
    ChatProviderProps<Cursor>,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'children' | 'onError'> {
  localeText?: Partial<ChatLocaleText>;
  /**
   * The visual layout variant of the chat.
   * When provided, wraps descendant components with `ChatVariantProvider`
   * so message and conversation components can respond to the variant.
   * - `'default'` – Standard layout with avatars, individual timestamps, and full spacing.
   * - `'compact'` – Messenger-style layout: no avatars, author + timestamp in group header, tighter spacing.
   */
  variant?: ChatVariant;
  /**
   * The vertical spacing density of chat messages.
   * When provided, wraps descendant components with `ChatDensityProvider`.
   * - `'compact'` – Reduced vertical spacing between messages.
   * - `'standard'` – Default spacing.
   * - `'comfortable'` – Increased vertical spacing between messages.
   */
  density?: ChatDensity;
  slots?: Partial<ChatRootSlots>;
  slotProps?: ChatRootSlotProps;
}

type ChatRootComponent = (<Cursor = string>(
  props: ChatRootProps<Cursor> & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element) & { propTypes?: any };

export const ChatRoot = React.forwardRef(function ChatRoot<Cursor = string>(
  props: ChatRootProps<Cursor>,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as ChatRootComponent;
