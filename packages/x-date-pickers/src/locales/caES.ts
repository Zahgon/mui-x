import type { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import type { TimeViewWithMeridiem } from '../internals/models';

const views: Record<TimeViewWithMeridiem, string> = {
  hours: 'Hores',
  minutes: 'Minuts',
  seconds: 'Segons',
  meridiem: 'Meridià',
};

const caESPickers: Partial<PickersLocaleText> = {
  // Calendar navigation
  previousMonth: 'Mes anterior',
  nextMonth: 'Mes següent',

  // View navigation
  openPreviousView: "Obrir l'última vista",
  openNextView: 'Obrir la següent vista',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    { throw new Error("STUB"); },

  // DateRange labels
  start: 'Començar',
  end: 'Terminar',
  startDate: 'Data inicial',
  startTime: 'Hora inicial',
  endDate: 'Data final',
  endTime: 'Hora final',

  // Action bar
  cancelButtonLabel: 'Cancel·lar',
  clearButtonLabel: 'Netejar',
  okButtonLabel: 'OK',
  todayButtonLabel: 'Avuí',
  nextStepButtonLabel: 'Següent',

  // Toolbar titles
  datePickerToolbarTitle: 'Seleccionar data',
  dateTimePickerToolbarTitle: 'Seleccionar data i hora',
  timePickerToolbarTitle: 'Seleccionar hora',
  dateRangePickerToolbarTitle: 'Seleccionar rang de dates',
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
  calendarWeekNumberHeaderLabel: 'Número de la setmana',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: (weekNumber) => { throw new Error("STUB"); },
  calendarWeekNumberText: (weekNumber) => { throw new Error("STUB"); },

  // Open Picker labels
  openDatePickerDialogue: (formattedDate) =>
    { throw new Error("STUB"); },
  openTimePickerDialogue: (formattedTime) =>
    { throw new Error("STUB"); },
  // openRangePickerDialogue: formattedRange => formattedRange ? `Choose range, selected range is ${formattedRange}` : 'Choose range',
  fieldClearLabel: 'Netega el valor',

  // Table labels
  timeTableLabel: 'tria la data',
  dateTableLabel: "tria l'hora",

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
  year: 'Any',
  month: 'Mes',
  day: 'Dia',
  weekDay: 'Dia de la setmana',
  hours: 'Hores',
  minutes: 'Minuts',
  seconds: 'Segons',
  meridiem: 'Meridià',

  // Common
  empty: 'Buit',
};

export const caES = getPickersLocalization(caESPickers);
