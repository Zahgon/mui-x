import type { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import type { TimeViewWithMeridiem } from '../internals/models';

const views: Record<TimeViewWithMeridiem, string> = {
  hours: 'ساعت‌ها',
  minutes: 'دقیقه‌ها',
  seconds: 'ثانیه‌ها',
  meridiem: 'نیم‌روز',
};

const faIRPickers: Partial<PickersLocaleText> = {
  // Calendar navigation
  previousMonth: 'ماه گذشته',
  nextMonth: 'ماه آینده',

  // View navigation
  openPreviousView: 'نمای قبلی',
  openNextView: 'نمای بعدی',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    { throw new Error("STUB"); },

  // DateRange labels
  start: 'شروع',
  end: 'پایان',
  startDate: 'تاریخ شروع',
  startTime: 'زمان شروع',
  endDate: 'تاریخ پایان',
  endTime: 'زمان پایان',

  // Action bar
  cancelButtonLabel: 'لغو',
  clearButtonLabel: 'پاک کردن',
  okButtonLabel: 'تایید',
  todayButtonLabel: 'امروز',
  nextStepButtonLabel: 'آینده',

  // Toolbar titles
  datePickerToolbarTitle: 'تاریخ را انتخاب کنید',
  dateTimePickerToolbarTitle: 'تاریخ و زمان را انتخاب کنید',
  timePickerToolbarTitle: 'زمان را انتخاب کنید',
  dateRangePickerToolbarTitle: 'بازه تاریخی را انتخاب کنید',
  timeRangePickerToolbarTitle: 'بازه زمانی را انتخاب کنید',

  // Clock labels
  clockLabelText: (view, formattedTime) =>
    { throw new Error("STUB"); },
  hoursClockNumberText: (hours) => { throw new Error("STUB"); },
  minutesClockNumberText: (minutes) => { throw new Error("STUB"); },
  secondsClockNumberText: (seconds) => { throw new Error("STUB"); },

  // Digital clock labels
  selectViewText: (view) => { throw new Error("STUB"); },

  // Calendar labels
  calendarWeekNumberHeaderLabel: 'شماره هفته',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: (weekNumber) => { throw new Error("STUB"); },
  calendarWeekNumberText: (weekNumber) => { throw new Error("STUB"); },

  // Open Picker labels
  openDatePickerDialogue: (formattedDate) =>
    { throw new Error("STUB"); },
  openTimePickerDialogue: (formattedTime) =>
    { throw new Error("STUB"); },
  openRangePickerDialogue: (formattedRange) =>
    { throw new Error("STUB"); },
  fieldClearLabel: 'پاک کردن',

  // Table labels
  timeTableLabel: 'انتخاب زمان',
  dateTableLabel: 'انتخاب تاریخ',

  // Field section placeholders
  fieldYearPlaceholder: (params) => { throw new Error("STUB"); },
  fieldMonthPlaceholder: (params) => { throw new Error("STUB"); },
  fieldDayPlaceholder: () => { throw new Error("STUB"); },
  fieldWeekDayPlaceholder: (params) => { throw new Error("STUB"); },
  fieldHoursPlaceholder: () => { throw new Error("STUB"); },
  fieldMinutesPlaceholder: () => { throw new Error("STUB"); },
  fieldSecondsPlaceholder: () => { throw new Error("STUB"); },
  fieldMeridiemPlaceholder: () => { throw new Error("STUB"); },

  // View names
  year: 'سال',
  month: 'ماه',
  day: 'روز',
  weekDay: 'روز هفته',
  hours: 'ساعت‌ها',
  minutes: 'دقیقه‌ها',
  seconds: 'ثانیه‌ها',
  meridiem: 'نیم‌روز',

  // Common
  empty: 'خالی',
};

export const faIR = getPickersLocalization(faIRPickers);
