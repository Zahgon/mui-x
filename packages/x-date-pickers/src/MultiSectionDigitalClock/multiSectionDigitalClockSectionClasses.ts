import generateUtilityClass from '@mui/utils/generateUtilityClass';
import generateUtilityClasses from '@mui/utils/generateUtilityClasses';

export interface MultiSectionDigitalClockSectionClasses {
  /** Styles applied to the root (list) element. */
  root: string;
  /** Styles applied to the list item (by default: MenuItem) element. */
  item: string;
}

export type MultiSectionDigitalClockSectionClassKey = keyof MultiSectionDigitalClockSectionClasses;

export function getMultiSectionDigitalClockSectionUtilityClass(slot: string) {
    throw new Error("STUB");
}

export const multiSectionDigitalClockSectionClasses: MultiSectionDigitalClockSectionClasses =
  generateUtilityClasses('MuiMultiSectionDigitalClockSection', ['root', 'item']);
