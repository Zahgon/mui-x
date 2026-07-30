import type { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import type { TimeViewWithMeridiem } from '../internals/models';

const views: Record<TimeViewWithMeridiem, string> = {
  hours: 'orduak',
  minutes: 'minutuak',
  seconds: 'segunduak',
  meridiem: 'meridianoa',
};

const euPickers: Partial<PickersLocaleText> = {
  // Calendar navigation
  previousMonth: 'Azken hilabetea',
  nextMonth: 'Hurrengo hilabetea',

  // View navigation
  openPreviousView: 'azken bista ireki',
  openNextView: 'hurrengo bista ireki',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    { throw new Error("STUB"); },

  // DateRange labels
  start: 'Hasi',
  end: 'Bukatu',
  // startDate: 'Start date',
  // startTime: 'Start time',
  // endDate: 'End date',
  // endTime: 'End time',

  // Action bar
  cancelButtonLabel: 'Utxi',
  clearButtonLabel: 'Garbitu',
  okButtonLabel: 'OK',
  todayButtonLabel: 'Gaur',
  nextStepButtonLabel: 'Hurrengo',

  // Toolbar titles
  datePickerToolbarTitle: 'Data aukeratu',
  dateTimePickerToolbarTitle: 'Data eta ordua aukeratu',
  timePickerToolbarTitle: 'Ordua aukeratu',
  dateRangePickerToolbarTitle: 'Data tartea aukeratu',
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
  calendarWeekNumberHeaderLabel: 'Astea zenbakia',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: (weekNumber) => { throw new Error("STUB"); },
  calendarWeekNumberText: (weekNumber) => { throw new Error("STUB"); },

  // Open Picker labels
  openDatePickerDialogue: (formattedDate) =>
    { throw new Error("STUB"); },
  openTimePickerDialogue: (formattedTime) =>
    { throw new Error("STUB"); },
  // openRangePickerDialogue: formattedRange => formattedRange ? `Choose range, selected range is ${formattedRange}` : 'Choose range',
  fieldClearLabel: 'Balioa garbitu',

  // Table labels
  timeTableLabel: 'ordua aukeratu',
  dateTableLabel: 'data aukeratu',

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

export const eu = getPickersLocalization(euPickers);
