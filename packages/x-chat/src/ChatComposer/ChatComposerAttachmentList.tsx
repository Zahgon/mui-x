'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { SxProps, Theme } from '@mui/system';
import {
  ComposerAttachmentList,
  useChatComposer,
  useChatLocaleText,
  type ComposerAttachmentListProps,
} from '@mui/x-chat-headless';
import { styled, createUseThemeProps } from '../internals/zero-styled';
import { useChatComposerUtilityClasses, type ChatComposerClasses } from './chatComposerClasses';
import DefaultCloseIcon from '../icons/DefaultCloseIcon';
import DefaultFileIcon from '../icons/DefaultFileIcon';
import { mergeSlotProps } from '../internals/mergeSlotProps';

const useThemeProps = createUseThemeProps('MuiChatComposerAttachmentList');

export interface ChatComposerAttachmentListProps extends ComposerAttachmentListProps {
  className?: string;
  sx?: SxProps<Theme>;
  classes?: Partial<ChatComposerClasses>;
}

const ChatComposerAttachmentListStyled = styled('div', {
  name: 'MuiChatComposer',
  slot: 'AttachmentList',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

const AttachmentChip = styled('div', {
  name: 'MuiChatComposer',
  slot: 'AttachmentChip',
  skipVariantsResolver: true,
})(({ theme }) => { throw new Error("STUB"); });

const AttachmentThumbnail = styled('img', {
  name: 'MuiChatComposer',
  slot: 'AttachmentThumbnail',
  skipVariantsResolver: true,
})({
  width: 20,
  height: 20,
  objectFit: 'cover',
  borderRadius: 3,
  flexShrink: 0,
});

const AttachmentFileName = styled('span', {
  name: 'MuiChatComposer',
  slot: 'AttachmentFileName',
  skipVariantsResolver: true,
})({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  minWidth: 0,
});

const AttachmentRemoveButton = styled('button', {
  name: 'MuiChatComposer',
  slot: 'AttachmentRemoveButton',
  skipVariantsResolver: true,
})(({ theme }) => { throw new Error("STUB"); });

const AttachmentFileIconWrapper = styled('span', {
  name: 'MuiChatComposer',
  slot: 'AttachmentFileIcon',
  skipVariantsResolver: true,
})(({ theme }) => { throw new Error("STUB"); });

function DefaultAttachmentListContent() {
    throw new Error("STUB");
}

const ChatComposerAttachmentList = React.forwardRef<
  HTMLDivElement,
  ChatComposerAttachmentListProps
>(function ChatComposerAttachmentList(inProps, ref) {
    throw new Error("STUB");
});

ChatComposerAttachmentList.propTypes /* remove-proptypes */ = {
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

export { ChatComposerAttachmentList };
