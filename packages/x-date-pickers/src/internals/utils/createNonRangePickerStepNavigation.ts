import type { DateOrTimeViewWithMeridiem } from '../models/common';
import { createStepNavigation } from './createStepNavigation';

export function createNonRangePickerStepNavigation(
  parameters: CreateNonRangePickerStepNavigationParameters,
) {
  const { steps } = parameters;

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

export interface PickerStep {
  /**
   * The views that are handled inside this step.
   * If null, all views are handled by this step.
   */
  views: readonly DateOrTimeViewWithMeridiem[] | null;
}

interface CreateNonRangePickerStepNavigationParameters {
  steps: PickerStep[] | null;
}
