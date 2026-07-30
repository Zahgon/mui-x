'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { ConversationHeader, type ConversationHeaderProps } from '@mui/x-chat-headless';
import { styled, createUseThemeProps } from '../internals/zero-styled';
import { mergeSlotProps } from '../internals/mergeSlotProps';
import {
  useChatConversationUtilityClasses,
  type ChatConversationClasses,
} from './chatConversationClasses';

const useThemeProps = createUseThemeProps('MuiChatConversationHeader');

export interface ChatConversationHeaderProps extends ConversationHeaderProps {
  className?: string;
  classes?: Partial<ChatConversationClasses>;
}

const ChatConversationHeaderStyled = styled('header', {
  name: 'MuiChatConversation',
  slot: 'Header',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

const ChatConversationHeader = React.forwardRef<HTMLElement, ChatConversationHeaderProps>(
  function ChatConversationHeader(inProps, ref) {
        throw new Error("STUB");
    },
);

ChatConversationHeader.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  slotProps: PropTypes.object,
  slots: PropTypes.object,
} as any;

export { ChatConversationHeader };
