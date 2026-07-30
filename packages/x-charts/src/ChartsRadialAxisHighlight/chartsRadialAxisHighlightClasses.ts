import generateUtilityClass from '@mui/utils/generateUtilityClass';
import generateUtilityClasses from '@mui/utils/generateUtilityClasses';

export interface ChartsRadialAxisHighlightClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type ChartsRadialAxisHighlightClassKey = keyof ChartsRadialAxisHighlightClasses;

export function getRadialAxisHighlightUtilityClass(slot: string) {
    throw new Error("STUB");
}

export const chartsRadialAxisHighlightClasses: ChartsRadialAxisHighlightClasses =
  generateUtilityClasses('MuiChartsRadialAxisHighlight', ['root']);
