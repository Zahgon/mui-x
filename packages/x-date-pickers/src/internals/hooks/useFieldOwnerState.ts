import * as React from 'react';
import { useRtl } from '@mui/system/RtlProvider';
import type { FieldOwnerState } from '../../models';
import type { FormProps } from '../models';
import { usePickerPrivateContext } from './usePickerPrivateContext';

export function useFieldOwnerState(parameters: UseFieldOwnerStateParameters) {
  const { ownerState: pickerOwnerState } = usePickerPrivateContext();
  const isRtl = useRtl();

  return React.useMemo<FieldOwnerState>(
    () => { throw new Error("STUB"); },
    [pickerOwnerState, parameters.disabled, parameters.readOnly, parameters.required, isRtl],
  );
}

export interface UseFieldOwnerStateParameters extends FormProps {
  required?: boolean;
}
