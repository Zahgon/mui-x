'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { SxProps, Theme } from '@mui/system';
import { useMessageContentTabIndex } from '@mui/x-chat-headless';
import { styled, createUseThemeProps } from '../internals/zero-styled';
import { useCopyToClipboard } from '../internals/useCopyToClipboard';
import { useChatCodeBlockUtilityClasses, type ChatCodeBlockClasses } from './chatCodeBlockClasses';

export interface ChatCodeBlockProps {
  /**
   * The code string to display.
   */
  children: string;
  /**
   * Language identifier shown in the header (e.g. "typescript", "python").
   */
  language?: string;
  /**
   * Optional syntax highlighter. Receives the code string and a language identifier,
   * and should return highlighted React nodes. When omitted, raw code is displayed.
   * @param {string} code - The code string to highlight.
   * @param {string} language - The language identifier for syntax highlighting.
   * @returns {React.ReactNode} The highlighted React nodes.
   */
  highlighter?: (code: string, language: string) => React.ReactNode;
  className?: string;
  sx?: SxProps<Theme>;
  classes?: Partial<ChatCodeBlockClasses>;
}

const useThemeProps = createUseThemeProps('MuiChatCodeBlock');

// Inline SVGs — avoids @mui/icons-material dependency
function CopyIcon() {
    throw new Error("STUB");
}

function CheckIcon() {
    throw new Error("STUB");
}

const ChatCodeBlockRoot = styled('div', {
  name: 'MuiChatCodeBlock',
  slot: 'Root',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

const ChatCodeBlockHeader = styled('div', {
  name: 'MuiChatCodeBlock',
  slot: 'Header',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

const ChatCodeBlockLanguageLabel = styled('span', {
  name: 'MuiChatCodeBlock',
  slot: 'LanguageLabel',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

const ChatCodeBlockCopyButton = styled('button', {
  name: 'MuiChatCodeBlock',
  slot: 'CopyButton',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

const ChatCodeBlockPre = styled('pre', {
  name: 'MuiChatCodeBlock',
  slot: 'Pre',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

const ChatCodeBlockCode = styled('code', {
  name: 'MuiChatCodeBlock',
  slot: 'Code',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

const ChatCodeBlock = React.forwardRef<HTMLDivElement, ChatCodeBlockProps>(
  function ChatCodeBlock(inProps, ref) {
        throw new Error("STUB");
    },
);

ChatCodeBlock.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The code string to display.
   */
  children: PropTypes.string.isRequired,
  classes: PropTypes.object,
  className: PropTypes.string,
  /**
   * Optional syntax highlighter. Receives the code string and a language identifier,
   * and should return highlighted React nodes. When omitted, raw code is displayed.
   * @param {string} code - The code string to highlight.
   * @param {string} language - The language identifier for syntax highlighting.
   * @returns {React.ReactNode} The highlighted React nodes.
   */
  highlighter: PropTypes.func,
  /**
   * Language identifier shown in the header (e.g. "typescript", "python").
   */
  language: PropTypes.string,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
} as any;

export { ChatCodeBlock };
