'use client';
import * as React from 'react';
import clsx from 'clsx';
import type { StackProps } from '@mui/material/Stack';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled, useThemeProps } from '@mui/material/styles';
import composeClasses from '@mui/utils/composeClasses';
import useSlotProps from '@mui/utils/useSlotProps';
import useForkRef from '@mui/utils/useForkRef';
import {
  cleanFieldResponse,
  useFieldOwnerState,
  PickerFieldUIContext,
  useNullablePickerContext,
} from '@mui/x-date-pickers/internals';
import { useSplitFieldProps } from '@mui/x-date-pickers/hooks';
import { PickersTextField } from '@mui/x-date-pickers/PickersTextField';
import type {
  CreateMultiInputRangeFieldParameters,
  CreateMultiInputRangeFieldReturnValue,
  MultiInputRangeFieldProps,
} from './createMultiInputRangeField.types';
import { useMultiInputRangeField } from '../../../hooks/useMultiInputRangeField';
import type { PickerAnyRangeManager } from '../../models/managers';
import { useTextFieldProps } from './useTextFieldProps';

export function createMultiInputRangeField<TManager extends PickerAnyRangeManager>({
  useManager,
  name,
  getUtilityClass,
  allowTriggerShifting,
}: CreateMultiInputRangeFieldParameters<TManager>): CreateMultiInputRangeFieldReturnValue<TManager> {
    throw new Error("STUB");
}
