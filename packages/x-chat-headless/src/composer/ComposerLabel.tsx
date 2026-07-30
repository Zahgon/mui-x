'use client';
import * as React from 'react';
import useSlotProps from '@mui/utils/useSlotProps';
import { SlotComponentProps } from '@mui/utils/types';
import { useChatLocaleText } from '../chat/internals/ChatLocaleContext';
import { useComposerContext } from './internals/ComposerContext';
import { type ComposerOwnerState } from './composer.types';

export interface ComposerLabelSlots {
  label: React.ElementType;
}

export interface ComposerLabelSlotProps {
  label?: SlotComponentProps<'label', {}, ComposerOwnerState>;
}

export interface ComposerLabelProps extends Omit<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  'children'
> {
  /**
   * The `id` of the textarea this label is associated with.
   * Passed directly to the native `htmlFor` attribute.
   * When provided, the label is semantically linked to the textarea so that
   * clicking the label focuses the input and screen readers announce it on focus.
   */
  htmlFor?: string;
  /**
   * Label text. Falls back to the locale text `composerInputAriaLabel` when
   * omitted, so the default is consistent with the textarea's `aria-label`.
   */
  children?: React.ReactNode;
  slots?: Partial<ComposerLabelSlots>;
  slotProps?: ComposerLabelSlotProps;
}

type ComposerLabelComponent = ((
  props: ComposerLabelProps & React.RefAttributes<HTMLLabelElement>,
) => React.JSX.Element) & { propTypes?: any };

/**
 * A `<label>` element for the conversation input textarea.
 *
 * Pair this with `Composer.TextArea` to create a proper
 * label-for-input association. This lets screen readers announce the
 * label when the textarea receives focus, and lets users click the label
 * to focus the textarea.
 *
 * ```tsx
 * const textareaId = useId();
 *
 * <Composer.Root>
 *   <Composer.Label htmlFor={textareaId}>
 *     Ask anything
 *   </Composer.Label>
 *   <Composer.TextArea id={textareaId} />
 * </Composer.Root>
 * ```
 *
 * When `children` is omitted the label text falls back to the locale
 * string `composerInputAriaLabel` — the same default used by the textarea's
 * own `aria-label` — so you get consistent announcements without duplication.
 * In that case you may want to visually hide the label while keeping it in
 * the accessibility tree (e.g. via a `.sr-only` utility class).
 */
export const ComposerLabel = React.forwardRef(function ComposerLabel(
  props: ComposerLabelProps,
  ref: React.Ref<HTMLLabelElement>,
) {
    throw new Error("STUB");
}) as ComposerLabelComponent;
