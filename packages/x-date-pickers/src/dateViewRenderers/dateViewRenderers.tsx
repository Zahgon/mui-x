import type { DateCalendarProps } from '../DateCalendar';
import { DateCalendar } from '../DateCalendar';
import type { DateView } from '../models';
import type { DateOrTimeViewWithMeridiem } from '../internals/models';
import { isDatePickerView } from '../internals/utils/date-utils';

export interface DateViewRendererProps<TView extends DateOrTimeViewWithMeridiem> extends Omit<
  DateCalendarProps,
  'views' | 'openTo' | 'view' | 'onViewChange' | 'focusedView'
> {
  view: TView;
  onViewChange?: (view: TView) => void;
  views: readonly TView[];
  focusedView: TView | null;
}

export const renderDateViewCalendar = ({
  view,
  onViewChange,
  views,
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
  shouldDisableMonth,
  shouldDisableYear,
  reduceAnimations,
  onMonthChange,
  monthsPerRow,
  onYearChange,
  yearsOrder,
  yearsPerRow,
  slots,
  slotProps,
  loading,
  renderLoading,
  disableHighlightToday,
  readOnly,
  disabled,
  showDaysOutsideCurrentMonth,
  dayOfWeekFormatter,
  sx,
  autoFocus,
  fixedWeekNumber,
  displayWeekNumber,
  timezone,
}: DateViewRendererProps<DateView>) => { throw new Error("STUB"); };
