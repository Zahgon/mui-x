'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { SxProps, Theme } from '@mui/system';
import { SuggestionsRoot, type SuggestionsRootProps } from '@mui/x-chat-headless';
import { styled, createUseThemeProps } from '../internals/zero-styled';
import { mergeSlotProps } from '../internals/mergeSlotProps';
import {
  useChatSuggestionsUtilityClasses,
  type ChatSuggestionsClasses,
} from './chatSuggestionsClasses';

const useThemeProps = createUseThemeProps('MuiChatSuggestions');

export interface ChatSuggestionsProps extends SuggestionsRootProps {
  className?: string;
  sx?: SxProps<Theme>;
  classes?: Partial<ChatSuggestionsClasses>;
}

const ChatSuggestionsRootStyled = styled('div', {
  name: 'MuiChatSuggestions',
  slot: 'Root',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

const ChatSuggestionItemStyled = styled('button', {
  name: 'MuiChatSuggestions',
  slot: 'Item',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

const ChatSuggestions = React.forwardRef<HTMLDivElement, ChatSuggestionsProps>(
  function ChatSuggestions(inProps, ref) {
        throw new Error("STUB");
    },
);

ChatSuggestions.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * By default, suggestions only render when the active thread has no messages
   * (treating them as an empty-state affordance). Set to `true` to render the
   * suggestions regardless of message count — e.g. as a "next prompt" row above
   * the composer in an active conversation.
   * @default false
   */
  alwaysVisible: PropTypes.bool,
  /**
   * Whether to auto-submit when a suggestion is clicked.
   * @default false
   */
  autoSubmit: PropTypes.bool,
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  slotProps: PropTypes.object,
  slots: PropTypes.object,
  /**
   * Suggestion items. Strings are normalized to `{ value, label }`.
   * Ignored when `children` are provided.
   */
  suggestions: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string.isRequired,
      }),
      PropTypes.string,
    ]).isRequired,
  ),
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
} as any;

export { ChatSuggestions };
