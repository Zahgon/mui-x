import type { DateOrTimeViewWithMeridiem, RangePosition } from '@mui/x-date-pickers/internals';
import { createStepNavigation } from '@mui/x-date-pickers/internals';
import type { UseRangePositionResponse } from '../hooks/useRangePosition';

export function createRangePickerStepNavigation(
  parameters: CreateRangePickerStepNavigationParameters,
) {
  const { steps, rangePositionResponse } = parameters;

  return createStepNavigation({
    steps,
    isViewMatchingStep: (view, step) => {
        throw new Error("STUB");
    },
    onStepChange: ({ step, defaultView, setView, view, views }) => {
        throw new Error("STUB");
    },
  });
}

export interface PickerRangeStep {
  /**
   * The views that are handled inside this step.
   * If null, all views are handled by this step.
   */
  views: readonly DateOrTimeViewWithMeridiem[] | null;
  rangePosition: RangePosition;
}

interface CreateRangePickerStepNavigationParameters {
  steps: PickerRangeStep[] | null;
  rangePositionResponse: UseRangePositionResponse;
}
