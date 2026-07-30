'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { MessageAvatar, type MessageAvatarProps } from '@mui/x-chat-headless';
import { styled, createUseThemeProps } from '../internals/zero-styled';
import { useChatMessageUtilityClasses } from './chatMessageClasses';
import { mergeSlotProps } from '../internals/mergeSlotProps';

const useThemeProps = createUseThemeProps('MuiChatMessageAvatar');

export interface ChatMessageAvatarProps extends MessageAvatarProps {
  className?: string;
}

const ChatMessageAvatarStyled = styled('div', {
  name: 'MuiChatMessage',
  slot: 'Avatar',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})<{ ownerState?: { variant?: string } }>(({ theme, ownerState }) => { throw new Error("STUB"); });

const ChatMessageAvatar = React.forwardRef<HTMLDivElement, ChatMessageAvatarProps>(
  function ChatMessageAvatar(inProps, ref) {
        throw new Error("STUB");
    },
);

ChatMessageAvatar.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  className: PropTypes.string,
  slotProps: PropTypes.object,
  slots: PropTypes.object,
} as any;

export { ChatMessageAvatar };
