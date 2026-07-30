'use client';
import * as React from 'react';
import useForkRef from '@mui/utils/useForkRef';
import useSlotProps from '@mui/utils/useSlotProps';
import { SlotComponentProps } from '@mui/utils/types';
import { useChat } from '../hooks/useChat';
import { useChatLocaleText } from '../chat/internals/ChatLocaleContext';
import { useComposerContext } from './internals/ComposerContext';
import { type ComposerTextAreaOwnerState } from './composer.types';

export interface ComposerTextAreaSlots {
  input: React.ElementType;
}

export interface ComposerTextAreaSlotProps {
  input?: SlotComponentProps<'textarea', {}, ComposerTextAreaOwnerState>;
}

export interface ComposerTextAreaProps extends Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  'children' | 'value' | 'defaultValue' | 'onChange'
> {
  slots?: Partial<ComposerTextAreaSlots>;
  slotProps?: ComposerTextAreaSlotProps;
}

type ComposerTextAreaComponent = ((
  props: ComposerTextAreaProps & React.RefAttributes<HTMLTextAreaElement>,
) => React.JSX.Element) & { propTypes?: any };

function syncTextareaHeight(textarea: HTMLTextAreaElement | null) {
  if (!textarea) {
    return;
  }

  textarea.style.height = 'auto';
  textarea.style.height = `${textarea.scrollHeight}px`;
}

export const ComposerTextArea = React.forwardRef(function ComposerTextArea(
  props: ComposerTextAreaProps,
  ref: React.Ref<HTMLTextAreaElement>,
) {
    throw new Error("STUB");
}) as ComposerTextAreaComponent;
