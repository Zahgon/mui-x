'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { SxProps, Theme } from '@mui/system';
import { ComposerToolbar, type ComposerToolbarProps } from '@mui/x-chat-headless';
import { styled, createUseThemeProps } from '../internals/zero-styled';
import { useChatComposerUtilityClasses, type ChatComposerClasses } from './chatComposerClasses';
import { mergeSlotProps } from '../internals/mergeSlotProps';

const useThemeProps = createUseThemeProps('MuiChatComposerToolbar');

export interface ChatComposerToolbarProps extends ComposerToolbarProps {
  className?: string;
  sx?: SxProps<Theme>;
  classes?: Partial<ChatComposerClasses>;
}

const ChatComposerToolbarStyled = styled('div', {
  name: 'MuiChatComposer',
  slot: 'Toolbar',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

const ChatComposerToolbar = React.forwardRef<HTMLDivElement, ChatComposerToolbarProps>(
  function ChatComposerToolbar(inProps, ref) {
        throw new Error("STUB");
    },
);

ChatComposerToolbar.propTypes /* remove-proptypes */ = {
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

export { ChatComposerToolbar };
