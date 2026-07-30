'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { SxProps, Theme } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import { ScrollToBottomAffordance, type ScrollToBottomAffordanceProps } from '@mui/x-chat-headless';
import { styled, createUseThemeProps } from '../internals/zero-styled';
import { mergeSlotProps } from '../internals/mergeSlotProps';
import {
  useChatScrollToBottomAffordanceUtilityClasses,
  type ChatScrollToBottomAffordanceClasses,
} from './chatScrollToBottomAffordanceClasses';

const useThemeProps = createUseThemeProps('MuiChatScrollToBottomAffordance');

export interface ChatScrollToBottomAffordanceProps extends ScrollToBottomAffordanceProps {
  className?: string;
  sx?: SxProps<Theme>;
  classes?: Partial<ChatScrollToBottomAffordanceClasses>;
}

const ChatScrollToBottomAffordanceStyled = styled(IconButton, {
  name: 'MuiChatScrollToBottomAffordance',
  slot: 'Root',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

function DefaultScrollToBottomIcon() {
    throw new Error("STUB");
}

const ChatScrollToBottomAffordance = React.forwardRef<
  HTMLButtonElement,
  ChatScrollToBottomAffordanceProps
>(function ChatScrollToBottomAffordance(inProps, ref) {
    throw new Error("STUB");
});

ChatScrollToBottomAffordance.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: PropTypes.object,
  className: PropTypes.string,
  scrollBehavior: PropTypes.oneOf(['auto', 'instant', 'smooth']),
  slotProps: PropTypes.object,
  slots: PropTypes.object,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
} as any;

export { ChatScrollToBottomAffordance };
