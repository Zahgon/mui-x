'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { SxProps, Theme } from '@mui/system';
import { ConversationTitle, type ConversationTitleProps } from '@mui/x-chat-headless';
import { styled, createUseThemeProps } from '../internals/zero-styled';
import { mergeSlotProps } from '../internals/mergeSlotProps';
import {
  useChatConversationUtilityClasses,
  type ChatConversationClasses,
} from './chatConversationClasses';

const useThemeProps = createUseThemeProps('MuiChatConversationTitle');

export interface ChatConversationTitleProps extends ConversationTitleProps {
  className?: string;
  sx?: SxProps<Theme>;
  classes?: Partial<ChatConversationClasses>;
}

const ChatConversationTitleStyled = styled('div', {
  name: 'MuiChatConversation',
  slot: 'Title',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

const ChatConversationTitle = React.forwardRef<HTMLDivElement, ChatConversationTitleProps>(
  function ChatConversationTitle(inProps, ref) {
        throw new Error("STUB");
    },
);

ChatConversationTitle.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
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

export { ChatConversationTitle };
