'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { SxProps, Theme } from '@mui/system';
import {
  ComposerRoot,
  useChatVariant,
  type ComposerRootProps,
  type ChatAttachmentsConfig,
  type ChatVariant,
} from '@mui/x-chat-headless';
import { styled, createUseThemeProps } from '../internals/zero-styled';
import { mergeSlotProps } from '../internals/mergeSlotProps';
import {
  chatComposerClasses,
  useChatComposerUtilityClasses,
  type ChatComposerClasses,
} from './chatComposerClasses';
import { ChatComposerTextArea } from './ChatComposerTextArea';
import { ChatComposerToolbar } from './ChatComposerToolbar';
import { ChatComposerSendButton } from './ChatComposerSendButton';
import { ChatComposerAttachButton } from './ChatComposerAttachButton';
import { ChatComposerAttachmentList } from './ChatComposerAttachmentList';
import DefaultSendIcon from '../icons/DefaultSendIcon';
import DefaultAttachIcon from '../icons/DefaultAttachIcon';

const useThemeProps = createUseThemeProps('MuiChatComposer');

export interface ChatComposerFeatures {
  /**
   * Whether to enable attachment functionality (attach button and attachment preview list),
   * and optionally configure attachment validation constraints.
   *
   * - `true` – enable with no restrictions (default).
   * - `false` – disable attachment functionality entirely.
   * - `{ acceptedMimeTypes, maxFileCount, maxFileSize, onAttachmentReject }` – enable
   *   with the specified validation rules.
   * @default true
   */
  attachments?: boolean | ChatAttachmentsConfig;
}

export interface ChatComposerProps extends ComposerRootProps {
  className?: string;
  sx?: SxProps<Theme>;
  classes?: Partial<ChatComposerClasses>;
  /**
   * Feature flags to control composer capabilities.
   */
  features?: ChatComposerFeatures;
  /**
   * The visual layout variant of the composer.
   * - `'default'` – Stacked layout: attachment list, textarea, then toolbar below.
   * - `'compact'` – Inline layout: start actions, textarea, end actions in a single row.
   *
   * When omitted, inherits from the nearest `ChatVariantProvider` (e.g. set by `ChatBox`).
   * @default 'default'
   */
  variant?: ChatVariant;
}

const ChatComposerStyled = styled('form', {
  name: 'MuiChatComposer',
  slot: 'Root',
  overridesResolver: (props, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

const DefaultComposerContent = React.memo(function DefaultComposerContent({
  features,
}: {
  features?: ChatComposerFeatures;
}) {
    throw new Error("STUB");
});

// @ts-expect-error React.memo typing doesn't include propTypes

DefaultComposerContent.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  features: PropTypes.shape({
    attachments: PropTypes.oneOfType([
      PropTypes.shape({
        acceptedMimeTypes: PropTypes.arrayOf(PropTypes.string),
        maxFileCount: PropTypes.number,
        maxFileSize: PropTypes.number,
        onAttachmentReject: PropTypes.func,
      }),
      PropTypes.bool,
    ]),
  }),
} as any;

const CompactComposerContent = React.memo(function CompactComposerContent({
  features,
}: {
  features?: ChatComposerFeatures;
}) {
    throw new Error("STUB");
});

// @ts-expect-error React.memo typing doesn't include propTypes

CompactComposerContent.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  features: PropTypes.shape({
    attachments: PropTypes.oneOfType([
      PropTypes.shape({
        acceptedMimeTypes: PropTypes.arrayOf(PropTypes.string),
        maxFileCount: PropTypes.number,
        maxFileSize: PropTypes.number,
        onAttachmentReject: PropTypes.func,
      }),
      PropTypes.bool,
    ]),
  }),
} as any;

const ChatComposer = React.forwardRef<HTMLFormElement, ChatComposerProps>(
  function ChatComposer(inProps, ref) {
        throw new Error("STUB");
    },
);

ChatComposer.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Configuration for attachment validation constraints.
   * When provided, file attachments are validated against these rules.
   */
  attachmentConfig: PropTypes.shape({
    acceptedMimeTypes: PropTypes.arrayOf(PropTypes.string),
    maxFileCount: PropTypes.number,
    maxFileSize: PropTypes.number,
    onAttachmentReject: PropTypes.func,
  }),
  classes: PropTypes.object,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  /**
   * Feature flags to control composer capabilities.
   */
  features: PropTypes.shape({
    attachments: PropTypes.oneOfType([
      PropTypes.shape({
        acceptedMimeTypes: PropTypes.arrayOf(PropTypes.string),
        maxFileCount: PropTypes.number,
        maxFileSize: PropTypes.number,
        onAttachmentReject: PropTypes.func,
      }),
      PropTypes.bool,
    ]),
  }),
  /**
   * Handler invoked when the form is submitted.
   *
   * Native form submission is always prevented before this handler runs.
   * Call `event.preventDefault()` from inside the handler to also suppress the
   * composer's own `submit()` action; otherwise the composer submits as usual
   * after the handler returns.
   */
  onSubmit: PropTypes.func,
  slotProps: PropTypes.object,
  slots: PropTypes.object,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
  /**
   * The visual layout variant of the composer.
   * - `'default'` – Stacked layout: attachment list, textarea, then toolbar below.
   * - `'compact'` – Inline layout: start actions, textarea, end actions in a single row.
   *
   * When omitted, inherits from the nearest `ChatVariantProvider` (e.g. set by `ChatBox`).
   * @default 'default'
   */
  variant: PropTypes.oneOf(['compact', 'default']),
} as any;

export { ChatComposer };
