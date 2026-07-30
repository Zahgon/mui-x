'use client';
import * as React from 'react';
import useSlotProps from '@mui/utils/useSlotProps';
import { SlotComponentProps } from '@mui/utils/types';
import { useComposerContext } from './internals/ComposerContext';
import { type ComposerHelperTextOwnerState } from './composer.types';

export interface ComposerHelperTextSlots {
  helperText: React.ElementType;
}

export interface ComposerHelperTextSlotProps {
  helperText?: SlotComponentProps<'div', {}, ComposerHelperTextOwnerState>;
}

export interface ComposerHelperTextProps extends React.HTMLAttributes<HTMLDivElement> {
  slots?: Partial<ComposerHelperTextSlots>;
  slotProps?: ComposerHelperTextSlotProps;
}

type ComposerHelperTextComponent = ((
  props: ComposerHelperTextProps & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element | null) & { propTypes?: any };

export const ComposerHelperText = React.forwardRef(function ComposerHelperText(
  props: ComposerHelperTextProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as ComposerHelperTextComponent;
