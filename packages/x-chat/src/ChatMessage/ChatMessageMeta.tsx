'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { SxProps, Theme } from '@mui/system';
import { MessageMeta, type MessageMetaProps } from '@mui/x-chat-headless';
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { styled, createUseThemeProps } from '../internals/zero-styled';
import { useChatMessageUtilityClasses } from './chatMessageClasses';
import { mergeSlotProps } from '../internals/mergeSlotProps';

const useThemeProps = createUseThemeProps('MuiChatMessageMeta');

export interface ChatMessageMetaProps extends MessageMetaProps {
  className?: string;
  sx?: SxProps<Theme>;
}

const ChatMessageMetaStyled = styled('div', {
  name: 'MuiChatMessage',
  slot: 'Meta',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})<{ ownerState?: { role?: string; variant?: string; isOwnMessage?: boolean } }>(
  ({ theme, ownerState }) => { throw new Error("STUB"); },
);

const ChatMessageStatusStyled = styled('span', {
  name: 'MuiChatMessage',
  slot: 'Status',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})<{ ownerState?: { variant?: string } }>(({ ownerState }) => { throw new Error("STUB"); });

/**
 * Custom Status slot for ChatMessage.
 * In compact mode, renders a Done icon for "sent" status and DoneAll icon
 * for "read" status instead of text labels.
 */
const ChatMessageStatusSlot = React.forwardRef<HTMLSpanElement, any>(function ChatMessageStatusSlot(
  { ownerState, children, ...other },
  ref,
) {
    throw new Error("STUB");
});

const ChatMessageMeta = React.forwardRef<HTMLDivElement, ChatMessageMetaProps>(
  function ChatMessageMeta(inProps, ref) {
        throw new Error("STUB");
    },
);

ChatMessageMeta.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  className: PropTypes.string,
  slotProps: PropTypes.object,
  slots: PropTypes.object,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
} as any;

export { ChatMessageMeta };
