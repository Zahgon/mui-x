'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import useSlotProps from '@mui/utils/useSlotProps';
import { styled, useThemeProps } from '@mui/material/styles';
import composeClasses from '@mui/utils/composeClasses';
import useId from '@mui/utils/useId';
import useEventCallback from '@mui/utils/useEventCallback';
import type { DateCalendarProps, DateCalendarDefaultizedProps } from './DateCalendar.types';
import { useCalendarState } from './useCalendarState';
import { PickersFadeTransitionGroup } from './PickersFadeTransitionGroup';
import { DayCalendar } from './DayCalendar';
import { MonthCalendar } from '../MonthCalendar';
import { YearCalendar } from '../YearCalendar';
import { useViews } from '../internals/hooks/useViews';
import type { PickersCalendarHeaderProps } from '../PickersCalendarHeader';
import { PickersCalendarHeader } from '../PickersCalendarHeader';
import { findClosestEnabledDate, mergeDateAndTime } from '../internals/utils/date-utils';
import { PickerViewRoot } from '../internals/components/PickerViewRoot';
import { useReduceAnimations } from '../internals/hooks/useReduceAnimations';
import type { DateCalendarClasses } from './dateCalendarClasses';
import { getDateCalendarUtilityClass } from './dateCalendarClasses';
import type { BaseDateValidationProps } from '../internals/models/validation';
import { useControlledValue } from '../internals/hooks/useControlledValue';
import { singleItemValueManager } from '../internals/utils/valueManagers';
import { VIEW_HEIGHT } from '../internals/constants/dimensions';
import type { PickerOwnerState, PickerValidDate } from '../models';
import { usePickerPrivateContext } from '../internals/hooks/usePickerPrivateContext';
import { useApplyDefaultValuesToDateValidationProps } from '../managers/useDateManager';
import { usePickerAdapter } from '../hooks/usePickerAdapter';

const useUtilityClasses = (classes: Partial<DateCalendarClasses> | undefined) => {
  const slots = {
    root: ['root'],
    viewTransitionContainer: ['viewTransitionContainer'],
  };

  return composeClasses(slots, getDateCalendarUtilityClass, classes);
};

function useDateCalendarDefaultizedProps(
  props: DateCalendarProps,
  name: string,
): DateCalendarDefaultizedProps {
  const themeProps = useThemeProps({
    props,
    name,
  });
  const reduceAnimations = useReduceAnimations(themeProps.reduceAnimations);
  const validationProps = useApplyDefaultValuesToDateValidationProps(themeProps);

  return {
    ...themeProps,
    ...validationProps,
    loading: themeProps.loading ?? false,
    openTo: themeProps.openTo ?? 'day',
    views: themeProps.views ?? ['year', 'day'],
    reduceAnimations,
    renderLoading:
      themeProps.renderLoading ?? (() => { throw new Error("STUB"); }),
  };
}

const DateCalendarRoot = styled(PickerViewRoot, {
  name: 'MuiDateCalendar',
  slot: 'Root',
})<{ ownerState: PickerOwnerState }>({
  display: 'flex',
  flexDirection: 'column',
  height: VIEW_HEIGHT,
});

const DateCalendarViewTransitionContainer = styled(PickersFadeTransitionGroup, {
  name: 'MuiDateCalendar',
  slot: 'ViewTransitionContainer',
})<{ ownerState: PickerOwnerState }>({});

type DateCalendarComponent = ((
  props: DateCalendarProps & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element) & { propTypes?: any };

/**
 * Demos:
 *
 * - [DatePicker](https://mui.com/x/react-date-pickers/date-picker/)
 * - [DateCalendar](https://mui.com/x/react-date-pickers/date-calendar/)
 * - [Validation](https://mui.com/x/react-date-pickers/validation/)
 *
 * API:
 *
 * - [DateCalendar API](https://mui.com/x/api/date-pickers/date-calendar/)
 */
export const DateCalendar = React.forwardRef(function DateCalendar(
  inProps: DateCalendarProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as DateCalendarComponent;

DateCalendar.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  className: PropTypes.string,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {PickerValidDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: PickerValidDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: PropTypes.func,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: PropTypes.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: PropTypes.bool,
  /**
   * If `true`, today's day is not highlighted.
   * @default false
   */
  disableHighlightToday: PropTypes.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: PropTypes.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: PropTypes.bool,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: PropTypes.number,
  /**
   * Controlled focused view.
   */
  focusedView: PropTypes.oneOf(['day', 'month', 'year']),
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: PropTypes.bool,
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: PropTypes.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: PropTypes.object,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: PropTypes.oneOf([3, 4]),
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TView The view type. Will be one of date or time views.
   * @param {TValue} value The new value.
   * @param {PickerSelectionState | undefined} selectionState Indicates if the date selection is complete.
   * @param {TView | undefined} selectedView Indicates the view in which the selection has been made.
   */
  onChange: PropTypes.func,
  /**
   * Callback fired on focused view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view to focus or not.
   * @param {boolean} hasFocus `true` if the view should be focused.
   */
  onFocusedViewChange: PropTypes.func,
  /**
   * Callback fired on month change.
   * @param {PickerValidDate} month The new month.
   */
  onMonthChange: PropTypes.func,
  /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */
  onViewChange: PropTypes.func,
  /**
   * Callback fired on year change.
   * @param {PickerValidDate} year The new year.
   */
  onYearChange: PropTypes.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: PropTypes.oneOf(['day', 'month', 'year']),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: PropTypes.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: PropTypes.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`.
   */
  referenceDate: PropTypes.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span>…</span>
   */
  renderLoading: PropTypes.func,
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @param {PickerValidDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: PropTypes.func,
  /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: PropTypes.func,
  /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: PropTypes.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: PropTypes.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: PropTypes.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: PropTypes.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: PropTypes.oneOf(['day', 'month', 'year']),
  /**
   * Available views.
   */
  views: PropTypes.arrayOf(PropTypes.oneOf(['day', 'month', 'year']).isRequired),
  /**
   * Years are displayed in ascending (chronological) order by default.
   * If `desc`, years are displayed in descending order.
   * @default 'asc'
   */
  yearsOrder: PropTypes.oneOf(['asc', 'desc']),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: PropTypes.oneOf([3, 4]),
} as any;
