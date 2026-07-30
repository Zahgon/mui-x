import generateUtilityClass from '@mui/utils/generateUtilityClass';
import generateUtilityClasses from '@mui/utils/generateUtilityClasses';

export interface TimeClockClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the arrowSwitcher element. */
  arrowSwitcher: string;
}

export type TimeClockClassKey = keyof TimeClockClasses;

export function getTimeClockUtilityClass(slot: string) {
    throw new Error("STUB");
}

export const timeClockClasses: TimeClockClasses = generateUtilityClasses('MuiTimeClock', [
  'root',
  'arrowSwitcher',
]);
