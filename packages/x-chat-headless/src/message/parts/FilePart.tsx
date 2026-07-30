'use client';
import * as React from 'react';
import useSlotProps from '@mui/utils/useSlotProps';
import type { SlotComponentProps } from '@mui/utils/types';
import type { ChatFileMessagePart } from '../../types/chat-message-parts';
import type { ChatPartRenderer, ChatPartRendererProps } from '../../renderers/chatPartRenderer';
import type { ChatRole } from '../../types/chat-entities';
import { useMessageContentTabIndex } from '../../message-list/internals/MessageRovingContext';
import { safeFileUri } from './partUtils';

export interface FilePartOwnerState {
  image: boolean;
  mediaType: string;
  messageId: string;
  role: ChatRole;
}

export interface FilePartSlots {
  root: React.ElementType;
  preview: React.ElementType;
  link: React.ElementType;
  filename: React.ElementType;
}

export interface FilePartSlotProps {
  root?: SlotComponentProps<'div', {}, FilePartOwnerState>;
  preview?: SlotComponentProps<'img', {}, FilePartOwnerState>;
  link?: SlotComponentProps<'a', {}, FilePartOwnerState>;
  filename?: SlotComponentProps<'span', {}, FilePartOwnerState>;
}

export interface FilePartProps extends ChatPartRendererProps<ChatFileMessagePart> {
  className?: string;
  slots?: Partial<FilePartSlots>;
  slotProps?: FilePartSlotProps;
}

export type FilePartExternalProps = Omit<
  FilePartProps,
  'index' | 'message' | 'onToolCall' | 'part'
>;

type FilePartComponent = ((
  props: FilePartProps & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element) & { propTypes?: any };

function FileIcon() {
    throw new Error("STUB");
}

export const FilePart = React.forwardRef(function FilePart(
  props: FilePartProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as FilePartComponent;

export function createFilePartRenderer(
  defaultProps: FilePartExternalProps = {},
): ChatPartRenderer<ChatFileMessagePart> {
    throw new Error("STUB");
}
