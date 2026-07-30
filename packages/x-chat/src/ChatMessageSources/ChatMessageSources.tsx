'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { SxProps, Theme } from '@mui/system';
import useSlotProps from '@mui/utils/useSlotProps';
import type { SlotComponentProps } from '@mui/utils/types';
import { styled, createUseThemeProps } from '../internals/zero-styled';
import {
  useChatMessageSourcesUtilityClasses,
  type ChatMessageSourcesClasses,
} from './chatMessageSourcesClasses';

const useThemeProps = createUseThemeProps('MuiChatMessageSources');

const ChatMessageSourcesRootStyled = styled('div', {
  name: 'MuiChatMessageSources',
  slot: 'Root',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

const ChatMessageSourcesLabelStyled = styled('p', {
  name: 'MuiChatMessageSources',
  slot: 'Label',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

const ChatMessageSourcesListStyled = styled('ol', {
  name: 'MuiChatMessageSources',
  slot: 'List',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

export interface ChatMessageSourcesSlots {
  /** The root container element. @default 'div' */
  root?: React.ElementType;
  /** The label element shown above the list. @default 'p' */
  label?: React.ElementType;
  /** The ordered list wrapping source items. @default 'ol' */
  list?: React.ElementType;
}

export interface ChatMessageSourcesSlotProps {
  root?: SlotComponentProps<'div', {}, {}>;
  label?: SlotComponentProps<'p', {}, {}>;
  list?: SlotComponentProps<'ol', {}, {}>;
}

export interface ChatMessageSourcesProps {
  /**
   * Label displayed above the list of sources.
   * @default 'Sources'
   */
  label?: string;
  children?: React.ReactNode;
  className?: string;
  sx?: SxProps<Theme>;
  classes?: Partial<ChatMessageSourcesClasses>;
  slots?: ChatMessageSourcesSlots;
  slotProps?: ChatMessageSourcesSlotProps;
}

type ChatMessageSourcesComponent = ((
  props: ChatMessageSourcesProps & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element | null) & { propTypes?: any };

const ChatMessageSources = React.forwardRef(function ChatMessageSources(
  inProps: ChatMessageSourcesProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as ChatMessageSourcesComponent;

ChatMessageSources.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  /**
   * Label displayed above the list of sources.
   * @default 'Sources'
   */
  label: PropTypes.string,
  slotProps: PropTypes.object,
  slots: PropTypes.object,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
} as any;

export { ChatMessageSources };
