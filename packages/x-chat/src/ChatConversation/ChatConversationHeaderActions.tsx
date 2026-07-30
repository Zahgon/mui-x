'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { SxProps, Theme } from '@mui/system';
import {
  ConversationHeaderActions,
  type ConversationHeaderActionsProps,
} from '@mui/x-chat-headless';
import { styled, createUseThemeProps } from '../internals/zero-styled';
import { mergeSlotProps } from '../internals/mergeSlotProps';
import {
  useChatConversationUtilityClasses,
  type ChatConversationClasses,
} from './chatConversationClasses';

const useThemeProps = createUseThemeProps('MuiChatConversationHeaderActions');

export interface ChatConversationHeaderActionsProps extends ConversationHeaderActionsProps {
  className?: string;
  sx?: SxProps<Theme>;
  classes?: Partial<ChatConversationClasses>;
}

const ChatConversationHeaderActionsStyled = styled('div', {
  name: 'MuiChatConversation',
  slot: 'HeaderActions',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

const ChatConversationHeaderActions = React.forwardRef<
  HTMLDivElement,
  ChatConversationHeaderActionsProps
>(function ChatConversationHeaderActions(inProps, ref) {
    throw new Error("STUB");
});

ChatConversationHeaderActions.propTypes /* remove-proptypes */ = {
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

export { ChatConversationHeaderActions };
