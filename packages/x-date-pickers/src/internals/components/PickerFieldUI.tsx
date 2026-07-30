'use client';
import * as React from 'react';
import useEventCallback from '@mui/utils/useEventCallback';
import useForkRef from '@mui/utils/useForkRef';
import resolveComponentProps from '@mui/utils/resolveComponentProps';
import type { IconButtonProps } from '@mui/material/IconButton';
import MuiIconButton from '@mui/material/IconButton';
import type { InputAdornmentProps } from '@mui/material/InputAdornment';
import MuiInputAdornment from '@mui/material/InputAdornment';
import type { SvgIconProps } from '@mui/material/SvgIcon';
import useSlotProps from '@mui/utils/useSlotProps';
import { warnOnce } from '@mui/x-internals/warning';
import type { MakeOptional, SlotComponentPropsFromProps } from '@mui/x-internals/types';
import type { FieldOwnerState } from '../../models';
import type { UseFieldOwnerStateParameters } from '../hooks/useFieldOwnerState';
import { useFieldOwnerState } from '../hooks/useFieldOwnerState';
import { usePickerTranslations } from '../../hooks';
import { ClearIcon as MuiClearIcon } from '../../icons';
import { useNullablePickerContext } from '../hooks/useNullablePickerContext';
import type { UseFieldReturnValue, UseFieldProps } from '../hooks/useField';
import type { PickersTextFieldProps } from '../../PickersTextField';
import { PickersTextField } from '../../PickersTextField';

export const cleanFieldResponse = <
  TFieldResponse extends MakeOptional<
    UseFieldReturnValue<ExportedPickerFieldUIProps & { [key: string]: any }>,
    'onClear' | 'clearable'
  >,
>(
  fieldResponse: TFieldResponse,
): ExportedPickerFieldUIProps & {
  openPickerAriaLabel: string;
  textFieldProps: Partial<PickersTextFieldProps>;
} => {
    throw new Error("STUB");
};

export const PickerFieldUIContext = React.createContext<PickerFieldUIContextValue>({
  slots: {},
  slotProps: {},
  inputRef: undefined,
});

/**
 * Adds the button to open the Picker and the button to clear the value of the field.
 * @ignore - internal component.
 */
export function PickerFieldUI<TProps extends UseFieldProps>(props: PickerFieldUIProps<TProps>) {
    throw new Error("STUB");
}

export interface ExportedPickerFieldUIProps {
  /**
   * If `true`, a clear button will be shown in the field allowing value clearing.
   * @default false
   */
  clearable?: boolean;
  /**
   * Callback fired when the clear button is clicked.
   */
  onClear?: React.MouseEventHandler;
  /**
   * The position at which the clear button is placed.
   * If the field is not clearable, the button is not rendered.
   * @default 'end'
   */
  clearButtonPosition?: 'start' | 'end';
  /**
   * The position at which the opening button is placed.
   * If there is no Picker to open, the button is not rendered
   * @default 'end'
   */
  openPickerButtonPosition?: 'start' | 'end';
}

export interface PickerFieldUIProps<TProps extends UseFieldProps> {
  /**
   * Object returned by the `useField` hook or one of its wrapper (for example `useDateField`).
   */
  fieldResponse: UseFieldReturnValue<TProps>;
  /**
   * The component to use to render the Picker opening icon if none is provided in the Picker's slots.
   */
  defaultOpenPickerIcon: React.ElementType;
}

export interface PickerFieldUISlots {
  /**
   * Form control with an input to render the value.
   * @default <PickersTextField />
   */
  textField?: React.ElementType;
  /**
   * Component displayed on the start or end input adornment used to open the Picker.
   * @default InputAdornment
   */
  inputAdornment?: React.ElementType<InputAdornmentProps>;
  /**
   * Button to clear the value.
   * @default IconButton
   */
  clearButton?: React.ElementType;
  /**
   * Icon to display in the button used to clean the value.
   * @default ClearIcon
   */
  clearIcon?: React.ElementType;
}

export interface PickerFieldUISlotsFromContext extends PickerFieldUISlots {
  /**
   * Button to open the Picker.
   * @default IconButton
   */
  openPickerButton?: React.ElementType<IconButtonProps>;
  /**
   * Icon to display in the button used to open the Picker.
   */
  openPickerIcon?: React.ElementType;
}

export interface PickerFieldUISlotProps {
  textField?: SlotComponentPropsFromProps<PickersTextFieldProps, {}, FieldOwnerState>;
  inputAdornment?: SlotComponentPropsFromProps<
    InputAdornmentProps,
    {},
    FieldInputAdornmentOwnerState
  >;
  clearIcon?: SlotComponentPropsFromProps<SvgIconProps, {}, FieldOwnerState>;
  clearButton?: SlotComponentPropsFromProps<IconButtonProps, {}, FieldOwnerState>;
}

export interface PickerFieldUISlotPropsFromContext extends PickerFieldUISlotProps {
  openPickerButton?: SlotComponentPropsFromProps<IconButtonProps, {}, FieldOwnerState>;
  openPickerIcon?: SlotComponentPropsFromProps<SvgIconProps, {}, FieldOwnerState>;
}

interface FieldInputAdornmentOwnerState extends FieldOwnerState {
  position: 'start' | 'end';
}

interface PickerFieldUIContextValue {
  inputRef: React.Ref<HTMLInputElement> | undefined;
  slots: PickerFieldUISlotsFromContext;
  slotProps: PickerFieldUISlotPropsFromContext;
}

export function mergeSlotProps<TProps extends {}, TOwnerState extends FieldOwnerState>(
  slotPropsA: SlotComponentPropsFromProps<TProps, {}, TOwnerState> | undefined,
  slotPropsB: SlotComponentPropsFromProps<TProps, {}, TOwnerState> | undefined,
) {
  if (!slotPropsA) {
    return slotPropsB;
  }

  if (!slotPropsB) {
    return slotPropsA;
  }

  return (ownerState: TOwnerState) => {
      throw new Error("STUB");
  };
}

/**
 * The `textField` slot props cannot be handled inside `PickerFieldUI` because it would be a breaking change to not pass the enriched props to `useField`.
 * TODO v10: Remove the `textField` slot and clean this logic up.
 */
export function useFieldTextFieldProps<TProps extends UseFieldOwnerStateParameters>(
  parameters: UseFieldTextFieldPropsParameters,
) {
  const { ref, externalForwardedProps, slotProps } = parameters;
  const pickerFieldUIContext = React.useContext(PickerFieldUIContext);
  const pickerContext = useNullablePickerContext();
  const ownerState = useFieldOwnerState(externalForwardedProps);

  // TODO v10: remove
  // Strip the legacy `InputProps` / `inputProps` / `InputLabelProps` / `FormHelperTextProps`
  // before they reach `PickersTextField`, which would silently ignore them. JS users without
  // TypeScript checks would otherwise see their configuration vanish.
  const {
    InputProps: legacyInputProps,
    inputProps: legacyHtmlInputProps,
    InputLabelProps: legacyInputLabelProps,
    FormHelperTextProps: legacyFormHelperTextProps,
    ...sanitizedExternalForwardedProps
  } = (externalForwardedProps ?? {}) as Record<string, unknown>;

  if (process.env.NODE_ENV !== 'production') {
    if (
      legacyInputProps ||
      legacyHtmlInputProps ||
      legacyInputLabelProps ||
      legacyFormHelperTextProps
    ) {
      warnOnce([
        'MUI X: Field components no longer accept the `InputProps`, `inputProps`, `InputLabelProps` and `FormHelperTextProps` props.',
        'They have been dropped to avoid leaking unknown attributes onto the underlying form control.',
        'Use the nested `slotProps.textField.slotProps.{input,htmlInput,inputLabel,formHelperText}` shape instead.',
      ]);
    }
  }

  const textFieldProps = useSlotProps({
    elementType: PickersTextField,
    externalSlotProps: mergeSlotProps(
      pickerFieldUIContext.slotProps.textField as any,
      slotProps?.textField as any,
    ),
    externalForwardedProps: sanitizedExternalForwardedProps,
    additionalProps: {
      ref,
      sx: pickerContext?.rootSx,
      label: pickerContext?.label,
      name: pickerContext?.name,
      className: pickerContext?.rootClassName,
      inputRef: pickerFieldUIContext.inputRef,
    },
    ownerState,
  }) as any as TProps;

  // When requested, open the picker when the user focuses/clicks the field to edit
  if (
    pickerContext &&
    pickerContext.keepOpenDuringFieldFocus &&
    pickerContext.triggerStatus === 'enabled' &&
    !pickerContext.open &&
    !pickerContext.readOnly &&
    !pickerContext.disabled
  ) {
    const prevOnFocus = (textFieldProps as any).onFocus as React.FocusEventHandler | undefined;
    const prevOnMouseDown = (textFieldProps as any).onMouseDown as
      React.MouseEventHandler | undefined;

    const isFromOpenButton = (event: React.SyntheticEvent) => {
      const nativeEvent: any = (event as any).nativeEvent ?? event;
      const path: any[] | undefined = nativeEvent?.composedPath?.();
      if (Array.isArray(path)) {
        for (const el of path) {
          if (el && el.getAttribute && el.getAttribute('data-mui-picker-open-button') === 'true') {
            return true;
          }
        }
      }
      const target = event.target as Element | null;
      if (target && (target as any).closest) {
        return Boolean((target as any).closest('[data-mui-picker-open-button="true"]'));
      }
      return false;
    };

    (textFieldProps as any).onFocus = (event: React.FocusEvent) => {
        throw new Error("STUB");
    };

    (textFieldProps as any).onMouseDown = (event: React.MouseEvent) => {
        throw new Error("STUB");
    };
  }

  return textFieldProps;
}

interface UseFieldTextFieldPropsParameters {
  slotProps:
    | {
        textField?: PickerFieldUISlotProps['textField'];
      }
    | undefined;
  ref: React.Ref<HTMLDivElement>;
  externalForwardedProps: any;
}

export function PickerFieldUIContextProvider(props: PickerFieldUIContextProviderProps) {
    throw new Error("STUB");
}

interface PickerFieldUIContextProviderProps {
  children: React.ReactNode;
  inputRef: React.Ref<HTMLInputElement> | undefined;
  slots: PickerFieldUISlotsFromContext | undefined;
  slotProps: PickerFieldUISlotPropsFromContext | undefined;
}
