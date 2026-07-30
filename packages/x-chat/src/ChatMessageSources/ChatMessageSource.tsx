'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import useSlotProps from '@mui/utils/useSlotProps';
import type { SlotComponentProps } from '@mui/utils/types';
import { useMessageContentTabIndex } from '@mui/x-chat-headless';
import { safeUri } from '@mui/x-chat-headless/internals';
import { styled, createUseThemeProps } from '../internals/zero-styled';
import {
  useChatMessageSourceUtilityClasses,
  type ChatMessageSourceClasses,
} from './chatMessageSourceClasses';

const useThemeProps = createUseThemeProps('MuiChatMessageSource');

const ChatMessageSourceRootStyled = styled('li', {
  name: 'MuiChatMessageSource',
  slot: 'Root',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(() => { throw new Error("STUB"); });

const ChatMessageSourceIndexStyled = styled('span', {
  name: 'MuiChatMessageSource',
  slot: 'Index',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

const ChatMessageSourceLinkStyled = styled('a', {
  name: 'MuiChatMessageSource',
  slot: 'Link',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

export interface ChatMessageSourceSlots {
  /** The root list item element. @default 'li' */
  root?: React.ElementType;
  /** The numeric index badge. @default 'span' */
  index?: React.ElementType;
  /** The anchor link. @default 'a' */
  link?: React.ElementType;
}

export interface ChatMessageSourceSlotProps {
  root?: SlotComponentProps<'li', {}, {}>;
  index?: SlotComponentProps<'span', {}, {}>;
  link?: SlotComponentProps<'a', {}, {}>;
}

export interface ChatMessageSourceProps {
  /** The URL this source links to. */
  href: string;
  /** Display title for the source. Falls back to `href` when omitted. */
  title?: string;
  /** 1-based position number displayed as a muted badge. */
  index?: number;
  children?: React.ReactNode;
  className?: string;
  classes?: Partial<ChatMessageSourceClasses>;
  slots?: ChatMessageSourceSlots;
  slotProps?: ChatMessageSourceSlotProps;
}

type ChatMessageSourceComponent = ((
  props: ChatMessageSourceProps & React.RefAttributes<HTMLLIElement>,
) => React.JSX.Element | null) & { propTypes?: any };

const ChatMessageSource = React.forwardRef(function ChatMessageSource(
  inProps: ChatMessageSourceProps,
  ref: React.Ref<HTMLLIElement>,
) {
    throw new Error("STUB");
}) as ChatMessageSourceComponent;

ChatMessageSource.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  /**
   * The URL this source links to.
   */
  href: PropTypes.string.isRequired,
  /**
   * 1-based position number displayed as a muted badge.
   */
  index: PropTypes.number,
  slotProps: PropTypes.object,
  slots: PropTypes.object,
  /**
   * Display title for the source. Falls back to `href` when omitted.
   */
  title: PropTypes.string,
} as any;

export { ChatMessageSource };
