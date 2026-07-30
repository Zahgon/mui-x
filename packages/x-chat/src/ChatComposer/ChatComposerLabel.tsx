'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { SxProps, Theme } from '@mui/system';
import { ComposerLabel, type ComposerLabelProps } from '@mui/x-chat-headless';
import { styled, createUseThemeProps } from '../internals/zero-styled';
import { mergeSlotProps } from '../internals/mergeSlotProps';
import { useChatComposerUtilityClasses, type ChatComposerClasses } from './chatComposerClasses';

const useThemeProps = createUseThemeProps('MuiChatComposerLabel');

export interface ChatComposerLabelProps extends ComposerLabelProps {
  className?: string;
  sx?: SxProps<Theme>;
  classes?: Partial<ChatComposerClasses>;
}

const ChatComposerLabelStyled = styled('label', {
  name: 'MuiChatComposer',
  slot: 'Label',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

const ChatComposerLabel = React.forwardRef<HTMLLabelElement, ChatComposerLabelProps>(
  function ChatComposerLabel(inProps, ref) {
        throw new Error("STUB");
    },
);

ChatComposerLabel.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Label text. Falls back to the locale text `composerInputAriaLabel` when
   * omitted, so the default is consistent with the textarea's `aria-label`.
   */
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  /**
   * The `id` of the textarea this label is associated with.
   * Passed directly to the native `htmlFor` attribute.
   * When provided, the label is semantically linked to the textarea so that
   * clicking the label focuses the input and screen readers announce it on focus.
   */
  htmlFor: PropTypes.string,
  slotProps: PropTypes.object,
  slots: PropTypes.object,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
} as any;

export { ChatComposerLabel };
