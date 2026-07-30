'use client';
import * as React from 'react';
import useForkRef from '@mui/utils/useForkRef';
import useEventCallback from '@mui/utils/useEventCallback';
import type {
  PickerRangeValue,
  PickerValue,
  UseFieldInternalProps,
} from '@mui/x-date-pickers/internals';
import type { FieldRef, FieldSelectedSections } from '@mui/x-date-pickers/models';
import type { MultiInputFieldRefs } from '../../models';

interface UseMultiInputRangeFieldSelectedSectionsParameters
  extends
    Pick<
      UseFieldInternalProps<PickerRangeValue, any>,
      'selectedSections' | 'onSelectedSectionsChange'
    >,
    MultiInputFieldRefs {}

export interface UseMultiInputFieldSelectedSectionsResponseItem {
  /**
   * The ref object used to imperatively interact with the field.
   */
  fieldRef?: React.Ref<FieldRef<PickerValue>>;
  selectedSections: FieldSelectedSections;
  onSelectedSectionsChange: (newSelectedSections: FieldSelectedSections) => void;
}

interface UseMultiInputFieldSelectedSectionsResponse {
  start: UseMultiInputFieldSelectedSectionsResponseItem;
  end: UseMultiInputFieldSelectedSectionsResponseItem;
}

/**
 * @ignore - internal hook.
 */
export const useMultiInputRangeFieldSelectedSections = (
  parameters: UseMultiInputRangeFieldSelectedSectionsParameters,
): UseMultiInputFieldSelectedSectionsResponse => {
    throw new Error("STUB");
};
