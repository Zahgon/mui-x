import type { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import type { TimeViewWithMeridiem } from '../internals/models';

const timeViews: Record<TimeViewWithMeridiem, string> = {
  hours: 'گھنٹے',
  minutes: 'منٹ',
  seconds: 'سیکنڈ',
  meridiem: 'میریڈیم',
};

const urPKPickers: Partial<PickersLocaleText> = {
  // Calendar navigation
  previousMonth: 'پچھلا مہینہ',
  nextMonth: 'اگلا مہینہ',

  // View navigation
  openPreviousView: 'پچھلا ویو کھولیں',
  openNextView: 'اگلا ویو کھولیں',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    { throw new Error("STUB"); },

  // DateRange labels
  start: 'شروع',
  end: 'ختم',
  // startDate: 'Start date',
  // startTime: 'Start time',
  // endDate: 'End date',
  // endTime: 'End time',

  // Action bar
  cancelButtonLabel: 'کینسل',
  clearButtonLabel: 'کلئیر',
  okButtonLabel: 'اوکے',
  todayButtonLabel: 'آج',
  nextStepButtonLabel: 'مہینہ',

  // Toolbar titles
  datePickerToolbarTitle: 'تاریخ منتخب کریں',
  dateTimePickerToolbarTitle: 'تاریخ اور وقت منتخب کریں',
  timePickerToolbarTitle: 'وقت منتخب کریں',
  dateRangePickerToolbarTitle: 'تاریخوں کی رینج منتخب کریں',
  // timeRangePickerToolbarTitle: 'Select time range',

  // Clock labels
  clockLabelText: (view, formattedTime) =>
    { throw new Error("STUB"); },
  hoursClockNumberText: (hours) => { throw new Error("STUB"); },
  minutesClockNumberText: (minutes) => { throw new Error("STUB"); },
  secondsClockNumberText: (seconds) => { throw new Error("STUB"); },

  // Digital clock labels
  selectViewText: (view) => { throw new Error("STUB"); },

  // Calendar labels
  calendarWeekNumberHeaderLabel: 'ہفتہ نمبر',
  calendarWeekNumberHeaderText: 'نمبر',
  calendarWeekNumberAriaLabelText: (weekNumber) => { throw new Error("STUB"); },
  calendarWeekNumberText: (weekNumber) => { throw new Error("STUB"); },

  // Open Picker labels
  openDatePickerDialogue: (formattedDate) =>
    { throw new Error("STUB"); },
  openTimePickerDialogue: (formattedTime) =>
    { throw new Error("STUB"); },
  // openRangePickerDialogue: formattedRange => formattedRange ? `Choose range, selected range is ${formattedRange}` : 'Choose range',
  // fieldClearLabel: 'Clear',

  // Table labels
  timeTableLabel: 'وقت منتخب کریں',
  dateTableLabel: 'تاریخ منتخب کریں',

  // Field section placeholders
  // fieldYearPlaceholder: params => 'Y'.repeat(params.digitAmount),
  // fieldMonthPlaceholder: params => params.contentType === 'letter' ? 'MMMM' : 'MM',
  // fieldDayPlaceholder: () => 'DD',
  // fieldWeekDayPlaceholder: params => params.contentType === 'letter' ? 'EEEE' : 'EE',
  // fieldHoursPlaceholder: () => 'hh',
  // fieldMinutesPlaceholder: () => 'mm',
  // fieldSecondsPlaceholder: () => 'ss',
  // fieldMeridiemPlaceholder: () => 'aa',

  // View names
  // year: 'Year',
  // month: 'Month',
  // day: 'Day',
  // weekDay: 'Week day',
  // hours: 'Hours',
  // minutes: 'Minutes',
  // seconds: 'Seconds',
  // meridiem: 'Meridiem',

  // Common
  // empty: 'Empty',
};

export const urPK = getPickersLocalization(urPKPickers);
