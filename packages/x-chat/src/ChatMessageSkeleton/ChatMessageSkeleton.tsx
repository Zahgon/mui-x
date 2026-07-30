'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { keyframes, SxProps, Theme } from '@mui/system';
import useSlotProps from '@mui/utils/useSlotProps';
import type { SlotComponentProps } from '@mui/utils/types';
import { styled, createUseThemeProps } from '../internals/zero-styled';
import {
  useChatMessageSkeletonUtilityClasses,
  type ChatMessageSkeletonClasses,
} from './chatMessageSkeletonClasses';

const useThemeProps = createUseThemeProps('MuiChatMessageSkeleton');

const shimmerKeyframes = keyframes`
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`;

const ChatMessageSkeletonRootStyled = styled('div', {
  name: 'MuiChatMessageSkeleton',
  slot: 'Root',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

const ChatMessageSkeletonLineStyled = styled('div', {
  name: 'MuiChatMessageSkeleton',
  slot: 'Line',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

export interface ChatMessageSkeletonSlots {
  /** The root container element. @default 'div' */
  root?: React.ElementType;
  /** Each animated shimmer line element. @default 'div' */
  line?: React.ElementType;
}

export interface ChatMessageSkeletonSlotProps {
  root?: SlotComponentProps<'div', {}, {}>;
  line?: SlotComponentProps<'div', {}, {}>;
}

export interface ChatMessageSkeletonProps {
  /**
   * Number of shimmer lines to render.
   * @default 3
   */
  lines?: number;
  className?: string;
  sx?: SxProps<Theme>;
  classes?: Partial<ChatMessageSkeletonClasses>;
  slots?: ChatMessageSkeletonSlots;
  slotProps?: ChatMessageSkeletonSlotProps;
}

type ChatMessageSkeletonComponent = ((
  props: ChatMessageSkeletonProps & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element | null) & { propTypes?: any };

const ChatMessageSkeleton = React.forwardRef(function ChatMessageSkeleton(
  inProps: ChatMessageSkeletonProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as ChatMessageSkeletonComponent;

ChatMessageSkeleton.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: PropTypes.object,
  className: PropTypes.string,
  /**
   * Number of shimmer lines to render.
   * @default 3
   */
  lines: PropTypes.number,
  slotProps: PropTypes.object,
  slots: PropTypes.object,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
} as any;

export { ChatMessageSkeleton };
