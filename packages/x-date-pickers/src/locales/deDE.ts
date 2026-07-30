import type { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import type { TimeViewWithMeridiem } from '../internals/models';

// maps TimeView to its translation
const timeViews: Record<TimeViewWithMeridiem, string> = {
  hours: 'Stunden',
  minutes: 'Minuten',
  seconds: 'Sekunden',
  meridiem: 'Meridiem',
};

const deDEPickers: Partial<PickersLocaleText> = {
  // Calendar navigation
  previousMonth: 'Letzter Monat',
  nextMonth: 'Nächster Monat',

  // View navigation
  openPreviousView: 'Letzte Ansicht öffnen',
  openNextView: 'Nächste Ansicht öffnen',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    { throw new Error("STUB"); },

  // DateRange labels
  start: 'Beginn',
  end: 'Ende',
  startDate: 'Startdatum',
  startTime: 'Startzeit',
  endDate: 'Enddatum',
  endTime: 'Endzeit',

  // Action bar
  cancelButtonLabel: 'Abbrechen',
  clearButtonLabel: 'Löschen',
  okButtonLabel: 'OK',
  todayButtonLabel: 'Heute',
  nextStepButtonLabel: 'Nächster',

  // Toolbar titles
  datePickerToolbarTitle: 'Datum auswählen',
  dateTimePickerToolbarTitle: 'Datum & Uhrzeit auswählen',
  timePickerToolbarTitle: 'Uhrzeit auswählen',
  dateRangePickerToolbarTitle: 'Datumsbereich auswählen',
  timeRangePickerToolbarTitle: 'Zeitspanne auswählen',

  // Clock labels
  clockLabelText: (view, formattedTime) =>
    { throw new Error("STUB"); },
  hoursClockNumberText: (hours) => { throw new Error("STUB"); },
  minutesClockNumberText: (minutes) => { throw new Error("STUB"); },
  secondsClockNumberText: (seconds) => { throw new Error("STUB"); },

  // Digital clock labels
  selectViewText: (view) => { throw new Error("STUB"); },

  // Calendar labels
  calendarWeekNumberHeaderLabel: 'Kalenderwoche',
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
  fieldClearLabel: 'Wert leeren',

  // Table labels
  timeTableLabel: 'Uhrzeit auswählen',
  dateTableLabel: 'Datum auswählen',

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
  year: 'Jahr',
  month: 'Monat',
  day: 'Tag',
  weekDay: 'Wochentag',
  hours: 'Stunden',
  minutes: 'Minuten',
  seconds: 'Sekunden',
  meridiem: 'Tageszeit',

  // Common
  empty: 'Leer',
};

export const deDE = getPickersLocalization(deDEPickers);
