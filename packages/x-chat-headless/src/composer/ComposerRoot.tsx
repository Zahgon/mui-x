'use client';
import * as React from 'react';
import useSlotProps from '@mui/utils/useSlotProps';
import { SlotComponentProps } from '@mui/utils/types';
import { useChatComposer } from '../hooks/useChatComposer';
import { useChatStatus } from '../hooks/useChatStatus';
import { useChatStore } from '../hooks/useChatStore';
import { useChatLocaleText } from '../chat/internals/ChatLocaleContext';
import type { ChatAttachmentsConfig } from '../types/chat-entities';
import { getDataAttributes } from '../internals/getDataAttributes';
import { ComposerContextProvider } from './internals/ComposerContext';
import { type ComposerRootOwnerState } from './composer.types';

export interface ComposerRootSlots {
  root: React.ElementType;
}

export interface ComposerRootSlotProps {
  root?: SlotComponentProps<'form', {}, ComposerRootOwnerState>;
}

export interface ComposerRootProps extends Omit<
  React.FormHTMLAttributes<HTMLFormElement>,
  'onSubmit'
> {
  /**
   * Handler invoked when the form is submitted.
   *
   * Native form submission is always prevented before this handler runs.
   * Call `event.preventDefault()` from inside the handler to also suppress the
   * composer's own `submit()` action; otherwise the composer submits as usual
   * after the handler returns.
   */
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  disabled?: boolean;
  /**
   * Configuration for attachment validation constraints.
   * When provided, file attachments are validated against these rules.
   */
  attachmentConfig?: ChatAttachmentsConfig;
  slots?: Partial<ComposerRootSlots>;
  slotProps?: ComposerRootSlotProps;
}

type ComposerRootComponent = ((
  props: ComposerRootProps & React.RefAttributes<HTMLFormElement>,
) => React.JSX.Element) & { propTypes?: any };

export const ComposerRoot = React.forwardRef(function ComposerRoot(
  props: ComposerRootProps,
  ref: React.Ref<HTMLFormElement>,
) {
    throw new Error("STUB");
}) as ComposerRootComponent;
