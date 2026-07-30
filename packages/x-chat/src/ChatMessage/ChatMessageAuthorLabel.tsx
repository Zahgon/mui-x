'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { MessageAuthorLabel, type MessageAuthorLabelProps } from '@mui/x-chat-headless';
import { styled, createUseThemeProps } from '../internals/zero-styled';
import { useChatMessageUtilityClasses, type ChatMessageClasses } from './chatMessageClasses';
import { mergeSlotProps } from '../internals/mergeSlotProps';

const useThemeProps = createUseThemeProps('MuiChatMessageAuthorLabel');

export interface ChatMessageAuthorLabelProps extends MessageAuthorLabelProps {
  className?: string;
  classes?: Partial<ChatMessageClasses>;
}

const ChatMessageAuthorLabelStyled = styled('span', {
  name: 'MuiChatMessage',
  slot: 'AuthorLabel',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

const ChatMessageAuthorLabel = React.forwardRef<HTMLSpanElement, ChatMessageAuthorLabelProps>(
  function ChatMessageAuthorLabel(inProps, ref) {
        throw new Error("STUB");
    },
);

ChatMessageAuthorLabel.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: PropTypes.object,
  className: PropTypes.string,
  slotProps: PropTypes.object,
  slots: PropTypes.object,
} as any;

export { ChatMessageAuthorLabel };
