'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { SxProps, Theme } from '@mui/system';
import { ComposerTextArea, type ComposerTextAreaProps } from '@mui/x-chat-headless';
import { styled, createUseThemeProps } from '../internals/zero-styled';
import { mergeSlotProps } from '../internals/mergeSlotProps';
import { useChatComposerUtilityClasses, type ChatComposerClasses } from './chatComposerClasses';

const useThemeProps = createUseThemeProps('MuiChatComposerTextArea');

const MAX_ROWS_STYLE = { minHeight: 'unset', margin: 'auto 0px', height: '28px' } as const;

export interface ChatComposerTextAreaProps extends ComposerTextAreaProps {
  className?: string;
  sx?: SxProps<Theme>;
  classes?: Partial<ChatComposerClasses>;
  /**
   * Maximum number of rows the textarea can expand to before it starts scrolling.
   * When set, the textarea starts at 1 row and auto-grows up to `maxRows`.
   */
  maxRows?: number;
}

const ChatComposerTextAreaStyled = styled('textarea', {
  name: 'MuiChatComposer',
  slot: 'TextArea',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

const ChatComposerTextArea = React.forwardRef<HTMLTextAreaElement, ChatComposerTextAreaProps>(
  function ChatComposerTextArea(inProps, ref) {
        throw new Error("STUB");
    },
);

ChatComposerTextArea.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: PropTypes.object,
  className: PropTypes.string,
  /**
   * Maximum number of rows the textarea can expand to before it starts scrolling.
   * When set, the textarea starts at 1 row and auto-grows up to `maxRows`.
   */
  maxRows: PropTypes.number,
  slotProps: PropTypes.object,
  slots: PropTypes.object,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
} as any;

export { ChatComposerTextArea };
