'use client';
import * as React from 'react';
import { useStore } from '@mui/x-internals/store';
import useSlotProps from '@mui/utils/useSlotProps';
import { SlotComponentProps } from '@mui/utils/types';
import { useChatStore } from '../hooks/useChatStore';
import { chatSelectors } from '../selectors';
import { useComposerContext } from './internals/ComposerContext';
import { type ComposerAttachmentListOwnerState } from './composer.types';

export interface ComposerAttachmentListSlots {
  attachmentList: React.ElementType;
}

export interface ComposerAttachmentListSlotProps {
  attachmentList?: SlotComponentProps<'div', {}, ComposerAttachmentListOwnerState>;
}

export interface ComposerAttachmentListProps extends React.HTMLAttributes<HTMLDivElement> {
  slots?: Partial<ComposerAttachmentListSlots>;
  slotProps?: ComposerAttachmentListSlotProps;
}

type ComposerAttachmentListComponent = ((
  props: ComposerAttachmentListProps & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element | null) & { propTypes?: any };

export const ComposerAttachmentList = React.forwardRef(function ComposerAttachmentList(
  props: ComposerAttachmentListProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as ComposerAttachmentListComponent;
