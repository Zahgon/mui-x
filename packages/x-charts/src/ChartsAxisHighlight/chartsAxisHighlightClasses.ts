import generateUtilityClass from '@mui/utils/generateUtilityClass';
import generateUtilityClasses from '@mui/utils/generateUtilityClasses';

export interface ChartsAxisHighlightClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type ChartsAxisHighlightClassKey = keyof ChartsAxisHighlightClasses;

export function getAxisHighlightUtilityClass(slot: string) {
    throw new Error("STUB");
}

export const chartsAxisHighlightClasses: ChartsAxisHighlightClasses = generateUtilityClasses(
  'MuiChartsAxisHighlight',
  ['root'],
);
