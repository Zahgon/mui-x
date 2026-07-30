import type { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import type { TimeViewWithMeridiem } from '../internals/models';

const views: Record<TimeViewWithMeridiem, string> = {
  hours: 'heures',
  minutes: 'minutes',
  seconds: 'secondes',
  meridiem: 'méridien',
};

const frFRPickers: Partial<PickersLocaleText> = {
  // Calendar navigation
  previousMonth: 'Mois précédent',
  nextMonth: 'Mois suivant',

  // View navigation
  openPreviousView: 'Ouvrir la vue précédente',
  openNextView: 'Ouvrir la vue suivante',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    { throw new Error("STUB"); },

  // DateRange labels
  start: 'Début',
  end: 'Fin',
  startDate: 'Date de début',
  startTime: 'Heure de début',
  endDate: 'Date de fin',
  endTime: 'Heure de fin',

  // Action bar
  cancelButtonLabel: 'Annuler',
  clearButtonLabel: 'Vider',
  okButtonLabel: 'OK',
  todayButtonLabel: "Aujourd'hui",
  nextStepButtonLabel: 'Suivant',

  // Toolbar titles
  datePickerToolbarTitle: 'Choisir une date',
  dateTimePickerToolbarTitle: "Choisir la date et l'heure",
  timePickerToolbarTitle: "Choisir l'heure",
  dateRangePickerToolbarTitle: 'Choisir la plage de dates',
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
  calendarWeekNumberHeaderLabel: 'Semaine',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: (weekNumber) => { throw new Error("STUB"); },
  calendarWeekNumberText: (weekNumber) => { throw new Error("STUB"); },

  // Open Picker labels
  openDatePickerDialogue: (formattedDate) =>
    { throw new Error("STUB"); },
  openTimePickerDialogue: (formattedTime) =>
    { throw new Error("STUB"); },
  // openRangePickerDialogue: formattedRange => formattedRange ? `Choose range, selected range is ${formattedRange}` : 'Choose range',
  fieldClearLabel: 'Effacer la valeur',

  // Table labels
  timeTableLabel: "choix de l'heure",
  dateTableLabel: 'choix de la date',

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
  year: 'Année',
  month: 'Mois',
  day: 'Jour',
  weekDay: 'Jour de la semaine',
  hours: 'Heures',
  minutes: 'Minutes',
  seconds: 'Secondes',
  meridiem: 'Méridien',

  // Common
  empty: 'Vider',
};

export const frFR = getPickersLocalization(frFRPickers);
