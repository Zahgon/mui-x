'use client';
import * as React from 'react';
import useSlotProps from '@mui/utils/useSlotProps';
import { SlotComponentProps } from '@mui/utils/types';
import type { ChatMessage } from '../types/chat-entities';
import {
  useStreamingIndicatorVisibility,
  type StreamingIndicatorMode,
} from '../hooks/useStreamingIndicatorVisibility';
import { useMessageContext } from '../message/internals/MessageContext';
import { getDataAttributes } from '../internals/getDataAttributes';
import { type StreamingIndicatorOwnerState } from './indicators.types';

export interface StreamingIndicatorSlots {
  root: React.ElementType;
}

export interface StreamingIndicatorSlotProps {
  root?: SlotComponentProps<'div', {}, StreamingIndicatorOwnerState>;
}

export interface StreamingIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Controls when the indicator renders.
   * - `'auto'` – shown only in assistant-backed conversations (auto-detected).
   * - `true` – always shown while a response is in flight.
   * - `false` – never shown.
   * @default 'auto'
   */
  mode?: StreamingIndicatorMode;
  /**
   * The assistant message to reflect. Falls back to the surrounding
   * `MessageContext` when omitted (the default when mounted inside a chat
   * message). When a message is in scope, the indicator renders only while
   * that message is an assistant message with `status: 'streaming'`.
   */
  message?: ChatMessage | null;
  /**
   * Row contract shared with the divider slots: when `index`/`items` are
   * provided, the indicator self-suppresses on every row except the last one.
   */
  messageId?: string;
  index?: number;
  items?: string[];
  slots?: Partial<StreamingIndicatorSlots>;
  slotProps?: StreamingIndicatorSlotProps;
}

type StreamingIndicatorComponent = ((
  props: StreamingIndicatorProps & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element | null) & { propTypes?: any };

/**
 * Animated "response in flight" indicator. Outside a message it covers the
 * waiting phase (request sent, no assistant message yet); inside a message it
 * renders while that assistant message is streaming.
 */
export const StreamingIndicator = React.forwardRef(function StreamingIndicator(
  props: StreamingIndicatorProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as StreamingIndicatorComponent;
