'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { SxProps, Theme } from '@mui/system';
import { UnreadMarker, type UnreadMarkerProps } from '@mui/x-chat-headless';
import { styled, createUseThemeProps } from '../internals/zero-styled';
import { mergeSlotProps } from '../internals/mergeSlotProps';
import {
  useChatUnreadMarkerUtilityClasses,
  type ChatUnreadMarkerClasses,
} from './chatUnreadMarkerClasses';

const useThemeProps = createUseThemeProps('MuiChatUnreadMarker');

export interface ChatUnreadMarkerProps extends UnreadMarkerProps {
  className?: string;
  sx?: SxProps<Theme>;
  classes?: Partial<ChatUnreadMarkerClasses>;
}

const ChatUnreadMarkerStyled = styled('div', {
  name: 'MuiChatUnreadMarker',
  slot: 'Root',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

const ChatUnreadMarkerLabelStyled = styled('span', {
  name: 'MuiChatUnreadMarker',
  slot: 'Label',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

const ChatUnreadMarker = React.forwardRef<HTMLDivElement, ChatUnreadMarkerProps>(
  function ChatUnreadMarker(inProps, ref) {
        throw new Error("STUB");
    },
);

ChatUnreadMarker.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: PropTypes.object,
  className: PropTypes.string,
  index: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string),
  label: PropTypes.node,
  messageId: PropTypes.string.isRequired,
  slotProps: PropTypes.object,
  slots: PropTypes.object,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
} as any;

export { ChatUnreadMarker };
