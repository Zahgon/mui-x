import type { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import type { TimeViewWithMeridiem } from '../internals/models';

const timeViews: Record<TimeViewWithMeridiem, string> = {
  hours: 'timmar',
  minutes: 'minuter',
  seconds: 'sekunder',
  meridiem: 'meridiem',
};

const svSEPickers: Partial<PickersLocaleText> = {
  // Calendar navigation
  previousMonth: 'Föregående månad',
  nextMonth: 'Nästa månad',

  // View navigation
  openPreviousView: 'Öppna föregående vy',
  openNextView: 'Öppna nästa vy',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    { throw new Error("STUB"); },

  // DateRange labels
  start: 'Start',
  end: 'Slut',
  startDate: 'Startdatum',
  startTime: 'Starttid',
  endDate: 'Slutdatum',
  endTime: 'Sluttid',

  // Action bar
  cancelButtonLabel: 'Avbryt',
  clearButtonLabel: 'Rensa',
  okButtonLabel: 'OK',
  todayButtonLabel: 'Idag',
  nextStepButtonLabel: 'Nästa',

  // Toolbar titles
  datePickerToolbarTitle: 'Välj datum',
  dateTimePickerToolbarTitle: 'Välj datum & tid',
  timePickerToolbarTitle: 'Välj tid',
  dateRangePickerToolbarTitle: 'Välj datumintervall',
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
  calendarWeekNumberHeaderLabel: 'Vecka nummer',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: (weekNumber) => { throw new Error("STUB"); },
  calendarWeekNumberText: (weekNumber) => { throw new Error("STUB"); },

  // Open Picker labels
  openDatePickerDialogue: (formattedDate) =>
    { throw new Error("STUB"); },
  openTimePickerDialogue: (formattedTime) =>
    { throw new Error("STUB"); },
  // openRangePickerDialogue: formattedRange => formattedRange ? `Choose range, selected range is ${formattedRange}` : 'Choose range',
  fieldClearLabel: 'Rensa värde',

  // Table labels
  timeTableLabel: 'välj tid',
  dateTableLabel: 'välj datum',

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
  weekDay: 'Veckodag',
  hours: 'Timmar',
  minutes: 'Minuter',
  seconds: 'Sekunder',
  meridiem: 'Meridiem',

  // Common
  empty: 'Tom',
};

export const svSE = getPickersLocalization(svSEPickers);
