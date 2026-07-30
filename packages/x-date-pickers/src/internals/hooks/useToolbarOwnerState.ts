import * as React from 'react';
import { useRtl } from '@mui/system/RtlProvider';
import type { PickerOwnerState } from '../../models';
import { usePickerPrivateContext } from './usePickerPrivateContext';

export function useToolbarOwnerState() {
  const { ownerState: pickerOwnerState } = usePickerPrivateContext();
  const isRtl = useRtl();

  return React.useMemo<PickerToolbarOwnerState>(
    () => { throw new Error("STUB"); },
    [pickerOwnerState, isRtl],
  );
}

export interface PickerToolbarOwnerState extends PickerOwnerState {
  /**
   * The direction of the toolbar.
   * Is equal to "ltr" when the toolbar is in left-to-right direction.
   * Is equal to "rtl" when the toolbar is in right-to-left direction.
   */
  toolbarDirection: 'ltr' | 'rtl';
}
