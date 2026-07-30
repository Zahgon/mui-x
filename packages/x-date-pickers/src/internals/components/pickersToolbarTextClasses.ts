import generateUtilityClass from '@mui/utils/generateUtilityClass';
import generateUtilityClasses from '@mui/utils/generateUtilityClasses';

export interface PickersToolbarTextClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type PickersToolbarTextClassKey = keyof PickersToolbarTextClasses;

export function getPickersToolbarTextUtilityClass(slot: string) {
    throw new Error("STUB");
}

export const pickersToolbarTextClasses = generateUtilityClasses('MuiPickersToolbarText', ['root']);
