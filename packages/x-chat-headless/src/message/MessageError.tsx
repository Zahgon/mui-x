'use client';
import * as React from 'react';
import useSlotProps from '@mui/utils/useSlotProps';
import { SlotComponentProps } from '@mui/utils/types';
import { useMessageError } from '../hooks/useMessageError';
import { useChatRuntimeContext } from '../internals/useChatRuntimeContext';
import { useMessageContext } from './internals/MessageContext';
import { type MessageErrorOwnerState } from './message.types';

export interface MessageErrorSlots {
  /**
   * The root element of the per-message error primitive.
   * Rendered with `role="alert"` so screen readers announce the error.
   */
  root: React.ElementType;
}

export interface MessageErrorSlotProps {
  root?: SlotComponentProps<'div', {}, MessageErrorOwnerState>;
}

export interface MessageErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  slots?: Partial<MessageErrorSlots>;
  slotProps?: MessageErrorSlotProps;
  children?: React.ReactNode;
}

type MessageErrorComponent = ((
  props: MessageErrorProps & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element | null) & { propTypes?: any };

export const MessageError = React.forwardRef(function MessageError(
  props: MessageErrorProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as MessageErrorComponent;
