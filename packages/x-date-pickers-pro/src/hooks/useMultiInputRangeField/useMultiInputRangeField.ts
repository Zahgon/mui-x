'use client';
import type {
  PickerManagerFieldInternalProps,
  UseFieldReturnValue,
} from '@mui/x-date-pickers/internals';
import {
  useControlledValue,
  useFieldInternalPropsWithDefaults,
} from '@mui/x-date-pickers/internals';
import { useValidation } from '@mui/x-date-pickers/validation';
import type { UseTextFieldBaseForwardedProps } from './useTextFieldProps';
import { useTextFieldProps } from './useTextFieldProps';
import { useMultiInputRangeFieldSelectedSections } from './useMultiInputRangeFieldSelectedSections';
import type { PickerAnyRangeManager } from '../../internals/models/managers';
import type { UseMultiInputRangeFieldRootPropsReturnValue } from './useMultiInputRangeFieldRootProps';
import { useMultiInputRangeFieldRootProps } from './useMultiInputRangeFieldRootProps';

/**
 * Basic example:
 *
 * ```tsx
 * import Box from '@mui/material/Box';
 * import { useSplitFieldProps } from '@mui/x-date-pickers/hooks';
 * import { PickersTextField } from '@mui/x-date-pickers/PickersTextField';
 * import { useDateRangeManager } from '@mui/x-date-pickers-pro/managers';
 *
 * function MultiInputField(props) {
 *   const manager = useDateRangeManager();
 *   const { internalProps, forwardedProps } = useSplitFieldProps(props, 'date');
 *   const response = useMultiInputRangeField({
 *     manager,
 *     internalProps,
 *     startTextFieldProps: {},
 *     endTextFieldProps: {},
 *     rootProps: forwardedProps,
 *   });
 *
 *   return (
 *     <Box {...response.root}>
 *       <PickersTextField {...response.startTextField} />
 *       <span>{' – '}</span>
 *       <PickersTextField {...response.endTextField} />
 *     </Box>
 *   );
 * }
 * ```
 *
 * @param {UseMultiInputRangeFieldParameters<TManager, TTextFieldProps, TRootProps>} parameters The parameters of the hook.
 * @param {TManager} parameters.manager The manager of the field.
 * @param {PickerManagerFieldInternalProps<TManager>} parameters.internalProps The internal props of the field.
 * @param {TTextFieldProps} parameters.startForwardedProps The forwarded props of the start field.
 * @param {TTextFieldProps} parameters.endForwardedProps The forwarded props of the end field.
 * @returns {UseMultiInputRangeFieldReturnValue<TTextFieldProps, TRootProps>} The props to pass to the start and the end components.
 */
export function useMultiInputRangeField<
  TManager extends PickerAnyRangeManager,
  TTextFieldProps extends UseTextFieldBaseForwardedProps,
  TRootProps extends { [key: string]: any },
>(
  parameters: UseMultiInputRangeFieldParameters<TManager, TTextFieldProps, TRootProps>,
): UseMultiInputRangeFieldReturnValue<TTextFieldProps, TRootProps> {
    throw new Error("STUB");
}

interface UseMultiInputRangeFieldParameters<
  TManager extends PickerAnyRangeManager,
  TTextFieldProps extends { [key: string]: any },
  TRootProps extends { [key: string]: any },
> {
  manager: TManager;
  internalProps: PickerManagerFieldInternalProps<TManager>;
  rootProps: TRootProps;
  startTextFieldProps: TTextFieldProps;
  endTextFieldProps: TTextFieldProps;
}

interface UseMultiInputRangeFieldReturnValue<
  TTextFieldProps extends { [key: string]: any },
  TRootProps extends { [key: string]: any },
> {
  root: UseMultiInputRangeFieldRootPropsReturnValue<TRootProps>;
  startTextField: UseMultiInputRangeFieldTextFieldProps<TTextFieldProps>;
  endTextField: UseMultiInputRangeFieldTextFieldProps<TTextFieldProps>;
}

export type UseMultiInputRangeFieldTextFieldProps<
  TForwardedProps extends UseTextFieldBaseForwardedProps = UseTextFieldBaseForwardedProps,
> = Omit<
  UseFieldReturnValue<
    TForwardedProps & {
      onKeyDown: React.KeyboardEventHandler;
      onClick: React.MouseEventHandler;
      onFocus: React.FocusEventHandler;
      id: string;
    }
  >,
  'onClear' | 'clearable' | 'openPickerAriaLabel'
>;
