'use client';
import * as React from 'react';
import useSlotProps from '@mui/utils/useSlotProps';
import { SlotComponentProps } from '@mui/utils/types';
import { useChatLocaleText } from '../chat/internals/ChatLocaleContext';
import { getDataAttributes } from '../internals/getDataAttributes';
import { mergeReactProps } from '../internals/mergeReactProps';
import { useMessageListContext } from '../message-list/internals/MessageListContext';
import { type ScrollToBottomAffordanceOwnerState } from './indicators.types';

export interface ScrollToBottomAffordanceSlots {
  root: React.ElementType;
  badge: React.ElementType;
  icon?: React.ElementType;
}

export interface ScrollToBottomAffordanceSlotProps {
  root?: SlotComponentProps<'button', {}, ScrollToBottomAffordanceOwnerState>;
  badge?: SlotComponentProps<'span', {}, ScrollToBottomAffordanceOwnerState>;
  icon?: SlotComponentProps<'svg', {}, ScrollToBottomAffordanceOwnerState>;
}

export interface ScrollToBottomAffordanceProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> {
  scrollBehavior?: ScrollBehavior;
  slots?: Partial<ScrollToBottomAffordanceSlots>;
  slotProps?: ScrollToBottomAffordanceSlotProps;
}

type ScrollToBottomAffordanceComponent = ((
  props: ScrollToBottomAffordanceProps & React.RefAttributes<HTMLButtonElement>,
) => React.JSX.Element | null) & { propTypes?: any };

export const ScrollToBottomAffordance = React.forwardRef(function ScrollToBottomAffordance(
  props: ScrollToBottomAffordanceProps,
  ref: React.Ref<HTMLButtonElement>,
) {
    throw new Error("STUB");
}) as ScrollToBottomAffordanceComponent;
