import type { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import type { TimeViewWithMeridiem } from '../internals/models';

const views: Record<TimeViewWithMeridiem, string> = {
  hours: 'le ore',
  minutes: 'i minuti',
  seconds: 'i secondi',
  meridiem: 'il meridiano',
};

const itITPickers: Partial<PickersLocaleText> = {
  // Calendar navigation
  previousMonth: 'Mese precedente',
  nextMonth: 'Mese successivo',

  // View navigation
  openPreviousView: 'Apri la vista precedente',
  openNextView: 'Apri la vista successiva',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    { throw new Error("STUB"); },

  // DateRange labels
  start: 'Inizio',
  end: 'Fine',
  startDate: 'Data di inizio',
  startTime: 'Ora di inizio',
  endDate: 'Data di fine',
  endTime: 'Ora di fine',

  // Action bar
  cancelButtonLabel: 'Annulla',
  clearButtonLabel: 'Pulisci',
  okButtonLabel: 'OK',
  todayButtonLabel: 'Oggi',
  nextStepButtonLabel: 'Successivo',

  // Toolbar titles
  datePickerToolbarTitle: 'Seleziona data',
  dateTimePickerToolbarTitle: 'Seleziona data e orario',
  timePickerToolbarTitle: 'Seleziona orario',
  dateRangePickerToolbarTitle: 'Seleziona intervallo di date',
  timeRangePickerToolbarTitle: 'Seleziona intervallo di orari',

  // Clock labels
  clockLabelText: (view, formattedTime) =>
    { throw new Error("STUB"); },
  hoursClockNumberText: (hours) => { throw new Error("STUB"); },
  minutesClockNumberText: (minutes) => { throw new Error("STUB"); },
  secondsClockNumberText: (seconds) => { throw new Error("STUB"); },

  // Digital clock labels
  selectViewText: (view) => { throw new Error("STUB"); },

  // Calendar labels
  calendarWeekNumberHeaderLabel: 'Numero settimana',
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
  fieldClearLabel: 'Cancella valore',

  // Table labels
  timeTableLabel: "scegli un'ora",
  dateTableLabel: 'scegli una data',

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
  year: 'Anno',
  month: 'Mese',
  day: 'Giorno',
  weekDay: 'Giorno della settimana',
  hours: 'Ore',
  minutes: 'Minuti',
  seconds: 'Secondi',
  meridiem: 'Meridiano',

  // Common
  empty: 'Vuoto',
};

export const itIT = getPickersLocalization(itITPickers);
