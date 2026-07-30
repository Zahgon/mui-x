import generateUtilityClass from '@mui/utils/generateUtilityClass';
import generateUtilityClasses from '@mui/utils/generateUtilityClasses';

export interface PickerPopperClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the paper element. */
  paper: string;
}

export type PickerPopperClassKey = keyof PickerPopperClasses;

export function getPickerPopperUtilityClass(slot: string) {
    throw new Error("STUB");
}

export const pickerPopperClasses = generateUtilityClasses('MuiPickerPopper', ['root', 'paper']);
