import type { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import type { TimeViewWithMeridiem } from '../internals/models';

const timeViews: Record<TimeViewWithMeridiem, string> = {
  hours: 'timer',
  minutes: 'minutter',
  seconds: 'sekunder',
  meridiem: 'meridiem',
};

const nbNOPickers: Partial<PickersLocaleText> = {
  // Calendar navigation
  previousMonth: 'Forrige måned',
  nextMonth: 'Neste måned',

  // View navigation
  openPreviousView: 'Åpne forrige visning',
  openNextView: 'Åpne neste visning',
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
  datePickerToolbarTitle: 'Velg dato',
  dateTimePickerToolbarTitle: 'Velg dato & klokkeslett',
  timePickerToolbarTitle: 'Velg klokkeslett',
  dateRangePickerToolbarTitle: 'Velg datoperiode',
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
  calendarWeekNumberHeaderLabel: 'Ukenummer',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: (weekNumber) => { throw new Error("STUB"); },
  calendarWeekNumberText: (weekNumber) => { throw new Error("STUB"); },

  // Open Picker labels
  openDatePickerDialogue: (formattedDate) =>
    { throw new Error("STUB"); },
  openTimePickerDialogue: (formattedTime) =>
    { throw new Error("STUB"); },
  // openRangePickerDialogue: formattedRange => formattedRange ? `Choose range, selected range is ${formattedRange}` : 'Choose range',
  fieldClearLabel: 'Slett',

  // Table labels
  timeTableLabel: 'velg tid',
  dateTableLabel: 'velg dato',

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
  month: 'Måned',
  day: 'Dag',
  weekDay: 'Ukedag',
  hours: 'Timer',
  minutes: 'Minutter',
  seconds: 'Sekunder',
  meridiem: 'Meridiem',

  // Common
  empty: 'Tøm',
};

export const nbNO = getPickersLocalization(nbNOPickers);
