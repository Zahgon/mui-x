'use client';
import * as React from 'react';
import useSlotProps from '@mui/utils/useSlotProps';
import { SlotComponentProps } from '@mui/utils/types';
import { useIsHydrated } from '@mui/x-internals/useIsHydrated';
import { useChatLocaleText } from '../chat/internals/ChatLocaleContext';
import { ProgressIndicator, ProgressRoot, ProgressTrack } from '../internals/ProgressSlots';
import { useMessageContext } from './internals/MessageContext';
import { type MessageMetaOwnerState } from './message.types';

export interface MessageMetaSlots {
  meta: React.ElementType;
  timestamp: React.ElementType;
  status: React.ElementType;
  edited: React.ElementType;
  /**
   * The root element of the streaming progress indicator.
   * Rendered by Base UI `Progress.Root` when `message.status === 'streaming'`.
   * Provides `role="progressbar"` and `aria-valuetext` for screen readers.
   * @default ProgressRoot (Base UI Progress.Root wrapper)
   */
  streamingProgress: React.ElementType;
  /** The track element wrapping the streaming progress indicator. */
  streamingProgressTrack: React.ElementType;
  /** The animated indicator bar inside the streaming progress track. */
  streamingProgressIndicator: React.ElementType;
}

export interface MessageMetaSlotProps {
  meta?: SlotComponentProps<'div', {}, MessageMetaOwnerState>;
  timestamp?: SlotComponentProps<'span', {}, MessageMetaOwnerState>;
  status?: SlotComponentProps<'span', {}, MessageMetaOwnerState>;
  edited?: SlotComponentProps<'span', {}, MessageMetaOwnerState>;
  streamingProgress?: SlotComponentProps<'div', {}, MessageMetaOwnerState>;
  streamingProgressTrack?: SlotComponentProps<'div', {}, MessageMetaOwnerState>;
  streamingProgressIndicator?: SlotComponentProps<'div', {}, MessageMetaOwnerState>;
}

export interface MessageMetaProps extends React.HTMLAttributes<HTMLDivElement> {
  slots?: Partial<MessageMetaSlots>;
  slotProps?: MessageMetaSlotProps;
}

type MessageMetaComponent = ((
  props: MessageMetaProps & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element | null) & { propTypes?: any };

export const MessageMeta = React.forwardRef(function MessageMeta(
  props: MessageMetaProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as MessageMetaComponent;
