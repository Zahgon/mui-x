import type { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';

// This object is not Partial<PickersLocaleText> because it is the default values

const enUSPickers: PickersLocaleText = {
  // Calendar navigation
  previousMonth: 'Previous month',
  nextMonth: 'Next month',

  // View navigation
  openPreviousView: 'Open previous view',
  openNextView: 'Open next view',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    { throw new Error("STUB"); },

  // DateRange labels
  start: 'Start',
  end: 'End',
  startDate: 'Start date',
  startTime: 'Start time',
  endDate: 'End date',
  endTime: 'End time',

  // Action bar
  cancelButtonLabel: 'Cancel',
  clearButtonLabel: 'Clear',
  okButtonLabel: 'OK',
  todayButtonLabel: 'Today',
  nextStepButtonLabel: 'Next',

  // Toolbar titles
  datePickerToolbarTitle: 'Select date',
  dateTimePickerToolbarTitle: 'Select date & time',
  timePickerToolbarTitle: 'Select time',
  dateRangePickerToolbarTitle: 'Select date range',
  timeRangePickerToolbarTitle: 'Select time range',

  // Clock labels
  clockLabelText: (view, formattedTime) =>
    { throw new Error("STUB"); },
  hoursClockNumberText: (hours) => { throw new Error("STUB"); },
  minutesClockNumberText: (minutes) => { throw new Error("STUB"); },
  secondsClockNumberText: (seconds) => { throw new Error("STUB"); },

  // Digital clock labels
  selectViewText: (view) => { throw new Error("STUB"); },

  // Calendar labels
  calendarWeekNumberHeaderLabel: 'Week number',
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
  fieldClearLabel: 'Clear',

  // Table labels
  timeTableLabel: 'pick time',
  dateTableLabel: 'pick date',

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
  year: 'Year',
  month: 'Month',
  day: 'Day',
  weekDay: 'Week day',
  hours: 'Hours',
  minutes: 'Minutes',
  seconds: 'Seconds',
  meridiem: 'Meridiem',

  // Common
  empty: 'Empty',
};

export const DEFAULT_LOCALE = enUSPickers;

export const enUS = getPickersLocalization(enUSPickers);
