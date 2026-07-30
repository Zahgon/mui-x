'use client';
import * as React from 'react';
import useSlotProps from '@mui/utils/useSlotProps';
import useForkRef from '@mui/utils/useForkRef';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';
import { SlotComponentProps } from '@mui/utils/types';
import { useMessage } from '../hooks/useMessage';
import { useMessageAuthor } from '../hooks/useMessageAuthor';
import { useChatVariant } from '../chat/internals/ChatVariantContext';
import { useChatDensity } from '../chat/internals/ChatDensityContext';
import { useChatLocaleText } from '../chat/internals/ChatLocaleContext';
import { getDataAttributes } from '../internals/getDataAttributes';
import { mergeReactProps } from '../internals/mergeReactProps';
import {
  focusFirstFocusableDescendant,
  useMessageRovingContext,
  useMessageRovingItem,
} from '../message-list/internals/MessageRovingContext';
import { MessageContextProvider } from './internals/MessageContext';
import { type MessageRootOwnerState } from './message.types';

export interface MessageRootSlots {
  root: React.ElementType;
}

export interface MessageRootSlotProps {
  root?: SlotComponentProps<'div', {}, MessageRootOwnerState>;
}

export interface MessageRootProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'id'> {
  messageId: string;
  isGrouped?: boolean;
  slots?: Partial<MessageRootSlots>;
  slotProps?: MessageRootSlotProps;
  /**
   * @ignore
   * Internal: the compact group author label injected by the headless
   * `MessageGroup` for the Material `ChatMessage` to place in its CSS grid.
   * `MessageRoot` renders the consumer's own composition and owns its layout,
   * so it deliberately drops this prop instead of forwarding it to the DOM.
   */
  groupAuthorName?: React.ReactNode;
}

type MessageRootComponent = ((
  props: MessageRootProps & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element) & { propTypes?: any };

export const MessageRoot = React.forwardRef(function MessageRoot(
  props: MessageRootProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as MessageRootComponent;
