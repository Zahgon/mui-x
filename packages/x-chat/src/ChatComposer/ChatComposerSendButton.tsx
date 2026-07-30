'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { SxProps, Theme } from '@mui/system';
import { ComposerSendButton, type ComposerSendButtonProps } from '@mui/x-chat-headless';
import { styled, createUseThemeProps } from '../internals/zero-styled';
import { mergeSlotProps } from '../internals/mergeSlotProps';
import { useChatComposerUtilityClasses, type ChatComposerClasses } from './chatComposerClasses';

const useThemeProps = createUseThemeProps('MuiChatComposerSendButton');

export interface ChatComposerSendButtonProps extends ComposerSendButtonProps {
  className?: string;
  sx?: SxProps<Theme>;
  classes?: Partial<ChatComposerClasses>;
}

const ChatComposerSendButtonStyled = styled('button', {
  name: 'MuiChatComposer',
  slot: 'SendButton',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

const ChatComposerSendButton = React.forwardRef<HTMLButtonElement, ChatComposerSendButtonProps>(
  function ChatComposerSendButton(inProps, ref) {
        throw new Error("STUB");
    },
);

ChatComposerSendButton.propTypes /* remove-proptypes */ = {
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

export { ChatComposerSendButton };
