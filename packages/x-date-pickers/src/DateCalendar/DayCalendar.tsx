'use client';
import * as React from 'react';
import useEventCallback from '@mui/utils/useEventCallback';
import Typography from '@mui/material/Typography';
import useSlotProps from '@mui/utils/useSlotProps';
import { useRtl } from '@mui/system/RtlProvider';
import { styled, useThemeProps } from '@mui/material/styles';
import composeClasses from '@mui/utils/composeClasses';
import clsx from 'clsx';
import type { DefaultizedProps, SlotComponentPropsFromProps } from '@mui/x-internals/types';
import type { PickerDayOwnerStateBase, PickerDayProps } from '../PickerDay';
import { PickerDay } from '../PickerDay';
import type { ExportedPickerDayProps } from '../PickerDay/PickerDay.types';
import { usePickerAdapter, usePickerTranslations } from '../hooks';
import { useNow } from '../internals/hooks/useUtils';
import type { PickerOnChangeFn } from '../internals/hooks/useViews';
import { DAY_SIZE, DAY_MARGIN } from '../internals/constants/dimensions';
import type { SlideDirection, SlideTransitionProps } from './PickersSlideTransition';
import { PickersSlideTransition } from './PickersSlideTransition';
import type {
  BaseDateValidationProps,
  DayValidationProps,
  MonthValidationProps,
  YearValidationProps,
} from '../internals/models/validation';
import { useIsDateDisabled } from './useIsDateDisabled';
import { findClosestEnabledDate, getWeekdays } from '../internals/utils/date-utils';
import type { DayCalendarClasses } from './dayCalendarClasses';
import { getDayCalendarUtilityClass } from './dayCalendarClasses';
import type { PickerValidDate, TimezoneProps } from '../models';
import type { DateCalendarClasses } from './dateCalendarClasses';
import type { FormProps } from '../internals/models/formProps';
import { usePickerDayOwnerState } from '../internals/hooks/usePickerDayOwnerState';

export interface DayCalendarSlots {
  /**
   * Custom component for day.
   * Check the [PickerDay](https://mui.com/x/api/date-pickers/picker-day/) component.
   * @default PickerDay
   */
  day?: React.ElementType<PickerDayProps>;
}

export interface DayCalendarSlotProps {
  day?: SlotComponentPropsFromProps<PickerDayProps, {}, PickerDayOwnerStateBase>;
}

export interface ExportedDayCalendarProps extends ExportedPickerDayProps {
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading?: boolean;
  /**
   * Component rendered on the "day" view when `props.loading` is true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => "…"
   */
  renderLoading?: () => React.ReactNode;
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {PickerValidDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: PickerValidDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter?: (date: PickerValidDate) => string;
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber?: boolean;
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber?: number;
}

export interface DayCalendarProps
  extends
    ExportedDayCalendarProps,
    DayValidationProps,
    MonthValidationProps,
    YearValidationProps,
    Required<BaseDateValidationProps>,
    DefaultizedProps<TimezoneProps, 'timezone'>,
    FormProps {
  className?: string;
  currentMonth: PickerValidDate;
  selectedDays: (PickerValidDate | null)[];
  onSelectedDaysChange: PickerOnChangeFn;
  focusedDay: PickerValidDate | null;
  isMonthSwitchingAnimating: boolean;
  onFocusedDayChange: (newFocusedDay: PickerValidDate) => void;
  onMonthSwitchingAnimationEnd: () => void;
  reduceAnimations: boolean;
  slideDirection: SlideDirection;
  TransitionProps?: Partial<SlideTransitionProps>;
  hasFocus: boolean;
  onFocusedViewChange?: (newHasFocus: boolean) => void;
  gridLabelId?: string;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<DayCalendarClasses>;
  /**
   * Overridable component slots.
   * @default {}
   */
  slots?: DayCalendarSlots;
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps?: DayCalendarSlotProps;
}

const useUtilityClasses = (classes: Partial<DateCalendarClasses> | undefined) => {
  const slots = {
    root: ['root'],
    header: ['header'],
    weekDayLabel: ['weekDayLabel'],
    loadingContainer: ['loadingContainer'],
    slideTransition: ['slideTransition'],
    monthContainer: ['monthContainer'],
    weekContainer: ['weekContainer'],
    weekNumberLabel: ['weekNumberLabel'],
    weekNumber: ['weekNumber'],
  };

  return composeClasses(slots, getDayCalendarUtilityClass, classes);
};

const weeksContainerHeight = (DAY_SIZE + DAY_MARGIN * 2) * 6;

const PickerCalendarDayRoot = styled('div', {
  name: 'MuiDayCalendar',
  slot: 'Root',
})({});

const PickerCalendarDayHeader = styled('div', {
  name: 'MuiDayCalendar',
  slot: 'Header',
})({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const PickerCalendarWeekDayLabel = styled(Typography, {
  name: 'MuiDayCalendar',
  slot: 'WeekDayLabel',
})(({ theme }) => { throw new Error("STUB"); });

const PickerCalendarWeekNumberLabel = styled(Typography, {
  name: 'MuiDayCalendar',
  slot: 'WeekNumberLabel',
})(({ theme }) => { throw new Error("STUB"); });

const PickerCalendarWeekNumber = styled(Typography, {
  name: 'MuiDayCalendar',
  slot: 'WeekNumber',
})(({ theme }) => { throw new Error("STUB"); });

const PickerCalendarLoadingContainer = styled('div', {
  name: 'MuiDayCalendar',
  slot: 'LoadingContainer',
})({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: weeksContainerHeight,
});

const PickerCalendarSlideTransition = styled(PickersSlideTransition, {
  name: 'MuiDayCalendar',
  slot: 'SlideTransition',
})({
  minHeight: weeksContainerHeight,
});

const PickerCalendarWeekContainer = styled('div', {
  name: 'MuiDayCalendar',
  slot: 'MonthContainer',
})({ overflow: 'hidden' });

const PickerCalendarWeek = styled('div', {
  name: 'MuiDayCalendar',
  slot: 'WeekContainer',
})({
  margin: `${DAY_MARGIN}px 0`,
  display: 'flex',
  justifyContent: 'center',
});

function WrappedDay({
  parentProps,
  day,
  focusedDay,
  selectedDays,
  isDateDisabled,
  currentMonthNumber,
  isViewFocused,
  ...other
}: Pick<PickerDayProps, 'onFocus' | 'onBlur' | 'onKeyDown' | 'onDaySelect'> & {
  parentProps: DayCalendarProps;
  day: PickerValidDate;
  isViewFocused: boolean;
  focusedDay: PickerValidDate | null;
  selectedDays: PickerValidDate[];
  isDateDisabled: (date: PickerValidDate | null) => boolean;
  currentMonthNumber: number;
}) {
    throw new Error("STUB");
}

/**
 * @ignore - do not document.
 */
export function DayCalendar(inProps: DayCalendarProps) {
    throw new Error("STUB");
}
