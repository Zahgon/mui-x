'use client';
import * as React from 'react';
import useSlotProps from '@mui/utils/useSlotProps';
import { SlotComponentProps } from '@mui/utils/types';
import { useChat } from '../hooks/useChat';
import { useChatStatus } from '../hooks/useChatStatus';
import type { ChatUser } from '../types/chat-entities';
import { useChatLocaleText } from '../chat/internals/ChatLocaleContext';
import { getDataAttributes } from '../internals/getDataAttributes';
import { type TypingIndicatorOwnerState } from './indicators.types';

function resolveTypingUser(
  userId: string,
  participants: ChatUser[] | undefined,
  messageAuthors: ChatUser[],
) {
  return (
    participants?.find((participant) => { throw new Error("STUB"); }) ??
    messageAuthors.find((author) => { throw new Error("STUB"); }) ?? { id: userId }
  );
}

export interface TypingIndicatorSlots {
  root: React.ElementType;
}

export interface TypingIndicatorSlotProps {
  root?: SlotComponentProps<'div', {}, TypingIndicatorOwnerState>;
}

export interface TypingIndicatorProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'children'
> {
  slots?: Partial<TypingIndicatorSlots>;
  slotProps?: TypingIndicatorSlotProps;
}

type TypingIndicatorComponent = ((
  props: TypingIndicatorProps & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element | null) & { propTypes?: any };

export const TypingIndicator = React.forwardRef(function TypingIndicator(
  props: TypingIndicatorProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as TypingIndicatorComponent;
