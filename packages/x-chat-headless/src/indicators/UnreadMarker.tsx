'use client';
import * as React from 'react';
import useSlotProps from '@mui/utils/useSlotProps';
import { SlotComponentProps } from '@mui/utils/types';
import { useChat } from '../hooks/useChat';
import { useMessageIds } from '../hooks/useMessage';
import { useChatLocaleText } from '../chat/internals/ChatLocaleContext';
import { getDataAttributes } from '../internals/getDataAttributes';
import { type UnreadMarkerOwnerState } from './indicators.types';

function resolveMessageIndex(messageId: string, index: number | undefined, items: string[]) {
  if (index != null) {
    return index;
  }

  return items.indexOf(messageId);
}

export interface UnreadMarkerSlots {
  root: React.ElementType;
  label: React.ElementType;
}

export interface UnreadMarkerSlotProps {
  root?: SlotComponentProps<'div', {}, UnreadMarkerOwnerState>;
  label?: SlotComponentProps<'div', {}, UnreadMarkerOwnerState>;
}

export interface UnreadMarkerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  messageId: string;
  index?: number;
  items?: string[];
  label?: React.ReactNode;
  slots?: Partial<UnreadMarkerSlots>;
  slotProps?: UnreadMarkerSlotProps;
}

type UnreadMarkerComponent = ((
  props: UnreadMarkerProps & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element | null) & { propTypes?: any };

export const UnreadMarker = React.forwardRef(function UnreadMarker(
  props: UnreadMarkerProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as UnreadMarkerComponent;
