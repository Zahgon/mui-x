'use client';
import * as React from 'react';
import useSlotProps from '@mui/utils/useSlotProps';
import { SlotComponentProps } from '@mui/utils/types';
import { useMessageContext } from './internals/MessageContext';
import { type MessageAvatarOwnerState } from './message.types';

export interface MessageAvatarSlots {
  avatar: React.ElementType;
  image: React.ElementType;
}

export interface MessageAvatarSlotProps {
  avatar?: SlotComponentProps<'div', {}, MessageAvatarOwnerState>;
  image?: SlotComponentProps<'img', {}, MessageAvatarOwnerState>;
}

export interface MessageAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  slots?: Partial<MessageAvatarSlots>;
  slotProps?: MessageAvatarSlotProps;
}

type MessageAvatarComponent = ((
  props: MessageAvatarProps & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element | null) & { propTypes?: any };

export const MessageAvatar = React.forwardRef(function MessageAvatar(
  props: MessageAvatarProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as MessageAvatarComponent;
