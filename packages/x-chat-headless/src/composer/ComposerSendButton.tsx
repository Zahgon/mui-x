'use client';
import * as React from 'react';
import useSlotProps from '@mui/utils/useSlotProps';
import { SlotComponentProps } from '@mui/utils/types';
import { useChatLocaleText } from '../chat/internals/ChatLocaleContext';
import { getDataAttributes } from '../internals/getDataAttributes';
import { useComposerContext } from './internals/ComposerContext';
import { type ComposerSendButtonOwnerState } from './composer.types';

export interface ComposerSendButtonSlots {
  sendButton: React.ElementType;
}

export interface ComposerSendButtonSlotProps {
  sendButton?: SlotComponentProps<'button', {}, ComposerSendButtonOwnerState>;
}

export interface ComposerSendButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'type'
> {
  slots?: Partial<ComposerSendButtonSlots>;
  slotProps?: ComposerSendButtonSlotProps;
}

type ComposerSendButtonComponent = ((
  props: ComposerSendButtonProps & React.RefAttributes<HTMLButtonElement>,
) => React.JSX.Element) & { propTypes?: any };

export const ComposerSendButton = React.forwardRef(function ComposerSendButton(
  props: ComposerSendButtonProps,
  ref: React.Ref<HTMLButtonElement>,
) {
    throw new Error("STUB");
}) as ComposerSendButtonComponent;
