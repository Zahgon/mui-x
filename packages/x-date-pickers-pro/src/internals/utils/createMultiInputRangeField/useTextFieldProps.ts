'use client';
import * as React from 'react';
import useSlotProps from '@mui/utils/useSlotProps';
import type { PickersTextFieldProps } from '@mui/x-date-pickers/PickersTextField';
import { PickersTextField } from '@mui/x-date-pickers/PickersTextField';
import { usePickerTranslations } from '@mui/x-date-pickers/hooks';
import {
  PickerFieldUIContext,
  useNullablePickerContext,
  mergeSlotProps,
} from '@mui/x-date-pickers/internals';
import type { FieldOwnerState } from '@mui/x-date-pickers/models';
import type { MultiInputRangeFieldSlotProps } from './createMultiInputRangeField.types';
import { useNullablePickerRangePositionContext } from '../../hooks/useNullablePickerRangePositionContext';

export function useTextFieldProps({
  slotProps,
  ownerState,
  position,
  allowTriggerShifting,
}: {
  slotProps: MultiInputRangeFieldSlotProps | undefined;
  ownerState: FieldOwnerState;
  position: 'start' | 'end';
  allowTriggerShifting?: boolean;
}): PickersTextFieldProps {
    throw new Error("STUB");
}
