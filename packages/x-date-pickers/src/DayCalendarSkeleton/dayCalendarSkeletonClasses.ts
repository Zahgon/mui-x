import generateUtilityClass from '@mui/utils/generateUtilityClass';
import generateUtilityClasses from '@mui/utils/generateUtilityClasses';

export interface DayCalendarSkeletonClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the week element. */
  week: string;
  /** Styles applied to the day element. */
  daySkeleton: string;
}

export type DayCalendarSkeletonClassKey = keyof DayCalendarSkeletonClasses;

export const getDayCalendarSkeletonUtilityClass = (slot: string) =>
  { throw new Error("STUB"); };

export const dayCalendarSkeletonClasses: DayCalendarSkeletonClasses = generateUtilityClasses(
  'MuiDayCalendarSkeleton',
  ['root', 'week', 'daySkeleton'],
);
