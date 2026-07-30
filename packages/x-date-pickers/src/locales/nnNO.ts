import type { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import type { TimeViewWithMeridiem } from '../internals/models';

const timeViews: Record<TimeViewWithMeridiem, string> = {
  hours: 'timar',
  minutes: 'minuttar',
  seconds: 'sekundar',
  meridiem: 'meridiem',
};

const nnNOPickers: Partial<PickersLocaleText> = {
  // Calendar navigation
  previousMonth: 'Forrige månad',
  nextMonth: 'Neste månad',

  // View navigation
  openPreviousView: 'Opne forrige visning',
  openNextView: 'Opne neste visning',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    { throw new Error("STUB"); },

  // DateRange labels
  start: 'Start',
  end: 'Slutt',
  startDate: 'Startdato',
  startTime: 'Starttid',
  endDate: 'Sluttdato',
  endTime: 'Slutttid',

  // Action bar
  cancelButtonLabel: 'Avbryt',
  clearButtonLabel: 'Fjern',
  okButtonLabel: 'OK',
  todayButtonLabel: 'I dag',
  nextStepButtonLabel: 'Neste',

  // Toolbar titles
  datePickerToolbarTitle: 'Vel dato',
  dateTimePickerToolbarTitle: 'Vel dato & klokkeslett',
  timePickerToolbarTitle: 'Vel klokkeslett',
  dateRangePickerToolbarTitle: 'Vel datoperiode',
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
  calendarWeekNumberHeaderLabel: 'Vekenummer',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: (weekNumber) => { throw new Error("STUB"); },
  calendarWeekNumberText: (weekNumber) => { throw new Error("STUB"); },

  // Open Picker labels
  openDatePickerDialogue: (formattedDate) =>
    { throw new Error("STUB"); },
  openTimePickerDialogue: (formattedTime) =>
    { throw new Error("STUB"); },
  // openRangePickerDialogue: formattedRange => formattedRange ? `Choose range, selected range is ${formattedRange}` : 'Choose range',
  fieldClearLabel: 'Fjern verdi',

  // Table labels
  timeTableLabel: 'vel tid',
  dateTableLabel: 'vel dato',

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
  year: 'År',
  month: 'Månad',
  day: 'Dag',
  weekDay: 'Vekedag',
  hours: 'Timar',
  minutes: 'Minuttar',
  seconds: 'Sekundar',
  meridiem: 'Meridiem',

  // Common
  empty: 'Tom',
};

export const nnNO = getPickersLocalization(nnNOPickers);
