'use client';
import * as React from 'react';
import useSlotProps from '@mui/utils/useSlotProps';
import { SlotComponentProps } from '@mui/utils/types';
import { useMessageContext } from './internals/MessageContext';
import { type MessageAuthorLabelOwnerState } from './message.types';

export interface MessageAuthorLabelSlots {
  authorLabel: React.ElementType;
}

export interface MessageAuthorLabelSlotProps {
  authorLabel?: SlotComponentProps<'span', {}, MessageAuthorLabelOwnerState>;
}

export interface MessageAuthorLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  slots?: Partial<MessageAuthorLabelSlots>;
  slotProps?: MessageAuthorLabelSlotProps;
}

function getAuthorLabel(ownerState: MessageAuthorLabelOwnerState): string | null {
  return ownerState.resolvedAuthor?.displayName ?? null;
}

type MessageAuthorLabelComponent = ((
  props: MessageAuthorLabelProps & React.RefAttributes<HTMLSpanElement>,
) => React.JSX.Element | null) & { propTypes?: any };

export const MessageAuthorLabel = React.forwardRef(function MessageAuthorLabel(
  props: MessageAuthorLabelProps,
  ref: React.Ref<HTMLSpanElement>,
) {
    throw new Error("STUB");
}) as MessageAuthorLabelComponent;
