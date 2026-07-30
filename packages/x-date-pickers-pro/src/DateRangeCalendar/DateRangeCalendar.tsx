'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import useEventCallback from '@mui/utils/useEventCallback';
import useMediaQuery from '@mui/material/useMediaQuery';
import resolveComponentProps from '@mui/utils/resolveComponentProps';
import useSlotProps from '@mui/utils/useSlotProps';
import { styled, useThemeProps } from '@mui/material/styles';
import composeClasses from '@mui/utils/composeClasses';
import useId from '@mui/utils/useId';
import { Watermark } from '@mui/x-license/internals';
import type {
  BaseDateValidationProps,
  DayCalendarSlots,
  DayCalendarSlotProps,
  PickerSelectionState,
  PickerRangeValue,
} from '@mui/x-date-pickers/internals';
import {
  DayCalendar,
  useReduceAnimations,
  useCalendarState,
  DEFAULT_DESKTOP_MODE_MEDIA_QUERY,
  useControlledValue,
  useViews,
  usePickerPrivateContext,
  areDatesEqual,
  useApplyDefaultValuesToDateValidationProps,
} from '@mui/x-date-pickers/internals';
import { warnOnce } from '@mui/x-internals/warning';
import type { PickerValidDate } from '@mui/x-date-pickers/models';
import { usePickerAdapter } from '@mui/x-date-pickers/hooks';
import type { DateRangeCalendarClasses } from './dateRangeCalendarClasses';
import {
  dateRangeCalendarClasses,
  getDateRangeCalendarUtilityClass,
} from './dateRangeCalendarClasses';
import type {
  DateRangeCalendarProps,
  DateRangeCalendarDefaultizedProps,
  DateRangeCalendarOwnerState,
} from './DateRangeCalendar.types';
import {
  isEndOfRange,
  isRangeValid,
  isStartOfRange,
  isWithinRange,
} from '../internals/utils/date-utils';
import {
  calculateRangeChange,
  calculateRangePreview,
  resolveReferenceDate,
} from '../internals/utils/date-range-manager';
import type { RangePosition } from '../models';
import { DateRangePickerDay, dateRangePickerDayClasses as dayClasses } from '../DateRangePickerDay';
import { rangeValueManager } from '../internals/utils/valueManagers';
import { useDragRange } from './useDragRange';
import { useRangePosition } from '../internals/hooks/useRangePosition';
import { DAY_RANGE_SIZE, DAY_MARGIN } from '../internals/constants/dimensions';
import type { PickersRangeCalendarHeaderProps } from '../PickersRangeCalendarHeader';
import { PickersRangeCalendarHeader } from '../PickersRangeCalendarHeader';
import { useNullablePickerRangePositionContext } from '../internals/hooks/useNullablePickerRangePositionContext';

const packageInfo = {
  releaseDate: '__RELEASE_INFO__',
  version: process.env.MUI_VERSION!,
  name: 'x-date-pickers-pro' as const,
};

const DateRangeCalendarRoot = styled('div', {
  name: 'MuiDateRangeCalendar',
  slot: 'Root',
})<{ ownerState: DateRangeCalendarOwnerState }>({
  display: 'flex',
  flexDirection: 'row',
});

const DateRangeCalendarMonthContainer = styled('div', {
  name: 'MuiDateRangeCalendar',
  slot: 'Container',
  overridesResolver: (_, styles) => { throw new Error("STUB"); }, // FIXME: Inconsistent naming with slot
})(({ theme }) => { throw new Error("STUB"); });

const weeksContainerHeight = (DAY_RANGE_SIZE + DAY_MARGIN * 2) * 6;

const InnerDayCalendarForRange = styled(DayCalendar, {
  slot: 'internal',
})(() => { throw new Error("STUB"); });

const DayCalendarForRange = InnerDayCalendarForRange as typeof DayCalendar;

function useDateRangeCalendarDefaultizedProps(
  props: DateRangeCalendarProps,
  name: string,
): DateRangeCalendarDefaultizedProps {
  const themeProps = useThemeProps({
    props,
    name,
  });
  const reduceAnimations = useReduceAnimations(themeProps.reduceAnimations);
  const validationProps = useApplyDefaultValuesToDateValidationProps(themeProps);

  return {
    ...themeProps,
    ...validationProps,
    renderLoading:
      themeProps.renderLoading ?? (() => { throw new Error("STUB"); }),
    reduceAnimations,
    loading: props.loading ?? false,
    openTo: themeProps.openTo ?? 'day',
    views: themeProps.views ?? ['day'],
    calendars: themeProps.calendars ?? 2,
    disableDragEditing: themeProps.disableDragEditing ?? false,
    availableRangePositions: themeProps.availableRangePositions ?? ['start', 'end'],
  };
}

const useUtilityClasses = (
  classes: Partial<DateRangeCalendarClasses> | undefined,
  ownerState: DateRangeCalendarOwnerState,
) => {
  const slots = {
    root: ['root'],
    monthContainer: ['monthContainer'],
    dayCalendar: [ownerState.isDraggingDay && 'dayDragging'],
  };

  return composeClasses(slots, getDateRangeCalendarUtilityClass, classes);
};

type DateRangeCalendarComponent = ((
  props: DateRangeCalendarProps & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element) & { propTypes?: any };

/**
 * Demos:
 *
 * - [DateRangePicker](https://mui.com/x/react-date-pickers/date-range-picker/)
 * - [DateRangeCalendar](https://mui.com/x/react-date-pickers/date-range-calendar/)
 *
 * API:
 *
 * - [DateRangeCalendar API](https://mui.com/x/api/date-pickers/date-range-calendar/)
 */
const DateRangeCalendar = React.forwardRef(function DateRangeCalendar(
  inProps: DateRangeCalendarProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as DateRangeCalendarComponent;

DateRangeCalendar.propTypes /* remove-proptypes */ = {
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
   * Range positions available for selection.
   * This list is checked against when checking if a next range position can be selected.
   *
   * Used on Date Time Range pickers with current `rangePosition` to force a `finish` selection after just one range position selection.
   * @default ['start', 'end']
   */
  availableRangePositions: PropTypes.arrayOf(PropTypes.oneOf(['end', 'start']).isRequired),
  /**
   * The number of calendars to render.
   * @default 2
   */
  calendars: PropTypes.oneOf([1, 2, 3]),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  className: PropTypes.string,
  /**
   * Position the current month is rendered in.
   * @default 1
   */
  currentMonthCalendarPosition: PropTypes.oneOf([1, 2, 3]),
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {PickerValidDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: PickerValidDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: PropTypes.func,
  /**
   * The initial position in the edited date range.
   * Used when the component is not controlled.
   * @default 'start'
   */
  defaultRangePosition: PropTypes.oneOf(['end', 'start']),
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: PropTypes.arrayOf(PropTypes.object),
  /**
   * If `true`, after selecting `start` date calendar will not automatically switch to the month of `end` date.
   * @default false
   */
  disableAutoMonthSwitching: PropTypes.bool,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, editing dates by dragging is disabled.
   * @default false
   */
  disableDragEditing: PropTypes.bool,
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
  focusedView: PropTypes.oneOf(['day']),
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
   * Callback fired when the range position changes.
   * @param {RangePosition} rangePosition The new range position.
   */
  onRangePositionChange: PropTypes.func,
  /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */
  onViewChange: PropTypes.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: PropTypes.oneOf(['day']),
  /**
   * The position in the currently edited date range.
   * Used when the component position is controlled.
   */
  rangePosition: PropTypes.oneOf(['end', 'start']),
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
  referenceDate: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object.isRequired),
    PropTypes.object,
  ]),
  /**
   * Component rendered on the "day" view when `props.loading` is true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => "…"
   */
  renderLoading: PropTypes.func,
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @param {PickerValidDate} day The date to test.
   * @param {string} position The date to test, 'start' or 'end'.
   * @returns {boolean} Returns `true` if the date should be disabled.
   */
  shouldDisableDate: PropTypes.func,
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
  value: PropTypes.arrayOf(PropTypes.object),
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: PropTypes.oneOf(['day']),
  /**
   * Available views.
   */
  views: PropTypes.arrayOf(PropTypes.oneOf(['day'])),
} as any;

export { DateRangeCalendar };
