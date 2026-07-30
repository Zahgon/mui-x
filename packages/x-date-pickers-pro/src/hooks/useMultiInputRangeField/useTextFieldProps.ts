'use client';
import * as React from 'react';
import useEventCallback from '@mui/utils/useEventCallback';
import { useDateManager, useDateTimeManager, useTimeManager } from '@mui/x-date-pickers/managers';
import type { UseValidationReturnValue } from '@mui/x-date-pickers/validation';
import type { PickerValueType } from '@mui/x-date-pickers/models';
import type {
  FieldChangeHandler,
  FieldChangeHandlerContext,
  PickerAnyManager,
  PickerManagerError,
  PickerRangeValue,
  PickerValue,
  RangePosition,
  UseFieldInternalProps,
  UseFieldReturnValue,
} from '@mui/x-date-pickers/internals';
import {
  useField,
  useNullableFieldPrivateContext,
  useNullablePickerContext,
  usePickerPrivateContext,
} from '@mui/x-date-pickers/internals';
import type { PickerAnyRangeManager } from '../../internals/models/managers';
import { useNullablePickerRangePositionContext } from '../../internals/hooks/useNullablePickerRangePositionContext';
import type { UseMultiInputFieldSelectedSectionsResponseItem } from './useMultiInputRangeFieldSelectedSections';
import type { UseMultiInputRangeFieldTextFieldProps } from './useMultiInputRangeField';

/**
 * @ignore - internal hook.
 */
export function useTextFieldProps<
  TManager extends PickerAnyRangeManager,
  TForwardedProps extends UseTextFieldBaseForwardedProps,
>(
  parameters: UseTextFieldPropsParameters<TManager, TForwardedProps>,
): UseMultiInputRangeFieldTextFieldProps<TForwardedProps> {
    throw new Error("STUB");
}

interface UseTextFieldPropsParameters<
  TManager extends PickerAnyRangeManager,
  TForwardedProps extends UseTextFieldBaseForwardedProps,
> {
  valueType: PickerValueType;
  value: PickerRangeValue;
  onChange: FieldChangeHandler<PickerRangeValue, PickerManagerError<TManager>>;
  autoFocus: boolean | undefined;
  forwardedProps: TForwardedProps;
  sharedInternalProps: UseTextFieldSharedInternalProps<TManager>;
  selectedSectionProps: UseMultiInputFieldSelectedSectionsResponseItem;
  position: RangePosition;
  validation: UseValidationReturnValue<PickerRangeValue, PickerManagerError<TManager>>;
}

export interface UseTextFieldBaseForwardedProps {
  onKeyDown?: React.KeyboardEventHandler;
  onClick?: React.MouseEventHandler;
  onFocus?: React.FocusEventHandler;
  [key: string]: any;
}

interface UseTextFieldSharedInternalProps<TManager extends PickerAnyRangeManager> extends Pick<
  UseFieldInternalProps<PickerValue, PickerManagerError<TManager>>,
  'disabled' | 'readOnly' | 'timezone' | 'format' | 'formatDensity' | 'shouldRespectLeadingZeros'
> {}
