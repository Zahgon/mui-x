'use client';
import * as React from 'react';
import useSlotProps from '@mui/utils/useSlotProps';
import { SlotComponentProps } from '@mui/utils/types';
import type { ChatAttachmentRejection } from '../types/chat-entities';
import { useChatLocaleText } from '../chat/internals/ChatLocaleContext';
import { useComposerContext } from './internals/ComposerContext';
import { type ComposerAttachButtonOwnerState } from './composer.types';
import { matchesMimeType } from './internals/matchesMimeType';

export interface ComposerAttachButtonSlots {
  attachButton: React.ElementType;
  attachInput: React.ElementType;
}

export interface ComposerAttachButtonSlotProps {
  attachButton?: SlotComponentProps<'button', {}, ComposerAttachButtonOwnerState>;
  attachInput?: SlotComponentProps<'input', {}, ComposerAttachButtonOwnerState>;
}

export interface ComposerAttachButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'type'
> {
  slots?: Partial<ComposerAttachButtonSlots>;
  slotProps?: ComposerAttachButtonSlotProps;
}

type ComposerAttachButtonComponent = ((
  props: ComposerAttachButtonProps & React.RefAttributes<HTMLButtonElement>,
) => React.JSX.Element) & { propTypes?: any };

export const ComposerAttachButton = React.forwardRef(function ComposerAttachButton(
  props: ComposerAttachButtonProps,
  ref: React.Ref<HTMLButtonElement>,
) {
    throw new Error("STUB");
}) as ComposerAttachButtonComponent;
