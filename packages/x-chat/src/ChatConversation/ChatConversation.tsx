'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { SxProps, Theme } from '@mui/system';
import {
  ConversationRoot,
  markChatLayoutPane,
  type ConversationRootProps,
} from '@mui/x-chat-headless';
import { styled, createUseThemeProps } from '../internals/zero-styled';
import { mergeSlotProps } from '../internals/mergeSlotProps';
import {
  useChatConversationUtilityClasses,
  type ChatConversationClasses,
} from './chatConversationClasses';

const useThemeProps = createUseThemeProps('MuiChatConversation');

export interface ChatConversationProps extends ConversationRootProps {
  className?: string;
  sx?: SxProps<Theme>;
  classes?: Partial<ChatConversationClasses>;
}

const ChatConversationStyled = styled('div', {
  name: 'MuiChatConversation',
  slot: 'Root',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(() => { throw new Error("STUB"); });

const ChatConversation = React.forwardRef<HTMLDivElement, ChatConversationProps>(
  function ChatConversation(inProps, ref) {
        throw new Error("STUB");
    },
);

ChatConversation.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  slotProps: PropTypes.object,
  slots: PropTypes.object,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
} as any;

// Mirror the headless `ConversationRoot` pane marker on the Material wrapper so
// `ChatLayout` assigns it to the thread pane (the symbol lives on the headless
// primitive, not this wrapper).
// `markChatLayoutPane` mutates the component in place and returns it for the
// `const X = markChatLayoutPane(...)` form; here the return is intentionally discarded.
void markChatLayoutPane(ChatConversation, 'thread');

export { ChatConversation };
