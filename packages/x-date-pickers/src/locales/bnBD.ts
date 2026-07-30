import type { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import type { TimeViewWithMeridiem } from '../internals/models';

const views: Record<TimeViewWithMeridiem, string> = {
  hours: 'ঘণ্টা',
  minutes: 'মিনিট',
  seconds: 'সেকেন্ড',
  meridiem: 'এএম/পিএম',
};

const bnBDPickers: Partial<PickersLocaleText> = {
  // Calendar navigation
  previousMonth: 'আগের মাস',
  nextMonth: 'পরের মাস',

  // View navigation
  openPreviousView: 'আগের ভিউ খুলুন',
  openNextView: 'পরের ভিউ খুলুন',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    { throw new Error("STUB"); },

  // DateRange labels
  start: 'শুরু',
  end: 'শেষ',
  startDate: 'শুরুর তারিখ',
  startTime: 'শুরুর সময়',
  endDate: 'শেষের তারিখ',
  endTime: 'শেষের সময়',

  // Action bar
  cancelButtonLabel: 'বাতিল',
  clearButtonLabel: 'পরিষ্কার',
  okButtonLabel: 'ঠিক আছে',
  todayButtonLabel: 'আজ',
  nextStepButtonLabel: 'পরের',

  // Toolbar titles
  datePickerToolbarTitle: 'তারিখ নির্বাচন করুন',
  dateTimePickerToolbarTitle: 'তারিখ ও সময় নির্বাচন করুন',
  timePickerToolbarTitle: 'সময় নির্বাচন করুন',
  dateRangePickerToolbarTitle: 'তারিখের পরিসীমা নির্বাচন করুন',
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
  calendarWeekNumberHeaderLabel: 'সপ্তাহ সংখ্যা',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: (weekNumber) => { throw new Error("STUB"); },
  calendarWeekNumberText: (weekNumber) => { throw new Error("STUB"); },

  // Open Picker labels
  openDatePickerDialogue: (formattedDate) =>
    { throw new Error("STUB"); },
  openTimePickerDialogue: (formattedTime) =>
    { throw new Error("STUB"); },
  // openRangePickerDialogue: formattedRange => formattedRange ? `Choose range, selected range is ${formattedRange}` : 'Choose range',
  fieldClearLabel: 'পরিষ্কার',

  // Table labels
  timeTableLabel: 'সময় নির্বাচন করুন',
  dateTableLabel: 'তারিখ নির্বাচন করুন',

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
  year: 'বছর',
  month: 'মাস',
  day: 'দিন',
  weekDay: 'সপ্তাহের দিন',
  hours: 'ঘণ্টা',
  minutes: 'মিনিট',
  seconds: 'সেকেন্ড',
  meridiem: 'এএম/পিএম',

  // Common
  empty: 'ফাঁকা',
};

export const bnBD = getPickersLocalization(bnBDPickers);
