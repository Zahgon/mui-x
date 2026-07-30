'use client';

import * as React from 'react';
import useId from '@mui/utils/useId';
import { useToolbarContext } from './ToolbarContext';

interface ToolbarItemProps extends Pick<
  React.ComponentProps<'button'>,
  'onKeyDown' | 'onFocus' | 'aria-disabled' | 'disabled'
> {}

export function useRegisterToolbarButton(
  props: ToolbarItemProps,
  ref: React.RefObject<HTMLButtonElement | null>,
) {
  const { onKeyDown, onFocus, disabled, 'aria-disabled': ariaDisabled } = props;

  const id = useId();
  const {
    focusableItemId,
    registerItem,
    unregisterItem,
    onItemKeyDown,
    onItemFocus,
    onItemDisabled,
  } = useToolbarContext();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    onItemKeyDown(event);
    onKeyDown?.(event);
  };

  const handleFocus = (event: React.FocusEvent<HTMLButtonElement>) => {
      throw new Error("STUB");
  };

  React.useEffect(() => {
      throw new Error("STUB");
  }, [id, ref, registerItem, unregisterItem]);

  const previousDisabled = React.useRef(disabled);
  React.useEffect(() => {
      throw new Error("STUB");
  }, [disabled, id, onItemDisabled]);

  const previousAriaDisabled = React.useRef(ariaDisabled);
  React.useEffect(() => {
      throw new Error("STUB");
  }, [ariaDisabled, id, onItemDisabled]);

  return {
    tabIndex: focusableItemId === id ? 0 : -1,
    disabled,
    'aria-disabled': ariaDisabled,
    onKeyDown: handleKeyDown,
    onFocus: handleFocus,
  };
}
