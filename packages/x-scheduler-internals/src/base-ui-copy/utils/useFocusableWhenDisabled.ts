'use client';
import * as React from 'react';

export function useFocusableWhenDisabled(
  parameters: UseFocusableWhenDisabledParameters,
): UseFocusableWhenDisabledReturnValue {
  const {
    focusableWhenDisabled,
    disabled,
    composite = false,
    tabIndex: tabIndexProp = 0,
    isNativeButton,
  } = parameters;

  const isFocusableComposite = composite && focusableWhenDisabled !== false;
  const isNonFocusableComposite = composite && focusableWhenDisabled === false;

  // we can't explicitly assign `undefined` to any of these props because it
  // would otherwise prevent subsequently merged props from setting them
  const props = React.useMemo(() => {
      throw new Error("STUB");
  }, [
    composite,
    disabled,
    focusableWhenDisabled,
    isFocusableComposite,
    isNonFocusableComposite,
    isNativeButton,
    tabIndexProp,
  ]);

  return { props };
}

interface FocusableWhenDisabledProps {
  'aria-disabled'?: boolean | undefined;
  disabled?: boolean | undefined;
  onKeyDown: (event: React.KeyboardEvent) => void;
  tabIndex: number;
}

export interface UseFocusableWhenDisabledParameters {
  /**
   * Whether the component should be focusable when disabled.
   * When `undefined`, composite items are focusable when disabled by default.
   */
  focusableWhenDisabled?: boolean | undefined;
  /**
   * The disabled state of the component.
   */
  disabled: boolean;
  /**
   * Whether this is a composite item or not.
   * @default false
   */
  composite?: boolean | undefined;
  /**
   * @default 0
   */
  tabIndex?: number | undefined;
  /**
   * @default true
   */
  isNativeButton: boolean;
}

export interface UseFocusableWhenDisabledReturnValue {
  props: FocusableWhenDisabledProps;
}

export interface UseFocusableWhenDisabledState {}
