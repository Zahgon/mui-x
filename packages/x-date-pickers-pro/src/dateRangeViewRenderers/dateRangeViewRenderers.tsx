import type { DateOrTimeViewWithMeridiem } from '@mui/x-date-pickers/internals';
import { isDatePickerView } from '@mui/x-date-pickers/internals';
import type { DateRangeCalendarProps } from '../DateRangeCalendar';
import { DateRangeCalendar } from '../DateRangeCalendar';

export interface DateRangeViewRendererProps<TView extends DateOrTimeViewWithMeridiem> extends Omit<
  DateRangeCalendarProps,
  'views' | 'onRangePositionChange' | 'rangePosition' | 'defaultRangePosition'
> {
  views: readonly TView[];
}

/**
 * We don't pass all the props down to `DateRangeCalendar`,
 * because otherwise some unwanted props would be passed to the HTML element.
 */
export const renderDateRangeViewCalendar = ({
  views,
  view,
  onViewChange,
  focusedView,
  onFocusedViewChange,
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minDate,
  maxDate,
  shouldDisableDate,
  reduceAnimations,
  onMonthChange,
  calendars,
  currentMonthCalendarPosition,
  slots,
  slotProps,
  loading,
  renderLoading,
  disableHighlightToday,
  readOnly,
  disabled,
  showDaysOutsideCurrentMonth,
  dayOfWeekFormatter,
  disableAutoMonthSwitching,
  sx,
  autoFocus,
  fixedWeekNumber,
  disableDragEditing,
  displayWeekNumber,
  timezone,
  availableRangePositions,
}: DateRangeViewRendererProps<'day'>) => { throw new Error("STUB"); };
