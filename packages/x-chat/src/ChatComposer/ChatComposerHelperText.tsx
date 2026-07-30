'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { SxProps, Theme } from '@mui/system';
import {
  ComposerHelperText,
  type ComposerHelperTextProps,
  type ComposerHelperTextOwnerState,
} from '@mui/x-chat-headless';
import { styled, createUseThemeProps } from '../internals/zero-styled';
import { mergeSlotProps } from '../internals/mergeSlotProps';
import { useChatComposerUtilityClasses, type ChatComposerClasses } from './chatComposerClasses';

const useThemeProps = createUseThemeProps('MuiChatComposerHelperText');

export interface ChatComposerHelperTextProps extends ComposerHelperTextProps {
  className?: string;
  sx?: SxProps<Theme>;
  classes?: Partial<ChatComposerClasses>;
}

interface ChatComposerHelperTextOwnerState extends ComposerHelperTextOwnerState {
  error: boolean;
}

const ChatComposerHelperTextStyled = styled('p', {
  name: 'MuiChatComposer',
  slot: 'HelperText',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})<{ ownerState?: ChatComposerHelperTextOwnerState }>(({ theme, ownerState }) => { throw new Error("STUB"); });

const ChatComposerHelperText = React.forwardRef<HTMLParagraphElement, ChatComposerHelperTextProps>(
  function ChatComposerHelperText(inProps, ref) {
        throw new Error("STUB");
    },
);

ChatComposerHelperText.propTypes /* remove-proptypes */ = {
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

export { ChatComposerHelperText };
