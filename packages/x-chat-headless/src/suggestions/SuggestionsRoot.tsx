'use client';
import * as React from 'react';
import useSlotProps from '@mui/utils/useSlotProps';
import { SlotComponentProps } from '@mui/utils/types';
import { useMessageIds } from '../hooks/useMessage';
import { useChatComposer } from '../hooks/useChatComposer';
import { useChatLocaleText } from '../chat/internals/ChatLocaleContext';
import { getDataAttributes } from '../internals/getDataAttributes';
import { SuggestionsContext } from './internals/SuggestionsContext';
import { SuggestionItem } from './SuggestionItem';
import { type ChatSuggestion, type SuggestionsRootOwnerState } from './suggestions.types';

function normalizeSuggestion(item: ChatSuggestion | string): ChatSuggestion {
    throw new Error("STUB");
}

export interface SuggestionsRootSlots {
  root: React.ElementType;
  item: React.ElementType;
}

export interface SuggestionsRootSlotProps {
  root?: SlotComponentProps<'div', {}, SuggestionsRootOwnerState>;
  item?: SlotComponentProps<'button', {}, {}>;
}

export interface SuggestionsRootProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'children'
> {
  slots?: Partial<SuggestionsRootSlots>;
  slotProps?: SuggestionsRootSlotProps;
  /**
   * Suggestion items. Strings are normalized to `{ value, label }`.
   * Ignored when `children` are provided.
   */
  suggestions?: Array<ChatSuggestion | string>;
  /**
   * Whether to auto-submit when a suggestion is clicked.
   * @default false
   */
  autoSubmit?: boolean;
  /**
   * By default, suggestions only render when the active thread has no messages
   * (treating them as an empty-state affordance). Set to `true` to render the
   * suggestions regardless of message count — e.g. as a "next prompt" row above
   * the composer in an active conversation.
   * @default false
   */
  alwaysVisible?: boolean;
  children?: React.ReactNode;
}

type SuggestionsRootComponent = ((
  props: SuggestionsRootProps & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element | null) & { propTypes?: any };

export const SuggestionsRoot = React.forwardRef(function SuggestionsRoot(
  props: SuggestionsRootProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as SuggestionsRootComponent;
